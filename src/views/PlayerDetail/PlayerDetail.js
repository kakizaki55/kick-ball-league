import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayerDetailsById } from '../../services/fetchPlayers';
import PlayerDetailContainer from '../../components/PlayerDetail/PlayerDetailContainer';

export default function PlayerDetail(props) {
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerDetailsById(id);
      setPlayer(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <PlayerDetailContainer player={player[0]} />
    </div>
  );
}
