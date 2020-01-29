({
    clickCreateItem : function(cmp, event, helper) {

        var iName = cmp.find('iname').get("v.value");
        console.log(iName.length);
        if(iName.length==0)
            return;
        
        var iPrice = cmp.find('iprice').get("v.value");
        console.log(iPrice);

    }
})
