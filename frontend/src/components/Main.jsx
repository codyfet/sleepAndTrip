import React from 'react';
import {Route, Switch} from 'react-router-dom';


import {DeliveryList} from "./tables/DeliveryList";
import {FilteredOrders} from "./tables/FilteredOrders";
import {CanvasForm} from "./createObjectForm/CanvasForm";
import {MaterialList} from "./tables/MaterialList";
import {DeliveryForm} from './createObjectForm/DeliveryForm'
import {SacheForm} from './createObjectForm/SacheForm'
import {CoverForm} from './createObjectForm/CoverForm'
import {SacheList} from "./tables/SacheList";
import {CoverList} from "./tables/CovList";
import {OrderForm} from "./createObjectForm/OrderForm";
import {EditDelivery} from "./editAndViewForm/EditDelivery";


export const Main = () => {
    return (
        <div>
            <Switch>
                <Route path='/orders' component={FilteredOrders}/>
                <Route path='/canvas' component={MaterialList}/>
                <Route path='/sache' component={SacheList}/>
                <Route path='/cover' component={CoverList}/>
                <Route path='/delivery' component={DeliveryList}/>

                <Route path='/newOrder' component={OrderForm}/>
                <Route path="/newCanvas" component={CanvasForm}/>
                <Route path='/newDelivery' component={DeliveryForm}/>
                <Route path='/newSache' component={SacheForm}/>
                <Route path='/newCover' component={CoverForm}/>

                <Route path="/editDelivery" component={EditDelivery}/>
            </Switch>
        </div>
    )
}
