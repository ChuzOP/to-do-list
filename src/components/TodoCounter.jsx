import { Box } from "@mui/system";
import React from "react";

const TodoCounter = ({completedTodo, countTodo}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "3%"
      }}
    >
      <h1 style={{margin: "0px"}}>ToDo List</h1>
      <h3 style={{margin: "0px"}}> Has completado {completedTodo} de {countTodo} ToDos</h3>
    </Box>
  );
};

export default TodoCounter;
