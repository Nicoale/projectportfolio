'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
    project_name:{
        type: String,
        required: 'Kindly enter the name of the project'
      },
      Created_date: {
        type: Date,
        default: Date.now
      },
      status: {
        type: [{
          type: String,
          enum: [ 'ongoing', 'completed']
        }],
        default: ['ongoing']
      }
    }
);

module.exports = mongoose.model('Portfolio', PortfolioSchema);