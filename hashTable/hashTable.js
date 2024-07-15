class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
         hash = (hash + key.charCodeAt(i) * i) %  this.data.length;
        }
        return hash;
    }
    set(key, value) {
      const address = this.hashMethod(key);
      if(!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push({key,});
      return this.data;
    }
    get(key) {
      const address = this.hashMethod(key);
      const currentBucket = this.data[address];
      if(currentBucket) {
        for(let i = 0; i < currentBucket.length; i++) {
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1];
          }
        }
      }
      return undefined;
    }
}

const myHashTable = new HashTable(50);

// Reto delete
delete(key) {
  const indexOfKey = this.hash(key);
  if(this.table[indexOfKey]) {
    for(let i = 0; i < this.table[indexOfKey].length; i++) {
      if (this.table[indexOfKey][i][0] === key) {
         const valueDeleted = this.table[indexOfKey][i];
         this.table[indexOfKey].splice(valueDeleted, 1);
         return valueDeleted
      }
    }
  }
}

//Reto

class Solution extends HashTable {
  constructor(size) {
    super()
    this.data = new Array(size);
  }

  delete(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          let element = currentBucket[i]
          delete currentBucket[i]
          for (let j = 0; j < currentBucket.length - 1; j++) {
            currentBucket[j] = currentBucket[j + 1];
          }
          delete currentBucket[currentBucket.length - 1]
          return element
        }
      }
    }
    return undefined
  }

  }

  // Reto keys
  
  class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
  
    // Método para generar un hash basado en la clave
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
  
    // Método para añadir un elemento a la hashTable
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    // Método para obtener un elemento de la hashTable
    get(key) {
      let address = this._hash(key);
      const currentBucket = this.data[address];
      if (currentBucket) {
        for (let i = 0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === key) {
            return currentBucket[i][1];
          }
        }
      }
      return undefined;
    }
  
    // Método para obtener todas las claves de la hashTable
    keys() {
      const keysArray = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i]) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        }
      }
      return keysArray;
    }
  }
  