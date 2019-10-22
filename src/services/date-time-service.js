/**
 * @param {string} time
 * @returns {string}
 */
export function formatTime(time) {
    // Need to prepend a date string in order to get a proper date object
    return new Date(`1/1/1 ${time}`).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
}
