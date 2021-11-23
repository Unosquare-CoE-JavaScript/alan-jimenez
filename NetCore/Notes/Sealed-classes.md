# Sealed classes

Uses:
- Restricts inheritance of a class
- Allows to protect methods from being overwritten when class is not sealed

Considerations:
- `NotInheritable` keyword is another name for `sealed` in VB.Net
- Throws a compilation error when trying to derive from a class with the `sealed` keyword

Sample of a sealed class
```c#
sealed class SealedClass
{
}
```
