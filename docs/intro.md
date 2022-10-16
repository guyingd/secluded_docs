---
sidebar_position: 0
title: Hello
---


<img style={{boxShadow:'none',width:'80%'}} src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/info.png"/>

## Hi，this is GuYing  

```js
function LifeScript(){
  while (alive){
    eat();
    sleep();
    code();
    study();
    haveFun();
    repeat();
  }
}
```

> 我在这里存放了我QQ机器人学习和日常学习的笔记，本文档将不断更新。

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>现在是 {date.toLocaleTimeString()}。</h2>
    </div>
  );
}
```

## TimeLine

- **2022/10/16** 使用 Docusaurus 建站
- **2022/10/16** 发布第一篇文档【变量】


## Contact Me

:::info Mail
2739218253@qq.com
:::

## Support Me

:::note StarMe
Star Me On [Github](https://github.com/guyingd
).
:::
