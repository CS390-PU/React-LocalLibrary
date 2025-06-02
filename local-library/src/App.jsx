import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          <li><a href="/category1.html" target="content-frame">Category I</a></li>
          <li><a href="/category2.html" target="content-frame">Category II</a></li>
          <li><a href="/category3.html" target="content-frame">Category III</a></li>
        </ul>
      </nav>
      <main className="content">
        <iframe name="content-frame" title="Content Frame" className="iframe" />
      </main>
    </div>
  );
}

export default App;
