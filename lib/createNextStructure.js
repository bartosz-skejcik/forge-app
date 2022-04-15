const { next, nextDev, _app, nextIndex, nextConfig, tailwindCSS, tailwindConfig, postCssConfig, tailwindDeps, postInstallMessage } = require("./nextJsDep.js");
const colors = require("colors");
const fs = require("fs");

const nextDep = next.join(" ");
const nextDepDev = nextDev.join(" ");
const tailwindDep = tailwindDeps.join(" ");
const log = console.log;

function generateNextProd(pwd, tailwind, ts, pName) {
    const { exec, execSync } = require("child_process");

    log(`Creating a new Next.js app in `.white + `${pwd}`.green + '.\n');

    execSync(`npm init -y`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
        }
    });
    
    log('Using npm.\n'.brightWhite);
    log("Installing dependencies:");

    next.forEach(function(dep) {
        log(`- `.brightWhite + `${dep}`.brightBlue);
    });
    log('');
    
    execSync(`npm i ${nextDep}`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
        }
    });

    fs.writeFileSync(`${pwd}/next.config.js`, nextConfig);

    fs.mkdirSync(`${pwd}/pages`);

    fs.writeFileSync(`${pwd}/pages/index.js`, nextIndex);

    fs.writeFileSync(`${pwd}/pages/_app.js`, _app);

    fs.mkdirSync(`${pwd}/pages/api`);

    fs.mkdirSync(`${pwd}/styles`);

    log('\nInstalling devDependencies:');

    nextDev.forEach(function(dep) {
        log(`- `.brightWhite + `${dep}`.brightBlue);
    });
    log('');

    execSync(`npm i -D ${nextDepDev}`, { cwd: pwd }, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
        }
    });

    // checking if tailwind is selected. if it is then we import tailwind in globals.css
    if(tailwind) {
        
        log("\nInstalling tailwind CSS dependencies:");

        tailwindDeps.forEach(function(dep) {
            log(`- `.brightWhite + `${dep}`.brightBlue);
        });
        
        execSync(`npm i -D ${tailwindDep}`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
            if (err) {
                console.log(err);
            }
        });

        fs.writeFileSync(`${pwd}/styles/globals.css`, tailwindCSS);
        fs.writeFileSync(`${pwd}/tailwind.config.js`, tailwindConfig)
        fs.writeFileSync(`${pwd}/postcss.config.js`, postCssConfig);
    } else {
        fs.writeFileSync(`${pwd}/styles/globals.css`, "");
    }

    fs.mkdirSync(`${pwd}/public`);
    fs.mkdirSync(`${pwd}/components`);
    
    const data = JSON.parse(fs.readFileSync(`${pwd}/package.json`));
    data.scripts.dev = `next dev`;
    data.scripts.build = `next build`;
    data.scripts.start = `next start`;
    fs.writeFileSync(`${pwd}/package.json`, JSON.stringify(data, null, 4));
    
    log(`\nSuccess!`.brightGreen + ` Created ${pName} in ${pwd}`.white);
    postInstallMessage(pName);

}

module.exports = { generateNextProd };