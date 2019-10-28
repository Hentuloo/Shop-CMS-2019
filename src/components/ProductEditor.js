import React, { Component } from 'react';
import styled from 'styled-components';

import Constants from 'config/Constants';

const TextareaGroup = styled.div`
    width: 80%;
    margin: 0px auto;
`;

const ImageWrapper = styled.div`
    width: 80%;
    height: 100px;
    margin: 10px auto;
    text-align: center;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;
class ProductEditor extends Component {
    state = {
        id: null,
        index: '',
        name: '',
        amount: '',
        details: '',
        imageSrc: '',
        imageTitle: '',
    };
    componentDidUpdate(prevProps) {
        const prevActiveElement = prevProps.activeElement;
        const currentActiveElement = this.props.activeElement;
        if (prevActiveElement !== currentActiveElement) {
            if (currentActiveElement) {
                const {
                    id,
                    index,
                    image: { src, title },
                    name,
                    amount,
                    details,
                } = this.props.activeElement;
                return this.setState({
                    id,
                    index,
                    name,
                    amount,
                    details,
                    imageSrc: src,
                    imageTitle: title,
                });
            }
            return this.setState({
                id: null,
                index: '',
                image: '',
                name: '',
                amount: '',
                details: '',
                imageSrc: '',
                imageTitle: '',
            });
        }
    }

    handleChangeValue = e => {
        const { value, name } = e.target;

        if (value !== this.state[name]) {
            this.setState({ [[name]]: value });
        }
    };

    handleSubmitAction = () => {
        const { submitAction } = this.props;
        const {
            id,
            index,
            name,
            amount,
            details,
            imageSrc,
            imageTitle,
        } = this.state;
        submitAction({
            id,
            index,
            image: { src: imageSrc, title: imageTitle },
            name,
            amount,
            details,
        });
    };
    render() {
        const { className, activeElement } = this.props;
        const {
            index,
            name,
            amount,
            details,
            imageSrc,
            imageTitle,
        } = this.state;

        return (
            <div
                className={`${className} text-white overflow-auto pb-5 pb-md-2`}
            >
                <ImageWrapper
                    data-toggle="collapse"
                    role="button"
                    data-target="#imageCollapse"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    className="cursor-pointer"
                >
                    <img
                        className="img-thumbnail"
                        src={imageSrc || Constants.en.DEFAULTS.img}
                        alt="obrazek"
                    />
                </ImageWrapper>
                <div id="imageCollapse" className="collapse">
                    <div className="text-center">
                        <div>
                            <label className="py-2" htmlFor="imageHref">
                                {Constants.en.TEXT.imgHref}
                            </label>
                            <input
                                name="imageSrc"
                                min="1"
                                max="999999"
                                type="text"
                                className="form-control d-inline-block w-50 mx-auto"
                                id="imageHref"
                                value={imageSrc}
                                onChange={this.handleChangeValue}
                            />
                        </div>
                        <div>
                            <label className="py-2" htmlFor="imageTitle">
                                {Constants.en.TEXT.imgTitle}
                            </label>
                            <input
                                name="imageTitle"
                                min="1"
                                max="999999"
                                type="text"
                                className="form-control d-inline-block w-50 mx-auto"
                                id="imageTitle"
                                value={imageTitle}
                                onChange={this.handleChangeValue}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group p-0 my-1 d-flex text-center justify-content-center">
                    <label className="py-2" htmlFor="indexOfProducts">
                        {Constants.en.TEXT.index}
                    </label>
                    <input
                        name="index"
                        min="1"
                        max="999999"
                        type="number"
                        className="form-control number w-auto ml-2"
                        id="indexOfProducts"
                        value={index}
                        onChange={this.handleChangeValue}
                    />
                </div>
                <div className="form-group p-0 my-1 d-flex text-center justify-content-center">
                    <label className="py-2" htmlFor="nameOfProducts">
                        {Constants.en.TEXT.name}
                    </label>
                    <input
                        name="name"
                        type="text"
                        className="form-control w-auto ml-1"
                        id="nameOfProducts"
                        value={name}
                        onChange={this.handleChangeValue}
                    />
                </div>
                <div className="form-group p-0 my-1 d-flex text-center justify-content-center">
                    <label className="py-2" htmlFor="AmountOfProducts">
                        {Constants.en.TEXT.Amount}
                    </label>
                    <input
                        name="amount"
                        min="1"
                        max="999999"
                        type="number"
                        className="form-control number w-auto ml-2"
                        id="AmountOfProducts"
                        value={amount}
                        onChange={this.handleChangeValue}
                    />
                </div>
                <TextareaGroup className="form-group">
                    <label htmlFor="textareaDetails">
                        {Constants.en.TEXT.Details}
                    </label>
                    <textarea
                        name="details"
                        className="form-control"
                        id="textareaDetails"
                        rows="3"
                        value={details}
                        onChange={this.handleChangeValue}
                    ></textarea>
                </TextareaGroup>
                <button
                    type="button"
                    className="btn btn-info d-block mx-auto mt-3 py-2 px-4"
                    onClick={this.handleSubmitAction}
                >
                    {activeElement === undefined
                        ? Constants.en.TEXT.buttonNew
                        : Constants.en.TEXT.buttonEdit}
                </button>
            </div>
        );
    }
}

export default ProductEditor;
