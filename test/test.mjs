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
        console.error(`\nDidn't get a string:${name}\n`);
        return false;
    }

    if (name === '') {
        console.error('\nGot an empty string.\n');
        return false;
    }

    return true;
}

// Since this is all random, we'll aim for a "good enough" test instead of a fully mocked "perfect" test
async function testModule(modulePath) {
    const module = await import(modulePath);

    for (let i = 0; i < 5000; i++) {
        isNameValid(module.default());
    }
}

async function runTests() {
    const absolutePath = path.resolve('generators/');

    for (const file of walkSync(absolutePath)) {
        process.stdout.clearLine();  // clear current text
        process.stdout.cursorTo(0);  // move cursor to beginning of line
        process.stdout.write(file);

        try {
            await testModule(file);
        } catch (e) {
            console.error(e);
        }
    }
}

runTests().catch(console.error);
