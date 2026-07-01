

# This is PMA's DBGI daily open-notebook.

Today is 2024.01.18

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

Meeting ENPKG-portal with [[people.luca-cappelletti]] and [[people.marco-visani]]

Rocket is not maintained anymore

https://docs.google.com/presentation/d/16ohPnDaY8-Stq80vZKf_LZvAzHs8NI3VbN0kqWUMmc4/edit?usp=sharing

Difference in Rust between compile time and run time

Crates is equivalent to Python packages
Managed by Cargo

Usually published on crate.rs

Lifetimes can expressed " a mariage is valid as long as both partners are alive"

https://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/lifetimes.html


Visibility 

pub 
pub(crate)



Enum are specific to rust


Three types of errors 

```rust
panic!("This should have worked")
```

```rust
todo!("This has to be done")
```

```rust
unreachable!("This can't happen")
```


### Generics


```rust
pub enum Option<T> {
    Some(T),
    None,
}
```
                                                                           

Here, the T field is a generic, i.e. and arbitrary types


Rust is a **strongly typed** language.

But you can cast types. 
Integer can be converted to float.


https://en.wikipedia.org/wiki/Mantissa


https://en.wikipedia.org/wiki/Significand



Structs are similar to classes in ```python

Similar to interfaces a trait is a language

Using unsafe code is like radiation therapy. You do        nt want to use it. But sometimes you need to.


### Tools

- Web framework mostly focussed on backend
 e.g. Backend framework (e.g. Rocket)

 Alternatives:
- Actix https://actix.rs compatible with Yew (https://yew.rs)
- Tokio 


- Frontend framework (e.g. Yew)


https://github.com/flosse/rust-web-framework-comparison


- Templating framework (e.g. Jinja)


- Web Assembly (WASM)(     
)
Can I use website ? https://caniuse.com/


- Web socket    

- Object Relational Mapping (ORM)

Diesel (https://diesel.rs)
RusQlite /we wont use)

- Oauth2 is the standard for authentication


- SMTP mail client 


- Multilanguage 
https://projectfluent.org/


- HTTP request client

Environment variables
dotenvy

https://crates.io/crates/dotenvy

Rayon for parrelization








## Paused

## Done

## Notes

Adriano suggests using http://index.semanticscience.org/ see also https://github.com/vemonet/shapes-of-you to organize SPARQL queries. We should implement this for the enpkg repo. ^gtqcltnl9vto
https://github.com/Adafede/sparql ^80vefrsejm29




## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

-