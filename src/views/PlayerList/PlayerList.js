import React from 'react';
import { useEffect, useState } from 'react';
import fetchPlayers from '../../services/fetchPlayers';

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

  return <div>Player list</div>;
}
