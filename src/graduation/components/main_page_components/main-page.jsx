import {Header} from './header.component/header.jsx'
import './main-page.scss';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function MainPage() {
    return (
        <Header />
    )
}


ReactDom.render(<MainPage />, document.querySelector('#main-page'));