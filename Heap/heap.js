class Heap{
    constructor(){
        this.heap = [];
    }

      insert(value){
        this.heap.push(value);
        
        this.bubbleUp(this.heap.length - 1);
      }

      bubbleUp(index){
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
                index = parentIndex
            }else{
                
                break;
            }
        }
      }

      extract(){
        if(this.heap.length == 0){
            return null
        }

         let min = this.heap[0]
        this.heap[0] = this.heap.pop();

        this.shiftDown(0);
        return min
      }

      shiftDown(index){
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index  + 1;
        let smallestIndex = index;
        if(leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallestIndex]){
            smallestIndex = leftIndex
        }
        if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallestIndex]){
            smallestIndex = leftIndex
        }

        if (smallestIndex != index) {
            [this.heap[index],this.smallestIndex[smallestIndex]] = [this.heap[smallestIndex],this.smallestIndex[index]] 
            this.shiftDown(smallestIndex)
        }
      }
}

let heap = new Heap();
heap.insert(10);
heap.insert(5);
heap.insert(1);
console.log(heap.extract());