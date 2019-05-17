import React from "react";
import ReactTable from 'react-table';
import { API_URL } from "../app-config";
import { OrderModal } from "./OrderModal";
import 'react-table/react-table.css';

export class OrderList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showCreateModal: false,
            isLoading: true,
            orders: []
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleUpdateTable = this.handleUpdateTable.bind(this);
    }

    componentDidMount() {
        this.refreshTable();
    }

    refreshTable () {
        return fetch(API_URL + "/getAllOrders")
            .then(response => response.json())
            .then(data => {
                this.setState({ orders: data, isLoading: false });
            });
    }

    handleOpenModal() {
        this.setState({ showCreateModal: true });
    }

    handleCloseModal() {
        this.setState({ showCreateModal: false });
    }

    handleUpdateTable () {
        this.refreshTable();
    }

    render() {

        const data = this.state.orders;

        const columns = [
            {
                Header: '№пп',
                index: true,
                accessor: 'id'
            }, {
                Header: 'Адрес доставки',
                accessor: 'adress'
            }, {
                Header: 'Статус',
                accessor: 'orderState'
            }, {
                Header: 'Идентификатор материала',
                accessor: 'canvasId'
            }, {
                Header: 'Идентификатор саше',
                accessor: 'sacheId'
            }, {
                Header: 'Нужен патч?',
                accessor: 'havePatch',
                aggregated: true
            }, {
                Header: 'Телефон',
                accessor: 'phone'
            }];

        return (
            <React.Fragment>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={5}
                    showPaginationTop={true}
                    showPaginationBottom={false}
                />

                <button onClick={this.handleOpenModal}>Создать</button>

                <OrderModal
                    isOpen={this.state.showCreateModal}
                    onCloseModal={this.handleCloseModal}
                    onUpdateTable={this.handleUpdateTable}
                />
            </React.Fragment>
        );
    }
}