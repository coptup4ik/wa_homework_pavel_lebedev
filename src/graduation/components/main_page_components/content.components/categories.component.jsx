import * as React from 'react';
import * as _ from 'underscore';
import './goodsItems.components.scss'
import {Ajax} from "../../../utils/ajax.js";

import "./categories.component.scss";

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';


export class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: [
                {
                    id: 0,
                    category: "Loading...",
                    subcategory: ["Loading..."],
                    subcategoryData: [
                        ["Loading..."]
                    ]
                }
            ]
        }
    };

    componentDidMount(){
        this.load()
    }
    componentWillMount(){
        this.load()
    }

    load() {
        Ajax.get('http://5b61f14407412d00142acf14.mockapi.io/contentCategoriesData',
            (resp) => {
                this.setState({
                    response: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
    }

    // pants: ["Sideswept Dhoti", "Lounge Longhi", "Side Longhi", "Modern Mope", "Easy Dhoti", "Classic Wideleg"],

    renderCategoriesComponents() {
        return (
            <Accordion  accordion={false} >
                {_.range(0, this.state.response.length).map((value)=>{
                    return( <AccordionItem key={value}>
                        <AccordionItemTitle key={value}>
                            <span key={value} className="u-position-relative">{this.state.response[value].category}
                            <div className="accordion__arrow" role="presentation"></div></span>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            {_.range(0, this.state.response[value].subcategory.length).map((data)=>{
                                return(
                                <AccordionItem key={data}>
                                    <AccordionItemTitle>
                                        <span className="u-position-relative">{this.state.response[value].subcategory[data]}
                                            <div className="accordion__arrow" role="presentation"></div></span>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        {_.range(0, this.state.response[value].subcategoryData[data].length).map((key)=>{
                                            return (<div key={key} className="accordion__body-item">{this.state.response[value].subcategoryData[data][key]}</div>)
                                        })}
                                    </AccordionItemBody>
                                </AccordionItem>)
                            })}
                        </AccordionItemBody>
                    </AccordionItem> )
                })}
            </Accordion>
        )
    }




    componentDidMount(){
        let btn = document.querySelector(".categories__toggle");
        let el = document.querySelector(".content__categories_wrapper");
        btn.addEventListener('click', ()=>{
            el.classList.toggle("content__categories_wrapper_active")
        })
    }

    render(){
        return(
            <div className="content__categories">
                <button className="categories__toggle">FILTERS</button>
                <div className="content__categories_wrapper">
                <div className="categories__filters">
                    <span className="categories__filters_text">FILTERS</span>
                    <span className="categories__filters_text"> RESET</span>
                </div>
                {this.renderCategoriesComponents()}
                </div>
            </div>
        )
    }
}



//
// renderCategoriesComponents() {
//
//     return(
//         <div className="categories__list">
//             {_.range(0, this.state.response.length).map( (value)=>{
//                 return <ul key={value} className="categories__item" >{
//                     <li onClick={e=> console.log(e.target)} className="categories__item_text" >{this.state.response[value].category}</li>}{
//                     _.range(0, this.state.response[value].subcategory.length).map( (key)=>{
//                         return <ul>{this.state.response[value].subcategory[key]}{
//                             _.range(0, this.state.response[value].subcategoryData[key].length).map((data)=>{
//                                 return <li>{this.state.response[value].subcategoryData[key][data]}</li>
//                             })
//                         }</ul>
//                     } )
//                 }</ul>
//             } )}
//         </div>
//     )
// }


// renderCategoriesComponents() {
//     return(
//
//         <ul className="categories__list">
//             {_.range(0, this.state.response.length).map((value)=>{
//                 return <li className="categories__item" key={value}>
//                     {this.state.response[value].category}
//                     <ul className="categories__item-list">
//                         {_.range(0, this.state.response[value].subcategory.length).map((data)=>{
//                             return <li>{this.state.response[value].subcategory[data]}</li>
//                         })}
//                     </ul>
//                 </li>
//             })}
//         </ul>
//     )
// }