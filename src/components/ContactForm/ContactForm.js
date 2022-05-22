import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import styles from './ContactForm.module.css'

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onAddContact({ ...this.state })

    this.setState({ name: '', number: '' })
  }
  render() {
    return (
      <form className={styles.TaskEditor} onSubmit={this.handleSubmit}>
        <label className={styles.TaskEditor_label}>
          Name
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.TaskEditor_label}>
          Number
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    )
  }
}
ContactForm.defaultProps = {
  onAddContact: (task) => {
    const searchSameName = this.state.contacts
      .map((cont) => cont.name)
      .includes(task.name)

    if (searchSameName) {
      alert(`${task.name} is already in contacts`)
    } else if (task.name.length === 0) {
      alert('Fields must be filled!')
    } else {
      const contact = {
        ...task,
        id: uuidv4(),
      }

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }))
    }
  },
}
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}
