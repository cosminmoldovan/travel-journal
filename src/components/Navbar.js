import logo from '../images/logo.svg'

function Navbar(){
    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="logo" className="logo-img"/>
                <span className="logo-text">my travel journal.</span>
            </div>

        </nav>
    );
}
export default Navbar;