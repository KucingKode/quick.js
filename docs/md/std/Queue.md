<!-- Queue -->
- ### **class: Queue**

> **Descriptions:**
>
> Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).
>
> **Syntax:**  
> Create new queue:  
> `new std.Queue(data?: any[], size?: number)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `data` | `any[]` | **Optional** queue initial data
> `size` | `number` | **Optional** queue size
>
> Clone a queue :  
> `std.Queue.clone(Queue: Queue)`  
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `Queue` | `std.Queue` | **Required** queue to be cloned
>
> **Components:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `data`       | `number` | queue data  
> `size`       | `number` | queue size  
> `isFull`   | `boolean` | queue is full condition  
> `isEmpty`     | `boolean` | queue is empty condition
>
> **Methods:**
>
> `.enqueue(data: any)`  
> add a data into queue
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `data` | `any` | **Required** data to be added
>
> `.dequeue()`  
> remove a data from queue
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> `.peek()`  
> get the top data of the queue
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
