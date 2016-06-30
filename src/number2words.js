/**
 * Created by k186 on 2016/6/28.
 * github:https://github.com/k186/number2words
 * email:k1868548@gmail.com
 */
function num2word(number, option) {
    var unit = [ "元", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟"];
    var reg = /^[1-9]\d*\.\d{2}$|^[1-9]\d*\.\d{1}$|^[1-9]\d*\.\d{3}$|^[1-9]\d*$/;
    var nums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var decimal,inter;
    var newNum = [],
        newUnit = [],
        numArr = [],
        result = '';
    inter=number.toString().split(".")[0];
    decimal=number.toString().split(".")[1];
    if(decimal){
        decimal=decimal.length;
        if (decimal && decimal > 0 &&decimal < 4) {
            if (decimal == 1) {
                unit.unshift("角");
            } else if (decimal == 2) {
                unit.unshift("分","角");
            } else if (decimal == 3) {
                unit.unshift("厘","分");
            }
        }
        else {
            console.warn("小数位数最多3位");
            return "小数位数最多3位";
        }
    }
    if(inter){
        inter=inter.length;
        if(inter<13){
            //验证数字合法性
            if (number == 'undefined' && number.toString() == "") {
                console.warn("请输入正确的数");
                return "请输入正确的数"
            }
            if (!reg.test(number)) {
                console.warn('请输入有效的数字,且最多保留' + option.decimal + '位小数');
                return '请输入有效的数字,且最多保留' + option.decimal + '位小数';
            } else {
                number = new Number(number).toFixed(option.decimal);//取两位小数
                number = number.toString().replace(/\./g, "");//干掉小数点 变成字符串
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
                            return result;
                        } else if (option.unitTag&&option.numTag==null) {
                            for (var i in newNum) {
                                result += newNum[i] + '<' + option.unitTag + '>' + newUnit[i] + '</' + option.unitTag + '>';
                            }
                            return result;
                        } else if (option.unitTag && option.numTag) {
                            for (var i in newNum) {
                                result += '<' + option.numTag + '>' + newNum[i] + '</' + option.numTag + '>' + '<' + option.unitTag + '>' + newUnit[i] + '</' + option.unitTag + '>';
                            }
                            return result;
                        }
                    } else {
                        console.warn('包裹标签为空')
                        return '包裹标签为空';
                    }
                } else {//不设置tag包裹
                    for (var i in numArr) {
                        result += unit[i] + nums[numArr[i]]
                    }
                    result = result.split('').reverse().join("");
                    return result;
                }
            }
        }else {
            return "最多输入13位整数";
        }
    }

}







