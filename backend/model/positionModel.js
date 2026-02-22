const {model} = require('mongoose');

const {positionSchema} = require('../schema/positionShema');

const positionModel = new model("position" , positionSchema);

module.exports = {positionModel};