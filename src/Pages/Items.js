import React, { useContext, useState, useEffect } from "react";

import { Grid, Card, Segment } from "semantic-ui-react";

import Item from "../components/Item";
import Pagination from "../components/Pagination";
import AddItemForm from "../components/AddItemForm";
import DelItemForm from "../components/DelItemForm";
import UpdateItemForm from "../components/UpdateItemForm";


import Context from "../config/context";

export default function Items() {
  const context = useContext(Context);
  const { items, getItems } = context;

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  useEffect(() => {
    getItems();
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * cardsPerPage;
  const indexOfFirstItem = indexOfLastItem - cardsPerPage;
  const currentItems = items.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const views =
    items.length > 0 ? (
      currentItems.map(item => <Item item={item} />)
    ) : (
      <Card>
        <Card.Content>
          <h2>Nothing here!</h2>
        </Card.Content>
      </Card>
    );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pagination =
    items.length > cardsPerPage ? (
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={items.length}
        paginate={paginate}
      />
    ) : null;

  const add =  <AddItemForm /> 
  const del = <DelItemForm />
  const update = <UpdateItemForm />
  return (
    <div>
      <Segment>
        <Grid>
          <Grid.Column floated="left" width={3}>
            <h1>Recent Items</h1>
          </Grid.Column>
          <Grid.Column floated="right" width={3}>
            {add}
          </Grid.Column>
          <Grid.Column floated="right" width={3}>
            {del}
          </Grid.Column>
          <Grid.Column floated="right" width={3}>
            {update}
          </Grid.Column>
        </Grid>
      </Segment>
      <Card.Group fluid itemsPerRow="3">
        {views}
      </Card.Group>
      <br />
      <center>{pagination}</center>
    </div>
  );
}
