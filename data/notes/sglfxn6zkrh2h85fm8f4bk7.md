

# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2024.02.05

## Notes
Call with Marco to explain what a Fuzzer is and how to use it in the Rust project.

To fuzz a Rust project, you need to create a directory `fuzz` in the root of the crate, and then add a subdirectory therein called `fuzz_targets`. 

You will need to install the `cargo-fuzz` tool with the following command:

```bash
cargo install cargo-fuzz
```

Create also a file `Cargo.toml` in the `fuzz` directory with the following content:

```toml
[package]
name = "{your crate name}-fuzz"
version = "0.0.0"
publish = false
edition = "2021"

[package.metadata]
cargo-fuzz = true

[dependencies]
libfuzzer-sys = "0.4"
arbitrary = { version = "1", features = ["derive"] }

[dependencies.{your crate name}]
path = ".."

# Prevent this from interfering with workspaces
[workspace]
members = ["."]

[profile.release]
debug = 1

[[bin]]
name = "{name of your harness}"
path = "fuzz_targets/{name of your harness}.rs"
test = false
doc = false
```

Very important is to create a `.gitignore` file in the `fuzz` directory with the following content:

```gitignore
target
corpus
artifacts
coverage
```

Then you can create a file `fuzz_targets/{name of your harness}.rs` with the following content:

```rust
#![no_main]

use arbitrary::Arbitrary;
use {name of your crate}::prelude::*;
use libfuzzer_sys::fuzz_target;

#[derive(Arbitrary, Debug)]
struct FuzzCase {
    document: Vec<String>,
}


fuzz_target!(|data: FuzzCase| {
    // Your fuzzing code here
});
```

Then you can run the fuzzer with the following command:

```bash
cargo fuzz run {name of your harness}
```