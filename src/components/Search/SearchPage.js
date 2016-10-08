import React, { Component } from 'react';
import SearchResults from './SearchResultsComponent';

import './Search.css';
import $ from 'jquery';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {
                title: '',
                total_results: 0
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.preventDefault();
        var self = this;
        // call api to get movie
        var _url = "https://api.themoviedb.org/3/search/movie?api_key=eb14ede7d8298fa1c6d6c78bc55eefb7&language=en-US&query=";

        $.get( _url + $('#txtFilter').val(), function( data ) {
            if (data.total_results > 0) {
              data.results[0].poster = "http://image.tmdb.org/t/p/w300" + data.results[0].poster_path;
              self.setState({ movie: data.results[0] });
            }
            else {
              self.setState({ movie: {
                  title: 'Movie not found',
                  total_results: 0
              }});
            }
        });
    }
    render() {
        return (
            <div>
                <div>
                Enter a Movie Name, or partial movie name in the search box below and click the Go! button
                </div>
                <div className="input-group">
                    <input id="txtFilter" type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button onClick={this.handleClick} className="btn btn-default" type="button">Go!</button>
                    </span>
                </div>
                <SearchResults movie={this.state.movie} />
            </div>
        );
    }
}

export default SearchPage;