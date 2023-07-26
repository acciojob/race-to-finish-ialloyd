window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
    promises.push(new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise ${i} resolved`);
        }, Math.random() * 4000 + 1000);
    }));
}

Promise.any(promises).then((result) => {
    document.querySelector('#output').innerHTML = result;
});
