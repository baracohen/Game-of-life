# Game of Life

A simple implementation of Game of Life in TypeScript.

## Code Overview

### `app.ts`

This TypeScript file contains the implementation of the Game of Life. It includes the following functions:

- `initializeGrid`: Initializes the game grid with random alive and dead cells.
- `countNeighbors`: Counts the number of live neighbors around a given cell.
- `updateGrid`: Updates the grid based on the rules of the Game of Life.
- `printGrid`: Prints the current state of the grid to the console.
- `runGameOfLife`: Initiates the Game of Life simulation.

### `instaltion`
- npm install -g typescript ts-node
- ts-node app.ts


```typescript
// Example usage:
const options: GameOfLifeOptions = {
  rows: 70,
  cols: 100,
  initialDensity: 0.7,
};

runGameOfLife(options);
