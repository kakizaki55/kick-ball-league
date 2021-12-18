import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPlayers, fetchPlayersByTeam } from '../../services/fetchPlayers';
import PlayerContainer from '../../components/PlayerContainer/PlayerContainer';

export default function PlayerList(props) {
  const [playerdata, setPlayerData] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await fetchPlayersByTeam(id);
        setPlayerData(data);
      } else {
        const data = await fetchPlayers();
        setPlayerData(data);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      {playerdata.map((team) => (
        <PlayerContainer key={team.id} {...team} />
      ))}
    </>
  );
}
