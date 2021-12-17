import React from 'react';

export default function PlayerContainer({ players }) {
  return (
    <>
      {players.map((player) => (
        <span key={player.id}>{player.name}</span>
      ))}
    </>
  );
}
