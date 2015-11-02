import Backbone from 'backbone';
import $ from 'jquery';
import ReactDom from 'react-dom';
import React from 'react';

import ImagesCollection from './images_collection';

import ImageList from './views/image_list';
import PreviewImage from './views/image';


const PARSE_DATA = [
  {
    objectId: '1',
    title: 'Black Cat',
    url: 'http://www.gayalliance.org/wp-content/uploads/2015/09/halloween_cats_bats-wide.jpg',
    about: 'A cat in front of a moon with bats and ghosts'
  },{
    objectId: '2',
    title: 'Skully Kiddos',
    url: 'http://i.ytimg.com/vi/Ns91jtuPHZI/maxresdefault.jpg',
    about: 'Three kids that are bone skinny.'
  },{
    objectId: '3',
    title: 'Jack',
    url: 'http://parkslopefifthavenuebid.com/sites/parkslopefifthavenuebid.com/files/node_image/pumpkin.png',
    about: 'Something I stuck a knife into.'
  },{
    objectId: '4',
    title: 'Matt Ryan',
    image: 'http://www.profootballfocus.com/wp-content/uploads/2014/06/MattRyan.jpg',
    about: 'NFL.'
  ];


let Router = Backbone.Router.extend({

  routes: {
    ""      : "home",
    "images/:id" : "showImage"
  },

  initialize: function(appElement) {
    this.el = appElement;

    this.images = new ImagesCollection();


  },

  home() {
  
    ReactDom.render(
      <ImageList onImageSelect={this.selectImage.bind(this)} data={PARSE_DATA}/>,
      this.el
    );
  },

  selectImage(id) {
    this.navigate('images/' + id, {trigger: true});
  },

  showImage(id) {
    let image = PARSE_DATA.find(item => item.objectId === id);

    ReactDom.render(<PreviewImage src={image.url}/>, this.el);
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;