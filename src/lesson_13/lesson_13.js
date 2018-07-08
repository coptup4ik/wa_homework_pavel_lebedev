import "./lesson_13.scss";

import {Garland} from "./components/garland/garland";


import "./components/bulb/bulb.js";
import {Bulb} from "./components/bulb/bulb";

// const bulb  = new Bulb(document.querySelector('#bulb1'));
// const bulb2  = new Bulb(document.querySelector('#bulb2'));


const garland = new Garland(
    document.querySelector('#garland'), [
        new Bulb(document.querySelector('#bulb3')),
        new Bulb(document.querySelector('#bulb4'))
    ]
);
