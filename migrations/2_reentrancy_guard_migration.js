// eslint-disable-next-line no-undef
const ReentrancyGuard = artifacts.require("ReentrancyGuard");

module.exports = function (deployer) {
  deployer.deploy(ReentrancyGuard);
};
