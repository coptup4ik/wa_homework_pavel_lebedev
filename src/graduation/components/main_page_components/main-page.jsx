import {Header} from './header.components/header.jsx'
import './main-page.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Content} from "./content.components/content.jsx";
import {Footer} from "./footer.components/footer.jsx";
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import {BasketPage} from "./Basket/basketPage.jsx";
import {BannerTop} from "./header.components/header.jsx";
import {Menu} from "./header.components/header.jsx";


class MainPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <BrowserRouter>
                <div className="main-page">
                    <Route path="/graduation.html" exact component={Header}/>
                    <Route path="/basket" component={BannerTop}/>
                    <Route path="/basket" component={BasketPage}/>

                    <Route component={Content}/>
                    <Route component={Footer}/>
                </div>
            </BrowserRouter>
        )

    }
}

ReactDOM.render(<MainPage/>, document.querySelector('#main-page'));

