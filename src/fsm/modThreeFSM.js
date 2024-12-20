const FiniteAutomaton = require("./FiniteAutomaton");

// Mod-Three FSM Configuration
const states = ["S0", "S1", "S2"];
const alphabet = ["0", "1"];
const initialState = "S0";
const finalStates = ["S0", "S1", "S2"];
const transitionFunction = {
  // The transition rules describe how the FSM processes input.
  // For state S0:
  // - A "0" keeps the FSM in state S0, which corresponds to a modulo-3 remainder of 0.
  // - A "1" transitions the FSM to state S1, increasing the remainder to 1.
  S0: { "0": "S0", "1": "S1" },

  // For state S1:
  // - A "0" transitions to state S2, increasing the remainder to 2.
  // - A "1" transitions back to state S0, resetting the remainder to 0.
  S1: { "0": "S2", "1": "S0" },

  // For state S2:
  // - A "0" transitions to state S1, decreasing the remainder to 1.
  // - A "1" keeps the FSM in state S2, maintaining a remainder of 2.
  S2: { "0": "S1", "1": "S2" },
};

const modThreeFSM = new FiniteAutomaton(states, alphabet, initialState, finalStates, transitionFunction);

module.exports = modThreeFSM;
