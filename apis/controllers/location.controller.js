const HttpError = require('../errors/HttpError')

const DUMMY_LOCATIONS = [
    {
        id: "l1",
        title: "Noida Extension",
        city: "Greater Noida",
        description: "This is the place where all the residential properties are situated",
        createdBy: "user1"
    },
    {
        id: "l2",
        title: "Noida",
        city: "Noida",
        description: "This is the place where all the residential properties are situated",
        createdBy: "user2"
    },
    {
        id: "l3",
        title: "Noida Extension",
        city: "Greater Noida",
        description: "This is the place where all the residential properties are situated",
        createdBy: "user3"
    },
    {
        id: "l4",
        title: "Delhi",
        city: "Delhi",
        description: "This is the place where all the residential properties are situated",
        createdBy: "user1"
    }
];

const DUMMY_USERS = [
    {
        id: "user1",
        name: "Ajay Kumar",
        contact: "7042391949"
    },
    {
        id: "user2",
        name: "Vijay Kumar",
        contact: "7500068168"
    },
    {
        id: "user3",
        name: "Ajeet Singh",
        contact: "9990092901"
    }
];

/**
 * This is the controller for handling all location related routes.
 * @namespace controllers
 * @class Location
 * @author AjayKumar
 * @imports { HttpError, Database }
 * @copyright 2019 copy; Bricksadvisors
 */
class Location {    
    
    /**
     * Get paarticular location based on location id
     * @method get
     * 
     * @param {Object} req 
     * @param {Object} res 
     * @param {function} next 
     * @throws {HttpError}
     */
    get(req, res, next) {
        /**
         * store location id from query parameters
         */
        const locationId = req.params.locationId;

        /**
         * dummy data
         */
        const location = DUMMY_LOCATIONS
            .map(l => {
                return {...l, createdBy: DUMMY_USERS.find(u=>u.id===l.createdBy)}
            })
            .find(l => l.id === locationId);

        /**
         * Throw an error if location was not found
         */
        if (!location) {
            throw new HttpError("No location found for this id!", 404);
        }
        
        /**
         * Returns the response along with location
         */
        res.json({
            status: true, 
            message: "Successfully loaded!",
            location: location
        });
    }

    /**
     * Finds all locations and sets the response
     * @method getAll
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @param {function} next
     * 
     * @throws {HttpError}
     * @return {void} 
     */
    getAll(req, res, next) {
        
        /**
         * 
         */
        const locations = DUMMY_LOCATIONS.map(l=>{
            return {...l, createdBy: DUMMY_USERS.find(u=> u.id === l.createdBy)}
        });
        
        /**
         * Throws the error
         */
        if (!locations) {
            throw new HttpError("Locations not found!", 404);
        } 
    
        res.json({
            status: true, 
            message: "Successfully loaded!", 
            locations
        });
    }
}

module.exports = new Location();


