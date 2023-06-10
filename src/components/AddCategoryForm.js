import React, { useContext, useState } from "react";
import { Form, Modal, Button } from "semantic-ui-react";
import Context from "../config/context";

export default function AddCategoryForm() {
  const context = useContext(Context);
  const { addCategory } = context;

  const [categoryID, setCategoryID] = useState(null);
  const [categoryName, setName] = useState("");
  const [categoryDescription, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange1 = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCategoryID(value);
    }
  };

  const handleChange2 = (e, { value }) => setName(value);
  const handleChange3 = (e, { value }) => setDescription(value);

  const handleSubmit = () => {
    const category = {
      categoryID: categoryID,
      categoryName: categoryName,
      categoryDescription: categoryDescription
    };
    console.log("Submitting category:", category); // Debug statement
    const jsonData = JSON.stringify(category);
    console.log("Submitting category:", jsonData);
    addCategory(jsonData);
    setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Modal
      trigger={<Button primary onClick={handleOpen}>Add new Category</Button>}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>Add new Category</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
        <Form.Input
        type="number"
        name="categoryID"
        label="Number"
        placeholder="Category ID"
        onChange={handleChange1}
        value={categoryID}
      />
          <Form.Input
            name="categoryName"
            label="Name"
            placeholder="Category name"
            onChange={handleChange2}
            value={categoryName}
          />
          <Form.Input
            name="categoryDescription"
            label="Description"
            placeholder="Category Description"
            onChange={handleChange3}
            value={categoryDescription}
          />
          <Button type="submit">Add</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
