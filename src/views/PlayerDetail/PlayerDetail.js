import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import { fetchPlayerDetailsById } from '../../services/fetchPlayers';
import PlayerDetailContainer from '../../components/PlayerDetail/PlayerDetailContainer';

export default function PlayerDetail(props) {
  const [player, setPlayer] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerDetailsById(id);
      setPlayer(data);
    };
    fetchData();
  }, [id]);
  if (!player) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <PlayerDetailContainer player={player[0]} />
    </div>
  );
}
