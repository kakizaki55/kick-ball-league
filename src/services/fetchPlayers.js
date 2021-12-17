import { checkError, client } from './client';
export default async function fetchPlayers() {
  const response = await client.from('teams').select('players').order('name');
  return checkError(response);
}
