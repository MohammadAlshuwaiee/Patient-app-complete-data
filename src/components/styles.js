import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body {
    /* color: #242424; */
    background-color: #1e1e1e;
    justify-content: center;
    /* text-align: center; */
    margin:0;
    width: 800px;
    
  }
`;

export const Title = styled.h3`
  color: white;
  /* text-align: center; */
  text-align: justify;
  margin-top: 29px;
  font-family: Zapf Chancery, cursive;
  margin: 10px;
`;
export const ListWrapper = styled.div`
  background-color: #272c34;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
  width: 250px;
  height: 300px;
  overflow: auto;
  scrollbar-color: dark;
  text-align: center;
  justify-content: center;
`;
export const UpdateButton = styled.div`
  margin: 10px;
  margin-left: -50px;
  align-content: center;
`;
export const DeleteButtonStyled = styled.div`
  margin: 10px;
  align-content: center;
  margin-left: -25px;
  /* display: flex; */
`;
export const PatientListWrapper = styled.div`
  justify-content: center;
`;

export const PatientWrapper = styled.div`
  justify-content: center;
`;

export const SearchBarStyled = styled.input`
  padding: 5px;
  border-radius: 15px;
  margin: 10px;
  margin-left: 19px;
  padding-inline-end: 40px;
  padding-inline-start: 40px;
  position: relative;
  width: 250px;
  justify-content: center;
  display: flex;
`;

export const DetailWrapper = styled.div`
  margin: 19px;
  position: static;
  background-color: #272c34;
  padding: 28px;
  border-radius: 8px;
  height: 390px;
  margin-top: 10px;
  width: 400px;
  justify-content: center;
  p {
    color: white;
    font-size: 20px;
  }
`;
export const ListDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DetailWrapperName = styled.h2`
  color: white;
  justify-content: center;
`;
export const ButtonWrapper = styled.div`
  justify-content: center;
  margin: 120px;
  justify-content: center;
`;

export const PatientForm = styled.form`
  justify-content: center;
  width: 300px;
  height: 30px;
  border-radius: 20px;
`;

export const DoctorForm = styled.form`
  justify-content: center;
  border-radius: 30px;
`;

export const Dropdowndiv = styled.div`
  padding: 75px;
  margin-top: 10px;
  justify-content: center;
`;
