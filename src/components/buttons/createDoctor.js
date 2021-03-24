import React from "react";
import { useState } from "react";
import DoctorModal from "../../Modals/DoctorModal";
import { Button } from "@material-ui/core";

const AddDoctor = () => {
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
        add new Doctor
      </Button>
      <DoctorModal IsOpen={IsOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddDoctor;
