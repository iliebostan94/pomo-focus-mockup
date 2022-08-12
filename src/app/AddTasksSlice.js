const initialState = {
        tasks: [
            {
            taskID: 0,
            taskTitle: "Test title 1",
            taskDescription: "Test desc 1",
            },
            {
            taskID: 1,
            taskTitle: "Test title 2",
            taskDescription: "Test desc 2",
            },
        ],
    }
  function nextTaskId(tasks) {
    const maxId = tasks.reduce((maxId, task) => Math.max(task.taskID, maxId), -1);
    return maxId + 1;
  }
  
  export default function addTasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'tasks/tasksAdded' : {
            return [
                ...state,
                {
                    taskID: nextTaskId(state.tasks),
                    taskTitle: action.payload,
                    taskDescription: action.payload,
                }
            ]
            
        }
        default: 
        return state;
    }
  }


