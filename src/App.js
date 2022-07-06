import Counter from "./Counter";
import InputFocus from "./InputFocus";

function App() {
  return (
    <div>
      <hr />
      Counter component (useState example):
      <Counter initialCount={1} />
      <hr />
      Input focus omponent (useStateRef example):
      <InputFocus />
    </div>
  );
}

export default App;
