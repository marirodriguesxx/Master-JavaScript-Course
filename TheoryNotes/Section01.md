# JavaScript Fundamentals Part 1 - Theory notes

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
* this is equal to 2^3 = 2x2x2 = 8
*Math operators: +, -, /, *, %
* Comparision operators: >, <, <=, >=, ===

### Template Literals
 * We can write a string in a more normal way.
 * can assemble multiple pieces into one final string
 * to write a template literals we use backtickss
 * example:
 ```
 const newString = `I'm ${variableName}`;
 ```

### \n\ = new line inside a string

### Actually, we can use backticks to write ant regular string
* examples:
```
console.log(`A regular string ...`);
```
* backsticks is usefull to create a multline string, like:
```
console.log(`String
with
multiple
lines`)
```

### Type conversion and coercion
* Type Conversion: when you manually convert from a type to another
* Type Coercion: is whe javaScript automatically converts types behind the scenes for us. But it happens implicitly, completely hidden from us
    - Type Coercion happens whenever an operator is dealing with two values that have different types
* We can convert a value to a number using
```
Number(value)
```
* We can convert a value to a string using
```
String(value)
```
* **_Falsy values_**: are values that are not exactly false, but will become false when we try to convert them into a boolean. In javaScrit, there are 5 falsy values:
    - 0
    - ""
    - undefined
    - null
    - NaN

### Equality Operators: == vs.===
* === : is called **_strict equality operator_**, is strict because it does not perform type coercion. And so it only returns true to when both values are exactly the same
* == : is calles **_loose equality operator_**, in this case, the operator does type coercion. This can introduce many hard to find bug in the code. So, a general rule for clean code is to avoid tis operator.
* Examples:
    - will return true
        ```
        18 === 18;
        ```
    - will return false
        ```
        "18" === 18;
        ```
    - will return true
        ```
        "18" == 18;
        ```

### Operators: != vs. !===
* **_strict_** : !== (good practice)
* **_loose_** : !=

### Switch case statement
* Each case use strict comparision
    - Example:
        ````
            switch(condition) {
                case 1:
                    line of code 1;
                    line of code 2;
                    line of code 3;
                    break;
                case 2:
                    line of code 1;
                    break;
            }
        ````
* we can actually execute multiple lines of code, without needing curly braces for that
* we can run the same code for two different values. 
    - Example:
        ````
        switch(condition) {
            case 1:
            case 2:
                lines of code 1;
                lines of code 2;
            default:
                lines of code 1;
        }
        ````
* **_default_**: its like de else statement. When some value its not valid, we can use dafult to warn about it

### Difference between Statements and Expressions
* **_Expression_**: is a piece of code that produces a value
    - examples:
        ```
        3+4
        ```
        ```
        1991
        ```
* **_Statements_**: is a bigger piece of code that is executed and wich does not produce a value on itself

### Remember: An operator always produces a values. So, an operator is a expression

### The conditional (ternary) operator
* Example:
````
const age = 10;
age >= 18 ? console.log('I like to drink wine') 
            : console.log('i dont like to drink wine')
````
* we can use the ternary operator inside a template literal:
````
console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`)
````
* perfect for "quick" decisions, not for big parts of code




