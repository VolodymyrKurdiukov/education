# education
   <script>
      //data entry

      let minNumber = 1;
      let maxNumber = 10;
      let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

      let userOneNumber = parseInt(prompt("Enter a number"));
      let userTwoNumber = parseInt(prompt("Enter a number"));

      if (userOneNumber === randomNumber) {
         document.write("Congratulations! You guessed the number on the first try!");
      } else if (userTwoNumber === randomNumber) {
         document.write("Congratulations! You guessed the number on the second try!");
      } else {
         document.write(`Sorry, you didn't guess the number. The correct number was ${randomNumber}.`);
      }



   </script>