import * as React from 'react';
import "./basketPage.scss"
import * as _ from 'underscore';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import {Ajax} from "../../../utils/ajax";


export class BasketPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            basket: null
        }

    }

    load() {
        Ajax.get('http://5b61f14407412d00142acf14.mockapi.io/boughtItems',
            (resp) => {
                this.setState({
                    basket: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
    }


    componentWillMount(){
        this.load()
    }

    componentWillUnmount(){
        console.log('basket is unmounted')
    }

    deleteItem(value){
        console.log(value);
        Ajax.delete(`http://5b61f14407412d00142acf14.mockapi.io/boughtItems/${value}`,
            ()=>{
                const newTasks = this.state.basket.filter((item) => item.id !== value);
                console.log(newTasks)
                this.setState({
                    basket: newTasks
                });
                console.log(this.state)
            })
    }

    render(){
        return (
            <div className="basket-page">
                <div className="basket-page__nav">
                    <NavLink to="/graduation.html"><button className="basket-page__nav_btn">Return to main page</button></NavLink>
                    <button className="basket-page__nav_btn" onClick={this.load.bind(this)}>Refresh basket</button>
                </div>
                {this.state.basket === null ? <div>Loading</div> : _.range(0, this.state.basket.length).map((e)=>{
                    return(
                        <div key={e} className="basket-page__product">
                            <button className="basket-page__del" onClick={()=>this.deleteItem(this.state.basket[e].id)}>+</button>
                            <div className="basket-page__photo">
                                <img className="basket-page__photo_img" src={this.state.basket[e].mainImage} alt=""/>
                            </div>
                            <div className="basket-page__header">{this.state.basket[e].header}</div>
                            <div className="basket-page__price">${this.state.basket[e].price}</div>
                        </div>
                    )
                })}
            </div>
        )
    }

}