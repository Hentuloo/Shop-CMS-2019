import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { connect } from 'react-redux';
import {
    createProject as createProjectAction,
    editProject as editProjectAction,
    deleteProject as deleteProjectAction,
} from 'store/actions';

import MainLayout from 'layouts/MainLayout';
import ProductsTable from 'components/ProductsTable';
import ProductEditor from 'components/ProductEditor';

const EditorBarButton = styled.button`
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
        activeElement: undefined,
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
                activeElement: id || undefined,
            };
        });
    };

    handleClickDeleteBtn = id => {
        const { deleteProject } = this.props;
        return deleteProject(id);
    };

    handleProductEditorAccept = ({
        id,
        index,
        image,
        name,
        amount,
        details,
    }) => {
        const { createProject, editProject } = this.props;
        this.handleChangeFlagEditor();
        if (id) {
            //edit product
            return editProject({
                id,
                index,
                image,
                name,
                amount,
                details,
            });
        }
        //create product
        return createProject({
            id: Math.floor(Math.random() * 100),
            index,
            image,
            name,
            amount,
            details,
        });
    };

    render() {
        const { products } = this.props;
        const { editorActive, activeElement } = this.state;
        return (
            <MainLayout>
                <div className="row pt-3">
                    <div className="col-6 col-md-3">
                        <button
                            onClick={() => this.handleClickEditBtn()}
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
                <ProductsTable
                    products={products}
                    onClickEditBtn={this.handleClickEditBtn}
                    onClickDeleteBtn={this.handleClickDeleteBtn}
                />
                <StyledProductEditor
                    active={editorActive}
                    className="bg-dark border-top border-white"
                    activeElement={products.find(
                        ({ id }) => id === activeElement,
                    )}
                    submitAction={this.handleProductEditorAccept}
                />
                <EditorBarButton
                    type="button"
                    aria-hidden="true"
                    className={`${
                        editorActive ? 'btn-light' : 'btn-dark'
                    } btn fa fa-tasks`}
                    editorActive={editorActive}
                    onClick={this.handleChangeFlagEditor}
                ></EditorBarButton>
            </MainLayout>
        );
    }
}

const mapStateToProps = ({ Products }) => ({
    products: Products,
});
const mapDispatchToProps = {
    createProject: createProjectAction,
    editProject: editProjectAction,
    deleteProject: deleteProjectAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Products);
