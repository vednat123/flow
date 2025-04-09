export function createPollData(question, options, allowMultiple) {
    return {
      question: question,
      options: options.filter(opt => opt.trim() !== ''),
      allowMultiple: allowMultiple,
      createdAt: new Date().toISOString(),
    };
  }
  