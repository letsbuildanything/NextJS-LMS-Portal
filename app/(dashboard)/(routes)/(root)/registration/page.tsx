import React from 'react'

interface RandomComponentProps {
  p1: string;
  p2: number;
  p3: boolean;
}

const RandomComponent = (props: RandomComponentProps) => {
  return (
    <>
      <h1>Below are the values of props:</h1>
      <ul>
        <li>p1: {props.p1}</li>
        <li>p2: {props.p2}</li>
        <li>p3: {props.p3}</li>
      </ul>
    </>
  )
}

const page = () => {

  const obj = {p1: "pankaj", p2: 98, p3: true}

  return (
    <RandomComponent  {...obj} />
  )
}

export default page