import './App.css'
import Appale from './Apple';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  } 

  const handleClick2 = () =>{
      alert('button 2 has been clicked');
  }

   const addTofive = (num) =>{
      alert(num + 5);
  }

  const SubtractOne = (num2) =>{
    alert(num2 - 20);
  }

  return (
    <>
      <h1>React Core Concepts: </h1>

      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <Appale></Appale>
    
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleClick2}>Click 2 me!</button>
      <button onClick={()=>{alert('THis is the third number button')}}>Click 3 you!</button>
      <button onClick={() => addTofive(14)}>Button 4</button>
      <button onClick={() => SubtractOne(58)}>Subtract</button>

    </>
  )
}

export default App
