import { useSelector, useDispatch } from "react-redux";
import { colorChange } from "./ColorSlice";

const App = () => {
  const bgcolor = useSelector((state) => state.mycolor.color);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome!</h1>
      <button onClick={() => dispatch(colorChange())}>Click here!</button>
      <div
        style={{
          width: "500px",
          height: "200px",
          backgroundColor: bgcolor,
        }}
      ></div>
    </>
  );
};

export default App;
