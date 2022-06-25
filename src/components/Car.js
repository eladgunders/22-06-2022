
import React, { Component } from 'react';

class Car extends Component {
    state = {
      brand : this.props.car.brand, 
      model: this.props.car.model, 
      color: this.props.car.color, 
      year: this.props.car.year,
      id: this.props.car.id
    }
    handleChange = (e) => {
      this.setState({
      [e.target.name]:e.target.value
      })
    }
    updateClick = (e) => {
      this.props.update_car(this.state)
    }
    
    render() {
        //const brand = this.props.car.brand
        //const model = this.props.car.model
        //const color = this.props.car.color
        //const id = this.props.car.id
        // const {brand, model, color, year, id} = this.props.car
       
        const css1 = { borderRadius: '5px', padding: '1px', borderStyle: 'ridge', 
        border: '2px solid ' + this.state.color , margin: '35px 50px' }
        return (
            <div key={this.state.id} style={css1}>
              <p>Brand: <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange} /></p>
              <p>Model: <input type="text" name="model" value={this.state.model} onChange={this.handleChange}/></p>
              <p>Year: <input type="number" name="year" value={this.state.year} onChange={this.handleChange}/></p>
              <p style={{}}>
            Color:{" "}
            <select
              name="color"
              id="color_id"
             
              value={this.state.color}
              onChange={this.handleChange}
            >
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="blue">Blue</option>
            </select>
          </p>
              <button style={{color: 'red'}} onClick={ () => this.props.delete_car(this.state.id) }>X</button>
              &nbsp;&nbsp;
              <button style={{color: '#F6BE00'}} onClick={ this.updateClick }>Update</button>
            </div>)
    }
}

export default Car;