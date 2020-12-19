// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__25538__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25539__i = 0, G__25539__a = new Array(arguments.length -  0);
while (G__25539__i < G__25539__a.length) {G__25539__a[G__25539__i] = arguments[G__25539__i + 0]; ++G__25539__i;}
  args = new cljs.core.IndexedSeq(G__25539__a,0,null);
} 
return G__25538__delegate.call(this,args);};
G__25538.cljs$lang$maxFixedArity = 0;
G__25538.cljs$lang$applyTo = (function (arglist__25540){
var args = cljs.core.seq(arglist__25540);
return G__25538__delegate(args);
});
G__25538.cljs$core$IFn$_invoke$arity$variadic = G__25538__delegate;
return G__25538;
})()
);

(o.error = (function() { 
var G__25541__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25542__i = 0, G__25542__a = new Array(arguments.length -  0);
while (G__25542__i < G__25542__a.length) {G__25542__a[G__25542__i] = arguments[G__25542__i + 0]; ++G__25542__i;}
  args = new cljs.core.IndexedSeq(G__25542__a,0,null);
} 
return G__25541__delegate.call(this,args);};
G__25541.cljs$lang$maxFixedArity = 0;
G__25541.cljs$lang$applyTo = (function (arglist__25543){
var args = cljs.core.seq(arglist__25543);
return G__25541__delegate(args);
});
G__25541.cljs$core$IFn$_invoke$arity$variadic = G__25541__delegate;
return G__25541;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1608325366766
