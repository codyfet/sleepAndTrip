import React from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import {API_URL} from "../../app-config";

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
            isArchieved: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const id = target.id;

        if (id == "cost") {
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
        // myHeaders.append("Content-Length", body.length.toString());
        // myHeaders.append("X-Custom-Header", "ProcessThisImmediately");


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
                if (response == "OK") {
                    alert('Запись создана');
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

    render() {
        return (<React.Fragment>
            HELLO
            <Form onSubmit={this.handleSubmit}>

                <Form.Group>
                    <Col>
                        <Form.Label>Material name</Form.Label>
                        <Form.Control type="text" id='name' onChange={this.handleChange}/>
                    </Col>

                    <Col>
                        <Form.Label>Composition</Form.Label>
                        <Form.Control type="text" id='composition' onChange={this.handleChange}/>
                    </Col>
                </Form.Group>

                <Form.Label>Cost</Form.Label>
                <Form.Control type="text" id='cost' onChange={this.handleChange}/>

                <Form.Group>
                    <span>
                    <Form.Label>In archieve?</Form.Label>
                    <Form.Check id='isArchieved' onChange={this.handleChange}/>
                    </span>

                    <span>
                    <Form.Label>In Store?</Form.Label>
                    <Form.Check id='isInStore' onChange={this.handleChange}/>
                </span>
                </Form.Group>


                <Button variant="Primary" type='submit'>Secondary</Button>
            </Form>
        </React.Fragment>);


    }

}

{/*<React.Fragment>*/
}
{/*    /!*<Form onSubmit={e => this.handleSubmit(e)}>*!/*/
}

{/*    <Button variant="secondary">Secondary</Button>*/
}
{/*</React.Fragment>*/
}