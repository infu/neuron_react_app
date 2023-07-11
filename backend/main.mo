import Array "mo:base/Array";

module {

 // Memory
    public type Memory_react = {var name : Text};
    public func memory_react() : Memory_react {
        {
            var name = "Neutron";
        };
    };
    

    public class Init(mem:Memory_react) {

        public func /*update*/react_hello_world(name : Text) : Text {
            let prev = mem.name;
            mem.name := name;
            prev;
        };
     
    };


    
/*---NEUTRON GENERATED BEGIN---*/

public type react_hello_world_Input = (name : Text);
public type react_hello_world_Output = Text;
    
/*---NEUTRON GENERATED END---*/
}
