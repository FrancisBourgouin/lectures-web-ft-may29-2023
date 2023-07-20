# WTH ?

- State in child that was supposed to be in the parent
- Scheduler life
- useEffect
- How we can know the props that we have access to

## Organization

- State in child that was supposed to be in the parent (receive a function / move the state up)
- How we can know the props that we have access to ()

```jsx
const multiplyTwoNumbers = (num1, num2) => {};

multiplyTwoNumber();
```

## Hooks mechanics

- useEffect

## React mechanics

- Prop drilling

```jsx
fctWithCallback(20, () => {
  fctWithCallback(20, () => {
    fctWithCallback(20, () => {
      fctWithCallback(20, () => {
        fctWithCallback(20, () => {});
      });
    });
  });
});


<ComponentA />
<ComponentB />
<ComponentC />
<ComponentD />
<ComponentE />
<ComponentF />
<ComponentG />
```
