import React, { useState } from 'react';
import { render } from 'react-dom';
import { Button } from "antd";
import { [FNNAME] } from '../src/index';

const App = () => {
  const [text, setText] = useState("noop")
  const onClick = () => {
     [FNNAME]({"title": "Kait[CLASSNAME]", "content": "story"}).then((data: any)=>{
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