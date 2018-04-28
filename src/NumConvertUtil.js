var NumConvertUtil;

NumConvertUtil = {

    getNumConvertMoney: function (num) {

        if (num != null) {
            var str = num.toString();
            var newStr = "";
            var count = 0;
            if (str.indexOf(".") == -1) {
                for (var i = str.length - 1; i >= 0; i--) {
                    if (count % 3 == 0 && count != 0) {
                        newStr = str.charAt(i) + "," + newStr;
                    } else {
                        newStr = str.charAt(i) + newStr;
                    }
                    count++;
                }
                str = newStr + ".00"; //自动补小数点后两位
//              console.log(str)
            }
            else {
                for (var i = str.indexOf(".") - 1; i >= 0; i--) {
                    if (count % 3 == 0 && count != 0) {
                        newStr = str.charAt(i) + "," + newStr; //碰到3的倍数则加上“,”号
                    } else {
                        newStr = str.charAt(i) + newStr; //逐个字符相接起来
                    }
                    count++;
                }
                str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
//              console.log(str)
            }

        }

        return str;
    },

    numAdd: function (num1, num2) {
        var baseNum, baseNum1, baseNum2;
        try {
            baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
            baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        var precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;//精度
        return ((num1 * baseNum + num2 * baseNum) / baseNum).toFixed(precision);
        ;
    },


    numSub: function (num1, num2) {
        var baseNum, baseNum1, baseNum2;
        try {
            baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
            baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        var precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
        return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
    },


    numMulti: function (num1, num2) {
        var baseNum = 0;
        try {
            baseNum += num1.toString().split(".")[1].length;
        } catch (e) {
        }
        try {
            baseNum += num2.toString().split(".")[1].length;
        } catch (e) {
        }
        return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
    },

    numDiv: function (num1, num2) {
        var baseNum1 = 0, baseNum2 = 0;
        var baseNum3, baseNum4;
        try {
            baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
            baseNum2 = 0;
        }
        
        baseNum3 = Number(num1.toString().replace(".", ""));
        baseNum4 = Number(num2.toString().replace(".", ""));
        return (baseNum3 / baseNum4) * pow(10, baseNum2 - baseNum1);
        
    },
    formatNum: function(str) {
    	var newStr = "";
	    var count = 0;
	
	    if (str.indexOf(".") == -1) {
	        for (var i = str.length - 1; i >= 0; i--) {
	            if (count % 3 == 0 && count != 0) {
	                newStr = str.charAt(i) + "," + newStr;
	            } else {
	                newStr = str.charAt(i) + newStr;
	            }
	            count++;
	        }
	        str = newStr + ".00"; //自动补小数点后两位
	        console.log(str)
	    }
	    else {
	        for (var i = str.indexOf(".") - 1; i >= 0; i--) {
	            if (count % 3 == 0 && count != 0) {
	                newStr = str.charAt(i) + "," + newStr; //碰到3的倍数则加上“,”号
	            } else {
	                newStr = str.charAt(i) + newStr; //逐个字符相接起来
	            }
	            count++;
	        }
	        str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
	        console.log(str)
	    }
    }


}






export default NumConvertUtil;//曝光