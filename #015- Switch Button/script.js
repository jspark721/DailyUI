$("input[type='checkbox']").change(function(){
    if($(this).is(":checked")){
        $(this).parent().addClass("changeBackground");
    }else{
        $(this).parent().removeClass("changeBackground");
    }
});
