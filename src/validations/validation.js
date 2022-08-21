export const exists = ( value, message ) => value ? '' : message;

export const isNumeric = ( value, message ) => isNaN(value) ? message: '';