import React, { Component } from "react";
import Car from "./Car";


class Garage extends Component {

  render() {
    //console.log(this.props);
    const year =  this.props.year_filter
    if (year === "") {
      return (
        <div>
          {
            this.props.cars.map(_car => <Car car={_car} key={_car.id} delete_car = {this.props.delete_car} update_car = {this.props.update_car}/>)
          }
        </div>
      );
    }
  
    return (
      <div>
        {
          // eslint-disable-next-line
          this.props.cars.filter(car => car.year == year).map(_car => <Car car={_car} key={_car.id} delete_car = {this.props.delete_car} update_car = {this.props.update_car}/>)
        }
      </div>
    );
  }
}

export default Garage;
