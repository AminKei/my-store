import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";

function FilterConteiner() {
  return (
    <>
      <Accordion  style={{ width: "25%" }}>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Sort by :</Accordion.Header>
          <Accordion.Body>
            <Button>Expensive:</Button>
            <Button>Chiper:</Button>
            <Button>More View:</Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filter by</Accordion.Header>
          <Accordion.Body style={{ display: "grid" }}>
            <label htmlFor="">
              min price:
              <input type="range" />
            </label>
              <h5>$0</h5>
            <label htmlFor="">
              max price:
              <input type="range" />
              <h5>$0</h5>
            </label>
            <hr />
            <p>Filter by size:</p>
            <label htmlFor="">
              S:
              <input type="checkbox" />
            </label>
            <label htmlFor="">
              L:
              <input type="checkbox" />
            </label>
            <label htmlFor="">
              XL:
              <input type="checkbox" />
            </label>
            <label htmlFor="">
              XXL:
              <input type="checkbox" />
            </label>

            <label htmlFor="">
              XXXL:
              <input type="checkbox" />
            </label>

            <hr />
              <Button>Reset FIlter</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FilterConteiner;
