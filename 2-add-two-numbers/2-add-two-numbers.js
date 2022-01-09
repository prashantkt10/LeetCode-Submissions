function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let rsLL=null;
    let tail=null;
    let temp;
    while(l1 || l2) {
        let sum=0;
        if(l1) {
            sum += l1.val;
            l1=l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2=l2.next;
        }
        if(temp!=undefined) sum+=temp;
        let localLL;
        if(sum<10) {
            localLL=new ListNode(sum,null);
            temp=undefined;
        } else {
            let diff=sum-10;
            localLL=new ListNode(diff,null);
            temp=1;
        }
        if(!rsLL) rsLL=localLL;
        else tail.next=localLL;
        tail=localLL;
    }
    if(temp!=undefined) {
        let localLL=new ListNode(temp,null);
        if(!rsLL) rsLL=localLL;
        else tail.next=localLL;
    };
    return rsLL;
};