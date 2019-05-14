import React from 'react';
import Modal from 'react-modal';
import { OrderForm } from "./OrderForm";

export class OrderModal extends React.Component {

    constructor(props){
        super(props);

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit () {
        this.props.onUpdateTable();
        this.props.onCloseModal();
    }

    render() {
        return (
            <Modal
                ariaHideApp={false}
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onCloseModal}
                contentLabel="Example Modal"
            >
                <OrderForm
                    onSubmitCallback={this.handleOnSubmit}
                />
                <button onClick={this.props.onCloseModal}>close</button>
            </Modal>
        );
    }
}