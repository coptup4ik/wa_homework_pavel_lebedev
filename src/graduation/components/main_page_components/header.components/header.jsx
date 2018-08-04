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
        <div className="header-menu">
            <div className="header-menu__categories">
                <i className="fas fa-bars header-menu__hamburger"></i>
                <div className="header-menu__logo">

                    <img src="../../assets/images/matter_main_page_logo.svg" alt=""/>
                </div>

                <div className="header-menu__nav">
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
                    <img className="header-menu__avatar" src="../../assets/images/avatar.jpg" alt=""/>
                </div>

                <div className="header-menu__search ">
                    <i className="fas fa-search header-menu__icon"></i>
                </div>
                <div className="header-menu__like ">
                    <i className="far fa-heart header-menu__icon"></i>
                </div>
                <div className="header-menu__basket">
                    <i className="fas fa-shopping-bag header-menu__icon"></i>
                </div>
            </div>

        </div>
    )
}



function Banner() {
    return(
        <div className="header-banner">
            <div className="header-banner__text">
                <h2 className="header-banner__text_head" >Pants</h2>
                <h3 className="header-banner__text_item" >Apparels</h3>
            </div>
            <img src="../../assets/images/graduation_images/picture_01.jpg" alt="" className="header-banner__image"/>
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



