import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Box, Button, Chip, Paper } from '@material-ui/core';
import { Done, ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    width: 400,
    height: 400,
  },
  fontPrice: {
    fontWeight: 900,
    color: '#C6BA03 ',
  },
  fontDescription: {
    lineHeight: '28px',
    textAlign: 'justify',
  },
  chip: {
    backgroundColor: '#06A950',
    color: '#fff',
    marginBottom: 100,
  },
  button: {
    borderRadius: '18px',
  },
}));

const ProductDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Paper elevation={2} mt={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="center">
                <img
                  className={classes.img}
                  alt="complex"
                  src="/images/coronaFloral.png"
                  display="flex"
                  justifyContent="center"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box fontWeight="fontWeightBold" mb={2} fontSize={25}>
                Corona de Anturios Flores Blancas
              </Box>
              <Box mb={2} className={classes.fontDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Box>
              <Box className={classes.fontPrice} fontSize={25} mb={2}>
                $ 320.00
              </Box>
              <Box>
                <Chip
                  label="En Stock"
                  clickable
                  className={classes.chip}
                  deleteIcon={<Done />}
                />
              </Box>
              <Grid item xs={12} md={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<ShoppingCart />}
                  fullWidth
                >
                  Añadir
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default ProductDetails;
