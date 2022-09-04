import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsAction } from "../pages/contact/contactsAction";
import { Table, Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactsCard = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const { contacts } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [contacts, dispatch]);
  return (
    <Container>
      <h2 className="mt-4">Contacts</h2>
      <div className="search-bar mb-2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          name="search"
          placeholder="Search by Name or Company"
          className=""
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
      </div>
      <div className="contacts mt-4 mb-4">
        {contacts
          .filter((search) => {
            if (query === "") {
              return search;
            } else if (
              search.name.toLowerCase().includes(query.toLowerCase()) ||
              search.company.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return search;
            }
            return false;
          })
          .map((contact) => (
            <Card key={contact.id} style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </Card.Text>
                <Card.Text>{contact.company.name}</Card.Text>
                <Card.Text>
                  {" "}
                  <a
                    href={`http://${contact.website}`}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    {contact.website}
                  </a>
                </Card.Text>

                <Link className="view-more" to={`/contact/${contact.id}`}>
                  <i className="fa-solid fa-eye"></i> View More
                </Link>
              </Card.Body>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default ContactsCard;
