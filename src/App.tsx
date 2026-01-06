import { useEffect, useRef } from 'react';
import './App.css';

const loadAngularElement = async () => await import('angularRemote/LoginUi');

function App() {
  useEffect(() => {
    loadAngularElement().then((LoginUi) => {
      console.log(LoginUi);
    });
  }, []);
  return (
    <div className="App">
      <login-ui></login-ui>
    </div>
  );
}

export default App;
