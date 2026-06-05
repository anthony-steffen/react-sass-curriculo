import MainContent from './components/Maincontent';
import Sidebar from './components/Sidebar';
import profile from './data/profile';

import './styles/components/app.sass';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p>{profile.role}</p>
        <h1>{profile.name}</h1>
      </header>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
