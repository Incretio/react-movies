import React from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Preloader from "../components/Preloader";

const API_NAME = process.env.REACT_APP_API_KEY;
console.log(API_NAME);

class Main extends React.Component {

    state = {
        movies: [],
        loading: false
    }

    searchMovies = (searchText, searchType) => {
        this.setState({loading: true});
        const type = (searchType && searchType !== 'all') ? '&type=' + searchType : '';
        const url = `https://www.omdbapi.com?apikey=${API_NAME}&s=${searchText}${type}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const newMovies = data.Search ?? [];
                this.setState({movies: newMovies});
                this.setState({loading: false});
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            });
    }

    render() {
        const {movies, loading} = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {loading ?
                    <Preloader/>
                    :
                    <Movies movies={movies}/>
                }

            </main>
        );
    }
}

export default Main;