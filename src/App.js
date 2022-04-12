import logo from './logo.svg';
import React from "react";
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
import UseEffectWithDocTitleChange from "./Components/UseEffectWithDocTitleChange";
import UseEffectWithSecondParameter from "./Components/UseEffectWithSecondParameter";
import UseEffectRunOnce from "./Components/UseEffectRunOnce";
import UseEffectToFetchData from "./Components/UseEffectToFetchData";
import UseEffectToGetOneID from "./Components/UseEffectToGetOneID";
import {UserContextParent} from "./Components/UserContextParent";
export const UserContext = React.createContext()
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
        <Form/>
        <UseEffectWithDocTitleChange />
        <UseEffectWithSecondParameter/>
        <UseEffectRunOnce/>
        <UseEffectToFetchData/>*/}
        <UseEffectToGetOneID/>
        <UserContext.Provider value="Lakshmi Hegde">
            <UserContextParent/>
        </UserContext.Provider>
    </div>
  );
}

export default App;
