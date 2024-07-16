/*1-->2-->3-->4-->5-->null

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }
}*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
   //El valor nos permite iniciar esta estructura de datos con un elemento dentro. 
   constructor(value) {
       //Cabeza de la Linked List
       this.head = {
           value: value,
           next: null,
       };
       //La cola de la Linked List también está apuntada a la cabeza por lo que no existe ningún otro valor 
       this.tail = this.head

       //Contamos los elementos de la lista
       this.length = 1;
   }
   append(value) {
       //Recibimos el valor y lo añadimos al final
       const newNode = new Node(value);
       //Cambiamos el valor siguiente(next) de la cola(tail).
       this.tail.next = newNode;
       //El último Nodo se convierte ahora en la nueva cola (tail)
       this.tail =newNode;
       this.length++;

       return this;
   }
   prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
   }
   insert(index, value) {
    if(index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.nex = holdingPointer;
    this.length++;

    return this;

  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  } 
}

let myLinkedList = new MySinglyLinkedList(1);


// node con doublyLinkedList

class  Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
      
  }
}

class MyDoublyLinkedList {
  constructor(value){
      this.head = {
          value: value,
          next: null,
          prev: null,
      };
      this.tail = this.head;
      this.length = 1;
  }

append (value){
  const newNode = new Node (value);
  newNode.prev = this.tail;
  this.tail.next = newNode; 
  this.tail = newNode;
  this.length++;
  return this;
  }

  prepend (value){
      if (this.length === 1){
      const newNode = new Node (value);
      newNode.prev = this.tail;
      this.tail.next = newNode; 
      this.tail = newNode;

      this.length++;        
      return this;
  }
      const newNode = new Node (value);
      newNode.prev =  null;
      newNode.next = this.head;
      this.head = newNode;

      this.length++;        
      return this;
  }

      insert (index, value){
          if(index >= this.length){
              return this.append(value);
          }

          const newNode = new Node (value);
          const firstPointer = this.getTheIndex(index - 1);
          const holdingPointer = firstPointer.next;  
          firstPointer.next = newNode;
          newNode.next = holdingPointer;
          newNode.prev = firstPointer;
          this.length++;
          return this;
      } 
      //counter
      getTheIndex(index){
          let counter = 0;
          let currentNode = this.head; 
          
          while (counter !== index){
              currentNode = currentNode.next;
              counter++;
          }
          return currentNode;
      }
      remove (index){
          if(index >= this.length){
              return 'Este nodo no existe';
          }
          else if (index === 0){
              const deleteNode = this.getTheIndex(index);
              deleteNode.prev = this.tail;

              this.tail = deleteNode;
              const afterDelete = this.getTheIndex(index + 1);     
              this.head = afterDelete;
              this.tail.next = null; 
              afterDelete.prev = null;

              return this;
          }
          else{
              const deleteNode = this.getTheIndex(index);
              deleteNode.prev = this.tail;
              this.tail = deleteNode;
              
              const afterDelete = this.getTheIndex(index + 1);     
              const beforeDelete = this.getTheIndex(index - 1);        
              beforeDelete.next=afterDelete;

              this.tail.next = null; 
              afterDelete.prev = beforeDelete;
              
          return this;
          } 
  }
  } 
  let myDoublyLinkedList = new MyDoublyLinkedList(1);

