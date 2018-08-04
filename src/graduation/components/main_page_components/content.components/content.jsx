import * as React from 'react';
import './content.scss';
import * as _ from 'underscore';



function BreadCrumbs() {
    return (
        <div className="breadcrumbs">
            <a className="breadcrumbs__category">Woman</a> > <a className="breadcrumbs__category">Pants</a>
        </div>
    );
}


function SortBy() {
    return (
        <div className="sort">
            <span className="sort__text">Sort by</span>
            <select className="sort__select">
                <option className="sort__option">Price ascending</option>
                <option className="sort__option">Price descending</option>
            </select>
        </div>
    );
}



export class Content extends React.Component{
    constructor(){
        super()
    }

    render() {
        return (
            <div className="content">
                <div className="content-nav">
                    <BreadCrumbs />
                    <SortBy />
                </div>
            </div>
        );
    }
}