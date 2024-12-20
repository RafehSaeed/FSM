// Finite State Machine Generator
class FiniteAutomaton {
    /**
     * Constructs a finite automaton.
     * @param {Array<string>} states - Q: Set of states.
     * @param {Array<string>} alphabet - Σ: Input alphabet.
     * @param {string} initialState - q0: Initial state.
     * @param {Array<string>} finalStates - F: Set of accepting/final states.
     * @param {Object} transitionFunction - δ: Transition function mapping states and inputs to new states.
     */
    constructor(states, alphabet, initialState, finalStates, transitionFunction) {
      this.states = states; 
      this.alphabet = alphabet; 
      this.initialState = initialState; 
      this.finalStates = finalStates; 
      this.transitionFunction = transitionFunction;
    }
  
    /**
     * Processes an input string and determines the resulting state.
     * @param {string} input - A string of input symbols (must be in the defined alphabet).
     * @returns {string} - The final state after processing the input.
     * @throws {Error} - Throws if the input contains invalid symbols.
     */
    process(input) {
      let currentState = this.initialState; 
      for (const symbol of input) {
        if (!this.alphabet.includes(symbol)) {
          throw new Error(`Invalid input symbol: ${symbol}`);
        }
        currentState = this.transitionFunction[currentState][symbol]; 
      }
      return currentState; 
    }
  }
  
  module.exports = FiniteAutomaton;
  