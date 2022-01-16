import axios  from 'axios';

const Types = {
    FETCH_PLANETS: 'FETCH_PLANETS',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
}

const initFetch = ()=>{
    return {type: Types.FETCH_PLANETS}
}

const fetchSuccess = data =>{
    return {
        type: Types.FETCH_SUCCESS,
        data
    }
}

const fetchFailure = message =>{
    return{
        type: Types.FETCH_FAILURE,
        message
    }
}

const planetActions = (action)=>{
    const {data, message} = action
    return {
        'FETCH_PLANETS': { loading: true },
        'FETCH_SUCCESS': {
            loading: false,
            planet: data,
            error: ''
        },
        'FETCH_FAILURE':{
            loading: false,
            planet: [],
            error: message
        }
    }
}

const planetReducer = (state=[], action)=>{
    const planetState = planetActions(action)[action.type]
    return planetState ? planetState : state;
}


