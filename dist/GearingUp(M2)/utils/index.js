import * as readline from "node:readline";
export function askQuestion(question) {
    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        readlineInterface.question(question, (userInput) => {
            resolve(userInput);
            readlineInterface.close();
        });
    });
}
