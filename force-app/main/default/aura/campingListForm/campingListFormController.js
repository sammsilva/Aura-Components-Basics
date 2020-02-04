({
    clickCreateItem: function(component, event, helper) {       
        var validFields = component.find('newItemForm').reduce(function (validSoFar, inputCmp) { 
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);          
        
        if(validFields){    
            console.log("is valid fields");
            let newItem = component.get("v.newItem");         
            helper.createItem(component,event, helper,newItem);
        } 
    }
})
