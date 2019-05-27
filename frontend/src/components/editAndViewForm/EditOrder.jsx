import React from 'react';
import Paper from '@material-ui/core/Paper/index';
import Table from '@material-ui/core/Table/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import TableRow from '@material-ui/core/TableRow/index';
import {Form} from 'react-bootstrap';

export class EditOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adress: '',
            canvas: '',
            comment: '',
            cover: '',
            creator: '',
            delivery: '',
            havePatch: '',
            id: '',
            orderDate: '',
            orderDoneDate: '',
            orderState: '',
            payed: '',
            phone: '',
            recipient: '',
            sache: '',
            summ: '',
            trackNumber: '',
            states: {
                CREATED: "Создан",
                PROCESS: "Производится",
                SENDED: "Отправлен",
                DELIVERED: "Получен"
            }
        }

    }

    componentDidMount() {
        const order = !this.props.location.state.order ? null : this.props.location.state.order;

        console.log(order);
        if (order !== null) {
            console.log("In da if@")
            this.setState({
                    adress: order.adress,
                    canvas: order.canvas,
                    comment: order.comment,
                    cover: order.cover,
                    creator: order.creator,
                    delivery: order.delivery,
                    havePatch: order.havePatch,
                    id: order.id,
                    orderDate: order.orderDate,
                    orderDoneDate: order.orderDoneDate,
                    orderState: order.orderState,
                    payed: order.payed,
                    phone: order.phone,
                    recipient: order.recipient,
                    sache: order.sache,
                    summ: order.summ,
                    trackNumber: order.trackNumber
                }
            )
        }

        console.log(this.state);

    }


    render() {
        const {delivery, canvas, sache, cover, orderState, payed,adress,trackNumber} = this.state;
        return (
            <Paper>
                <Form>
                    <Table>
                        <TableHead className="header-table-view">
                            <TableRow key="head">
                                <TableCell align="center">
                                    Материал маски
                                </TableCell>
                                <TableCell align="center">
                                    Саше
                                </TableCell>
                                <TableCell align="center">
                                    Чехол
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell id="canvas">
                                    <Form.Control as="select" defaultValue={canvas.name}>
                                        <option key="0" id="0">{canvas.name}</option>
                                        <option key="1" id="1">One</option>
                                        <option key="2" id="2">Two</option>
                                        <option key="3" id="3">Three</option>
                                    </Form.Control>
                                </TableCell>
                                <TableCell id="sache">
                                    <Form.Control as="select" defaultValue={sache.name}>
                                        <option key="0" id="0">{sache.name}</option>
                                        <option key="1" id="1">One</option>
                                        <option key="2" id="2">Two</option>
                                        <option key="3" id="3">Three</option>
                                    </Form.Control>
                                </TableCell>
                                <TableCell id="cover">
                                    <Form.Control as="select" defaultValue={cover.name}>
                                        <option key="0" id="0">{cover.name}</option>
                                        <option key="1" id="1">One</option>
                                        <option key="2" id="2">Two</option>
                                        <option key="3" id="3">Three</option>
                                    </Form.Control>
                                </TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell align="right"> Доставка:</TableCell>
                                <TableCell>
                                    <Form.Control as="select" defaultValue={delivery.name}>
                                        <option key="0" id="0">{delivery.name}</option>
                                        <option key="1" id="1">One</option>
                                        <option key="2" id="2">Two</option>
                                        <option key="3" id="3">Three</option>
                                    </Form.Control>
                                </TableCell>
                                <TableCell>
                                    Минимальная стоимость {delivery.minimalCost}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Статус:</TableCell>
                                <TableCell>{orderState}</TableCell>
                                <TableCell>{payed ? "Оплачен" : "Не оплачен"}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >
                                    Адрес доставки:{adress}
                                </TableCell>
                                <TableCell>
                                    <Form.Control
                                        // TODO: Добавить обработчики в форму и запилить кнопку-отправитель. Чекбокс на "Оплачен/не Оплачен
                                        value={trackNumber}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Form>
            </Paper>
        )

    }
}