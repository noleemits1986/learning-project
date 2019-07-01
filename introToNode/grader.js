var scores = [90,98,89,100,100,86,94];
var scores2=[40,65,77,82,80,54,73,63,95,49];




function average(scores){
var sum=0;
var avr=0;
scores.forEach(function (score){
    sum+=score;
});
avr=sum/scores.length;

return Math.round(avr);
}

console.log("The average for the first one is " + average(scores));
console.log("The average for the second one is " + average(scores2));
