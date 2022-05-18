import "./ChallengeFormStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const ChallengeForm = () => {
  return (
    <div className="flexboxContainer">
      <Form>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Tickets lösen"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Communityposts erstellen"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Blahblahblah"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
            />
          </div>
        ))}
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Anzahl Tickets</Form.Label>
            <Form.Control
              id="disabledTextInput"
              placeholder="Anzahl der Tickets"
              className="form"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Zeitspanne</Form.Label>
            <Form.Select id="disabledSelect">
              <option>keine Angabe</option>
              <option>1 Tag</option>
              <option>2 Tage</option>
              <option>5 Tage</option>
              <option>1 Woche</option>
              <option>2 Wochen</option>
              <option>1 Monat</option>
              <option>6 Monate</option>
              <option>1 Jahr</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Bewertung</Form.Label>
            <Form.Select id="disabledSelect">
              <option>keine Angabe</option>
              <option>unzufrieden</option>
              <option>akzeptabel</option>
              <option>zufrieden</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Schwierigkeitsgrad</Form.Label>
            <Form.Select id="disabledSelect">
              <option>Einsteiger</option>
              <option>Erfahrener</option>
              <option>Profi</option>
            </Form.Select>
          </Form.Group>
          <Button className="buttoncolor" type="submit">
            Submit
          </Button>
        </fieldset>
      </Form>
    </div>
  );
};
