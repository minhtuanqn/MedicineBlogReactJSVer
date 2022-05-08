export const setTopics = (topics) => {
    return {
        type: 'SET_TOPICS',
        payload: topics,
    };
};

export const selectedTopic = (selectedTopicId) => {
    return {
        type: 'SELECTED_TOPIC_ID',
        payload: selectedTopicId,
    };
};


