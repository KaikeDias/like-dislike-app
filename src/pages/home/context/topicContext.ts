import { createContext } from "react";
interface TopicState {
    topics: Topic[];
}

interface TopicActions {
    handleAddTopic: (newTopic: Topic) => void;
    handleLike: (topicId: string) => void;
    handleDislike: (topicId: string) => void;
}

export const HomeStateContext = createContext<TopicState | undefined>(undefined);
export const HomeActionsContext = createContext<TopicActions | undefined>(undefined);