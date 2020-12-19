// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31033){if((e31033 instanceof Error)){
var e = e31033;
return "Error: Unable to stringify";
} else {
throw e31033;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31036 = arguments.length;
switch (G__31036) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31034_SHARP_){
if(typeof p1__31034_SHARP_ === 'string'){
return p1__31034_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31034_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31039 = arguments.length;
var i__4737__auto___31040 = (0);
while(true){
if((i__4737__auto___31040 < len__4736__auto___31039)){
args__4742__auto__.push((arguments[i__4737__auto___31040]));

var G__31041 = (i__4737__auto___31040 + (1));
i__4737__auto___31040 = G__31041;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31038){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31038));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31043 = arguments.length;
var i__4737__auto___31044 = (0);
while(true){
if((i__4737__auto___31044 < len__4736__auto___31043)){
args__4742__auto__.push((arguments[i__4737__auto___31044]));

var G__31045 = (i__4737__auto___31044 + (1));
i__4737__auto___31044 = G__31045;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31042){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31042));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31046){
var map__31047 = p__31046;
var map__31047__$1 = (((((!((map__31047 == null))))?(((((map__31047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31047):map__31047);
var message = cljs.core.get.call(null,map__31047__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31047__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23435__auto___31126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_31098){
var state_val_31099 = (state_31098[(1)]);
if((state_val_31099 === (7))){
var inst_31094 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31100_31127 = state_31098__$1;
(statearr_31100_31127[(2)] = inst_31094);

(statearr_31100_31127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (1))){
var state_31098__$1 = state_31098;
var statearr_31101_31128 = state_31098__$1;
(statearr_31101_31128[(2)] = null);

(statearr_31101_31128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (4))){
var inst_31051 = (state_31098[(7)]);
var inst_31051__$1 = (state_31098[(2)]);
var state_31098__$1 = (function (){var statearr_31102 = state_31098;
(statearr_31102[(7)] = inst_31051__$1);

return statearr_31102;
})();
if(cljs.core.truth_(inst_31051__$1)){
var statearr_31103_31129 = state_31098__$1;
(statearr_31103_31129[(1)] = (5));

} else {
var statearr_31104_31130 = state_31098__$1;
(statearr_31104_31130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (15))){
var inst_31058 = (state_31098[(8)]);
var inst_31073 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31058);
var inst_31074 = cljs.core.first.call(null,inst_31073);
var inst_31075 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31074);
var inst_31076 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31075)].join('');
var inst_31077 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31076);
var state_31098__$1 = state_31098;
var statearr_31105_31131 = state_31098__$1;
(statearr_31105_31131[(2)] = inst_31077);

(statearr_31105_31131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (13))){
var inst_31082 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31106_31132 = state_31098__$1;
(statearr_31106_31132[(2)] = inst_31082);

(statearr_31106_31132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (6))){
var state_31098__$1 = state_31098;
var statearr_31107_31133 = state_31098__$1;
(statearr_31107_31133[(2)] = null);

(statearr_31107_31133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (17))){
var inst_31080 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31108_31134 = state_31098__$1;
(statearr_31108_31134[(2)] = inst_31080);

(statearr_31108_31134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (3))){
var inst_31096 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31098__$1,inst_31096);
} else {
if((state_val_31099 === (12))){
var inst_31057 = (state_31098[(9)]);
var inst_31071 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31057,opts);
var state_31098__$1 = state_31098;
if(inst_31071){
var statearr_31109_31135 = state_31098__$1;
(statearr_31109_31135[(1)] = (15));

} else {
var statearr_31110_31136 = state_31098__$1;
(statearr_31110_31136[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (2))){
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(4),ch);
} else {
if((state_val_31099 === (11))){
var inst_31058 = (state_31098[(8)]);
var inst_31063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31064 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31058);
var inst_31065 = cljs.core.async.timeout.call(null,(1000));
var inst_31066 = [inst_31064,inst_31065];
var inst_31067 = (new cljs.core.PersistentVector(null,2,(5),inst_31063,inst_31066,null));
var state_31098__$1 = state_31098;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31098__$1,(14),inst_31067);
} else {
if((state_val_31099 === (9))){
var inst_31058 = (state_31098[(8)]);
var inst_31084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31085 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31058);
var inst_31086 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31085);
var inst_31087 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31086)].join('');
var inst_31088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31087);
var state_31098__$1 = (function (){var statearr_31111 = state_31098;
(statearr_31111[(10)] = inst_31084);

return statearr_31111;
})();
var statearr_31112_31137 = state_31098__$1;
(statearr_31112_31137[(2)] = inst_31088);

(statearr_31112_31137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (5))){
var inst_31051 = (state_31098[(7)]);
var inst_31053 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31054 = (new cljs.core.PersistentArrayMap(null,2,inst_31053,null));
var inst_31055 = (new cljs.core.PersistentHashSet(null,inst_31054,null));
var inst_31056 = figwheel.client.focus_msgs.call(null,inst_31055,inst_31051);
var inst_31057 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31056);
var inst_31058 = cljs.core.first.call(null,inst_31056);
var inst_31059 = figwheel.client.autoload_QMARK_.call(null);
var state_31098__$1 = (function (){var statearr_31113 = state_31098;
(statearr_31113[(8)] = inst_31058);

(statearr_31113[(9)] = inst_31057);

return statearr_31113;
})();
if(cljs.core.truth_(inst_31059)){
var statearr_31114_31138 = state_31098__$1;
(statearr_31114_31138[(1)] = (8));

} else {
var statearr_31115_31139 = state_31098__$1;
(statearr_31115_31139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (14))){
var inst_31069 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31116_31140 = state_31098__$1;
(statearr_31116_31140[(2)] = inst_31069);

(statearr_31116_31140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (16))){
var state_31098__$1 = state_31098;
var statearr_31117_31141 = state_31098__$1;
(statearr_31117_31141[(2)] = null);

(statearr_31117_31141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (10))){
var inst_31090 = (state_31098[(2)]);
var state_31098__$1 = (function (){var statearr_31118 = state_31098;
(statearr_31118[(11)] = inst_31090);

return statearr_31118;
})();
var statearr_31119_31142 = state_31098__$1;
(statearr_31119_31142[(2)] = null);

(statearr_31119_31142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (8))){
var inst_31057 = (state_31098[(9)]);
var inst_31061 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31057,opts);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31061)){
var statearr_31120_31143 = state_31098__$1;
(statearr_31120_31143[(1)] = (11));

} else {
var statearr_31121_31144 = state_31098__$1;
(statearr_31121_31144[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23341__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23341__auto____0 = (function (){
var statearr_31122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31122[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23341__auto__);

(statearr_31122[(1)] = (1));

return statearr_31122;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23341__auto____1 = (function (state_31098){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_31098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e31123){if((e31123 instanceof Object)){
var ex__23344__auto__ = e31123;
var statearr_31124_31145 = state_31098;
(statearr_31124_31145[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31146 = state_31098;
state_31098 = G__31146;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23341__auto__ = function(state_31098){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23341__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23341__auto____1.call(this,state_31098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23341__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23341__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_31125 = f__23436__auto__.call(null);
(statearr_31125[(6)] = c__23435__auto___31126);

return statearr_31125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31147_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31147_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31153 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31149 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31150 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31151 = true;
var _STAR_print_fn_STAR__temp_val__31152 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31151);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31152);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31150);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31149);
}}catch (e31148){if((e31148 instanceof Error)){
var e = e31148;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31153], null));
} else {
var e = e31148;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31154){
var map__31155 = p__31154;
var map__31155__$1 = (((((!((map__31155 == null))))?(((((map__31155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31155):map__31155);
var opts = map__31155__$1;
var build_id = cljs.core.get.call(null,map__31155__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31157){
var vec__31158 = p__31157;
var seq__31159 = cljs.core.seq.call(null,vec__31158);
var first__31160 = cljs.core.first.call(null,seq__31159);
var seq__31159__$1 = cljs.core.next.call(null,seq__31159);
var map__31161 = first__31160;
var map__31161__$1 = (((((!((map__31161 == null))))?(((((map__31161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31161):map__31161);
var msg = map__31161__$1;
var msg_name = cljs.core.get.call(null,map__31161__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31159__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31163){
var vec__31164 = p__31163;
var seq__31165 = cljs.core.seq.call(null,vec__31164);
var first__31166 = cljs.core.first.call(null,seq__31165);
var seq__31165__$1 = cljs.core.next.call(null,seq__31165);
var map__31167 = first__31166;
var map__31167__$1 = (((((!((map__31167 == null))))?(((((map__31167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31167):map__31167);
var msg = map__31167__$1;
var msg_name = cljs.core.get.call(null,map__31167__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31165__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31169){
var map__31170 = p__31169;
var map__31170__$1 = (((((!((map__31170 == null))))?(((((map__31170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31170):map__31170);
var on_compile_warning = cljs.core.get.call(null,map__31170__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31170__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31172){
var vec__31173 = p__31172;
var seq__31174 = cljs.core.seq.call(null,vec__31173);
var first__31175 = cljs.core.first.call(null,seq__31174);
var seq__31174__$1 = cljs.core.next.call(null,seq__31174);
var map__31176 = first__31175;
var map__31176__$1 = (((((!((map__31176 == null))))?(((((map__31176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31176):map__31176);
var msg = map__31176__$1;
var msg_name = cljs.core.get.call(null,map__31176__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31174__$1;
var pred__31178 = cljs.core._EQ_;
var expr__31179 = msg_name;
if(cljs.core.truth_(pred__31178.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31179))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31178.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31179))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_31268){
var state_val_31269 = (state_31268[(1)]);
if((state_val_31269 === (7))){
var inst_31188 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
if(cljs.core.truth_(inst_31188)){
var statearr_31270_31317 = state_31268__$1;
(statearr_31270_31317[(1)] = (8));

} else {
var statearr_31271_31318 = state_31268__$1;
(statearr_31271_31318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (20))){
var inst_31262 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31272_31319 = state_31268__$1;
(statearr_31272_31319[(2)] = inst_31262);

(statearr_31272_31319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (27))){
var inst_31258 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31273_31320 = state_31268__$1;
(statearr_31273_31320[(2)] = inst_31258);

(statearr_31273_31320[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (1))){
var inst_31181 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31268__$1 = state_31268;
if(cljs.core.truth_(inst_31181)){
var statearr_31274_31321 = state_31268__$1;
(statearr_31274_31321[(1)] = (2));

} else {
var statearr_31275_31322 = state_31268__$1;
(statearr_31275_31322[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (24))){
var inst_31260 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31276_31323 = state_31268__$1;
(statearr_31276_31323[(2)] = inst_31260);

(statearr_31276_31323[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (4))){
var inst_31266 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31268__$1,inst_31266);
} else {
if((state_val_31269 === (15))){
var inst_31264 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31277_31324 = state_31268__$1;
(statearr_31277_31324[(2)] = inst_31264);

(statearr_31277_31324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (21))){
var inst_31217 = (state_31268[(2)]);
var inst_31218 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31219 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31218);
var state_31268__$1 = (function (){var statearr_31278 = state_31268;
(statearr_31278[(7)] = inst_31217);

return statearr_31278;
})();
var statearr_31279_31325 = state_31268__$1;
(statearr_31279_31325[(2)] = inst_31219);

(statearr_31279_31325[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (31))){
var inst_31247 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31268__$1 = state_31268;
if(inst_31247){
var statearr_31280_31326 = state_31268__$1;
(statearr_31280_31326[(1)] = (34));

} else {
var statearr_31281_31327 = state_31268__$1;
(statearr_31281_31327[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (32))){
var inst_31256 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31282_31328 = state_31268__$1;
(statearr_31282_31328[(2)] = inst_31256);

(statearr_31282_31328[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (33))){
var inst_31243 = (state_31268[(2)]);
var inst_31244 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31245 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31244);
var state_31268__$1 = (function (){var statearr_31283 = state_31268;
(statearr_31283[(8)] = inst_31243);

return statearr_31283;
})();
var statearr_31284_31329 = state_31268__$1;
(statearr_31284_31329[(2)] = inst_31245);

(statearr_31284_31329[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (13))){
var inst_31202 = figwheel.client.heads_up.clear.call(null);
var state_31268__$1 = state_31268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31268__$1,(16),inst_31202);
} else {
if((state_val_31269 === (22))){
var inst_31223 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31224 = figwheel.client.heads_up.append_warning_message.call(null,inst_31223);
var state_31268__$1 = state_31268;
var statearr_31285_31330 = state_31268__$1;
(statearr_31285_31330[(2)] = inst_31224);

(statearr_31285_31330[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (36))){
var inst_31254 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31286_31331 = state_31268__$1;
(statearr_31286_31331[(2)] = inst_31254);

(statearr_31286_31331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (29))){
var inst_31234 = (state_31268[(2)]);
var inst_31235 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31236 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31235);
var state_31268__$1 = (function (){var statearr_31287 = state_31268;
(statearr_31287[(9)] = inst_31234);

return statearr_31287;
})();
var statearr_31288_31332 = state_31268__$1;
(statearr_31288_31332[(2)] = inst_31236);

(statearr_31288_31332[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (6))){
var inst_31183 = (state_31268[(10)]);
var state_31268__$1 = state_31268;
var statearr_31289_31333 = state_31268__$1;
(statearr_31289_31333[(2)] = inst_31183);

(statearr_31289_31333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (28))){
var inst_31230 = (state_31268[(2)]);
var inst_31231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31232 = figwheel.client.heads_up.display_warning.call(null,inst_31231);
var state_31268__$1 = (function (){var statearr_31290 = state_31268;
(statearr_31290[(11)] = inst_31230);

return statearr_31290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31268__$1,(29),inst_31232);
} else {
if((state_val_31269 === (25))){
var inst_31228 = figwheel.client.heads_up.clear.call(null);
var state_31268__$1 = state_31268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31268__$1,(28),inst_31228);
} else {
if((state_val_31269 === (34))){
var inst_31249 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31268__$1 = state_31268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31268__$1,(37),inst_31249);
} else {
if((state_val_31269 === (17))){
var inst_31208 = (state_31268[(2)]);
var inst_31209 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31210 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31209);
var state_31268__$1 = (function (){var statearr_31291 = state_31268;
(statearr_31291[(12)] = inst_31208);

return statearr_31291;
})();
var statearr_31292_31334 = state_31268__$1;
(statearr_31292_31334[(2)] = inst_31210);

(statearr_31292_31334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (3))){
var inst_31200 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31268__$1 = state_31268;
if(inst_31200){
var statearr_31293_31335 = state_31268__$1;
(statearr_31293_31335[(1)] = (13));

} else {
var statearr_31294_31336 = state_31268__$1;
(statearr_31294_31336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (12))){
var inst_31196 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31295_31337 = state_31268__$1;
(statearr_31295_31337[(2)] = inst_31196);

(statearr_31295_31337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (2))){
var inst_31183 = (state_31268[(10)]);
var inst_31183__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31268__$1 = (function (){var statearr_31296 = state_31268;
(statearr_31296[(10)] = inst_31183__$1);

return statearr_31296;
})();
if(cljs.core.truth_(inst_31183__$1)){
var statearr_31297_31338 = state_31268__$1;
(statearr_31297_31338[(1)] = (5));

} else {
var statearr_31298_31339 = state_31268__$1;
(statearr_31298_31339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (23))){
var inst_31226 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31268__$1 = state_31268;
if(inst_31226){
var statearr_31299_31340 = state_31268__$1;
(statearr_31299_31340[(1)] = (25));

} else {
var statearr_31300_31341 = state_31268__$1;
(statearr_31300_31341[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (35))){
var state_31268__$1 = state_31268;
var statearr_31301_31342 = state_31268__$1;
(statearr_31301_31342[(2)] = null);

(statearr_31301_31342[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (19))){
var inst_31221 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31268__$1 = state_31268;
if(inst_31221){
var statearr_31302_31343 = state_31268__$1;
(statearr_31302_31343[(1)] = (22));

} else {
var statearr_31303_31344 = state_31268__$1;
(statearr_31303_31344[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (11))){
var inst_31192 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31304_31345 = state_31268__$1;
(statearr_31304_31345[(2)] = inst_31192);

(statearr_31304_31345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (9))){
var inst_31194 = figwheel.client.heads_up.clear.call(null);
var state_31268__$1 = state_31268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31268__$1,(12),inst_31194);
} else {
if((state_val_31269 === (5))){
var inst_31185 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31268__$1 = state_31268;
var statearr_31305_31346 = state_31268__$1;
(statearr_31305_31346[(2)] = inst_31185);

(statearr_31305_31346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (14))){
var inst_31212 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31268__$1 = state_31268;
if(inst_31212){
var statearr_31306_31347 = state_31268__$1;
(statearr_31306_31347[(1)] = (18));

} else {
var statearr_31307_31348 = state_31268__$1;
(statearr_31307_31348[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (26))){
var inst_31238 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31268__$1 = state_31268;
if(inst_31238){
var statearr_31308_31349 = state_31268__$1;
(statearr_31308_31349[(1)] = (30));

} else {
var statearr_31309_31350 = state_31268__$1;
(statearr_31309_31350[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (16))){
var inst_31204 = (state_31268[(2)]);
var inst_31205 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31206 = figwheel.client.heads_up.display_exception.call(null,inst_31205);
var state_31268__$1 = (function (){var statearr_31310 = state_31268;
(statearr_31310[(13)] = inst_31204);

return statearr_31310;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31268__$1,(17),inst_31206);
} else {
if((state_val_31269 === (30))){
var inst_31240 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31241 = figwheel.client.heads_up.display_warning.call(null,inst_31240);
var state_31268__$1 = state_31268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31268__$1,(33),inst_31241);
} else {
if((state_val_31269 === (10))){
var inst_31198 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31311_31351 = state_31268__$1;
(statearr_31311_31351[(2)] = inst_31198);

(statearr_31311_31351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (18))){
var inst_31214 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31215 = figwheel.client.heads_up.display_exception.call(null,inst_31214);
var state_31268__$1 = state_31268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31268__$1,(21),inst_31215);
} else {
if((state_val_31269 === (37))){
var inst_31251 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31312_31352 = state_31268__$1;
(statearr_31312_31352[(2)] = inst_31251);

(statearr_31312_31352[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (8))){
var inst_31190 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31268__$1 = state_31268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31268__$1,(11),inst_31190);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto____0 = (function (){
var statearr_31313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31313[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto__);

(statearr_31313[(1)] = (1));

return statearr_31313;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto____1 = (function (state_31268){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_31268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e31314){if((e31314 instanceof Object)){
var ex__23344__auto__ = e31314;
var statearr_31315_31353 = state_31268;
(statearr_31315_31353[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31354 = state_31268;
state_31268 = G__31354;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto__ = function(state_31268){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto____1.call(this,state_31268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_31316 = f__23436__auto__.call(null);
(statearr_31316[(6)] = c__23435__auto__);

return statearr_31316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

return c__23435__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23435__auto___31383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_31369){
var state_val_31370 = (state_31369[(1)]);
if((state_val_31370 === (1))){
var state_31369__$1 = state_31369;
var statearr_31371_31384 = state_31369__$1;
(statearr_31371_31384[(2)] = null);

(statearr_31371_31384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (2))){
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31369__$1,(4),ch);
} else {
if((state_val_31370 === (3))){
var inst_31367 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31369__$1,inst_31367);
} else {
if((state_val_31370 === (4))){
var inst_31357 = (state_31369[(7)]);
var inst_31357__$1 = (state_31369[(2)]);
var state_31369__$1 = (function (){var statearr_31372 = state_31369;
(statearr_31372[(7)] = inst_31357__$1);

return statearr_31372;
})();
if(cljs.core.truth_(inst_31357__$1)){
var statearr_31373_31385 = state_31369__$1;
(statearr_31373_31385[(1)] = (5));

} else {
var statearr_31374_31386 = state_31369__$1;
(statearr_31374_31386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (5))){
var inst_31357 = (state_31369[(7)]);
var inst_31359 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31357);
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31369__$1,(8),inst_31359);
} else {
if((state_val_31370 === (6))){
var state_31369__$1 = state_31369;
var statearr_31375_31387 = state_31369__$1;
(statearr_31375_31387[(2)] = null);

(statearr_31375_31387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (7))){
var inst_31365 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31376_31388 = state_31369__$1;
(statearr_31376_31388[(2)] = inst_31365);

(statearr_31376_31388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (8))){
var inst_31361 = (state_31369[(2)]);
var state_31369__$1 = (function (){var statearr_31377 = state_31369;
(statearr_31377[(8)] = inst_31361);

return statearr_31377;
})();
var statearr_31378_31389 = state_31369__$1;
(statearr_31378_31389[(2)] = null);

(statearr_31378_31389[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23341__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23341__auto____0 = (function (){
var statearr_31379 = [null,null,null,null,null,null,null,null,null];
(statearr_31379[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23341__auto__);

(statearr_31379[(1)] = (1));

return statearr_31379;
});
var figwheel$client$heads_up_plugin_$_state_machine__23341__auto____1 = (function (state_31369){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_31369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e31380){if((e31380 instanceof Object)){
var ex__23344__auto__ = e31380;
var statearr_31381_31390 = state_31369;
(statearr_31381_31390[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31391 = state_31369;
state_31369 = G__31391;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23341__auto__ = function(state_31369){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23341__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23341__auto____1.call(this,state_31369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23341__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23341__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_31382 = f__23436__auto__.call(null);
(statearr_31382[(6)] = c__23435__auto___31383);

return statearr_31382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_31397){
var state_val_31398 = (state_31397[(1)]);
if((state_val_31398 === (1))){
var inst_31392 = cljs.core.async.timeout.call(null,(3000));
var state_31397__$1 = state_31397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31397__$1,(2),inst_31392);
} else {
if((state_val_31398 === (2))){
var inst_31394 = (state_31397[(2)]);
var inst_31395 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31397__$1 = (function (){var statearr_31399 = state_31397;
(statearr_31399[(7)] = inst_31394);

return statearr_31399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31397__$1,inst_31395);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23341__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23341__auto____0 = (function (){
var statearr_31400 = [null,null,null,null,null,null,null,null];
(statearr_31400[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23341__auto__);

(statearr_31400[(1)] = (1));

return statearr_31400;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23341__auto____1 = (function (state_31397){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_31397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e31401){if((e31401 instanceof Object)){
var ex__23344__auto__ = e31401;
var statearr_31402_31404 = state_31397;
(statearr_31402_31404[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31405 = state_31397;
state_31397 = G__31405;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23341__auto__ = function(state_31397){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23341__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23341__auto____1.call(this,state_31397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23341__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23341__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_31403 = f__23436__auto__.call(null);
(statearr_31403[(6)] = c__23435__auto__);

return statearr_31403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

return c__23435__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_31412){
var state_val_31413 = (state_31412[(1)]);
if((state_val_31413 === (1))){
var inst_31406 = cljs.core.async.timeout.call(null,(2000));
var state_31412__$1 = state_31412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31412__$1,(2),inst_31406);
} else {
if((state_val_31413 === (2))){
var inst_31408 = (state_31412[(2)]);
var inst_31409 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31410 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31409);
var state_31412__$1 = (function (){var statearr_31414 = state_31412;
(statearr_31414[(7)] = inst_31408);

return statearr_31414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31412__$1,inst_31410);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto____0 = (function (){
var statearr_31415 = [null,null,null,null,null,null,null,null];
(statearr_31415[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto__);

(statearr_31415[(1)] = (1));

return statearr_31415;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto____1 = (function (state_31412){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_31412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e31416){if((e31416 instanceof Object)){
var ex__23344__auto__ = e31416;
var statearr_31417_31419 = state_31412;
(statearr_31417_31419[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31420 = state_31412;
state_31412 = G__31420;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto__ = function(state_31412){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto____1.call(this,state_31412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_31418 = f__23436__auto__.call(null);
(statearr_31418[(6)] = c__23435__auto__);

return statearr_31418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

return c__23435__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31421){
var map__31422 = p__31421;
var map__31422__$1 = (((((!((map__31422 == null))))?(((((map__31422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31422):map__31422);
var file = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31424 = "";
var G__31424__$1 = (cljs.core.truth_(file)?[G__31424,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31424);
var G__31424__$2 = (cljs.core.truth_(line)?[G__31424__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31424__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__31424__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31424__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31425){
var map__31426 = p__31425;
var map__31426__$1 = (((((!((map__31426 == null))))?(((((map__31426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31426):map__31426);
var ed = map__31426__$1;
var exception_data = cljs.core.get.call(null,map__31426__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31426__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31429 = (function (){var G__31428 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31428)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31428;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31429);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31430){
var map__31431 = p__31430;
var map__31431__$1 = (((((!((map__31431 == null))))?(((((map__31431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31431):map__31431);
var w = map__31431__$1;
var message = cljs.core.get.call(null,map__31431__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31433 = cljs.core.seq.call(null,plugins);
var chunk__31434 = null;
var count__31435 = (0);
var i__31436 = (0);
while(true){
if((i__31436 < count__31435)){
var vec__31443 = cljs.core._nth.call(null,chunk__31434,i__31436);
var k = cljs.core.nth.call(null,vec__31443,(0),null);
var plugin = cljs.core.nth.call(null,vec__31443,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31449 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31433,chunk__31434,count__31435,i__31436,pl_31449,vec__31443,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31449.call(null,msg_hist);
});})(seq__31433,chunk__31434,count__31435,i__31436,pl_31449,vec__31443,k,plugin))
);
} else {
}


var G__31450 = seq__31433;
var G__31451 = chunk__31434;
var G__31452 = count__31435;
var G__31453 = (i__31436 + (1));
seq__31433 = G__31450;
chunk__31434 = G__31451;
count__31435 = G__31452;
i__31436 = G__31453;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31433);
if(temp__5720__auto__){
var seq__31433__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31433__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31433__$1);
var G__31454 = cljs.core.chunk_rest.call(null,seq__31433__$1);
var G__31455 = c__4556__auto__;
var G__31456 = cljs.core.count.call(null,c__4556__auto__);
var G__31457 = (0);
seq__31433 = G__31454;
chunk__31434 = G__31455;
count__31435 = G__31456;
i__31436 = G__31457;
continue;
} else {
var vec__31446 = cljs.core.first.call(null,seq__31433__$1);
var k = cljs.core.nth.call(null,vec__31446,(0),null);
var plugin = cljs.core.nth.call(null,vec__31446,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31458 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31433,chunk__31434,count__31435,i__31436,pl_31458,vec__31446,k,plugin,seq__31433__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31458.call(null,msg_hist);
});})(seq__31433,chunk__31434,count__31435,i__31436,pl_31458,vec__31446,k,plugin,seq__31433__$1,temp__5720__auto__))
);
} else {
}


var G__31459 = cljs.core.next.call(null,seq__31433__$1);
var G__31460 = null;
var G__31461 = (0);
var G__31462 = (0);
seq__31433 = G__31459;
chunk__31434 = G__31460;
count__31435 = G__31461;
i__31436 = G__31462;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31464 = arguments.length;
switch (G__31464) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31465_31470 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31466_31471 = null;
var count__31467_31472 = (0);
var i__31468_31473 = (0);
while(true){
if((i__31468_31473 < count__31467_31472)){
var msg_31474 = cljs.core._nth.call(null,chunk__31466_31471,i__31468_31473);
figwheel.client.socket.handle_incoming_message.call(null,msg_31474);


var G__31475 = seq__31465_31470;
var G__31476 = chunk__31466_31471;
var G__31477 = count__31467_31472;
var G__31478 = (i__31468_31473 + (1));
seq__31465_31470 = G__31475;
chunk__31466_31471 = G__31476;
count__31467_31472 = G__31477;
i__31468_31473 = G__31478;
continue;
} else {
var temp__5720__auto___31479 = cljs.core.seq.call(null,seq__31465_31470);
if(temp__5720__auto___31479){
var seq__31465_31480__$1 = temp__5720__auto___31479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31465_31480__$1)){
var c__4556__auto___31481 = cljs.core.chunk_first.call(null,seq__31465_31480__$1);
var G__31482 = cljs.core.chunk_rest.call(null,seq__31465_31480__$1);
var G__31483 = c__4556__auto___31481;
var G__31484 = cljs.core.count.call(null,c__4556__auto___31481);
var G__31485 = (0);
seq__31465_31470 = G__31482;
chunk__31466_31471 = G__31483;
count__31467_31472 = G__31484;
i__31468_31473 = G__31485;
continue;
} else {
var msg_31486 = cljs.core.first.call(null,seq__31465_31480__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31486);


var G__31487 = cljs.core.next.call(null,seq__31465_31480__$1);
var G__31488 = null;
var G__31489 = (0);
var G__31490 = (0);
seq__31465_31470 = G__31487;
chunk__31466_31471 = G__31488;
count__31467_31472 = G__31489;
i__31468_31473 = G__31490;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31495 = arguments.length;
var i__4737__auto___31496 = (0);
while(true){
if((i__4737__auto___31496 < len__4736__auto___31495)){
args__4742__auto__.push((arguments[i__4737__auto___31496]));

var G__31497 = (i__4737__auto___31496 + (1));
i__4737__auto___31496 = G__31497;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31492){
var map__31493 = p__31492;
var map__31493__$1 = (((((!((map__31493 == null))))?(((((map__31493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31493):map__31493);
var opts = map__31493__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31491){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31491));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31498){if((e31498 instanceof Error)){
var e = e31498;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31498;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31499){
var map__31500 = p__31499;
var map__31500__$1 = (((((!((map__31500 == null))))?(((((map__31500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31500):map__31500);
var msg_name = cljs.core.get.call(null,map__31500__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1608325375001
