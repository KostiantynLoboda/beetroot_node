const fs = require('fs');

let fileName = process.argv[3];
let fileContent = process.argv[5];

fs.stat(fileName, (err, stats) => {
    if (err) {
        fs.writeFileSync(fileName, `${fileContent} \n`);
    } else {
        fs.appendFileSync(fileName, `${fileContent} \n`);
    }
});