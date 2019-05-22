import React from 'react';
import {Button, ButtonToolbar, Col, Form, Row} from 'react-bootstrap';
import {API_URL} from "../../app-config";
import {Redirect} from 'react-router-dom';

export class DeliveryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            minimalCost: 100,
            phone: '',
            isActive: false,
            //id : '',
            //previewurl: '',
            //viewurl: '',
            redirectToLogin: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCacel = this.handleCacel.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const id = target.id;

        if (id == "minimalCost") {
            if (!parseFloat(value)) {
                target.isValid = false;
            } else {
                this.setState({cost: parseFloat(value)})
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
            method: 'POST',
            headers: myHeaders,
            body: body
        };

        fetch(API_URL + '/newDelivery', myInit)
            .then(response => response.json())
            .then(response => {
                this.setState({name: '', minimalCost: 100, phone: '', isActive: false});
                console.log(response);
                if (response === "OK") {
                    alert('Запись создана');
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
        return (
            <React.Fragment>
                {
                    this.state.redirectToLogin ?
                        <Redirect to="/delivery" push/> :
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>Название доставки</Form.Label>
                                        <Form.Control type="text" id='name' onChange={this.handleChange}/>
                                        <Form.Label>Активна ?</Form.Label>
                                        <Form.Check id='isActive' onChange={this.handleChange}/>
                                    </Col>

                                    <Col>
                                        <Form.Label>Телефон</Form.Label>
                                        <Form.Control type="text" id='phone' onChange={this.handleChange}/>
                                        <Form.Label>Минимальная стоимость Cost</Form.Label>
                                        <Form.Control type="text" id='minimalCost' onChange={this.handleChange}/>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col>

                                    </Col>

                                    <Col>
                                        <ButtonToolbar>
                                            <Button variant="primary" type='submit'>Создать</Button>
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
