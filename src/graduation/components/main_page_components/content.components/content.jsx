import * as React from 'react';
import './content.scss';
import * as _ from 'underscore';
import {GoodsItems} from "./goodsItems.component.jsx";




function BreadCrumbs() {
    return (
        <div className="breadcrumbs">
            <a className="breadcrumbs__category">Woman</a> > <a className="breadcrumbs__category">Pants</a>
        </div>
    );
}





export class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            sortBy:null
        }
    }

    render() {
        return (
            <div className="content">
                <div className="content-nav">
                    <BreadCrumbs />
                    <div className="sort">
                        <span className="sort__text" >Sort by</span>
                        <label className="sort__select">
                            <input type="radio" id="sort_option_1" name="select" className="sort__option" onChange={(e)=>this.setState({
                                sortBy:e.target.id
                            })}/>Price ascending<br/>
                            <input type="radio" id="sort_option_2" name="select" className="sort__option" onChange={(e)=>this.setState({
                                sortBy:e.target.id
                            })}/>Price descending<br/>
                            <input type="radio" id="default" name="select" className="sort__option" onChange={(e)=>this.setState({
                                sortBy:e.target.id
                            })}/>Default
                        </label>
                    </div>
                </div>
                <GoodsItems sortBy={this.state.sortBy}/>
            </div>
        );
    }
}