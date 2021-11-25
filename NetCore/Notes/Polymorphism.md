# Polymorphism
The third pillar of Object-oriented programming.

When we overwrite declared methods on a base class where we derived from.

## Code examples
 
### Base class (parent)
```c#
class Animal
{
  public void animalSound() 
  {
    Console.WriteLine("The animal makes a sound");
  }
}
```

### Derived class (child) not overriding
By default the method from the base class will be called, ignoring the child method
```c#
class Pig : Animal
{
  public void animalSound() 
  {
    Console.WriteLine("The pig says: wee wee");
  }
}
```

// Derived class (child) overriding the base method
This way the base method is overwritten
```c#
class Pig : Animal
{
  public override void animalSound() 
  {
    Console.WriteLine("The pig says: wee wee");
  }
}
```