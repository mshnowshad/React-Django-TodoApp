import './App.css';
import { Routes, Route, Link } from 'react-router-dom';  // ← নতুন
import Home from './pages/Home';
import TodoPage from './components/TodoPage';
import TodoDetail from './components/TodoDetail';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div>
            {/* Navigation — Link ব্যবহার করো, <a> না */}
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/todos">Todos</Link>
            </nav>

            {/* Routes — URL অনুযায়ী component দেখাবে */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<TodoPage />} />
                <Route path="/todos/:id" element={<TodoDetail />} />
                <Route path="*" element={<NotFound />} />  {/* যেকোনো unknown URL */}
            </Routes>
        </div>
    );
}

export default App;