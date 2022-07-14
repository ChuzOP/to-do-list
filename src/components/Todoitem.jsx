import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import '../styles/TodoItem.css'



const Todoitem = ({ text, completed, onComplete, onDelete }) => {

  return (
    <List
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ListItem sx={{boxShadow: 1, bgcolor: "#B9BBDF", borderRadius: "15px"}}
        key={text}
        secondaryAction={
          <IconButton edge="end" aria-label="comments" onClick={onDelete}>
            <DeleteIcon color="secondary" />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              onClick={onComplete}
              checked={completed}
              sx={{
                color: "#a760ff"
              }}
            />
          </ListItemIcon>
          <ListItemText id={text} className={completed ? "completado" : null} primary={text} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default Todoitem;
