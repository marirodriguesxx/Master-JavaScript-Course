# Section 01 - Theory notes

### What is javascript?
* javascript is a high-level object-oriented, multi-paradigm programming language

### The role of javascript in web development
* HTML - visual content in the page
* CSS - style of the visual content
* javascript - build web aplications

### Usually javascript is attached to web pages

### console.log() function
* the console is just an enviroment to execute small pieces of codeand then show results immediately, but it doesent show results in code by default
* this function tell javaScript to explicity output that result to the console

### inline scripts:
* inline scripts are scripts that build the javaScript code inside the HTML file (example)
* the only advantage is that we don't have to load another file

### outline scripts:
* we have a bettert separation of concerns about what is presentation and what is logic
* its easier to  maintain code int he long run
* js and html connection is usually mande on the final of the body tag, using : 
```
<script src = "pathToTheJavaScriptCode"></script>
```

### Value is the smallest unit of information in javaScript, are usually stored in variables
* let variable = value
* value can be an integer, an string... etc

### javaScript variables 
* every value is either an object or a primitive value
* primitive data types : 
 - number: floating point numbers - always have decimals!
 - string: simply a sequence of characters
 - boolean: true or false? - logicalß type
 - undefined: when we not assign a value 
 - null: empßty value
 - symbol: value that is unique an cannot be changed
 - big int: integers that are too large

### when we declae a empty variable in javaScript, the variable value will be undefined, and also the type :)

### Dinamic typing in javaScript:
* we dont need to declary the type when we declare a variable
* javaScrit automatically determines the data type of a value when its stored into a variable
* in javaScript is the VALUE that has a type, not the variable
* we can assign a new to value with a different data type to the same varible without a problem

### typeof : show the type of a value
* example:

```
    console.log(typeof undefined)
```
* in this exemple, the output will we _undefined_

### Block Scope vs Function Scope
* Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

* Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. To be consise the variables declared inside the curly braces are called as within block scope.


### 3 ways of declaring a variable in javaScript
* **_let_** variables: variables that can be changed later, during the code execution -> in techinal termns, it is reassign a value to a variable
    - **block scope!!!!** -> follows de declaration order
    - we usually use *let* when we know that we are going to change a  variable value or when we declare a empty variable.
    ```
        let variable = 0;
        variable = 'hello';
    ```
* **_const_** variables: variables that cannot be changed during the program execution 
    - also is  **block scope!!!!**
    - we **can't** do something like:
    ```
        const year = 2022;
        year = 2020;
    ```
    - We are going to see the error : **TypeError**
    - we cannot declare empty variables ! whe must to inicialize the const variable
* **_var_** variables: similar to let, but it is **function scope**

### we can dont declare a variable, but whe we do this, javaScript creates a property on the global object

### Basic operators in javaScript
* Exponent: we use the o perator ** to elevate a number. Example:
```
2 ** 3
```
* this is equal to 2^3 = 2*2*2 = 8
* Comparision operators: >, <, <=, >=, ===
