import {Header} from './header.components/header.jsx'
import './main-page.scss';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Content} from "./content.components/content.jsx";

function MainPage() {
    return (
        <div className="main-page">
            <Header />
            <Content />
        </div>
    )
}


ReactDom.render(<MainPage />, document.querySelector('#main-page'));