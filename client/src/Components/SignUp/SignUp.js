import "./SignUp.css";
import React, { useState } from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { CloseOutlined } from "@ant-design/icons";
// import axios from "axios";

function SignUp(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // eslint-disable-next-line
  const handleShow = () => setShow(true);
  // const [newUser, setNewUser] = useState({});
  // const history = useHistory();
  //   const handelChange = (e) => {
  //       setNewUser({ ...newUser, [e.target.name]: e.target.value });
  //   };
  //   const handleRegister = () => {
  //     axios
  //         .post("/api/user/register", newUser)
  //         .then((response) => {
  //             alert(response.data.message,"registred successfully")
  //             history.push("/login");
  //         })
  //         .catch((error) => alert(error.response.data.message,"error"));
  // };
  return (
    <div className="signin-container">
      <Nav.Link onClick={handleShow}>Créer un compte</Nav.Link>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header n>
          <Modal.Title id="example-modal-sizes-title-lg">
            Créer un compte
          </Modal.Title>
          <CloseOutlined onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <div className="modalContainer">
            <img src="/SIGNUP.png" alt="signUp avatar" className="img" />
            <Grid container direction={"row"} spacing={5} className="modalItem">
              <Grid item>
                <TextField  label="Nom" name="firstName" />
              </Grid>
              <Grid item>
                <TextField  label="Prénom " name="lastName"  />
              </Grid>
              <Grid item>
                <TextField  label="Email " name="email"  />
              </Grid>
              <Grid item>
                <TextField  label="Nom d'utilisateur "  name="userName" />
              </Grid>
              <Grid item>
                <TextField  label="Mot de passe " name="password" />
              </Grid>
              <Grid item>
                <TextField
                  label="Confirmer mot de passe "
                  name="confirmPassword"
                />
              </Grid>
              <Grid item>
                <TextField  label="Téléphone"  name="phoneNumber"  />
              </Grid>
            </Grid>
          </div>
          <Button
            className="signIn-btn"
            variant="warning"
            onClick={()=>{
              handleClose()}}
          >
            {" "}
            Enregister
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignUp;