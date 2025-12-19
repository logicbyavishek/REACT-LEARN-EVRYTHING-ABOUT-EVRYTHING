import h1 from './test.js';
import h2 from './app.js';
import {h3} from './app.js';

const div = ()=> {
    return React.createElement('div', null,[h1(),h2(),h3()])
};

export default div;