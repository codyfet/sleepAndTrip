import * as React from "react";
import { API_URL } from "../app-config";
const client = require('./client');


export class ListOfPerson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {person: []};
    }


    componentDidMount(){
        client({method: 'GET', path: API_URL + '/person'}).done(response => {
            this.setState({person: response.entity._embedded.person});
        });
    }

    render() {
        return (
            <div>
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
        return(
            <tr>
                <td>{this.props.person.firstName}</td>
                <td>{this.props.person.secondName}</td>
                <td>{this.props.person.preferAdress}</td>
            </tr>
        );
    }
}


