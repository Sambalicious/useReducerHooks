import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentC from './components/useReducerContext/ComponentC';
import ComponentE from './components/useReducerContext/ComponentE';
import ComponentD from './components/useReducerContext/ComponentD';
import ComponentA from './components/useReducerContext/ComponentA';
import ComponentB from './components/useReducerContext/ComponentB';
import DataFetching from './components/useReducerContext/DataFetchingOne';
import DataFetchingTwo from './components/useReducerContext/DataFetchingTwo';
import ParentConponent from './components/callbackHooks/ParentComponent';
import Counter from './components/memoHooks/Counter';
import FocusInput from './components/useRefHooks/FocusInput';
import HookTimer from './components/useRefHooks/HookTimer';
import DocTitleOne from './components/useCustomHooks/DocTitleOne';

 export const CountContext = React.createContext();


const initialState = 0;
const reducer = (state, action) =>{
    switch (action) {
        case 'Increment': return state + 1

            case 'Decrement': return state - 1;

            case 'Reset': return initialState;
        default: return state
            
    }
}
    

function App() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
    <div className="App">
        <DocTitleOne />
    </div>
    </CountContext.Provider>
  );
}

export default App;
