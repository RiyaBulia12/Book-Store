import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <header className="panel-bg flex center">
        <h1 className="logo m-auto">
          Bookstore CMS
        </h1>
        <div className="flex-1">
          <ul className="flex uppercase">
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <div className="p-1 w-10 h-10 rounded-full ring-1 ring-gray-300 profile" />
      </header>

      <hr className="h-px bg-gray-200 border-0" />
      <main>
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
