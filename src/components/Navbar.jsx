import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../darkModeSlice';

const Navbar = () => {

    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.darkMode);


    return (
        <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
            <div className="title">Where in the world?</div>
            <div className={`dark-mode-btn ${darkMode ? 'dark-mode' : ''}`} onClick={() => dispatch(toggleDarkMode())} >
                <img src={darkMode ? './dark-mode-white.png' : './dark-mode.png'} alt="dark-mode" />
                <p>{darkMode ? 'Light Mode' : 'Dark Mode'}</p>
            </div>
        </div>
    );
    
    }
export default Navbar;