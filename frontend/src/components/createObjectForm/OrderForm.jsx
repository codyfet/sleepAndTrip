import * as React from "react";
import {API_URL} from "../../config/config";
import {getActiveDelivery, getCanvas, getCover, getSache} from '../../services/services';
import {Redirect} from 'react-router-dom';

export class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        // this.handleSubmit = this.submitByButton();
        this.state = {
            order: {
                recipient: '',
                phone: '',
                adress: '',
                delivery: '',
                comment: '',
                cover: '',
                canvas: '',
                sache: '',
                havePatch: false
            },
            deliveryList: [],
            sacheList: [],
            canvasList: [],
            coverList: [],
            isLoading: true,
            redirectToLogin: false
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        getActiveDelivery()
            .then(response => response.json())
            .then(data => this.setState({deliveryList: data}));

        getCanvas()
            .then(response => response.json())
            .then(data => this.setState({canvasList: data}));

        getCover()
            .then(response => response.json())
            .then(data => this.setState({coverList: data}));

        getSache()
            .then(response => response.json())
            .then(data => this.setState({sacheList: data, isLoading: false}));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            order: {
                ...this.state.order,
                [name]: value
            }
        });
        // console.log(this.state);
    }

    handleSelectChange(event) {
        this.setState({
            order: {
                ...this.state.order,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit(event) {
        const parms = this.state.order;
        const body = Object.keys(parms).map(key => `${key}=${parms[key]}`).join('&');
        fetch(API_URL + '/newOrder?' + body,
            {
                method: 'POST'
            })
            .then(response => response.json())
            .then(response => {
                this.setState({redirectToLogin:true})
                //console.log(response);
                //this.props.onSubmitCallback()
            })
            .catch(e => {
                alert('error');
                console.log(e);
            });
        event.preventDefault();

    }

    selectorCreator(arr){
        return  arr.map((row) =>
                <option key={row.id} value={row.id}>
                    {row.name}
                </option>);
    }

    render() {

        if (this.state.isLoading) return "Loading...";

        const {deliveryList, sacheList, canvasList, coverList} = this.state;

        return (
            <React.Fragment> {
                this.state.redirectToLogin ?
                    <Redirect to="/orders" push/> :
                    <form>
                        <p>Получатель ФИО:
                            <input name='recipient' onChange={this.handleChange} value={this.state.order.recipient}/>
                        </p>
                        <p>Адрес доствки:
                            <input name='adress' onChange={this.handleChange} value={this.state.order.adress}/>
                        </p>

                        <p>Телефон:
                            <input type='tel' name='phone' onChange={this.handleChange} value={this.state.order.phone}/>
                        </p>
                        <p>Вид доставки:
                            <select name='delivery' onChange={this.handleChange}
                                    value={this.state.order.deliveryType}>
                                <option value=""></option>
                                {this.selectorCreator(deliveryList) }
                            </select>
                        </p>
                        <p>Комментарий:
                            <input name='comment' onChange={this.handleChange} value={this.state.order.comment}/>
                        </p>
                        <p>Название ткани:
                            <select name='canvas' onChange={this.handleChange} value={this.state.order.canvas}>
                                <option value=""></option>
                                {this.selectorCreator(canvasList) }
                            </select>
                        </p>
                        <p>Аромат саше:
                            <select name='sache' onChange={this.handleChange} value={this.state.order.sache}>
                                <option value=""></option>
                                {this.selectorCreator(sacheList) }
                            </select>
                        </p>
                        <p>Нужен патч?
                            <input type='checkbox' name='havePatch' onChange={this.handleChange}
                                   value={this.state.order.havePatch}/>
                        </p>
                        <p>Вид чехла:
                            <select name='cover' onChange={this.handleSelectChange} value={this.state.order.cover}>
                                <option value=""></option>
                                {this.selectorCreator(coverList) }
                            </select>
                        </p>
                        <button onClick={this.handleSubmit}>Создать!</button>
                    </form>
            } </React.Fragment>
        );
    }
}
