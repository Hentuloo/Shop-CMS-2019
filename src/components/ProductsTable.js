import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 60px;
    @media ${({ theme }) => theme.mq.md} {
        width: 80px;
    }
`;

const ProductsTable = ({ className, onClickEditBtn }) => {
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
                <tr>
                    <td>
                        <Image
                            src="https://unsplash.it/200/200"
                            alt="..."
                            className="img-thumbnail img-fluid"
                        />
                    </td>
                    <td>Mark</td>
                    <td className="d-none d-md-table-cell">Otto</td>
                    <td className="row align-content-center p-3 p-md-4">
                        <button
                            onClick={() => onClickEditBtn(2)}
                            className=" btn btn-info py-1 px-3 mr-2"
                        >
                            <span className="fa fa-pencil mt-1 h4" />
                        </button>
                        <button className=" btn btn-info py-1 px-3">
                            <span className="fa fa-trash mt-1 h4" />
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Image
                            src="https://unsplash.it/200/200"
                            alt="..."
                            className="img-thumbnail d-block mw-10"
                        />
                    </td>
                    <td>Jacob</td>
                    <td className="d-none d-md-table-cell">Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td className="d-none d-md-table-cell">the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    );
};

export default ProductsTable;
