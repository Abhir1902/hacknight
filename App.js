function func(){
    document.querySelector('.bg-modal').style.display = 'flex';
}
const t = document.querySelector('.close');
t.addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

function readQR(){
    var t = document.getElementById('file').value;
    const lineReader = require('line-reader');
    console.log(t)
    lineReader.eachLine('Database.txt', function(line) {
        console.log(line);
    });
}