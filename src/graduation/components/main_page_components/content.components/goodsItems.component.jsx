import * as React from 'react';
import * as _ from 'underscore';
import './goodsItems.components.scss'
import {Categories} from "./categories.component.jsx";
import {Product} from "./product.jsx";
import {Ajax} from "../../../utils/ajax";
import * as ReactDom from "react-dom";

import {ProductModal} from "./product.jsx";



export class GoodsItems extends React.Component {
    constructor(props) {
        super(props);
        this.load = this.load.bind(this);
        this.state = {
            data:[],
            clicks: 3,
            imagePosition:0
        };

    }

    componentWillReceiveProps(newProps){
        if (newProps.sortBy === "sort_option_1"){
            let newState = _.sortBy(this.state.data, "price");
            this.setState({
                data:newState
            })
        }else if(newProps.sortBy === "sort_option_2"){
            let newState = _.sortBy(this.state.data, "price");
            this.setState({
                data:newState.reverse()
            })
        }else if (newProps.sortBy === "default") {
            this.load()
        }
    }

    componentWillMount(){
       setTimeout( this.load.bind(this), 2000)
    }



    load() {
        Ajax.get('http://5b61f14407412d00142acf14.mockapi.io/productData',
            (resp) => {
                this.setState({
                    data: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
    }

    handleClick(){
        this.setState({
            clicks: this.state.clicks + 3
        })
    }

    showMoreBtn(){
        return (
            <button className="goods-items__load" onClick={()=>{this.handleClick()}}>SHOW MORE</button>
        )
    }

    render() {
        return (
            <div className="content__wrapper">

                <Categories/>
                <div className="goods-items">
                    <div className="goods-items__wrapper">
                        {this.state.data[0] === undefined ? <div className="goods-items__loader">
                            <img className="goods-items__loader" src="http://bybnilka.com.ua/data/images/loader.gif"
                                 alt=""/>
                        </div> : <div>
                            {_.range(0, this.state.clicks < this.state.data.length ? this.state.clicks : this.state.data.length).map((value) => {
                                return (
                                    <Product
                                        key={value}
                                        data={this.state.data}
                                        header={this.state.data[value].header}
                                        isNew={this.state.data[value].isNew}
                                        price={this.state.data[value].price}
                                        mainImage={this.state.data[value].mainImage}
                                        images={this.state.data[value].images}
                                        id={this.state.data[value].id}
                                        delay={value}
                                        imagePosition={0}
                                    />)
                            })}
                        </div>}
                        <ProductModal/>
                    </div>
                    {this.showMoreBtn()}
                </div>
            </div>
        )
    }
}

