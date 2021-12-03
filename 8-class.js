class Training {
  constructor(trainingName, trainingDuration, trainingCost) {
    this.trainingName = trainingName;
    this.trainingDuration = trainingDuration;
    this.trainingCost = trainingCost;
  }

  displayDetails() {
    console.log(
      `Training Name: ${this.trainingName}, Duration:${this.trainingDuration} and cost will be ${this.trainingCost} USD`
    );
  }
}
const reactTraining = new Training('ReactJS', 30, 5000);
reactTraining.displayDetails();