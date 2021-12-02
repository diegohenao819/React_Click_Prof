import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Imagen1 from '../img/Image-1.jpg'
import Imagen2 from '../img/Image-2.png'
import Imagen3 from '../img/Image-3.png'

const TarjetasGrupales = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={Imagen1}
          />
          <Card.Body>
            <Card.Title>Test your English skills today!!</Card.Title>
            <Card.Text>
            Before you take that expensive test that you need to study abroad, take our diagnostic test and check if you are really ready for it!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={Imagen2}
          />
          <Card.Body>
            <Card.Title>Business Diagnostic Test.</Card.Title>
            <Card.Text>
            Do you want to test your employees' English skills? Let ClickProf be in charge of that!{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={Imagen3}
          />
          <Card.Body>
            <Card.Title>Increase your vocabulary!</Card.Title>
            <Card.Text>
            Maybe you're not ready yet, but don't worry, we are sure you will increase your vocabulary very soon with our vocabulary resources.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default TarjetasGrupales;
