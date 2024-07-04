// src/components/PollList.js
import React from 'react';
import { Link } from 'react-router-dom';

function PollList() {
  const polls = [
    { id: 1, title: 'Poll 1' },
    { id: 2, title: 'Poll 2' },
  ];

  return (
    <div className="container">
      <h1>Polls</h1>
      <ul>
        {polls.map((poll) => (
          <li key={poll.id}>
            <Link to={`/poll/${poll.id}`}>{poll.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PollList;