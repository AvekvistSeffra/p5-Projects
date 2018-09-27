class NeuralNetwork {
    constructor(number_of_input_nodes, number_of_hidden_nodes, number_of_output_nodes) {
        this.input_nodes = number_of_input_nodes;
        this.hidden_nodes = number_of_hidden_nodes;
        this.output_nodes = number_of_output_nodes;

        this.weights_input_to_hidden = new Matrix();
        this.weights_hidden_to_output = new Matrix();

        this.bias_input_to_hidden = new Matrix();
        this.bias_hidden_to_output = new Matrix();
    }

    activationFunction = function() {

    }

    setLearningRate(learningRate = 0.1) {
        this.learningRate = learningRate;
    }
}
