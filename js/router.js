import Backbone from 'backbone';
import $ from 'jquery';
import ReactDom from 'react-dom';
import React from 'react';

import TodosCollection from './todos_collection';

import ThumbnailList from './views/thumbnail_list';
import PreviewImage from './views/thumbnail';


const DUMMY_DATA = [
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
  }
];


let Router = Backbone.Router.extend({

  routes: {
    ""      : "home",
    "images/:id" : "showImage"
  },

  initialize: function(appElement) {
    this.el = appElement;

    this.todos = new TodosCollection();


  },

  home() {
    
    let peanutButter = ['one', 'two', 'buckle', 'show'];

    // ReactDom.render(

    //   <Example peanutButter={['one', 'two', 'buckle', 'show']}>

    //   </Example>, 

    //   this.el);

    // $(this.el).html(NonReactView(peanutButter));




    ReactDom.render(
      <ThumbnailList onThumbnailSelect={this.selectImage.bind(this)} data={DUMMY_DATA}/>,
      this.el
    );
  },

  selectImage(id) {
    // alert('got the id but from the router: ' + id);
    this.navigate('images/' + id, {trigger: true});
  },

  showImage(id) {
    let image = DUMMY_DATA.find(item => item.objectId === id);
    // short hand for the below:
    // let filterImages = DUMMY_DATA.filter(function(item) {
    //   return item.objectId === id;
    // });
    // let image = filterImages[0];

    ReactDom.render(<PreviewImage src={image.url}/>, this.el);
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;