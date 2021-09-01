import React from 'react';
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
  OutlinedInput,
  FormControlLabel,
  FormGroup,
  Checkbox,
  IconButton,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff, Add } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 135,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  dialog: {
    width: 500,
    margin: theme.spacing(2),
  },
  checkBoxGroup: {
    marginTop: theme.spacing(3),
  },
  addBtn: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
}));

const UserForm = () => {
  const classes = useStyles();

  //PASSWORD FIELD
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //DIALOG
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  //SELECTS
  const [tipo, setTipo] = React.useState('');

  const handleChangeType = (event) => {
    setTipo(event.target.value);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Agregar Usuario
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Usuarios'}</DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
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
                        onChange={handleChangeType}
                        label="Tipo"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Administrador</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      className={classes.addBtn}
                      variant="contained"
                      color="primary"
                      aria-label="add"
                      component="span"
                    >
                      <Add />
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.textField}
                      variant="outlined"
                      name="nombre"
                      label="Nombre completo"
                      type="text"
                      fullWidth
                    />
                    <TextField
                      className={classes.textField}
                      variant="outlined"
                      name="telefono"
                      label="Teléfono"
                      type="text"
                      fullWidth
                    />
                    <TextField
                      className={classes.textField}
                      variant="outlined"
                      name="nombre"
                      label="Nombre de Usuario"
                      type="text"
                      fullWidth
                    />
                    <FormControl
                      className={classes.textField}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        labelWidth={70}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Box fontWeight="fontWeightBold">Permisos:</Box>
                <FormGroup column>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                      />
                    }
                    label="Dashboard"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Reportes"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Inventario"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Planes"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <FormGroup column className={classes.checkBoxGroup}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                      />
                    }
                    label="Suscripción"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                      />
                    }
                    label="Ventas"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                      />
                    }
                    label="Compras"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                      />
                    }
                    label="Usuarios"
                  />
                </FormGroup>
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
export default UserForm;
