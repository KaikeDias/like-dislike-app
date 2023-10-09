import { TopicForm } from "./components/topicForm";
import { TopicList } from "./components/topicList";
import { HomeProvider } from "./components/HomeProvider";

export function HomePage() {
  return (
    <HomeProvider>
      <TopicForm />
      <TopicList />
    </HomeProvider>
  );
}
