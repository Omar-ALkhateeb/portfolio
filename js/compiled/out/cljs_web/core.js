// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_web.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('reagent.dom');
goog.require('cljs.core.async');
cljs_web.core.api_url = "https://api.github.com/users/Omar-ALkhateeb/repos";
cljs_web.core.request_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)], null);
cljs_web.core.api_response = reagent.core.atom.call(null,null);
cljs_web.core.exp = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["js","python","golang","nodejs","vuejs","clojurescript","docker","tensorflow"], null));
cljs_web.core.get_repos = (function cljs_web$core$get_repos(){
var c__22816__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22817__auto__ = (function (){var switch__22793__auto__ = (function (state_23371){
var state_val_23372 = (state_23371[(1)]);
if((state_val_23372 === (1))){
var inst_23364 = cljs_http.client.get.call(null,cljs_web.core.api_url,cljs_web.core.request_opts);
var state_23371__$1 = state_23371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23371__$1,(2),inst_23364);
} else {
if((state_val_23372 === (2))){
var inst_23366 = (state_23371[(2)]);
var inst_23367 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23366);
var inst_23368 = cljs.core.println.call(null,inst_23367);
var inst_23369 = cljs.core.reset_BANG_.call(null,cljs_web.core.api_response,inst_23366);
var state_23371__$1 = (function (){var statearr_23373 = state_23371;
(statearr_23373[(7)] = inst_23368);

return statearr_23373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23371__$1,inst_23369);
} else {
return null;
}
}
});
return (function() {
var cljs_web$core$get_repos_$_state_machine__22794__auto__ = null;
var cljs_web$core$get_repos_$_state_machine__22794__auto____0 = (function (){
var statearr_23374 = [null,null,null,null,null,null,null,null];
(statearr_23374[(0)] = cljs_web$core$get_repos_$_state_machine__22794__auto__);

(statearr_23374[(1)] = (1));

return statearr_23374;
});
var cljs_web$core$get_repos_$_state_machine__22794__auto____1 = (function (state_23371){
while(true){
var ret_value__22795__auto__ = (function (){try{while(true){
var result__22796__auto__ = switch__22793__auto__.call(null,state_23371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22796__auto__;
}
break;
}
}catch (e23375){if((e23375 instanceof Object)){
var ex__22797__auto__ = e23375;
var statearr_23376_23378 = state_23371;
(statearr_23376_23378[(5)] = ex__22797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23379 = state_23371;
state_23371 = G__23379;
continue;
} else {
return ret_value__22795__auto__;
}
break;
}
});
cljs_web$core$get_repos_$_state_machine__22794__auto__ = function(state_23371){
switch(arguments.length){
case 0:
return cljs_web$core$get_repos_$_state_machine__22794__auto____0.call(this);
case 1:
return cljs_web$core$get_repos_$_state_machine__22794__auto____1.call(this,state_23371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_web$core$get_repos_$_state_machine__22794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_web$core$get_repos_$_state_machine__22794__auto____0;
cljs_web$core$get_repos_$_state_machine__22794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_web$core$get_repos_$_state_machine__22794__auto____1;
return cljs_web$core$get_repos_$_state_machine__22794__auto__;
})()
})();
var state__22818__auto__ = (function (){var statearr_23377 = f__22817__auto__.call(null);
(statearr_23377[(6)] = c__22816__auto__);

return statearr_23377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22818__auto__);
}));

return c__22816__auto__;
});
cljs_web.core.get_repos.call(null);
cljs.core.enable_console_print_BANG_.call(null);
cljs_web.core.hello_world = (function cljs_web$core$hello_world(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Omar-ALkhateeb",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:omar.alkhateeb9919@gmail.com"], null)," <omar.alkhateeb9919@gmail.com>"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Omar-ALkhateeb"], null),"Github / "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/Omr_khateeb"], null),"Twitter / "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.instagram.com/omr.khateeb/"], null),"Insta"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"about:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"22 years old hipster fullstack dev looking for a nieche language to learn"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"my CV:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/omar-nabeel.pdf"], null),"download"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"  - might be a bit outdated.."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"my repos and contributions:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function cljs_web$core$hello_world_$_iter__23380(s__23381){
return (new cljs.core.LazySeq(null,(function (){
var s__23381__$1 = s__23381;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__23381__$1);
if(temp__5720__auto__){
var s__23381__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23381__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__23381__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__23383 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__23382 = (0);
while(true){
if((i__23382 < size__4528__auto__)){
var repo = cljs.core._nth.call(null,c__4527__auto__,i__23382);
cljs.core.chunk_append.call(null,b__23383,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"html_url","html_url",-1914714112).cljs$core$IFn$_invoke$arity$1(repo)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(repo)], null)], null));

var G__23388 = (i__23382 + (1));
i__23382 = G__23388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23383),cljs_web$core$hello_world_$_iter__23380.call(null,cljs.core.chunk_rest.call(null,s__23381__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23383),null);
}
} else {
var repo = cljs.core.first.call(null,s__23381__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"html_url","html_url",-1914714112).cljs$core$IFn$_invoke$arity$1(repo)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(repo)], null)], null),cljs_web$core$hello_world_$_iter__23380.call(null,cljs.core.rest.call(null,s__23381__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_web.core.api_response)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"experienced in:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function cljs_web$core$hello_world_$_iter__23384(s__23385){
return (new cljs.core.LazySeq(null,(function (){
var s__23385__$1 = s__23385;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__23385__$1);
if(temp__5720__auto__){
var s__23385__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23385__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__23385__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__23387 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__23386 = (0);
while(true){
if((i__23386 < size__4528__auto__)){
var ex = cljs.core._nth.call(null,c__4527__auto__,i__23386);
cljs.core.chunk_append.call(null,b__23387,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),ex], null));

var G__23389 = (i__23386 + (1));
i__23386 = G__23389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23387),cljs_web$core$hello_world_$_iter__23384.call(null,cljs.core.chunk_rest.call(null,s__23385__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23387),null);
}
} else {
var ex = cljs.core.first.call(null,s__23385__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),ex], null),cljs_web$core$hello_world_$_iter__23384.call(null,cljs.core.rest.call(null,s__23385__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.deref.call(null,cljs_web.core.exp));
})()], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_web.core.hello_world], null),document.getElementById("app"));
cljs_web.core.on_js_reload = (function cljs_web$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1608365156670
