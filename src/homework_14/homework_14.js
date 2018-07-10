import "./homework_14.scss";
import {Accordeon, AccordeonList} from "./components/accordeon/accordeon";
import {AnimatedCircle} from "./components/circle/circle";


const accordeon = new Accordeon(document.querySelector('.content-wrapper'), [
    {
        title: 'Секция 1',
        text:'текст для первой секции'
    },
    {
        title: 'Секция 2',
        text:'текст для второй секции'
    },
    {
        title: 'Секция 3',
        text:'текст для третьей секции'
    }

]);
// const accordeon2 = new Accordeon(document.querySelector('#content2'));
// const accordeon3 = new Accordeon(document.querySelector('#content3'));








const circle = new AnimatedCircle(document.querySelector('#animatedCircle'));