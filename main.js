function generateMaze() {
    //create a two-dimensional grid of cells, where each cell has four walls (top, right, bottom, left)
    //choose a starting point and mark it as the current cell
    //while there are unvisited cells
        //randomly pick a neighboring cell that has not been visited
        //remove the wall between the current cell and the chosen neighboring cell
        //mark the chosen neighboring cell as the current cell
        //repeat until there are no unvisited cells
    //return the grid
            
    var grid = [];
    var marked = [];
    var currentCell = null;
    var unvisitedCells = 0;
    var width = 10;
    var height = 10;

    //create a two-dimensional grid of cells, where each cell has four walls (top, right, bottom, left)
    for (var i = 0; i < width; i++) {
        //each entry in the grid and marked list is initialized to an empty array
        grid[i] = [];
        marked[i] = [];
        for (var j = 0; j < height; j++) {
            //each entry in the cell represents a wall (top, right, bottom, left)
            grid[i][j] = [true, true, true, true];
            marked[i][j] = false;
            unvisitedCells++;
        }
    }

    //choose a starting point at random and mark it as the current cell
    currentCell = [Math.floor(Math.random() * width), Math.floor(Math.random() * height)];



}
