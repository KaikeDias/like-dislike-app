import { FormEvent, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./styles.css";
import { HomeActionsContext } from '../../context/topicContext';

export function TopicForm() {
  const { handleAddTopic } = useContext(HomeActionsContext) || {};
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (description.trim() === '') {
      return; 
    }

    const newTopic: Topic = {
      id: uuidv4(),
      description: description,
      author: {
        name: 'Kaike', 
        country: "sd",
        city: 'Teresina',
      },
      created_at: new Date(),
      tags: tags.split(',').map(tag => tag.trim()), 
      active: true,
      upVote: 0,
      downVote: 0,
    };

    handleAddTopic?.(newTopic);
  }

  return (
    <div>
      <h1>Adicionar Novo Tópico</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Descrição:</label>
          <input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className='input-style'
          />
        </div>
        <div>
          <label htmlFor="tags">Tags (separadas por vírgula):</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className='input-style'
          />
        </div>
        <button type="submit" className='button-style'>Adicionar</button>
      </form>
    </div>
  );
}
