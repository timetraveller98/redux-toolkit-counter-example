"use client";
import React from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { increment, decrement } from "@/app/redux/slice";
import type { RootState, AppDispatch } from "@/app/redux/store"; // Adjust the import path accordingly

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const Counter = () => {
  const count = useTypedSelector((state) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (


    <div>
      <div> <button onClick={() => dispatch(increment())}> + </button>
      <span>
        {count}
      </span>
        <button onClick={() => dispatch(decrement())} > - </button>
      </div>
    </div>
  )
}
export default Counter;
