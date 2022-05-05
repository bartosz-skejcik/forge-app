const { next, nextts, nextDev, nextTsDev, _app, _appts, tsConfig, ESLintConfig, ESLintDeps, ESLintDepsWithPrettier, ESLintConfigWithPrettier, ESLintTsDepsWithPrettier, ESLintTsDeps, prettierConfig, nextIndex, nextConfig, tailwindCSS, tailwindConfig, postCssConfig, tailwindDeps, postInstallMessage } = require("./nextJsDep.js");
const colors = require("colors");
const fs = require("fs");

const nextDep = next.join(" ");
const nextTsDep = nextts.join(" ");

const nextTsDevDep = nextTsDev.join(" ");
const nextDepDev = nextDev.join(" ");

const tailwindDep = tailwindDeps.join(" ");
const log = console.log;

function generateNextProd(pwd, tailwind, ts, pName, eslint, prettier) {
    const { exec, execSync } = require("child_process");

    log(`Creating a new Next.js app in `.white + `${pwd}`.green + '.\n');

    execSync(`npm init -y`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
        }
    });

    log('Using npm.\n'.brightWhite);
    log("Installing dependencies:");

    switch (ts) {
        case true:

            nextts.forEach(function (dep) {
                log(`- `.brightWhite + `${dep}`.brightBlue);
            });
            log('');

            execSync(`npm i ${nextTsDep}`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
                if (err) {
                    console.log(err);
                }
            });

            fs.writeFileSync(`${pwd}/next.config.js`, nextConfig);

            fs.mkdirSync(`${pwd}/pages`);

            fs.writeFileSync(`${pwd}/pages/index.tsx`, nextIndex);

            fs.writeFileSync(`${pwd}/tsconfig.json`, tsConfig);

            fs.writeFileSync(`${pwd}/pages/_app.ts`, _appts);

            fs.mkdirSync(`${pwd}/pages/api`);

            fs.mkdirSync(`${pwd}/styles`);

            log('\nInstalling devDependencies:');

            nextTsDev.forEach(function (dep) {
                log(`- `.brightWhite + `${dep}`.brightBlue);
            });
            log('');

            execSync(`npm i -D ${nextTsDevDep}`, { cwd: pwd }, (err, stdout, stderr) => {
                if (err) {
                    console.log(err);
                }
            });

            // checking if tailwind is selected. if it is then we import tailwind in globals.css
            if (tailwind) {

                log("\nInstalling tailwind CSS dependencies:");

                tailwindDeps.forEach(function (dep) {
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

            if (eslint) {

                log("\nInstalling ESLint dependencies:");

                if (prettier) {
                    ESLintTsDepsWithPrettier.forEach(function (dep) {
                        log(`- `.brightWhite + `${dep}`.brightBlue);
                    });

                    execSync(`npm i -D ${ESLintTsDepsWithPrettier} eslint-config-prettier`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
                        if (err) {
                            console.log(err);
                        }
                    });

                    fs.writeFileSync(`${pwd}/.eslintrc.js`, ESLintConfigWithPrettier);
                } else {
                    ESLintTsDeps.forEach(function (dep) {
                        log(`- `.brightWhite + `${dep}`.brightBlue);
                    });

                    execSync(`npm i -D ${ESLintTsDeps}`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
                        if (err) {
                            console.log(err);
                        }
                    });

                    fs.writeFileSync(`${pwd}/.eslintrc.js`, ESLintConfig);
                }
            }

            if (prettier) {

                log("\nInstalling ESLint dependencies:");

                tailwindDeps.forEach(function (dep) {
                    log(`- `.brightWhite + `${dep}`.brightBlue);
                });


                if (eslint) {
                    execSync(`npm i -D ${ESLintTsDeps} eslint-config-prettier`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                } else {
                    execSync(`npm i -D ${ESLintTsDeps}`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                }

                fs.writeFileSync(`${pwd}/.prettierrc`, prettierConfig);
            }

            fs.mkdirSync(`${pwd}/public`);
            fs.mkdirSync(`${pwd}/components`);

            const tsData = JSON.parse(fs.readFileSync(`${pwd}/package.json`));
            tsData.scripts.dev = `next dev`;
            tsData.scripts.build = `next build`;
            tsData.scripts.start = `next start`;
            fs.writeFileSync(`${pwd}/package.json`, JSON.stringify(tsData, null, 4));

            break;

        case false:

            next.forEach(function (dep) {
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

            fs.writeFileSync(`${pwd}/pages/index.jsx`, nextIndex);

            fs.writeFileSync(`${pwd}/pages/_app.js`, _appts);

            fs.mkdirSync(`${pwd}/pages/api`);

            fs.mkdirSync(`${pwd}/styles`);

            log('\nInstalling devDependencies:');

            nextDev.forEach(function (dep) {
                log(`- `.brightWhite + `${dep}`.brightBlue);
            });
            log('');

            execSync(`npm i -D ${nextDepDev}`, { cwd: pwd }, (err, stdout, stderr) => {
                if (err) {
                    console.log(err);
                }
            });

            // checking if tailwind is selected. if it is then we import tailwind in globals.css
            if (tailwind) {

                log("\nInstalling tailwind CSS dependencies:");

                tailwindDeps.forEach(function (dep) {
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

            if (eslint) {

                log("\nInstalling ESLint dependencies:");

                if (prettier) {
                    ESLintDepsWithPrettier.forEach(function (dep) {
                        log(`- `.brightWhite + `${dep}`.brightBlue);
                    });

                    execSync(`npm i -D ${ESLintDepsWithPrettier} eslint-config-prettier`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
                        if (err) {
                            console.log(err);
                        }
                    });

                    fs.writeFileSync(`${pwd}/.eslintrc.js`, ESLintConfigWithPrettier);
                } else {
                    ESLintDeps.forEach(function (dep) {
                        log(`- `.brightWhite + `${dep}`.brightBlue);
                    });

                    execSync(`npm i -D ${ESLintDeps}`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
                        if (err) {
                            console.log(err);
                        }
                    });

                    fs.writeFileSync(`${pwd}/.eslintrc.js`, ESLintConfig);
                }
            }

            if (prettier) {

                log("\nInstalling ESLint dependencies:");

                tailwindDeps.forEach(function (dep) {
                    log(`- `.brightWhite + `${dep}`.brightBlue);
                });


                if (eslint) {
                    execSync(`npm i -D ${ESLintDeps} eslint-config-prettier`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                } else {
                    execSync(`npm i -D ${ESLintDeps}`, { cwd: pwd, stdio: 'inherit' }, (err, stdout, stderr) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                }

                fs.writeFileSync(`${pwd}/.prettierrc`, prettierConfig);
            }

            fs.mkdirSync(`${pwd}/public`);
            fs.mkdirSync(`${pwd}/components`);

            const data = JSON.parse(fs.readFileSync(`${pwd}/package.json`));
            data.scripts.dev = `next dev`;
            data.scripts.build = `next build`;
            data.scripts.start = `next start`;
            fs.writeFileSync(`${pwd}/package.json`, JSON.stringify(data, null, 4));

            break;
    }

    log(`\nSuccess!`.brightGreen + ` Created ${pName} in ${pwd}`.white);
    postInstallMessage(pName);

}

module.exports = { generateNextProd };