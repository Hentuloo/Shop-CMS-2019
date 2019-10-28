import React from 'react';

import Constants from 'config/Constants';

const OrdersTable = ({
    clickDetailsButton,
    clickDeleteOrder,
    items: { orders, products },
}) => {
    return (
        <table className="table">
            <thead className="bg-light">
                <tr>
                    <th scope="col" className="px-0 px-md-3">
                        {Constants.en.TEXT.collProductList}
                    </th>
                    <th scope="col">{Constants.en.TEXT.collOrderDate}</th>
                    <th scope="col">{Constants.en.TEXT.collSendDetails}</th>
                </tr>
            </thead>
            <tbody>
                {orders &&
                    orders.map(order => {
                        const productsList = order.products.map(
                            ({ productId, amount }) => {
                                const { name } = products.find(
                                    ({ id }) => id === productId,
                                );
                                return (
                                    <li key={productId}>
                                        {`${name} `}
                                        <span className="font-weight-bold">{`Pieces: ${amount}`}</span>
                                    </li>
                                );
                            },
                        );

                        return (
                            <tr key={order.id}>
                                <td className="px-0 px-md-3">
                                    <ol className="pl-4 pl-md-5">
                                        {productsList}
                                    </ol>
                                </td>
                                <td>{order.date}</td>

                                <td>
                                    <button
                                        onClick={() =>
                                            clickDetailsButton(order.id)
                                        }
                                        className=" btn py-0 px-2"
                                    >
                                        {order.status === 1 && (
                                            <span className="fa bg-info fa-address-card py-1 px-2 mt-0 h3 rounded" />
                                        )}
                                        {order.status === 2 && (
                                            <span className="fa fa-question bg-warning py-1 px-3 mt-0 h3 rounded" />
                                        )}
                                        {order.status === 3 && (
                                            <span className="fa fa-check bg-success py-1 px-2 mt-0 h3 rounded" />
                                        )}
                                    </button>
                                    {clickDeleteOrder && (
                                        <button
                                            onClick={() =>
                                                clickDeleteOrder(order.id)
                                            }
                                            className="btn py-0 px-2"
                                        >
                                            <span className="fa fa-trash bg-danger  py-1 px-2 mt-0 h3 rounded" />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default OrdersTable;
