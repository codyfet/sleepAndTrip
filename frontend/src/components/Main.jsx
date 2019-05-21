import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {OrderList} from "./OrderList";
import {OrderModal} from "./OrderModal";
import {Sache} from "./Sache";
import {Cover} from "./Cover";
import {Delivery} from "./Delivery";
import {Home} from "./Home";
import {Canvas} from "./Canvas";
import {CanvasForm} from "./objectsForms/CanvasForm";

export const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/orders' component={OrderList} />
                <Route path='/canvas' component={Canvas}/>
                <Route path='/sache' component={Sache} />
                <Route path='/cover' component={Cover} />
                <Route path='/delivery' component={Delivery} />
                <Route path='/newOrder' component={OrderModal} />
                <Route path="/newCanvas" component={CanvasForm} />
            </Switch>
        </div>
    )
}
