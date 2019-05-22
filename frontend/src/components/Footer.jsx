import React from 'react';
import {Button} from "react-bootstrap";
import {OrderModal} from "./OrderModal";


export class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            showCreateModal: false
        }
    }

    handleOpenModal() {
        this.setState({ showCreateModal: true });
    }

    handleCloseModal() {
        this.setState({ showCreateModal: false });
    }


    render() {
        return (
            <React.Fragment>
                <Button onClick={this.handleOpenModal}>Создать</Button>
                <OrderModal
                    isOpen={this.state.showCreateModal}
                    onCloseModal={this.handleCloseModal}
                />
            </React.Fragment>
        );
    }


}