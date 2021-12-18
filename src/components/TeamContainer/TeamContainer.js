import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamContainer({ city, name, state, id }) {
  return (
    <>
      <Link to={`/teams/${id}`}>
        <div>Name:{name}</div>
      </Link>
      <div>State:{state}</div>
      <div>City:{city}</div>
    </>
  );
}
