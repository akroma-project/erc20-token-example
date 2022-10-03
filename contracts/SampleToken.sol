// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

contract SampleToken is ERC20, ERC165 {
    constructor(uint256 initialSupply) ERC20("Sample", "SMP") {
        _mint(msg.sender, initialSupply);
    }
}