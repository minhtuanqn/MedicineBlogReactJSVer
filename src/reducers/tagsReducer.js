
const initialState = {
    tags: [],
    selectedId: null,
}

const tagsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case 'SET_TAGS':
            return {...state, tags: payload};
        default:
            return state;
    }
}

export default tagsReducer;