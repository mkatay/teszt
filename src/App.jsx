
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {pers} from './data'
import { useState } from 'react';
import {List} from './components/List'

function App() {
  const [people,setPeople]=useState(pers)

  return (
    <div className="container shadow text-center p-3">
      <div className="center">
        <h4>Today birthdays</h4>
      </div>
        

        <List people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
