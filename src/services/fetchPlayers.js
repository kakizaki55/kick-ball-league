import { checkError, client } from './client';

export async function fetchPlayers() {
  const response = await client.from('players').select().order('name');
  return checkError(response);
}
export async function fetchPlayersByTeam(id) {
  const response = await client.from('players').select('*').eq('team_id', id);

  return checkError(response);
}
export async function fetchPlayerDetailsById(id) {
  const response = await client.from('players').select('*').match({ id });
  return checkError(response);
}
