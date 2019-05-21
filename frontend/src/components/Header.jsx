import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <ul>
            <li><Link to='/'>Домой</Link></li>
            <li><Link to='/orders'>заказы</Link></li>
            <li><Link to='/canvas'>материалы</Link></li>
            <li><Link to='/sache'>саше</Link></li>
            <li><Link to='/cover'>чехлы</Link></li>
            <li><Link to='/delivery'>доставка</Link></li>
            <li><Link to='/newCanvas'>Новый материал</Link></li>
        </ul>
    )
}