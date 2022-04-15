const { react, reactApp, reactIndex, reactAddons, reactHtml, reactManifest, tailwindDeps, tailwindConfig, tailwindCSS, postInstallMessage } = require("./reactJsDep.js");
const colors = require("colors");
const fs = require("fs");

const reactDep = react.join(" ");
const tailwindDep = tailwindDeps.join(" ");
const log = console.log;

function generateReactProd(pwd, tailwind, ts, pName) {
    const { execSync } = require("child_process");

    log(`Creating a new React app in `.white + `${pwd}`.green + '.\n');

    execSync(`npm init -y`, { cwd: pwd }, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
        }
    });
    
    log('Using npm.\n'.brightWhite);
    log("Installing dependencies:");

    react.forEach(function(dep) {
        log(`- `.brightWhite + `${dep}`.brightBlue);
    });
    log('');
    
    execSync(`npm i ${reactDep}`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
        }
    });

    log('\nInstalling React addons:');

    reactAddons.forEach(function(dep) {
        log(`- `.brightWhite + `${dep}`.brightBlue);
    });
    log('');

    execSync(`npm i ${reactAddons.join(" ")}`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
        }
    });

    fs.mkdirSync(`${pwd}/public`);

    fs.writeFileSync(`${pwd}/public/index.html`, reactHtml);

    fs.writeFileSync(`${pwd}/public/manifest.json`, reactManifest);

    fs.mkdirSync(`${pwd}/src`);

    fs.writeFileSync(`${pwd}/src/index.js`, reactIndex);

    fs.writeFileSync(`${pwd}/src/App.js`, reactApp);

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

        fs.writeFileSync(`${pwd}/src/index.css`, tailwindCSS);
        fs.writeFileSync(`${pwd}/tailwind.config.js`, tailwindConfig)
    } else {
        fs.writeFileSync(`${pwd}/src/index.css`, '');
    }

    fs.mkdirSync(`${pwd}/src/components`);
    
    const data = JSON.parse(fs.readFileSync(`${pwd}/package.json`));
    data.scripts.test = `react-scripts test`;
    data.scripts.build = `react-scripts build`;
    data.scripts.start = `react-scripts start`;
    data.scripts.eject = `react-scripts eject`;
    data.eslintConfig = {
        extends: "react-app"
    };
    data.browserslist = {
        "production": [
            "> 0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version",
        ]
    }
    fs.writeFileSync(`${pwd}/package.json`, JSON.stringify(data, null, 4));
    
    log(`\nSuccess!`.brightGreen + ` Created ${pName} in ${pwd}`.white);
    postInstallMessage(pName);

}

module.exports = { generateReactProd };