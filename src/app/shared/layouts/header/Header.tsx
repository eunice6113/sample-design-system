import { Button } from "primereact";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../../../../assets/images/ibk-logo.png';
import './header.css';
import { InputSwitch } from 'primereact/inputswitch';

interface IProps {
    handleOpen: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

const Header: React.FC<IProps> = ({handleOpen, children}) => {

    const [theme, setTheme] = React.useState(false);
    
    const handleTheme = () => {
        let switchTheme = !theme
        setTheme(switchTheme)
        console.log('theme', switchTheme)
        if(switchTheme) {
            window.document.body.classList.add('theme-dark')
            window.document.body.classList.remove('theme-light')
        } else {
            window.document.body.classList.add('theme-light')
            window.document.body.classList.remove('theme-dark')
        }
    }

    return(
    <div className='customHeader'>
        <div className="headerInnerContents">
            <Button className="menu p-button-text" icon="pi pi-bars"
                    onClick={handleOpen} />

            <Link to='/' className="logoTitle">
                <img className="ibkLogo" src={logo} alt='클라우드 포털 디자인 시스템' />
                <span className="portalName">Cloud Portal Design System</span>
            </Link>
            <InputSwitch className="ml10" checked={theme} onChange={handleTheme} />
        </div>
        
    </div>
    )
}
export default Header;