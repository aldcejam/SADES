import inquirer from 'inquirer';
import fs from 'fs';

const folderPath = './src/';
const selectFolder = async () => {
  const selectedFolders = ["/components"];

  const getSubfolders = (folder) => {
    const subfolders = fs.readdirSync(folderPath + '/' + folder);
    return subfolders;
  };

  while (true) {
    const { folderType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'folderType',
        message: `Choose a directory ${selectedFolders.join('/') || '/components'}:`,
        choices: ['/', ...getSubfolders(selectedFolders.join('/'))],
      },
    ]);

    if (folderType === '/') {
      break;
    } else {
      selectedFolders.push(folderType);
    }
  }

  const directory = selectedFolders.join('/');
  return [directory];
};


export default async function (plop) { 
  const getFolderChoices = async () => {
    const selectedFolders = await selectFolder();
    return selectedFolders;
  };
  plop.setGenerator('createComponent', {
      description: 'this is a skeleton plopfile',
      prompts: [
        {
          type: 'list',
          name: 'folderSelected',
          message: "this directory is correct?",
          choices: await getFolderChoices(),
        },
        {
          type: 'input',
          name: 'name',
          message: 'component name:',
        },
        {
          type: 'input',
          name: 'additionalDestination',
          message: (answers) => {
            return `additional destination: ${answers.componentType}/`;
          },
          when: function (answers) {
            return answers.moreDestionation;
          },
        },
      ], // array of inquirer prompts
      actions: [
        {
          type: 'addMany',
          destination: 'src/{{ folderSelected }}/{{ dashCase name}}',
          templateFiles: '.plop/createComponent/*.hbs',
          base: '.plop/createComponent',
        },
      ],
  });
};
