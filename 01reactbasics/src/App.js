import Chai from "./chai"
function App() {
  return (
    <>
    <h1>Chai aur react | Neha Sharma</h1>
    <h2>In this lecture I learned the following: </h2>
    <ul>
      <li>Learn through Documentation</li>
      <li>React has two main modules <ul>
        <li>react-dom(web)</li>
        <li>react-native(mobile app)</li>
        </ul>
      </li>
      <li>npm - node package manager for installling the packages</li>
      <li>npx- node package executor for executing the packages</li>
      <li> create-react-app utility is a bulky software to create a react project so we can use vite</li>
      <li>use  npm create-react-app for react</li>
      <li>use npm create vite@latest for vite and then install the packages using npm i cmd</li>
      <li>remember to write clean code: Delete all the files from src folder and keep the following only and later on add the needed ones:
        <ul><li>App.js</li>
        <li>index.js</li> </ul>
      </li>
    </ul>
    <Chai />
    </>
    
  ); 
}

export default App;
