###数字转中文大写（javascript）

欢迎提建议谢谢。

单位，中文数字
```javascript

    var unit = ["分", "角", "元", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟"];
    var nums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    中文单位最小为“厘”
```
数字的验证
```javascript
    //正整数或者正浮点数 小数后2位
    var reg = /^[1-9]\d*\.\d{2}$|^[1-9]\d*\.\d{1}$|^[1-9]\d*$/;
    //正整数或者正浮点数 小数后3位
    var reg = /^[1-9]\d*\.\d{2}$|^[1-9]\d*\.\d{1}$|^[1-9]\d*$|^[1-9]\d*\.\d{3}$/;
    //数字不能为空或者未定义
    if (number == 'undefined' && number.toString() == "") {
        return null
    }
    if (!reg.test(number)) {
        alert('请输入有效的数字,且最多保留2位小数');
        return null;
    } else {
        number = new Number(number).toFixed(2);//取几位小数
        newNum = number.toString().replace(/\./g, "");//干掉小数点 变成字符串
    }
```
开始转换
```javascript
        var Intarr = newNum.split("").reverse();//拆成数组反转
        //转换数字 添加单位
        //直接转换成中文
         for (var i in Intarr) {
                    result += " " + nums[Intarr[i]]+ " " + unit[i];
                }
        //数字和单位之间用空格或者不同标签装
        for (var i in Intarr) {
            Intarr[i] = nums[Intarr[i]];
            newUnit[i] = unit[i];
        }
        Intarr = Intarr.reverse();
        newUnit = newUnit.reverse();
        for (var i in Intarr) {
            result += " " + Intarr[i] + " " + newUnit[i];
        }
        //返回转换后的结果
        return result;
```