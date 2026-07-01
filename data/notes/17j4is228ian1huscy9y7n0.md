# This is Marco's daily open-notebook.

Today is 2024.02.08


## Notes
`async`/`.await` is Rust's built-in tool for writing asynchronous functions that look like synchronous code. `async` transforms a block of code into a state machine that implements a trait called `Future`. Whereas calling a blocking function in a synchronous method would block the whole thread, blocked `Future`s will yield control of the thread, allowing other Futures to run.

`block_on` blocks the current thread until the provided future has run to completion. Other executors provide more complex behavior, like scheduling multiple futures onto the same thread.

Inside an `async fn`, you can use `.await` to wait for the completion of another type that implements the `Future` trait, such as the output of another `async fn`. Unlike `block_on`, `.await` doesn't block the current thread, but instead asynchronously waits for the future to complete, allowing other tasks to run if the future is currently unable to make progress.

## Todo today
- [ ] learn differences between `async` and `block_on` in Rust, I get the idea but not sure how to use them in practice

## Doing


## Done
*  


## Todo tomorrow
- [ ]