/* eslint-disable react/prop-types */
const Genres = ({ movie }) => {
  const genres = movie.genre_ids || [];


  const genreArray = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mistery",
    "Romance",
    "Sci-Fi",
    "TvMovie",
    "Thriller",
    "War",
    "Western",
    "undefined"
  ];

  const idArray = [
    28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878,
    10770, 53, 10752, 37,undefined
  ];

  const genreIdMap = {};

  for (let i = 0; i < genreArray.length; i++) {
    genreIdMap[idArray[i]] = genreArray[i];
  }

  return (
    <div className="max-w-sm text-warning font-sans text-xs flex justify-center align-middle flex-wrap ">
     
      {genres.length > 0 ? (
        genres.map((id, index) => (
          <span className="p-2" key={index}>
          
            {genreIdMap[id] || "Unknown"}
          </span>
        ))
      ) : (
        <span className="p-2 flex justify-center">No genres available</span>  
      )}
    </div>
  );
};

export default Genres;
