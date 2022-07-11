import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <body>
                    <img src= { logo } alt="DSMeta" />
                        <h1>DSMeta</h1>
                        <p>Desenvolvido por
                            <a href="https://www.linkedin.com/in/daniel-vilas-boas-03b64b77/">@Daniel-Vilas-Boas</a>
                        </p>
                </body>
            </div>
        </header>
    )
}

export default Header