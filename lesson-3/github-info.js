const fetch = require('node-fetch');

async function showReposInfo(name) {
    let responseReposInfo = await fetch(`https://api.github.com/users/${name}/repos`);
    if (responseReposInfo.ok) {
        let json = await responseReposInfo.json();
        console.log(`Repos counter: ${json.length}`);
    } else {
        console.log('Repos not found');
    }
}

function showName(json) {
    console.log(`User name: ${json.name}`);
}

async function getUserGit(name) {
    let responseUserInfo = await fetch(`https://api.github.com/users/${name}`);
    if (responseUserInfo.ok) {
        let json = await responseUserInfo.json();
        showName(json);
        await showReposInfo(name);
    } else {
        console.log('User not found');
    }
}

module.exports = getUserGit;