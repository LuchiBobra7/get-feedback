//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Feedback {
    uint256 totalFeedbacks;

    event NewFeedback(
        address indexed from,
        uint256 timestamp,
        string message,
        uint8 rating
    );

    struct FeedbackInfo {
        address feedbackAddress;
        uint256 timestamp;
        string message;
        uint8 rating;
    }

    FeedbackInfo[] feedbackList;

    function sendFeedback(string memory _message, uint8 _rating) public {
        totalFeedbacks++;
        feedbackList.push(
            FeedbackInfo(msg.sender, block.timestamp, _message, _rating)
        );

        emit NewFeedback(msg.sender, block.timestamp, _message, _rating);
    }

    function getFeedbackList() public view returns (FeedbackInfo[] memory) {
        return feedbackList;
    }

    function getTotalFeedbacks() public view returns (uint256) {
        return totalFeedbacks;
    }
}
