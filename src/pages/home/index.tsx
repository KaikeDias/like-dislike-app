import { useEffect, useReducer} from "react";
import { TopicList } from "./components/topicList";
import { TopicForm } from "./components/topicForm";
import { ActionType, TopicReducer } from "./reducers/topicReducer";

export function HomePage() {
  const [{ topics }, dispatch] = useReducer(TopicReducer, { topics: [] });

  useEffect(() => {
    fetch("http://localhost:3000/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ActionType.LOADED, payload: { topics: data } });
      });
  }, []);

  const handleAddTopic = async (newTopic: Topic) => {
    try {
      const response = await fetch("http://localhost:3000/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTopic),
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar o tópico");
      }

      const addedTopic = await response.json();
      dispatch({ type: ActionType.ADDED, payload: { topic: addedTopic } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = (topicId: string) => {
    dispatch({ type: ActionType.LIKE, payload: { topicId } });
  };

  const handleDislike = (topicId: string) => {
    dispatch({ type: ActionType.DISLIKE, payload: { topicId } });
  };

  return (
    <>
      <TopicForm onAddTopic={handleAddTopic} />
      <TopicList
        topics={topics}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </>
  );
}
