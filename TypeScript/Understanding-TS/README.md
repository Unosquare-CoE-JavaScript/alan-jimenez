# Typescript tricks
- Using a `+` sign allows us to cast a number

Use an HTMLElement value
```javascript
document.getElementById('num1')! as HTMLInputElement;
```

We can use Type aliases to create custom complex types and avoid repeat code.

Exclamation mark `!` means we know that the value could be possibly null or don't exist.
