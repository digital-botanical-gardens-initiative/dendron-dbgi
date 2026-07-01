

# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2024.03.07

## Todo today

* Extend the [Actix/Yew/WebSocket example](https://github.com/LucaCappelletti94/actix_yew_websockets) to also include Diesel and Postgres, using pg_notify to notify the frontend of changes in the database.
* Clean a bit more the code so to make it more reusable with less duplication.
* Add housekeeping routines for websocket, such as ping/pong and reconnection.

## Doing

## Paused

## Done

* Cleaned up as much as possible the WebSocket code, but yew makes it really hard to simplify it further.
* Extended the example to include Diesel and Postgres, using pg_notify to notify the frontend of changes in the database.
* Discovered that Diesel does not support pg_notify out of the box, so I will have to implement it myself. I have found examples using the Postgres drivers [here](https://github.dev/KenMan79/graph-node/blob/671d885ea4376dad95e93a31278b08fae2acd0a2/store/postgres/src/chain_head_listener.rs). Alternatively here they do a similar thing with [tokio](https://github.com/sfackler/rust-postgres/blob/3e4be865318ddd4a6b4493d689703db32ca3d184/tokio-postgres/tests/test/main.rs#L615-L648). I have asked informations on the Diesel forum, we will see if they have a better solution.

## Notes

* Found an example that (defines a pg_notify function for Diesel)[https://github.com/KenMan79/graph-node/blob/671d885ea4376dad95e93a31278b08fae2acd0a2/store/postgres/src/functions.rs#L10]
* Found an example that [uses pg_notify with Diesel](https://github.com/KenMan79/graph-node/blob/671d885ea4376dad95e93a31278b08fae2acd0a2/store/postgres/src/chain_head_listener.rs#L100)
