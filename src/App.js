import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux'
import { IncrementAction, DecrementAction } from './Actions/index';


const App = () => {
  const myState = useSelector((state) => state.Reducer1); //useSelector() ​ Allows you to extract data from the Redux store state, using a selector function.
  const dispatch = useDispatch();
  return (
    <>

      <div className="container">

        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a className="quantity__minus" title="Decrement"
          onClick={ () => dispatch(DecrementAction())} ><span> - </span></a>

          <input name="quantity" type="text" className="quantity__input" value={myState} />

          <a className="quantity__plus" title="Increment"
           onClick={() => dispatch(IncrementAction())}><span> + </span></a>
           
        </div>

      </div>

    </>
  )
}

export default App;