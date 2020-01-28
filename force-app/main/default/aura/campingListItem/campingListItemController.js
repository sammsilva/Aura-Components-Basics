({
    packItem: function(cmp, event, helper) {    
           
        cmp.set("v.item.Packed__c",true);
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled",true);
        

    }
})
