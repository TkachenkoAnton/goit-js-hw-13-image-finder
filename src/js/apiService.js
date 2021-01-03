import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const key = `19750008-68e049b84929c12580fde6b4b`;

export default async function axiosPixabayApi(searchQuery, page = 1) {
  const { data } = await axios.get(
    `/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`,
  );
  return data.hits;
}
