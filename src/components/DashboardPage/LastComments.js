import React from 'react';

const LastComments = ({ className }) => {
    return (
        <div className={`${className} mt-3 p-3 border border-dark`}>
            <div className="media">
                <div className="media-body">
                    <h5 className="mt-0">
                        Janusz Warsss
                        <small className="text-muted"> (21.10.2019) </small>
                        <small className="h6">nazwa posta</small>
                    </h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                    <div className="media mt-3 ml-5">
                        <div className="media-body">
                            <h5 className="mt-0">
                                Janusz Warsss{' '}
                                <small className="text-muted">21.10.2019</small>
                            </h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin. Cras purus
                            odio, vestibulum in vulputate at, tempus viverra
                            turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                    </div>
                </div>
            </div>
            <div className="media mt-3">
                <div className="media-body">
                    <h5 className="mt-0">
                        Janusz Warsss{' '}
                        <small className="text-muted">21.10.2019</small>
                    </h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                </div>
            </div>
        </div>
    );
};

export default LastComments;
