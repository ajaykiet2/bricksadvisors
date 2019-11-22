export const serialize = (filters) => {
    return Object.keys(filters).map(key => key + '=' + filters[key]).join('&')
}

export const queryToObject = query => {
    let q = query.replace('?','');
    return JSON.parse('{"' + decodeURI(q).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}

export const baseUrl = "http://localhost:3000";