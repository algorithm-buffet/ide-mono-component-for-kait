import React, { useState } from 'react';
import { Button } from "antd";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  [FNNAME]
} from '../src/';

export const Simple = () => {
  const [text, setText] = useState("noop")
  const [isSuccess, setIsSuccess] = useState(false)

  function onClick() {
     [FNNAME]({"title": "hello[CLASSNAME]", "content": "story"}).then((data: any)=>{
      setText(JSON.stringify(data));
      setIsSuccess(data.success);
     })
  }
  return <>
    <Button onClick={onClick}>Kait[CLASSNAME]</Button>
    <Button onClick={()=>{location.reload()}}>reload</Button>
    <div>result: {text}</div>
    <div>调用结果：</div>
    <div>{isSuccess ? 'success' : 'failure'}</div>
  </>
}

export default {
  title: 'Components/Kait[CLASSNAME]',
}

