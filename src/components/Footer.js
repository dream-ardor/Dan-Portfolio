import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/danbarrick" className="icon fa-linkedin"><span className="label">Twitter</span></a></li>
                        <li><a href="https://www.github.com/dream-ardor" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="danbarrick" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="barrick.dan80@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Dan Barrick</li><li>Design: <a href="https://www.dreamardor.com">Dan Barrick</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
