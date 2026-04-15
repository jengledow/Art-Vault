import { format } from 'date-fns';

function short(milliseconds: number): string {
    let date: Date = new Date(milliseconds);
    return format(date, 'MMM d, y');
}

export {
    short
}