const fs = require('fs/promises');
const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const generateHTML = require('../generatehtml');



const completedTeam = []

const questions = [
  {
    type: 'input',
    name: 'employeeName',
    message: 'What is the employee name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the employees email?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the employees ID number?',
  },
  {
    type: 'list',
    name: 'role',
    message: 'Please select the employees role in the company.',
    choices: ['Manager', 'Intern', 'Engineer'],
  },
];




async function getAnswers() {

  let answers = await inquirer.prompt(questions);
  let employee;


  if (answers.role === 'Engineer') {
    const { github } = await inquirer.prompt({
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s GitHub username?',
    });
    employee = new Engineer(answers.employeeName, answers.email, answers.id, github);
  } else if (answers.role === 'Intern') {
    const { school } = await inquirer.prompt({
      type: 'input',
      name: 'school',
      message: 'What school is the intern attending?',
    });
    employee = new Intern(answers.employeeName, answers.email, answers.id, school);
  } else if (answers.role === 'Manager') {
    const { officeNumber } = await inquirer.prompt({
      type: 'input',
      name: 'officeNumber',
      message: 'What is the manager\'s office number?',
    });
    employee = new Manager(answers.employeeName, answers.email, answers.id, officeNumber);
  }

  const { addAnother } = await inquirer.prompt({
    type: 'confirm',
    name: 'addAnother',
    message: 'Would you like to add another employee?',
    default: true,
  });
  

  completedTeam.push(employee);
  
  if (addAnother) {
    await getAnswers();
  } else {
    console.log(completedTeam)
    let generatedHTML = generateHTML(completedTeam)
    fs.writeFile('../output/teamprofile.html', generatedHTML, (err, data) => {
      if(err) console.log(err) 

      console.log("Team Profile Generated Successfully!")
    })
  };
}
getAnswers()