import { checkError, client } from './client';
export async function fetchPlayers() {
  const response = await client.from('players').select().order('name');
  return checkError(response);
}
const id = 1;
export async function fetchPlayersByTeam() {
  const response = await client.from('teams').select('*, player(*)').match({ id });
  return checkError(response);
}
