// gameOfLife.ts

interface Cell {
    alive: boolean;
  }
  
  interface GameOfLifeOptions {
    rows: number;
    cols: number;
    initialDensity: number;
  }
  
const initializeGrid = (options: GameOfLifeOptions): Cell[][] => {
    const grid: Cell[][] = [];

    for (let i:number = 0; i < options.rows; i++) {
    const row: Cell[] = [];

    for (let j:number = 0; j < options.cols; j++) {

        const alive = Math.random() > options.initialDensity 
        row.push({ alive });
    }

    grid.push(row);
    }

    return grid;
};
  
  const countNeighbors = (grid: Cell[][], row: number, col: number): number => {
    let count = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && !(i === row && j === col)) {
          count += grid[i][j].alive ? 1 : 0;
        }
      }
    }
    
    return count;
  };
  
  const updateGrid = (grid: Cell[][]): Cell[][] =>
    grid.map((row, i) =>
      row.map((cell, j) => {
        const neighbors = countNeighbors(grid, i, j);

        return {
          alive: cell.alive ? neighbors === 2 || neighbors === 3 : neighbors === 3,
        };
      })
    );
  
  const printGrid = (grid: Cell[][]): void => {
    for (let i = 0; i < grid.length; i++) {
      let colsNumber = grid[0].length
      let row = '';
      
      for (let j = 0; j < colsNumber; j++) {
        row += grid[i][j].alive ? '#' : '.';
      }

      console.log(row);
    }
  };
  
const runGameOfLife = (options: GameOfLifeOptions): void => {
  let grid: Cell[][] = initializeGrid(options);

  const runIteration = (): void => {
    printGrid(grid);
    grid = updateGrid(grid);
    setTimeout(runIteration, 100);
  };

  runIteration();
};
  
  // Example usage:
  const options: GameOfLifeOptions = {
    rows: 70,
    cols: 100,
    initialDensity: 0.7,
  };
  
  runGameOfLife(options);
  
