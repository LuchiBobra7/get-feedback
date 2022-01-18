//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Feedback {
    uint256 totalFeedbacks;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function sendFeedback() public {
        totalFeedbacks += 1;
        console.log("%s sent feedback!", msg.sender);
    }

    function getTotalFeedbacks() public view returns (uint256) {
        console.log("We have %d total feedbacks!", totalFeedbacks);
        return totalFeedbacks;
    }
}
