export const fetchBreeds = async (limit = 10, page = 0) => {
  const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=${ limit }&page=${ page }`);
  const breeds = await response.json();
  return breeds;
}