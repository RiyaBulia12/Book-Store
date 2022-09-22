import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <div className="App w-fit lg:w-full">
      <header className="panel-bg flex center py-6 lg:px-28 px-14">
        <h1 className="logo m-auto lg:text-3xl">
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
        <div className="p-1 w-10 h-10 rounded-full ring-1 ring-gray-300 profile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 user-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>

      </header>

      <hr className="h-px bg-gray-200 border-0" />
      <main className="px-28">
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
