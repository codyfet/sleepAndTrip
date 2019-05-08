import * as React from "react";
import * as ReactDOM from "react-dom";
import "./OrderForm";
import {OrderForm} from "./OrderForm";
const client = require('./client');

const ROOT_URL = "http://localhost:8080/api";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {person: []};
    }

    componentDidMount() {
        client({method: 'GET', path: 'http://localhost:8080/api/person'}).done(response => {
            this.setState({person: response.entity._embedded.person});
            // console.log(response);
        });
    }

    render() {
        return (
            <div>
            <PersonList person={this.state.person}/>
            <OrderForm/>
            </div>
        )
    }
}

class PersonList extends React.Component{
    render() {
        const person = this.props.person.map(person =>
            <Person key={person._links.self.href} person={person}/>
        );

        return (
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>prefer Adress</th>
                </tr>
                {person}
                </tbody>
            </table>
        )
    }
}

class Person extends React.Component{
    render() {
        console.log(this.props.children)
        return(
        <tr>
            <td>{this.props.person.firstName}</td>
            <td>{this.props.person.secondName}</td>
            <td>{this.props.person.preferAdress}</td>
        </tr>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("app")
);
module.hot.accept();
