import React from 'react';
import Modal from 'react-modal';
import { OrderForm } from "./OrderForm";

export class OrderModal extends React.Component {
    render() {
        return (
            <Modal
                ariaHideApp={false}
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onCloseModal}
                contentLabel="Example Modal"
            >
                <OrderForm />
                <button onClick={this.props.onCloseModal}>close</button>
            </Modal>
        );
    }
}