interface TopicState {
  topics: Topic[];
}

export enum ActionType {
  ADDED,
  LOADED,
  LIKE,
  DISLIKE,
}

type ActionAdded = { type: ActionType.ADDED; payload: { topic: Topic } };
type ActionLoaded = { type: ActionType.LOADED; payload: { topics: Topic[] } };
type ActionLike = { type: ActionType.LIKE; payload: { topicId: string } };
type ActionDislike = { type: ActionType.DISLIKE; payload: { topicId: string } };

type Action = ActionAdded | ActionLoaded | ActionLike | ActionDislike;

function reducer(state: TopicState, action: Action): TopicState {
  switch (action.type) {
    case ActionType.ADDED: {
      const new_topic = action.payload.topic;
      return { topics: [new_topic, ...state.topics] };
    }
    case ActionType.LOADED: {
      return { topics: [...action.payload.topics] };
    }
    case ActionType.LIKE: {
      const updatedTopics = state.topics.map((topic) =>
        topic.id === action.payload.topicId
          ? { ...topic, upVote: topic.upVote + 1 }
          : topic
      );
      return { topics: updatedTopics };
    }
    case ActionType.DISLIKE: {
      const updatedTopics = state.topics.map((topic) =>
        topic.id === action.payload.topicId
          ? { ...topic, downVote: topic.downVote + 1 }
          : topic
      );
      return { topics: updatedTopics };
    }
    default: {
      console.warn("Action Inválida");
      return state;
    }
  }
}

export { reducer as TopicReducer };
