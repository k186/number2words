##数字转中文大写（javascript）

欢迎提建议谢谢。

###现在状态
最大输入13位整数，小数最多3位

自动判断小数位数，不在做默认设定


使用方法
```
 var option={
        isTag:true, //false
        numTag:'span',//可为空
        unitTag:'div'//可为空
    };

num2word(number,option);调用方法名 及参数
```

下次优化 传入参数增加输出标签ID
```
现有输出是字符串如果在某些情况下会转义html标签，这是我们不想看到的
····
option={
    outputID:""
}
```