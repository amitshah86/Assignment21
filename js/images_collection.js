import Backbone from 'backbone';
import ImageModel from './image_model';

let ImagesCollection = Backbone.Collection.extend({

  url: 'https://www.parse.com/apps/sportsfigures/collections#class/Sports_Figures',

  model: ImageModel,

  parse: function(data) {
    return data.results;
  }

});

export default ImagesCollection;