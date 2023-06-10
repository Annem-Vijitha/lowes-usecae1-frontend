import React, { useContext, useState } from "react";
import { Form, Modal, Button } from "semantic-ui-react";
import Context from "../config/context";

export default function DelCategoryForm() {
  const context = useContext(Context);
  const { handleDelete } = context;
  const [categoryID, setCategoryID] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange1 = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCategoryID(value);
    }
  };

  const handleSubmit = () => {
    const id = categoryID;
    console.log("Submitting category:", id);
    handleDelete(id);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Modal
      trigger={<Button primary onClick={handleOpen}>Delete Category</Button>}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>Delete Category</Modal.Header>
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
          <Button type="submit">Delete</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
