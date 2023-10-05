import { format } from "date-fns";
import "./styles.css";

interface TopicListItemProps {
  topic: Topic;
  onLike: (topicId: string) => void;
  onDislike: (topicId: string) => void;
}

export function TopicListItem({
  topic,
  onLike,
  onDislike,
}: TopicListItemProps) {
  // Formatar a data para exibir apenas o dia da semana
  const formattedDate = format(topic.created_at, "EEEE");

  const balance = topic.upVote - topic.downVote;

  const balanceClass =
    balance > 0 ? "positive-balance" : balance < 0 ? "negative-balance" : "";

  return (
    <div>
      <li className="card">
        <div className="header">
          <div className="tag-list">
            {topic.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div id="date">
            <p>{formattedDate}</p>
          </div>
        </div>
        <div className="main-content">
          <p className="description-text">{topic.description}</p>
        </div>
        <div className="footer">
          <div className="votes-area">
            <div className="action-bar">
              <div className="like-button">
                <button onClick={() => onLike(topic.id)}>
                  <span role="img" aria-label="Thumbs up">
                    👍
                  </span>
                </button>
              </div>
              <div className="dislike-button">
                <button onClick={() => onDislike(topic.id)}>
                  <span role="img" aria-label="Thumbs down">
                    👎
                  </span>
                </button>
              </div>
              <div className={`balance ${balanceClass}`}>
                <p>{balance}</p>
              </div>
            </div>
            <progress
              className="progress"
              value={topic.upVote}
              max={topic.upVote + topic.downVote}
            ></progress>
          </div>

          <div className="author-info">
            <p id="author-name">{topic.author.name}</p>
            <p>{topic.author.city}</p>
          </div>
        </div>
      </li>
    </div>
  );
}
