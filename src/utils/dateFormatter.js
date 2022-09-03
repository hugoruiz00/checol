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