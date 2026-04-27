export class Question {
  id: string;

  constructor(
    public question: string, 
    public answers: string[], 
    public correctAnswer: number
  ) {
    this.id = crypto.randomUUID();
  }

  checkAnswer(userAnswer: string): boolean {
    return userAnswer === this.answers[this.correctAnswer];
  }
}
