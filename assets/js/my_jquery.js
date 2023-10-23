$(function () {
  //génération d'un nbre aléatoire
  let randomNumber = Math.floor(Math.random() * 101);
  console.log(randomNumber);

  $("#play").click(function () {
    userNumber = parseInt($("#test").val());

    if (
      isNaN(userNumber) ||
      userNumber < 0 ||
      userNumber > 100 ||
      userNumber == ""
    ) {
      message = "entrez un nbre entre 0 et 100";
    } else {
      if (userNumber === randomNumber) {
        message = "correct " + userNumber;
      } else if (userNumber > randomNumber) {
        message = "moins";
      } else {
        message = "plus";
      }
    }
    alert(message);
  });
});
