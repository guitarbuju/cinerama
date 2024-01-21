

/* eslint-disable react/prop-types */
const Genres = ({genres}) => {
    const genreArray = [
        'Action','Adventure','Animation','Comedy','Crime','Documentary','Drama','Family','Fantasy','History','Horror','Music','Mistery','Romance','Sci-Fi','TvMovie','Thriller','War','Western' ];
       
       const idArray = [28,12,16,35,80,99,18,10751,14,36,27,10402,9648,10749,878,10770,53,10752,37
       
       ];
       
       const genreIdMap = {};
       
       for (let i = 0; i < genreArray.length; i++) {
         genreIdMap[idArray[i]] = genreArray[i];
       }
      

  return (
    <div className="max-w-sm text-warning font-sans text-xs grid grid-cols-3  grid-row-2 mt-1 mb-1">
        {genres.map((id,index )=> <span className=' p-2 ' key={index}>{genreIdMap[id]}</span>)}
    </div>
  )
}

export default Genres