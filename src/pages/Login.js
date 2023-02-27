import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Row, Col, CardBody, Card, Container } from "reactstrap";
import API from '../api/index';
import { setItem } from '../utils/index';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [shown, setShown] = useState(false);

  const switchShown = () => setShown(!shown);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submit = async () => {
    if (email && password) {
      const response = await API.Auth.login(email, password)
      if (response.ok) {
        setItem('token', response.token)
        setItem('userId', response.user.id)
        setItem('fullName', response.user.name)
        setItem('email', response.user.email)
        setItem('type', response.user.type)
        navigate('/dashboard')
      } else {
        setIsError(true)
      }
    } else {
      setIsError(true)
    }
  }

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-soft-grey">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h4 className="text-dark">Bienvenido</h4>
                        <p className="h5">Iniciar sesión</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-4">
                  <div className="p-2">
                    {isError && (
                      <div className="alert alert-warning" role="alert">
                        Por favor, introduzca un email y clave correctos. Observe que ambos campos pueden ser sensibles a mayúsculas.
                      </div>
                    )}
                    <div className="form-horizontal">
                      <div className="form-group">
                        <label className="fw-bold">Correo electrónico</label>
                        <input
                          name="email"
                          label="Email"
                          value={email}
                          className="form-control"
                          placeholder="Ingrese su correo electrónico"
                          type="email"
                          required
                          onChange={(event) => {
                            setIsError(false)
                            setEmail(event.target.value)
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label className="fw-bold">Contraseña</label>
                        <div className="input-group mb-3">
                          <Input
                            name="password"
                            type={shown ? 'text' : 'password'}
                            className="form-control underline-orange"
                            placeholder="Ingrese su contraseña"
                            required
                            value={password}
                            onChange={(event) => {
                              setIsError(false)
                              setPassword(event.target.value)
                            }}
                            onKeyDown={(event) => {
                              if (event.key === 'Enter') {
                                submit()
                              }
                            }}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={switchShown}
                                  onMouseDown={handleMouseDownPassword}
                                  className='color-maxim'
                                >
                                  {shown ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <button
                          onClick={submit}
                          className="btn btn-login btn-block waves-effect waves-light"
                        >
                          Iniciar sesión
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Login;
