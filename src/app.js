//ANCHOR initial board pre conversion.
const board = 
[
[0,1,0,0],
[0,0,1,0],
[0,1,0,1],
[0,1,0,0],
];
//ANCHOR old code that did not work perfectly
// function convertBoard(arr){
//     // create new variable for an empty array
//     let newBoard = [];
//     // for loop to iterate through the array to get the position of [X][]
//     for (i = 0; i <= arr.length; i ++){
//         // create new placeholder array to store the for loops position finding
//         let arrPos = [0][i]
//         // for loop to iterate through the array to get the position of [][X]
//         for (j = 0; j <= arr.length; j ++){
//             // add J into position placeholder array
//             arrPos = [j][0]
//             // check to see if the element in the position array is 1
//             if (arrPos == 1){
//                 // push X for the mine into the new array
//                 newBoard.push("x")
//             } else {
//                 // push 0 for the empty cell in the array
//                 newBoard.push(0);
//             }
//         }
//     }
//     return newBoard;
// }
// ANCHOR reformated code
function convertBoard(arr) {
    // new variable for an empty 2d array
    let newArr = [[]];
    // loop to iterate through the old array and re-map it into newArr
    for (let i = 0; i < arr.length; i ++ ){
        // takes the index of [i] in arr and maps it to the index of [i] in newArr
        newArr[i] = arr[i].map(element => {
            // if the element being mapped is equal to 1, change it into X
            if (element == 1){
                return "x";
            }
            // if not 1 then return element as it
            return element;
        });

    }
    return newArr;
}

console.log(convertBoard(board));