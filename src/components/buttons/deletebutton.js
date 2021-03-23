import React from "react";
import { DeleteButtonStyled } from "../styles";
import { Button } from "@material-ui/core";
import patientStore from "../../store/patientStore";
import doctorStore from "../../store/doctorStore";

const DeleteButton = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    props.patientId
      ? patientStore.deletePatient(props.patientId)
      : doctorStore.deleteDoctor(props.doctorId);
  };

  return (
    <DeleteButtonStyled>
      <Button
        variant="contained"
        style={{
          color: "#15080B",
          fontSize: "10px",
          fontWeight: "bold",
          backgroundColor: "#F48FB1",
        }}
        onClick={handleDelete}
      >
        Delete
      </Button>
    </DeleteButtonStyled>

    // <button type="button" class="btn btn-danger" onClick={handleDelete}>
    //   Delete
    // </button>
  );
};

export default DeleteButton;
