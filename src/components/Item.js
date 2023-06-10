import React, { useContext } from "react";
import { Card, Header, Label } from "semantic-ui-react";

import Detail from "./Detail";

import Context from "../config/context";

export default function Item(props) {
  const context = useContext(Context);


  const extra =  (
    <Card.Content extra>
      <Detail item={props.item} />
    </Card.Content>
  ) ;

  return (
    <Card>
      <Label color="teal" size="large" attached="top left">
        Comida
      </Label>
      <Card.Content>
        <Card.Header>{props.item.itemID}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Header>
          <Header floated="left">{props.item.itemName}</Header>
          <Header floated="right" color="teal">
          </Header>
        </Card.Header>
      </Card.Content>
      {extra}
    </Card>
  );
}
