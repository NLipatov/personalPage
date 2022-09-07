import "./ThemeSwitcher.css";
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../Store/counterSlice';

const ThemeSwitcher = ()=>{
    const dispatch = useDispatch()
    return(
        <div className="darkThemeToggler" onClick={() => {
            dispatch(toggleTheme());
        }}>
            <span className="iconSpan">
                
            </span>
    </div>
    )
};

export default ThemeSwitcher;