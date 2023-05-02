// You are given an array of non-overlapping intervals intervals 
// where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. 
// You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals 
// (merge overlapping intervals if necessary). Return intervals after the insertion.

const insert = (intervals, newInterval) => {
  const merged = [];
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    merged.push(intervals[i]);
    i++;
  }
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  merged.push(newInterval);
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }
  return merged;
}