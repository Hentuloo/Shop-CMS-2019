import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import MainLayout from 'layouts/MainLayout';
import ProductsTable from 'components/ProductsTable';
import ProductEditor from 'components/ProductEditor';

const EditorButton = styled.button`
    position: fixed;
    right: 0%;
    top: 100px;
    border-radius: 0px;
    padding-right: 20px;
    font-size: 1.6rem;
    @media ${({ theme }) => theme.mq.md} {
        top: 3%;
    }
`;

const StyledProductEditor = styled(ProductEditor)`
    position: fixed;
    width: 100vw;
    height: calc(100vh - 85px);
    top: 85px;
    left: 0%;
    border-width: 3px !important;
    transition: transform 0.4s ease-in;
    transform: translateX(110%);
    @media ${({ theme }) => theme.mq.md} {
        top: 0px;
        left: 100%;
        height: 100vh;
        width: 50vw;
        transform: translateX(0%);
        border-width: 0px !important;
    }
    @media ${({ theme }) => theme.mq.lg} {
        width: 40vw;
    }
    ${({ active }) =>
        active &&
        css`
            transform: translateX(0%);
            @media ${({ theme }) => theme.mq.md} {
                transform: translateX(-100%);
            }
        `}
`;

class Products extends Component {
    state = {
        editorActive: false,
        activeElement: null,
    };

    handleChangeFlagEditor = () => {
        this.setState(prevState => {
            return { editorActive: !prevState.editorActive };
        });
    };
    handleClickEditBtn = id => {
        this.setState(prevState => {
            return {
                editorActive: !prevState.editorActive,
                activeElement: id && null,
            };
        });
    };

    render() {
        const { editorActive } = this.state;
        return (
            <MainLayout>
                <div className="row pt-3">
                    <div className="col-6 col-md-3">
                        <button
                            onClick={this.handleClickEditBtn}
                            type="button"
                            className="btn bg-light d-flex flex-column align-items-center"
                        >
                            <span
                                className="fa fa-plus display-1"
                                aria-hidden="true"
                            />
                            <span>Nowy produkt</span>
                        </button>
                    </div>
                </div>
                <ProductsTable onClickEditBtn={this.handleClickEditBtn} />
                <StyledProductEditor
                    active={editorActive}
                    className="bg-dark border-top border-white"
                />
                <EditorButton
                    type="button"
                    editorActive={editorActive}
                    onClick={this.handleChangeFlagEditor}
                    className={`${
                        editorActive ? 'btn-light' : 'btn-dark'
                    } btn fa fa-tasks`}
                    aria-hidden="true"
                ></EditorButton>
            </MainLayout>
        );
    }
}

export default Products;
