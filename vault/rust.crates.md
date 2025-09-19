---
id: kotmdk3ujmxdyetvxfsxqan
title: Crates
desc: ''
updated: 1757794091695
created: 1706680759301
---


# Graph libraries

## oxigraph

https://docs.rs/oxigraph/latest/oxigraph/index.html

## chrontext

Was looking for a crate similar to Ontop https://github.com/ontop/ontop
Found https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/3104223 didn't find the crate


Paper at https://ntnuopen.ntnu.no/ntnu-xmlui/bitstream/handle/11250/3104223/1-s2.0-S0957417423006516-main.pdf?sequence=1&isAllowed=y 


Found https://github.com/magbak/chrontext?tab=readme-ov-file
And https://github.com/DataTreehouse/chrontext



# SPARQL parser

https://docs.rs/spargebra/latest/spargebra/

Related crates at https://github.com/DataTreehouse 

# Wikidata

https://crates.io/crates/wikidata-rs

# iNaturalist 

Rust API client for inaturalist

https://lib.rs/crates/inaturalist







"utils/functional_properties",


### Publishing a crate

Publishing
- Ensure metadata in `Cargo.toml` is complete (description, license, repository, readme, categories, keywords). This repo includes them already.
- Make sure the package does not ship large datasets — this crate restricts the package contents via `include` to only source files and docs.
- Create a crates.io account and get an API token.
  - `cargo login <your-token>`
- Dry-run to validate the package:
  - `cargo publish --dry-run`
- Publish:
  - `cargo publish`
- Tag a release on GitHub (optional but recommended):
  - `git tag -a v0.1.0 -m "colonizer v0.1.0" && git push --tags`

License
- Dual-licensed under MIT or Apache-2.0.
- You may choose either license when using this work.