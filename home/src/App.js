import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>20 Symptoms</h2>
        <h3>A Project by The Cob Squad</h3>
      </header>

      <header className="App-body">
        <textarea>


        </textarea>
      </header>

      <header className="App-buttons">
        <Button variant="contained" color="secondary"> No </Button>
        <div class="divider" />
        <Button variant="contained" color="default"> I Don't Know </Button>
        <div class="divider" />
        <Button variant="contained" color="primary"> Yes </Button>
      </header>
    </div>
  );
}

export default App;
