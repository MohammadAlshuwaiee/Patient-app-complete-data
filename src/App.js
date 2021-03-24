import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

//Homepage
import Homepage from "./components/homepage";
//Data
// import Doctors from "../src/PatientData";
// Patients List
import PatientList from "./components/PatientList";
import DoctorList from "./components/DoctorList";
//styles
import { GlobalStyle, ListDetailWrapper } from "./components/styles";
import PatientDetail from "./components/patientDetail";
import DoctorDetail from "./components/doctorDetail .js";
import Dropdown from "./components/Dropdown";
import { Title } from "./components/styles";
import logo from "../src/components/images/Mylogo.jpg";

function App() {
  const [selected_Item, setSelected] = useState(null);
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <GlobalStyle />
          <Title />
          <Dropdown />
          <Homepage />
        </Route>
        <Route path="/patients" exact>
          <img
            style={{ display: "flex", alignitems: "right" }}
            src={logo}
            alt="image"
          />
          {/* <GlobalStyle /> */}
          <Title>Patient app</Title>
          <Dropdown />
          <PatientList />
        </Route>
        <Route path="/patients/:patientSlug">
          {/* <GlobalStyle /> */}
          <Title>Patient app</Title>
          <Dropdown />
          <ListDetailWrapper>
            <PatientList setSelected={setSelected} />
            <PatientDetail />
          </ListDetailWrapper>
        </Route>
        <Route path="/doctors" exact>
          {/* <GlobalStyle /> */}
          <Title>Patient app</Title>
          <Dropdown />
          <DoctorList />
        </Route>
        <Route path="/doctors/:doctorSlug">
          {/* <GlobalStyle /> */}
          <Title>Patient app</Title>
          <Dropdown />
          <ListDetailWrapper>
            <DoctorList setSelected={setSelected} />
            <DoctorDetail />
          </ListDetailWrapper>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
