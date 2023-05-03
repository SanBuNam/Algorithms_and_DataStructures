
var reverseList = function(head) {
  let prev = null; // initialize prev pointer as null
  let curr = head; // initialize curr pointer as head of linked list

  while (curr != null) { // loop until the end of the linked list
    let nextTemp = curr.next; // store the next node in a temporary variable
    curr.next = prev; // set the current node's next pointer to the previous node
    prev = curr; // update the prev pointer to point to the current node
    curr = nextTemp; // update the curr pointer to point to the next node
  }
  return prev; // prev will now point to the new head of the reversed linked list
};