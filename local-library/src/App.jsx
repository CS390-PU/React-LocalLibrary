import React from 'react';
import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
} from 'react-resizable-panels';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Category1 from './Category1.jsx';
import Category2 from './Category2.jsx';
import Category3 from './Category3.jsx';

function App() {
  return (
    <Router>
      <div className="container">
        <PanelGroup direction="horizontal">
          <Panel defaultSize={20} minSize={15} maxSize={40}>
            <div className="sidebar">
              <ul>
                <li><Link to="/category1">Category I</Link></li>
                <li><Link to="/category2">Category II</Link></li>
                <li><Link to="/category3">Category III</Link></li>
              </ul>
            </div>
          </Panel>
          <PanelResizeHandle className="resizer" />
          <Panel>
            <div className="content">
              <Routes>
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
