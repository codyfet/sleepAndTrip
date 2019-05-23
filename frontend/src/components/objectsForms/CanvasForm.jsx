import React from 'react';
import {Button, ButtonToolbar, Col, Form, Row} from 'react-bootstrap';
import {API_URL} from "../../app-config";
import {Redirect} from 'react-router-dom';

export class CanvasForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //id : '',
            name: '',
            cost: 100.0,
            //previewurl: '',
            //viewurl: '',
            composition: '',
            isInStore: false,
            isArchieved: false,
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

        if (id === "cost") {
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

        fetch(API_URL + '/newCanvas', myInit)
            .then(response => response.json())
            .then(response => {
                this.setState({name: '', cost: '', composition: '', isInStore: false, isArchieved: false});
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
        this.setState({            redirectToLogin: true})
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.redirectToLogin ?
                        <Redirect to="/canvas" push/> :
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>Название материала</Form.Label>
                                        <Form.Control type="text" id='name' onChange={this.handleChange}/>
                                    </Col>

                                    <Col>
                                        <Form.Label>Состав материала</Form.Label>
                                        <Form.Control type="text" id='composition' onChange={this.handleChange}/>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Label>Стоимость</Form.Label>
                            <Form.Control type="text" id='cost' onChange={this.handleChange}/>

                            <Form.Group>
                        <span>
                        <Form.Label>Архивный?</Form.Label>
                        <Form.Check id='isArchieved' onChange={this.handleChange}/>
                        </span>

                                <span>
                        <Form.Label>Есть в продаже?</Form.Label>
                        <Form.Check id='isInStore' onChange={this.handleChange}/>
                    </span>
                            </Form.Group>

                            <ButtonToolbar>
                                <Button variant="primary" type='submit'>Создать</Button>
                                <Button variant="link" onClick={this.handleCacel}>Отмена</Button>
                            </ButtonToolbar>
                        </Form>
                }
            </React.Fragment>);
    }
}
