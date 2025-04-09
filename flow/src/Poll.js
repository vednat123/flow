export class Poll {
    constructor({ name, choosableOptions, allowsMultipleSelection, imagePath = '', comments = [] }) {
      this.name = name;
      this.choosableOptions = choosableOptions;
      this.numOfVotesForOptions = new Array(choosableOptions.length).fill(0);
      this.allowsMultipleSelection = allowsMultipleSelection;
      this.imagePath = imagePath;
      this.numOfOptions = choosableOptions.length;
      this.numOfLikes = 0;
      this.comments = comments;
    }
  }
  