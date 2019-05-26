import React from 'react';
import {Button, ButtonToolbar, Col, Form, Row} from 'react-bootstrap';
import {API_URL} from "../../app-config";
import {Redirect} from 'react-router-dom';


export class EditDelivery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            minimalCost: '',
            phone: '',
            isActive: '',
            redirectToLogin: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCacel = this.handleCacel.bind(this);

    }

    componentDidMount() {

        const delivery = !this.props.location.state.delivery? null : this.props.location.state.delivery;

        console.log(delivery);

        this.setState(
                    {
                        id: delivery.id,
                        name: delivery.name,
                        minimalCost: delivery.minimalCost,
                        phone: delivery.phone,
                        isActive: delivery.isActive
                    });


    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const id = target.id;

        if (id == "minimalCost") {
            if (!parseFloat(value)) {
                target.isValid = false;
            } else {
                this.setState({minimalCost: parseFloat(value)})
            }
        } else {
            this.setState({
                [id]: value
            });
        }
        //console.log(this.state);
    }

    handleSubmit(event) {
        const body = JSON.stringify(this.state);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", 'application/json');

        const myInit = {
            method: 'PUT',
            mode: 'cors',
            headers: myHeaders,
            body: body
        };

        fetch(API_URL + '/editDelivery', myInit)
            .then(response => response.json())
            .then(response => {
                //this.setState({name: '', minimalCost: 0, phone: '', isActive: false});
                console.log(response);
                if (response === "OK") {
                    alert('Запись исправлена');
                    this.setState({
                        redirectToLogin: true
                    })
                } else {
                    alert('Что-то пошло не так!');
                }
            })
            .catch(e => {
                alert('error');
                console.log(e);
            });
        event.preventDefault();
    }

    handleCacel(event) {
        console.log('Cancel pressed')
        this.setState({redirectToLogin: true})
    }

    render() {
        const {id, name, minimalCost, phone, isActive} = this.state;
        return (
            <React.Fragment>
                {
                    this.state.redirectToLogin ?
                        <Redirect to="/delivery" push/> :
                        <Form onSubmit={this.handleSubmit} className="Creation-form">
                            <Form.Group>
                                <Row>
                                    <Form.Control
                                        defaultValue={id}
                                        id="id"
                                        readOnly
                                    />
                                    <Form.Label>Активна?</Form.Label>
                                    <Form.Check
                                        defaultValue={isActive}
                                        id="isActive"
                                        onChange={this.handleChange}
                                    />
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Название доставки</Form.Label>
                                        <Form.Control type="text" defaultValue={name} id='name'
                                                     />
                                    </Col>

                                    <Col>
                                        <Form.Label>Телефон</Form.Label>
                                        <Form.Control type="text" defaultValue={phone} id='phone'
                                                      onChange={this.handleChange}/>

                                        <Form.Label>Минимальная стоимость</Form.Label>
                                        <Form.Control type="text" defaultValue={minimalCost} id='minimalCost'
                                                      onChange={this.handleChange}/>
                                    </Col>
                                </Row>

                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <ButtonToolbar>
                                            <Button variant="primary" type='submit'>Сохранить</Button>
                                            <Button variant="link" onClick={this.handleCacel}>Отмена</Button>
                                        </ButtonToolbar>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                }
            </React.Fragment>);
    }
}
