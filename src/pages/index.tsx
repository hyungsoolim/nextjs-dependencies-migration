import { useDispatch, useSelector } from "react-redux";
import { ReactNode } from "react";
import { UP } from "@store/counterSlice";


// const reducer = (state, action) => {
//   if(action.type === " UP") {
//     return {...state, value: state.value + action.step}
//   }
//
//   return state;
// }
//
// const initialState = {value: 0}
// export const store = createStore(reducer, initialState);

const Index = () => {

  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <div>
      <button onClick={() => {
        // dispatch({type: "counterSlice/UP", step: 2})
        dispatch(UP(2));
      }}>+</button>
      {count as ReactNode}
    </div>
  )
}

export default Index;