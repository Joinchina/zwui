import React from 'react';
import Button from './components/Button/button'
const App: React.FC = ()=> {
  return (
    <div>
      <Button disabled >小明</Button>
      <Button onClick={()=>{alert(1)}} btnType="primary">小明</Button>
      <Button href="www.baidu.com" btnType="link">小明</Button>
    </div>
  );
}

export default App;
