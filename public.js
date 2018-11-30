//*************************************************
//模块名称：公用函数
//功能描述：
//
//初创日期：2005.11.20
//*************************************************

function IsEmpty(strObjName)
{
    var i = 0;
    var objLen = 0;
    var objName = document.all(strObjName);
    if (objName==null) {
        return true;
    }

    var strTemp = objName.value;
    if (strTemp.length == 0) {
        return true;
    }

    for (i=0; i< strTemp.length; i++) {
        if (strTemp.charAt(i) != " ")
            objLen++;
    }
    if (objLen==0) {
        return true;
    } else {
        return false;
    }
}

/**
 * 浮点型转化为整形，四舍五入
 */
function floatToInt(val)
{
    if(val.indexOf('.')==-1)
    {
        return val;
    }
    else
    {
        var dotnum = val.substring(val.indexOf('.')+1,val.indexOf('.')+2)
        if(Number(dotnum)>=5)
        {
            return parseInt(val)+1;
        }
        else
        {
            return parseInt(val);
        }
    }
}

/**
 * 检查字符串s中所有的字母是否属于集合bag
 * 是则返回空字符串，不是则返回第一个不属于bag的字符
 */
function ischarsinbag (s, bag)
{
    var i,c;
    for (i = 0; i < s.length; i++)
    {
        c = s.charAt(i);//字符串s中的字符
        if (bag.indexOf(c)==-1)
            return c;
    }
    return "";
}

/**
 * 检查是否为数字或字母或_组成的字符串
 *
 */
function isusercodestr(s)
{
    var errorchar;
    var badchar = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_";
    if (s.length < 4 || s.length > 20) {
        return false;
    }

    errorchar = ischarsinbag( s, badchar);
    if (errorchar != "")
        return false;
    else
        return true;
}

function isUserCodeStr(s)
{
    var errorchar;
    var badchar = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_@.";
    if (s.length < 1 || s.length > 32) {
        return false;
    }

    errorchar = ischarsinbag( s, badchar);
    if (errorchar != "")
        return false;
    else
        return true;
}

function isPasspordUserCodeStr(s)
{
    var errorchar;
    var badchar = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_@.";
    if (s.length < 4 || s.length > 32) {
        return false;
    }

    errorchar = ischarsinbag( s, badchar);
    if (errorchar != "")
        return false;
    else
        return true;
}

function checkAccount(account) {
    var accountReg = /^[a-zA-Z0-9]{1}([a-zA-Z0-9]|[_]){3,19}$/;
    if (!accountReg.test(account)) {
        return false;
    }
    return true;
}

/**
 * 检查是否为合法的身份证
 *
 */
function checkIDNumber(idNumber)
{
    var idReg = /(^(\d{15}|\d{17}[\dxX])$)/;
    return idReg.test(idNumber);
}

/**
 * 检查是否为数字或字母或;,.*_()~!@$%#=-+&?组成的字符串
 *
 */
function ispwdstr(s)
{
    var errorchar;
    var badchar = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz;,.*_()~!@$%#=-+&?";
    errorchar = ischarsinbag( s, badchar);
    if (errorchar != "")
        return false;
    else
        return true;
}

/**
 * 身份证号位数控制
 */
function idCardLenControl(obj)
{
    if(obj.value.length!=15&&obj.value.length!=18)
    {
        $.dialog.alert("身份证号必须是15或者18位！");
        obj.value = "";
    }
}

function PrintContent(divPrint)
{
    var oldstr = document.body.innerHTML;
    var newstr = document.all(divPrint).innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;

}

function OnlyInputNumber(inAddition)
{
    var k=event.keyCode;
    var charKey=String.fromCharCode(k);
    if(inAddition)
    {
        if(inAddition.indexOf(charKey)!=-1) return;
    }
    if(48<=k&&k<=57)
    {}
    else
        event.keyCode=null;
}

function trim(str,bol)
{
    if(str && typeof(str) == "string")
    {
        var regStr = /\s+/g;
        if(bol&&bol.toUpperCase() == "R")
        {
            regStr = /\s+$/;
        }
        else if(bol&&bol.toUpperCase() == "L")
        {
            regStr = /^\s+/;
        }
        str = str.replace(regStr,"");
    }
    return str;
}


function GetPeriod(inObjName)
{
    var strURL = AbsPath+"/widget/calendar/period.html";
    var strStyle="dialogWidth=162pt;dialogHeight=182pt;status=off;help=off;scrollbars=off";
    var AryDate = window.showModalDialog(strURL,'unlimitday',strStyle);
    if(AryDate!="")	document.all(inObjName).value=AryDate;
}

function GetDate(inObjName)
{
    var strURL = AbsPath+"/widget/calendar/date.html";
    var strStyle="dialogWidth=158pt;dialogHeight=158pt;status=off;help=off;scrollbars=off";
    var AryDate = window.showModalDialog(strURL,'',strStyle);
    if(AryDate.length==4) document.all(inObjName).value=AryDate[0];
}

function OnlyPwdChar()
{
    var k=event.keyCode;
    var charKey=String.fromCharCode(k);
    var strAllow="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz;,.*_()~!@$%"
    if(strAllow.indexOf(charKey)==-1)
        event.keyCode=null;
}

/**
 * 检查对象obj的值是否都是数字或小写字母，不是则报错。
 *
 */
function onlyCharNum(obj)
{
    var charKey;
    var strErr = "";
    var strAllow="1234567890abcdefghijklmnopqrstuvwxyz";
    for(i=0;i<obj.value.length;i++)
    {
        charKey = obj.value.charAt(i);
        if(strAllow.indexOf(charKey)==-1)
            strErr+=charKey;
    }
    if(strErr!="")
    {
        $.dialog.alert("'"+strErr+"'为非法字符，不允许输入！");
        obj.value = "";
    }
}

/**
 * 检测对象的值是否都是数字，参数为对象
 *
 * 返回值 是：true 否：false
 */
function isAllNum(obj)
{
    var charKey;
    var strErr = "";
    var strAllow="1234567890";
    for(i=0;i<obj.value.length;i++)
    {
        charKey = obj.value.charAt(i);
        if(strAllow.indexOf(charKey)==-1)
            strErr+=charKey;
    }
    if(strErr!="")
    {//有错
        return false;
    }
    else
        return true;
}

function isNum(value)
{
    var regInt=/\d+/;
    if (regInt.exec(value)) {
        return true;
    }
    else {
        return false;
    }
}

function isRate(value)
{
    var regInt=/^0\.\d{1,3}$/;
    if (regInt.exec(value)) {
        return true;
    }
    else {
        return false;
    }
}

function isPecent(value)
{
    var regInt=/^(0|100|100.0|[1-9]?\d(\.\d)?)$/;
    if (regInt.exec(value)) {
        return true;
    }
    else {
        return false;
    }
}

function isPecent2(value)
{
    var regInt=/^(0|100|100.0|100.00|[1-9]?\d(\.\d{1,2})?)$/;
    if (regInt.exec(value)) {
        return true;
    }
    else {
        return false;
    }
}

function isFloat(value)
{
    var regInt=/^\d+(\.\d+)?$/;
    if (regInt.exec(value)) {
        return true;
    }
    else {
        return false;
    }
}

//检查传入的值是否都是数字
function isValueAllNo(value)
{
    var charKey;
    var strErr = "";
    var strAllow="1234567890";
    for(i = 0; i < value.length; i++)
    {
        charKey = value.charAt(i);
        if(strAllow.indexOf(charKey)==-1)
            strErr+=charKey;
    }
    if(strErr!="")
    {//有错
        return false;
    }
    else
        return true;
}

/**
 * 检查对象obj的值是否都是数字，不是则报错。
 *
 */
function onlyNum(obj)
{
    var charKey;
    var strErr = "";
    var strAllow="1234567890";
    for(i=0;i<obj.value.length;i++)
    {
        charKey = obj.value.charAt(i);
        if(strAllow.indexOf(charKey)==-1)
            strErr+=charKey;
    }
    if(strErr!="")
    {
        $.dialog.alert("'"+strErr+"'为非法字符，不允许输入！");
        obj.value = "";
        return false;
    }
}

/**
 * 检查对象obj的值是否都是数字和“-”，不是则报错。
 *
 */
function Is_Phone(obj)
{
    var charKey;
    var strErr = "";
    var strAllow="1234567890-|";
    for(i=0;i<obj.value.length;i++)
    {
        charKey = obj.value.charAt(i);
        if(strAllow.indexOf(charKey)==-1)
            strErr+=charKey;
    }
    if(strErr!="")
    {
        $.dialog.alert("'"+strErr+"'为非法字符，不允许输入！");
        obj.value = "";
    }
}

/**
 * 检查对象字符串的值是否符合电话规则。  true:合法    false:非法
 *
 */
function Is_Value_Phone(value)
{
    var charKey;
    var strErr = "";
    var strAllow="1234567890-|";
    for(i=0;i<value.length;i++)
    {
        charKey = value.charAt(i);
        if(strAllow.indexOf(charKey)==-1)
            strErr+=charKey;
    }
    if(strErr!="")
    {
        return false;
    }
    return true;
}
/**
 * *
 * 检查是否为手机号,obj为js对象
 */
 function checkMobile(obj){
       var reg=/^[0-9]{10,11}$|^[0-9]{8}$/;
    var sMobile = $.trim($(obj).val());
    if(sMobile!='' && !(reg.test(sMobile))){
        $.dialog.alert("请输入正确的手机号");
        obj.value="";
        return false;
    }
    return true;
}

 function validateMobile(obj){
       var reg=/^[0-9]{10,11}$|^[0-9]{8}$/;
    var sMobile = $.trim($(obj).val());
    if(sMobile!='' && !(reg.test(sMobile))){
        return false;
    }
    return true;
}

function checkPhone(obj){
    var str = $.trim($(obj).val());
    var re=/^1[3458]\d{9}$/;
    if(str==''){
        $.dialog.alert("电话号码不能为空");
        obj.value="";
        return false;
    }
    if(str!='' && !re.test(str)){
        $.dialog.alert("请输入正确的电话号码");
        obj.value="";
        return false;
    }
    return true;
}
/**
 *
 * 判断是否为空
 *obj:javascript对象
 * 返回布尔值
 */

function hasVal(obj,str){
    var val= $.trim($(obj).val());
    if(!val){
        $.dialog.alert(str+"不能为空");
        return ;
    }
}

/**
 * 控制选择输入的日期要晚于今天
 *
 */
function ctrlDateAfterToday(obj)
{
    var now = new Date();
    var thisYear  = now.getYear();   //当前系统的年
    var thisMonth = now.getMonth();	//当前系统的月
    var thisDate  = now.getDate();	//当前系统的日

    var today=new Date(thisYear,thisMonth,thisDate,0,0,0);
    if(Date.parse(new Date(obj.value.replace(/\-/g,"/")))<=Date.parse(today))
    {
        return false;
    }
    else
        return true;
}

function OnlyUserCodeChar()
{
    var k=event.keyCode;
    var charKey=String.fromCharCode(k);
    var strAllow="1234567890abcdefghijklmnopqrstuvwxyz";
    if(strAllow.indexOf(charKey)==-1)
        event.keyCode=null;
}

function ChangeBdColor(inEvent)
{
    Obj=event.srcElement;
    if(inEvent=="Over")  Obj.style.border="1 #FFCC66 solid";
    if(inEvent=="Out")  Obj.style.border="1 #88B9E9 solid";
}

function OnlyIdChar()
{
    var k=event.keyCode;
    var objInput=event.srcElement;
    var charKey=String.fromCharCode(k);
    var strAllow="1234567890";
    var strExpend="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(objInput.value.length==17)
        strAllow=strAllow+strExpend;
    if(strAllow.indexOf(charKey)==-1)
        event.keyCode=null;
}

function SetChkState(flag)
{
    var aryChk=document.all.tags("INPUT");
    for(i=0;i<aryChk.length;i++)
        if(aryChk[i].type=="checkbox") aryChk[i].disabled=flag;
}

function SetSelValue(inSelName,inData)
{
    var objSel=document.all(inSelName);
    for(i=0;i<objSel.options.length;i++)
    {
        objSel.options[i].selected=false;
        if(objSel.options[i].value==inData) objSel.options[i].selected=true;
    }
}

function ClearAllChk()
{
    var aryChk=document.all.tags("INPUT"),i;
    for(i=0;i<aryChk.length;i++)
        if(aryChk[i].type=="checkbox") aryChk[i].checked=false;
}


function isHaveInSel(inSelName,inKey,inFlag)
{
    var objSel=document.all(inSelName);
    var result=false,i;
    for(i=0;i<objSel.length;i++)
    {
        if((inFlag=="value"?objSel.options[i].value:objSel.options[i].text)==inKey)
        {
            result=true;
            break;
        }
    }
    return result;
}

function setButtonState(flag)
{
    var aryButton=document.all.tags("BUTTON");
    var i;
    for(i=0;i<aryButton.length;i++)
    {
        aryButton[i].disabled=flag;
    }
}

function getNewNumber(serial_length,orig_number)
{
    var pre_zero_number=serial_length-String(orig_number).length;
    var i,new_number="";
    for(i=0;i<pre_zero_number;i++)
    {
        new_number=new_number+"0";
    }
    return new_number+String(orig_number);
}

function getObject(objName)
{
    return 	document.all(objName);
}

function CheckIdCard()
{
    var objIdCode=document.all("idcard");
    if(objIdCode.value.length!=15&&objIdCode.value.length!=18)
    {
        return "身份证号码必须为15位或18位！\n";
    }
    else
        return "";
}

function CheckEmail(obj)
{
    var s_Email = obj.value;
    if(s_Email==''){
        $.dialog.alert("Email不能为空\n");
        obj.value = '';
        return ;
    }
    var iPoint=s_Email.indexOf("@");
    var dotPoint=s_Email.indexOf(".");
    if(iPoint==-1||iPoint==0||dotPoint==-1||dotPoint==s_Email.length-1)
    {
        $.dialog.alert("Email格式错误\n");
        obj.value = '';
        return ;
    }
    return true;
}

function checkEmail(obj){
    var s_Email = $.trim(obj.value);
    var reg=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
   if(s_Email!='' && !reg.test(s_Email)){
        $.dialog.alert("Email格式错误\n");
        obj.value = '';
        return ;
   }
}

function validateEmail(obj){
    var s_Email = $.trim(obj.value);
   var reg=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
   if(s_Email!='' && !reg.test(s_Email)){
        return false;
   }
   return true;
}

function Is_Email(strValue)
{
    var iPoint=strValue.indexOf("@");
    var dotPoint=strValue.indexOf(".");
    if(iPoint==-1||iPoint==0||dotPoint==-1||dotPoint==strValue.length-1)
    {
        return false;
    }
    else
        return true;
}

Date.prototype.Format = function(fmt)
{
    //author: meizz
    var o =
    {
        "M+" : this.getMonth() + 1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth() + 3) / 3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
Date.prototype.addDays = function(d)
{
    this.setDate(this.getDate() + d);
};
Date.prototype.addWeeks = function(w)
{
    this.addDays(w * 7);
};
Date.prototype.addMonths= function(m)
{
    var d = this.getDate();
    this.setMonth(this.getMonth() + m);
    if (this.getDate() < d)
        this.setDate(0);
};
Date.prototype.addYears = function(y)
{
    var m = this.getMonth();
    this.setFullYear(this.getFullYear() + y);
    if (m < this.getMonth())
    {
        this.setDate(0);
    }
};

function getTodayPeriod(){
    //取得系统当前日期
    var newDateObj = new Date();			//系统当前日期
    thisYear  = newDateObj.getYear();    	//当前系统的年
    thisMonth = newDateObj.getMonth()+1;	//当前系统的月
    thisDate  = newDateObj.getDate();		//当前系统的日

    var today = thisYear + "-" + thisMonth + "-" + thisDate;
    return today + ":" + today;
}

function getToday(){
    //取得系统当前日期
    var newDateObj = new Date();			//系统当前日期
    thisYear  = newDateObj.getYear();    	//当前系统的年
    thisMonth = newDateObj.getMonth()+1;	//当前系统的月
    thisDate  = newDateObj.getDate();		//当前系统的日

    if (thisMonth <= 9) thisMonth = "0" + thisMonth;
    if (thisDate <= 9) thisDate = "0" + thisDate;
    if (thisYear < 1900) thisYear += 1900; //Firefox hack

    var today = thisYear + "-" + thisMonth + "-" + thisDate;
    return today;
}

function getTheDayLastMonth(){
    //取得系统上个月的当天
    var newDateObj = new Date();			//系统当前日期
    newDateObj.addMonths(-1);
    thisYear  = newDateObj.getYear();    	//年
    thisMonth = newDateObj.getMonth()+1;	//月
    thisDate  = newDateObj.getDate();		//日

    if (thisMonth <= 9) thisMonth = "0" + thisMonth;
    if (thisDate <= 9) thisDate = "0" + thisDate;
    if (thisYear < 1900) thisYear += 1900; //Firefox hack

    var today = thisYear + "-" + thisMonth + "-" + thisDate;
    return today;
}

function getFirstDayOfMonth(){
    //取得系统当前月第一天
    var newDateObj = new Date();			//系统当前日期
    thisYear  = newDateObj.getYear();    	//当前系统的年
    thisMonth = newDateObj.getMonth()+1;	//当前系统的月
    thisDate  = 1;		//当前系统的日

    if (thisMonth <= 9) thisMonth = "0" + thisMonth;
    if (thisYear < 1900) thisYear += 1900; //Firefox hack

    var today = thisYear + "-" + thisMonth + "-" + thisDate;
    return today;
}

function getLastDayOfMonth(){
    //取得系统当前月最后一天
    var newDateObj = new Date();			//系统当前日期
    thisYear  = newDateObj.getYear();    	//当前系统的年
    thisMonth = newDateObj.getMonth()+1;	//当前系统的月

    if (thisMonth <= 9) thisMonth = "0" + thisMonth;
    if (thisYear < 1900) thisYear += 1900; //Firefox hack
    newDateObj = new Date(thisYear,thisMonth,0);
    thisDate = newDateObj.getDate();
    var today = thisYear + "-" + thisMonth + "-" + thisDate;
    return today;
}

function changeDate(date, offset) {
    var time = date.valueOf();
    time = time + offset * 24 * 60 * 60 * 1000;
    var resultDate = new Date(time);

    thisYear  = resultDate.getYear();
    thisMonth = resultDate.getMonth()+1;
    thisDate  = resultDate.getDate();

    if (thisMonth <= 9) thisMonth = "0" + thisMonth;
    if (thisDate <= 9) thisDate = "0" + thisDate;
    if (thisYear < 1900) thisYear += 1900; //Firefox hack

    var dateFormatStr = thisYear + "-" + thisMonth + "-" + thisDate;
    return dateFormatStr;
}

function addDate(sourceDate, strInterval, num) {
    switch (strInterval) {
        case 's' :return new Date(Date.parse(sourceDate) + (1000 * num));
        case 'n' :return new Date(Date.parse(sourceDate) + (60000 * num));
        case 'h' :return new Date(Date.parse(sourceDate) + (3600000 * num));
        case 'd' :return new Date(Date.parse(sourceDate) + (86400000 * num));
        case 'w' :return new Date(Date.parse(sourceDate) + ((86400000 * 7) * num));
        case 'q' :return new Date(sourceDate.getFullYear(), (sourceDate.getMonth()) + num*3, sourceDate.getDate(), sourceDate.getHours(), sourceDate.getMinutes(), sourceDate.getSeconds());
        case 'm' :return new Date(sourceDate.getFullYear(), (sourceDate.getMonth()) + num, sourceDate.getDate(), sourceDate.getHours(), sourceDate.getMinutes(), sourceDate.getSeconds());
        case 'y' :return new Date((sourceDate.getFullYear() + num), sourceDate.getMonth(), sourceDate.getDate(), sourceDate.getHours(), sourceDate.getMinutes(), sourceDate.getSeconds());
    }
}

function isPassportAccount(s)
{
    var errorchar;
    var badchar = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_@-.";
    if (s.length < 4 || s.length > 32) {
        return false;
    }

    errorchar = ischarsinbag( s, badchar);
    if (errorchar != "") {
        return false;
    }
    else if (s.indexOf("--") != -1) {
        return false;
    }

    return true;
}

function getByteLength(s)
{
    var l = 0;
    var a = s.split("");
    for (var i=0;i<a.length;i++) {
        if (a[i].charCodeAt(0)<299) {
            l++;
        }
        else {
            l+=2;
        }
    }
    return l;
}

function confirm_Text_Length(obj, maxlimit){
    var j = 0;
    var i = 0;
    var len = $(obj).attr("value").length ;
    for(i = 0 ; i < len; i ++)
    {
        if($(obj).attr("value").charCodeAt(i)> 255)
        {
            j += 2;
        }
        else
        {
            j++;
        }

        if (j > maxlimit)
        {
            break;
        }
    }

    $(obj).attr("value",$(obj).attr("value").substring(0, i));
}

/**
 * @param begin 截取开始的索引
 * @param num 截取的长度
 */
String.prototype.chinesesubstr = (function(begin, num) {
    var ascRegexp = /[^\x00-\xFF]/g, i = 0;
    while (i < begin)
        (++i && this.charAt(i - 1).match(ascRegexp) && begin--);
    i = begin;
    var end = begin + num;
    while (i < end)
        (++i && this.charAt(i - 1).match(ascRegexp) && end--);
    return this.substring(begin, end);
});

String.prototype.len = (function() {
    var ascRegexp = /[^\x00-\xFF]/g;
    return this.replace(ascRegexp, '..').length;
});

function checkLength(obj,limit){
    var len=$(obj).val().length;

    if (len > limit) {
        obj.value=$(obj).val().chinesesubstr(0,limit);
    }
}

function fn_back(url){
    window.location.href = url;
}

//判断当前浏览器版本
function is_IE(){
    if(navigator.userAgent.indexOf("MSIE")>0) {
        return true;
    }
    return false;
}

/**
 * 遍历所有input对象,根据上传的类型和判断值判断选中
 * @author qinhaoran
 * @param input_Type : input对象的类型(例:select,radio,checkbox等)
 * @param s_Obj_Name : input对象的name
 * @param s_Value	 : 进行判断选中的值
 */
function init_Input(input_Type, s_Obj_Name, s_Value){
    var s_State = "";
    switch(input_Type){
        case "radio":
            s_State = "checked";
            break;
        case "select":
            s_State = "selected";
        default :
            break;
    }
    //遍历所有名称为s_Obj_Name的input对象(注：jquery方法实现可以不用考虑浏览器的支持情况)
    $('input[name='+s_Obj_Name+']').each(
        function(i){
            if(this.value == s_Value){
                if(input_Type == "radio"){
                    this.checked = s_State;
                }else if(input_Type == "select"){
                    this.selected = s_State;
                }
                return false;
            }
        }
    );
}

function query_Key_Saler(s_KeyWords, obj_Saler){
    var s_Saler_KeyWords = s_KeyWords == '' ? ' ' : encodeURI(s_KeyWords);
    var url = "../get_Saler_Query_List.ac?s_Saler_KeyWords="+s_Saler_KeyWords;
    var options = {datatype:"json",textfield:"FULL_NAME",valuefiled:"SALER_ID"};
    $(obj_Saler).FillOptions(url, options);
}
/**
 *
 * @param n_Str_Length
 */
function init_Description(n_Str_Length){
    $(".description_Short").each(function(obj){
        var s_Description  = $(this).text();
        if(s_Description.length > n_Str_Length ){
            $(this).html(s_Description.substring(0 , n_Str_Length) + "......");
        }
    });

    $(".description_Short").hover(
        function () {
            $(this).attr("title",$(this).parent().find(".description").text());
        }
    );
}

function init_Short_Message(n_Str_Length, class_Name, Hidden_Class_Name){
    $("."+Hidden_Class_Name).each(function(obj){
        var s_Description  = $(this).text();
        if(s_Description.length > n_Str_Length ){
            $(this).html(s_Description.substring(0 , n_Str_Length) + "......");
        }
    });

    $("."+Hidden_Class_Name).hover(
        function () {
            $(this).attr("title",$(this).parent().find("."+class_Name).text());
        }
    );
}


/*
 *字符串，去掉特殊符号;
 */
function stripscript(obj)
{
    /*
     var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——_|{}【】‘；：”“'。，、？]")
     var rs = "";
     for (var i = 0; i < s.length; i++) {
     rs = rs+this.substr(i, 1).replace(pattern, '');
     }
     return rs;
     */
    obj.value=obj.value.replace(/[\s~!@#$%^&*()_+=\-'"（）【】\\\[\]\.:;,、￥……‘’“”]+/g, "");
}
/**
 * 判断JS数组中是否有相同的元素，返回结果-> true:有   false:无
 * @param  array   JS数组格式（例：var array = new Array();）
 */
function isRepeat(array){
    var hash = {};
    for(var i in array){
        if(hash[array[i]])
            return true;
        hash[array[i]] = true;
    }
    return false;
}
/**
 * 判断JS数组中的元素是否全部相同，返回结果-> true:相同   false:不同
 * @param  array   JS数组格式（例：var array = new Array();）
 */
function isAllSame(array){
    for(var i = 0; i < (array.length -1); i++){
        if(array[i] != array[i + 1]){
            return false;
        }
    }
    return true;
}

/* 点击累减 */
function decrease(obj){
    var $input=$(obj).siblings("input"),
    $val= $.trim($input.val());
    var reg=/^[1-9]+[0-9]*$/;
    if(!reg.test($val)){
        $.dialog.alert("请输入大于零的整数");
        return ;
    }
    $val=parseInt( $val,10);
    if($val==0){
        $.dialog.alert("请输入大于零的整数");
        return ;
    }
    if($val==1){
        return ;
    }

    $val--;
    $input.val($val)
}
/* 点击累加 */
function increase(obj){
    var $input=$(obj).siblings("input");
        $val= $.trim($input.val());
    if(!isNum($val)){
        $.dialog.alert("请输入数字");
        return ;
    }
    $val=parseInt( $val,10);
    $val++;
    if($val==100){
        return ;
    }
    $input.val($val)
}

function decNum(obj){
    decrease(obj);
   var $inpt= $(obj).siblings("input[type=text]");
    accumulate();
}

function incNum(obj){
    increase(obj);
    var $inpt= $(obj).siblings("input[type=text]");
    accumulate();
}

/*  验证数字却大于等于1； */
function testNum(obj,name){
	  var charKey;
    var strErr = "";
    var strAllow="1234567890";
    for(var i=0;i<obj.value.length;i++)
    {
        charKey = obj.value.charAt(i);
        if(strAllow.indexOf(charKey)==-1)
            strErr+=charKey;
    }
    if(strErr!="")
    {
        $.dialog.alert("'"+strErr+"'为非法字符，不允许输入！");
        obj.value = "0";
        return false;
    }

    return true;
}

/* 计算总金额 */
function cal_TotalIncome(obj){
    var n_TotalIncome = 0;
    var array_Price = $.find("input[name='ProductPrice']");
    var array_Amount = $.find("input[name='ProductAmount']");
  //  var array_Years = $("input[name='AuthorizedYears']");
  //  var n_years= Number($.trim(array_Years.val()));
    for(var i=0; i < array_Price.length; i++){
        var n_Price  = parseFloat(array_Price[i].value).toFixed(2);
        var n_Amount = parseInt(array_Amount[i].value,10);
        if($.trim(array_Price[i].value) == ''){
            n_Price = 0;
        }else if($.trim(array_Amount[i].value) == ''){
            n_Amount = 0;
        }
        n_TotalIncome = parseFloat(n_Price * n_Amount).toFixed(2);
        //$("#price_" + row_Index).attr('value',n_Price);
        $("#ProductIncome").attr('value',n_TotalIncome);
        $(".full-sum>em").html(n_TotalIncome);
    }
}
