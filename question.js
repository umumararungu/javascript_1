const fs = require('fs');
const readline = require('readline');
const json_data = JSON.parse(fs.readFileSync('new.json', 'utf8'));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  function ask() {
    let score = 0;
  

    for (let i = 0; i < json_data.length; i++) {
      const obj = json_data[i];
      const { question, option, answer } = obj;
  
      console.log("\n"+question);

      for (let j = 0; j < option.length; j++) {
        console.log(`${j + 1}. ${option[j]}`);
      }
  

      rl.question('Your answer: ', (answer) => {
        const user_Ans = answer;
  
        if (user_Ans === json_data["answer"]) {
          console.log('Correct!');
          score++;
        } else {
          console.log(`Incorrect! The correct answer is ${json_data[answer]}.`);
        }
  
                 rl.close();
      });
    }
  }
  

  ask();