document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from being submitted

    // Define correct answers and explanations
    const answers = {
        q1: { correct: "b", explanation: "Dr. Rajendra Prasad was the first President of India, serving from 1950 to 1962." },
        q2: { correct: "b", explanation: "Rajasthan is the largest state by area in India, covering 342,239 square kilometers." },
        q3: { correct: "b", explanation: "Diwali, known as the Festival of Lights, is celebrated by Hindus across the world." },
        q4: { correct: "a", explanation: "Delhi is the capital of India, serving as the political and administrative center." },
        q5: { correct: "c", explanation: "The lotus is the national flower of India, symbolizing purity and beauty." }
    };

    let userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value
    };

    let resultHTML = '';
    let score = 0;

    // Check answers and prepare result
    for (let question in answers) {
        const correctAnswer = answers[question].correct;
        const explanation = answers[question].explanation;
        const userAnswer = userAnswers[question];

        if (userAnswer === correctAnswer) {
            resultHTML += `<p><strong>${question}: You answered: ${userAnswer} (Correct)</strong></p>`;
            resultHTML += `<p><em>${explanation}</em></p>`;
            score++;
        } else {
            resultHTML += `<p><strong>${question}: You answered: ${userAnswer} (Incorrect)</strong></p>`;
            resultHTML += `<p><em>Correct answer: ${correctAnswer} - ${explanation}</em></p>`;
        }
    }

    // Display the result in the modal
    document.getElementById("resultContent").innerHTML = resultHTML;
    document.getElementById("modal").style.display = "flex"; // Show the modal
});

// Close modal
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});
