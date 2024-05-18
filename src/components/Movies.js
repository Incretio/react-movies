import React from "react";
import Movie from "./Movie";

function Movies(props) {

    const {movies} = props;
    if (movies.length === 0) {
        return <div>Not found</div>;
    }


    return (
        <div className="movies">
            {movies.map(item => (
                <Movie
                    key={item.imdbID}
                    id={item.imdbID}
                    title={item.Title}
                    year={item.Year}
                    img={item.Poster}/>
            ))}
        </div>
    );
}

export default Movies;