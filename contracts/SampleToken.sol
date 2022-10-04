// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

contract SampleToken is ERC20, ERC165 {
  constructor(uint256 initialSupply) ERC20("Supports", "SUP") {
    _mint(msg.sender, initialSupply);
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    return interfaceId == type(IERC20).interfaceId || super.supportsInterface(interfaceId);
  }
}
