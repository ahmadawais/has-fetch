/**
 * Has Fetch.
 * Check if the client-side browser has the fetch API support.
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */
module.exports = () => (typeof window !== 'undefined' ? 'fetch' in window : false);
