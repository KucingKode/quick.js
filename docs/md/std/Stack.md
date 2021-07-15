<!-- Stack -->
- ### **class: Stack**

> **Descriptions:**
>
> Stack is an abstract data type that holds an ordered, linear sequence of items. Stack last in, first out (LIFO) structure.
>
> **Syntax:**  
> Create new Stack:  
> `new std.Stack(data?: any[], size?: number)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `data` | `any[]` | **Optional** stack initial data
> `size` | `number` | **Optional** stack size
>
> Clone a stack :  
> `std.Stack.clone(stack: Stack)`  
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `stack` | `std.Stack` | **Required** stack to be cloned
>
> **Components:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `data`       | `number` | stack data  
> `size`       | `number` | stack size  
> `isFull`   | `boolean` | stack is full condition  
> `isEmpty`     | `boolean` | stack is empty condition
>
> **Methods:**
>
> `.push(data: any)`  
> add a data into stack
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `data` | `any` | **Required** data to be added
>
> `.pop()`  
> remove a data from stack
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> `.peek()`  
> get the top data of the stack
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
