import { useDispatch, useSelector } from "react-redux"
import { Increment , Decrement , Reset } from "./Slicer1";
 
 
 export default function Couting (){

   const count =  useSelector((state)=>state.slice1.count) ; 
   const dispatch = useDispatch();

   console.log(Increment());
   return (
        <>
        <h1> Counter Is : {count}</h1>
        <button onClick={()=>dispatch(Increment())}> Increment </button>
        <button onClick={()=>dispatch(Decrement())}> Decrement </button>
        <button onClick={()=>dispatch(Reset())}> Reset </button>
        </>
    )
}