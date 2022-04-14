// export a function named static that creates a file named index.html and a css file instide the folder with the name of the project
function Static( fs, pwd, args, tailwind ) {
    args.forEach(function(file) {
        if (file.includes(".")) {
            // check if tailwind true and if so, import tailwind css from cdn in the index.html file
            if (file == "index.html" && tailwind) {
                fs.writeFile(`${pwd}\\index.html`, `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@^1.0/dist/tailwind.min.css">`, function(err) {
                    if (err) {
                        console.log(err);
                    }
                });
            } else {
                fs.writeFile(`${pwd}\\${file}`, "", function(err) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        } else {
            // create a folder
            fs.mkdir(`${pwd}\\${file}`, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}

module.exports = { Static };