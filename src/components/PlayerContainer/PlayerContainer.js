import React from 'react';
import { Link } from 'react-router-dom';
export default function PlayerContainer({ name, id }) {
  return (
    <>
      <Link to={`/player/${id}`}>
        <span key={id}>{name}</span>
      </Link>
    </>
  );
}
