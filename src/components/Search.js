import React from "react";

class Search extends React.Component {

    state = {
        search: '',
        searchType: 'all'
    }

    handleChange = (event) => {
        this.setState({search: event.target.value});
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.searchType);
        }
    }

    handleChangeRadio = (event) => {
        this.setState(
            () => ({searchType: event.target.dataset.type}),
            () => this.props.searchMovies(this.state.search, this.state.searchType));
    }

    render() {
        const {search, searchType} = this.state;

        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        className="validate"
                        placeholder="Search"
                        type="search"
                        value={search}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button
                        className="btn search-btn"
                        onClick={() => this.props.searchMovies(search, searchType)}
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
                            onChange={this.handleChangeRadio}/>
                        <span>All</span>
                    </label>
                    <label className="searchTypeRadio">
                        <input
                            name="searchType"
                            data-type="movie"
                            type="radio"
                            checked={searchType === 'movie'}
                            onChange={this.handleChangeRadio}/>
                        <span>Movies</span>
                    </label>
                    <label className="searchTypeRadio">
                        <input
                            name="searchType"
                            data-type="series"
                            type="radio"
                            checked={searchType === 'series'}
                            onChange={this.handleChangeRadio}/>
                        <span>Series</span>
                    </label>
                    <label className="searchTypeRadio">
                        <input
                            name="searchType"
                            data-type="game"
                            type="radio"
                            checked={searchType === 'game'}
                            onChange={this.handleChangeRadio}/>
                        <span>Games</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Search;