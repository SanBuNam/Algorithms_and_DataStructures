/**
 * @param {number} numCourses - total number of courses
 * @param {number[][]} prerequisites - array of course prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites); // Build the adjacency list representation of the course graph
  const visited = new Array(numCourses).fill(false); // Create an array to track visited courses
  
  for (let course = 0; course < numCourses; course++) {
      if (!dfs(course, graph, visited)) { // Perform a depth-first search on each course
          return false; // If a cycle is detected, return false (not possible to finish all courses)
      }
  }
  
  return true; // If no cycles are detected, return true (possible to finish all courses)
};

function buildGraph(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(null).map(() => []); // Create an empty adjacency list graph
  
  for (let [course, prerequisite] of prerequisites) {
      graph[course].push(prerequisite); // Add the prerequisite to the adjacency list of the course
  }
  
  return graph;
}

function dfs(course, graph, visited) {
  if (visited[course]) {
      return false; // If the course is already visited in the current DFS traversal, a cycle is detected
  }
  
  visited[course] = true; // Mark the course as visited
  
  for (let prerequisite of graph[course]) {
      if (!dfs(prerequisite, graph, visited)) { // Recursively perform DFS on each prerequisite
          return false; // If a cycle is detected in the prerequisite chain, return false
      }
  }
  
  visited[course] = false; // Reset the visited flag for the course
  
  return true; // All prerequisites of the course have been processed without any cycle
}
