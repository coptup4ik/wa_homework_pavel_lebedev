import * as React from 'react';
import './header.scss'
import * as _ from 'underscore'
import {Ajax} from "../../../utils/ajax.js";
import {BrowserRouter, Route,NavLink ,Switch } from 'react-router-dom';


import addToBasket from "../content.components/product.jsx";
import {Basket} from "../content.components/product.jsx";

export class BannerTop extends React.Component{
    constructor(){
        super();
        this.state = {
            response:[
                {bannerdata:'Loading...'}
                ]
        };
    }



    bannerTopAnimation() {
        const banner = document.querySelector('.banner-top_wrapper');
        let a = 0;
        let timer = setInterval(() => {
            a -= 40;
            if (a === -(40 * this.state.response.length)) {
                a = 0;
                clearInterval(timer);
                this.bannerTopAnimation()
            }
            banner.style.transform = `translateY(${a}px)`
        }, 3000);

    }


    componentDidMount(){
        this.load();
        this.bannerTopAnimation();
    }


    renderList(){
        const makeTopBannerText = (value) => {
            return <div className="banner-top__text" key={value}>{this.state.response[value].bannerdata}</div>;

        };
        return (

            <div className="header__banner-top">
                <div className="banner-top_wrapper" style={{height: `40*${this.state.response.length}`}}>
                    {_.range(0, this.state.response.length).map(makeTopBannerText)}
                </div>
            </div>
        )
    }

    load() {
        Ajax.get('http://5b61f14407412d00142acf14.mockapi.io/topBannerData',
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

    render() {
        return this.renderList();

    }

}

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        }

    }

    render() {
    return(
        <div className="header-menu">
            <div className="header-menu__categories">
                <i className="fas fa-bars header-menu__hamburger" onClick={()=>this.setState({
                    isOpen:!this.state.isOpen
                })}></i>
                <div className="header-menu__logo">
                    <img src="http://bybnilka.com.ua/data/images/matter_main_page_logo.svg" alt=""/>
                </div>

                <div className={this.state.isOpen === false ? "header-menu__nav" : "header-menu__nav header-menu__nav_active"}>
                    <ul className="header-menu__item header-menu__shop">
                        SHOP<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>

                    </ul>
                    <ul className="header-menu__item header-menu__fabric">
                        FABRIC<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>

                    </ul>
                    <ul className="header-menu__item header-menu__journal">
                        JOURNAL<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>

                    </ul>
                    <ul className="header-menu__item header-menu__about">
                        ABOUT<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>
                    </ul>
                </div>
            </div>

            <div className="header-menu__user">
                <div className="header-menu__login">
                    <span className="header-menu__username">WELCOME, ALEX</span>
                    <img className="header-menu__avatar" src="http://bybnilka.com.ua/data/images/avatar.jpg" alt=""/>
                </div>

                <div className="header-menu__search ">
                    <i className="fas fa-search header-menu__icon"></i>
                </div>
                <div className="header-menu__like ">
                    <i className="far fa-heart header-menu__icon"></i>
                </div>
                <Basket/>
            </div>

        </div>
    )
    }
}



function Banner() {
    return(
        <div className="header-banner">
            <div className="header-banner__text">
                <h2 className="header-banner__text_head" >Pants</h2>
                <h3 className="header-banner__text_item" >Apparels</h3>
            </div>
            <img src="http://bybnilka.com.ua/data/images/picture_01.jpg" alt="" className="header-banner__image"/>
        </div>
    )
}

export class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='header'>
                <BannerTop />
                <Menu />
                <Banner />
            </div>
        )

    }
}



