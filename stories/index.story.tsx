import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  [CLASSNAME]
} from '../src/';


function onClick(value: any) {
  console.log('当前点击：', [CLASSNAME]());
}

export const Simple = () => {
  return <button onClick={onClick}>点击查看 console</button>
}

export default {
  title: 'Components/[CLASSNAME]',
}

