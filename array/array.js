    //const array = ["Diego", "Karen", "Oscar"];


  //creacion de un array con una clase utilizando el metodo push para insertar datos.
  
class MyArray {
    constructor() {
        this.length = 0;   //cuantos elementos se van a agregar
        this.data = {}   // donde se van a guardar 
    }
    get(index) {    //poder obtener el numero del elemento que necesito
      return this.data[index]; //me retorna  el indice del elemento
    }  
    push(item) {   //recibe un parametro que vamos a agregar
      this.data[this.length] = item; //agrega un elemnto que hace crecer nuestro array
      this.length++;   //incrementa en 1
      return  this.data;  //regresa los datos
    }
}
pop() {
  const lastItem = this.data[this.length -1]; // el metodo pop elimina el ultimo elemento y nos lo muestra
  delete this.data[this.length -1]; //delete en este caso es un kiwords es una palabra reservada utilizada para borrar
  this.length--;
  return lastItem;
}
  //este delete es un metodo
delete(index) {
  const item = this.data[index]
  this.shiftIndex(index);

} 

const myArray1 = new MyArray()  // generar nueva instancia



const myFriends = ["Diana", "Monica", "Jacke", "Obed"];

let popped = myFriends.pop();

console.log(myFriends); 

console.log(popped); 