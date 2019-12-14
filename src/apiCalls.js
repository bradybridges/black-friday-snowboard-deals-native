export const getBoards = async () => {
  const response = await fetch('https://snowboard-prices-api.herokuapp.com/api/v1/boards');
  if(!response.ok) {
    return Error('Failed to get boards');
  }
  const boards = await response.json();
  return boards;
}