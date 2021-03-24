import React from "react";
import { useState } from "react";
import PatientModal from "../../Modals/PatientModal";
import { Button } from "@material-ui/core";
import { UpdateButton } from "../styles";

const UpdatePatient = (props) => {
  const [IsOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <UpdateButton>
        <Button
          variant="contained"
          style={{
            color: "white",
            fontSize: "13px",
            backgroundColor: "#0069d9",
            textTransform: "initial",
            marginright: "70px",
            marginLeft: "70px",
          }}
          color="primary"
          onClick={openModal}
        >
          Update
        </Button>
      </UpdateButton>
      <PatientModal
        // createPatient={props.createPatient}
        IsOpen={IsOpen}
        closeModal={closeModal}
        oldPatient={props.patient}
      />
    </div>
  );
};

export default UpdatePatient;
