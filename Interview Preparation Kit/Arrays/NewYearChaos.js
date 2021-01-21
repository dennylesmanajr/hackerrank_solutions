'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
    
    let bribes = 0;
    let chaotic = false;
    for (let i = 0; i < q.length; i++) {

        /**
         * COUNT ITEM STEPS FROM ORIGINAL POSITION
         * ===========================================
         * compare item with original position
         * original position : 1 2 3 4 5
         * current position  : 2 1 5 3 4
         * ex , q[0] = 2, 
         * 2 - (0-1) > 2
         * 1 > 2
         * so number 2, just must move +1 from current position to back its original position
         * if move more than 2 steps, then chaotic
         */
        if(q[i] -(i+1)>2) {
            chaotic = true;
            break;
        }
        
        for (let j = q[i]-2; j < i; j++) {
            if(q[j] > q[i]) bribes++;
        }
    }
    
    if(chaotic){
        console.log('Too chaotic');
    }else{
        console.log(bribes);
    }
    

}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
