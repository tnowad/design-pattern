1. Singleton Pattern

   - Description: Ensures a class has only one instance and provides a global point of access to it.
   - Place to Apply: When you want to restrict the instantiation of a class to a single object.

2. Abstract Factory Pattern

   - Description: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
   - Place to Apply: When you want to create families of objects that are related or dependent on each other.

3. Factory Method Pattern

   - Description: Defines an interface for creating objects, but lets subclasses decide which class to instantiate.
   - Place to Apply: When you want to delegate the responsibility of object instantiation to subclasses.

4. Builder Pattern

   - Description: Separates the construction of complex objects from their representation, allowing the same construction process to create different representations.
   - Place to Apply: When you want to create complex objects step by step, or when you want to create different representations of the same object.

5. Prototype Pattern

   - Description: Creates new objects by cloning existing ones, avoiding the need for explicit instantiation.
   - Place to Apply: When you want to create new objects by cloning existing ones, and the number of distinct objects to create is small.

6. Adapter Pattern

   - Description: Converts the interface of a class into another interface that clients expect.
   - Place to Apply: When you want to make incompatible classes work together by converting the interface of one class into another interface.

7. Bridge Pattern

   - Description: Decouples an abstraction from its implementation, allowing both to vary independently.
   - Place to Apply: When you want to separate an abstraction from its implementation so that they can vary independently.

8. Composite Pattern

   - Description: Composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions uniformly.
   - Place to Apply: When you want to represent a part-whole hierarchy of objects and want clients to treat individual objects and compositions uniformly.

9. Decorator Pattern

   - Description: Attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality.
   - Place to Apply: When you want to add new behaviors or responsibilities to objects dynamically, without the need for subclassing.

10. Facade Pattern

    - Description: Provides a simplified interface to a complex subsystem, hiding its complexity from clients.
    - Place to Apply: When you want to provide a unified and simplified interface to a complex subsystem or set of interfaces.

11. Flyweight Pattern

    - Description: Shares objects to support large numbers of fine-grained objects efficiently.
    - Place to Apply: When you want to support a large number of objects with shared state efficiently, to reduce memory usage.

12. Proxy Pattern

    - Description: Provides a surrogate or placeholder for another object to control access to it.
    - Place to Apply: When you want to control the access to an object, add extra functionality before or after accessing it, or provide a level of indirection for object references.

13. Chain of Responsibility Pattern

    - Description: Allows an object to pass a request along a chain of potential handlers until one of them handles the request.
    - Place to Apply: When you want to decouple the sender of a request from its receivers and allow multiple objects to handle the request.

14. Command Pattern

    - Description: Encapsulates a request as an object, allowing clients to parameterize clients with queues, requests, and operations.
    - Place to Apply: When you want to encapsulate a request as an object, allowing you to parameterize clients with different requests, queue or log requests, and support undoable operations.

15. Interpreter Pattern

    - Description: Defines a representation for the grammar of a language and provides an interpreter to evaluate sentences in the language.
    - Place to Apply: When you want to interpret sentences in a language or when the grammar of a language is simple enough to represent as a hierarchical object structure.

16. Iterator Pattern

    - Description: Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
    - Place to Apply: When you want to provide a standard way to access elements of a collection object, hiding the underlying representation of the collection.

17. Mediator Pattern

    - Description: Defines an object that encapsulates how a set of objects interact, promoting loose coupling between them.
    - Place to Apply: When you want to define a central authority to control and coordinate the interactions between a set of objects.

18. Memento Pattern

    - Description: Captures and externalizes an object's internal state, allowing the object to be restored to this state later.
    - Place to Apply: When you want to capture the internal state of an object and restore it later, without violating encapsulation.

19. Observer Pattern

    - Description: Defines a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically.
    - Place to Apply: When you want to establish a dependency between objects, where changes in one object trigger updates in other objects automatically.

20. State Pattern

    - Description: Allows an object to alter its behavior when its internal state changes, appearing as if it changed its class.
    - Place to Apply: When you want an object to behave differently based on its internal state, without changing its class.

21. Strategy Pattern

    - Description: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from the clients that use it.
    - Place to Apply: When you want to define a family of algorithms, encapsulate each one, and make them interchangeable at runtime.

22. Template Method Pattern

    - Description: Defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It allows subclasses to redefine certain steps of the algorithm without changing its structure.
    - Place to Apply: When you want to define the outline of an algorithm and let subclasses provide certain implementation details.

23. Visitor Pattern
    - Description: Separates an algorithm from an object structure, allowing the same algorithm to work on different object structures by adding new operations without modifying the objects.
    - Place to Apply: When you want to define operations to be performed on the elements of an object structure, without changing the classes of the elements themselves.
