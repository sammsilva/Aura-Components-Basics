({
    clickCreateItem : function(cmp, event, helper) {
        var iName = cmp.get("v.newItem.Name");       
        var iQuantity = cmp.get("v.newItem.Quantity__c");
        var iPrice = cmp.get("v.newItem.Price__c");


        var newItemRef = cmp.get("v.newItem");
        console.log("Create Camping Item: " + JSON.stringify(newItemRef));        
        var myItems = cmp.get("v.items");
        myItems.push(newItemRef);
        console.log("Items in List: " + JSON.stringify(cmp.get("v.items"))); 
        cmp.set("v.items", myItems);       
    }
})
