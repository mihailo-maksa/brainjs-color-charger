const brain = require('brain.js')
const rgbDataset = require('./rgbDataset.js')

const network = new brain.NeuralNetwork()
network.train(rgbDataset)

const result = network.run({ r: 0, g: 1, b: 0.65 })
console.log(result)
