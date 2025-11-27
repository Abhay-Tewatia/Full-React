import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItem from "./components/TodoItem.jsx"; 
import TodoItem2 from "./components/todoitem2.jsx";
import './App.css'; b
function App() {
  return (
    <center className="to-do-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
  <TodoItem />
      <TodoItem2 />
      </div>
      

      
    </center>
  );
}
export default App;
