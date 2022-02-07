import './App.css';
import Field from './components/Field';
import LogoHolder from './components/LogoHolder';

function App() {
  return (
    <div className='container-fluid background'>
            <Field />
            <LogoHolder title="main-logo" img="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" />
    </div>
  );
}

export default App;
