// Cela permet de récupérer l'élément HTML avec l'ID "quiz-form" et de le stocker dans la variable "quiz-form" pour pouvoir y accéder et le manipuler dans le reste du code.
var quizForm = document.getElementById("quizForm");
// Cela permet de récupérer l'élément HTML avec l'ID "results" et de le stocker dans la variable "results" pour pouvoir y accéder et le manipuler dans le reste du code.
var results = document.getElementById("results");

// Cette ligne de code ajoute un événement "submit" au formulaire "quizForm" et empêche son comportement par défaut (rafraîchir la page) grâce à la fonction "event.preventDefault()".
quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Stockage des réponses de l'utilisateur dans un objet appelé réponses.
  const responses = {
    q1: quizForm.q1.value,
    q2: quizForm.q2.value,
    q3: quizForm.q3.value,
	q4: quizForm.q4.value,
	q5: quizForm.q5.value,
	q6: quizForm.q6.value,
	q7: quizForm.q7.value,
	q8: quizForm.q8.value,
	q9: quizForm.q9.value,
  };

  // Initialisation de la variable score à 0.
  let score = 0;

  // Ajouter les réponses correctes ici.
  const correctAnswers = {
    q1: "c",
    q2: "a",
    q3: "a",
	q4: "d",
	q5: "b",
	q6: "c",
	q7: "a",
	q8: "b",
	q9: "b",
  };

  // Vérification de l'objet de réponses pour voir si les réponses de l'utilisateur correspondent aux bonnes réponses. S'ils le font, cela ajoute 1 au score.
  for (const key in responses) {
    if (
      responses.hasOwnProperty(key) &&
      responses[key] === correctAnswers[key]
    ) {
      score++;
    }
  }

  // Cette ligne de code permet d'afficher le score de l'utilisateur.
  results.textContent = `Vous avez obtenu ${score} sur ${
    Object.keys(responses).length
  } questions correctes.`;
});

/*

Ce code en JavaScript permet de faire un quiz en calculant le score de l'utilisateur.
Tout d'abord, on définit deux variables nommées quizForm et results qui correspondent respectivement au formulaire du quiz et au résultat final.

Lorsque l'utilisateur soumet le formulaire, on empêche la page de se rafraîchir avec une fonction.
Ensuite, on stocke les réponses de l'utilisateur dans un objet nommé responses. On initialise aussi un score à 0 et un objet correctAnswers contenant les bonnes réponses.

Ensuite, on parcourt l'objet responses avec une boucle for-in et on compare chaque réponse donnée par l'utilisateur avec la réponse correcte dans l'objet correctAnswers.
Si les réponses correspondent, on incrémente le score.

Finalement, on affiche le résultat à l'utilisateur en modifiant le texte du résultat avec results.textContent.
Le texte affiche le score de l'utilisateur et le nombre total de questions dans le quiz.

*/
