import { makeBadge } from "badge-maker";

const format = {
    label: 'user',
    message: 'Criscraft-333',
    color: 'cyan',
};

const badge = makeBadge(format);
console.log(badge);