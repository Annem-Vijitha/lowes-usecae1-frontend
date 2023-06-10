import React, { useContext, useState } from "react";
import { Form, Modal, Button } from "semantic-ui-react";
import Context from "../config/context";

export default function DelItemForm() {
  const context = useContext(Context);
  const { handleDelete1 } = context;
  const [itemID, setItemID] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange1 = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setItemID(value);
    }
  };

  const handleSubmit = () => {
    const id = itemID;
    console.log("Submitting category:", id);
    handleDelete1(id);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Modal
      trigger={<Button primary onClick={handleOpen}>Delete Item</Button>}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>Delete Category</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            type="number"
            name="itemID"
            label="Number"
            placeholder="Item ID"
            onChange={handleChange1}
            value={itemID}
          />
          <Button type="submit">Delete</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
