export const notifyUserApi = async (payload: any) => {
  const response = await fetch("");
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
};