import React, {useEffect, useState} from "react";

function Search(props) {

    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('all');

    useEffect(() => {
        props.searchMovies(search, searchType);
    }, [searchType])

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.searchMovies(search, searchType);
        }
    }

    const handleChangeRadio = (event) => {
        setSearchType(event.target.dataset.type);
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    className="validate"
                    placeholder="Search"
                    type="search"
                    value={search}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="btn search-btn"
                    onClick={() => props.searchMovies(search, searchType)}
                >
                    Search
                </button>
            </div>
            <div>
                <label className="searchTypeRadio">
                    <input
                        name="searchType"
                        data-type="all"
                        type="radio"
                        checked={searchType === 'all'}
                        onChange={handleChangeRadio}/>
                    <span>All</span>
                </label>
                <label className="searchTypeRadio">
                    <input
                        name="searchType"
                        data-type="movie"
                        type="radio"
                        checked={searchType === 'movie'}
                        onChange={handleChangeRadio}/>
                    <span>Movies</span>
                </label>
                <label className="searchTypeRadio">
                    <input
                        name="searchType"
                        data-type="series"
                        type="radio"
                        checked={searchType === 'series'}
                        onChange={handleChangeRadio}/>
                    <span>Series</span>
                </label>
                <label className="searchTypeRadio">
                    <input
                        name="searchType"
                        data-type="game"
                        type="radio"
                        checked={searchType === 'game'}
                        onChange={handleChangeRadio}/>
                    <span>Games</span>
                </label>
            </div>
        </div>
    )
}

export default Search;