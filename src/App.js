import logo from './logo.svg';
import './App.css';
import {Arrow} from "./Components/Arrowfun";
import Createdcomp from "./Components/Createdcomp";
import Classcomp from "./Components/Classcomp";
import Props_example from "./Components/Props_example";
import States from "./Components/States";
import {ArrowFunWithProp} from "./Components/ArrowFunWithProp";
import RenderList from "./Components/RenderList"
import Form from "./Components/Form";
import {UseStateWithObj} from "./Components/UseStateWithObj";
function App() {
  return (
    <div className="App">
        {/*<Createdcomp />
       <Arrow/>
        <Classcomp/>
        <Props_example name="lakshmi" age="24">
            <p>This is lakshmi hegde</p>
        </Props_example>

        <Props_example name="bhumika" age="23">
            <p>This is bhumika hegde</p>
        </Props_example>
        <States/>
        <ArrowFunWithProp name="lakshmi hegde"></ArrowFunWithProp>
        <RenderList/>
        <Form/>*/}
        <UseStateWithObj/>
    </div>
  );
}

export default App;
