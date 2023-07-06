# This is a very basic expense tracker.

### The App focus on the basics of react and decoupling of code and creating reusable components.

### To run the project

```
    before running the project you have to:
    npm install
    npm start

    This is the most configurations needed unless I modify the package.json
```

### Why Componets

- we focus on reusability and separation of concerns.
- React is formed by HTML, CSS and JavaScript.
- Passing Props

  - an example of passing props: goalItem = "props" which inside App component and prop inside CourseGoalItem component.

  ```
  <App/> ---> <CourseGoalItem text={goalItem}> ---> <li>{props.text}</li>

  ```

- we look how React creates elements an example:

  ```
  We could have:

  return (
      <div>
          <h2>let's go</h2>
          <ComponentFunction items={getUsrs}>
      </div>
  )

  how it will look when you use React with createElement using React import.

  return React.createElement(
      'div',
      {},
      React.createElement('h2', {}, "let's go"),
      React.createElement(ComponentFunction, {items: getUsrs})
      </div>
  )
  ```

### User Interactionn and state

- in order to use State in React we have a function provided by React which is is useState().
- Lifting State up, Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props.
- the idea of passing data around parent components.

```
                                    <APP/>
                              ________|_________
                             |                  |
                        <Expenses/>        <NewExpenses>

- lifting up the state from <NewExpenses/> to the <App/>
```
