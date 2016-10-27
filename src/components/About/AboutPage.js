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
                    using React and Redux
                </div>
                <div className='ap-content'>
                    This application was developed and presented
                    at the Northern NJ .NET User Group by Steve
                    Fabian <br /><br />
                    <a href='http://n3ug.org'>http://n3ug.org</a>
                    <br /><br />
                    The full source code for this demo application is available 
                    on GitHub at the following address<br />
                    <a href="https://github.com/stevefabian/React-Movies">https://github.com/stevefabian/React-Movies</a><br />
                </div>
            </div>
        );
    }
}

export default AboutPage;