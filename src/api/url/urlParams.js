export const urlParams = (api_key, movieSearch) => {
  const desiredPathname = "/3/search/movie";

  const params = {
    api_key: api_key,
    query: movieSearch,
    include_adult: false,
    language: "en-US",
    page: 1,
  };
  return { params, desiredPathname };
};

export const urlMovieListParams = (api_key, movieList, page) => {
  const desiredPathname = `/3/movie/${movieList}`;

  const params = {
    api_key: api_key,
    include_adult: false,
    language: "en-US",
    page: page,
  };
  return { params, desiredPathname };
};
