const modThreeFSM = require("../fsm/modThreeFSM");

function modThree(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string.");
  }

  if (!/^[01]+$/.test(input)) {
    throw new Error("Input must be a binary string (only 0s and 1s). Example: '1101'");
  }

  if (input.length > 1000) {
    throw new Error("Input string is too long. Maximum allowed length is 1000 characters.");
  }

  const finalState = modThreeFSM.process(input);
  const outputMapping = { S0: 0, S1: 1, S2: 2 };

  return outputMapping[finalState];
}

module.exports = modThree;
