import {useReducer} from "react"
function reducerTodos(state,action){
    // console.log({state,action});
    if(action.type === "REMOVE_TODO"){
      
      return {
        ...state,
        todos:state.todos.filter(t => t!==action.payload)
      }
    }
    if(action.type === "TOGGLE_TODO"){
      return {
        ...state,
        todos:state.todos.map(todo => todo === action.payload ? {
          ...todo,
          checked: !todo.checked
        } :todo)
      }
    }
    if(action.type ==="ACCOMPLIES_TODO"){
      return {
        ...state,
        todos:state.todos.filter(todo =>!todo.checked)
      }
    }
    if(action.type === "TOGGLE_FILTER"){
      return{
        ...state,
        showCompleted: !state.showCompleted
  
      }
    }
  }
  export function useTodos(){
    const [state,dispatch] = useReducer(reducerTodos, {
        showCompleted:true,
        todos:[
          {
            name: "faire les courses",
            checked: false
          },
          {
            name: "gerer les courses",
            checked: false
          },
          {
            name: "regarder les courses",
            checked: false
          }
        ]
      })
    const completedFilter = state.showCompleted ? state.todos :state.todos.filter(todo=>!todo.checked) 

    return {
        showCompleted: state.showCompleted,
        completedFilter: completedFilter,
        removeTodo: (todo)=>dispatch({type:"REMOVE_TODO", payload: todo}),
        toggleTodo: (todo)=>dispatch({type:"TOGGLE_TODO", payload: todo}),
        accompliesTodo: ()=>dispatch({type:"ACCOMPLIES_TODO"}),
        toggleFiler: ()=>dispatch({type:"TOGGLE_FILTER"})
    }   
  }