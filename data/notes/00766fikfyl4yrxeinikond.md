

# This is Maëlle's DBGI daily open-notebook.

Today is 2023.04.27


## TODO

- Check discussion: https://github.com/orgs/digital-botanical-gardens-initiative/discussions
- Check Zulip

## CODE

## NOTES

### JS tutorials
https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc

#### variable creation
- **let** => can be changed
- **const** => can't be changed
- **var** => older way

#### variable comparison
- **==** equals
- **!=** not equals
- **===** equals and same type
- **!==** not equals to type
- **&&** and
- **||** or
- **!boolean** inverse

- Check type => `typeof variableName`

#### Loops
- `for(let i=0,i<5,i++){}`
- `while(i<5){}`
- `do{}while(i<5)` => run the 'do' code one time before checking for condition
- `if(){} else if{} else{}`
- When testing multiple elif on same variable => 
```js
switch(variableToTest){ 
  case 'A':
    code;
    break;
  case 'B':
    code;
    break;
  case 'C':
    code;
    break;
  default:
    code;
    } 
```

#### functions
##### function declaration:
```js
function name(){
  code;
  return ...;
}
```
call function: `name();`

##### function expresion:
```js
const variable = function(){
  code;
  return ...;
};
```
call expression: `variable();`

function declaration is happening at the beginning of the script even if it is defined at the end whereas function expression not.

##### arrow function:
```js
const variable = (arguments) => code;
```

##### method
functions that are called as '.method' after an object

##### callbacks 
functions that are used in another function as argument
```js
object.forEach(function(){
  console.log('something');
})
```
or with arrow function:
```js
object.forEach(()=>{
  console.log('something');
});
```

#### Objects
= python class

```js
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetningja.co.uk',
  location: 'berlin',
  blogs: [
          {title: 'blog1',likes: 30 },
          {title: 'blog2', likes: 20}
          ],
  login: function(){ // method creation
    console.log('the user logged in')
  },
  logBlogs(){
    this.blogs.title // 'this' calls the object
  }
};

// access value
name = user.name; 
name = user['name'];

// change value
user.age = 35; 
user['age'] = 35;

// call method
user.login()
```



### Node.js tutorials
https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU

#### Introduction
- Node.js permits to read and write files on a computer
- connect to a database
- Act as a Server for content
- no need to link to html files

=> Role is to run JS on the backend

Why use Node.js?
- share code between front and back en as they use both JS
- Huge community behind it
- Huge amouont of third-party packages and tools to help

#### streams and buffer
When loading data => not all at once but more like a stream.            
Load data in buffer => when buffer is full => pass data
```js
const readStream = fs.createReadStream('./docs');

readStream.on('data',(chunk) => {
  code
});
``` 
Chunk is passed when buffer is full

Can do the same for writing files with `fs.createWriteStream()`.

##### piping
read a file and write
`readStream.pipe(writeStream);`



## TODO NEXT

Continue node.js course from #7

## Important for redaction
