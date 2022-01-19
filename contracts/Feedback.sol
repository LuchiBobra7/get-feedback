//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Feedback {
    uint256 totalFeedbacks;

    event NewFeedback(
        address indexed from,
        uint8 rating,
        uint256 timestamp,
        string message
    );

    struct FeedbackInfo {
        address feedbackAddress;
        uint8 rating;
        string message;
        uint256 timestamp;
    }

    FeedbackInfo[] feedbackList;

    function sendFeedback(string memory _message, uint8 _rating) public {
        totalFeedbacks++;
        feedbackList.push(
            FeedbackInfo(msg.sender, _rating, _message, block.timestamp)
        );

        emit NewFeedback(msg.sender, _rating, block.timestamp, _message);
    }

    function getFeedbackList() public view returns (FeedbackInfo[] memory) {
        return feedbackList;
    }

    function getTotalFeedbacks() public view returns (uint256) {
        return totalFeedbacks;
    }
}
