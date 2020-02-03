({
    doInit: function(component, event, helper){
        
        //helper.getItems(component, event, helper);

        let action = component.get("c.getItems");
        action.setCallback(this, function(response){
            var state = response.getState();  
            var data = response.getReturnValue();          
            if (state === "SUCCESS") {
              component.set("v.items", data);
            }
        });
        $A.enqueueAction(action);  
    
    },

    clickCreateItem : function(component , event, helper) {       
        var validFields = component.find('newItemForm').reduce(function (validSoFar, inputCmp) { 
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);          
    
        if(validFields){           
            helper.createItem(component, event, helper);
        }           
    } 
})
