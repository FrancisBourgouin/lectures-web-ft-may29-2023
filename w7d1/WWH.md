# What was hard

- Props
- JSX => JS & XML =>

JAVASCRIPT XTREME

<h1 class="greeting" onclick="annoy()">Hello!</h1> HTML

<h1 className="greeting" onClick={annoy}>Hello!</h1> JSX

EJS => <% %>

JSX => Looks, Tastes, Smells, but it's not HTML

React.DOM.createElement("h1", {
inner:"Hello",
})

REACT ? Framework/Library ? Framebrary ?!

React ?

- Easier design, and frontend work
- Templates, Reusable components
- Interface that reacts to event

```jsx
const createUser = (name, email, description, isAdmin) => {
  return {
    name,
    email,
    description,
    isAdmin,
    dateCreated: new Date(),
  };
};

createUser("Bob", "bob@bob.com", "He's bob", true);
createUser("Robert", undefined, undefined, false);

const createUserButBetter = (userProperties) => {
  const { name, email, description, isAdmin } = userProperties;
  return {
    name,
    email,
    description,
    isAdmin,
    dateCreated: new Date(),
  };
};

createUserButBetter({
  isAdmin: true,
  name: "Bob",
  description: "He's bob",
  email: "bob@bob.com",
});
createUserButBetter({ name: "Robert", isAdmin: false });

$.ajax({
  url: "",
});
```
