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

export class SacheList extends React.Component {
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
            deliveryList: [],
            redirectToLogin: false
        };

        this.isActive = this.isActive.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    componentDidMount() {

        const myInint = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };

        fetch(API_URL + '/getSache', myInint)
            .then(response => response.json())
            .then(data => {
                this.setState({deliveryList: data})
            })
            .catch(e => {
                alert('ERROR')
            });

        //console.log(JSON.stringify(this.state))
    }

    isActive(bool) {
        return bool ? "Да" : "Нет";
    }

    handleAddClick() {
        this.setState({redirectToLogin: true})
    }

    render() {
        const rows = this.state.deliveryList;
        return (
            this.state.redirectToLogin ?
                <Redirect to="/newSache" push/> :
                <React.Fragment>
                    <Fab color="primary" aria-label="Add" onClick={this.handleAddClick}>
                        <AddIcon/>
                    </Fab>
                    <Paper className='!fsdfsdf!'>
                        <Table className='!SDAD!'>
                            <TableHead className="header-table-view">
                                <TableRow>
                                    <TableCell>Название материала</TableCell>
                                    <TableCell align="left">Стоимость</TableCell>
                                    <TableCell align="right">Есть в продаже?</TableCell>
                                    <TableCell align="right">Описание</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left">{row.cost}</TableCell>
                                        <TableCell align="right">{this.isActive(row.isInStore)}</TableCell>
                                        <TableCell align="right">{row.description}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </React.Fragment>)
    }
}