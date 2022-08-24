export const formatDate = (dateString) => {
    const date = new Date(dateString.split(" ")[0]);
    return date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();
};