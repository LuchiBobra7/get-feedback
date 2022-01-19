const hre = require("hardhat");

const main = async () => {
  const feedbackContractFactory = await hre.ethers.getContractFactory(
    "Feedback"
  );
  const feedbackContract = await feedbackContractFactory.deploy();
  await feedbackContract.deployed();
  console.log("Contract addy:", feedbackContract.address);

  let feedbackCount;
  feedbackCount = await feedbackContract.getTotalFeedbacks();
  console.log(feedbackCount.toNumber());

  let feedbackInfo = await feedbackContract.sendFeedback("A message!", 5);
  await feedbackInfo.wait();

  const [_, randomPerson] = await hre.ethers.getSigners();

  feedbackInfo = await feedbackContract
    .connect(randomPerson)
    .sendFeedback("Another message!", 3);
  await feedbackInfo.wait();

  let feedbackList = await feedbackContract.getFeedbackList();
  console.log(feedbackList);

  let allFeedbacks = await feedbackContract.getTotalFeedbacks();
  console.log(allFeedbacks);
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
