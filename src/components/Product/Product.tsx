import type React from "react";
import { useState } from "react";
import { css } from "./Product.module.css";

interface Votes {
    good: number;
    neutral: number;
    bad: number;
  }
interface ClickCounterProps {
  value: number;
  onUpdate: ()=> void;
}

  const votes: Votes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

interface KeyName {
  name: string;
}

export default function Product({ value, onUpdate }: ClickCounterProps) {
  //
  
  return (
    <>
      <button onClick={onUpdate}>{value}</button>
      
    </>
  );
}
