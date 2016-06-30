/**
 * Created by k186 on 2016/6/28.
 */
function num2word(number) {
    var unit = ["分", "角", "元", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟"];
    var nums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var newNum,
        newUnit = [],
        result = '';
    //验证数字合法性
    var reg = /^[1-9]\d*\.\d{2}$|^[1-9]\d*\.\d{1}$|^[1-9]\d*$/;//正整数或者正浮点数 小数后2位
    if (number == 'undefined' && number.toString() == "") {
        return null
    }
    if (!reg.test(number)) {
        alert('请输入有效的数字,且最多保留2位小数');
        return null;
    } else {
        number = new Number(number).toFixed(2);//取两位小数
        newNum = number.toString().replace(/\./g, "");//干掉小数点 变成字符串
    }
    if (newNum) {
        var Intarr = newNum.split("").reverse();//拆成数组反转
        //转换数字 添加单位
        for (var i in Intarr) {
            Intarr[i] = nums[Intarr[i]];
            newUnit[i] = unit[i];
        }
        Intarr = Intarr.reverse();
        newUnit = newUnit.reverse();
        for (var i in Intarr) {
            result += " " + Intarr[i] + " " + newUnit[i];
        }
        return result;
    }
}







