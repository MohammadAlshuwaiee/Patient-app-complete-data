import React, { useState } from "react";
import Modal from "react-modal";
import doctorStore from "../store/doctorStore";
import { DoctorForm } from "../components/styles";

const DoctorModal = (props) => {
  const oldDoctor = props.oldDoctor;
  const [doctor, setDoctor] = useState(
    oldDoctor ?? {
      DoctorName: "",
      DoctorQualitfication: "",
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    doctorStore[oldDoctor ? "UpdatedDoctor" : "createDoctor"](doctor);
    console.log(doctor);
    props.closeModal();
  };
  const handleChange = (event) => {
    setDoctor({ ...doctor, [event.target.name]: event.target.value });
  };
  console.log(props.oldDoctor);
  return (
    <Modal
      isOpen={props.IsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
    >
      <h3>{oldDoctor ? "Update Doctor" : "Create Doctor"}</h3>
      <DoctorForm>
        <div className="form-group row">
          <div className="col-6">
            <label>Doctor Name</label>
            <input
              type="text"
              className="form-control"
              name="DoctorName"
              defaultValue={doctor.DoctorName}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Doctor Qualitfication</label>
            <input
              type="text"
              defaultValue={doctor.DoctorQualitfication}
              className="form-control"
              onChange={handleChange}
              name="DoctorQualitfication"
            />
          </div>
        </div>

        <button onClick={handleSubmit}>
          {oldDoctor ? "Update Doctor" : "Create Doctor"}
        </button>
      </DoctorForm>
    </Modal>
  );
};

export default DoctorModal;
