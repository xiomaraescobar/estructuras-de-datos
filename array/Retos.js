//reto con unshift

class MyArray2 {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    
    unshift(item){
      if (!item) {
        return this.length
      }
      if (this.length !== 0) {
        for (let i = this.length - 1; i >= 0; i--) {
          this.data[i + 1] = this.data[i];
        }
      }
  
      this.data[0] = item;
      this.length++;
      return this.length
    }
  }
  
  // metodo shift reto
  
  class BetterArray extends Array3 {
    constructor(){
      super()
      this.length = 0
      this.data = {}
    }
  
    shift() {   
       if (this.length === 0) {
        return undefined
      } else {
        const element = this.data[0]
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length -= 1
          return element
        }
    }
  }