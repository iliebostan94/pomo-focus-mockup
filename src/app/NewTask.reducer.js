import { combineReducers, createSlice } from "@reduxjs/toolkit";

export const TaskReducer = createSlice({
    name: 'TaskReducer',
    initialState: {
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
    },
    nextTaskId(tasks) {
        const maxId = tasks.reduce((maxId, task) => Math.max(task.taskID, maxId), -1);
        return maxId + 1;
    },
    

    tasksReducer(state = tasks, action) {
        switch(action.type) {
            case 'tasks/tasksAdded' : {
                return {
                    ...state,
                    tasks: [
                        ...state.tasks,
                        {
                            taskID: nextTaskId(state.tasks),
                            taskTitle: action.payload,
                            taskDescription: action.payload,
                        }
                    ]
                }            
            }
        }
    }
});

export const { tasks, nextTaskId, tasksReducer  } = TaskReducer.actions;

export default TaskReducer.reducer
