/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowZero = false;
    let firstColZero = false;
    
    // check if first row has zero
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }
    
    // check if first column has zero
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }
    
    // use first row and first column as flags
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    
    // set rows and columns to zero based on flags
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // set first row to zero if necessary
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    
    // set first column to zero if necessary
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}