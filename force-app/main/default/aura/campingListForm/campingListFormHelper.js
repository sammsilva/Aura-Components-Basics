({
    createItem : function(component, event, helper, item) {
        console.log("chamou create item");
        var addEvent = component.getEvent("addItem");
        addEvent.setParams({ "item": item });
        var clearItem = {'sObjectType': 'Camping_Item__c', 'Quantity__c': 0, 'Price__c': 0, 'Packed__c': false};
        component.set("v.newItem", clearItem);
        console.log("Event ready to Fire");
        addEvent.fire();        
    }
})
