// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__29070 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29070 == null)){
return null;
} else {
return goog.object.get(G__29070,"requires");
}
}):(function (path){
var G__29071 = goog.object.get(goog.dependencies_.requires,path);
if((G__29071 == null)){
return null;
} else {
return goog.object.getKeys(G__29071);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29072_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29072_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__29073 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29073__$1 = (((G__29073 == null))?null:goog.object.get(G__29073,"provides"));
if((G__29073__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29073__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__29074 = cljs.core.seq.call(null,provides);
var chunk__29075 = null;
var count__29076 = (0);
var i__29077 = (0);
while(true){
if((i__29077 < count__29076)){
var prov = cljs.core._nth.call(null,chunk__29075,i__29077);
var seq__29086_29098 = cljs.core.seq.call(null,requires);
var chunk__29087_29099 = null;
var count__29088_29100 = (0);
var i__29089_29101 = (0);
while(true){
if((i__29089_29101 < count__29088_29100)){
var req_29102 = cljs.core._nth.call(null,chunk__29087_29099,i__29089_29101);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29102,prov);


var G__29103 = seq__29086_29098;
var G__29104 = chunk__29087_29099;
var G__29105 = count__29088_29100;
var G__29106 = (i__29089_29101 + (1));
seq__29086_29098 = G__29103;
chunk__29087_29099 = G__29104;
count__29088_29100 = G__29105;
i__29089_29101 = G__29106;
continue;
} else {
var temp__5720__auto___29107 = cljs.core.seq.call(null,seq__29086_29098);
if(temp__5720__auto___29107){
var seq__29086_29108__$1 = temp__5720__auto___29107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29086_29108__$1)){
var c__4556__auto___29109 = cljs.core.chunk_first.call(null,seq__29086_29108__$1);
var G__29110 = cljs.core.chunk_rest.call(null,seq__29086_29108__$1);
var G__29111 = c__4556__auto___29109;
var G__29112 = cljs.core.count.call(null,c__4556__auto___29109);
var G__29113 = (0);
seq__29086_29098 = G__29110;
chunk__29087_29099 = G__29111;
count__29088_29100 = G__29112;
i__29089_29101 = G__29113;
continue;
} else {
var req_29114 = cljs.core.first.call(null,seq__29086_29108__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29114,prov);


var G__29115 = cljs.core.next.call(null,seq__29086_29108__$1);
var G__29116 = null;
var G__29117 = (0);
var G__29118 = (0);
seq__29086_29098 = G__29115;
chunk__29087_29099 = G__29116;
count__29088_29100 = G__29117;
i__29089_29101 = G__29118;
continue;
}
} else {
}
}
break;
}


var G__29119 = seq__29074;
var G__29120 = chunk__29075;
var G__29121 = count__29076;
var G__29122 = (i__29077 + (1));
seq__29074 = G__29119;
chunk__29075 = G__29120;
count__29076 = G__29121;
i__29077 = G__29122;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29074);
if(temp__5720__auto__){
var seq__29074__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29074__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29074__$1);
var G__29123 = cljs.core.chunk_rest.call(null,seq__29074__$1);
var G__29124 = c__4556__auto__;
var G__29125 = cljs.core.count.call(null,c__4556__auto__);
var G__29126 = (0);
seq__29074 = G__29123;
chunk__29075 = G__29124;
count__29076 = G__29125;
i__29077 = G__29126;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29074__$1);
var seq__29090_29127 = cljs.core.seq.call(null,requires);
var chunk__29091_29128 = null;
var count__29092_29129 = (0);
var i__29093_29130 = (0);
while(true){
if((i__29093_29130 < count__29092_29129)){
var req_29131 = cljs.core._nth.call(null,chunk__29091_29128,i__29093_29130);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29131,prov);


var G__29132 = seq__29090_29127;
var G__29133 = chunk__29091_29128;
var G__29134 = count__29092_29129;
var G__29135 = (i__29093_29130 + (1));
seq__29090_29127 = G__29132;
chunk__29091_29128 = G__29133;
count__29092_29129 = G__29134;
i__29093_29130 = G__29135;
continue;
} else {
var temp__5720__auto___29136__$1 = cljs.core.seq.call(null,seq__29090_29127);
if(temp__5720__auto___29136__$1){
var seq__29090_29137__$1 = temp__5720__auto___29136__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29090_29137__$1)){
var c__4556__auto___29138 = cljs.core.chunk_first.call(null,seq__29090_29137__$1);
var G__29139 = cljs.core.chunk_rest.call(null,seq__29090_29137__$1);
var G__29140 = c__4556__auto___29138;
var G__29141 = cljs.core.count.call(null,c__4556__auto___29138);
var G__29142 = (0);
seq__29090_29127 = G__29139;
chunk__29091_29128 = G__29140;
count__29092_29129 = G__29141;
i__29093_29130 = G__29142;
continue;
} else {
var req_29143 = cljs.core.first.call(null,seq__29090_29137__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29143,prov);


var G__29144 = cljs.core.next.call(null,seq__29090_29137__$1);
var G__29145 = null;
var G__29146 = (0);
var G__29147 = (0);
seq__29090_29127 = G__29144;
chunk__29091_29128 = G__29145;
count__29092_29129 = G__29146;
i__29093_29130 = G__29147;
continue;
}
} else {
}
}
break;
}


var G__29148 = cljs.core.next.call(null,seq__29074__$1);
var G__29149 = null;
var G__29150 = (0);
var G__29151 = (0);
seq__29074 = G__29148;
chunk__29075 = G__29149;
count__29076 = G__29150;
i__29077 = G__29151;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__29094 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29095 = null;
var count__29096 = (0);
var i__29097 = (0);
while(true){
if((i__29097 < count__29096)){
var prov = cljs.core._nth.call(null,chunk__29095,i__29097);
goog.object.forEach(deps,((function (seq__29094,chunk__29095,count__29096,i__29097,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29094,chunk__29095,count__29096,i__29097,prov,requires))
);


var G__29152 = seq__29094;
var G__29153 = chunk__29095;
var G__29154 = count__29096;
var G__29155 = (i__29097 + (1));
seq__29094 = G__29152;
chunk__29095 = G__29153;
count__29096 = G__29154;
i__29097 = G__29155;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29094);
if(temp__5720__auto__){
var seq__29094__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29094__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29094__$1);
var G__29156 = cljs.core.chunk_rest.call(null,seq__29094__$1);
var G__29157 = c__4556__auto__;
var G__29158 = cljs.core.count.call(null,c__4556__auto__);
var G__29159 = (0);
seq__29094 = G__29156;
chunk__29095 = G__29157;
count__29096 = G__29158;
i__29097 = G__29159;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29094__$1);
goog.object.forEach(deps,((function (seq__29094,chunk__29095,count__29096,i__29097,prov,seq__29094__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29094,chunk__29095,count__29096,i__29097,prov,seq__29094__$1,temp__5720__auto__,requires))
);


var G__29160 = cljs.core.next.call(null,seq__29094__$1);
var G__29161 = null;
var G__29162 = (0);
var G__29163 = (0);
seq__29094 = G__29160;
chunk__29095 = G__29161;
count__29096 = G__29162;
i__29097 = G__29163;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29164){
var vec__29165 = p__29164;
var _ = cljs.core.nth.call(null,vec__29165,(0),null);
var v = cljs.core.nth.call(null,vec__29165,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__29168){
var vec__29169 = p__29168;
var k = cljs.core.nth.call(null,vec__29169,(0),null);
var v = cljs.core.nth.call(null,vec__29169,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29181_29189 = cljs.core.seq.call(null,deps);
var chunk__29182_29190 = null;
var count__29183_29191 = (0);
var i__29184_29192 = (0);
while(true){
if((i__29184_29192 < count__29183_29191)){
var dep_29193 = cljs.core._nth.call(null,chunk__29182_29190,i__29184_29192);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29193;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29193));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29193,(depth + (1)),state);
} else {
}


var G__29194 = seq__29181_29189;
var G__29195 = chunk__29182_29190;
var G__29196 = count__29183_29191;
var G__29197 = (i__29184_29192 + (1));
seq__29181_29189 = G__29194;
chunk__29182_29190 = G__29195;
count__29183_29191 = G__29196;
i__29184_29192 = G__29197;
continue;
} else {
var temp__5720__auto___29198 = cljs.core.seq.call(null,seq__29181_29189);
if(temp__5720__auto___29198){
var seq__29181_29199__$1 = temp__5720__auto___29198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29181_29199__$1)){
var c__4556__auto___29200 = cljs.core.chunk_first.call(null,seq__29181_29199__$1);
var G__29201 = cljs.core.chunk_rest.call(null,seq__29181_29199__$1);
var G__29202 = c__4556__auto___29200;
var G__29203 = cljs.core.count.call(null,c__4556__auto___29200);
var G__29204 = (0);
seq__29181_29189 = G__29201;
chunk__29182_29190 = G__29202;
count__29183_29191 = G__29203;
i__29184_29192 = G__29204;
continue;
} else {
var dep_29205 = cljs.core.first.call(null,seq__29181_29199__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29205;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29205));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29205,(depth + (1)),state);
} else {
}


var G__29206 = cljs.core.next.call(null,seq__29181_29199__$1);
var G__29207 = null;
var G__29208 = (0);
var G__29209 = (0);
seq__29181_29189 = G__29206;
chunk__29182_29190 = G__29207;
count__29183_29191 = G__29208;
i__29184_29192 = G__29209;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29185){
var vec__29186 = p__29185;
var seq__29187 = cljs.core.seq.call(null,vec__29186);
var first__29188 = cljs.core.first.call(null,seq__29187);
var seq__29187__$1 = cljs.core.next.call(null,seq__29187);
var x = first__29188;
var xs = seq__29187__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29172_SHARP_){
return clojure.set.difference.call(null,p1__29172_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29210_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29210_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29211 = cljs.core.seq.call(null,provides);
var chunk__29212 = null;
var count__29213 = (0);
var i__29214 = (0);
while(true){
if((i__29214 < count__29213)){
var prov = cljs.core._nth.call(null,chunk__29212,i__29214);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29223_29231 = cljs.core.seq.call(null,requires);
var chunk__29224_29232 = null;
var count__29225_29233 = (0);
var i__29226_29234 = (0);
while(true){
if((i__29226_29234 < count__29225_29233)){
var req_29235 = cljs.core._nth.call(null,chunk__29224_29232,i__29226_29234);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29235,prov);


var G__29236 = seq__29223_29231;
var G__29237 = chunk__29224_29232;
var G__29238 = count__29225_29233;
var G__29239 = (i__29226_29234 + (1));
seq__29223_29231 = G__29236;
chunk__29224_29232 = G__29237;
count__29225_29233 = G__29238;
i__29226_29234 = G__29239;
continue;
} else {
var temp__5720__auto___29240 = cljs.core.seq.call(null,seq__29223_29231);
if(temp__5720__auto___29240){
var seq__29223_29241__$1 = temp__5720__auto___29240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29223_29241__$1)){
var c__4556__auto___29242 = cljs.core.chunk_first.call(null,seq__29223_29241__$1);
var G__29243 = cljs.core.chunk_rest.call(null,seq__29223_29241__$1);
var G__29244 = c__4556__auto___29242;
var G__29245 = cljs.core.count.call(null,c__4556__auto___29242);
var G__29246 = (0);
seq__29223_29231 = G__29243;
chunk__29224_29232 = G__29244;
count__29225_29233 = G__29245;
i__29226_29234 = G__29246;
continue;
} else {
var req_29247 = cljs.core.first.call(null,seq__29223_29241__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29247,prov);


var G__29248 = cljs.core.next.call(null,seq__29223_29241__$1);
var G__29249 = null;
var G__29250 = (0);
var G__29251 = (0);
seq__29223_29231 = G__29248;
chunk__29224_29232 = G__29249;
count__29225_29233 = G__29250;
i__29226_29234 = G__29251;
continue;
}
} else {
}
}
break;
}


var G__29252 = seq__29211;
var G__29253 = chunk__29212;
var G__29254 = count__29213;
var G__29255 = (i__29214 + (1));
seq__29211 = G__29252;
chunk__29212 = G__29253;
count__29213 = G__29254;
i__29214 = G__29255;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29211);
if(temp__5720__auto__){
var seq__29211__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29211__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29211__$1);
var G__29256 = cljs.core.chunk_rest.call(null,seq__29211__$1);
var G__29257 = c__4556__auto__;
var G__29258 = cljs.core.count.call(null,c__4556__auto__);
var G__29259 = (0);
seq__29211 = G__29256;
chunk__29212 = G__29257;
count__29213 = G__29258;
i__29214 = G__29259;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29211__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29227_29260 = cljs.core.seq.call(null,requires);
var chunk__29228_29261 = null;
var count__29229_29262 = (0);
var i__29230_29263 = (0);
while(true){
if((i__29230_29263 < count__29229_29262)){
var req_29264 = cljs.core._nth.call(null,chunk__29228_29261,i__29230_29263);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29264,prov);


var G__29265 = seq__29227_29260;
var G__29266 = chunk__29228_29261;
var G__29267 = count__29229_29262;
var G__29268 = (i__29230_29263 + (1));
seq__29227_29260 = G__29265;
chunk__29228_29261 = G__29266;
count__29229_29262 = G__29267;
i__29230_29263 = G__29268;
continue;
} else {
var temp__5720__auto___29269__$1 = cljs.core.seq.call(null,seq__29227_29260);
if(temp__5720__auto___29269__$1){
var seq__29227_29270__$1 = temp__5720__auto___29269__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29227_29270__$1)){
var c__4556__auto___29271 = cljs.core.chunk_first.call(null,seq__29227_29270__$1);
var G__29272 = cljs.core.chunk_rest.call(null,seq__29227_29270__$1);
var G__29273 = c__4556__auto___29271;
var G__29274 = cljs.core.count.call(null,c__4556__auto___29271);
var G__29275 = (0);
seq__29227_29260 = G__29272;
chunk__29228_29261 = G__29273;
count__29229_29262 = G__29274;
i__29230_29263 = G__29275;
continue;
} else {
var req_29276 = cljs.core.first.call(null,seq__29227_29270__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29276,prov);


var G__29277 = cljs.core.next.call(null,seq__29227_29270__$1);
var G__29278 = null;
var G__29279 = (0);
var G__29280 = (0);
seq__29227_29260 = G__29277;
chunk__29228_29261 = G__29278;
count__29229_29262 = G__29279;
i__29230_29263 = G__29280;
continue;
}
} else {
}
}
break;
}


var G__29281 = cljs.core.next.call(null,seq__29211__$1);
var G__29282 = null;
var G__29283 = (0);
var G__29284 = (0);
seq__29211 = G__29281;
chunk__29212 = G__29282;
count__29213 = G__29283;
i__29214 = G__29284;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29285_29289 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29286_29290 = null;
var count__29287_29291 = (0);
var i__29288_29292 = (0);
while(true){
if((i__29288_29292 < count__29287_29291)){
var ns_29293 = cljs.core._nth.call(null,chunk__29286_29290,i__29288_29292);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29293);


var G__29294 = seq__29285_29289;
var G__29295 = chunk__29286_29290;
var G__29296 = count__29287_29291;
var G__29297 = (i__29288_29292 + (1));
seq__29285_29289 = G__29294;
chunk__29286_29290 = G__29295;
count__29287_29291 = G__29296;
i__29288_29292 = G__29297;
continue;
} else {
var temp__5720__auto___29298 = cljs.core.seq.call(null,seq__29285_29289);
if(temp__5720__auto___29298){
var seq__29285_29299__$1 = temp__5720__auto___29298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29285_29299__$1)){
var c__4556__auto___29300 = cljs.core.chunk_first.call(null,seq__29285_29299__$1);
var G__29301 = cljs.core.chunk_rest.call(null,seq__29285_29299__$1);
var G__29302 = c__4556__auto___29300;
var G__29303 = cljs.core.count.call(null,c__4556__auto___29300);
var G__29304 = (0);
seq__29285_29289 = G__29301;
chunk__29286_29290 = G__29302;
count__29287_29291 = G__29303;
i__29288_29292 = G__29304;
continue;
} else {
var ns_29305 = cljs.core.first.call(null,seq__29285_29299__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29305);


var G__29306 = cljs.core.next.call(null,seq__29285_29299__$1);
var G__29307 = null;
var G__29308 = (0);
var G__29309 = (0);
seq__29285_29289 = G__29306;
chunk__29286_29290 = G__29307;
count__29287_29291 = G__29308;
i__29288_29292 = G__29309;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__29310__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29311__i = 0, G__29311__a = new Array(arguments.length -  0);
while (G__29311__i < G__29311__a.length) {G__29311__a[G__29311__i] = arguments[G__29311__i + 0]; ++G__29311__i;}
  args = new cljs.core.IndexedSeq(G__29311__a,0,null);
} 
return G__29310__delegate.call(this,args);};
G__29310.cljs$lang$maxFixedArity = 0;
G__29310.cljs$lang$applyTo = (function (arglist__29312){
var args = cljs.core.seq(arglist__29312);
return G__29310__delegate(args);
});
G__29310.cljs$core$IFn$_invoke$arity$variadic = G__29310__delegate;
return G__29310;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29313_SHARP_,p2__29314_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29313_SHARP_)),p2__29314_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29315_SHARP_,p2__29316_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29315_SHARP_),p2__29316_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29317 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29317.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29317.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29317;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29318){if((e29318 instanceof Error)){
var e = e29318;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29318;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29319){if((e29319 instanceof Error)){
var e = e29319;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29319;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29320 = cljs.core._EQ_;
var expr__29321 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29320.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29321))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29320.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29321))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29320.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29321))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29323,callback){
var map__29324 = p__29323;
var map__29324__$1 = (((((!((map__29324 == null))))?(((((map__29324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29324):map__29324);
var file_msg = map__29324__$1;
var request_url = cljs.core.get.call(null,map__29324__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_29362){
var state_val_29363 = (state_29362[(1)]);
if((state_val_29363 === (7))){
var inst_29358 = (state_29362[(2)]);
var state_29362__$1 = state_29362;
var statearr_29364_29390 = state_29362__$1;
(statearr_29364_29390[(2)] = inst_29358);

(statearr_29364_29390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (1))){
var state_29362__$1 = state_29362;
var statearr_29365_29391 = state_29362__$1;
(statearr_29365_29391[(2)] = null);

(statearr_29365_29391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (4))){
var inst_29328 = (state_29362[(7)]);
var inst_29328__$1 = (state_29362[(2)]);
var state_29362__$1 = (function (){var statearr_29366 = state_29362;
(statearr_29366[(7)] = inst_29328__$1);

return statearr_29366;
})();
if(cljs.core.truth_(inst_29328__$1)){
var statearr_29367_29392 = state_29362__$1;
(statearr_29367_29392[(1)] = (5));

} else {
var statearr_29368_29393 = state_29362__$1;
(statearr_29368_29393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (15))){
var inst_29341 = (state_29362[(8)]);
var inst_29343 = (state_29362[(9)]);
var inst_29345 = inst_29343.call(null,inst_29341);
var state_29362__$1 = state_29362;
var statearr_29369_29394 = state_29362__$1;
(statearr_29369_29394[(2)] = inst_29345);

(statearr_29369_29394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (13))){
var inst_29352 = (state_29362[(2)]);
var state_29362__$1 = state_29362;
var statearr_29370_29395 = state_29362__$1;
(statearr_29370_29395[(2)] = inst_29352);

(statearr_29370_29395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (6))){
var state_29362__$1 = state_29362;
var statearr_29371_29396 = state_29362__$1;
(statearr_29371_29396[(2)] = null);

(statearr_29371_29396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (17))){
var inst_29349 = (state_29362[(2)]);
var state_29362__$1 = state_29362;
var statearr_29372_29397 = state_29362__$1;
(statearr_29372_29397[(2)] = inst_29349);

(statearr_29372_29397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (3))){
var inst_29360 = (state_29362[(2)]);
var state_29362__$1 = state_29362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29362__$1,inst_29360);
} else {
if((state_val_29363 === (12))){
var state_29362__$1 = state_29362;
var statearr_29373_29398 = state_29362__$1;
(statearr_29373_29398[(2)] = null);

(statearr_29373_29398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (2))){
var state_29362__$1 = state_29362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29362__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29363 === (11))){
var inst_29333 = (state_29362[(10)]);
var inst_29339 = figwheel.client.file_reloading.blocking_load.call(null,inst_29333);
var state_29362__$1 = state_29362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29362__$1,(14),inst_29339);
} else {
if((state_val_29363 === (9))){
var inst_29333 = (state_29362[(10)]);
var state_29362__$1 = state_29362;
if(cljs.core.truth_(inst_29333)){
var statearr_29374_29399 = state_29362__$1;
(statearr_29374_29399[(1)] = (11));

} else {
var statearr_29375_29400 = state_29362__$1;
(statearr_29375_29400[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (5))){
var inst_29334 = (state_29362[(11)]);
var inst_29328 = (state_29362[(7)]);
var inst_29333 = cljs.core.nth.call(null,inst_29328,(0),null);
var inst_29334__$1 = cljs.core.nth.call(null,inst_29328,(1),null);
var state_29362__$1 = (function (){var statearr_29376 = state_29362;
(statearr_29376[(11)] = inst_29334__$1);

(statearr_29376[(10)] = inst_29333);

return statearr_29376;
})();
if(cljs.core.truth_(inst_29334__$1)){
var statearr_29377_29401 = state_29362__$1;
(statearr_29377_29401[(1)] = (8));

} else {
var statearr_29378_29402 = state_29362__$1;
(statearr_29378_29402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (14))){
var inst_29333 = (state_29362[(10)]);
var inst_29343 = (state_29362[(9)]);
var inst_29341 = (state_29362[(2)]);
var inst_29342 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29343__$1 = cljs.core.get.call(null,inst_29342,inst_29333);
var state_29362__$1 = (function (){var statearr_29379 = state_29362;
(statearr_29379[(8)] = inst_29341);

(statearr_29379[(9)] = inst_29343__$1);

return statearr_29379;
})();
if(cljs.core.truth_(inst_29343__$1)){
var statearr_29380_29403 = state_29362__$1;
(statearr_29380_29403[(1)] = (15));

} else {
var statearr_29381_29404 = state_29362__$1;
(statearr_29381_29404[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (16))){
var inst_29341 = (state_29362[(8)]);
var inst_29347 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29341);
var state_29362__$1 = state_29362;
var statearr_29382_29405 = state_29362__$1;
(statearr_29382_29405[(2)] = inst_29347);

(statearr_29382_29405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (10))){
var inst_29354 = (state_29362[(2)]);
var state_29362__$1 = (function (){var statearr_29383 = state_29362;
(statearr_29383[(12)] = inst_29354);

return statearr_29383;
})();
var statearr_29384_29406 = state_29362__$1;
(statearr_29384_29406[(2)] = null);

(statearr_29384_29406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29363 === (8))){
var inst_29334 = (state_29362[(11)]);
var inst_29336 = eval(inst_29334);
var state_29362__$1 = state_29362;
var statearr_29385_29407 = state_29362__$1;
(statearr_29385_29407[(2)] = inst_29336);

(statearr_29385_29407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__23341__auto__ = null;
var figwheel$client$file_reloading$state_machine__23341__auto____0 = (function (){
var statearr_29386 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29386[(0)] = figwheel$client$file_reloading$state_machine__23341__auto__);

(statearr_29386[(1)] = (1));

return statearr_29386;
});
var figwheel$client$file_reloading$state_machine__23341__auto____1 = (function (state_29362){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_29362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e29387){if((e29387 instanceof Object)){
var ex__23344__auto__ = e29387;
var statearr_29388_29408 = state_29362;
(statearr_29388_29408[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29409 = state_29362;
state_29362 = G__29409;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23341__auto__ = function(state_29362){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23341__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23341__auto____1.call(this,state_29362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23341__auto____0;
figwheel$client$file_reloading$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23341__auto____1;
return figwheel$client$file_reloading$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_29389 = f__23436__auto__.call(null);
(statearr_29389[(6)] = c__23435__auto__);

return statearr_29389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

return c__23435__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29411 = arguments.length;
switch (G__29411) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29413,callback){
var map__29414 = p__29413;
var map__29414__$1 = (((((!((map__29414 == null))))?(((((map__29414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29414):map__29414);
var file_msg = map__29414__$1;
var namespace = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29416){
var map__29417 = p__29416;
var map__29417__$1 = (((((!((map__29417 == null))))?(((((map__29417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29417):map__29417);
var file_msg = map__29417__$1;
var namespace = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29419){
var map__29420 = p__29419;
var map__29420__$1 = (((((!((map__29420 == null))))?(((((map__29420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29420):map__29420);
var file_msg = map__29420__$1;
var namespace = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29422,callback){
var map__29423 = p__29422;
var map__29423__$1 = (((((!((map__29423 == null))))?(((((map__29423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423):map__29423);
var file_msg = map__29423__$1;
var request_url = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23435__auto___29473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_29458){
var state_val_29459 = (state_29458[(1)]);
if((state_val_29459 === (1))){
var inst_29432 = cljs.core.seq.call(null,files);
var inst_29433 = cljs.core.first.call(null,inst_29432);
var inst_29434 = cljs.core.next.call(null,inst_29432);
var inst_29435 = files;
var state_29458__$1 = (function (){var statearr_29460 = state_29458;
(statearr_29460[(7)] = inst_29433);

(statearr_29460[(8)] = inst_29434);

(statearr_29460[(9)] = inst_29435);

return statearr_29460;
})();
var statearr_29461_29474 = state_29458__$1;
(statearr_29461_29474[(2)] = null);

(statearr_29461_29474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (2))){
var inst_29441 = (state_29458[(10)]);
var inst_29435 = (state_29458[(9)]);
var inst_29440 = cljs.core.seq.call(null,inst_29435);
var inst_29441__$1 = cljs.core.first.call(null,inst_29440);
var inst_29442 = cljs.core.next.call(null,inst_29440);
var inst_29443 = (inst_29441__$1 == null);
var inst_29444 = cljs.core.not.call(null,inst_29443);
var state_29458__$1 = (function (){var statearr_29462 = state_29458;
(statearr_29462[(10)] = inst_29441__$1);

(statearr_29462[(11)] = inst_29442);

return statearr_29462;
})();
if(inst_29444){
var statearr_29463_29475 = state_29458__$1;
(statearr_29463_29475[(1)] = (4));

} else {
var statearr_29464_29476 = state_29458__$1;
(statearr_29464_29476[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (3))){
var inst_29456 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29458__$1,inst_29456);
} else {
if((state_val_29459 === (4))){
var inst_29441 = (state_29458[(10)]);
var inst_29446 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29441);
var state_29458__$1 = state_29458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29458__$1,(7),inst_29446);
} else {
if((state_val_29459 === (5))){
var inst_29452 = cljs.core.async.close_BANG_.call(null,out);
var state_29458__$1 = state_29458;
var statearr_29465_29477 = state_29458__$1;
(statearr_29465_29477[(2)] = inst_29452);

(statearr_29465_29477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (6))){
var inst_29454 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
var statearr_29466_29478 = state_29458__$1;
(statearr_29466_29478[(2)] = inst_29454);

(statearr_29466_29478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (7))){
var inst_29442 = (state_29458[(11)]);
var inst_29448 = (state_29458[(2)]);
var inst_29449 = cljs.core.async.put_BANG_.call(null,out,inst_29448);
var inst_29435 = inst_29442;
var state_29458__$1 = (function (){var statearr_29467 = state_29458;
(statearr_29467[(12)] = inst_29449);

(statearr_29467[(9)] = inst_29435);

return statearr_29467;
})();
var statearr_29468_29479 = state_29458__$1;
(statearr_29468_29479[(2)] = null);

(statearr_29468_29479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto____0 = (function (){
var statearr_29469 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29469[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto__);

(statearr_29469[(1)] = (1));

return statearr_29469;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto____1 = (function (state_29458){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_29458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e29470){if((e29470 instanceof Object)){
var ex__23344__auto__ = e29470;
var statearr_29471_29480 = state_29458;
(statearr_29471_29480[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29481 = state_29458;
state_29458 = G__29481;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto__ = function(state_29458){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto____1.call(this,state_29458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_29472 = f__23436__auto__.call(null);
(statearr_29472[(6)] = c__23435__auto___29473);

return statearr_29472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29482,opts){
var map__29483 = p__29482;
var map__29483__$1 = (((((!((map__29483 == null))))?(((((map__29483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29483):map__29483);
var eval_body = cljs.core.get.call(null,map__29483__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29485){var e = e29485;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29486_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29486_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29487){
var vec__29488 = p__29487;
var k = cljs.core.nth.call(null,vec__29488,(0),null);
var v = cljs.core.nth.call(null,vec__29488,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29491){
var vec__29492 = p__29491;
var k = cljs.core.nth.call(null,vec__29492,(0),null);
var v = cljs.core.nth.call(null,vec__29492,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29498,p__29499){
var map__29500 = p__29498;
var map__29500__$1 = (((((!((map__29500 == null))))?(((((map__29500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29500):map__29500);
var opts = map__29500__$1;
var before_jsload = cljs.core.get.call(null,map__29500__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29500__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29500__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29501 = p__29499;
var map__29501__$1 = (((((!((map__29501 == null))))?(((((map__29501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29501):map__29501);
var msg = map__29501__$1;
var files = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_29655){
var state_val_29656 = (state_29655[(1)]);
if((state_val_29656 === (7))){
var inst_29518 = (state_29655[(7)]);
var inst_29517 = (state_29655[(8)]);
var inst_29515 = (state_29655[(9)]);
var inst_29516 = (state_29655[(10)]);
var inst_29523 = cljs.core._nth.call(null,inst_29516,inst_29518);
var inst_29524 = figwheel.client.file_reloading.eval_body.call(null,inst_29523,opts);
var inst_29525 = (inst_29518 + (1));
var tmp29657 = inst_29517;
var tmp29658 = inst_29515;
var tmp29659 = inst_29516;
var inst_29515__$1 = tmp29658;
var inst_29516__$1 = tmp29659;
var inst_29517__$1 = tmp29657;
var inst_29518__$1 = inst_29525;
var state_29655__$1 = (function (){var statearr_29660 = state_29655;
(statearr_29660[(7)] = inst_29518__$1);

(statearr_29660[(11)] = inst_29524);

(statearr_29660[(8)] = inst_29517__$1);

(statearr_29660[(9)] = inst_29515__$1);

(statearr_29660[(10)] = inst_29516__$1);

return statearr_29660;
})();
var statearr_29661_29744 = state_29655__$1;
(statearr_29661_29744[(2)] = null);

(statearr_29661_29744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (20))){
var inst_29558 = (state_29655[(12)]);
var inst_29566 = figwheel.client.file_reloading.sort_files.call(null,inst_29558);
var state_29655__$1 = state_29655;
var statearr_29662_29745 = state_29655__$1;
(statearr_29662_29745[(2)] = inst_29566);

(statearr_29662_29745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (27))){
var state_29655__$1 = state_29655;
var statearr_29663_29746 = state_29655__$1;
(statearr_29663_29746[(2)] = null);

(statearr_29663_29746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (1))){
var inst_29507 = (state_29655[(13)]);
var inst_29504 = before_jsload.call(null,files);
var inst_29505 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29506 = (function (){return (function (p1__29495_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29495_SHARP_);
});
})();
var inst_29507__$1 = cljs.core.filter.call(null,inst_29506,files);
var inst_29508 = cljs.core.not_empty.call(null,inst_29507__$1);
var state_29655__$1 = (function (){var statearr_29664 = state_29655;
(statearr_29664[(14)] = inst_29505);

(statearr_29664[(13)] = inst_29507__$1);

(statearr_29664[(15)] = inst_29504);

return statearr_29664;
})();
if(cljs.core.truth_(inst_29508)){
var statearr_29665_29747 = state_29655__$1;
(statearr_29665_29747[(1)] = (2));

} else {
var statearr_29666_29748 = state_29655__$1;
(statearr_29666_29748[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (24))){
var state_29655__$1 = state_29655;
var statearr_29667_29749 = state_29655__$1;
(statearr_29667_29749[(2)] = null);

(statearr_29667_29749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (39))){
var inst_29608 = (state_29655[(16)]);
var state_29655__$1 = state_29655;
var statearr_29668_29750 = state_29655__$1;
(statearr_29668_29750[(2)] = inst_29608);

(statearr_29668_29750[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (46))){
var inst_29650 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
var statearr_29669_29751 = state_29655__$1;
(statearr_29669_29751[(2)] = inst_29650);

(statearr_29669_29751[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (4))){
var inst_29552 = (state_29655[(2)]);
var inst_29553 = cljs.core.List.EMPTY;
var inst_29554 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29553);
var inst_29555 = (function (){return (function (p1__29496_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29496_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29496_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29496_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29556 = cljs.core.filter.call(null,inst_29555,files);
var inst_29557 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29558 = cljs.core.concat.call(null,inst_29556,inst_29557);
var state_29655__$1 = (function (){var statearr_29670 = state_29655;
(statearr_29670[(17)] = inst_29552);

(statearr_29670[(18)] = inst_29554);

(statearr_29670[(12)] = inst_29558);

return statearr_29670;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29671_29752 = state_29655__$1;
(statearr_29671_29752[(1)] = (16));

} else {
var statearr_29672_29753 = state_29655__$1;
(statearr_29672_29753[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (15))){
var inst_29542 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
var statearr_29673_29754 = state_29655__$1;
(statearr_29673_29754[(2)] = inst_29542);

(statearr_29673_29754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (21))){
var inst_29568 = (state_29655[(19)]);
var inst_29568__$1 = (state_29655[(2)]);
var inst_29569 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29568__$1);
var state_29655__$1 = (function (){var statearr_29674 = state_29655;
(statearr_29674[(19)] = inst_29568__$1);

return statearr_29674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29655__$1,(22),inst_29569);
} else {
if((state_val_29656 === (31))){
var inst_29653 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29655__$1,inst_29653);
} else {
if((state_val_29656 === (32))){
var inst_29608 = (state_29655[(16)]);
var inst_29613 = inst_29608.cljs$lang$protocol_mask$partition0$;
var inst_29614 = (inst_29613 & (64));
var inst_29615 = inst_29608.cljs$core$ISeq$;
var inst_29616 = (cljs.core.PROTOCOL_SENTINEL === inst_29615);
var inst_29617 = ((inst_29614) || (inst_29616));
var state_29655__$1 = state_29655;
if(cljs.core.truth_(inst_29617)){
var statearr_29675_29755 = state_29655__$1;
(statearr_29675_29755[(1)] = (35));

} else {
var statearr_29676_29756 = state_29655__$1;
(statearr_29676_29756[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (40))){
var inst_29630 = (state_29655[(20)]);
var inst_29629 = (state_29655[(2)]);
var inst_29630__$1 = cljs.core.get.call(null,inst_29629,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29631 = cljs.core.get.call(null,inst_29629,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29632 = cljs.core.not_empty.call(null,inst_29630__$1);
var state_29655__$1 = (function (){var statearr_29677 = state_29655;
(statearr_29677[(20)] = inst_29630__$1);

(statearr_29677[(21)] = inst_29631);

return statearr_29677;
})();
if(cljs.core.truth_(inst_29632)){
var statearr_29678_29757 = state_29655__$1;
(statearr_29678_29757[(1)] = (41));

} else {
var statearr_29679_29758 = state_29655__$1;
(statearr_29679_29758[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (33))){
var state_29655__$1 = state_29655;
var statearr_29680_29759 = state_29655__$1;
(statearr_29680_29759[(2)] = false);

(statearr_29680_29759[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (13))){
var inst_29528 = (state_29655[(22)]);
var inst_29532 = cljs.core.chunk_first.call(null,inst_29528);
var inst_29533 = cljs.core.chunk_rest.call(null,inst_29528);
var inst_29534 = cljs.core.count.call(null,inst_29532);
var inst_29515 = inst_29533;
var inst_29516 = inst_29532;
var inst_29517 = inst_29534;
var inst_29518 = (0);
var state_29655__$1 = (function (){var statearr_29681 = state_29655;
(statearr_29681[(7)] = inst_29518);

(statearr_29681[(8)] = inst_29517);

(statearr_29681[(9)] = inst_29515);

(statearr_29681[(10)] = inst_29516);

return statearr_29681;
})();
var statearr_29682_29760 = state_29655__$1;
(statearr_29682_29760[(2)] = null);

(statearr_29682_29760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (22))){
var inst_29572 = (state_29655[(23)]);
var inst_29568 = (state_29655[(19)]);
var inst_29571 = (state_29655[(24)]);
var inst_29576 = (state_29655[(25)]);
var inst_29571__$1 = (state_29655[(2)]);
var inst_29572__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29571__$1);
var inst_29573 = (function (){var all_files = inst_29568;
var res_SINGLEQUOTE_ = inst_29571__$1;
var res = inst_29572__$1;
return (function (p1__29497_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29497_SHARP_));
});
})();
var inst_29574 = cljs.core.filter.call(null,inst_29573,inst_29571__$1);
var inst_29575 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29576__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29575);
var inst_29577 = cljs.core.not_empty.call(null,inst_29576__$1);
var state_29655__$1 = (function (){var statearr_29683 = state_29655;
(statearr_29683[(23)] = inst_29572__$1);

(statearr_29683[(26)] = inst_29574);

(statearr_29683[(24)] = inst_29571__$1);

(statearr_29683[(25)] = inst_29576__$1);

return statearr_29683;
})();
if(cljs.core.truth_(inst_29577)){
var statearr_29684_29761 = state_29655__$1;
(statearr_29684_29761[(1)] = (23));

} else {
var statearr_29685_29762 = state_29655__$1;
(statearr_29685_29762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (36))){
var state_29655__$1 = state_29655;
var statearr_29686_29763 = state_29655__$1;
(statearr_29686_29763[(2)] = false);

(statearr_29686_29763[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (41))){
var inst_29630 = (state_29655[(20)]);
var inst_29634 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29635 = cljs.core.map.call(null,inst_29634,inst_29630);
var inst_29636 = cljs.core.pr_str.call(null,inst_29635);
var inst_29637 = ["figwheel-no-load meta-data: ",inst_29636].join('');
var inst_29638 = figwheel.client.utils.log.call(null,inst_29637);
var state_29655__$1 = state_29655;
var statearr_29687_29764 = state_29655__$1;
(statearr_29687_29764[(2)] = inst_29638);

(statearr_29687_29764[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (43))){
var inst_29631 = (state_29655[(21)]);
var inst_29641 = (state_29655[(2)]);
var inst_29642 = cljs.core.not_empty.call(null,inst_29631);
var state_29655__$1 = (function (){var statearr_29688 = state_29655;
(statearr_29688[(27)] = inst_29641);

return statearr_29688;
})();
if(cljs.core.truth_(inst_29642)){
var statearr_29689_29765 = state_29655__$1;
(statearr_29689_29765[(1)] = (44));

} else {
var statearr_29690_29766 = state_29655__$1;
(statearr_29690_29766[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (29))){
var inst_29572 = (state_29655[(23)]);
var inst_29568 = (state_29655[(19)]);
var inst_29608 = (state_29655[(16)]);
var inst_29574 = (state_29655[(26)]);
var inst_29571 = (state_29655[(24)]);
var inst_29576 = (state_29655[(25)]);
var inst_29604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29607 = (function (){var all_files = inst_29568;
var res_SINGLEQUOTE_ = inst_29571;
var res = inst_29572;
var files_not_loaded = inst_29574;
var dependencies_that_loaded = inst_29576;
return (function (p__29606){
var map__29691 = p__29606;
var map__29691__$1 = (((((!((map__29691 == null))))?(((((map__29691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29691):map__29691);
var namespace = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_29608__$1 = cljs.core.group_by.call(null,inst_29607,inst_29574);
var inst_29610 = (inst_29608__$1 == null);
var inst_29611 = cljs.core.not.call(null,inst_29610);
var state_29655__$1 = (function (){var statearr_29693 = state_29655;
(statearr_29693[(28)] = inst_29604);

(statearr_29693[(16)] = inst_29608__$1);

return statearr_29693;
})();
if(inst_29611){
var statearr_29694_29767 = state_29655__$1;
(statearr_29694_29767[(1)] = (32));

} else {
var statearr_29695_29768 = state_29655__$1;
(statearr_29695_29768[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (44))){
var inst_29631 = (state_29655[(21)]);
var inst_29644 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29631);
var inst_29645 = cljs.core.pr_str.call(null,inst_29644);
var inst_29646 = ["not required: ",inst_29645].join('');
var inst_29647 = figwheel.client.utils.log.call(null,inst_29646);
var state_29655__$1 = state_29655;
var statearr_29696_29769 = state_29655__$1;
(statearr_29696_29769[(2)] = inst_29647);

(statearr_29696_29769[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (6))){
var inst_29549 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
var statearr_29697_29770 = state_29655__$1;
(statearr_29697_29770[(2)] = inst_29549);

(statearr_29697_29770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (28))){
var inst_29574 = (state_29655[(26)]);
var inst_29601 = (state_29655[(2)]);
var inst_29602 = cljs.core.not_empty.call(null,inst_29574);
var state_29655__$1 = (function (){var statearr_29698 = state_29655;
(statearr_29698[(29)] = inst_29601);

return statearr_29698;
})();
if(cljs.core.truth_(inst_29602)){
var statearr_29699_29771 = state_29655__$1;
(statearr_29699_29771[(1)] = (29));

} else {
var statearr_29700_29772 = state_29655__$1;
(statearr_29700_29772[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (25))){
var inst_29572 = (state_29655[(23)]);
var inst_29588 = (state_29655[(2)]);
var inst_29589 = cljs.core.not_empty.call(null,inst_29572);
var state_29655__$1 = (function (){var statearr_29701 = state_29655;
(statearr_29701[(30)] = inst_29588);

return statearr_29701;
})();
if(cljs.core.truth_(inst_29589)){
var statearr_29702_29773 = state_29655__$1;
(statearr_29702_29773[(1)] = (26));

} else {
var statearr_29703_29774 = state_29655__$1;
(statearr_29703_29774[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (34))){
var inst_29624 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
if(cljs.core.truth_(inst_29624)){
var statearr_29704_29775 = state_29655__$1;
(statearr_29704_29775[(1)] = (38));

} else {
var statearr_29705_29776 = state_29655__$1;
(statearr_29705_29776[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (17))){
var state_29655__$1 = state_29655;
var statearr_29706_29777 = state_29655__$1;
(statearr_29706_29777[(2)] = recompile_dependents);

(statearr_29706_29777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (3))){
var state_29655__$1 = state_29655;
var statearr_29707_29778 = state_29655__$1;
(statearr_29707_29778[(2)] = null);

(statearr_29707_29778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (12))){
var inst_29545 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
var statearr_29708_29779 = state_29655__$1;
(statearr_29708_29779[(2)] = inst_29545);

(statearr_29708_29779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (2))){
var inst_29507 = (state_29655[(13)]);
var inst_29514 = cljs.core.seq.call(null,inst_29507);
var inst_29515 = inst_29514;
var inst_29516 = null;
var inst_29517 = (0);
var inst_29518 = (0);
var state_29655__$1 = (function (){var statearr_29709 = state_29655;
(statearr_29709[(7)] = inst_29518);

(statearr_29709[(8)] = inst_29517);

(statearr_29709[(9)] = inst_29515);

(statearr_29709[(10)] = inst_29516);

return statearr_29709;
})();
var statearr_29710_29780 = state_29655__$1;
(statearr_29710_29780[(2)] = null);

(statearr_29710_29780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (23))){
var inst_29572 = (state_29655[(23)]);
var inst_29568 = (state_29655[(19)]);
var inst_29574 = (state_29655[(26)]);
var inst_29571 = (state_29655[(24)]);
var inst_29576 = (state_29655[(25)]);
var inst_29579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29581 = (function (){var all_files = inst_29568;
var res_SINGLEQUOTE_ = inst_29571;
var res = inst_29572;
var files_not_loaded = inst_29574;
var dependencies_that_loaded = inst_29576;
return (function (p__29580){
var map__29711 = p__29580;
var map__29711__$1 = (((((!((map__29711 == null))))?(((((map__29711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29711):map__29711);
var request_url = cljs.core.get.call(null,map__29711__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29582 = cljs.core.reverse.call(null,inst_29576);
var inst_29583 = cljs.core.map.call(null,inst_29581,inst_29582);
var inst_29584 = cljs.core.pr_str.call(null,inst_29583);
var inst_29585 = figwheel.client.utils.log.call(null,inst_29584);
var state_29655__$1 = (function (){var statearr_29713 = state_29655;
(statearr_29713[(31)] = inst_29579);

return statearr_29713;
})();
var statearr_29714_29781 = state_29655__$1;
(statearr_29714_29781[(2)] = inst_29585);

(statearr_29714_29781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (35))){
var state_29655__$1 = state_29655;
var statearr_29715_29782 = state_29655__$1;
(statearr_29715_29782[(2)] = true);

(statearr_29715_29782[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (19))){
var inst_29558 = (state_29655[(12)]);
var inst_29564 = figwheel.client.file_reloading.expand_files.call(null,inst_29558);
var state_29655__$1 = state_29655;
var statearr_29716_29783 = state_29655__$1;
(statearr_29716_29783[(2)] = inst_29564);

(statearr_29716_29783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (11))){
var state_29655__$1 = state_29655;
var statearr_29717_29784 = state_29655__$1;
(statearr_29717_29784[(2)] = null);

(statearr_29717_29784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (9))){
var inst_29547 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
var statearr_29718_29785 = state_29655__$1;
(statearr_29718_29785[(2)] = inst_29547);

(statearr_29718_29785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (5))){
var inst_29518 = (state_29655[(7)]);
var inst_29517 = (state_29655[(8)]);
var inst_29520 = (inst_29518 < inst_29517);
var inst_29521 = inst_29520;
var state_29655__$1 = state_29655;
if(cljs.core.truth_(inst_29521)){
var statearr_29719_29786 = state_29655__$1;
(statearr_29719_29786[(1)] = (7));

} else {
var statearr_29720_29787 = state_29655__$1;
(statearr_29720_29787[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (14))){
var inst_29528 = (state_29655[(22)]);
var inst_29537 = cljs.core.first.call(null,inst_29528);
var inst_29538 = figwheel.client.file_reloading.eval_body.call(null,inst_29537,opts);
var inst_29539 = cljs.core.next.call(null,inst_29528);
var inst_29515 = inst_29539;
var inst_29516 = null;
var inst_29517 = (0);
var inst_29518 = (0);
var state_29655__$1 = (function (){var statearr_29721 = state_29655;
(statearr_29721[(7)] = inst_29518);

(statearr_29721[(32)] = inst_29538);

(statearr_29721[(8)] = inst_29517);

(statearr_29721[(9)] = inst_29515);

(statearr_29721[(10)] = inst_29516);

return statearr_29721;
})();
var statearr_29722_29788 = state_29655__$1;
(statearr_29722_29788[(2)] = null);

(statearr_29722_29788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (45))){
var state_29655__$1 = state_29655;
var statearr_29723_29789 = state_29655__$1;
(statearr_29723_29789[(2)] = null);

(statearr_29723_29789[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (26))){
var inst_29572 = (state_29655[(23)]);
var inst_29568 = (state_29655[(19)]);
var inst_29574 = (state_29655[(26)]);
var inst_29571 = (state_29655[(24)]);
var inst_29576 = (state_29655[(25)]);
var inst_29591 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29593 = (function (){var all_files = inst_29568;
var res_SINGLEQUOTE_ = inst_29571;
var res = inst_29572;
var files_not_loaded = inst_29574;
var dependencies_that_loaded = inst_29576;
return (function (p__29592){
var map__29724 = p__29592;
var map__29724__$1 = (((((!((map__29724 == null))))?(((((map__29724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29724):map__29724);
var namespace = cljs.core.get.call(null,map__29724__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29724__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29594 = cljs.core.map.call(null,inst_29593,inst_29572);
var inst_29595 = cljs.core.pr_str.call(null,inst_29594);
var inst_29596 = figwheel.client.utils.log.call(null,inst_29595);
var inst_29597 = (function (){var all_files = inst_29568;
var res_SINGLEQUOTE_ = inst_29571;
var res = inst_29572;
var files_not_loaded = inst_29574;
var dependencies_that_loaded = inst_29576;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29598 = setTimeout(inst_29597,(10));
var state_29655__$1 = (function (){var statearr_29726 = state_29655;
(statearr_29726[(33)] = inst_29596);

(statearr_29726[(34)] = inst_29591);

return statearr_29726;
})();
var statearr_29727_29790 = state_29655__$1;
(statearr_29727_29790[(2)] = inst_29598);

(statearr_29727_29790[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (16))){
var state_29655__$1 = state_29655;
var statearr_29728_29791 = state_29655__$1;
(statearr_29728_29791[(2)] = reload_dependents);

(statearr_29728_29791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (38))){
var inst_29608 = (state_29655[(16)]);
var inst_29626 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29608);
var state_29655__$1 = state_29655;
var statearr_29729_29792 = state_29655__$1;
(statearr_29729_29792[(2)] = inst_29626);

(statearr_29729_29792[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (30))){
var state_29655__$1 = state_29655;
var statearr_29730_29793 = state_29655__$1;
(statearr_29730_29793[(2)] = null);

(statearr_29730_29793[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (10))){
var inst_29528 = (state_29655[(22)]);
var inst_29530 = cljs.core.chunked_seq_QMARK_.call(null,inst_29528);
var state_29655__$1 = state_29655;
if(inst_29530){
var statearr_29731_29794 = state_29655__$1;
(statearr_29731_29794[(1)] = (13));

} else {
var statearr_29732_29795 = state_29655__$1;
(statearr_29732_29795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (18))){
var inst_29562 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
if(cljs.core.truth_(inst_29562)){
var statearr_29733_29796 = state_29655__$1;
(statearr_29733_29796[(1)] = (19));

} else {
var statearr_29734_29797 = state_29655__$1;
(statearr_29734_29797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (42))){
var state_29655__$1 = state_29655;
var statearr_29735_29798 = state_29655__$1;
(statearr_29735_29798[(2)] = null);

(statearr_29735_29798[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (37))){
var inst_29621 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
var statearr_29736_29799 = state_29655__$1;
(statearr_29736_29799[(2)] = inst_29621);

(statearr_29736_29799[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (8))){
var inst_29528 = (state_29655[(22)]);
var inst_29515 = (state_29655[(9)]);
var inst_29528__$1 = cljs.core.seq.call(null,inst_29515);
var state_29655__$1 = (function (){var statearr_29737 = state_29655;
(statearr_29737[(22)] = inst_29528__$1);

return statearr_29737;
})();
if(inst_29528__$1){
var statearr_29738_29800 = state_29655__$1;
(statearr_29738_29800[(1)] = (10));

} else {
var statearr_29739_29801 = state_29655__$1;
(statearr_29739_29801[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto____0 = (function (){
var statearr_29740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29740[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto__);

(statearr_29740[(1)] = (1));

return statearr_29740;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto____1 = (function (state_29655){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_29655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e29741){if((e29741 instanceof Object)){
var ex__23344__auto__ = e29741;
var statearr_29742_29802 = state_29655;
(statearr_29742_29802[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29803 = state_29655;
state_29655 = G__29803;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto__ = function(state_29655){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto____1.call(this,state_29655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_29743 = f__23436__auto__.call(null);
(statearr_29743[(6)] = c__23435__auto__);

return statearr_29743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

return c__23435__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29806,link){
var map__29807 = p__29806;
var map__29807__$1 = (((((!((map__29807 == null))))?(((((map__29807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29807):map__29807);
var file = cljs.core.get.call(null,map__29807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29804_SHARP_,p2__29805_SHARP_){
if(cljs.core._EQ_.call(null,p1__29804_SHARP_,p2__29805_SHARP_)){
return p1__29804_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29810){
var map__29811 = p__29810;
var map__29811__$1 = (((((!((map__29811 == null))))?(((((map__29811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29811):map__29811);
var match_length = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29809_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29809_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29813_SHARP_,p2__29814_SHARP_){
return cljs.core.assoc.call(null,p1__29813_SHARP_,cljs.core.get.call(null,p2__29814_SHARP_,key),p2__29814_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29815 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29815);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29815);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29816,p__29817){
var map__29818 = p__29816;
var map__29818__$1 = (((((!((map__29818 == null))))?(((((map__29818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29818):map__29818);
var on_cssload = cljs.core.get.call(null,map__29818__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29819 = p__29817;
var map__29819__$1 = (((((!((map__29819 == null))))?(((((map__29819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29819):map__29819);
var files_msg = map__29819__$1;
var files = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1608325373564
