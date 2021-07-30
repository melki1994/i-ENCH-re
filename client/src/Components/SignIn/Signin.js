import "./Signin.css";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Nav } from "react-bootstrap";
import axios from "axios";
import { signIn} from "../../utils/index";
// import { UserOutlined } from "@ant-design/icons";


function SignIn(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // eslint-disable-next-line
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({});
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleLogin = () => {
        axios
            .post("/api/user/login", user)
            .then((response) => {
                signIn(response.data.token);
                response.data.check.alert("success")})
            .catch((error) =>alert(error.response.data.message))
    };


  return (
    <div className="signin-container">
      <Nav.Link onClick={handleShow}> Se connecter </Nav.Link>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header n>
          <Modal.Title id="example-modal-sizes-title-lg">
            Se connecter
          </Modal.Title>
          <CloseOutlined onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <div className="modalContainer">
            <img src="/sign.png" alt="signIn avatar" className="img-fluid" />
            <Grid
              container
              direction={"column"}
              spacing={5}
              className="modalItem"
            >
              <Grid item>
                <TextField  label="Email" name="email" onChange={handleChange} />
              </Grid>
              <Grid item>
                <TextField  label="mot de passe "  name="password"  onChange={handleChange} />
              </Grid>
            </Grid>
          </div>
          <Button
            className="signIn-btn"
            variant="primary"
            onClick={()=>{ handleLogin();
              handleClose()}}>
              {" "}
            Se connecter
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignIn;
