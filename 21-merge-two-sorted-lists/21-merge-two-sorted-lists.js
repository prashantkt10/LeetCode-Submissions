function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}
 
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    let newList=null;
    let tail=null;
    while(list1 && list2) {
        if(list1.val<list2.val) {
            let newNode=new ListNode(list1.val);
            if(!newList) {
                tail=newNode;
                newList=newNode;
                list1=list1.next;
                continue;
            }
            tail.next=newNode;
            tail=newNode;
            list1=list1.next;
        } else if(list2.val<list1.val){
            let newNode=new ListNode(list2.val);
            if(!newList) {
                tail=newNode;
                newList=newNode;
                list2=list2.next;
                continue;
            }
            tail.next=newNode;
            tail=newNode;
            list2=list2.next;
        } else {
            let newNode1=new ListNode(list1.val);
            let newNode2=new ListNode(list2.val);
            newNode1.next=newNode2;
            if(!newList) {
                newList=newNode1;
                tail=newNode2;     
                list1=list1.next;
                list2=list2.next;
                continue;
            }
            tail.next=newNode1;
            tail=newNode2;        
            list1=list1.next;
            list2=list2.next;
        }
    }
    if(list1) tail.next=list1;
    if(list2) tail.next=list2;
    return newList;
};