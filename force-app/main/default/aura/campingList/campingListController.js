({
    clickCreateItem : function(component , event, helper) {
        var validFields = component .find('newItemForm').reduce(function (validSoFar, inputCmp) {            
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);      

        if(validFields){           
            var newItem = component.get("v.newItem");       
            var campingItems = component.get("v.items");
            campingItems.push(JSON.parse(JSON.stringify(newItem)));
            component.set("v.items", campingItems);
            newItem = {'sObjectType': 'Camping_Item__c', 'Quantity__c': 0, 'Price__c': 0, 'Packed__c': false};
        	component.set("v.newItem", newItem);
        }         
    }
})
