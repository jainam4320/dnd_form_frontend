import React, { useEffect } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import formImage from "../Assets/form_image.png";

export default function FormList() {

  const cookies = new Cookies();
  const token = cookies.get("TOKEN");

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
        console.log(result.data);
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

      {/* <div className='text-center'>
        <h4 className="text-normal my-auto">There no forms saved at this time.</h4>
      </div> */}

      <Row>
        <Col xl={4} className="my-3">
          <Card>
            <Card.Img variant="top" src={formImage} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Number of Views: 0
                </Card.Text>
                <Button variant="primary" type="submit" onClick={() => { window.location.href = "/forms/update" }}>Edit Form</Button>
                <Button className="mx-3" variant="primary" type="submit" onClick={() => { window.location.href = "/forms/view" }}>View Form</Button>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}