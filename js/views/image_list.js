import React from 'react';
import Thumbnail from './image';

export default React.createClass({

  selectHandler(id) {
    this.props.onImageSelect(id);
  },

  getImage(image) {
    return (
        <Image src={image.url} id={image.objectId} onSelect={this.selectHandler}/>
    );
  },  

  render() {
    return (
      <div className="image-list">
        {this.props.data.map(this.getImage)}
      </div>
    );
  }

});