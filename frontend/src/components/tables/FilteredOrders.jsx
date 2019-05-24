import React from 'react';
import Paper from '@material-ui/core/Paper/index';
import Table from '@material-ui/core/Table/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import TableRow from '@material-ui/core/TableRow/index';
import {API_URL} from "../../app-config";
import {Redirect} from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
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
            rowNames: [],
            dataKey: [],
            orderList: [],
            redirectToLogin: false
        };

        this.isActive = this.isActive.bind(this);
        this.handleCick = this.handleCick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);

    }

    componentDidMount() {
        const rowNames = ["Телефон", "Адрес доставки", "Вид доставки", "Дата заказа", "Получатель", "сумма", "номер посылки"];
        const keys = ["phone", "adress", "deliveryType", "orderDate", "recipient", "summ", "trackNumber"];

        const myInint = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };

        fetch(API_URL + '/getAllOrders', myInint)
            .then(response => response.json())
            .then(data => {
                this.setState({orderList: data, rowNames: rowNames, dataKey: keys})
            })
            .catch(e => {
                alert('ERROR')
            });

        //console.log(JSON.stringify(this.state))
    }

    isActive(bool) {
        return bool ? "Да" : "Нет";
    }

    handleCick(key) {

        console.log(this.state.orderList.filter((row) => {
            return row.id == key
        })[0]);
    }


    handleAddClick() {
        this.setState({redirectToLogin: true})
    }

    render() {
        const {rowNames, dataKey, orderList} = this.state;
        return (
            this.state.redirectToLogin ?
                <Redirect to="/newOrder" push/> :
                <React.Fragment>
                    <Fab color="primary" aria-label="Add" onClick={this.handleAddClick}>
                        <AddIcon/>
                    </Fab>
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
                                    <TableRow key={row.id} onClick={() => this.handleCick(row.id)}>
                                        {
                                            dataKey.map(bat => (
                                                <TableCell
                                                    key={`${row.id}${bat}`}>{!row[bat] ? "-" : row[bat]}</TableCell>
                                            ))}
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </React.Fragment>)
    }
}

