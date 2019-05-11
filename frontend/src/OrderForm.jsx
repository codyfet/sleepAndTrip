import * as React from "react";

export class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        // this.handleSubmit = this.submitByButton();
        this.state = {
            adress: '',
            phone: '',
            deliveryType: '',
            comment: '',
            caseType: '',
            canvas: '',
            sache: false,
            patch: false
};


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        // console.log(this.state);
    }

    handleInputChange(event) {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        alert('HALP! ' + this.state.value);
        event.preventDefault();
        console.log(this.state.value);
    }

    render() {
        return (
            <form>
                <p>Adress:
                <input name='adress' onChange={this.handleChange} value={this.state.adress}/>
                </p>
                <p>Phone:
                <input name='phone' onChange={this.handleChange} value={this.state.phone}/>
                </p>
                <p>DeliveryType:
                <input name='deliveryType' onChange={this.handleChange} value={this.state.deliveryType}/>
                </p>
                <p>Comment:
                <input name='comment' onChange={this.handleChange} value={this.state.comment}/>
                </p>
                <p>Canvas:
                <input name='canvas' onChange={this.handleChange} value={this.state.canvas}/>
                </p>
                <p>Sache:
                    <select name='sache' onChange={this.handleChange} value={this.state.sache}>
                        <option>Pepper</option>
                        <option>Woodstock</option>
                        <option>Nothing</option>
                    </select>
                </p>
                <p>Patch:
                <input type='checkbox' name='patch' onChange={this.handleChange} value={this.state.patch}/>
                </p>
                <p>CaseType:
                <select type='select' name='caseType' onChange={this.handleChange} value={this.state.caseType}>
                    <option>Paper</option>
                    <option>Wood</option>
                    <option>Nothing</option>
                </select>
                </p>
            </form>
        );
    }
}