export class Question {
  id: string;

  constructor(
    public question: string, 
    public answers: string[], 
    public correctAnswerIndex: number
  ) {
    this.id = crypto.randomUUID();
  }

  checkAnswer(userAnswer: string): boolean {
    return userAnswer === this.answers[this.correctAnswerIndex];
  }
}