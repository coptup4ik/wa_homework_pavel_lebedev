// import anime from 'animejs';
// import * as ReactDom from "react-dom";
// import * as React from "react";
// import * as _ from 'underscore'
//
//
//
//
// class Preloader extends React.Component{
//     constructor(){
//         super();
//         this.divInitialValue = 20;
//     }
//
//     componentDidMount(){
//         anime({
//             targets: '#lineDrawing .lines path',
//             strokeDashoffset: [anime.setDashoffset, 0],
//             easing: 'easeInOutSine',
//             duration: 3000,
//             delay: function (el, i) {
//                 return i * 250
//             },
//             direction: 'alternate',
//             loop: true
//         });
//     }
//
//     render() {
//         const makePreloaderLeftDiv = (value) => {
//             return <div className="preloader__left" key={value} style={{height:100/this.divInitialValue + '%'}}></div>
//         };
//
//         const makePreloaderRightDiv = (value) => {
//             return <div className="preloader__right" key={value} style={{height:100/this.divInitialValue + '%'}}></div>
//         };
//
//
//         return (<div className="preloader">
//                 <div className="left">
//                     {_.range(0, this.divInitialValue).map(makePreloaderLeftDiv)}
//                 </div>
//
//                 <div className="right">
//                     {_.range(0, this.divInitialValue).map(makePreloaderRightDiv)}
//                 </div>
//
//                 <div className="loader">
//                     <div id="lineDrawing">
//                         <svg viewBox="0 0 500 200">
//                             <g fill="none" fillRule="evenodd" stroke="white" strokeWidth="1" className="lines">
//                                 <path  fill="#696986"  d="M0.7,48.6c0-9-0.2-16.4-0.7-23.6h13.9l0.7,14h0.5c4.9-8.3,13-16,27.4-16c11.9,0,20.9,7.2,24.7,17.5h0.4
// 		c2.7-4.9,6.1-8.6,9.7-11.3c5.2-4,11-6.1,19.3-6.1c11.5,0,28.6,7.6,28.6,37.8v51.3h-15.5V62.8c0-16.7-6.1-26.8-18.9-26.8
// 		c-9,0-16,6.7-18.7,14.4c-0.7,2.2-1.3,5-1.3,7.9v53.8H55.2V59.9c0-13.9-6.1-23.9-18.2-23.9c-9.9,0-17.1,7.9-19.6,15.8
// 		c-0.9,2.3-1.3,5-1.3,7.7v52.5H0.7V48.6z"/>
//                                 <path fill="#696986" d="M199,112.1l-1.3-11h-0.5c-4.9,6.8-14.2,13-26.6,13c-17.6,0-26.6-12.4-26.6-25c0-21.1,18.7-32.6,52.4-32.4v-1.8
// 		c0-7.2-2-20.2-19.8-20.2c-8.1,0-16.6,2.5-22.7,6.5l-3.6-10.4c7.2-4.7,17.6-7.7,28.6-7.7c26.6,0,33.1,18.2,33.1,35.6v32.6
// 		c0,7.6,0.4,14.9,1.4,20.9H199z M196.7,67.7c-17.3-0.4-36.9,2.7-36.9,19.6c0,10.3,6.8,15.1,14.9,15.1c11.3,0,18.5-7.2,21.1-14.6
// 		c0.5-1.6,0.9-3.4,0.9-5V67.7z"/>
//                                 <path fill="#696986" d="M255.9,0v25h22.7v12.1h-22.7v47c0,10.8,3.1,16.9,11.9,16.9c4.1,0,7.2-0.5,9.2-1.1l0.7,11.9c-3.1,1.3-7.9,2.2-14,2.2
// 		c-7.4,0-13.3-2.3-17.1-6.7c-4.5-4.7-6.1-12.4-6.1-22.7V37.1h-13.5V25h13.5V4.1L255.9,0z"/>
//                                 <path  fill="#696986" d="M315.4,0v25h22.7v12.1h-22.7v47c0,10.8,3.1,16.9,11.9,16.9c4.1,0,7.2-0.5,9.2-1.1l0.7,11.9c-3.1,1.3-7.9,2.2-14,2.2
// 		c-7.4,0-13.3-2.3-17.1-6.7c-4.5-4.7-6.1-12.4-6.1-22.7V37.1h-13.5V25H300V4.1L315.4,0z"/>
//                                 <path fill="#696986" d="M363.7,71.4c0.4,21.4,14,30.2,29.9,30.2c11.3,0,18.2-2,24.1-4.5l2.7,11.3c-5.6,2.5-15.1,5.4-29,5.4
// 		c-26.8,0-42.8-17.6-42.8-43.9c0-26.3,15.5-47,40.8-47c28.4,0,36,25,36,41c0,3.2-0.4,5.8-0.5,7.4H363.7z M410.1,60.1
// 		c0.2-10.1-4.1-25.7-22-25.7c-16,0-23,14.8-24.3,25.7H410.1z"/>
//                                 <path fill="#696986" d="M445,52.2c0-10.3-0.2-19.1-0.7-27.2h13.9l0.5,17.1h0.7c4-11.7,13.5-19.1,24.1-19.1c1.8,0,3.1,0.2,4.5,0.5v14.9
// 		c-1.6-0.4-3.2-0.5-5.4-0.5c-11.2,0-19.1,8.5-21.2,20.3c-0.4,2.2-0.7,4.7-0.7,7.4v46.4H445V52.2z"/>
//                             </g>
//                         </svg>
//                     </div>
//                     <p className="loader__text">online store</p>
//                 </div>
//             </div>
//         )
//     }
// }
//
// ReactDom.render(<Preloader/>,document.querySelector('#preloader'));
//
//
//
//
//
// document.body.onload = function () {
//     let delay = 75;
//     let preloaderLeft = document.querySelectorAll('.preloader__left');
//     let preloaderRight = document.querySelectorAll('.preloader__right');
//     setTimeout(() => {
//         let preloader = document.querySelector('.preloader');
//         let loader = document.querySelector('.loader');
//         if (!preloader.classList.contains('done')) {
//             preloader.classList.add('done');
//             loader.classList.add('done');
//         }
//         preloaderLeft.forEach(function (value, currentIndex) {
//             setTimeout(function () {
//                 preloaderLeft[currentIndex].classList.add('preloader__left-delay')
//             }, delay * currentIndex);
//         });
//         preloaderRight.forEach(function (value, currentIndex) {
//             setTimeout(function () {
//                 preloaderRight[currentIndex].classList.add('preloader__right-delay')
//             }, delay * currentIndex);
//         });
//     }, 3000);
//
// };