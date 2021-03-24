import React from "react";
import { useState } from "react";
import PatientModal from "../../Modals/PatientModal";
import { Button } from "@material-ui/core";

const AddPatient = (props) => {
  const [IsOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{
          marginLeft: "70px",
          fontSize: "15px",
          textTransform: "initial",
        }}
        onClick={openModal}
        variant="contained"
      >
        add new patient
      </Button>
      <PatientModal IsOpen={IsOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddPatient;
