"use client";
import React from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { increment, decrement } from "@/app/redux/slice";
import type { RootState, AppDispatch } from "@/app/redux/store"; // Adjust the import path accordingly
import Button from '@mui/material/Button';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const Counter = () => {
  const count = useTypedSelector((state) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (


    <div className="d-flex align-items-center justify-content-center mt-5">
      <div> <Button variant="contained" color="error" size="large" onClick={() => dispatch(increment())}> <span style={{fontSize:"40px"}} className="p-2">
        +
      </span></Button>
      <span style={{fontSize:"40px"}} className="p-4 m-5 text-danger">
        {count}
      </span>
        <Button variant="contained" color="error" size="large" onClick={() => dispatch(decrement())} ><span style={{fontSize:"40px"}} className="p-2">
        -
      </span></Button>
      </div>
    </div>
  )
}
export default Counter;
