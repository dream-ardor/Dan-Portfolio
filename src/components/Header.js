import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="Dan Barrick" /></a>
                    <h1><strong>I am Dan Barrick</strong>, a super motivated and self-taught web developer with a passion for creating elegant, secure and high performing websites and applications.<br />
                    Page Design by <a href="https://www.dreamardor.com">Dan Barrick</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
