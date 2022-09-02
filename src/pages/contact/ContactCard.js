import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Card, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ContactCard = () => {
  const navigate = useNavigate();
  const { contacts } = useSelector((state) => state.contacts);
  console.log(contacts);
  const { id } = useParams();
  console.log(id);

  const contact = contacts.find((info) => +info.id === +id);
  console.log(contact);

  return (
    <>
      <Header />
      <Container className="mb-5">
        <Button
          className="mt-3 mb-3"
          variant="none"
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-arrow-left"></i> Back
        </Button>
        <h2 className="mb-5">{contact.name}</h2>
        <div className="client-info">
          <Card style={{ width: "20rem", height: "25rem" }}>
            <Card.Body>
              <Card.Title className="mb-4">Client Information:</Card.Title>
              <Card.Text>
                <strong>Name </strong> {" : "} {contact.name}
              </Card.Text>
              <Card.Text>
                <strong>Username</strong> {" : "} {contact.username}
              </Card.Text>
              <Card.Text>
                <strong>Email</strong> {" : "}
                &nbsp;
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </Card.Text>
              <Card.Text>
                <strong>Phone</strong> {" : "} &nbsp;{" "}
                <a href={`tel:+${contact.phone}`}>+{contact.phone}</a>
              </Card.Text>
              <Card.Text>
                <strong>Website</strong> {" : "} &nbsp;{" "}
                <a
                  href={`http://${contact.website}`}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  {contact.website}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem", height: "25rem" }}>
            <Card.Body>
              <Card.Title className="mb-4">Company Information:</Card.Title>
              <Card.Text>
                <strong>Name</strong> {" : "} {contact.company.name}
              </Card.Text>
              <Card.Text>
                <strong>City</strong> {" : "} {contact.address.city}
              </Card.Text>
              <Card.Text>
                <strong>Street</strong> {" : "} {contact.address.street}
              </Card.Text>
              <Card.Text>
                <strong>Suite</strong> {" : "} {contact.address.suite}
              </Card.Text>
              <Card.Text>
                <strong>Zip Code</strong> {" : "} {contact.address.zipcode}
              </Card.Text>
              <Card.Text>
                <strong>Catchphrase</strong> {" : "}{" "}
                {contact.company.catchPhrase}
              </Card.Text>
              <Card.Text>
                <strong>Business</strong> {" : "} {contact.company.bs}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ContactCard;
