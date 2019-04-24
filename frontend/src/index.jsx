import React from "react";
import ReactDOM from "react-dom";

import "./styles";

class HelloWorld extends React.Component {

    render () {
        var hello = "dfgsdjsg!!";
        return <span>{hello}</span>
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
