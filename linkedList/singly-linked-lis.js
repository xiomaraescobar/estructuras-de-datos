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
}

let mySinglyLinkedList = new MySinglyLinkedList(1)