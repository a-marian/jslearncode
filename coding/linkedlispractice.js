class LinkList {
    constructor(){
        this.head = null; // first element of list
        this.tail = null; // last element of the list
    }

    append(value) {
        const newNode = {value: value, next: null};
        if (this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head){
            this.head = newNode;
        }
    }
    // adding elements
    prepend(value){
        const newNode = { value: value, next: this.head };
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
    }

    insertAfter(value, afterValue){
        const existingNode = this.find(afterValue);
        if(existingNode){
            const newNode = {value: value, next: existingNode.next};
            existingNode.next = newNode;
        }
    }

    find( value){
        if(!this.head){
            return null;
        }
        let curNode = this.head;
        while(curNode){
            if(curNode.value === value){
                if(curNode.value === value){
                    return curNode;
                }
            }
        }
        return null;
    }

    //removing elements
    delete(value){
        if(!this.head){
            return;
        }

        while (this.head && this.head.value === value){
            this.head = this.head.next;
        }

        let curNode = this.head;
        while (curNode.next){
            if(curNode.next.value === value){
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }
        if(this.tail === value) {
            this.tail = value;
        }
    }

    toArray(){
        const elements = [];
        let curNode = this.head;
        while (curNode){
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements;
    }
}

const linkList = new LinkList();
linkList.append(1);
linkList.append('hello there');
linkList.append('Marian');
linkList.append('Marian');
linkList.append(true);
linkList.append(45.33);
console.log(linkList.toArray());


linkList.prepend('First value');
linkList.prepend('First value');
console.log(linkList.toArray());

linkList.delete('Marian');
linkList.delete('First value');
console.log(linkList.toArray());

console.log(linkList.find('First value'));
console.log(linkList.find('hello there'));

console.log(linkList.insertAfter('Second value', 1));
console.log(linkList.insertAfter('New value', 45.33));
console.log(linkList.toArray());
