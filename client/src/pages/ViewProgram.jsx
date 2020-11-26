import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api/program'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
class UpdateGoal extends Component {
    updateUser = event => {
        event.preventDefault()
        window.location.href = `/program/update/${this.props.id}`
    }
    render() {
        const updateLink = `/program/update/${this.props.id}`;
        return (
            <Link to={updateLink}>
              Update
            </Link>
        )
    }
}
class DeleteGoal extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the goal ${this.props.name} permanently?`,
            )
        ) {
            api.deleteGoalById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class ViewProgram extends Component {
    constructor(props) {
        super(props)
        this.state = {
            child: '',
            goals: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllGoals().then(response => {
            console.log(response.data);
            this.setState({
                goals: response.data.data,
                isLoading: false,
            });
        })
    }
    render() {
        const { goals, isLoading } = this.state
        console.log('TCL: GoalsList -> render -> goals', goals)
        console.log(goals.data)
        return (
            <React.Fragment>
            <Typography variant="h4">
                12 Week Program
            </Typography>
            <br/>
            <Typography variant="h7">
                Client: <b>Jacob Williams</b> <br/>Date of Birth: <b>12/1/2016</b>
            </Typography>
            <br/>
            <Typography variant="h7">
                Start Date: <b>07/09/2020</b>
            </Typography>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell colSpan="2">
                            <Link to="/program/create">
                                Add Goal
                            </Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">Goal</TableCell>
                        <TableCell align="center">Substeps</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {goals.map((row,index) => (
                        <TableRow key={row.name} style={{textAlign: "top"}}>
                            <TableCell align="left">Goal {index+1}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">1. {row.substep1}<br/>2. {row.substep2}<br/>3. {row.substep3}</TableCell>
                            <TableCell align="right"><UpdateGoal id={row._id} /></TableCell>
                            <TableCell align="right"><DeleteGoal id={row._id} /></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </React.Fragment>
        )
    }
}

export default ViewProgram