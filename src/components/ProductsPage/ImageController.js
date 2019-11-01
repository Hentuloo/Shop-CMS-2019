import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Constants from 'config/Constants';

const ImagesWrapper = styled.div`
    display: grid;
    max-height: 200px;
    gap: 4px;
    margin: 10px;
    grid-auto-flow: column;
    justify-items: center;
    ${({ childrenLenght }) => {
        if (childrenLenght > 4)
            return css`
                max-height: none;
                grid-template-columns: repeat(4, 1fr);
                grid-auto-flow: row;
            `;
    }}

    img {
        max-width: 100%;
        max-height: 200px;
        min-height: 50px;
        &.active {
            border: 5px solid ${({ theme }) => theme.color.info};
            border-radius: 0.25rem;
        }
    }
`;

class ImageController extends Component {
    state = {
        images: [
            // {
            //     src: '',
            //     title: '',
            // },
        ],
        collapseActive: false,
        activeImageIndex: null,
    };
    componentDidUpdate() {
        const { images: propsImages } = this.props;
        const { images: stateImages } = this.state;
        if (JSON.stringify(propsImages) !== JSON.stringify(stateImages)) {
            this.setState({
                images: this.props.images,
                activeImageIndex: null,
                collapseActive: false,
            });
        }
    }
    handleToggleImage = index => {
        const { activeImageIndex } = this.state;
        if (index === activeImageIndex) {
            return this.setState({
                collapseActive: false,
                activeImageIndex: null,
            });
        }

        this.setState({ collapseActive: true, activeImageIndex: index });
    };
    handleAddImage = e => {
        const { updateImage } = this.props;
        const { images } = this.state;

        const withNewImage = [
            ...images,
            {
                src: '',
                title: '',
            },
        ];
        this.setState({
            collapseActive: true,
            activeImageIndex: withNewImage.length - 1,
            images: withNewImage,
        });

        return updateImage(withNewImage);
    };

    handleImageChangeValue = e => {
        const { value, name } = e.target;
        const { updateImage } = this.props;
        const { images, activeImageIndex } = this.state;
        if (activeImageIndex !== null) {
            if (value !== images[activeImageIndex][name]) {
                const imagesFromState = images;
                imagesFromState[activeImageIndex][name] = value;
                this.setState({
                    images: imagesFromState,
                });
                return updateImage(imagesFromState);
            }
        }
    };
    render() {
        const { images, collapseActive, activeImageIndex } = this.state;
        return (
            <>
                {images.length > 0 && (
                    <ImagesWrapper childrenLenght={images.length}>
                        {images.map(({ src, title }, index) => (
                            <img
                                key={index}
                                role="button"
                                className={`${
                                    activeImageIndex === index
                                        ? 'active'
                                        : 'img-thumbnail'
                                } cursor-pointer text-dark`}
                                onClick={() => this.handleToggleImage(index)}
                                src={src || Constants.en.DEFAULTS.img}
                                alt={title}
                            />
                        ))}
                    </ImagesWrapper>
                )}

                {images.length === 0 && (
                    <button
                        type="button"
                        className="btn btn-info d-block mx-auto my-2 py-1 px-2"
                        onClick={this.handleAddImage}
                    >
                        <span
                            className="fa fa-picture-o h4 m-0"
                            aria-hidden="true"
                        />
                    </button>
                )}
                {images.length > 0 && images.length < 8 && (
                    <button
                        type="button"
                        className="btn btn-info d-block mx-auto my-2 py-1 px-2"
                        onClick={this.handleAddImage}
                    >
                        <span className="fa fa-plus" aria-hidden="true" />
                    </button>
                )}
                <div className={`${collapseActive ? 'd-block' : 'd-none'}`}>
                    <div className="text-center">
                        <div>
                            <label className="py-2" htmlFor="imageHref">
                                {Constants.en.TEXT.imgHref}
                            </label>
                            <input
                                name="src"
                                type="text"
                                className="form-control d-inline-block w-50 mx-auto"
                                id="imageHref"
                                value={
                                    activeImageIndex !== null
                                        ? images[activeImageIndex].src
                                        : ''
                                }
                                onChange={this.handleImageChangeValue}
                            />
                        </div>
                        <div>
                            <label className="py-2" htmlFor="imageTitle">
                                {Constants.en.TEXT.imgTitle}
                            </label>
                            <input
                                name="title"
                                type="text"
                                className="form-control d-inline-block w-50 mx-auto"
                                id="imageTitle"
                                value={
                                    activeImageIndex !== null
                                        ? images[activeImageIndex].title
                                        : ''
                                }
                                onChange={this.handleImageChangeValue}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ImageController;
