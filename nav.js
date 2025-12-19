const img = React.createElement('img', {src:'./image.png', alt:''});
const logo = React.createElement('div', {className:'logo'},img);
const h3about = React.createElement('h3', null, 'About Me');
const h3portfolio = React.createElement('h3', null, 'Portfolio');
const h3services = React.createElement('h3', null, 'Services');
const h3blog = React.createElement('h3', null, 'Blog');

const divright = React.createElement('div', {className:'right'},[logo,h3about, h3portfolio, h3services, h3blog]);


const a = React.createElement('a', null, 'Book A Call ', React.createElement('i', {className:'ri-arrow-right-up-line'}));
const divleft = React.createElement('div', {className:'left'},a);
const nav = React.createElement('nav', null,[divright, divleft]);
export default nav; 