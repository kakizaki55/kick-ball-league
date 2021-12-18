import React from 'react';

export default function PlayerDetailContainer({ player }) {
  return (
    <>
      <div>name:{player.name}</div>
      <div>position:{player.position}</div>
    </>
  );
}
