import React from 'react';

export default function TeamContainer({ city, name, state }) {
  return (
    <>
      <div>Name:{name}</div>
      <div>State:{state}</div>
      <div>City:{city}</div>
    </>
  );
}
