function TodoItem2() {

  let todoname = "go to gym";
  let duedate = "2024-12-12"; 
    return <div class="container ">
        <div class="row kg-row">
          <div class="col-6">
           {todoname}
          </div>
          <div class="col-4">
            {duedate}
          </div>
          <div class="col-2">
           <button type="button" class="btn btn-danger kg-button">Delete</button>
          </div>
        </div>
      </div>;
}
export default TodoItem2;