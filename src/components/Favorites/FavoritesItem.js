import React, {Component} from 'react';
import Rodal from 'rodal';
import {connect} from 'react-redux';
import * as movieActions from '../../actions/movieActions';

import './Favorites.css';

class FavoritesItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.doDelete = this.doDelete.bind(this);
    }
    hideModal() {
        this.setState({ modal: false });
    }
    handleClick(event) {
        event.preventDefault();
        this.setState({modal: true});         
    }
    doDelete() {
        this.setState({ modal: false });
        this.props.dispatch(
            movieActions.removeMovie(this.props.item)
        ); 
    }
    render() {
        return (
            <div>
                <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2 favorite-container'>
                    <div className='poster-container'>
                        <img className='poster' src={this.props.item.poster} alt='' />
                        <button className='btn btn-default btn-xs btn-remove'onClick={this.handleClick}>REMOVE</button>
                    </div>
                </div>
                <Rodal visible={this.state.modal} onClose={this.hideModal}>
                    <div>
                        <h3>Confirm</h3>
                        Are you sure you want to remove {this.props.item.title} from your list of favorites ?
                        <br />
                        <br />
                        <button className='btn btn-primary btn-prompt' onClick={this.doDelete}>Yes</button>
                        <button className='btn btn-default btn-prompt' onClick={this.hideModal}>No</button>
                    </div>
                </Rodal>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(FavoritesItem)