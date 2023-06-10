import React, { useContext, useState, useEffect } from "react";

import { Grid, Segment, Card } from "semantic-ui-react";

import Category from "../components/Category";
import Pagination from "../components/Pagination";
import AddCategoryForm from "../components/AddCategoryForm";
import DelCategoryForm from "../components/DelCategoryForm";
import UpdateCategoryForm from "../components/UpdateCategoryForm";

import Context from "../config/context";

export default function Categories() {
  const context = useContext(Context);
  const {categories, getCategories } = context;

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);

  useEffect(() => {
    getCategories();
  }, []);

  // Get current categories
  const indexOfLastCategory = currentPage * cardsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - cardsPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const views =
    categories.length > 0 ? (
      currentCategories.map(category => <Category category={category} />)
    ) : (
      <Card>
        <Card.Content>
          <h2>Nothing here!</h2>
        </Card.Content>
      </Card>
    );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pagination =
    categories.length > cardsPerPage ? (
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={categories.length}
        paginate={paginate}
      />
    ) : null;

  const add =  <AddCategoryForm /> ;
  const del = <DelCategoryForm />;
  const update = <UpdateCategoryForm/>;
  return (
    <div>
      <Segment>
        <Grid>
          <Grid.Column floated="left" width={3}>
            <h1>Recent Categories</h1>
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
