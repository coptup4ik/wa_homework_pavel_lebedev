import * as React from 'react';
import './footer.scss';
import {SubscribeModal} from "./subscribeModal.component.jsx";

export class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
            activeClass:false,
            inputField:''
        }
    }

    render() {
        return (
            <div className="footer">
                <div className="footer__categories">
                    <ul className="footer__block">
                        <p className="block__header">Categories</p>
                        <li className="block__item"><a href="#" className="block__item_url">About us</a></li>
                        <li className="block__item"><a href="#" className="block__item_url">Testimonials</a></li>
                        <li className="block__item"><a href="#" className="block__item_url">Contact</a></li>
                        <li className="block__item"><a href="#" className="block__item_url">Journal</a></li>
                        <li className="block__item"><a href="#" className="block__item_url">Privacy Policy</a></li>
                    </ul>
                    <ul className="footer__block">
                        <p className="block__header">Partners</p>
                        <li className="block__item"><a href="#" className="block__item_url">Support</a></li>
                        <li className="block__item"><a href="#" className="block__item_url">Shipping & Returns</a></li>
                        <li className="block__item"><a href="#" className="block__item_url">Size Guide</a></li>
                        <li className="block__item"><a href="#" className="block__item_url">Product Care</a></li>
                    </ul>
                    <ul className="footer__block">
                        <p className="block__header">Contact us</p>
                        <li className="block__item">26A Pagoda St, TANGS,<br/>
                            Singapore, 058187</li>
                        <li className="block__item">+65 6221 5462</li>
                    </ul>
                    <div className="footer__block">
                        <div className="footer__subscribe">
                            <p className="block__header">Subscribe to newsletter</p>
                            <div className="block__email">
                                <input type="text" className="block__email_text" placeholder="Enter your email" value={this.state.inputField}
                                onChange={(value)=>{
                                    this.setState({
                                        inputField:value.target.value
                                    })
                                }}
                                />
                                <button className="block__email_btn" onClick={()=>{
                                    this.setState({activeClass:!this.state.activeClass});
                                    setTimeout(()=>{this.setState({activeClass:!this.state.activeClass});},6000)
                                    this.setState({
                                        inputField:""
                                    })
                                }}>SUBSCRIBE</button>
                                {this.state.activeClass && <SubscribeModal active={this.state.activeClass}/>}
                            </div>
                            <div className="block__social">
                                <i className="fab fa-twitter block__social_icon"></i>
                                <i className="fab fa-facebook-f block__social_icon"></i>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__copyright">
                    © Copyright Matter PTE LTD  2017
                </div>
            </div>
        );
    }

}