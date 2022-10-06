import LifeCycleMethods from './Components/LifeCycle';
import './Components/Style.css';
import UseRef from './Components/UseRef';

function App() {
  return (
    <>
      <UseRef />
      <h1>2.What is Context API ?</h1>
      <p>
        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
      </p>
      <p>
        Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
      </p>
      <p>
        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
      </p>
      <h1>3.Difference between callback and useCallback Hook ?</h1>
      <p>
        callback is like an argument passed to an function whereas another one is hook, in this you pass another function as an argument.
      </p>
      <h1>4.What is Props Drilling Concept ? What is State Uplifting ?</h1>
      <p>
        It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around and when several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.
      </p>
      <h1>5.Difference between useEffect and useContext ?</h1>
      <h2>useEffect</h2>
      <p>
        useEffect is a hook for encapsulating code that has ‘side effects,’ and is like a combination of componentDidMount, componentDidUpdate, and componentWillUnmount. Previously, functional components didn’t have access to the component life cycle, but with useEffect you can tap into it.
      </p>
      <h2>useContext</h2>
      <p>
        useContext is a hook for getting broadly shared application data from context providers. When they added the official context API to React in 16.3, I was really excited about the capabilities but hated working with the API. The need for functional rendering made sense, but I strongly disliked using it. Now with the useContext hook, we can utilize all that power without having to ugly up our code or the React Developer Tools component tree!
      </p>
      <h1>6.What are React Life cycles Explain each one with Example</h1>
      <ul>
        <li>
          Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
        </li>
        <li>
          Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
        </li>
        <li>
          Updating: Updating is the stage when the state of a component is updated and the application is repainted.
        </li>
        <li>
          Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.
        </li>
      </ul>
      <center><LifeCycleMethods /></center>
    </>
  );
}

export default App;
