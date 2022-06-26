CONCEPT
I will be coding a simple minesweeper concept game using javascript. The programme will mostly be a simulation rather than
a fully playable game as it is not possible to make a game this using the console unless it is something more text based such as an
old style role play game such as "Zork". However it would not be a stretch to put the code into another format to make it playable.

The code will take in a multidemensional array of binary input to represent where the mines are on the board and where there is empty space.
The array will look like the example given below.
[
[0,0,0,0]
[0,0,1,0]
[1,0,0,0]
[0,1,0,0]
]
0 represents an empty space on the board and 1 represents a mine. The code will be able to register how many mines are adjacent to an empty cell. The best way to identify how many mines are adjacent to an empty cell is to run a for loop. The loop will move through the array 

