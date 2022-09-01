import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsAction } from "../pages/contact/contactsAction";
import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactTable = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const { contacts } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [contacts, dispatch]);

  return (
    <Container>
      <h2 className="mt-4">Contacts</h2>
      <div className="table mt-3">
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>More Info</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Username</th> */}
              <th>Company</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {contacts
              .filter((search) => {
                if (query === "") {
                  return search;
                } else if (
                  search.name.toLowerCase().includes(query.toLowerCase()) ||
                  search.company.name
                    .toLowerCase()
                    .includes(query.toLowerCase())
                ) {
                  return search;
                }
                return false;
              })
              .map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <Link className="view-more" to={`/contact/${contact.id}`}>
                      <i className="fa-solid fa-eye"></i> View More
                    </Link>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  {/* <td>{contact.username}</td> */}
                  <td>{contact.company.name}</td>
                  <td>
                    <a
                      href={`http://${contact.website}`}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      {contact.website}
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default ContactTable;
