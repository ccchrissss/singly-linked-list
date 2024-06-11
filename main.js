class LinkedList {
  constructor() {
      this.arr = new Array()
  }


  get(i) {
      if (!this.arr[i]) {
          return -1
      } else {
          return this.arr[i]
      }
  }


  insertHead(val) {
      this.arr.unshift(val)
      // console.log(this.arr)
  }


  insertTail(val) {
      this.arr.push(val)
      // console.log(this.arr)
  }


  remove(i) {
      if (!this.arr[i]) {
          console.log(this.arr)
          return false
      } else {
          this.arr.splice(i, 1)
          console.log(this.arr)
          return true
      }

  }


  getValues() {
      return this.arr
  }
}
