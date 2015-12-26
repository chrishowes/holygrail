// Compiled by ClojureScript 1.7.189 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('reagent.core');
app.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
app.core.base_component = (function app$core$base_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"This is only a testtt"], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.base_component], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map