// Reto con el método remove

class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    // Método para obtener un nodo por índice

    getTheIndex(index) {
      if (index < 0 || index >= this.length) return null;
      let currentNode = this.head;
      let counter = 0;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
    // Método para eliminar un nodo en un índice específico
    remove(index) {
      // Verificar si el índice está fuera de los límites
      if (!this.getTheIndex(index)) {
        console.log("Este nodo no existe.");
        return this;
      }
  
      // Obtener el nodo anterior y el nodo siguiente al nodo que se va a eliminar
      let previousPointer = this.getTheIndex(index - 1);
      let currentPointer = this.getTheIndex(index);
  
      // Verificar si hay un nodo siguiente
      if (currentPointer.next) {
        previousPointer.next = currentPointer.next;
      } else {
        previousPointer.next = null;
      }
  
      this.length--;
      return this;
    }
  }
  
  const linkedList = new LinkedList();

  // linkedList.add(...);
  
  linkedList.remove(2); // Ejemplo de eliminación
  
