var mergeKLists = function(lists) {
  if (lists.length === 0) return null; // if the array of lists is empty, return null
  
  const mergeTwoLists = (l1, l2) => { // define a helper function to merge two sorted lists
      if (!l1) return l2; // if the first list is empty, return the second list
      if (!l2) return l1; // if the second list is empty, return the first list
      
      if (l1.val < l2.val) { // if the first list's value is less than the second list's value
          l1.next = mergeTwoLists(l1.next, l2); // set the first list's next node to the result of recursively calling the helper function with the first list's next node and the second list
          return l1; // return the first list
      } else { // otherwise (if the second list's value is less than or equal to the first list's value)
          l2.next = mergeTwoLists(l1, l2.next); // set the second list's next node to the result of recursively calling the helper function with the first list and the second list's next node
          return l2; // return the second list
      }
  };
  
  const mergeLists = (lists, start, end) => { // define a helper function to merge all the lists in the given range (start inclusive, end exclusive)
      if (start === end) return lists[start]; // if there is only one list in the range, return it
      const mid = Math.floor((start + end) / 2); // calculate the midpoint index
      const l1 = mergeLists(lists, start, mid); // recursively merge the first half of the range
      const l2 = mergeLists(lists, mid + 1, end); // recursively merge the second half of the range
      return mergeTwoLists(l1, l2); // merge the two resulting lists using the helper function
  };
  
  return mergeLists(lists, 0, lists.length - 1); // return the result of merging all the lists in the given range (i.e. the entire array of lists)
};