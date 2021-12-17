import React from 'react';

export default function PlayerContainer({ name, id }) {
  return (
    <>
      <span key={id}>{name}</span>
    </>
  );
}
