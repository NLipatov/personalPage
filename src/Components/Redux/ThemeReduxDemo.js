import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTheme,
  selectTheme,
} from './ThemeSlice';

export function Counter() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();


  return (
    <div>
      <div>
        <span>{theme}</span>
        <span onClick={() => dispatch(toggleTheme())}>Toggle theme</span>
      </div>
    </div>
  );
}
