
setInterval(function() { console.log('ohh, call backs'); }, 1000);
setTimeout(function() { console.log('ohh, call backs'); }, 1000);

setTimeout(() => console.log('OH callbacks'), 3000);

const test = () => console.log('ohh callbacks');
setTimeout(test, 2000);
