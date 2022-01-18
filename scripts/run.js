const hre = require("hardhat");

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const feedbackContractFactory = await hre.ethers.getContractFactory(
    "Feedback"
  );
  const feedbackContract = await feedbackContractFactory.deploy();
  await feedbackContract.deployed();

  console.log("Contract deployed to:", feedbackContract.address);
  console.log("Contract deployed by:", owner.address);

  let totalFeedbacks = await feedbackContract.getTotalFeedbacks();

  console.log("Total Feedbacks:", totalFeedbacks);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
