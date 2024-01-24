/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/consequent@1.2.4/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const dispatchFn=require("./dispatch"),loader=require("./loader"),managerFn=require("./manager"),actorsFn=require("./actors"),eventsFn=require("./events"),streamBuilderFn=require("./streamBuilder"),subscriptions=require("./subscriptions"),path=require("path"),apply=require("./apply"),hashqueue=require("haberdasher").queue,Flakes=require("node-flakes"),searchFn=require("./search"),os=require("os"),hostName=os.hostname(),pid=process.pid,seed=`${hostName}:${pid}`,defaultNodeId=[process.title,process.pid].join("-"),log=require("./log")("consequent"),defaults={actorCache:require("./default/actorCache")(),actorStore:require("./default/actorStore")(),eventCache:require("./default/eventCache")(),eventStore:require("./default/eventStore")(),searchAdapter:require("./default/searchAdapter")()};function initialize(e){require("./log")(e.logging||{level:"none"}),e.actorCache=e.actorCache||defaults.actorCache,e.actorStore=e.actorStore||defaults.actorStore,e.eventCache=e.eventCache||defaults.eventCache,e.eventStore=e.eventStore||defaults.eventStore,e.searchAdapter=e.searchAdapter||defaults.searchAdapter,e.fount||(e.fount=require("fount"));let r=hashqueue.create(e.concurrencyLimit||8),t=e.queue=e.queue||r,a=e.actors||path.join(process.cwd(),"./actors");return loader(e.fount,a).then((function(r){log.info(`initializing - using '${seed}' as node id seed`);let a=Flakes(seed),o=subscriptions.getActorLookup(r),s=subscriptions.getTopics(r),n=actorsFn(a,r,e.actorStore,e.actorCache,e.nodeId||defaultNodeId),u=eventsFn(e.eventStore,e.eventCache),i=managerFn(r,n,u,t),c=searchFn(i,e.searchAdapter),d=dispatchFn(a,o,i,c,r,e.queue),l=streamBuilderFn(i,d,n,u);return{apply:function(t,a){return apply(r,e.queue,a.type||a.topic,a,t)},fetch:i.getOrCreate,fetchAll:i.getOrCreateAll,find:c.find,getActorStream:l.getActors,getEventStream:l.getEvents,handle:d.handle,topics:s,actors:r}}))}module.exports=initialize;
//# sourceMappingURL=/sm/5893d8091a4d6bce66e2acf13fffcec6e6c65768adae1390686dc9f8f1f5282c.map