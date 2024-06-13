function showResults() {
    const quizForm = document.getElementById('quizForm');
    const resultsContainer = document.getElementById('results');

    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'c'
    };

    let numCorrect = 0;

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const userAnswer = quizForm.elements[question].value;
        if (userAnswer === correctAnswer) {
            numCorrect++;
        }
    }

    resultsContainer.innerHTML = `${numCorrect} out of ${Object.keys(answers).length}`;
}
