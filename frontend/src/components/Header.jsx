import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';



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

                    <Row className='main-menu'>
                        <Col> <Link to='/orders'>Заказы</Link> </Col>
                        <Col> <Link to='/canvas'>Материалы</Link> </Col>
                        <Col> <Link to='/sache'>Саше</Link> </Col>
                        <Col> <Link to='/cover'>Чехлы</Link> </Col>
                        <Col> <Link to='/delivery'>Доставка</Link> </Col>
                    </Row>

                </div>
                </React.Fragment>
        )
    }
}