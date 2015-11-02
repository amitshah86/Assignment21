import React from 'react';

export default React.createClass({

  clickHandler(event) {
    // we got the event but we dont need it.
    this.props.onSelect(this.props.id);
  },

  render() {
    return (
      <div className="image" onClick={this.clickHandler}>
        <img src={this.props.src}/>
      </div>
    );
  }

});