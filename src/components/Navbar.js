import logo from '../images/logo.svg'

function Navbar(){
    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="logo" className="logo-img"/>
                <spa className="logo-text">my travel journal.</spa>
            </div>

        </nav>
    );
}
export default Navbar;