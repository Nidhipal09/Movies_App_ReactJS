import React from "react";

class ToDo extends React.Component{
    constructor(){
        super();
        this.state = {
           tasks: [{ name: "check mails", id : 1}, { name: "check calls", id : 2}],
           currentTask : ""
        }
    }
    render(){
        return (
            <div>
              <input type="text"/>
              <button>Submit</button>
              {
                  this.state.tasks.map((task) => {
                      <div key={task.id}>
                          <p>{task.name}</p>
                          <button>Cancel</button>
                      </div>
                  })
              }
            </div>
        );
    }
}

export default ToDo;
