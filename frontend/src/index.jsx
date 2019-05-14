import * as React from "react";
import * as ReactDOM from "react-dom";
import {OrderList} from "./components/OrderList";
import {OrderForm} from "./components/OrderForm";

const App = () => (
    <OrderList/>
);

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
module.hot.accept();

