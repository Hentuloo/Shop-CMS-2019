import React from 'react';
import LazyLoad from 'react-lazyload';

const RefferBlocks = ({ className, reffers }) => {
    if (reffers.length) {
        return (
            <div className={`${className} my-4 row mx-2 text-center`}>
                {reffers.map(
                    ({
                        id,
                        title,
                        href,
                        image: { src, title: imageTitle },
                    }) => (
                        <div key={id} className="col-6 ">
                            <a
                                href={href}
                                className="btn bg-light mw-100"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LazyLoad>
                                    <img
                                        className="mw-100"
                                        src={src}
                                        alt={imageTitle}
                                    />
                                </LazyLoad>
                                <h5 className="card-title text-uppercase">
                                    {title}
                                </h5>
                            </a>
                        </div>
                    ),
                )}
            </div>
        );
    }
    return null;
};

export default RefferBlocks;
