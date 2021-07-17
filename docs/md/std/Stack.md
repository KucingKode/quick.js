<!-- Stack -->
- ### **class: Stack**

> **Descriptions:**
>
> Stack is an abstract data type that holds an ordered, linear sequence of items. Stack last in, first out (LIFO) structure.
>
> **Syntax:**  
> Create new Stack:  
> `new Stack(data?: any[], size?: number)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `data` | `any[]` | **Optional** stack initial data
> `size` | `number` | **Optional** stack size
>
> Clone a stack :  
> `Stack.clone(stack: Stack)`  
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `stack` | `Stack` | **Required** stack to be cloned
>
> **Components:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `data`       | `number` | stack data  
> `size`       | `number` | stack size  
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
> `.peek(): any`  
> get the top data of the stack
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> `.isFull(): boolean`  
> check whether stack is full
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> `.isEmpty(): boolean`  
> check whether stack is empty
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
