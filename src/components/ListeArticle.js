import React from "react";
import { Card, CardImg, CardText, CardDeck, CardBody } from "reactstrap";

const ListeArticle = (props) => {
  return (
    <div>
      <CardDeck>
        <Card>
          <CardImg
            top
            width="50%"
            src="/assets/image02.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardText text-center>Nom Institution - 20/01/2021 19:00</CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default ListeArticle;
