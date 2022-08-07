import React from 'react'
import styled from 'styled-components';
import {Formik} from 'formik';

import getSearchResults from '../../services/getSearchResults';
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
  //const [resultArr, setResultArr] = useState<{id: number, url: string}[]>();

  return (
    <div className = "searchPage">
      <div className="searchPageLogo">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="searchBar">
        <Formik 
          initialValues={{searchString:""}} 
          validate={values => {
            //console.log(values);
          }}
          onSubmit={values=> {
            getSearchResults(values.searchString);
            
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
            <Input type="text" name="searchString" onChange={handleChange}/> 
            <Button type="submit">WinSearch</Button>
          </Form>
          )}
        />
      </div>
    </div>
  )
}

export default SearchPage