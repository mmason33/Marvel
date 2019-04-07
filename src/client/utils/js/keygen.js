/**
 * @function keyGen - Generate unique key
 * @param {int} length - The desired length of the key
 *
 * @returns {string} key
 */
export const keyGen = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let key = '';

    for (let i = 0; i < length; i++) {
        key += chars[Math.floor(Math.random() * chars.length)];
    }

    return key;
}