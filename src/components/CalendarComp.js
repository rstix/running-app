import React, { Component } from 'react';
import Calendar from 'react-calendar';

class CalendarComp extends Component {
  state = {
    date: new Date()
  };

  onChange = date => {
    this.setState({ date });
    this.props.captureDate(date);
  };

  render() {
    return (
      <div>
        <form>
          <Calendar onChange={this.onChange} value={this.state.date} />
        </form>
      </div>
    );
  }
}

export default CalendarComp;
