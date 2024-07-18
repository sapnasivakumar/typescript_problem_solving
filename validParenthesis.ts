function validParenthesis(s: string): boolean{
    const bracketsArray: Array<string> = s.split('');
    console.log("printing the bracketsArray", bracketsArray);
    let round: number = 0;
    let curly: number = 0;
    let square: number = 0;
    if(bracketsArray.length %2 !==0){
        console.log("array length is odd");
        return false;
    }
    bracketsArray.forEach(bracket => {
        if(bracket === '('){
            ++round;
        } else if(bracket === '['){
            ++square;
        } else if(bracket === '{'){
            ++curly;
        } else if(bracket === ')'){
            --round;
        } else if(bracket === '}'){
            --curly;
        } else if (bracket === ']'){
            --square;
        }
    })

    if(round === 0 && square === 0 && curly === 0 ){
        console.log("properly closed");
        return true;
    }
    console.log("not properly closed");
    return false;
}




 function isValidParenthesis(s: string): boolean{
    interface IStack<T> {
        push(item: T): void;
        pop(): T | undefined;
        peek(): T | undefined;
        size(): number;
      }

      class Stack<T> implements IStack<T> {
        private storage: T[] = [];
      
        constructor(private capacity: number = Infinity) {}
      
        push(item: T): void {
          if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
          }
          this.storage.push(item);
        }
      
        pop(): T | undefined {
          return this.storage.pop();
        }
      
        peek(): T | undefined {
          return this.storage[this.size() - 1];
        }
      
        size(): number {
          return this.storage.length;
        }
      }
      
      const stack = new Stack<string>();
    //   stack.push("A");
    //   stack.push("B");
      
    //   stack.size(); // Output: 2
    //   stack.peek(); // Output: "B"
    //   stack.size(); // Output: 2
    //   stack.pop();  // Output: "B"
    //   stack.size(); // Output: 1


      let tempArray = s.split('');
      for (let i = tempArray.length-1; i >= 0; i--){
        stack.push(tempArray[i]);
      }
      let result: boolean = true;
      //console.log(stack.size());
      do {
        console.log("inside Do");
        let temp = stack.pop();
        console.log("printing the poppes value", temp);
        console.log("peek value", stack.peek());

        if(temp ==='('){
            if(stack.peek() === ')'){
                stack.pop();
            } else {
                result = false;
            }
        } else if( temp === '['){
            if(stack.peek() === ']'){
                stack.pop();
            } else {
                result = false;
            }
        }  else if( temp === '{'){
            if(stack.peek() === '}'){
                stack.pop();
            } else {
                result = false;
            }
        }   
      } while(stack.size() !== 0)
     console.log("printing final result", result);
     let result1: boolean = validParenthesis(s);
    return result && result1;
 }

export default isValidParenthesis;