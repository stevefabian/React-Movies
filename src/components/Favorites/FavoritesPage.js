import React, {Component} from 'react';
import FavoritesList from './FavoritesList';
import './Favorites.css';

class FavoritesPage extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <FavoritesList />
                    </div>
                </div>
            </div>
        );
    }
}

export default FavoritesPage;