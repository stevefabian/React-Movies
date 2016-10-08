import React, {Component} from 'react';
import {connect} from 'react-redux';
import FavoritesItem from './FavoritesItem';
import './Favorites.css';

class FavoritesList extends Component {
    render() {
        return (
            <div>
                {this.props.movies.map(function(el, i){
                    return (
                        <FavoritesItem item={el} />
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps)(FavoritesList);