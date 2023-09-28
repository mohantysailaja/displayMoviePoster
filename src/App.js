   import React from "react";
   import ReactDOM from "react-dom/client";
   import { useState } from "react";//named import
   import movieList from "../mockData";


   ////Display movie posters

   const MoviePoster =(props) => {
   // console.log(props);
   // const {moviename, year, Genre} = props;
   const{ movieListm } = props;
   //console.log(movieList1);
   const{title, year,poster,genre} = movieListm;
   return(
   <div className="movie-card">
   <img alt="movie-poster" className="movieimage"
   src = {poster}
   />
   <h3>{title +"(" + year+")"}</h3>
   <h3>{"movie Genre:" +" "+"("+genre.join(", ")+")"}</h3>

   </div>
   );
   };


   

   /*let movieDetails = movieList.media.map(function(element){
   return element.title
   });
   console.log(movieDetails);
   */

   //Functional Component
   const Header = () =>
   (
   <div id="container">
   <select id="dropdownGenre">
   <option>Select a Genre</option>
   <option value="comedy">Comedy</option>
   <option value="option1">Option 1</option>
   <option value="option2">Option 2</option>
   <option value="option3">Option 3</option>
   </select>
   <select id="dropdownYear"> <option>
   Select a Year</option>
   <option value="2023">2023</option>
   <option value="optionA">Option A</option>
   <option value="optionB">Option B</option>
   <option value="optionC">Option C</option>
   </select>
   <div>
   <label>
   <input type="radio" value="movies"></input>Movies
   </label>
   <label>
   <input type="radio" value="books"></input>Books
   </label>
   <div className="search-container">
   <div className="search-icon"></div>
   <input type="text" className="search-input" placeholder="Search..."/>
   <div>
      <button  className="filter-button">Show selected  my Movie Poster </button>
   </div>
   </div>
   </div>
   </div>
   );
   //Body component
   const Body = () =>
   {
      //lOcal Sttae Variable
      //see below it is nothing but array destrcturing 4 lines makes you easy to understand
     // const arr = useState(movieList);
     // const[listOfMovies,setListOfMovies]=arr;
    // const listOfMovies = arr[0];
    // const setListOfMovies = arr[1];

      const [listOfMovies, setListOfMovies] = useState(movieList)
         
         
         //[

       /*  {
            "title": "Star Wars: A New Hope",
            "year": "1977",
            "poster": "https://ia.media-imdb.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SY1000_CR0,0,654,1000_AL_.jpg",
            "genre": ["action", "adventure", "fantasy"],
            "type": "movie"
            },
            {
            "title": "Predator",
            "year": "1987",
            "poster": "https://ia.media-imdb.com/images/M/MV5BMTI2ODMzODA0Ml5BMl5BanBnXkFtZTYwNTM3NzY5._V1._CR17,27,308,447_.jpg",
            "genre": ["action", "adventure", "sci-fi"],
            "type": "movie"
            },
      ]; 
      */
      //I can't modify as above, that's why we use the second paramter 
     /* let listOfmoviesjsnormal= [
         {
            "title": "Star Wars: A New Hope",
            "year": "1977",
            "poster": "https://ia.media-imdb.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SY1000_CR0,0,654,1000_AL_.jpg",
            "genre": ["action", "adventure", "fantasy"],
            "type": "movie"
            },
            {
            "title": "Predator",
            "year": "1987",
            "poster": "https://ia.media-imdb.com/images/M/MV5BMTI2ODMzODA0Ml5BMl5BanBnXkFtZTYwNTM3NzY5._V1._CR17,27,308,447_.jpg",
            "genre": ["action", "adventure", "sci-fi"],
            "type": "movie"
            },
      ];*/
   return(
      <div className="body">
         <div className="filter">
            <button className="filter-button"
            onClick={() => {
               //filter logic here
               const filteredListOfMovies = listOfMovies.filter
               ((movie) => movie.year > "2000"
               );
               setListOfMovies(filteredListOfMovies);
               console.log(setListOfMovies);
            }}
            >
               Show selected  my Movie Poster 
            </button>
         </div>
   
   <div className="movie-container">
   {listOfMovies.map((moviedetails,index) => (
   <MoviePoster key={index} movieListm={moviedetails} />
   ))}
   </div>
   </div>
   );
   };


   //Body Layout starts here
   const AppLayout = () =>
   (
   <div className="app">
   <Header />
   <Body/>
   </div>
   );

   //rendering the component
   // <MoviePoster moviename="No Country For Old Men" year="2005" Genre="western"/>
   const root = ReactDOM.createRoot(document.getElementById("root"));

   root.render(<AppLayout />);
