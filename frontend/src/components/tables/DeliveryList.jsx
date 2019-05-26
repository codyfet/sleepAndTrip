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


export class DeliveryList extends React.Component {
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
            redirectToLogin: false,
            redirectToEdit: false,
            delivery: {},
            rowNames: ["Название доставки", "Телефон", "Минимальная стоимость", "Активна?"],
            keys: ["name", "phone", "minimalCost", "isActive"]
        };

        this.handleCellsValues = this.handleCellsValues.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    componentDidMount() {

        const myInint = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };

        fetch(API_URL + '/getDeliveryList', myInint)
            .then(response => response.json())
            .then(data => {
                this.setState({deliveryList: data})
            })
            .catch(e => {
                alert('ERROR')
            });

        //console.log(JSON.stringify(this.state))
    }

    handleCellsValues(bool) {
        if (typeof bool == "boolean") {
            return bool ? "Да" : "Нет"
        } else {
            return bool
        }
    }

    handleAddClick() {
        this.setState({redirectToLogin: true})
    }

    handleRowClick(key) {


        this.setState({
                delivery:
                    this.state.deliveryList.filter((row) => {
                        return row.id === key
                    })[0]
            }
        );
        this.setState({redirectToEdit: true});


    }

    render() {
        const {deliveryList, rowNames, keys, delivery} = this.state;

        return (
            this.state.redirectToLogin ?
                <Redirect to="/newDelivery" push/> :
                this.state.redirectToEdit ?
                    <Redirect to={{
                        pathname: "/editDelivery",
                        state: {delivery}
                    }} push/>
                    :

                    <React.Fragment>
                        <div className="add-button-circle">
                            <Fab color="primary" aria-label="Add" onClick={this.handleAddClick}>
                                <AddIcon/>
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
                                    {deliveryList.map(row => (
                                        <TableRow key={row.id} onClick={() => this.handleRowClick(row.id)}>
                                            {keys.map(key => (
                                                <TableCell key={`${row.id}${key}`}>
                                                    {!row[key] ? "-" : this.handleCellsValues(row[key])
                                                    }
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </React.Fragment>)
    }
}

