// this.props = {
//   src: 'the url: https...',
//   id: 'the objectId: UHDWKSU'
//   onSelect: is the function we are given
// }

import React from 'react';

export default React.createClass({

  clickHandler(event) {
    // we got the event but we dont need it.
    this.props.onSelect(this.props.id);
  },

  render() {
    return (
      <div className="thumbnail" onClick={this.clickHandler}>
        <img src={this.props.src}/>
      </div>
    );
  }

});