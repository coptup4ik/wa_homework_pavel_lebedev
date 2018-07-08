import "./homework_12.scss";
import {LampLight} from "./components/bulb/lamp";
import {LampManager} from "./components/lampmanager/lampmanager";

// const lamp1 = new LampLight(document.querySelector('#lamp1'));
// const lamp2 = new LampLight(document.querySelector('#lamp2'));
// const lamp3 = new LampLight(document.querySelector('#lamp3'));

const lampmanager = new LampManager(document.querySelector('.content-wrapper'), [
     new LampLight(document.querySelector('#lamp1')),
     new LampLight(document.querySelector('#lamp2')),
     new LampLight(document.querySelector('#lamp3'))
]);