import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./components/App";
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <div className="Site">
        <App />
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);

module.hot.accept();






