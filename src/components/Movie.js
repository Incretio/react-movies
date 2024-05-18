import React from "react";

function Movie(props) {

    const {id, title, year, img} = props;

    return (
        <div id={id} className="card movie">
            <div className="card-image">
                <img src={img} alt={title}/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">
                    {title}
                </span>
                <span className="card-title grey-text text-darken-4 right down">
                    {year}
                </span>
            </div>
        </div>
    );
}

export default Movie;