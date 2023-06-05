

# Questions

**1. What is the difference between Component and PureComponent? Give an example where it might break my app**

A PureComponent will only re-render if props or state values change. It shallowly compares props and state to the previous values to decide if the component should re-render

A PureComponent can break an app in this hypothetical scenario: since it does a shallow comparison, if we compare objects or arrays, if the reference is the same, but the content changes, the component will not render any new data, creating a bug

&nbsp;
&nbsp;

**2. Context + ShouldComponentUpdate might be dangerous. Why is that?**

ShouldComponentUpdate returning false causes any context update to be no longer propagated to child components

&nbsp;
&nbsp;

**3. Describe 3 ways to pass information from a component to its PARENT**

The 3 ways can be: 1) We can pass an handler to the child component that when called will send data to the parent 2) Update a context/global state from inside the child and consume that context on the parent to receive the information 3) using events, we can emit an event on the child and with a listener receive the information on the parent

&nbsp;
&nbsp;

**4. Give 2 ways to prevent components from re-rendering**

First way: we can use Memo to memoize a component and only render if certain values change. Example:

const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

Second way: with class components we have a lifecycle method called shouldComponentUpdate that can be used to not re-render the component in certain conditions, we can also use it to not re-render when state and props have the same values

&nbsp;
&nbsp;

**5. What is a fragment and why do we need it? Give an example where it might break my app**

In React, a fragment is a component that allows you to group multiple React children together without adding an additional DOM node, since React demands that when you are rendering more than one child you need to have a parent

One way it could break an app: when using a UI library that deals with arrays of child components, a Fragment can interfere with how the component works. This is because the library may apply classes to children

&nbsp;
&nbsp;

**6. Give 3 examples of the HOC pattern.**

React.memo is an HOC - from the React docs: "React.memo is a higher order component. If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result"

Another example can be a component that returns a given component with a hcaptcha attached (withCaptcha). Example: const FormWithCaptcha = withCaptcha(MyComponent);

Final example: a component that returns a given component with certain styles passed onto. Example: const StyledComponent = withStyles(MyComponent);

&nbsp;
&nbsp;

**7. What's the difference in handling exceptions in promises, callbacks and async...await?**

When consuming a promise, exceptions are handled using .catch(). Example: myPormise.catch((err) => {

})

In callbacks, the error will be on one of the parameters of the callback. Example: 

myFunc((error, data) => {
  if (error) {
    // Handle error
  } 
});

In async...await we normally use a try catch around the awaited function. Example:

async function myAsyncFunc() {
  try {
    const response = await something()
  } catch (error) {
    // Handle error
  }
}

&nbsp;
&nbsp;

**8. How many arguments does setState take and why is it async.**

Two

The first argument is a function we can use to update the state or it can be an object with the values to update on the state (React will merge the new values them inside the state)

The second parameter is an optional callback function that will be executed once setState is completed and the component is re-rendered

It's async because React should not block the app because of changes of state. The async operation will finish when the component re-renders, but it the meantime, the app should not be blocked

&nbsp;
&nbsp;

**9. List the steps needed to migrate a Class to Function Component**

Step 1 - convert the class into a function
Step 2 - convert the state using this.state = {} to useState hooks. State won't be called with this.state, but from the hook value and updated with the hook function and not with this.setState()
Step 3 - Consume props from the function params and not from this.props
Step 4 - Remove the render method
Step 5 - Convert any lifecycle methods to the appropriate hooks (useEffect, etc)
Step 6 - Convert any class based javascript: constructor, methods invoked like this inside the class: getData { }, etc

&nbsp;
&nbsp;

**10. List a few ways styles can be used with components**

We can style components in multiple ways. Some examples: styled components, css modules, JSS (CSS in JS), inline styles, global css via className

&nbsp;
&nbsp;

**11. How to render an HTML string coming from the server**

If it comes from a HTTP request on the client, we can render that with dangerouslySetInnerHTML for example. If it's SSR we have renderToString and other methods