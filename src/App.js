import './App.css';
import { Route, Routes } from 'react-router';
import MythologicalCharacterList from './pages/MythologicalCharacterList';
import Home from './pages/Home';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/charlist' element={<MythologicalCharacterList />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
