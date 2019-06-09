module.exports = function urljoin(...parts) {
    return parts.reduce((res, val) => {
        if (!res.endsWith("/") && !val.startsWith("/")) {
            return `${res}/${val}`;
        } else if (res.endsWith("/") && val.startsWith("/")) {
            return `${res}${val.slice(1)}`;
        } else {
            return `${res}${val}`;
        }
    });
}