import Hello from "./Components/Hello"

function App() {
  function receiveData (result){
    console.log(result)
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <Hello title="Hello world" responde={receiveData}/>
    </div>
  );
}

export default App;
