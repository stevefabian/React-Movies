import React, { Component } from 'react';
import SearchResults from './SearchResultsComponent';
import './Search.css';
import $ from 'jquery';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {
                Title: '',
                Actors: [],
                Response: 'False'
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.preventDefault();
        var self = this;
        // call api to get movie
        $.get( "http://omdbapi.com?t=" + $('#txtFilter').val(), function( data ) {
            if (data.Response === 'True') {
              // split actors into array
              data.Actors = data.Actors.split(",");
              self.setState({ movie: data });
            }
            else {
              self.setState({ movie: {
                  Title: 'Movie not found',
                  Actors: [],
                  Response: 'False'
              }});
            }
        });
    }
    render() {
        return (
            <div>
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

export default Search;