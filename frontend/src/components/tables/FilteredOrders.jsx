import React from 'react';
import Paper from '@material-ui/core/Paper/index';
import Table from '@material-ui/core/Table/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import TableRow from '@material-ui/core/TableRow/index';
import {API_URL} from "../../app-config";
import {Redirect} from 'react-router-dom';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

export class FilteredOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            root: {
                width: '100%',
                overflowX: 'auto',
            },
            table: {
                minWidth: 700,
            },
            orderList: [],
            redirectToAdd: false,
            redirectToEdit: false,
            order: '1',
            rowNames: ["Телефон", "Адрес доставки", "Вид доставки", "Дата заказа", "Получатель", "сумма", "номер посылки"],
            keys: ["phone", "adress", "deliveryType", "orderDate", "recipient", "summ", "trackNumber"]
        };

        this.isActive = this.isActive.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);

    }

    componentDidMount() {
        this.refreshTable();
    }

    refreshTable() {


        const myInint = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };

        fetch(API_URL + '/getAllOrders', myInint)
            .then(response => response.json())
            .then(data => {
                this.setState({orderList: data})
            })
            .catch(e => {
                alert('ERROR')
            });
    }

    isActive(bool) {
        return bool ? "Да" : "Нет";
    }

    handleRowClick(key) {
        this.setState({
                order:
                    this.state.orderList.filter((row) => {
                        return row.id === key
                    })[0]
            }
        );
        this.setState({redirectToEdit: true});
    }

    handleAddClick() {
        this.setState({redirectToAdd: true})
    }

    render() {
        const {orderList, rowNames, keys, order} = this.state;

        return (
            this.state.redirectToAdd ?
                <Redirect to="/newOrder" push/> :
                this.state.redirectToEdit ?
                    <Redirect to={{
                        pathname: "/editOrder",
                        state: {order}
                    }} push/> :
                    <React.Fragment>
                        <div className="add-button-circle">
                            <Fab color="primary" aria-label="Add" onClick={this.handleAddClick}>
                                <AddIcon className="add-button"/>
                            </Fab>
                        </div>
                        <Paper>
                            <Table>
                                <TableHead className="header-table-view">
                                    <TableRow key="head">
                                        {rowNames.map(row => (
                                            <TableCell key={row}>{row}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orderList.map(row => (
                                        <TableRow key={row.id} onClick={() => this.handleRowClick(row.id)}>
                                            {
                                                keys.map(bat => (
                                                    <TableCell
                                                        key={`${row.id}${bat}`}>{
                                                        typeof row[bat] == "boolean" ? this.isActive(row[bat]) :
                                                            !row[bat] ? "-" : row[bat]
                                                    }</TableCell>
                                                ))}
                                        </TableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </React.Fragment>)
    }
}

