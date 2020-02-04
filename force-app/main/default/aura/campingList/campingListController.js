({
    doInit: function(component, event, helper){       
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

    handleAddItem: function(component, event, helper) {
        var newItem = event.getParam("item");             
        let campingItems = component.get("v.items");
        let action = component.get("c.saveItem");             
        action.setParams({
            "item": newItem
        });
        action.setCallback(this, function(response){
            var state = response.getState();            
            if (state === "SUCCESS") {
                campingItems.push(JSON.parse(JSON.stringify(newItem)));
                component.set("v.items", campingItems);
            }
        });
        $A.enqueueAction(action);


    }
})
