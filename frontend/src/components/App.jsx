import React from 'react';
import {Header} from "./Header";
import {Main} from "./Main";
import Paper from '@material-ui/core/Paper/index';
import "../style.less";


export class App extends React.Component {

    render() {
        return (
            <Paper className="Main-block">
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
            </Paper>
        );
    }

}