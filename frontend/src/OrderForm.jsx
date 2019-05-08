import * as React from "react";

export class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adress: '',
            phone: '',
            deliveryType: '',
            comment: '',
            sache : '',
            canvas : '',
            patch : '',
            caseType: '',
            orderDate: ''

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleChange(event) {

        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('HALP! ' + this.state.value);
        event.preventDefault();
        console.log(this.state.value);
    }

    render() {
        return ( <h1>Hello!</h1> );
    }
}