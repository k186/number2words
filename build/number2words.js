/**
 * Created by k186 on 2016/6/28.
 * github:https://github.com/k186/number2words
 * email:k1868548@gmail.com
 */
function num2word(number, option) {
    var unit = [ "元", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟"];
    var reg = /^[1-9]\d{0,11}$|^\d{1}\.\d{1,3}$|^[1-9]\d{0,11}\.\d{1,3}$/; //整数12位非0开头 小数0开头0.123 小数非0开头123...12.123
    /*var str='^[1-9]\\d{0,11}$|^\\d{1}\\.\\d{1,3}$|^[1-9]\d{0,11}\\.\\d{1,3}$';
    var regs=new RegExp(str,'g');*/
    var nums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var container=document.getElementById(option.container);
    var decimal,inter;
    var newNum = [],
        newUnit = [],
        numArr = [],
        result = '';
    //最多3位小数
    if (!reg.test(number)) {
        console.warn('请输入有效的数字,以非零开头,最多保留3位小数，整数部分最大12位');
        result= '请输入有效的数字,以非零开头,最多保留3位小数,整数部分最大12位';
        return output();
    }
    //获取整数和小数部分
    inter=number.toString().split(".")[0];
    decimal=number.toString().split(".")[1];
    //小数
    if(decimal){
        decimal=decimal.length;//小数长度最大3
        if (decimal == 1) {
            unit.unshift("角");
            getDecimalLen(decimal);
        } else if (decimal == 2) {
            unit.unshift("分","角");
            getDecimalLen(decimal);
        } else if (decimal == 3) {
            unit.unshift("厘","分","角");
            getDecimalLen(decimal);
        }
    }
    //整数
    if(inter){
        inter=inter.length;//整数长度必须小雨13
        numArr = number.split("").reverse();//拆成数组反转
        //如果要设置tag包裹
        if (option.isTag) {
            //转换成中文暂时放入 newNum 和newUnit
            if (option.numTag || option.unitTag) {
                for (var i in numArr) {
                    newNum[i] = nums[numArr[i]];
                    newUnit[i] = unit[i];
                }
                newNum = newNum.reverse();
                newUnit = newUnit.reverse();
                if (option.numTag&&option.unitTag==null) {
                    for (var i in newNum) {
                        result += '<' + option.numTag + '>' + newNum[i] + '</' + option.numTag + '>' + newUnit[i];
                    }
                    return output();
                } else if (option.unitTag&&option.numTag==null) {
                    for (var i in newNum) {
                        result += newNum[i] + '<' + option.unitTag + '>' + newUnit[i] + '</' + option.unitTag + '>';
                    }
                    return output();
                } else if (option.unitTag && option.numTag) {
                    for (var i in newNum) {
                        result += '<' + option.numTag + '>' + newNum[i] + '</' + option.numTag + '>' + '<' + option.unitTag + '>' + newUnit[i] + '</' + option.unitTag + '>';
                    }
                    return output();
                }
            } else {
                console.warn('包裹标签为空');
                result= '包裹标签为空';
                return output();
            }
        } else {//不设置tag包裹
            for (var i in numArr) {
                result += unit[i] + nums[numArr[i]]
            }
            result = result.split('').reverse().join("");
            return output();
        }
    }
    function output() {
        if (container){
            container.innerHTML=result;
        }else {
            return result;
        }
    }
    function getDecimalLen(len) {
        number = new Number(number).toFixed(len);//小数
        number = number.toString().replace(/\./g, "");//干掉小数点 变成字符串
    }

}







