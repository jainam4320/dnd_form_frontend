import React, { useState, useEffect } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import formImage from "../Assets/form_image.png";

export default function FormList() {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "http://localhost:3000/api/forms/list",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result);
        setFormData(result.data.result);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return (
    <Container>
      <h1>Form List</h1>
      <Button variant="btn btn-primary py-2 px-4 my-3" type="submit" onClick={() => { window.location.href = "/forms/create" }}>
        Create New Form
      </Button>

      {formData.length === 0 ? (
        <div className='text-center'>
          <h4 className="text-normal my-auto">There no forms saved at this time.</h4>
        </div>
      ) : (
        <Row>
          {formData.map((form) => {
            return (
              <Col xl={4} className="my-3">
                <Card>
                  <Card.Img variant="top" src={formImage} />
                  <Card.Body>
                    <Card.Title>{form.form_name}</Card.Title>
                    <Button variant="primary" type="submit" onClick={() => { window.location.href = "/forms/view/" + form._id }}>View Form</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      )}
    </Container>
  );
}