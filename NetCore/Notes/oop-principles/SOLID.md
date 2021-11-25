# DESIGN PRINCIPLE: SOLID
> The goal is to reduce the tight coupling between classes

___
**S** - Single Responsibility Principle *(SRP)*
`A class should have only one reason to change` Every class should have a single job.

___
**O** - Open/Closed Principle
Objects or entities should be open for extension but closed to modification.

The class should be extendable but without modifying the class itself.

___
**L** - Liskov’s Substitution Principle *(LSP)*
> Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

It means that every subclass or derived class should be substitutable for their base or parent class.

___
**I** - Interface Segregation Principle *(ISP)*
> A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.

And interface should never implement methods on an object where they're not used.

The best option is to create a new interface and implement it where its methods are used.

___
**D** - Dependency Inversion Principle *(DIP)*
> Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

This principle allows for decoupling.
