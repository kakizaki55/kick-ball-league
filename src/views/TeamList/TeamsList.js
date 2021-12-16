import { createClient } from '@supabase/supabase-js';
import React from 'react';
import { useState, useEffect } from 'react';
import fetchTeams from '../../services/getTeams';

export default function TeamsList() {
  const [TeamData, setTeamData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      await setTeamData(data);
    };
    fetchData();
  }, []);
  console.log(TeamData);

  return <div>Team List</div>;
}
