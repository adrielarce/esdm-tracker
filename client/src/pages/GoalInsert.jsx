import React, { Component } from 'react'
import api from '../api/program'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class GoalInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            substep1: '',
            substep2: '',
            substep3: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputSubstep1 = async event => {
        const substep1 = event.target.value
        this.setState({ substep1 })
    }
    handleChangeInputSubstep2 = async event => {
        const substep2 = event.target.value
        this.setState({ substep2 })
    }
    handleChangeInputSubstep3 = async event => {
        const substep3 = event.target.value
        this.setState({ substep3 })
    }
    handleIncludeGoal = async () => {
        const { name, substep1, substep2, substep3 } = this.state
        const payload = { name, substep1, substep2, substep3 }

        await api.insertGoal(payload).then(res => {
            window.alert(`Goal inserted successfully`)
            this.setState({
                name: '',
                substep1: '',
                substep2: '',
                substep3: '',
            })
        })
    }

    render() {
        const { name, substep1, substep2, substep3 } = this.state
        return (
            <Wrapper>
                <Title>Create Goal</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Substep 1: </Label>
                <InputText
                    type="text"
                    lang="en-US"
                    value={substep1}
                    onChange={this.handleChangeInputSubstep1}
                />
                <Label>Substep 2: </Label>
                <InputText
                    type="text"
                    lang="en-US"
                    value={substep2}
                    onChange={this.handleChangeInputSubstep2}
                />
                <Label>Substep 3: </Label>
                <InputText
                    type="text"
                    lang="en-US"
                    value={substep3}
                    onChange={this.handleChangeInputSubstep3}
                />
                <Button onClick={this.handleIncludeGoal}>
                    Add Goal
                </Button>
                <CancelButton>
                    <Link to="/program" style={{color: "white",textDecoration: "none"}}>Cancel</Link>
                </CancelButton>
            </Wrapper>
        )
    }
}

export default GoalInsert