import * as React from 'react';
import * as ReactDom from 'react-dom';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const Example = () => (
    <Accordion accordion={false}>


        <AccordionItem>

            <AccordionItemTitle>
                <h3>Simple title</h3>
            </AccordionItemTitle>


            <AccordionItemBody>
                <AccordionItem>

                    <AccordionItemTitle>
                        <h3>Simple title</h3>
                    </AccordionItemTitle>


                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>


                </AccordionItem>
            </AccordionItemBody>


        </AccordionItem>



    </Accordion>
);

ReactDom.render(<Example />, document.querySelector('#app'));