import Property from "../../models/Property";
import { GET_PROPERTIES, SEARCH_PROPERTIES } from "./types";


export const getProperties = (filters) => dispatch => {
    Property.getProperties(filters).then(properties => dispatch({
        type: GET_PROPERTIES,
        payload: properties
    }));
}

export const searchProperties = (filters) => dispatch => {
    Property.search(filters).then(properties => dispatch({
        type: SEARCH_PROPERTIES,
        payload: properties
    }));
}