import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Card, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ContactInfoCard = () => {
  const navigate = useNavigate();
  const { contacts } = useSelector((state) => state.contacts);
  const { id } = useParams();

  const contact = contacts.find((info) => +info.id === +id);

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
          <Card style={{ width: "24rem", height: "25rem" }}>
            <Card.Body>
              <Card.Title className="mb-4">Client Information:</Card.Title>
              <Card.Text>
                <b>Name </b> {" : "} {contact.name}
              </Card.Text>
              <Card.Text>
                <b>Username</b> {" : "} {contact.username}
              </Card.Text>
              <Card.Text>
                <b>Email</b> {" : "}
                &nbsp;
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </Card.Text>
              <Card.Text>
                <b>Phone</b> {" : "} &nbsp;{" "}
                <a href={`tel:+${contact.phone}`}>+{contact.phone}</a>
              </Card.Text>
              <Card.Text>
                <b>Website</b> {" : "} &nbsp;{" "}
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

          <Card style={{ width: "24rem", height: "25rem" }}>
            <Card.Body>
              <Card.Title className="mb-4">Company Information:</Card.Title>
              <Card.Text>
                <b>Name</b> {" : "} {contact.company.name}
              </Card.Text>
              <Card.Text>
                <b>City</b> {" : "} {contact.address.city}
              </Card.Text>
              <Card.Text>
                <b>Street</b> {" : "} {contact.address.street}
              </Card.Text>
              <Card.Text>
                <b>Suite</b> {" : "} {contact.address.suite}
              </Card.Text>
              <Card.Text>
                <b>Zip Code</b> {" : "} {contact.address.zipcode}
              </Card.Text>
              <Card.Text>
                <b>Catchphrase </b> {" : "} {contact.company.catchPhrase}
              </Card.Text>
              <Card.Text>
                <b>Business</b> {" : "} {contact.company.bs}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ContactInfoCard;
