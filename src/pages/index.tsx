import { useDispatch, useSelector } from "react-redux";
import { ReactNode } from "react";
import { UP, asyncUpFetch } from "@store/counterSlice";


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
  const status = useSelector((state: any) => state.counter.status);

  return (
    <div>
      <button onClick={() => {
        // dispatch({type: "counterSlice/UP", step: 2})
        dispatch(UP(2));
      }}>+
      </button>
      {count as ReactNode}
      <button onClick={() => {
        dispatch(asyncUpFetch());
      }}>+ async fetch
      </button>
      <br />
      <div>{count} | {status}</div>
    </div>
  );
};

export default Index;