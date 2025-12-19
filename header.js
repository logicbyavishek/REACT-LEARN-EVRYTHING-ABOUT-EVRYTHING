const h3year = React.createElement('h3', null, '2024');
const word1 = React.createElement('div', { className: 'word' }, h3year);

const line = React.createElement('div', { className: 'line' });

const h3role = React.createElement('h3', { className: 'prob' }, 'Product designer');
const word2 = React.createElement('div', { className: 'word' }, h3role);

const first = React.createElement(
    'div',
    { className: 'first' },
    [word1, line, word2]
);

/* -------- second section -------- */

const h2left = React.createElement('h2', null, '+200');
const h5left = React.createElement('h5', null, 'Project Completed');
const leftTop = React.createElement('div', { className: 'left' }, [h2left, h5left]);

const h2right = React.createElement('h2', null, '+50');
const h5right = React.createElement('h5', null, 'Startup raised');
const rightTop = React.createElement('div', { className: 'right' }, [h2right, h5right]);

const top = React.createElement('div', { className: 'top' }, [leftTop, rightTop]);

const h1hello = React.createElement('h1', null, 'Hello');
const h5intro = React.createElement('h5', null, "-it's D.Nova a design wizerd");

const arrowIcon = React.createElement('i', { className: 'ri-arrow-down-long-fill' });
const h4scroll = React.createElement('h4', null, ['Scroll Down', arrowIcon]);

const bottom = React.createElement(
    'div',
    { className: 'bottom' },
    [h1hello, h5intro, h4scroll]
);

const second = React.createElement(
    'div',
    { className: 'second' },
    [top, bottom]
);

/* -------- third section -------- */

const img = React.createElement('img', {
    src: 'https://framerusercontent.com/images/biJ9gMhaMo1KzmK80NLpwSBDZvw.png?scale-down-to=512',
    alt: ''
});

const third = React.createElement('div', { className: 'third' }, img);

/* -------- header -------- */

const header = React.createElement(
    'header',
    null,
    [first, second, third]
);

export default header;
