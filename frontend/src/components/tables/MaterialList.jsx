import React from 'react';
import Paper from '@material-ui/core/Paper/index';
import Table from '@material-ui/core/Table/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import TableRow from '@material-ui/core/TableRow/index';
import {API_URL} from "../../app-config";

export class MaterialList extends React.Component {
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
            rows: [],
            deliveryList: []
        };

        this.isActive = this.isActive.bind(this);
    }

    componentDidMount() {

        const myInint = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };

        fetch(API_URL + '/getCanvas', myInint)
            .then(response => response.json())
            .then(data => {this.setState({deliveryList: data})})
            .catch(e =>{alert('ERROR')});

        //console.log(JSON.stringify(this.state))
    }

    isActive (bool){
        return bool ? "Да" : "Нет";
    }

    render() {
        const rows = this.state.deliveryList;
        return (
            <React.Fragment>
                <Paper className='!fsdfsdf!'>
                    <Table className='!SDAD!'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Название материала</TableCell>
                                <TableCell align="right">Стоимость</TableCell>
                                <TableCell align="right">Есть в продаже?</TableCell>
                                <TableCell align="right">Архивный?</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.cost}</TableCell>
                                    <TableCell align="right">{this.isActive(row.isInStore)}</TableCell>
                                    <TableCell align="right">{ this.isActive(row.isArchieved)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>)
    }
}