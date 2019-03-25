import { readdirSync, statSync } from 'fs';
import path from 'path';
import { clearLine } from 'readline';

/**
 * List all files in a directory recursively in a synchronous fashion
 * Derived from code found at https://gist.github.com/luciopaiva/4ba78a124704007c702d0293e7ff58dd
 *
 * @param {String} dir
 * @returns {IterableIterator<String>}
 */
function* walkSync(dir) {
    const files = readdirSync(dir);

    for (const file of files) {
        const pathToFile = path.join(dir, file);
        const isDirectory = statSync(pathToFile).isDirectory();
        if (isDirectory) {
            yield* walkSync(pathToFile);
        } else {
            yield pathToFile;
        }
    }
}

function isNameValid(name) {
    if (typeof name !== 'string') {
        console.error(`Didn't get a string:${name}`);
        return false;
    }

    if (name === '') {
        console.error('Got an empty string.');
        return false;
    }

    return true;
}

// Since this is all random, we'll aim for a "good enough" test instead of a fully mocked "perfect" test
async function testModule(modulePath) {
    const module = await import(modulePath);

    const names = [];
    for (let i = 0; i < 1000; i++) {
        names.push(module.default());
    }

    names.forEach(name => isNameValid(name));
}

function runTests() {
    const absolutePath = path.resolve('generators/');

    for (const file of walkSync(absolutePath)) {
        console.info(file);
        clearLine(process.stdout, 0);
        testModule(file).catch(e => console.error(`Test for ${file} failed! ${e}`));
    }
}

runTests();
