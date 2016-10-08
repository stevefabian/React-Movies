import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import * as movieActions from '../../actions/movieActions';

import './Search.css';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {
                title: '',
                total_results: 0
            }
        }
        this.saveFavorite = this.saveFavorite.bind(this);
    }
    saveFavorite() {
        this.props.dispatch(
            movieActions.saveMovie(this.props.movie)
            );
        this.context.router.push('/');
    }
    render() {
        return (
            <div className="search-results container-fluid">
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <div className="movie-title">
                        {this.props.movie.title}<br />
                        {this.props.movie.release_date && <button className='btnAddToFavorites btn btn-default' onClick={this.saveFavorite}>Add to Favorites</button>}
                    </div>
                    <div>
                        <br />
                        {this.props.movie.release_date}
                    </div>
                    <div className="movie-plot">
                        {this.props.movie.overview}
                    </div>
                </div>
                <div className="col-sm-6 col-md-6">
                    <img src={this.props.movie.poster} alt="" />
                </div>
            </div>
            </div>
        );
    }
}

SearchResults.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps){
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps)(SearchResults);