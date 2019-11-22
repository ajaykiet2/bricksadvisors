import { baseUrl, serialize } from "../utils";

/**
 * Property Model to handle all the property related transactions
 */
export default class Property {
    
    /**
     * Get the single property by id
     * @param {String} propertyId
     * @return {Object}
     */
    static async getProperty(propertyId) {
        return await fetch(baseUrl+`/property?propertyId=${propertyId}`).then(res => res.json());
    }

    /**
     * Fetches all the properties based on filters
     * @param {Object} filters 
     */
    static async getProperties(filters) {
        return await fetch(baseUrl + "/trending_properties?" + serialize(filters)).then(res => res.json());
    }

    /**
     * Fetches all the properties based on filters
     * @param {Object} filters 
     */
    static async search(filters) {
        return await fetch(baseUrl + "/search?" + serialize(filters)).then(res => res.json());
    }


}