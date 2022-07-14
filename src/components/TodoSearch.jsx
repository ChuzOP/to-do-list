import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

const TextFielda = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
      borderRadius: '10px',
    },
  }
});

const TodoSearch = ({searchValue, setSearchValue}) => {
  const handleChange = (event) =>{
    setSearchValue(event.target.value)
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <TextFielda
        label="Search a Task"
        required
        variant="outlined"
        id="validation-outlined-input"
        sx={{boxShadow: 3, bgcolor: 'primary.main', borderRadius: '10px', colorText: "secondary"}}
        onChange={handleChange}
        value={searchValue}
      />
    </Box>
  );
};

export default TodoSearch;
