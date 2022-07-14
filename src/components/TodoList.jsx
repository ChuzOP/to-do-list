import { Box } from "@mui/material";
import React from "react";

const TodoList = (props) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <h3>{props.children}</h3>
    </Box>
  );
};

export default TodoList;
