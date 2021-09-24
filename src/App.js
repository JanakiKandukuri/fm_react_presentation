import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <label>UserName: <input type="text" /></label>
        <br/>
        <label>Password: <input type="password"/></label>
        <br/>
        <button onClick={this.handleSubmitClick}>Login</button>
      </form>
      
    </div>
    
  );
}

export default App;
