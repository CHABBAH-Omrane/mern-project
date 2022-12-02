import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {  useEffect } from "react";
import { HeaderListContact } from "./headerContactList";

import { getContactList, deleteContactList } from "../../actions/adminActions";

export const ListOfContact = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactList());
  }, []);

  const contacts = useSelector((state) => state.adminReducer.contacts);

  return (
    <div>
      <div id="contact">
        <HeaderListContact />

        <Table
          striped
          bordered
          hover
          size="sm"
          style={{ width: "80%", margin: "auto" }}
        >
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Message</th>
              <th style={{ width: "10%" }}>Delete</th>
            </tr>
          </thead>
          {contacts.map((el) => (
            <tbody style={{ color: "black" }}>
              <tr>
                <td>{el.date}</td>
                <td>{el.name}</td>
                <td>{el.phoneNum}</td>
                <td>{el.e_mail}</td>
                <td>{el.desc}</td>

                <Button
                  variant="warning"
                  style={{ marginLeft: "20px" }}
                  onClick={() => dispatch(deleteContactList(el._id))}
                >
                  {" "}
                  Delete{" "}
                </Button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};
