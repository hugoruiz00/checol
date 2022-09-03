const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

export const formatDateFromDb = (dateString) => {
    const date = new Date(dateString.split(" ")[0]);
    return date.getDate() + " de " + monthNames[date.getMonth()] + " de " + date.getFullYear();
};

export const formatDate = (date) => {
    return date.getDate() + " de " + monthNames[date.getMonth()] + " de " + date.getFullYear();
};

export const formatDateForQuery = (date) => {
    const numberMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${date.getFullYear()}-${numberMonth}-${day}`;
};