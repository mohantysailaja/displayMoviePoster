**/
https://github.com/HubSpotWebTeam/CodeExercise/blob/main/src/views/index.html
 const Body = () =>
    {
        return(
            <div className="movie-container">
              <MoviePoster movieList1 = {movieList[0]}/>
				{
         movieList.media.map((moviedetails => <MoviePoster  movieList1={moviedetails}/>)
         )}  
            </div>
        )
    }