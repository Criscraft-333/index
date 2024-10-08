const { makeBadge } = require('badge-maker');

const format = {
    label: 'user',
    message: 'Criscraft-333',
    color: 'cyan',
};

const svg = makeBadge(format);
console.log(svg);