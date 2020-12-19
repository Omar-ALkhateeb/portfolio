// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.node$module$react_dom = require('react-dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__25880 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__25881 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__25881);

try{return reagent.dom.node$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__25882 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__25883 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__25883);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25882);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25880);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__25885 = arguments.length;
switch (G__25885) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.node$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__25887_25891 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__25888_25892 = null;
var count__25889_25893 = (0);
var i__25890_25894 = (0);
while(true){
if((i__25890_25894 < count__25889_25893)){
var v_25895 = cljs.core._nth.call(null,chunk__25888_25892,i__25890_25894);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_25895);


var G__25896 = seq__25887_25891;
var G__25897 = chunk__25888_25892;
var G__25898 = count__25889_25893;
var G__25899 = (i__25890_25894 + (1));
seq__25887_25891 = G__25896;
chunk__25888_25892 = G__25897;
count__25889_25893 = G__25898;
i__25890_25894 = G__25899;
continue;
} else {
var temp__5720__auto___25900 = cljs.core.seq.call(null,seq__25887_25891);
if(temp__5720__auto___25900){
var seq__25887_25901__$1 = temp__5720__auto___25900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25887_25901__$1)){
var c__4556__auto___25902 = cljs.core.chunk_first.call(null,seq__25887_25901__$1);
var G__25903 = cljs.core.chunk_rest.call(null,seq__25887_25901__$1);
var G__25904 = c__4556__auto___25902;
var G__25905 = cljs.core.count.call(null,c__4556__auto___25902);
var G__25906 = (0);
seq__25887_25891 = G__25903;
chunk__25888_25892 = G__25904;
count__25889_25893 = G__25905;
i__25890_25894 = G__25906;
continue;
} else {
var v_25907 = cljs.core.first.call(null,seq__25887_25901__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_25907);


var G__25908 = cljs.core.next.call(null,seq__25887_25901__$1);
var G__25909 = null;
var G__25910 = (0);
var G__25911 = (0);
seq__25887_25891 = G__25908;
chunk__25888_25892 = G__25909;
count__25889_25893 = G__25910;
i__25890_25894 = G__25911;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1608325367688
