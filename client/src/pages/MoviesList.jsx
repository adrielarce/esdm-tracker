import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
class UpdateMovie extends Component {
    updateUser = event => {
        event.preventDefault()
        window.location.href = `/movie/update/${this.props.id}`
    }
    render() {
        const updateLink = `/movie/update/${this.props.id}`;
        return (
            <Link to={updateLink}>
              Update
            </Link>
        )
    }
}
class DeleteMovie extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the goal ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMovieById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMovies().then(response => {
            console.log(response.data);
            this.setState({
                movies: response.data.data,
                isLoading: false,
            });
        })
    }
    render() {
        const { movies, isLoading } = this.state
        console.log('TCL: MoviesList -> render -> movies', movies)
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'firstName', headerName: 'First name', width: 130 },
            { field: 'lastName', headerName: 'Last name', width: 130 },
            {
              field: 'age',
              headerName: 'Age',
              type: 'number',
              width: 90,
            },
            {
              field: 'fullName',
              headerName: 'Full name',
              description: 'This column has a value getter and is not sortable.',
              sortable: false,
              width: 160,
              valueGetter: (params) =>
                `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
            },
          ];
        const rows = [
            { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
            { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
            { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
            { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
            { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
            { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
            { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
            { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
            { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
          ];

        console.log(movies.data)
        return (
            <React.Fragment>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Update</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {movies.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.rating}</TableCell>
                        <TableCell align="right"><UpdateMovie id={row._id} /></TableCell>
                        <TableCell align="right"><DeleteMovie id={row._id} /></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </React.Fragment>
        )
    }
}

export default MoviesList