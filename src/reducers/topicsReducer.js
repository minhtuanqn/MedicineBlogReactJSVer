import topics from "../actions/topicsAction";

const initialState = {
    topics: [],
    selectedTopicId: '',
}

const topicsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case 'SET_TOPICS':
            return {...state, topics: payload};
        case 'SELECTED_TOPIC_ID':
            return {selectedTopicId: payload}
        default:
            return state;
    }
}

export default topicsReducer;