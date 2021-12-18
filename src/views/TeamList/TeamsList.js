import React from 'react';
import { useState, useEffect } from 'react';
import fetchTeams from '../../services/fetchTeams';
import TeamContainer from '../../components/TeamContainer/TeamContainer';

export default function TeamsList() {
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      await setTeamData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>Team List</div>
      {teamData.map((team) => (
        <TeamContainer key={team.id} {...team} />
      ))}
    </>
  );
}
