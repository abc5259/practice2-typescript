let userInput: unknown; //사용자가 어떤 값을 넣을지모름
let userName: string;

userInput = 5; //lt's work!
userInput = "max"; //lt's work!

if (typeof userInput === "string") {
  userName = userInput; //lt's work!
}
