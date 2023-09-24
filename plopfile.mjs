import inquirer from 'inquirer';
import fs from 'fs';

const folderPath = './src/';

const selectFolder = async () => {
    const selectedFolders = [];

    const getSubfolders = (folder) => {
        const items = fs.readdirSync(folderPath + folder);
        const subfolders = items.filter((item) => {
            const itemPath = folderPath + folder + '/' + item;
            return fs.statSync(itemPath).isDirectory();
        });
        return subfolders;
    };


    while (true) {
        const { folderType } = await inquirer.prompt([
            {
                type: 'list',
                name: 'folderType',
                message: `Choose a directory ${selectedFolders.join('/') || '/components'}:`,
                choices: ['../', ...getSubfolders(selectedFolders.join('/')), '___FINISH!___'],
            },
        ]);

        if (folderType === '___FINISH!___') {
            break;
        } else if (folderType === '../') {
            // Se o usuário selecionar '../', volte um nível removendo o último elemento
            selectedFolders.pop();
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
        return selectedFolders.map((folder) => folder.replace(folderPath, ''));
    };

    plop.setGenerator('createComponent', {
        description: 'this is a skeleton plopfile',
        prompts: [
            {
                type: 'list',
                name: 'folderSelected',
                message: "Is this directory correct?",
                choices: await getFolderChoices(),
            },
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            },
            {
                type: 'input',
                name: 'additionalDestination',
                message: (answers) => {
                    return `Additional destination: ${answers.componentType}/`;
                },
                when: function (answers) {
                    return answers.moreDestination;
                },
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/{{ folderSelected }}/{{name}}',
                templateFiles: '.plop/createComponent/*.hbs',
                base: '.plop/createComponent',
            },
        ],
    });
};
