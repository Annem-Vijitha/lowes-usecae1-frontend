import React from "react";
import { Card } from "semantic-ui-react";

export default function Category(props) {
  

  return (
    <Card color="teal">
    <Card.Content>
        <Card.Header>{props.category.categoryID}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Header>{props.category.categoryName}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Header>{props.category.categoryDescription}</Card.Header>
      </Card.Content>
    </Card>
  );
}
