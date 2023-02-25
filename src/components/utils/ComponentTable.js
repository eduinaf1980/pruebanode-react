import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import Switch from 'react-switch';

export const SelectTable = (props) => {
  return (
    <Form>
      <FormGroup className="mb-4">
        <Label htmlFor="formrow-InputState"> {props.title} </Label>
        <select
          id={`formrow-InputState-${props.title}`}
          className={props.style || `form-control ${props.messageInvalid && ('is-invalid')}`}
          onChange={props.onChange}
          value={props.value}
        >
          <option value={''}>Seleccione una opción</option>
          {props.options.map((value, index) => (
            <option key={index} value={value.id}>{value.name}</option>
          ))}
        </select>
        {props.messageInvalid && (
          <div className="invalid-feedback">{props.messageInvalid}</div>
        )}
      </FormGroup>
    </Form>
  )
}

export const InputTable = (props) => {
  return (
    <FormGroup>
      <Label htmlFor={`formrow-firstname-Input-${props.title}`} className='form-label'>{props.title}</Label>
      <Input
        type={props.type}
        className={`form-control ${props.bg} ${props.messageInvalid && ('is-invalid')}`}
        id={`formrow-firstname-Input-${props.title}`}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        disabled={props.disabled}
        readOnly={props.readOnly}
        defaultValue={props.defaultValue}
      />
      {props.messageInvalid && (
        <div className="invalid-feedback">{props.messageInvalid}</div>
      )}
    </FormGroup>
  )

}

export const DateTable = (props) => {
  return (
    <FormGroup>
      <Label htmlFor={`formrow-firstname-Table-${props.title}`}> {props.title} </Label>
      <Flatpickr
        value={props.value}
        onChange={props.onChange}
        id={`formrow-firstname-Table-${props.title}`}
        className={`form-control das ${props.messageInvalid && ('is-invalid')}`}
        options={{
          enableTime: false,
          altInput: true,
          altFormat: "Y-m-d",
          dateFormat: "Y-m-d",
        }}
      />
      {props.messageInvalid && (
        <div className="invalid-feedback">{props.messageInvalid}</div>
      )}
    </FormGroup>
  )
}

export const StateInput = (props) => {
  return (
    <FormGroup>
      <Label htmlFor="formrow-InputState">Estado</Label>
      <select
        id={`formrow-InputState`}
        className="form-control"
        onChange={props.onChange}
        value={props.defaultValue}
      >
        <option value={true}>Activo</option>
        <option value={false}>Inactivo</option>
      </select>
    </FormGroup>
  )
}

export const SwitchUpdate = (props) => {

  const Offsymbol = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2
        }}
      >
        {" "}
        No
      </div>
    )
  }

  const OnSymbol = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2
        }}
      >
        {" "}
        Si
      </div>
    )
  }
  return (
    <FormGroup>
      <Label htmlFor="formrow-InputState" className='mr-2'> {props.title} </Label>
      <Switch
        uncheckedIcon={<Offsymbol />}
        className="mr-1"
        checkedIcon={<OnSymbol />}
        onColor="#626ed4"
        onChange={() =>
          props.setValue(!props.value)
        }
        checked={props.value}
      />
    </FormGroup>
  )
}

export const CheckTable = (props) => {
  return (
    <td onClick={props.onClick} className='text-center'>
      {props.isUser ? (
        <i className="mdi mdi-account-multiple-check text-success mdi-36px" />
      ) : (<i className="mdi mdi-account-multiple-remove text-danger mdi-36px" />)}
    </td>
  )
}

export const CheckComponent = (props) => {
  return (
    <td onClick={props.onClick} className='text-center'>
      {props.isUser ? (
        <i className="mdi mdi-checkbox-marked-outline text-success mdi-24px" />
      ) : (<i className="mdi mdi-close-circle text-danger mdi-24px" />)}
    </td>
  )
}


