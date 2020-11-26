import React, { Component } from 'react'
import api from '../api/program'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { TableContainer, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';


class GoalUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            substeps: [],
        }
    }
    componentDidMount = async () => {
        const { id } = this.state
        const goal = await api.getGoalById(id)

        this.setState({
            name: goal.data.data.name,
            substeps: goal.data.data.substeps,
        })
    }
    render() {
        const { name, substeps} = this.state
        return (
            <div style={{flexGrow: 1}}>
                <Paper style={{padding:'1rem'}}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card style={{padding: 2,textAlign: 'center'}}>
                            <CardHeader title="Client Info" style={{backgroundColor:"#748ffc",color:'white'}}></CardHeader>
                            <CardContent>
                                <TableContainer>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="left">Name</TableCell>
                                                <TableCell align="right" style={{fontWeight: '600'}}>Jacob Williams</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Date of Birth</TableCell>
                                                <TableCell align="right" style={{fontWeight: '600'}}>Jan. 12, 2016</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card style={{padding: 2,textAlign: 'center'}}>
                            <CardHeader title="Upcoming Sessions" style={{backgroundColor:"#748ffc",color:'white'}}></CardHeader>
                            <CardContent>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Therapist</TableCell>
                                                <TableCell align="right">Date</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="left">Uliana Y.</TableCell>
                                                <TableCell align="right" style={{fontWeight: '600'}}>Nov. 27, 2020</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Uliana Y.</TableCell>
                                                <TableCell align="right" style={{fontWeight: '600'}}>Nov. 30, 2020</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Michelle O.</TableCell>
                                                <TableCell align="right" style={{fontWeight: '600'}}>Dec. 1, 2020</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Uliana Y.</TableCell>
                                                <TableCell align="right" style={{fontWeight: '600'}}>Dec. 2, 2020</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper style={{padding: 2,textAlign: 'center'}}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper style={{padding: 2,textAlign: 'center'}}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper style={{padding: 2,textAlign: 'center'}}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper style={{padding: 2,textAlign: 'center'}}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </Paper>
            </div>
        )
    }
}

export default GoalUpdate