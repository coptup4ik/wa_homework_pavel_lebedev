import * as React from 'react';
import * as _ from 'underscore';
import './goodsItems.components.scss'
import {Categories} from "./categories.component.jsx";

export class GoodsItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfItems:5
        }
    }

    renderList() {

    }

    renderElement(){
        return(
            <div className="goods-items__block">
                <div className="goods-items__tag" hidden={false}>NEW</div>
                <div className="goods-items__image" onClick={()=>{console.log("item is clicked")}}>
                    <img className="goods-items__image" src="http://bybnilka.com.ua/data/images/picture_02.jpg" alt="picture_02"/>
                </div>
                <div className="goods-items__header">
                    <span className="goods-items__header_text">Pueraria Mirifica And Study Phyto Estrogens</span>
                </div>
                <div className="goods-items__price">
                    <span>$500</span>
                    <button className="goods-items__price_btn">ADD TO CART</button>
                </div>
            </div>
        )
    }


    showMoreBtn(){
        return (
            <button className="goods-items__load" onClick={()=>{
                this.setState({numberOfItems:this.state.numberOfItems+4})
            }} id="01">SHOW MORE</button>
        )
    }

    render() {
        return (
            <div className="content__wrapper">
                <Categories />
                <div className="goods-items">
                    <div className="goods-items__wrapper">
                        {_.range(0, this.state.numberOfItems).map(this.renderElement)}
                    </div>
                    {this.showMoreBtn()}
                </div>
            </div>
        )
    }
}