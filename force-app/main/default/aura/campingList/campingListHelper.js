({
    createItem : function(component, event ,helper) {
        //console.log("chamou helper");
        let newItem = component.get("v.newItem");  
        //console.log("is packed? "  + newItem.Packed__c);     
        let campingItems = component.get("v.items");
        let action = component.get("c.saveItem");     
        //console.log("passou action");  
        action.setParams({
            "item": newItem
        });
        action.setCallback(this, function(response){
            var state = response.getState();            
            if (state === "SUCCESS") {
                campingItems.push(JSON.parse(JSON.stringify(newItem)));
                component.set("v.items", campingItems);
                newItem = {'sObjectType': 'Camping_Item__c', 'Quantity__c': 0, 'Price__c': 0, 'Packed__c': false};
                component.set("v.newItem", newItem);
            }
        });
        $A.enqueueAction(action);
    },

    getItems : function(component, event, helper){
              
    }
})
