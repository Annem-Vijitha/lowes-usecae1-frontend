import React, { useContext, useState, useEffect } from "react";

import { Form, Modal, Button, Header, Dropdown } from "semantic-ui-react";

import Context from "../config/context";

export default function AddItemForm() {
  const context = useContext(Context);
  const { categories, getCategories, addItem } = context;

  useEffect(() => {
    getCategories();
  }, []);

  const listCategories = categories.map(category => ({
    key: category.id,
    text: category.categoryName,
    value: category.id
  }));

  
  const [itemId, setId] = useState(null);
  const [itemName, setName] = useState("");
  const [itemStatus, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);


  const handleChange1 = (e, { value }) => setId(value);
const handleChange2 = (e, { value }) => setName(value);
const handleChange3 = (e, { value }) => setStatus(value);
const handleChange4 = (e, { value }) => setCategory(value);


const handleSubmit = () => {
  const item = {
    itemName: itemName,
    itemID: itemId,
    itemStatus: itemStatus,
    category_id: parseInt(category),
  };
  console.log("Submitting category:", item); 
  const jsonData = JSON.stringify(item);
  console.log("Submitting category:", jsonData);
  addItem(jsonData);
  setOpen(false);
};
const handleOpen = () => {
  setOpen(true);
};
  return (
    <Modal
    trigger={<Button primary onClick={handleOpen}>Add new Item</Button>}
    open={open}
    onClose={() => setOpen(false)}
    >
      <Modal.Header>Add new Item</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
            <Form.Input
            name="itemId"
            label="Id"
            placeholder=" id"
            onChange={handleChange1}
            value={itemId}
          />
          <Form.Input
            name="itemName"
            label="Name"
            placeholder=" name"
            onChange={handleChange2}
            value={itemName}
          />
           <Form.Input
            name="itemStatus"
            label="Status"
            placeholder=" status"
            onChange={handleChange3}
            value={itemStatus}
          />
          <Form.Field>
            <Header as="h5">Category</Header>
            <Dropdown
              name="category"
              placeholder="Category"
              fluid
              selection
              options={listCategories}
              onChange={handleChange4}
              value={category}
            />
          </Form.Field>
          <Button type="submit">Add</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
