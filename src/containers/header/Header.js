import Button from '../../components/button/Button';
import logo from '../../assets/logo.png'
import './style.css'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <img src={logo} alt="logo type"/>
                <Button />
            </div>
        </header>
    )
}

export default Header;