import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  
  return (
    <div className="App">
      <ButtonGroup>
        <Button onClick={()=> alert("You Saved me")} startIcon = {<SaveIcon />} size="large" variant="contained" color="primary" >Save</Button>
        <Button onClick={()=> alert("You Deleted me")} startIcon = {<DeleteIcon />} size="large" variant="contained" color="secondary" >Delete</Button>
      </ButtonGroup> 
    </div>
  );
}

export default App;
