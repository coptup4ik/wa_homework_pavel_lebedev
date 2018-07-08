import "./homework_14.scss";
import {Accordeon} from "./components/accordeon/accordeon";
import {AnimatedCircle} from "./components/circle/circle";


const accordeon = new Accordeon(document.querySelector('#content1'));
const accordeon2 = new Accordeon(document.querySelector('#content2'));
const accordeon3 = new Accordeon(document.querySelector('#content3'));

const circle = new AnimatedCircle(document.querySelector('#animatedCircle'));