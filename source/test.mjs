const version = '0.0.2 Beta';
const text = `
████████╗███████╗░██████╗████████╗██████╗░██╗░░██╗░██████╗░
╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔══██╗██║░██╔╝██╔════╝░
░░░██║░░░█████╗░░╚█████╗░░░░██║░░░██████╔╝█████═╝░██║░░██╗░
░░░██║░░░██╔══╝░░░╚═══██╗░░░██║░░░██╔═══╝░██╔═██╗░██║░░╚██╗
░░░██║░░░███████╗██████╔╝░░░██║░░░██║░░░░░██║░╚██╗╚██████╔╝
░░░╚═╝░░░╚══════╝╚═════╝░░░░╚═╝░░░╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░
`;
import chalk from 'chalk';

import { argv } from 'process';
import { readFile, writeFile} from 'fs/promises';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

if (process.argv.length <= 2) {
    console.error("Usage: No Parameter Detected");
    console_log_text_1();
    process.exit(1);
}

function Handle(param) {
    eval(`${param}()`)
}

function console_log_text_1() {
    console.log(chalk.italic(text));
    console.log(chalk.italic(`TestPKG v${version}\n`));
    console.log(chalk.italic("> Run npm test help for more assistance👋"));
}

function help() {
    console.log(chalk.italic(`TestPKG v${version}`));
    console.log(chalk.blackBright("--------------"));
    
    console.log('npm test install <param> / Installs any loader from loaders directory "rammerhead", "nodeunblocker", "multi" ');
    console.log();
    console.log('npm test reset / Resets the loader to its stock form');
    console.log();
    console.log('npm test parrot / parrot');
    console.log();
    console.log('npm test version / Shows the Seismetic Version');
    console.log();
    console.log('npm test get_rh_sessions / Gets all the Rammerhead Sessions');
    console.log();
    console.log('npm test remove_rh_session <Param> / Removes the Rammerhead Session ');
    console.log();
}



const parameter = process.argv[2];
Handle(parameter);