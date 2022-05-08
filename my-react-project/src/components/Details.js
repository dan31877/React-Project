import React from 'react';
import { Box, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { withTheme, makeStyles } from '@mui/styles';

const Details = withTheme((props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box>
                <Container maxWidth="x1" disableGutters style={{ height: "100%" }}>
                    <Paper className={classes.section} elevation={4}>
                        <Typography variant="h6" style={{ marginBottom: "16px" }}>
                            Character Details
                        </Typography>

                        <Grid container spacing={1} justify="flex-start" style={{ padding: "12px" }}>
                            <Grid item xs={6}>
                                <TextField
                                    id="label-name"
                                    value="Name:"
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="name"
                                    value={props.character ? props.character.name : "N/A"}
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid container spacing={1} justify="flex-start" style={{ padding: "12px" }}>
                            <Grid item xs={6}>
                                <TextField
                                    id="label-id"
                                    value="ID:"
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="id"
                                    value={props.character ? props.character.id : "N/A"}
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="label-height"
                                    value="Height:"
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="height"
                                    value={props.character ? props.character.height : "N/A"}
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="label-mass"
                                    value="Mass:"
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="mass"
                                    value={props.character ? props.character.mass : "N/A"}
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="label-force-user"
                                    value="Force User:"
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="force-user"
                                    value={props.character ? props.character.force_user : "N/A"}
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="label-hair-color"
                                    value="Hair Color:"
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="hair-color"
                                    value={props.character ? props.character.hair_color : "N/A"}
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="label-birth-year"
                                    value="Birth Year:"
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="birth-year"
                                    value={props.character ? props.character.birth_year : "N/A"}
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="label-gender"
                                    value="Gender:"
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="gender"
                                    value={props.character ? props.character.gender : "N/A"}
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
            {/* {console.log(props.character)} */}
        </React.Fragment>
    );
});

const useStyles = makeStyles(() => ({
    property: {
        marginBottom: useTheme().spacing(2), 
    },
    section: {
        marginTop: useTheme().spacing(2),
        padding: useTheme().spacing(2),
    }
}
));

export default Details; 