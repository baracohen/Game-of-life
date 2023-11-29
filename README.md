# Game of Life

A simple implementation of Conway's Game of Life in TypeScript.

## Introduction

The Game of Life is a cellular automaton devised by mathematician John Conway. It consists of a grid of cells, each of which can be alive or dead. The cells evolve over time based on a set of rules.

## Code Overview

### `gameOfLife.ts`

This TypeScript file contains the implementation of the Game of Life. It includes the following functions:

- `initializeGrid`: Initializes the game grid with random alive and dead cells.
- `countNeighbors`: Counts the number of live neighbors around a given cell.
- `updateGrid`: Updates the grid based on the rules of the Game of Life.
- `printGrid`: Prints the current state of the grid to the console.
- `runGameOfLife`: Initiates the Game of Life simulation.
