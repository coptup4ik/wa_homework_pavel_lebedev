import * as React from 'react';
import * as _ from 'underscore';
import * as ReactDom from "react-dom";
import "./productModal.scss";
import {Ajax} from "../../../utils/ajax";
import {Rating} from "./rating.component.jsx";
import {NavLink} from "react-router-dom";

function addToBasket() {
    Ajax.get('http://5b61f14407412d00142acf14.mockapi.io/boughtItems',
        (resp) => {
            this.setState({
                basket: resp,
            });
        },
        (e) => {
            console.log(e);
        }
    );
}


function updateModal(text, id, bool, data, array, photo) {
    this.setState({
        openModal: text,
        currentId: id,
        isClosed: bool,
        data: data,
        arrayOfImages: array,
        mainPhoto:photo

    })
}


export class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basket: [],

        }
        addToBasket = addToBasket.bind(this)

    }


    load() {
        Ajax.get('http://5b61f14407412d00142acf14.mockapi.io/boughtItems',
            (resp) => {
                this.setState({
                    basket: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
    }


    componentWillMount() {
        this.load()
    }

    render() {
        return (
            <div className="header-menu__basket"><NavLink to="/basket">
                <i className="fas fa-shopping-bag header-menu__icon">
                    <div className="header-menu_basket">{this.state.basket.length}</div>
                </i></NavLink>
            </div>
        )
    }
}


export class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePosition:0
        }
    }



    componentWillReceiveProps(newProps){
        newProps = 0;
        this.setState({
            imagePosition:newProps
        })
    }

    checkPositionValue(){
        if (this.state.imagePosition ===-700 || this.state.imagePosition > 0){
            this.setState({
                imagePosition:0
            })
        }
    }

    render() {
        return (
            <div className="goods-items__block">
                <div className="goods-items__tag" hidden={!this.props.isNew}><p className="goods-items__tag_text">NEW</p></div>
                <div className="goods-items__image">
                    <div className="goods-items__image_nav">
                        <p className="goods-items__image_arrow" onClick={()=>{this.setState({
                            imagePosition:this.state.imagePosition === 0 ? 0 : this.state.imagePosition+100
                        })
                           this.checkPositionValue()
                        }}>
                            <i className="fas fa-chevron-up" style={{fontSize:"30px", padding:"0 3px", transform:"rotate(-90deg)"}}
                            ></i>
                        </p>
                        <p className="goods-items__image_arrow" onClick={()=>{this.setState({
                            imagePosition:this.state.imagePosition-100
                        })
                            this.checkPositionValue()
                        }}>
                            <i className="fas fa-chevron-up" style={{fontSize:"30px", padding:"0 3px", transform:"rotate(90deg)"}}></i>
                        </p>
                    </div>
                    <div className="goods-items__image_wrapper" style={{transform:`translateX(${this.state.imagePosition}%)`}}>
                    {_.range(0 , this.props.images.length-1).map((value)=>{
                       return (

                           <img key={value} className="goods-items__image_img" src={this.props.images[value]} alt="picture_02"

                           />
                       )
                    })}
                    </div>
                </div>
                <div className="goods-items__header">
                    <span className="goods-items__header_text">{this.props.header}</span>
                </div>
                <div className="goods-items__price">
                    <span>${this.props.price}</span>
                    <button className="goods-items__price_btn" onClick={() => {
                        let a = _.findWhere(this.props.data, {id: this.props.id});
                        let b = [];
                        for (let i in a.images) {
                            b.push(a.images[i])
                        }
                        updateModal("modal_active", this.props.id, false, a, b, this.props.mainImage);
                    }}
                            id={this.props.id}
                    >Details
                    </button>
                </div>
            </div>
        )
    }
}


export class ProductModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: "modal",
            currentId: 0,
            isVideo: false,
            clicked: 1,
            basket: 0,
            loaded: false,
            data: {
                header: 'Loading...',
            },
            arrayOfImages: [],
            mainPhoto:null
        };
        updateModal = updateModal.bind(this)

    }



    quantityClickCounterAdd() {
        this.setState({
            clicked: this.state.clicked + 1
        });
    }

    quantityClickCounterSub() {
        if (this.state.clicked === 1) {

            this.setState({
                clicked: 1
            })
        } else {
            this.setState({
                clicked: this.state.clicked - 1
            });
        }
    }


    componentWillMount() {
        this.modal = document.createElement("div");
        this.modal.classList.add('portal');
        document.body.appendChild(this.modal);


    }


    componentWillUnmount() {
        document.body.removeChild(this.modal);
        console.log("unmount")
    }


    closeModal() {
        this.setState({
            openModal: "modal_closed"
        });

        setTimeout(() => {
            this.setState({
                isClosed: true
            })
        }, 600)
    }


    changeImage(id) {
        this.setState({
            mainPhoto:  this.state.arrayOfImages[id],
            isVideo: id === 8 ? true : false
        })
    }



    checkIsVideo(bool) {
        if (bool === false) {
            return (
                <img className="modal__mainphoto_img"
                     src={this.state.mainPhoto}
                     alt=""/>
            )
        } else {
            return (
                <video className="modal__mainphoto_img" autoPlay={true} loop={true} width="400px" height="650px">
                    <source src={this.state.data.images[8]}/>
                </video>
            )

        }
    }



    createModalWindow() {
        return (
            <div className={this.state.openModal}>
                <div className="modal__wrapper">
                    <div className="modal__header">
                        {this.state.data.header}
                        <button className="modal__closebtn" onClick={(e) => {
                            this.closeModal()
                        }}>+
                        </button>
                    </div>
                    <div className="modal__content">
                        <div className="modal__photos">
                            {_.range(0, Object.keys(this.state.arrayOfImages).length).map((value) => {
                                return (<div key={value} className="modal__photos_el"
                                             onClick={(e) => {this.changeImage(value)}}
                                             onMouseOver={(e) => {this.changeImage(value)}}
                                >
                                    <img className="modal__photos_img"
                                         src={
                                             value != 8 ? this.state.arrayOfImages[value] :
                                                 "http://bybnilka.com.ua/data/images/Travaho.jpg"} alt=""/>
                                </div>)
                            })}
                        </div>
                        <div className="modal__mainphoto">{this.checkIsVideo(this.state.isVideo)}
                        </div>
                        <div className="modal__description">
                            <div className="modal__title">{this.state.data.headerTitle}</div>
                            <div className="modal__rate">
                                <div className="modal__rate_price"
                                >USD {this.state.data.price}</div>
                                <div className="modal__rate_stars">
                                    <Rating stars={this.state.data.stars}/>
                                    <span>{this.state.data.stars} of 5</span>
                                </div>
                            </div>
                            <div className="modal__describe">
                                <div className="modal__describe_title">Describe</div>
                                <div
                                    className="modal__describe_text">{this.state.data.description}</div>
                            </div>

                            <div className="modal__partners">
                                <span className="modal__partners_text">Artisan Employment</span>
                                <div className="modal__partner">{this.state.data.artisan}</div>
                            </div>
                            <div className="modal__partners">
                                <span className="modal__partners_text">Partnership</span>
                                <div
                                    className="modal__partner">{this.state.data.partnership}</div>
                            </div>
                            <div className="modal__partners">
                                <span className="modal__partners_text">In Collab</span>
                                <div className="modal__partner">{this.state.data.inCollab}</div>
                            </div>
                            <div className="modal__select">
                                <span className="modal__select_text">Size</span>
                                <div className="modal__select_chart">
                                    <div className="modal__select_element">
                                        <button className="modal__select_btn">1</button>
                                        <button className="modal__select_btn">2</button>
                                        <button className="modal__select_btn">3</button>
                                        <button className="modal__select_btn">4</button>
                                    </div>
                                    <div className="modal__select_element">
                                        <span className="modal__select_text">Size Guidelines</span>
                                    </div>
                                </div>
                            </div>

                            <div className="modal__select">
                                <span className="modal__select_text">Quantity</span>
                                <div className="modal__select_chart">
                                    <div className="modal__select_counter">
                                        <button className="modal__select_quantity" onClick={() => {
                                            this.quantityClickCounterSub()
                                        }}>-
                                        </button>
                                        <p className="modal__select_data">{this.state.clicked < 1 ? 1 : this.state.clicked}</p>
                                        <button className="modal__select_quantity" onClick={() => {
                                            this.quantityClickCounterAdd()
                                        }}>+
                                        </button>
                                    </div>
                                    <div className="modal__select_element">
                                        <button className="modal__btn_details" onClick={
                                            () => {
                                                this.setState({
                                                    basketClicks: this.state.basket + 1
                                                });
                                                Ajax.post("http://5b61f14407412d00142acf14.mockapi.io/boughtItems",
                                                    this.state.data, (e) => console.log(e), (e) => addToBasket());

                                            }}>ADD TO CART
                                        </button>
                                    </div>
                                    <div className="modal__select_wishlist">
                                        <i className="fas fa-question-circle modal__select_icon"></i>
                                        <span className="modal__select_list">ADD TO WISHLIST</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="modal__btn_details">VIEW FULL PRODUCT DETAILS</button>
                </div>
            </div>
        )
    }

    render() {

        return (
            !this.state.isClosed && ReactDom.createPortal(this.createModalWindow(), this.modal)
        )
    }
}


