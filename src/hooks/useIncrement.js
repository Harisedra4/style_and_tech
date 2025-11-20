import { useState } from "react";

export function useIncrement({base = 0, max = infinity , inf = -infinity}){
    const [state,setState] = useState(base)
    return {
        count : state,
        incrementer : () => setState(v => v < max ? v + 1 : v),
        decrementer : () => setState(v =>  v > inf ? v - 1 : v)
    }

}