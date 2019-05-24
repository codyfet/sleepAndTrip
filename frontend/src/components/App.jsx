import React from 'react';
import {Header} from "./Header";
import {Main} from "./Main";
import "../style.less";

import {Footer} from "./Footer";


export class App extends React.Component {

    render() {
        return (
            <div className="App Site">
                <div className="Site-content">
                    <div className="App-header">
                        <Header/>
                    </div>
                    <div className="main">
                        <Main/>
                    </div>
                </div>
                {/*<Footer/>*/}
            </div>
        );
    }

}