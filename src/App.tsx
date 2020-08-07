import React from 'react';
import Button from './components/Button/button'
import Alert from './components/Alert/alert'
const App: React.FC = ()=> {
  return (
    <div>
      <Button disabled >小明</Button>
      <Button onClick={()=>{alert(1)}} btnType="primary">小明</Button>
      <Button href="www.baidu.com" btnType="link">小明</Button>
      <Alert message="我是title" description="我是描述" baseType="warning"></Alert>
      <Alert message="我是title"  baseType="info"></Alert>
    </div>
  );
}

export default App;
