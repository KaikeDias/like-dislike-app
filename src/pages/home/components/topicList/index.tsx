import { useContext } from "react";
import { HomeStateContext } from "../../context/topicContext";
import { TopicListItem } from "../topicListItem";

export function TopicList() {
    const { topics } = useContext(HomeStateContext) || {};

    return (
        <>
            <h3>Tópicos</h3>
            <ul>
                {topics?.map(topic => <TopicListItem key={topic.id} topic={topic} />)}
            </ul>
        </>
    )
}
