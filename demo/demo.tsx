import React, { useState } from 'react';
import { render } from 'react-dom';
import { Button } from "antd";
import { Kait[CLASSNAME] } from '../src/index';

const App = () => {
  const [text, setText] = useState("noop")
  const onClick = () => {
     Kait[CLASSNAME]({"title": "Kait[CLASSNAME]", "content": "story"}).then((data: any)=>{
      setText("result: " + JSON.stringify(data));
     })
  }
  return <>
    <Button onClick={onClick}>Kait[CLASSNAME]</Button>
    <div>{text}</div>
  </>
}

render(
  <App/>,
  document.getElementById('example') as HTMLElement
);