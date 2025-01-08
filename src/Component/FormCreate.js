import React, { useEffect, useState } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

function ModalWithComponents(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Form Component
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Form.Select onChange={(e) => props.onHide(e.target.value, e.target.options[e.target.value].text)} aria-label="Default select example">
            <option value="0">Select Component</option>
            <option value="1">Text Input</option>
            <option value="2">Text Area</option>
            <option value="3">Select Dropdown</option>
            <option value="4">Checkbox</option>
            <option value="5">Radio Button</option>
            <option value="6">Date Picker</option>
            <option value="7">File Upload</option>
          </Form.Select>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

function ModalWithCustomization(props) {
  const [label, setLabel] = useState("");
  const [key, setKey] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [type, setType] = useState("");
  const [required, setRequired] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { selected: props.selected, label, key, placeholder, type, required };
    props.onHide(data);
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Customise {props.selectedName} Component
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Form>
            <Form.Control
              className="my-3"
              type="text"
              name="label"
              placeholder="Enter Text Input Label"
              onChange={(e) => setLabel(e.target.value)}
              required
            />
            <Form.Control
              className="my-3"
              type="text"
              name="key"
              placeholder="Enter Key Name"
              onChange={(e) => setKey(e.target.value)}
              required
            />
            <Form.Control
              className="my-3"
              type="text"
              name="placeholder"
              placeholder="Enter Placeholder Value"
              onChange={(e) => setPlaceholder(e.target.value)}
              required
            />
            {props.selected == 1 && (
              <>
                <Form.Select name="type" onChange={(e) => setType(e.target.value)} aria-label="Default select example">
                  <option>Select Input Type</option>
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="password">Password</option>
                  <option value="email">Email</option>
                </Form.Select>
              </>
            )}
            {props.selected == 2 && (
              <>
                <Form.Control
                  className="my-3"
                  type="number"
                  name="type"
                  placeholder="Enter Number of Rows"
                  onChange={(e) => setType(e.target.value)}
                />
              </>
            )}
            {props.selected == 3 && (
              <>
                <Form.Control
                  className="my-3"
                  type="text"
                  name="type"
                  placeholder="Enter Options (comma separated)"
                  onChange={(e) => setType(e.target.value)}
                />
              </>
            )}
            {props.selected == 4 && (
              <>
                <Form.Control
                  className="my-3"
                  type="text"
                  name="type"
                  placeholder="Enter Checkbox Names (comma separated)"
                  onChange={(e) => setType(e.target.value)}
                />
              </>
            )}
            {props.selected == 5 && (
              <>
                <Form.Control
                  className="my-3"
                  type="text"
                  name="type"
                  placeholder="Enter Radiobutton Names (comma separated)"
                  onChange={(e) => setType(e.target.value)}
                />
              </>
            )}
            {props.selected == 6 && (
              <>
                <Form.Control
                  className="my-3"
                  type="text"
                  name="type"
                  value="None"
                  placeholder="Enter Radiobutton Names (comma separated)"
                  onChange={(e) => setType("None")}
                  hidden
                />
              </>
            )}
            {props.selected == 7 && (
              <>
                <Form.Control
                  className="my-3"
                  type="text"
                  name="type"
                  value="None"
                  placeholder="Enter Radiobutton Names (comma separated)"
                  onChange={(e) => setType("None")}
                  hidden
                />
              </>
            )}
            <Form.Check
              className="my-3"
              label="required field"
              name="require"
              type="checkbox"
              onChange={(e) => setRequired(e.target.value)}
            />
            <Button
              variant="btn btn-primary w-100 py-2 my-3"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Crete Component
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}


export default function FormCreate() {
  const [modalShow, setModalShow] = useState(false);
  const [customModalShow, setCustomModalShow] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selectedName, setSelectedName] = useState(String);
  const [component, setComponent] = useState({});
  const [formData, setFormData] = useState([]);
  const [formName, setFormName] = useState("");
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  
  useEffect(() => {
    if (component.selected != undefined) {
      const newFormData = [...formData, component]
      setFormData(newFormData);
    }
  }, [component]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:3000/api/forms/save",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        form_name: formName,
        form_data: formData,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result._id);
        window.location.href = "/forms/list";
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return (
    <Container>
      <h1>Create Form</h1>

      <Button variant="btn btn-primary py-2 px-4 my-3" onClick={() => setModalShow(true)}>
        Add Component
      </Button>

      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
          <Form.Label>Form Name</Form.Label>
            <Form.Control
              type="text"
              name="form_name"
              key="form_name"
              placeholder="Enter Form Name"
              onChange={(e) => setFormName(e.target.value)}
              required
            />
            </Form.Group>
          {formData.map((item, index) => {
            return (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>{item.label}</Form.Label>
                  {(item.selected == 1) && (
                    <Form.Control
                      type={item.type}
                      name={item.key}
                      key={item.key}
                      placeholder={item.placeholder}
                      required={item.required}
                    />
                  )}
                  {(item.selected == 2) && (
                    <Form.Control
                      as="textarea"
                      rows={item.type}
                      name={item.key}
                      key={item.key}
                      placeholder={item.placeholder}
                      required={item.required}
                    />
                  )}
                  {(item.selected == 3) && (
                    <Form.Select aria-label="Default select example">
                      <option>{item.placeholder}</option>
                      {item.type.split(",").map((option) => {
                        return (
                          <option value={option}>{option}</option>
                        );
                      })}
                    </Form.Select>
                  )}
                  {(item.selected == 4) && (
                    item.type.split(",").map((option) => {
                      return (
                        <Form.Check // prettier-ignore
                          type="checkbox"
                          id={option}
                          label={option}
                        />
                      );
                    })
                  )}
                  {(item.selected == 5) && (
                    item.type.split(",").map((option) => {
                      return (
                        <Form.Check // prettier-ignore
                          type="radio"
                          id={option}
                          label={option}
                        />
                      );
                    })
                  )}
                  {(item.selected == 6) && (
                    <Form.Control
                      type="date"
                      name={item.key}
                      key={item.key}
                      placeholder={item.placeholder}
                      required={item.required}
                    />
                  )}
                  {(item.selected == 7) && (
                    <Form.Control
                      type="file"
                      name={item.key}
                      key={item.key}
                      placeholder={item.placeholder}
                      required={item.required}
                    />
                  )}
                </Form.Group>
              </>
            );
          })}
          <Button
            variant="btn btn-primary w-100 py-2"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Save Form
          </Button>
        </Form>
      </Container>

      <ModalWithComponents show={modalShow} onHide={(e, f) => { setModalShow(false); setSelected(e); setSelectedName(f); setCustomModalShow(true); }} />
      <ModalWithCustomization show={customModalShow} selected={selected} selectedName={selectedName} onHide={(e) => { setCustomModalShow(false); setComponent(e); }} />

    </Container>
  );
}