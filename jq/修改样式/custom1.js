 window.onload=function(){
    // settings for 'Offset Test'.
    $( '*',$('#divA3') ).click(function( event ) {
    var offset = $( this ).offset();
    event.stopPropagation();
    $( "#result" ).text( this.tagName +
        " coords ( " + offset.left + ", " + offset.top + " )" );
    });
 }
 //获取
 function getClassTest(){
    alert($('#divA1').attr('class'));
 }
 //设置和追加
 function setClassTest(){
    $('#divA1').attr('class','divStyleA1');
 }
 function appendClassTest(){
     $('#divA1').addClass('divStyleA2');
 }
 //去掉
 function removeOneClass(){
    $('#divA1').removeClass('divStyleA2');
 }
 function removeAllClass(){
    $('#divA1').removeClass($('#divA1').attr('class'));
 }
 //折叠
 function toggleClassTest(){
     $('#divA1').toggleClass('divStyleA2');
 }
 //是否具有指定样式
 function hasClassTest1(className){
    alert($('#divA1').hasClass(className));
 }
 function isMethodTest(selector){
    alert($('#divA1').is(selector));
 }
 //设置和清除
 function getBackgroundColor(){
     alert($('#divA1').css('background-color'));
 }
 function setBackgroundColor(colorName){
     $('#divA1').css('background-color',colorName);
 }
 function setBackgroundColor2(colorName){
     $('#divA1').backgroundColor=colorName;
 }
 function clearBackgroundColorFromInlineStyles(){
     $('#divA1').css('background-color','');
 }
 function setMultiStyles(){
    $('#divA1').css({border:'1px solid red',backgroundColor:'#808040'});
    //also
    //$('#divA1').css({'border':'1px solid red','backgroundColor':'#808040'});
 }
function changeHeightTest(){
    $('#divA1').height('450px');
}
//偏移量
function getOffsetTest(){
    var offset=$('#divA2').offset();
    $('#pA1').text(`result:left-${offset.left},top-${offset.top}`);
}
function setOffsetTest(){
    $('#divA2').offset({left:30,top:30});
}
function getPositionTest(){
    var positionObj=$('#divA41').position();
    alert(`left:${positionObj.left},top:${positionObj.top}`);
}