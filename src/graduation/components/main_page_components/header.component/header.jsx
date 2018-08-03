import * as React from 'react';
import './header.scss'
import * as _ from 'underscore'


const topBannerData = [
    {
        bannerdata:"Free shipping for orders above USD 150",
    },
    {
        bannerdata:"Bonuses for orders above 300 "
    },
    {
        bannerdata:"Gifts with any purchase"
    },
    {
        bannerdata:"Super cool benefits"
    }
];




class BannerTop extends React.Component{
    constructor(){
        super()
    }


    componentDidMount(){
        function bannerTopAnimation() {
            const banner = document.querySelector('.banner-top_wrapper');
            let a = 0;
            let timer = setInterval(() => {
                a -= 40;
                if (a === -(40*topBannerData.length)) {
                    a = 0;
                    clearInterval(timer);
                    bannerTopAnimation()
                }
                banner.style.transform = `translateY(${a}px)`
            }, 3000);

        }
        bannerTopAnimation();
    }


    render() {
        const makeTopBannerText = (value) => {
            return <div className="banner-top__text" key={value}>{topBannerData[value].bannerdata}</div>;

        };
        return (
            <div className="header__banner-top">
                <div className="banner-top_wrapper" style={{height:`40*${topBannerData.length}`}}>
                    {_.range(0, topBannerData.length).map(makeTopBannerText)}
                </div>
            </div>
        )
    }
}





function Menu() {
    return(
        <div className="header_nav">
            {/*<div className="header__menu_categories">*/}
                {/*<i className="fas fa-bars header__menu_hamburger"></i>*/}
                {/*<div className="header__menu_logo"><img src="../../assets/images/matter_main_page_logo.svg" alt=""/></div>*/}
                {/*<div className="header__menu_nav">*/}
                    {/*<ul className="header__menu_item header__menu_shop">*/}
                        {/*SHOP<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>*/}

                    {/*</ul>*/}
                    {/*<ul className="header__menu_item header__menu_fabric">*/}
                        {/*FABRIC<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>*/}

                    {/*</ul>*/}
                    {/*<ul className="header__menu_item header__menu_journal">*/}
                        {/*JOURNAL<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>*/}

                    {/*</ul>*/}
                    {/*<ul className="header__menu_item header__menu_about">*/}
                        {/*ABOUT<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>*/}

                    {/*</ul>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="header__menu_user">*/}
                {/*<div className="header__menu_welcome">*/}
                    {/*WELCOME, ALEX*/}
                    {/*<img className="header__menu_avatar" src="../../assets/images/avatar.jpg" alt=""/>*/}
                {/*</div>*/}

                {/*<div className="header__menu_search header__menu_icon">*/}
                    {/*<i className="fas fa-search"></i>*/}
                {/*</div>*/}
                {/*<div className="header__menu_like header__menu_icon">*/}
                    {/*<i className="far fa-heart"></i>*/}
                {/*</div>*/}
                {/*<div className="header__menu_basket header__menu_icon">*/}
                    {/*<i className="fas fa-shopping-bag"></i>*/}
                {/*</div>*/}
            {/*</div>*/}
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
            </div>
        )

    }
}



