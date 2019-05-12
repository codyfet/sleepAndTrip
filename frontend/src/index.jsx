import * as React from "react";
import * as ReactDOM from "react-dom";
import {OrderForm} from "./OrderForm";


class App extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return <OrderForm />
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
module.hot.accept();

