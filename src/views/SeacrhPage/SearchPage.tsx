import React from 'react'
import styled from 'styled-components';
import {Formik} from 'formik';

import './SearchPage.css'; 
const logo =  require('../../assets/logo.png');

export const Form = styled.form`
  width: 300px;
  display: "flex";
  justify: "center";
`;

export const Input = styled.input`
  width: 400px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

const SearchPage = () => {
  return (
    <div className = "searchPage">
      <div className="searchPageLogo">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="searchBar">
        <Formik 
          initialValues={{searchString:""}} 
          validate={values => {
            console.log(values);
          }}
          onSubmit={values=> {
            console.log(values);
          }}
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="searchString"/> 
            <Button type="submit">WinSearch</Button>
          </Form>
          )}
        />
      </div>
    </div>
  )
}

export default SearchPage