import React, {Component} from 'react';
import './Favorites.css';

class FavoritesItem extends Component {
    render() {
        return (
            <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2 favorite-container'>
                <div className='poster-container'>
                    <img className='poster' src={this.props.item.poster} alt='' />
                </div>
            </div>
        );
    }
}

export default FavoritesItem;