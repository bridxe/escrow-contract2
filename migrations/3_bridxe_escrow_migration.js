// eslint-disable-next-line no-undef
const BridXeEscrow = artifacts.require("BridXeEscrow");

module.exports = function (deployer) {
  deployer.deploy(BridXeEscrow);
};
