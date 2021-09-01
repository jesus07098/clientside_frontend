import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Box,
  Button,
  ButtonBase,
  FormControl,
  Select,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  detailsPayout: {
    padding: theme.spacing(2),
    height: '17rem',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  itemsCart: {
    padding: theme.spacing(2),
  },
}));

const Cart = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Container fixed>
        <Box fontWeight="fontWeightLight" fontSize="h4.fontSize" mb={3}>
          Shopping Cart
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Paper elevation={3} className={classes.itemsCart}>
              <Grid container spacing={5}>
                <Grid item xs={3}>
                  <Box fontWeight="fontWeightBold" mb={2}>
                    Producto
                  </Box>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="/images/logoletras.jpg"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={3}>
                  <Grid item xs={3}>
                    <Box fontWeight="fontWeightBold" mb={2}>
                      Cantidad
                    </Box>
                  </Grid>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <Select
                      native
                      onChange={handleChange}
                      inputProps={{
                        name: 'cantidad',
                        id: 'cantidad',
                      }}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <Box fontWeight="fontWeightBold" mb={2}>
                    Precio
                  </Box>
                  <Grid item xs={3}>
                    $85,000,000.00
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Box fontWeight="fontWeightBold" mb={2}>
                    Total
                  </Box>
                  <Grid item xs={3}>
                    $85,000,000.00
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.detailsPayout} elevation={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box
                    fontWeight="fontWeightBold"
                    fontSize="h6.fontSize"
                    letterSpacing={1}
                  >
                    Resumen de Orden
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box fontWeight="fontWeightBold">Subtotal:</Box>
                </Grid>

                <Grid item xs={6}>
                  <Box display="flex" justifyContent="flex-end">
                    $100,000.00
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box fontWeight="fontWeightBold">Envío:</Box>
                </Grid>

                <Grid item xs={6}>
                  <Box display="flex" justifyContent="flex-end">
                    $0.00
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box fontSize={22} fontWeight="fontWeightBold">
                    Total:
                  </Box>
                </Grid>

                <Grid item xs={10} sm={6}>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    fontSize={22}
                    fontWeight="fontWeightBold"
                    mb={5}
                  >
                    $100,000.00
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box display="flex" alignItems="flex-end">
                    <Button variant="contained" color="primary" fullWidth>
                      Pagar Ahora
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
