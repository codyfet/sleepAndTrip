import * as React from "react";
import * as ReactDOM from "react-dom";
import "./OrderForm";
import { API_URL } from "./app-config";
import {OrderForm} from "./OrderForm";
// import { axios } from "axios";
const client = require('./client');


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {person: []};
    }


    componentDidMount(){
        fetch(API_URL + '/person', {mode: 'cors'})
            .then(function (response) {
                return response.text();
            })
            .then(function (text){
                //console.log('Request succefulll', text);
            })
            .catch(function (error) {
                log('Request failed', error)
            });
    }

    getByFetch() {
        client({method: 'GET', path: API_URL + '/person'}).done(response => {
            this.setState({person: response.entity._embedded.person});
            //console.log(response);
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.getByFetch()}>YA!</button>
                <OrderForm/>
                <PersonList person={this.state.person}/>
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
        //console.log(this.props.children)
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

