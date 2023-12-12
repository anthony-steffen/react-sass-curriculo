import MainContent from './components/Maincontent';
import Sidebar from './components/Sidebar';

import './styles/components/app.sass';

// const BrowserRouter = createBrowserRouter([]);
function App() {
  return (

    <div className="app">
      <h1>Anthony Steffen</h1>
      <Sidebar />
      <MainContent />
    </div>

  );
}

export default App;
