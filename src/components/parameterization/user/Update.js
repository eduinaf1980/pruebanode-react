import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Form, Row } from "reactstrap";
import {
  DateTable,
  InputTable,
  SelectTable,
  StateInput,
  SwitchUpdate,
} from "../../utils/ComponentTable";
import TableTitle from "../../utils/TableTitle";
import API from "../../../api/index";
import { useNavigate, useParams } from "react-router-dom";
import ActionsUpdate from "../../utils/ActionsUpdate";
import moment from "moment";

const UpdateUserComponent = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [messageFirstName, setMessageFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [messageLastName, setMessageLastName] = useState("");
  const [numDocument, setNumDocument] = useState("");
  const [messageNumDocument, setMessageNumDocument] = useState("");
  const [password, setPassword] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [email, setEmail] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messagePhone, setMessagePhone] = useState("");
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState("");
  const [messageCompany, setMessageCompany] = useState("");
  const [available, setAvailable] = useState(false);
  const [emailTemp, setEmailTemp] = useState("");
  const [phoneTemp, setPhoneTemp] = useState("");
  const [numDocumentTemp, setNumDocumentTemp] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [address, setAddress] = useState("");
  const [messageAddress, setMessageAddress] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [messageBirthDate, setMessageBirthDate] = useState("");
  const [initDate, setInitDate] = useState();
  const [messageInitDate, setMessageInitDate] = useState("");
  const [endDate, setEndDate] = useState();
  const [messageEndDate, setMessageEndDate] = useState("");
  const [positions, setPositions] = useState([]);
  const [position, setPosition] = useState("");
  const [messagePosition, setMessagePosition] = useState("");
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState("");
  const [messageLocations, setMessageLocations] = useState("");

  const verifyEmail = async (email) => {
    setDisableSubmit(false);

    if (email) {
      if (email != emailTemp) {
        const response = await API.User.verifyEmail(email);

        if (!response.ok) {
          setMessageEmail(response.message);
          setDisableSubmit(true);
        }
      }
    }
  };

  const verifyPhone = async (phone) => {
    setDisableSubmit(false);

    if (phone) {
      if (phone != phoneTemp) {
        const response = await API.User.verifyPhone(phone);

        if (!response.ok) {
          setMessagePhone(response.message);
          setDisableSubmit(true);
        }
      }
    }
  };

  const verifyDocument = async (numDocument) => {
    setDisableSubmit(false);

    if (numDocument) {
      if (numDocument != numDocumentTemp) {
        const response = await API.User.verifyDocument(numDocument);

        if (!response.ok) {
          setMessageNumDocument(response.message);
          setDisableSubmit(true);
        }
      }
    }
  };

  const selectLocation = async () => {
    const response = await API.Locations.filterSelect();
    const locationTemp = [];
    if (response.result) {
      for (let index = 0; index < response.result.length; index++) {
        const element = response.result[index];
        locationTemp.push({ id: element.id, name: element.description });
      }
    }
    setLocations(locationTemp);
  };

  useEffect(() => {
    selectLocation();
  }, []);

  const selectPosition = async () => {
    const response = await API.Position.filterSelect();
    const positionTemp = [];
    if (response.result) {
      for (let index = 0; index < response.result.length; index++) {
        const element = response.result[index];
        positionTemp.push({ id: element.id, name: element.description });
      }
    }
    setPositions(positionTemp);
  };

  useEffect(() => {
    selectPosition();
  }, []);

  const getUsers = async () => {
    const response = await API.User.get(params.id);
    if (response.ok) {
      const data = response.result[0];
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setNumDocument(data.num_document);
      setNumDocumentTemp(data.num_document);
      setEmail(data.email);
      setEmailTemp(data.email);
      setPhone(data.phone);
      setPhoneTemp(data.phone);
      setCompany(data.companies);
      setPassword(data.password);
      setAddress(data.address);
      setBirthDate(data.birth_date);
      setInitDate(data.start_date);
      setEndDate(data.end_date);
      setLocation(data.locations);
      setPosition(data.position);
      setAvailable(data.available)
    }
  };

  const getCompanies = async () => {
    const response = await API.Company.filterSelect();
    if (response.ok) {
      setCompanies(response.result);
    }
  };

  useEffect(() => {
    getUsers();
    getCompanies();
  }, [params.id]);

  const setMessageSuccess = (messageSuccess) => {
    //dispatch(actionSetMessageSuccess(messageSuccess));
  };

  const submit = async () => {
    const body = {
      email: email,
      id: params.id,
      password: password,
      num_document: numDocument,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      companies: company,
      available: available,
      per_general: 1,
      per_cvtools: 1,
      per_geem: 2,
      address: address,
      locations: location,
      position: position,
    };
    if (birthDate) {
      body["birth_date"] = moment(new Date(birthDate)).format("YYYY-MM-DD");
    }
    if (initDate) {
      body["start_date"] = moment(new Date(initDate)).format("YYYY-MM-DD");
    }
    if (endDate) {
      body["end_date"] = moment(new Date(endDate)).format("YYYY-MM-DD");
    }
    const response = await API.User.update(body);
    if (response.ok) {
      setMessageSuccess(response.message);
      navigate("/users");
    } else {
      if (response.errors) {
        setError();
        if (response.errors.first_name) {
          setMessageFirstName(response.errors.first_name[0]);
        }
        if (response.errors.last_name) {
          setMessageLastName(response.errors.last_name[0]);
        }
        if (response.errors.num_document) {
          setMessageNumDocument(response.errors.num_document[0]);
        }
        if (response.errors.password) {
          setMessagePassword(response.errors.password[0]);
        }
        if (response.errors.email) {
          setMessageEmail(response.errors.email[0]);
        }
        if (response.errors.phone) {
          setMessagePhone(response.errors.phone[0]);
        }
        if (response.errors.address) {
          setMessageAddress(response.errors.address[0]);
        }
        if (response.errors.birth_date) {
          setMessageBirthDate(response.errors.birth_date[0]);
        }
        if (response.errors.end_date) {
          setMessageEndDate(response.errors.end_date[0]);
        }
        if (response.errors.locations) {
          setMessageLocations(response.errors.locations[0]);
        }
        if (response.errors.start_date) {
          setMessageInitDate(response.errors.start_date[0]);
        }
        if (response.errors.position) {
          setMessagePosition(response.errors.position[0]);
        }
        if (response.errors.companies) {
          setMessageCompany(response.errors.companies[0]);
        }
      }
      if (response.message) {
        setError();
      }
    }
  };

  const setError = () => {
    setMessageError("Ocurrio un error, verifica los campos");
    setTimeout(() => {
      setMessageError("");
    }, 5000);
  };
  return (
    <>
      <Card>
        <CardBody>
          <TableTitle title="Actualizar Usuario" />
          <Row className="align-items-center">
            <Col md="6">
              <InputTable
                messageInvalid={messageFirstName}
                title="Nombre"
                type="text"
                placeholder="Ingrese nombre"
                onChange={(event) => {
                  setFirstName(event.target.value);
                  setMessageFirstName("");
                }}
                value={firstName}
              />
              <InputTable
                messageInvalid={messageLastName}
                title="Apellido"
                type="text"
                placeholder="Ingrese apellido"
                onChange={(event) => {
                  setLastName(event.target.value);
                  setMessageLastName("");
                }}
                value={lastName}
              />
              <InputTable
                messageInvalid={messageNumDocument}
                title="Número de documento"
                type="text"
                placeholder="Ingrese el número"
                onChange={(event) => {
                  setNumDocument(event.target.value);
                  setMessageNumDocument("");
                  verifyDocument(event.target.value);
                }}
                value={numDocument}
              />
              <InputTable
                messageInvalid={messageEmail}
                title="Correo electronico"
                type="text"
                placeholder="Ingrese el correo"
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessageEmail("");
                  verifyEmail(event.target.value);
                }}
                value={email}
              />
              <InputTable
                messageInvalid={messagePassword}
                title="Contraseña"
                type="password"
                placeholder="Ingrese la nueva contraseña"
                onChange={(event) => {
                  setPassword(event.target.value);
                  setMessagePassword("");
                }}
                value={password}
              />
              <InputTable
                messageInvalid={messagePhone}
                title="Teléfono"
                type="text"
                placeholder="Ingrese el correo"
                onChange={(event) => {
                  setPhone(event.target.value);
                  setMessagePhone("");
                  verifyPhone(event.target.value);
                }}
                value={phone}
              />
              <InputTable
                messageInvalid={messageAddress}
                title="Dirección"
                type="text"
                placeholder="Ingrese una dirección"
                onChange={(event) => {
                  setAddress(event.target.value);
                  setMessageAddress("");
                }}
                value={address}
              />
              <DateTable
                title="Fecha de nacimiento"
                messageInvalid={messageBirthDate}
                onChange={(value) => {
                  setBirthDate(value);
                  setMessageBirthDate("");
                }}
                value={birthDate}
              />
              <DateTable
                title="Fecha de inicio"
                messageInvalid={messageInitDate}
                onChange={(value) => {
                  setInitDate(value);
                  setMessageInitDate("");
                }}
                value={initDate}
              />
              <DateTable
                title="Fecha de finalización"
                messageInvalid={messageEndDate}
                onChange={(value) => {
                  setEndDate(value);
                  setMessageEndDate("");
                }}
                value={endDate}
              />
              <SelectTable
                messageInvalid={messageLocations}
                title="Ubicación"
                options={locations}
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                  setMessageLocations("");
                }}
              />
              <SelectTable
                messageInvalid={messagePosition}
                title="Cargo"
                options={positions}
                value={position}
                onChange={(event) => {
                  setPosition(event.target.value);
                  setMessagePosition("");
                }}
              />
              <SelectTable
                messageInvalid={messageCompany}
                title="Compañía"
                options={companies}
                value={company}
                onChange={(event) => {
                  setCompany(event.target.value);
                  setMessageCompany("");
                }}
              />
              <SwitchUpdate
                title="¿Esta activo?"
                value={available}
                setValue={setAvailable}
              />
              {messageError && (
                <div className="alert alert-danger" role="alert">
                  {messageError}
                </div>
              )}
            </Col>
          </Row>
          <ActionsUpdate
            toBack="/users"
            onClick={submit}
            disabled={disableSubmit}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default UpdateUserComponent;
