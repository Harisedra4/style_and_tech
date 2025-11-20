import { useState } from "react"
export function useToggle(initial = false){
    const [name,setName] = useState(initial)
    const toggleChecked = () =>setName(v =>!v)
    return [name,toggleChecked]
  }