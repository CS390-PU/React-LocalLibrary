import React from 'react';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Category1 from './Category1.jsx';
import Category2 from './Category2.jsx';
import Category3 from './Category3.jsx';
import Home from './Home.jsx'; // Add Home component import

function App() {
  return (
    <Router>
      <div className="container">
        <PanelGroup direction="horizontal">
          <Panel defaultSize={20} minSize={15} maxSize={40}>
            <div className="sidebar">
              <ul>
                <li>
                  <Link to="/">Home</Link> {/* Link to Home page */}
                </li>
                <li>
                  <Link to="/category1">All Books</Link>
                </li>
                <li>
                  <Link to="/category2">All Authors</Link>
                </li>
                <li>
                  <Link to="/category3">All Genres</Link>
                </li>
                <li>
                  <Link to="/category3">All Book Instances</Link>
                </li>
              </ul>
            </div>
          </Panel>
          <PanelResizeHandle className="resizer" />
          <Panel>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />{' '}
                {/* Route to display Home page */}
                <Route path="/category1" element={<Category1 />} />
                <Route path="/category2" element={<Category2 />} />
                <Route path="/category3" element={<Category3 />} />
              </Routes>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </Router>
  );
}

export default App;
