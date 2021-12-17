import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/fetchPlayers';
import PlayerContainer from '../../components/PlayerContainer/PlayerContainer';

export default function PlayerList() {
  const [playerdata, setPlayerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      await setPlayerData(data);
    };
    fetchData();
  }, []);
  console.log(playerdata);
  return (
    <>
      {playerdata.map((team) => (
        <PlayerContainer key={team.id} {...team} />
      ))}
    </>
  );
}
