

# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2024.02.06

## Done
* Call with Marco to finish up the [Sirius bindings crate](https://github.com/earth-metabolome-initiative/emi-monorepo/tree/sirius-bindings/bindings/sirius) which is getting close to be finished. We are now working on the documentation and the tests. Specifically, it needs:
  * [ ] A test for the actual execution of Sirius as part of the test suite on the GitHub actions CI.
  * [ ] A richer README that explains what is the crate, and how to use it.



## Today I learned that
I was looking for a way to format the [`html!` macro used in Yew](https://yew.rs/docs/en/next/html/index.html) in a more readable way. I found that the `html!` macro is a bit hard to read when the HTML is complex. The macro can be formatted by using the Visual Studio code extension `https://github.com/ttax00/code-yew-server`. This extension allows you to format the `html!` macro in a more readable way, among several other Yew-related features.

