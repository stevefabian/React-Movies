import React, {Component} from 'react';
import './About.css';

class AboutPage extends Component {
    render() {
        return (
            <div className='ap-container'>
                <div className='ap-title'>
                    About
                </div>
                <div className='ap-content'>
                    This is a React Sample Application to
                    demonstrate building a web Application
                    using React and Reflux
                </div>
            </div>
        );
    }
}

export default AboutPage;