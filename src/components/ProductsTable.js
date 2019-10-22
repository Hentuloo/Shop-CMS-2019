import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 60px;
    @media ${({ theme }) => theme.mq.md} {
        width: 80px;
    }
`;

const ProductsTable = ({
    className,
    onClickEditBtn,
    onClickDeleteBtn,
    products,
}) => {
    return (
        <table className={`${className} table table-striped mt-4`}>
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col" className="d-none d-md-table-cell">
                        Amount
                    </th>
                    <th scope="col">Operations</th>
                </tr>
            </thead>
            <tbody>
                {products.map(({ id, image, name, amount }) => (
                    <tr key={id}>
                        <td>
                            <Image
                                src={image}
                                alt={`obraz: ${name}`}
                                className="img-thumbnail img-fluid"
                            />
                        </td>
                        <td>{name}</td>
                        <td className="d-none d-md-table-cell">{amount}</td>
                        <td className="row align-content-center p-3 p-md-4">
                            <button
                                onClick={() => onClickEditBtn(id)}
                                className=" btn btn-info py-1 px-3 mr-2"
                            >
                                <span className="fa fa-pencil mt-1 h4" />
                            </button>
                            <button
                                onClick={() => onClickDeleteBtn(id)}
                                className=" btn btn-info py-1 px-3"
                            >
                                <span className="fa fa-trash mt-1 h4" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductsTable;
