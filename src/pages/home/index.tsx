import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TopicList } from "./components/topicList";

export function HomePage() {
    const [topics, setTopics] = useState<Topic[]>([
        {
            id: uuidv4(),
            description: "Discussão sobre React Hooks",
            author: {
              name: "Alice",
              city: "New York",
              country: "USA",
            },
            created_at: new Date(),
            tags: ["React", "Hooks", "Frontend"],
            active: true,
            upVote: 10,
            downVote: 4
        },
        // {
        //     id: uuidv4(),
        //     description: "Node.js Best Practices",
        //     author: {
        //         name: "Bob",
        //         city: "San Francisco",
        //         country: "USA",
        //     },
        //     created_at: new Date(),
        //     tags: ["Node.js", "Backend"],
        //     active: true,
        //     upVote: 2,
        //     downVote: 6
        // },
        // {
        //     id: uuidv4(),
        //     description: "Introduction to TypeScript",
        //     author: {
        //       name: "Charlie",
        //       city: "London",
        //       country: "UK",
        //     },
        //     created_at: new Date(),
        //     tags: ["TypeScript", "Frontend", "Backend"],
        //     active: false,
        //     upVote: 15,
        //     downVote: 0
        // },
    ])

    const handleLike = (topicId: string) => {
        const updatedTopics = topics.map((topic) =>
            topic.id === topicId ? { ...topic, upVote: topic.upVote + 1 } : topic
            );
        
        setTopics(updatedTopics);
    }
    
    const handleDislike = (topicId: string) => {
        const updatedTopics = topics.map((topic) =>
            topic.id === topicId ? { ...topic, downVote: topic.downVote + 1 } : topic
            );
        
        setTopics(updatedTopics);
    }

    return (
        <>
            <TopicList topics={topics} onLike={handleLike} onDislike={handleDislike}/>
        </>
    )
}