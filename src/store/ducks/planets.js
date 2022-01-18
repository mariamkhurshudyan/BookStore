import axios  from 'axios';


const Types = {
    FETCH_PLANETS: 'FETCH_PLANETS',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
}

const initFetch = ()=>{
    return {type: Types.FETCH_PLANETS,}
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

const planetReducer = (state={ planet: [],  error: '', loading: true,}, action)=>{
    const planetState = planetActions(action)[action.type]
    return planetState ? planetState : state;
}


const fetchPlanets = async (dispatch)=>{
    try {
        const response = await axios.get('https://swapi.dev/api/planets')
        const data = response.data.results.map((planet,index)=>{
            return{
                ...planet,id:index
            }
        })
        dispatch(fetchSuccess(data))
    } catch (error){
        dispatch(fetchFailure(error.message))
    }
}

export const getPlanets = ()=>{
    return (dispatch)=>{
        dispatch(initFetch());
        fetchPlanets(dispatch).then()
    }
}

export default planetReducer;
