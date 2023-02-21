import React from 'react';
import Greetings from './components/Greetings/Greetings';
import logo from './logo.svg';
import './App.css';
import SimpleForm from './components/SimpleForm/SimpleForm';

// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <img src='{logo}' className='App-logo' alt='logo'/>
//           <h1 className='App-title'>Welcome to React</h1>
//         </header>
//         <p className='App-intro'>
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = () => (
//   <div className='App'>
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );


const App = () => (
  <div>
    {/* <Greetings firstName="John" lastName="Smith" /> */}
    <SimpleForm />
  </div>
)


export default App;