/**
 * Custom class for handling errors
 * @author AjayKumar
 * @copyright Bricksadvisors copy; 2019
 */
class HttpError extends Error {

    /**
     * Constructor for handling custom message
     * @param {String} message 
     * @param {Number} statusCode 
     */
    constructor(message, statusCode) {
        super(message);
        this.code = statusCode
    }
    
}

module.exports = HttpError;