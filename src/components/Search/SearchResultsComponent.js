import React, { Component } from 'react';
import './Search.css';

class SearchResults extends Component {
    render() {
        return (
            <div className="search-results container-fluid">
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <div className="movie-title">
                        {this.props.movie.Title}
                    </div>
                    <div>
                        {this.props.movie.Year}
                    </div>
                    <div>
                        <i className="movie-awards">{this.props.movie.Awards}</i><br />
                    </div>
                    <div className="movie-plot">
                        {this.props.movie.Plot}
                    </div>
                    <div className="movie-actors">
                        <div className={this.props.movie.Response !== 'True' ? 'hidden' : ''}>
                            Actors<br />
                            <ul>
                            {this.props.movie.Actors.map(function(el){
                                return <li>{el}</li>
                            })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6">
                    <img src={this.props.movie.Poster} alt="" />
                </div>
            </div>
            </div>
        );
    }
}

export default SearchResults;