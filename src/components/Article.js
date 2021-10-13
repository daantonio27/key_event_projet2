import React from "react";
import { Table } from "reactstrap";
import ListerFrame from "./ListerFrame";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FcUpLeft } from "react-icons/fc";

const Article = () => {
  return (
    <>
      <div className="header text-center">
        <button style={{ float: "left" }} className="btn btn-primary mt-2 ">
          <FcUpLeft size="1.2rem" />
        </button>
        <UncontrolledDropdown style={{ float: "right" }}>
          <DropdownToggle caret>Bannière app</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <br />
      <div className="task-container"></div>
      <ListerFrame />
      <br />

      <Table striped className="form-control-lg">
        <thead>
          <tr>
            <th></th>
            <th>Institution</th>
            <th>date création</th>
            <th>date de début</th>
            <th>date de fin</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Orange</td>
            <td>02/01/2021</td>
            <td>02/01/2021</td>
            <td>02/01/2021</td>
            <td>50 000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Uber</td>
            <td>02/01/2021</td>
            <td>02/01/2021</td>
            <td>02/01/2021</td>
            <td>02/01/2021</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Key event</td>
            <td>02/01/2021</td>
            <td>02/01/2021</td>
            <td>02/01/2021</td>
            <td>02/01/2021</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Article;
