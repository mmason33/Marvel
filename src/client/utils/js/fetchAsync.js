/**
 * @function fetchAsync - Await fetch to resolve the GraphQL request, app is dependent on the data
 * @param {string} url - Express endpoint for the GraphQL wrapper
 * 
 * @returns {object} data
 */
async function fetchAsync (url) {
    // await response of fetch call
    let response = await fetch(url);
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
}

export { fetchAsync }