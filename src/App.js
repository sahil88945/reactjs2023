import logo from './logo.svg';
import './App.css';
// import Counter from './Components/Counter';
import CounterObject from './components/Counter Object';
import Parent from './components/parent';
import StudentList from './components/studentList';

function App() {
  return (
    <div className="App">
    {/* <Counter/>
    <CounterObject/>
       */}
       {/* <child title='Ibm' cliemtName='client1' isApp={true}/>

       <Parent/> */}
       <StudentList/>
       
    </div>
  );
}

export default App;
