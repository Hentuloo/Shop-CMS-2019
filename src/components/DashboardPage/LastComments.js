import React from 'react';

const LastComments = ({ className, comments }) => {
    if (comments.length) {
        return (
            <div className={`${className} mt-3 p-1 p-md-3 px-0`}>
                <h3 className="mb-0 py-2 px-2 border-left border-width-3 border-info h4">
                    Ostatnie komentarze:
                </h3>
                {comments.map(
                    ({
                        id,
                        title,
                        url,
                        content: { autor, date, content, childrens },
                    }) => (
                        <div key={id} className="media ml-3 ml-md-4">
                            <div className="media-body ">
                                <h5 className="my-1">
                                    {autor}
                                    <small className="text-muted">
                                        {` (${date}) `}
                                    </small>
                                    <a
                                        href={url}
                                        className="btn btn-outline-dark bg-white py-0 px-2 ml-auto text-dark"
                                    >
                                        {title}
                                    </a>
                                </h5>
                                {content.length < 150 ? (
                                    content
                                ) : (
                                    <>
                                        {content.slice(0, 150)}
                                        <a href={url} className="text-muted">
                                            {' '}
                                            Read more...
                                        </a>
                                    </>
                                )}
                                {childrens.length &&
                                    childrens.map(({ id, autor, content }) => (
                                        <div
                                            key={id}
                                            className="media mt-1 mb-3 ml-5"
                                        >
                                            <div className="media-body border-left pl-2 border-width-1 border-secondary">
                                                <h5 className="my-0  ">
                                                    {autor}
                                                </h5>
                                                {content.length < 110
                                                    ? content
                                                    : ` ${content.slice(
                                                          0,
                                                          110,
                                                      )}...`}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ),
                )}
            </div>
        );
    }
    return null;
};

export default LastComments;
