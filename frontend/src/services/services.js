import {API_URL} from '../config/config';

const myInint = {
    method: 'GET',
    headers: new Headers(),
    mode: 'cors',
    cache: 'default'
};

const SERVICES_ENABLED = false;

/**
 *
 */
export function getActiveDelivery () {
    return SERVICES_ENABLED ?
        fetch(API_URL + '/getActiveDelivery', myInint) :
        fetch('/activeDeliveryResp.json')
}

/**
 *
 */
export function getCanvas () {
    return SERVICES_ENABLED ?
        fetch(API_URL + '/getCanvas', myInint) :
        fetch('/canvasResp.json')

}

/**
 *
 */
export function getCover () {
    return SERVICES_ENABLED ?
        fetch(API_URL + '/getCover', myInint) :
        fetch('/coverResp.json')
}

/**
 *
 */
export function getSache () {
    return SERVICES_ENABLED ?
        fetch(API_URL + '/getSache', myInint) :
        fetch('/sacheResp.json')
}

/**
 *
 */
export function getAllOrders () {
    return SERVICES_ENABLED ?
        fetch(API_URL + '/getAllOrders', myInint) :
        fetch('/allOrdersResp.json')
}
