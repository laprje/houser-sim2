const initialState = {
    name: '',
    address: '',
    city: '',
    ST: '',
    zip: '',
    price: 0,
    mortgage: 0,
    rent: 0,
    image: ''
}

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_ST = "UPDATE_ST";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const UPDATE_PRICE = "UPDATE_PRICE";
const UPDATE_IMAGE = "UPDATE_IMAGE"
;
function reducer(state = initialState, action) {
    console.log("REDUCER HIT: ACTION ->" , action)
    switch(action.type) {
        case UPDATE_NAME:
            return Object.assign( {}, state, { name: action.payload })
        case UPDATE_ADDRESS:
            return Object.assign( {}, state, { address: action.payload})
        case UPDATE_CITY:
            return Object.assign( {}, state, { city: action.payload})
        case UPDATE_ST:
            return Object.assign( {}, state, { ST: action.payload })
        case UPDATE_ZIP:
            return Object.assign( {}, state, { zip: action.payload })
        case UPDATE_MORTGAGE:
            return Object.assign( {}, state, { mortgage: action.payload })
        case UPDATE_RENT:
            return Object.assign( {}, state, { rent: action.payload })
        case UPDATE_PRICE:
            return Object.assign( {}, state, { price: action.payload })
        case UPDATE_IMAGE:
            return Object.assign( {}, state, { image: action.payload });
        default: return state
    }
}


export function updateName( name ) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress( address ) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity( city ) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateST( ST ) {
    return { 
        type: UPDATE_ST,
        payload: ST
    }
}

export function updateZip( zip ) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateMortgage( mortgage ) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent( rent ) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export function updatePrice( price ) {
    return {
        type: UPDATE_PRICE,
        payload: price
    }
}

export function updateImage( image ) {
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}


export default reducer;

