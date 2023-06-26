import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColorAction } from './state/slices/changeColor';
import './App.css';

const App = () => {
  const { color, colors } = useSelector((state: any) => state.color);
  const dispatchAction = useDispatch();

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className='container'>
      <button
        className='colorButton'
        onClick={() => dispatchAction(changeColorAction())}
      >
        Click me to toggle {colors.length} color{colors.length !== 1 && 's'}
      </button>
    </div>
  );
};

export default App;
