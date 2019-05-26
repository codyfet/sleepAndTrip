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
                        <Col className="header-link"> <Link to='/orders'>Заказы</Link> </Col>
                        <Col className="header-link"> <Link to='/canvas'>Материалы</Link> </Col>
                        <Col className="header-link"> <Link to='/sache'>Саше</Link> </Col>
                        <Col className="header-link"> <Link to='/cover'>Чехлы</Link> </Col>
                        <Col className="header-link"> <Link to='/delivery'>Доставка</Link> </Col>
                    </Row>

                </div>
                </React.Fragment>
        )
    }
}