import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import {Button} from "@material-ui/core";


export class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
          isRedirect: false
        };
    }

    render() {
        return (
                <React.Fragment>

                <div className="menu-div">
                    <div align="center">
                        <Col>  <Link to='/newOrder'>Новый заказ</Link> </Col>
                        <Col> <Link to='/filteredOrders'>Заказы</Link> </Col>

                    </div>
                    <Row className='main-menu'>
                        <Col> <Link to='/canvas'>Материалы</Link> </Col>
                        <Col> <Link to='/sache'>Саше</Link> </Col>
                        <Col> <Link to='/cover'>Чехлы</Link> </Col>
                        <Col> <Link to='/delivery'>Доставка</Link> </Col>
                    </Row>
                    <Row className='second-menu'>
                        <Col> <Link to='/newCanvas'>Новый материал</Link> </Col>
                        <Col> <Link to='/newSache'>Новое Саше</Link> </Col>
                        <Col> <Link to='/newCover'>Новый Чехол</Link> </Col>
                        <Col> <Link to='/newDelivery'>Новая доставка</Link> </Col>
                    </Row>
                </div>
                </React.Fragment>
        )
    }
}