import React from 'react';
import Modal from 'react-modal';
import { OrderForm } from "./OrderForm";

export class OrderModal extends React.Component {
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onCloseModal}
                contentLabel="Example Modal"
            >
                <OrderForm
                    onSubmitCallback={this.props.onUpdateTable}
                />
                <button onClick={this.props.onCloseModal}>close</button>
            </Modal>
        );
    }
}