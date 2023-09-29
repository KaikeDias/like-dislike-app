import { TopicListItem } from "../topicListItem";

interface TopicListProps {
    topics: Topic[];
    onLike: (topicId: string) => void;
    onDislike: (topicId: string) => void;
}

export function TopicList({topics,  onLike, onDislike }: TopicListProps) {
    return (
        <>
            <h3>Tópicos</h3>
            <ul>
                {topics.map(topic => <TopicListItem key={topic.id} topic={topic} onLike={onLike} onDislike={onDislike}/>)}
            </ul>
        </>
    )
}