const mongoose = require('mongoose');
const util = require('util');

const Schema = mongoose.Schema;

const marketItemSchema = new Schema({
    itemName: {type: String, required: true},
    itemNum: {type: Number, required: true},
    price: {type: String, required: true}, 
    image: String
});

function BaseSchema() {
    Schema.apply(this, arguments);
  
    this.add({
        id: { type: String, required: true},
        title: { type: String, required: true},
        title_en: { type: String, required: false},
        created: { type: Date, default: Date.now, required: true},
        desc: { type: String, required: true},
        desc_en: { type: String, required: false},
        user: { type: String, required: true},
        email: { type: String, required: true},
        category: { type: String, required: true},
        nego: { type: Boolean, required: false},
        attachment: { type: Boolean, required: false},        
        imagePaths: [{type: String, required: false}]
    });
  }
  util.inherits(BaseSchema, Schema);
  
  const basePostSchema = new BaseSchema();
  const marketPostSchema = new BaseSchema({ 
        marketItems: [{type: marketItemSchema, required: false}]
    });
  
  const basePostModel = mongoose.model('basePostModel', basePostSchema);
  const marketPostModel = basePostModel.discriminator('marketPostModel', marketPostSchema);

  module.exports = {
      basePostModel,
      marketPostModel
  };