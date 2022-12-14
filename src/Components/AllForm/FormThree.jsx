import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import {Link} from ""
 
const FormThree = () => {
    const handleClick=(e)=>{
        return e.preventDefault();
        // navigate("formThree");
    }
    return (
<Form>
      <Form.Label>Primary Address </Form.Label>
      <Form.Control type="number" placeholder="Primary Address " />
      <Form.Label>Permanent Address </Form.Label>
      <Form.Control type="number" placeholder="Permanent Address" />
      <Form.Label>Last Name </Form.Label>
      <Form.Control type="text" placeholder="Last Name" />
      <Form.Label>Full Name </Form.Label>
      <Form.Control type="text" placeholder="Full Name" />

      <Button variant="primary" type="submit"  onClick={handleClick}>
        Next
      </Button>
    </Form>
    );
};

export default FormThree;