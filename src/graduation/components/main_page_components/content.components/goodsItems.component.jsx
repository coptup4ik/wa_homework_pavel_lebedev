import * as React from 'react';
import './content.scss';
import * as _ from 'underscore';
import './goodsItems.components.scss'


export class GoodsItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name:123,
        hello:12}
    }

    renderList() {

    }

    renderElement(){
        return(
            <div className="goods-items__block"></div>
        )
    }



    render() {
        return (
            <div className="content__wrapper">
                <div className="content__categories"></div>
                <div className="goods-items">
                    <div className="goods-items__wrapper">
                        {_.range(0, 5).map(this.renderElement)}
                    </div>
                    <button className="goods-items__load">SHOW MORE</button>
                </div>
            </div>
        )
    }
}