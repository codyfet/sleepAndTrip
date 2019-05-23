import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {OrderList} from "./tables/OrderList";
import {OrderModal} from "./OrderModal";
import {Cover} from "./Cover";
import {Home} from "./Home";
import {DeliveryList} from "./tables/DeliveryList";
import {FilteredOrders} from "./tables/FilteredOrders";
import {CanvasForm} from "./objectsForms/CanvasForm";
import {MaterialList} from "./tables/MaterialList";
import {DeliveryForm} from './objectsForms/DeliveryForm'
import {SacheForm} from './objectsForms/SacheForm'
import {CoverForm} from './objectsForms/CoverForm'
import {SacheList} from "./tables/SacheList";
import {CoverList} from "./tables/CovList";
import {OrderForm} from "./OrderForm";


export const Main = () => {
    return (
        <div>
            <Switch>
                <Route path='/orders' component={FilteredOrders} />
                <Route path='/filteredOrders' component={FilteredOrders} />
                <Route path='/canvas' component={MaterialList}/>
                <Route path='/sache' component={SacheList} />
                <Route path='/cover' component={CoverList} />
                <Route path='/delivery' component={DeliveryList} />
                <Route path='/newOrder' component={OrderForm} />
                <Route path="/newCanvas" component={CanvasForm} />
                <Route path='/newDelivery' component={DeliveryForm}/>
                <Route path='/newSache' component={SacheForm}/>
                <Route path='/newCover' component={CoverForm}/>
            </Switch>
        </div>
    )
}
