import { Button, Typography } from "@mui/material";
import "./App.css";
import { useCount } from "./store/countStore";

function App() {
  const { count, setCount } = useCount();

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Typography>Hello World</Typography>
      <Button onClick={handleClick} variant="contained">
        {count}
      </Button>
    </div>
  );
}

export default App;
