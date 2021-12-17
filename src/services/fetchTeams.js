import { checkError, client } from './client';

export default async function fetchTeams() {
  const response = await client.from('teams').select().order('name');
  return checkError(response);
}
