import { Fab } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";

const TextFielda = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      borderRadius: "10px",
    },
  },
});

const CreateTodoButtom = ({ text, addTodo }) => {
  const [open, setOpen] = useState(false);
  const [newTodoValue, setNewTodoValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewTodoValue("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length <= 0) {
      return;
    } else {
      addTodo(newTodoValue);
      setOpen(false);
      setNewTodoValue("");
    }
  };

  const handleChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: "black" }} align="center">
          Add ToDo
        </DialogTitle>
        <DialogContent>
          <TextFielda
            autoFocus
            id={text}
            label="Title Task"
            fullWidth
            variant="standard"
            value={newTodoValue}
            onChange={handleChange}
            sx={{ color: "black" }}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="secondary" onClick={handleSubmit}>
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTodoButtom;
