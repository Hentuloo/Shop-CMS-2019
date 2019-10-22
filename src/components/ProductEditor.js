import React from 'react';
import styled from 'styled-components';

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

const ProductEditor = ({ className }) => {
    return (
        <div className={`${className} text-white`}>
            <ImageWrapper>
                <img
                    className="img-thumbnail"
                    src="https://unsplash.it/300/300"
                    alt="obrazek"
                />
            </ImageWrapper>
            <div className="form-group p-0 my-1 d-flex text-center justify-content-center">
                <label className="py-2" htmlFor="indexOfProducts">
                    Index:
                </label>
                <input
                    min="1"
                    max="999999"
                    type="number"
                    className="form-control number w-auto ml-2"
                    id="indexOfProducts"
                />
            </div>
            <div className="form-group p-0 my-1 d-flex text-center justify-content-center">
                <label className="py-2" htmlFor="nameOfProducts">
                    Name:
                </label>
                <input
                    type="text"
                    placeholder="name of product"
                    className="form-control w-auto ml-1"
                    id="nameOfProducts"
                />
            </div>
            <div className="form-group p-0 my-1 d-flex text-center justify-content-center">
                <label className="py-2" htmlFor="AmountOfProducts">
                    Amount:
                </label>
                <input
                    min="1"
                    max="999999"
                    type="number"
                    className="form-control number w-auto ml-2"
                    id="AmountOfProducts"
                />
            </div>
            <TextareaGroup className="form-group">
                <label htmlFor="textareaDetails">Details:</label>
                <textarea
                    className="form-control"
                    id="textareaDetails"
                    rows="3"
                ></textarea>
            </TextareaGroup>
            <button
                type="button"
                className="btn btn-info d-block mx-auto mt-3 py-2 px-4"
            >
                Accept changes
            </button>
        </div>
    );
};

export default ProductEditor;
