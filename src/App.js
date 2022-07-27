import Source from './components/sources/Source';
import Volume from './components/sources/Volume';
import AaPersons from './components/people/AaPersons';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div >
      <h1>AAERNE (Page Title)</h1>

      <header id="header">
        <p>
          <Link to='/people'>African Americans</Link> | 
          <a href="/">Other People/Owners</a> | 
          <Link to='/source'>Sources</Link> | 
        </p>
        <p class="breadcrumbs">
          breadcrumbs
        </p>
      </header>
      <Routes>
        <Route path='people' element={<AaPersons />} />
        <Route path='source' element={<Source />} />
        <Route path='volume' element={<Volume />} />
      </Routes>
    </div>
  );
}

export default App;
