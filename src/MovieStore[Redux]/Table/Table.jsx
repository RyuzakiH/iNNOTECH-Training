import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import LikeButton from '../LikeButton/LikeButton';
import utils from '../../utils';
import './Table';

class Table extends React.Component {

    columnsNames = ['title', 'genre', 'stock', 'rate'];

    createColumns = () => {
        return this.columnsNames
            .map(key => {
                return {
                    dataField: key,
                    text: utils.capitalize(key),
                }
            })
            .concat([{
                dataField: 'likeButton',
                text: '',
                headerAlign: 'right',
                dataAlign: 'right',
                formatter: this.likeButtonFormatter,
            }, {
                dataField: 'deleteButton',
                text: '',
                headerAlign: 'right',
                dataAlign: 'right',
                formatter: this.deleteButtonFormatter
            }]);
    }

    likeButtonFormatter = (cell, row) =>
        <LikeButton liked={row.liked} onClick={() => this.props.onMovieLike(row._id)} />

    deleteButtonFormatter = (cell, row) =>
        <input type="button" className="btn btn-danger" value="Delete" onClick={() => this.props.onMovieDelete(row._id)} />

    options = {
        pageStartIndex: 1,
        sizePerPage: 3
    };

    render() {
        return (
            <BootstrapTable
                keyField='title'
                data={this.props.data}
                columns={this.createColumns()}
                hover={true}
                bordered={false}
                pagination={paginationFactory(this.options)}
            />
        );
    }

}

export default Table;
