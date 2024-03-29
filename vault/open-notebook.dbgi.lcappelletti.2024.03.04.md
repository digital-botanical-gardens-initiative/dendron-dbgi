---
id: upi1ca593dbxm7onmuj8792
title: '2024-03-04'
desc: ''
updated: 1709574778730
created: 1709572441304
traitIds:
  - open-notebook-dbgi-lcappelletti
---


# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2024.03.04

## Todo today

* Setup WebSockets for the emi-monorepo to allow the frontend to receive updates from the backend

## Doing

* Since adding the code directly would be a lot of work to debug, I started by creating a prototype in the [actix_yew_websockets](https://github.com/LucaCappelletti94/actix_yew_websockets) repo. Once it works, I will integrate it into the emi-monorepo.

## Done

* Managed to get several points of the integration of the WebSockets between the frontend and the backend working. I still do not understand severela key points of the concrete integration between frontend and backend, but I am making progress.
* Contacted authors of [ezsockets](https://github.com/gbaranski/ezsockets) and [yew-websocket](https://github.com/security-union/yew-websocket) who already worked on similar problems to ask for help. It is unclear whether their repos are still maintained, but I will try to get in touch with them.

## Notes

* One of the alternatives to Yew as a frontend framework called [Leptos](https://leptos-use.rs/network/use_websocket.html) that seems to support WebSockets out of the box. Yew used to support Websockets, but for _reasons_ they dropped support for it, I have no idea yet why. Swtching the repo at this point to Leptos would be a lot of work, but it could be a good alternative for the future. I still hope to get Yew to work for now.
* Found this tutorial on using [WebWorkers](https://github.com/sachiniyer/mnist-wasm/blob/24ba3cd78442de1c142756eb4bde5bf42f870a3c/site/src/model_agent.rs) which could be useful for part of the work with WebSockets.
* While in [this tutorial they use a Yew Agent to handle the multi-subscribers issues to a websocket](https://blog.devgenius.io/lets-build-a-websockets-project-with-rust-and-yew-0-19-60720367399f) it seems that [in the latest yew-agents](https://docs.rs/yew-agent/0.3.0/yew_agent/) they renames Agents to Workers and now handle the multi-subscriber issue out of the box with methods such as [use_reactor_subscription](https://docs.rs/yew-agent/latest/yew_agent/reactor/fn.use_reactor_subscription.html). They renamed agents to workers because they use WebWorkers under the hood, and by calling them workers they make it clear that WebWorkers are used under the hood.
* I have found this tutorial that makes use of the [use_reactor_subscription method](https://github.com/rust-adventure/yt-yew-agents-0.21/blob/5ae99276c083dac0436ff80b61949ed6a56cccf6/src/lib.rs#L14), which may be an important Rosetta stone to understand how to use WebWorkers & WebSockets with Yew.

## Todo tomorrow

* Remove [reqwasm](https://github.com/hamza1311/reqwasm/issues/34) as apparently they stopped developmemt and merged it into gloo-net.
* Continue trying to get WebSockets to work with Yew.
* Understand how to convert standard WebSocket messages, such as Text and Bytes, or more [as listed from the actix web actors](https://docs.rs/actix-web-actors/latest/actix_web_actors/ws/enum.Message.html), into a standardized and more general pourpose enumeration that may be used with Yew Agents in our application. I hope to find some documentation that is less tautological than the one I found so far.