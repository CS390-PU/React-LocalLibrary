import React from 'react';
import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
} from 'react-resizable-panels';
import './App.css';

function App() {
  return (
    <div className="container">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={20} minSize={15} maxSize={40}>
          <div className="sidebar">
            <ul>
              <li><a href="/category1.html" target="content-frame">Category I</a></li>
              <li><a href="/category2.html" target="content-frame">Category II</a></li>
              <li><a href="/category3.html" target="content-frame">Category III</a></li>
            </ul>
          </div>
        </Panel>
        <PanelResizeHandle className="resizer" />
        <Panel>
          <div className="content">
            <iframe name="content-frame" title="Content Frame" className="iframe" />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default App;
