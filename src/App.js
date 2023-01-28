
import './App.css';
import { useState } from 'react';
import Routing from './components/Routing';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);}
  return (
 <>
  <Routing/>
 </>
  );
}

export default App;
