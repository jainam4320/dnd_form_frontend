import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

export default function FormView() {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  let params = useParams()
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "http://localhost:3000/api/forms/view/" + params.formId,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(configuration)
      .then((result) => {
        console.log(result.data);
        setFormData(result.data);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return (
    <Container>
      <h1>View Form</h1>
        <Form>
          <Form.Group className="mb-3">
          <Form.Label>Form Name</Form.Label>
            <Form.Control
              type="text"
              name="form_name"
              key="form_name"
              value={formData.form_name}
              required
            />
          </Form.Group>
        </Form>
    </Container>
  );
}