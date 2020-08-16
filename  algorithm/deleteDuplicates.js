// #83

var deleteDuplicates = function(head){
  let p = head
  while(p && p.next){
    if(p.val === p.next.val){
      p.next = p.next.next
    }else{
      p = p.next
    }
  }
  return ListNode
}

deleteDuplicates([1,1,2])


