export class Poll {
    constructor({ name, choosableOptions, allowsMultipleSelection, imagePath = '', comments = [] }) {
      this.id = Date.now().toString() + Math.random().toString(36).slice(2); // 🔑 unique ID
      this.name = name;
      this.choosableOptions = choosableOptions;
      this.numOfVotesForOptions = new Array(choosableOptions.length).fill(0);
      this.allowsMultipleSelection = allowsMultipleSelection;
      this.imagePath = imagePath;
      this.numOfOptions = choosableOptions.length;
      this.comments = comments;
    }
  }
  