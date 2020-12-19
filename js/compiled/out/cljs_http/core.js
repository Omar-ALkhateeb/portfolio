// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__25389){
var vec__25390 = p__25389;
var k = cljs.core.nth.call(null,vec__25390,(0),null);
var v = cljs.core.nth.call(null,vec__25390,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__25393 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__25393)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__25393)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__25393)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__25393)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__25393)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__25393)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25393)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__25394){
var map__25395 = p__25394;
var map__25395__$1 = (((((!((map__25395 == null))))?(((((map__25395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25395):map__25395);
var request = map__25395__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__25397 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__25397,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__25397,response_type);

G__25397.setTimeoutInterval(timeout);

G__25397.setWithCredentials(send_credentials);

return G__25397;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__25398){
var map__25399 = p__25398;
var map__25399__$1 = (((((!((map__25399 == null))))?(((((map__25399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25399):map__25399);
var request = map__25399__$1;
var request_method = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_25423 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__25401_25424 = xhr;
G__25401_25424.setProgressEventsEnabled(true);

G__25401_25424.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_25423,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__25401_25424.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_25423,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__23435__auto___25425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_25412){
var state_val_25413 = (state_25412[(1)]);
if((state_val_25413 === (1))){
var state_25412__$1 = state_25412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25412__$1,(2),cancel);
} else {
if((state_val_25413 === (2))){
var inst_25403 = (state_25412[(2)]);
var inst_25404 = xhr.isComplete();
var inst_25405 = cljs.core.not.call(null,inst_25404);
var state_25412__$1 = (function (){var statearr_25414 = state_25412;
(statearr_25414[(7)] = inst_25403);

return statearr_25414;
})();
if(inst_25405){
var statearr_25415_25426 = state_25412__$1;
(statearr_25415_25426[(1)] = (3));

} else {
var statearr_25416_25427 = state_25412__$1;
(statearr_25416_25427[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (3))){
var inst_25407 = xhr.abort();
var state_25412__$1 = state_25412;
var statearr_25417_25428 = state_25412__$1;
(statearr_25417_25428[(2)] = inst_25407);

(statearr_25417_25428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (4))){
var state_25412__$1 = state_25412;
var statearr_25418_25429 = state_25412__$1;
(statearr_25418_25429[(2)] = null);

(statearr_25418_25429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (5))){
var inst_25410 = (state_25412[(2)]);
var state_25412__$1 = state_25412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25412__$1,inst_25410);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__23341__auto__ = null;
var cljs_http$core$xhr_$_state_machine__23341__auto____0 = (function (){
var statearr_25419 = [null,null,null,null,null,null,null,null];
(statearr_25419[(0)] = cljs_http$core$xhr_$_state_machine__23341__auto__);

(statearr_25419[(1)] = (1));

return statearr_25419;
});
var cljs_http$core$xhr_$_state_machine__23341__auto____1 = (function (state_25412){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_25412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e25420){if((e25420 instanceof Object)){
var ex__23344__auto__ = e25420;
var statearr_25421_25430 = state_25412;
(statearr_25421_25430[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25431 = state_25412;
state_25412 = G__25431;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__23341__auto__ = function(state_25412){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__23341__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__23341__auto____1.call(this,state_25412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__23341__auto____0;
cljs_http$core$xhr_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__23341__auto____1;
return cljs_http$core$xhr_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_25422 = f__23436__auto__.call(null);
(statearr_25422[(6)] = c__23435__auto___25425);

return statearr_25422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__25432){
var map__25433 = p__25432;
var map__25433__$1 = (((((!((map__25433 == null))))?(((((map__25433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25433):map__25433);
var request = map__25433__$1;
var timeout = cljs.core.get.call(null,map__25433__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__25433__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__25433__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__25433__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_25446 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_25446], null));

if(cljs.core.truth_(cancel)){
var c__23435__auto___25447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_25439){
var state_val_25440 = (state_25439[(1)]);
if((state_val_25440 === (1))){
var state_25439__$1 = state_25439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25439__$1,(2),cancel);
} else {
if((state_val_25440 === (2))){
var inst_25436 = (state_25439[(2)]);
var inst_25437 = jsonp.cancel(req_25446);
var state_25439__$1 = (function (){var statearr_25441 = state_25439;
(statearr_25441[(7)] = inst_25436);

return statearr_25441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25439__$1,inst_25437);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__23341__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__23341__auto____0 = (function (){
var statearr_25442 = [null,null,null,null,null,null,null,null];
(statearr_25442[(0)] = cljs_http$core$jsonp_$_state_machine__23341__auto__);

(statearr_25442[(1)] = (1));

return statearr_25442;
});
var cljs_http$core$jsonp_$_state_machine__23341__auto____1 = (function (state_25439){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_25439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e25443){if((e25443 instanceof Object)){
var ex__23344__auto__ = e25443;
var statearr_25444_25448 = state_25439;
(statearr_25444_25448[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25449 = state_25439;
state_25439 = G__25449;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__23341__auto__ = function(state_25439){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__23341__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__23341__auto____1.call(this,state_25439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__23341__auto____0;
cljs_http$core$jsonp_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__23341__auto____1;
return cljs_http$core$jsonp_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_25445 = f__23436__auto__.call(null);
(statearr_25445[(6)] = c__23435__auto___25447);

return statearr_25445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__25450){
var map__25451 = p__25450;
var map__25451__$1 = (((((!((map__25451 == null))))?(((((map__25451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25451):map__25451);
var request = map__25451__$1;
var request_method = cljs.core.get.call(null,map__25451__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1608325366649
