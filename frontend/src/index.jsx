import * as React from "react";
import * as ReactDOM from "react-dom";
import {OrderList} from "./components/OrderList";
import {OrderForm} from "./components/OrderForm";


class App extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return        <div>
            <OrderList/>
            <OrderForm/>
        </div>

    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
module.hot.accept();

