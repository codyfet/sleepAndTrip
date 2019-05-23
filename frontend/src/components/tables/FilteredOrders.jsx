import React from 'react';
import Paper from '@material-ui/core/Paper/index';
import Table from '@material-ui/core/Table/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import TableRow from '@material-ui/core/TableRow/index';
import {API_URL} from "../../app-config";

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
            orderList: []
        };

        this.isActive = this.isActive.bind(this);
    }

    componentDidMount() {
        const rowNames =["Телефон", "Адрес доставки", "Вид доставки", "Дата заказа", "Получатель", "сумма", "номер посылки"];
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

    handleCick(event){
        const target = event.target;
        console.log(target);
    }

    render() {
        const {rowNames, dataKey, orderList} = this.state;
        return (
            <React.Fragment>
                <Paper className='!fsdfsdf!'>
                    <Table className='!SDAD!'>
                        <TableHead>
                            <TableRow key="head" >
                                {rowNames.map(row => (
                                    <TableCell key={row}>{row}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orderList.map(row => (
                                <TableRow key={row.id} onClick={this.handleCick}>
                                    {
                                        dataKey.map(bat => (
                                            <TableCell key={`${row.id}${bat}`}>{!row[bat] ? "-" : row[bat] }</TableCell>
                                        ))}
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>)
    }
}

