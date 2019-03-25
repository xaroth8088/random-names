import belts from '../generators/armour/belts';

function isNameValid(name) {
    if (typeof name !== 'string') {
        console.error(`Didn't get a string:${name}`);
        return false;
    }

    if (name === '') {
        console.error('Got an empty string.');
        return false;
    }

    if (name !== name.trim()) {
        console.error(`Got an un-trimmed string:${name}`);
    }

    return true;
}

// Since this is all random, we'll aim for a "good enough" test instead of a fully mocked "perfect" test
const names = [];
for( let i = 0; i < 1000; i++ ) {
    names.push(belts());
}

names.forEach(name => isNameValid(name));
