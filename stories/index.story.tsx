import React, { useState } from 'react';
import { Button } from "antd";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Kait[CLASSNAME]
} from '../src/';

export const Simple = () => {
  const [text, setText] = useState("noop")

  function onClick() {
     Kait[CLASSNAME]({"title": "hello[CLASSNAME]", "content": "story"}).then(data=>{
      setText("result: " + JSON.stringify(data));
     })
  }
  return <>
    <Button onClick={onClick}>Kait[CLASSNAME]</Button>
    <Button onClick={()=>{location.reload()}}>reload</Button>
    <div>{text}</div>
  </>
}

export default {
  title: 'Components/Kait[CLASSNAME]',
}

