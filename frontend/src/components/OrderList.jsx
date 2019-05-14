import * as React from "react";
import ReactTable from 'react-table';
import {API_URL} from "../app-config";
import {OrderForm} from "./OrderForm";


export class OrderList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            orders: []
        }

    }


    componentDidMount() {
        fetch(API_URL + "/getAllOrders")
            .then(response => response.json())
            .then(data => {
                this.setState({orders: data, isLoading: false});
            })
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

        return <div><ReactTable
            data={data}
            columns={columns}
            defaultPageSize={5}
            showPaginationTop={true}
            showPaginationBottom={false}
        />

        </div>

    }

}