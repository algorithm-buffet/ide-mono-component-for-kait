import React, { useState } from 'react';
import { Button } from "antd";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  [FNNAME]
} from '../src/';

export const Simple = () => {
  const [text, setText] = useState("noop")
  const [isSuccess, setIsSuccess] = useState(false)
  const [data, setData] = useState({} as any);

  function onClick() {
     [FNNAME]({"title": "hello[CLASSNAME]", "content": "story"}).then((result: any)=>{
      setText(JSON.stringify(result));
      setText(result.data || {})
      setIsSuccess(result.success);
     })
  }
  return <>
    <Button onClick={onClick}>Kait[CLASSNAME]</Button>
    <Button onClick={()=>{location.reload()}}>reload</Button>
    <div>result: {text}</div>
    <div>调用结果：</div>
    <div>{isSuccess ? 'success' : 'failure'}</div>
    <div>{data}</div>
  </>
}

export default {
  title: 'Components/Kait[CLASSNAME]',
}

