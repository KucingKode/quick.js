___

## **Fetch & Send Files**

- ### **getText()**

> **Description:**
>
> Get a text from any file
>
> **Syntax:**
>
> `fileSys.getText(url: string, callback: (err: Error, content: string) => void)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `url` | `string` | **Required** url of a file
> `callback` | `(err: Error, content: string) => void` | **Required** function that will be executed once this function get error or succesfully get the text from file
>
> **Returns:**
>
> `void`

- ### **getJSON()**

> **Description:**
>
> Get a data from json file
>
> **Syntax:**
>
> `fileSys.getJSON(url: string, callback: (err: Error, content: string) => void)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `url` | `string` | **Required** url of a json file
> `callback` | `(err: Error, content: string) => void` | **Required** function that will be executed once this function get error or succesfully get the data from file
>
> **Returns:**
>
> `void`

- ### **sendText()**

> **Description:**
>
> Send a text to the client
>
> **Syntax:**
>
> `fileSys.sendText(text: string, name: string)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `text` | `string` | **Required** text will be sent
> `name` | `string` | **Required** title of the text
>
> **Returns:**
>
> `void`

## **Read & Write**

Coming Soon...
