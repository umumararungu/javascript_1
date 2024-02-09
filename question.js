const json_data = [
    {
        'question':"how many countries in africa?",
        'option':["57","52","61","54"],
        'answer':"54"
    },
    {
        'question':"which country code is 254?",
        'option':["Nigeria","Kenya","Germany","Russia"],
        'answer':"Kenya"
    },
    {
        'question':"which popular communication we use in african countries?",
        'option':["call","MTN","Airtel","WhatsApp"],
        'answer':"WhatsApp"
    },

]


const fs = require('fs');
const readline = require('readline');



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