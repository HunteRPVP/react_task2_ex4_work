import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';

function crossout() {
  console.log('crossout executed');
}

function App() {
  return (
    <div className="App">
      <Button color="secondary" variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
