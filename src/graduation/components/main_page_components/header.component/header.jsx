import * as React from 'react';
import './header.scss'


function BannerTop() {
    return(
        <div className="header">
            <div className="header__banner-top">
                <span className="banner-top__text" >Free shipping for orders above USD 150</span></div>
        </div>
    )
}

function Menu(props) {
    return(
        <div className="header__menu">
            <div className="header__menu_categories">
                <div className="header__menu_logo"><img src="../../assets/images/matter_main_page_logo.svg" alt=""/></div>
                <ul className="header__menu_nav">
                    <ul className="header__menu_item header__menu_shop">
                        SHOP<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>

                    </ul>
                    <ul className="header__menu_item header__menu_fabric">
                        FABRIC<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>

                    </ul>
                    <ul className="header__menu_item header__menu_journal">
                        JOURNAL<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>

                    </ul>
                    <ul className="header__menu_item header__menu_about">
                        ABOUT<i className="fas fa-chevron-up" style={{fontSize:"10px", padding:"0 3px"}}></i>

                    </ul>
                </ul>
            </div>
            <div className="header__menu_user">
                <div className="header__menu_welcome header__menu_icon">
                    WELCOME, ALEX
                    <div className="header__menu_icon">
                        <img className="header__menu_avatar" src="../../assets/images/avatar.jpg" alt=""/>
                    </div>
                </div>

                <div className="header__menu_search header__menu_icon">
                    <i className="fas fa-search"></i>
                </div>
                <div className="header__menu_like header__menu_icon">
                    <i className="far fa-heart"></i>
                </div>
                <div className="header__menu_basket header__menu_icon">
                    <i className="fas fa-shopping-bag"></i>
                </div>
            </div>
        </div>
    )
}

export class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='header-wrapper'>
                <BannerTop />
                <Menu />
            </div>
        )

    }
}



