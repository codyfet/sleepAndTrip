import * as React from "react";
import {API_URL} from "../app-config";

export class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        // this.handleSubmit = this.submitByButton();
        this.state = {
            order: {
                adress: '',
                phone: '',
                deliveryType: '',
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
            isLoading: true
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var myInint = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch(API_URL + '/getDelivery', myInint)
            .then(response => response.json())
            .then(data => this.setState({deliveryList: data}));

        fetch(API_URL + '/getCanvas', myInint)
            .then(response => response.json())
            .then(data => this.setState({canvasList: data}));

        fetch(API_URL + '/getCover', myInint)
            .then(response => response.json())
            .then(data => this.setState({coverList: data}));

        fetch(API_URL + '/getSache', myInint)
            .then(response => response.json())
            .then(data => this.setState({sacheList: data, isLoading: false}));
        // Promise.all(
        //     fetch(API_URL + '/getDelivery', myInint),
        //     fetch(API_URL + '/getCanvas', myInint),
        //     fetch(API_URL + '/getCover', myInint),
        //     fetch(API_URL + '/getSache', myInint)
        // ).then(
        //     ([deliveryResponse, canvasResponse, coverResponse, sacheResponse]) => {
        //         this.setState({
        //             deliveryList: deliveryResponse.json(),
        //             canvasList: canvasResponse.json(),
        //             coverList: coverResponse.json(),
        //             sacheList: sacheResponse.json(),
        //             isLoading: false
        //         });
        //     }
        // ).catch(
        //     () => {
        //         alert("Ошибка загрузки данных");
        //     }
        // );
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
        //console.log(this.state);

        this.setState({
            order:{ ...this.state.order,
            [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit(event) {
        const parms = this.state.order;
        const body =  Object.keys(parms).map(key => `${key}=${parms[key]}`).join('&');
        fetch(API_URL+'/newOrder?'+body,
            {
                method: 'POST'
            })
            .then(response =>response.json())
            .then(response => {
                this.setState({order: { //TODO: Убрать эту дичь
                        adress: '',
                        phone: '',
                        deliveryType: '',
                        comment: '',
                        cover: '',
                        canvas: '',
                        sache: '',
                        havePatch: false
                    }});
                console.log(response);
            })
            .catch(e => {
                alert('error');
                console.log(e);
            });
        event.preventDefault();

    }

    render() {

        if (this.state.isLoading) return "Loading...";

        const {deliveryList, sacheList, canvasList, coverList} = this.state;

        return (
            <form>
                <p>Адрес доствки:
                    <input name='adress' onChange={this.handleChange} value={this.state.order.adress}/>
                </p>
                <p>Телефон:
                    <input type='tel' name='phone' onChange={this.handleChange} value={this.state.order.phone}/>
                </p>
                <p>Вид доставки:
                    <select name='deliveryType' onChange={this.handleChange} value={this.state.order.deliveryType}>
                        <option value=""></option>
                        {deliveryList.map((delivery) =>
                            <option key={delivery.id} value={delivery.id}>
                                {delivery.name}
                            </option>)
                        }
                    </select>
                </p>
                <p>Комментарий:
                    <input name='comment' onChange={this.handleChange} value={this.state.order.comment}/>
                </p>
                <p>Название ткани:
                    <select name='canvas' onChange={this.handleChange} value={this.state.order.canvas}>
                        <option value=""></option>
                        {canvasList.map((canvas) =>
                            <option key={canvas.id} value={canvas.id}>
                                {canvas.name}
                            </option>)
                        }
                    </select>
                </p>
                <p>Аромат саше:
                    <select name='sache' onChange={this.handleChange} value={this.state.order.sache}>
                        <option value=""></option>
                        {sacheList.map((sache) =>
                            <option key={sache.id} value={sache.id}>
                                {sache.name}
                            </option>)
                        }
                    </select>
                </p>
                <p>Нужен патч?
                    <input type='checkbox' name='havePatch' onChange={this.handleChange}
                           value={this.state.order.havePatch}/>
                </p>
                <p>Вид чехла:
                    <select name='cover' onChange={this.handleSelectChange} value={this.state.order.cover}>
                        <option value=""></option>
                        { coverList.map((cover) =>
                            <option key={cover.id} value={cover.id}>
                                {cover.name}
                            </option>)
                        }
                    </select>
                </p>
                <button onClick={this.handleSubmit}>Создать!</button>
            </form>
        );
    }
}
