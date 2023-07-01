Describe: userInput();

<!-- Test: "It should test wether or not the user has in fact inputted a number"
Code: userInput();
Expected Output: toNumber; -->

<!-- Test: "It should return an array of the users inputted numbers"
Code: userInput();
Expected Output: [numberInput]; -->


<!-- Test: "It should replace the number "1" with "Beep"
Code: userInput("1");
Expected Output: Array ["Beep"]; -->

<!-- Test: "It should replace any number that contains a "1" with "Beep"
Code: userInput("100");
Expected Output: Array ["Beep"]; -->

<!-- Test: "It should replace the number 2 with "Boop"
Code: userInput("2");
Expected Output: Array ["Boop"];

Test: "it should replace any number that contains "2" with "Boop"
Code: userInput["200"];
Expected Output: Array ["Boop"]; -->

<!-- Test: "it should replace the number "3" with "Won't you be my neighbor?"
Code: userInput("3");
Expected Output: Array ["Won't you be my neighbor?"];

Test: "it should replace any number containing "3" with "Won't you be my neighbor?"
Code: userInput("300");
Expected Output: Array ["Won't you be my neighbor?"]; -->

Test: "it will display a list of values starting with 0 to the users inputted number, with the numbers 1 2 and 3 substituted for the correct phrase"
Code: userInput("5");
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?", 4, 5]

Test: "it will include hierarchy so that the correct response will be displayed for the last digit in a number"
Code: userInput("13")
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep", "Beep", "Boop", "Won't you be my neighbor?"]
