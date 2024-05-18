import React, {useState} from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Preloader from "../components/Preloader";

const API_NAME = process.env.REACT_APP_API_KEY;

function Main() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchMovies = (searchText, searchType) => {
        if (!searchText || searchText.length < 3) {
            setMovies([]);
            return;
        }
        setLoading(true);
        const type = (searchType && searchType !== 'all') ? '&type=' + searchType : '';
        const url = `https://www.omdbapi.com?apikey=${API_NAME}&s=${searchText}${type}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovies(data.Search ?? []);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }

    return (
        <main className="container content">
            <Search searchMovies={searchMovies}/>
            {loading ?
                <Preloader/>
                :
                <Movies movies={movies}/>
            }

        </main>
    );
}

export default Main;