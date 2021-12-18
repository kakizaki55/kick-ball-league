import React from 'react';
import { Link } from 'react-router-dom';
export default function PlayerContainer({ name, id }) {
  return (
    <>
      <Link to={`/players/${id}`}>
        <div key={id}>{name}</div>
      </Link>
    </>
  );
}
