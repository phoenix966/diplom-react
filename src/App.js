import './global.sass';
import Header from './containers/header/Header';
import Main from './containers/main/Main';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Main/>
      </div>
    </div>
  );
}

export default App;
