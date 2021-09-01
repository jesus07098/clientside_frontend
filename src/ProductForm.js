import React from 'react';
import Button from '@material-ui/core/Button';
import {
  Grid,
  TextField,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const ProductForm = () => {
  const classes = useStyles();

  //DIALOG
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //SELECTS
  const [tipo, setTipo] = React.useState('');
  const handleChange = (event) => {
    setTipo(event.target.value);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        maxWidth={1000}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Productos'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={3}>
              <Grid item xs={3} lg={3}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="nombre"
                  label="Nombre"
                  type="text"
                  fullWidth
                />
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Tipo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={tipo}
                    onChange={handleChange}
                    label="Tipo"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3} lg={3}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="descripcion"
                  label="Descripción"
                  type="text"
                  fullWidth
                />
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Categoría
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    //value={categoria}
                    onChange={handleChange}
                    label="Categoría"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3} lg={4}>
                <Box border={1} p={8} mb={2}></Box>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Subir imagen
                  </Button>
                </label>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            Guardar
          </Button>
          <Button
            variant="outlined"
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Limpiar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default ProductForm;
