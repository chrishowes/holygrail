// Compiled by ClojureScript 1.7.189 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__6219__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6220__i = 0, G__6220__a = new Array(arguments.length -  0);
while (G__6220__i < G__6220__a.length) {G__6220__a[G__6220__i] = arguments[G__6220__i + 0]; ++G__6220__i;}
  args = new cljs.core.IndexedSeq(G__6220__a,0);
} 
return G__6219__delegate.call(this,args);};
G__6219.cljs$lang$maxFixedArity = 0;
G__6219.cljs$lang$applyTo = (function (arglist__6221){
var args = cljs.core.seq(arglist__6221);
return G__6219__delegate(args);
});
G__6219.cljs$core$IFn$_invoke$arity$variadic = G__6219__delegate;
return G__6219;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6222__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6223__i = 0, G__6223__a = new Array(arguments.length -  0);
while (G__6223__i < G__6223__a.length) {G__6223__a[G__6223__i] = arguments[G__6223__i + 0]; ++G__6223__i;}
  args = new cljs.core.IndexedSeq(G__6223__a,0);
} 
return G__6222__delegate.call(this,args);};
G__6222.cljs$lang$maxFixedArity = 0;
G__6222.cljs$lang$applyTo = (function (arglist__6224){
var args = cljs.core.seq(arglist__6224);
return G__6222__delegate(args);
});
G__6222.cljs$core$IFn$_invoke$arity$variadic = G__6222__delegate;
return G__6222;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map