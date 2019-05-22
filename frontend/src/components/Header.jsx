import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';

export const Header = () => {
    return (
        <React.Fragment>
            <div class="menu-div">
            <div align="center">
                <Link to='/orders'>Заказы</Link>
            </div>
            <Row className='main-menu'>
                <Col> <Link to='/canvas'>Материалы</Link> </Col>
                <Col> <Link to='/sache'>Саше</Link> </Col>
                <Col> <Link to='/cover'>Чехлы</Link> </Col>
                <Col> <Link to='/delivery'>Доставка</Link> </Col>
            </Row>
            <Row className='second-menu'>
                <Col> <Link to='/newCanvas'>Новый материал</Link> </Col>
                <Col> <Link to='/'>Новое Саше</Link> </Col>
                <Col> <Link to='/'>Новый Чехол</Link> </Col>
                <Col> <Link to='/newDelivery'>Новая доставка</Link> </Col>
            </Row>
            </div>

        </React.Fragment>

    )
}