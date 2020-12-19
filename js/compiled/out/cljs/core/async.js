// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23495 = arguments.length;
switch (G__23495) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23496 = (function (f,blockable,meta23497){
this.f = f;
this.blockable = blockable;
this.meta23497 = meta23497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23498,meta23497__$1){
var self__ = this;
var _23498__$1 = this;
return (new cljs.core.async.t_cljs$core$async23496(self__.f,self__.blockable,meta23497__$1));
}));

(cljs.core.async.t_cljs$core$async23496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23498){
var self__ = this;
var _23498__$1 = this;
return self__.meta23497;
}));

(cljs.core.async.t_cljs$core$async23496.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23496.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23497","meta23497",349618984,null)], null);
}));

(cljs.core.async.t_cljs$core$async23496.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23496");

(cljs.core.async.t_cljs$core$async23496.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23496");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23496.
 */
cljs.core.async.__GT_t_cljs$core$async23496 = (function cljs$core$async$__GT_t_cljs$core$async23496(f__$1,blockable__$1,meta23497){
return (new cljs.core.async.t_cljs$core$async23496(f__$1,blockable__$1,meta23497));
});

}

return (new cljs.core.async.t_cljs$core$async23496(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23502 = arguments.length;
switch (G__23502) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23505 = arguments.length;
switch (G__23505) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23508 = arguments.length;
switch (G__23508) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23510 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23510);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_23510);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23512 = arguments.length;
switch (G__23512) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___23514 = n;
var x_23515 = (0);
while(true){
if((x_23515 < n__4613__auto___23514)){
(a[x_23515] = x_23515);

var G__23516 = (x_23515 + (1));
x_23515 = G__23516;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23517 = (function (flag,meta23518){
this.flag = flag;
this.meta23518 = meta23518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23519,meta23518__$1){
var self__ = this;
var _23519__$1 = this;
return (new cljs.core.async.t_cljs$core$async23517(self__.flag,meta23518__$1));
}));

(cljs.core.async.t_cljs$core$async23517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23519){
var self__ = this;
var _23519__$1 = this;
return self__.meta23518;
}));

(cljs.core.async.t_cljs$core$async23517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23518","meta23518",-606304154,null)], null);
}));

(cljs.core.async.t_cljs$core$async23517.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23517");

(cljs.core.async.t_cljs$core$async23517.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23517");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23517.
 */
cljs.core.async.__GT_t_cljs$core$async23517 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23517(flag__$1,meta23518){
return (new cljs.core.async.t_cljs$core$async23517(flag__$1,meta23518));
});

}

return (new cljs.core.async.t_cljs$core$async23517(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23520 = (function (flag,cb,meta23521){
this.flag = flag;
this.cb = cb;
this.meta23521 = meta23521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23522,meta23521__$1){
var self__ = this;
var _23522__$1 = this;
return (new cljs.core.async.t_cljs$core$async23520(self__.flag,self__.cb,meta23521__$1));
}));

(cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23522){
var self__ = this;
var _23522__$1 = this;
return self__.meta23521;
}));

(cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23521","meta23521",1443609380,null)], null);
}));

(cljs.core.async.t_cljs$core$async23520.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23520");

(cljs.core.async.t_cljs$core$async23520.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23520");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23520.
 */
cljs.core.async.__GT_t_cljs$core$async23520 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23520(flag__$1,cb__$1,meta23521){
return (new cljs.core.async.t_cljs$core$async23520(flag__$1,cb__$1,meta23521));
});

}

return (new cljs.core.async.t_cljs$core$async23520(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23523_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23523_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23524_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23524_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23525 = (i + (1));
i = G__23525;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23531 = arguments.length;
var i__4737__auto___23532 = (0);
while(true){
if((i__4737__auto___23532 < len__4736__auto___23531)){
args__4742__auto__.push((arguments[i__4737__auto___23532]));

var G__23533 = (i__4737__auto___23532 + (1));
i__4737__auto___23532 = G__23533;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23528){
var map__23529 = p__23528;
var map__23529__$1 = (((((!((map__23529 == null))))?(((((map__23529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23529):map__23529);
var opts = map__23529__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23526){
var G__23527 = cljs.core.first.call(null,seq23526);
var seq23526__$1 = cljs.core.next.call(null,seq23526);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23527,seq23526__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23535 = arguments.length;
switch (G__23535) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23435__auto___23581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_23559){
var state_val_23560 = (state_23559[(1)]);
if((state_val_23560 === (7))){
var inst_23555 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23561_23582 = state_23559__$1;
(statearr_23561_23582[(2)] = inst_23555);

(statearr_23561_23582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (1))){
var state_23559__$1 = state_23559;
var statearr_23562_23583 = state_23559__$1;
(statearr_23562_23583[(2)] = null);

(statearr_23562_23583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (4))){
var inst_23538 = (state_23559[(7)]);
var inst_23538__$1 = (state_23559[(2)]);
var inst_23539 = (inst_23538__$1 == null);
var state_23559__$1 = (function (){var statearr_23563 = state_23559;
(statearr_23563[(7)] = inst_23538__$1);

return statearr_23563;
})();
if(cljs.core.truth_(inst_23539)){
var statearr_23564_23584 = state_23559__$1;
(statearr_23564_23584[(1)] = (5));

} else {
var statearr_23565_23585 = state_23559__$1;
(statearr_23565_23585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (13))){
var state_23559__$1 = state_23559;
var statearr_23566_23586 = state_23559__$1;
(statearr_23566_23586[(2)] = null);

(statearr_23566_23586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (6))){
var inst_23538 = (state_23559[(7)]);
var state_23559__$1 = state_23559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23559__$1,(11),to,inst_23538);
} else {
if((state_val_23560 === (3))){
var inst_23557 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23559__$1,inst_23557);
} else {
if((state_val_23560 === (12))){
var state_23559__$1 = state_23559;
var statearr_23567_23587 = state_23559__$1;
(statearr_23567_23587[(2)] = null);

(statearr_23567_23587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (2))){
var state_23559__$1 = state_23559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23559__$1,(4),from);
} else {
if((state_val_23560 === (11))){
var inst_23548 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
if(cljs.core.truth_(inst_23548)){
var statearr_23568_23588 = state_23559__$1;
(statearr_23568_23588[(1)] = (12));

} else {
var statearr_23569_23589 = state_23559__$1;
(statearr_23569_23589[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (9))){
var state_23559__$1 = state_23559;
var statearr_23570_23590 = state_23559__$1;
(statearr_23570_23590[(2)] = null);

(statearr_23570_23590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (5))){
var state_23559__$1 = state_23559;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23571_23591 = state_23559__$1;
(statearr_23571_23591[(1)] = (8));

} else {
var statearr_23572_23592 = state_23559__$1;
(statearr_23572_23592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (14))){
var inst_23553 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23573_23593 = state_23559__$1;
(statearr_23573_23593[(2)] = inst_23553);

(statearr_23573_23593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (10))){
var inst_23545 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23574_23594 = state_23559__$1;
(statearr_23574_23594[(2)] = inst_23545);

(statearr_23574_23594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (8))){
var inst_23542 = cljs.core.async.close_BANG_.call(null,to);
var state_23559__$1 = state_23559;
var statearr_23575_23595 = state_23559__$1;
(statearr_23575_23595[(2)] = inst_23542);

(statearr_23575_23595[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_23576 = [null,null,null,null,null,null,null,null];
(statearr_23576[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_23576[(1)] = (1));

return statearr_23576;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_23559){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_23559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e23577){if((e23577 instanceof Object)){
var ex__23344__auto__ = e23577;
var statearr_23578_23596 = state_23559;
(statearr_23578_23596[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23597 = state_23559;
state_23559 = G__23597;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_23559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_23559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_23579 = f__23436__auto__.call(null);
(statearr_23579[(6)] = c__23435__auto___23581);

return statearr_23579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__23598){
var vec__23599 = p__23598;
var v = cljs.core.nth.call(null,vec__23599,(0),null);
var p = cljs.core.nth.call(null,vec__23599,(1),null);
var job = vec__23599;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23435__auto___23770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_23606){
var state_val_23607 = (state_23606[(1)]);
if((state_val_23607 === (1))){
var state_23606__$1 = state_23606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23606__$1,(2),res,v);
} else {
if((state_val_23607 === (2))){
var inst_23603 = (state_23606[(2)]);
var inst_23604 = cljs.core.async.close_BANG_.call(null,res);
var state_23606__$1 = (function (){var statearr_23608 = state_23606;
(statearr_23608[(7)] = inst_23603);

return statearr_23608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23606__$1,inst_23604);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0 = (function (){
var statearr_23609 = [null,null,null,null,null,null,null,null];
(statearr_23609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__);

(statearr_23609[(1)] = (1));

return statearr_23609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1 = (function (state_23606){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_23606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e23610){if((e23610 instanceof Object)){
var ex__23344__auto__ = e23610;
var statearr_23611_23771 = state_23606;
(statearr_23611_23771[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23772 = state_23606;
state_23606 = G__23772;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__ = function(state_23606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1.call(this,state_23606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_23612 = f__23436__auto__.call(null);
(statearr_23612[(6)] = c__23435__auto___23770);

return statearr_23612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__23613){
var vec__23614 = p__23613;
var v = cljs.core.nth.call(null,vec__23614,(0),null);
var p = cljs.core.nth.call(null,vec__23614,(1),null);
var job = vec__23614;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___23773 = n;
var __23774 = (0);
while(true){
if((__23774 < n__4613__auto___23773)){
var G__23617_23775 = type;
var G__23617_23776__$1 = (((G__23617_23775 instanceof cljs.core.Keyword))?G__23617_23775.fqn:null);
switch (G__23617_23776__$1) {
case "compute":
var c__23435__auto___23778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23774,c__23435__auto___23778,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async){
return (function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = ((function (__23774,c__23435__auto___23778,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async){
return (function (state_23630){
var state_val_23631 = (state_23630[(1)]);
if((state_val_23631 === (1))){
var state_23630__$1 = state_23630;
var statearr_23632_23779 = state_23630__$1;
(statearr_23632_23779[(2)] = null);

(statearr_23632_23779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (2))){
var state_23630__$1 = state_23630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23630__$1,(4),jobs);
} else {
if((state_val_23631 === (3))){
var inst_23628 = (state_23630[(2)]);
var state_23630__$1 = state_23630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23630__$1,inst_23628);
} else {
if((state_val_23631 === (4))){
var inst_23620 = (state_23630[(2)]);
var inst_23621 = process.call(null,inst_23620);
var state_23630__$1 = state_23630;
if(cljs.core.truth_(inst_23621)){
var statearr_23633_23780 = state_23630__$1;
(statearr_23633_23780[(1)] = (5));

} else {
var statearr_23634_23781 = state_23630__$1;
(statearr_23634_23781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (5))){
var state_23630__$1 = state_23630;
var statearr_23635_23782 = state_23630__$1;
(statearr_23635_23782[(2)] = null);

(statearr_23635_23782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (6))){
var state_23630__$1 = state_23630;
var statearr_23636_23783 = state_23630__$1;
(statearr_23636_23783[(2)] = null);

(statearr_23636_23783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (7))){
var inst_23626 = (state_23630[(2)]);
var state_23630__$1 = state_23630;
var statearr_23637_23784 = state_23630__$1;
(statearr_23637_23784[(2)] = inst_23626);

(statearr_23637_23784[(1)] = (3));


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
});})(__23774,c__23435__auto___23778,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async))
;
return ((function (__23774,switch__23340__auto__,c__23435__auto___23778,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0 = (function (){
var statearr_23638 = [null,null,null,null,null,null,null];
(statearr_23638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__);

(statearr_23638[(1)] = (1));

return statearr_23638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1 = (function (state_23630){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_23630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e23639){if((e23639 instanceof Object)){
var ex__23344__auto__ = e23639;
var statearr_23640_23785 = state_23630;
(statearr_23640_23785[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23786 = state_23630;
state_23630 = G__23786;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__ = function(state_23630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1.call(this,state_23630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__;
})()
;})(__23774,switch__23340__auto__,c__23435__auto___23778,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async))
})();
var state__23437__auto__ = (function (){var statearr_23641 = f__23436__auto__.call(null);
(statearr_23641[(6)] = c__23435__auto___23778);

return statearr_23641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
});})(__23774,c__23435__auto___23778,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async))
);


break;
case "async":
var c__23435__auto___23787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23774,c__23435__auto___23787,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async){
return (function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = ((function (__23774,c__23435__auto___23787,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async){
return (function (state_23654){
var state_val_23655 = (state_23654[(1)]);
if((state_val_23655 === (1))){
var state_23654__$1 = state_23654;
var statearr_23656_23788 = state_23654__$1;
(statearr_23656_23788[(2)] = null);

(statearr_23656_23788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (2))){
var state_23654__$1 = state_23654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23654__$1,(4),jobs);
} else {
if((state_val_23655 === (3))){
var inst_23652 = (state_23654[(2)]);
var state_23654__$1 = state_23654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23654__$1,inst_23652);
} else {
if((state_val_23655 === (4))){
var inst_23644 = (state_23654[(2)]);
var inst_23645 = async.call(null,inst_23644);
var state_23654__$1 = state_23654;
if(cljs.core.truth_(inst_23645)){
var statearr_23657_23789 = state_23654__$1;
(statearr_23657_23789[(1)] = (5));

} else {
var statearr_23658_23790 = state_23654__$1;
(statearr_23658_23790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (5))){
var state_23654__$1 = state_23654;
var statearr_23659_23791 = state_23654__$1;
(statearr_23659_23791[(2)] = null);

(statearr_23659_23791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (6))){
var state_23654__$1 = state_23654;
var statearr_23660_23792 = state_23654__$1;
(statearr_23660_23792[(2)] = null);

(statearr_23660_23792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23655 === (7))){
var inst_23650 = (state_23654[(2)]);
var state_23654__$1 = state_23654;
var statearr_23661_23793 = state_23654__$1;
(statearr_23661_23793[(2)] = inst_23650);

(statearr_23661_23793[(1)] = (3));


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
});})(__23774,c__23435__auto___23787,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async))
;
return ((function (__23774,switch__23340__auto__,c__23435__auto___23787,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0 = (function (){
var statearr_23662 = [null,null,null,null,null,null,null];
(statearr_23662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__);

(statearr_23662[(1)] = (1));

return statearr_23662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1 = (function (state_23654){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_23654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e23663){if((e23663 instanceof Object)){
var ex__23344__auto__ = e23663;
var statearr_23664_23794 = state_23654;
(statearr_23664_23794[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23795 = state_23654;
state_23654 = G__23795;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__ = function(state_23654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1.call(this,state_23654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__;
})()
;})(__23774,switch__23340__auto__,c__23435__auto___23787,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async))
})();
var state__23437__auto__ = (function (){var statearr_23665 = f__23436__auto__.call(null);
(statearr_23665[(6)] = c__23435__auto___23787);

return statearr_23665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
});})(__23774,c__23435__auto___23787,G__23617_23775,G__23617_23776__$1,n__4613__auto___23773,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23617_23776__$1)].join('')));

}

var G__23796 = (__23774 + (1));
__23774 = G__23796;
continue;
} else {
}
break;
}

var c__23435__auto___23797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_23687){
var state_val_23688 = (state_23687[(1)]);
if((state_val_23688 === (7))){
var inst_23683 = (state_23687[(2)]);
var state_23687__$1 = state_23687;
var statearr_23689_23798 = state_23687__$1;
(statearr_23689_23798[(2)] = inst_23683);

(statearr_23689_23798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23688 === (1))){
var state_23687__$1 = state_23687;
var statearr_23690_23799 = state_23687__$1;
(statearr_23690_23799[(2)] = null);

(statearr_23690_23799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23688 === (4))){
var inst_23668 = (state_23687[(7)]);
var inst_23668__$1 = (state_23687[(2)]);
var inst_23669 = (inst_23668__$1 == null);
var state_23687__$1 = (function (){var statearr_23691 = state_23687;
(statearr_23691[(7)] = inst_23668__$1);

return statearr_23691;
})();
if(cljs.core.truth_(inst_23669)){
var statearr_23692_23800 = state_23687__$1;
(statearr_23692_23800[(1)] = (5));

} else {
var statearr_23693_23801 = state_23687__$1;
(statearr_23693_23801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23688 === (6))){
var inst_23673 = (state_23687[(8)]);
var inst_23668 = (state_23687[(7)]);
var inst_23673__$1 = cljs.core.async.chan.call(null,(1));
var inst_23674 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23675 = [inst_23668,inst_23673__$1];
var inst_23676 = (new cljs.core.PersistentVector(null,2,(5),inst_23674,inst_23675,null));
var state_23687__$1 = (function (){var statearr_23694 = state_23687;
(statearr_23694[(8)] = inst_23673__$1);

return statearr_23694;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23687__$1,(8),jobs,inst_23676);
} else {
if((state_val_23688 === (3))){
var inst_23685 = (state_23687[(2)]);
var state_23687__$1 = state_23687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23687__$1,inst_23685);
} else {
if((state_val_23688 === (2))){
var state_23687__$1 = state_23687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23687__$1,(4),from);
} else {
if((state_val_23688 === (9))){
var inst_23680 = (state_23687[(2)]);
var state_23687__$1 = (function (){var statearr_23695 = state_23687;
(statearr_23695[(9)] = inst_23680);

return statearr_23695;
})();
var statearr_23696_23802 = state_23687__$1;
(statearr_23696_23802[(2)] = null);

(statearr_23696_23802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23688 === (5))){
var inst_23671 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23687__$1 = state_23687;
var statearr_23697_23803 = state_23687__$1;
(statearr_23697_23803[(2)] = inst_23671);

(statearr_23697_23803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23688 === (8))){
var inst_23673 = (state_23687[(8)]);
var inst_23678 = (state_23687[(2)]);
var state_23687__$1 = (function (){var statearr_23698 = state_23687;
(statearr_23698[(10)] = inst_23678);

return statearr_23698;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23687__$1,(9),results,inst_23673);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0 = (function (){
var statearr_23699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__);

(statearr_23699[(1)] = (1));

return statearr_23699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1 = (function (state_23687){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_23687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e23700){if((e23700 instanceof Object)){
var ex__23344__auto__ = e23700;
var statearr_23701_23804 = state_23687;
(statearr_23701_23804[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23805 = state_23687;
state_23687 = G__23805;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__ = function(state_23687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1.call(this,state_23687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_23702 = f__23436__auto__.call(null);
(statearr_23702[(6)] = c__23435__auto___23797);

return statearr_23702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


var c__23435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_23740){
var state_val_23741 = (state_23740[(1)]);
if((state_val_23741 === (7))){
var inst_23736 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23742_23806 = state_23740__$1;
(statearr_23742_23806[(2)] = inst_23736);

(statearr_23742_23806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (20))){
var state_23740__$1 = state_23740;
var statearr_23743_23807 = state_23740__$1;
(statearr_23743_23807[(2)] = null);

(statearr_23743_23807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (1))){
var state_23740__$1 = state_23740;
var statearr_23744_23808 = state_23740__$1;
(statearr_23744_23808[(2)] = null);

(statearr_23744_23808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (4))){
var inst_23705 = (state_23740[(7)]);
var inst_23705__$1 = (state_23740[(2)]);
var inst_23706 = (inst_23705__$1 == null);
var state_23740__$1 = (function (){var statearr_23745 = state_23740;
(statearr_23745[(7)] = inst_23705__$1);

return statearr_23745;
})();
if(cljs.core.truth_(inst_23706)){
var statearr_23746_23809 = state_23740__$1;
(statearr_23746_23809[(1)] = (5));

} else {
var statearr_23747_23810 = state_23740__$1;
(statearr_23747_23810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (15))){
var inst_23718 = (state_23740[(8)]);
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23740__$1,(18),to,inst_23718);
} else {
if((state_val_23741 === (21))){
var inst_23731 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23748_23811 = state_23740__$1;
(statearr_23748_23811[(2)] = inst_23731);

(statearr_23748_23811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (13))){
var inst_23733 = (state_23740[(2)]);
var state_23740__$1 = (function (){var statearr_23749 = state_23740;
(statearr_23749[(9)] = inst_23733);

return statearr_23749;
})();
var statearr_23750_23812 = state_23740__$1;
(statearr_23750_23812[(2)] = null);

(statearr_23750_23812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (6))){
var inst_23705 = (state_23740[(7)]);
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23740__$1,(11),inst_23705);
} else {
if((state_val_23741 === (17))){
var inst_23726 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
if(cljs.core.truth_(inst_23726)){
var statearr_23751_23813 = state_23740__$1;
(statearr_23751_23813[(1)] = (19));

} else {
var statearr_23752_23814 = state_23740__$1;
(statearr_23752_23814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (3))){
var inst_23738 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23740__$1,inst_23738);
} else {
if((state_val_23741 === (12))){
var inst_23715 = (state_23740[(10)]);
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23740__$1,(14),inst_23715);
} else {
if((state_val_23741 === (2))){
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23740__$1,(4),results);
} else {
if((state_val_23741 === (19))){
var state_23740__$1 = state_23740;
var statearr_23753_23815 = state_23740__$1;
(statearr_23753_23815[(2)] = null);

(statearr_23753_23815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (11))){
var inst_23715 = (state_23740[(2)]);
var state_23740__$1 = (function (){var statearr_23754 = state_23740;
(statearr_23754[(10)] = inst_23715);

return statearr_23754;
})();
var statearr_23755_23816 = state_23740__$1;
(statearr_23755_23816[(2)] = null);

(statearr_23755_23816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (9))){
var state_23740__$1 = state_23740;
var statearr_23756_23817 = state_23740__$1;
(statearr_23756_23817[(2)] = null);

(statearr_23756_23817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (5))){
var state_23740__$1 = state_23740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23757_23818 = state_23740__$1;
(statearr_23757_23818[(1)] = (8));

} else {
var statearr_23758_23819 = state_23740__$1;
(statearr_23758_23819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (14))){
var inst_23718 = (state_23740[(8)]);
var inst_23718__$1 = (state_23740[(2)]);
var inst_23719 = (inst_23718__$1 == null);
var inst_23720 = cljs.core.not.call(null,inst_23719);
var state_23740__$1 = (function (){var statearr_23759 = state_23740;
(statearr_23759[(8)] = inst_23718__$1);

return statearr_23759;
})();
if(inst_23720){
var statearr_23760_23820 = state_23740__$1;
(statearr_23760_23820[(1)] = (15));

} else {
var statearr_23761_23821 = state_23740__$1;
(statearr_23761_23821[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (16))){
var state_23740__$1 = state_23740;
var statearr_23762_23822 = state_23740__$1;
(statearr_23762_23822[(2)] = false);

(statearr_23762_23822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (10))){
var inst_23712 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23763_23823 = state_23740__$1;
(statearr_23763_23823[(2)] = inst_23712);

(statearr_23763_23823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (18))){
var inst_23723 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23764_23824 = state_23740__$1;
(statearr_23764_23824[(2)] = inst_23723);

(statearr_23764_23824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (8))){
var inst_23709 = cljs.core.async.close_BANG_.call(null,to);
var state_23740__$1 = state_23740;
var statearr_23765_23825 = state_23740__$1;
(statearr_23765_23825[(2)] = inst_23709);

(statearr_23765_23825[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0 = (function (){
var statearr_23766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__);

(statearr_23766[(1)] = (1));

return statearr_23766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1 = (function (state_23740){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_23740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e23767){if((e23767 instanceof Object)){
var ex__23344__auto__ = e23767;
var statearr_23768_23826 = state_23740;
(statearr_23768_23826[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23827 = state_23740;
state_23740 = G__23827;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__ = function(state_23740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1.call(this,state_23740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_23769 = f__23436__auto__.call(null);
(statearr_23769[(6)] = c__23435__auto__);

return statearr_23769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

return c__23435__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23829 = arguments.length;
switch (G__23829) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23832 = arguments.length;
switch (G__23832) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23835 = arguments.length;
switch (G__23835) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23435__auto___23884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_23861){
var state_val_23862 = (state_23861[(1)]);
if((state_val_23862 === (7))){
var inst_23857 = (state_23861[(2)]);
var state_23861__$1 = state_23861;
var statearr_23863_23885 = state_23861__$1;
(statearr_23863_23885[(2)] = inst_23857);

(statearr_23863_23885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (1))){
var state_23861__$1 = state_23861;
var statearr_23864_23886 = state_23861__$1;
(statearr_23864_23886[(2)] = null);

(statearr_23864_23886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (4))){
var inst_23838 = (state_23861[(7)]);
var inst_23838__$1 = (state_23861[(2)]);
var inst_23839 = (inst_23838__$1 == null);
var state_23861__$1 = (function (){var statearr_23865 = state_23861;
(statearr_23865[(7)] = inst_23838__$1);

return statearr_23865;
})();
if(cljs.core.truth_(inst_23839)){
var statearr_23866_23887 = state_23861__$1;
(statearr_23866_23887[(1)] = (5));

} else {
var statearr_23867_23888 = state_23861__$1;
(statearr_23867_23888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (13))){
var state_23861__$1 = state_23861;
var statearr_23868_23889 = state_23861__$1;
(statearr_23868_23889[(2)] = null);

(statearr_23868_23889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (6))){
var inst_23838 = (state_23861[(7)]);
var inst_23844 = p.call(null,inst_23838);
var state_23861__$1 = state_23861;
if(cljs.core.truth_(inst_23844)){
var statearr_23869_23890 = state_23861__$1;
(statearr_23869_23890[(1)] = (9));

} else {
var statearr_23870_23891 = state_23861__$1;
(statearr_23870_23891[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (3))){
var inst_23859 = (state_23861[(2)]);
var state_23861__$1 = state_23861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23861__$1,inst_23859);
} else {
if((state_val_23862 === (12))){
var state_23861__$1 = state_23861;
var statearr_23871_23892 = state_23861__$1;
(statearr_23871_23892[(2)] = null);

(statearr_23871_23892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (2))){
var state_23861__$1 = state_23861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23861__$1,(4),ch);
} else {
if((state_val_23862 === (11))){
var inst_23838 = (state_23861[(7)]);
var inst_23848 = (state_23861[(2)]);
var state_23861__$1 = state_23861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23861__$1,(8),inst_23848,inst_23838);
} else {
if((state_val_23862 === (9))){
var state_23861__$1 = state_23861;
var statearr_23872_23893 = state_23861__$1;
(statearr_23872_23893[(2)] = tc);

(statearr_23872_23893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (5))){
var inst_23841 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23842 = cljs.core.async.close_BANG_.call(null,fc);
var state_23861__$1 = (function (){var statearr_23873 = state_23861;
(statearr_23873[(8)] = inst_23841);

return statearr_23873;
})();
var statearr_23874_23894 = state_23861__$1;
(statearr_23874_23894[(2)] = inst_23842);

(statearr_23874_23894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (14))){
var inst_23855 = (state_23861[(2)]);
var state_23861__$1 = state_23861;
var statearr_23875_23895 = state_23861__$1;
(statearr_23875_23895[(2)] = inst_23855);

(statearr_23875_23895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (10))){
var state_23861__$1 = state_23861;
var statearr_23876_23896 = state_23861__$1;
(statearr_23876_23896[(2)] = fc);

(statearr_23876_23896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (8))){
var inst_23850 = (state_23861[(2)]);
var state_23861__$1 = state_23861;
if(cljs.core.truth_(inst_23850)){
var statearr_23877_23897 = state_23861__$1;
(statearr_23877_23897[(1)] = (12));

} else {
var statearr_23878_23898 = state_23861__$1;
(statearr_23878_23898[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_23879 = [null,null,null,null,null,null,null,null,null];
(statearr_23879[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_23879[(1)] = (1));

return statearr_23879;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_23861){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_23861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e23880){if((e23880 instanceof Object)){
var ex__23344__auto__ = e23880;
var statearr_23881_23899 = state_23861;
(statearr_23881_23899[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23900 = state_23861;
state_23861 = G__23900;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_23861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_23861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_23882 = f__23436__auto__.call(null);
(statearr_23882[(6)] = c__23435__auto___23884);

return statearr_23882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_23921){
var state_val_23922 = (state_23921[(1)]);
if((state_val_23922 === (7))){
var inst_23917 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23923_23941 = state_23921__$1;
(statearr_23923_23941[(2)] = inst_23917);

(statearr_23923_23941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (1))){
var inst_23901 = init;
var state_23921__$1 = (function (){var statearr_23924 = state_23921;
(statearr_23924[(7)] = inst_23901);

return statearr_23924;
})();
var statearr_23925_23942 = state_23921__$1;
(statearr_23925_23942[(2)] = null);

(statearr_23925_23942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (4))){
var inst_23904 = (state_23921[(8)]);
var inst_23904__$1 = (state_23921[(2)]);
var inst_23905 = (inst_23904__$1 == null);
var state_23921__$1 = (function (){var statearr_23926 = state_23921;
(statearr_23926[(8)] = inst_23904__$1);

return statearr_23926;
})();
if(cljs.core.truth_(inst_23905)){
var statearr_23927_23943 = state_23921__$1;
(statearr_23927_23943[(1)] = (5));

} else {
var statearr_23928_23944 = state_23921__$1;
(statearr_23928_23944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (6))){
var inst_23904 = (state_23921[(8)]);
var inst_23901 = (state_23921[(7)]);
var inst_23908 = (state_23921[(9)]);
var inst_23908__$1 = f.call(null,inst_23901,inst_23904);
var inst_23909 = cljs.core.reduced_QMARK_.call(null,inst_23908__$1);
var state_23921__$1 = (function (){var statearr_23929 = state_23921;
(statearr_23929[(9)] = inst_23908__$1);

return statearr_23929;
})();
if(inst_23909){
var statearr_23930_23945 = state_23921__$1;
(statearr_23930_23945[(1)] = (8));

} else {
var statearr_23931_23946 = state_23921__$1;
(statearr_23931_23946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (3))){
var inst_23919 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23921__$1,inst_23919);
} else {
if((state_val_23922 === (2))){
var state_23921__$1 = state_23921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23921__$1,(4),ch);
} else {
if((state_val_23922 === (9))){
var inst_23908 = (state_23921[(9)]);
var inst_23901 = inst_23908;
var state_23921__$1 = (function (){var statearr_23932 = state_23921;
(statearr_23932[(7)] = inst_23901);

return statearr_23932;
})();
var statearr_23933_23947 = state_23921__$1;
(statearr_23933_23947[(2)] = null);

(statearr_23933_23947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (5))){
var inst_23901 = (state_23921[(7)]);
var state_23921__$1 = state_23921;
var statearr_23934_23948 = state_23921__$1;
(statearr_23934_23948[(2)] = inst_23901);

(statearr_23934_23948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (10))){
var inst_23915 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23935_23949 = state_23921__$1;
(statearr_23935_23949[(2)] = inst_23915);

(statearr_23935_23949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (8))){
var inst_23908 = (state_23921[(9)]);
var inst_23911 = cljs.core.deref.call(null,inst_23908);
var state_23921__$1 = state_23921;
var statearr_23936_23950 = state_23921__$1;
(statearr_23936_23950[(2)] = inst_23911);

(statearr_23936_23950[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__23341__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23341__auto____0 = (function (){
var statearr_23937 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23937[(0)] = cljs$core$async$reduce_$_state_machine__23341__auto__);

(statearr_23937[(1)] = (1));

return statearr_23937;
});
var cljs$core$async$reduce_$_state_machine__23341__auto____1 = (function (state_23921){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_23921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e23938){if((e23938 instanceof Object)){
var ex__23344__auto__ = e23938;
var statearr_23939_23951 = state_23921;
(statearr_23939_23951[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23952 = state_23921;
state_23921 = G__23952;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23341__auto__ = function(state_23921){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23341__auto____1.call(this,state_23921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23341__auto____0;
cljs$core$async$reduce_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23341__auto____1;
return cljs$core$async$reduce_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_23940 = f__23436__auto__.call(null);
(statearr_23940[(6)] = c__23435__auto__);

return statearr_23940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

return c__23435__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_23958){
var state_val_23959 = (state_23958[(1)]);
if((state_val_23959 === (1))){
var inst_23953 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23958__$1 = state_23958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23958__$1,(2),inst_23953);
} else {
if((state_val_23959 === (2))){
var inst_23955 = (state_23958[(2)]);
var inst_23956 = f__$1.call(null,inst_23955);
var state_23958__$1 = state_23958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23958__$1,inst_23956);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23341__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23341__auto____0 = (function (){
var statearr_23960 = [null,null,null,null,null,null,null];
(statearr_23960[(0)] = cljs$core$async$transduce_$_state_machine__23341__auto__);

(statearr_23960[(1)] = (1));

return statearr_23960;
});
var cljs$core$async$transduce_$_state_machine__23341__auto____1 = (function (state_23958){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_23958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e23961){if((e23961 instanceof Object)){
var ex__23344__auto__ = e23961;
var statearr_23962_23964 = state_23958;
(statearr_23962_23964[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23965 = state_23958;
state_23958 = G__23965;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23341__auto__ = function(state_23958){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23341__auto____1.call(this,state_23958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23341__auto____0;
cljs$core$async$transduce_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23341__auto____1;
return cljs$core$async$transduce_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_23963 = f__23436__auto__.call(null);
(statearr_23963[(6)] = c__23435__auto__);

return statearr_23963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

return c__23435__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23967 = arguments.length;
switch (G__23967) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_23992){
var state_val_23993 = (state_23992[(1)]);
if((state_val_23993 === (7))){
var inst_23974 = (state_23992[(2)]);
var state_23992__$1 = state_23992;
var statearr_23994_24015 = state_23992__$1;
(statearr_23994_24015[(2)] = inst_23974);

(statearr_23994_24015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23993 === (1))){
var inst_23968 = cljs.core.seq.call(null,coll);
var inst_23969 = inst_23968;
var state_23992__$1 = (function (){var statearr_23995 = state_23992;
(statearr_23995[(7)] = inst_23969);

return statearr_23995;
})();
var statearr_23996_24016 = state_23992__$1;
(statearr_23996_24016[(2)] = null);

(statearr_23996_24016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23993 === (4))){
var inst_23969 = (state_23992[(7)]);
var inst_23972 = cljs.core.first.call(null,inst_23969);
var state_23992__$1 = state_23992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23992__$1,(7),ch,inst_23972);
} else {
if((state_val_23993 === (13))){
var inst_23986 = (state_23992[(2)]);
var state_23992__$1 = state_23992;
var statearr_23997_24017 = state_23992__$1;
(statearr_23997_24017[(2)] = inst_23986);

(statearr_23997_24017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23993 === (6))){
var inst_23977 = (state_23992[(2)]);
var state_23992__$1 = state_23992;
if(cljs.core.truth_(inst_23977)){
var statearr_23998_24018 = state_23992__$1;
(statearr_23998_24018[(1)] = (8));

} else {
var statearr_23999_24019 = state_23992__$1;
(statearr_23999_24019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23993 === (3))){
var inst_23990 = (state_23992[(2)]);
var state_23992__$1 = state_23992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23992__$1,inst_23990);
} else {
if((state_val_23993 === (12))){
var state_23992__$1 = state_23992;
var statearr_24000_24020 = state_23992__$1;
(statearr_24000_24020[(2)] = null);

(statearr_24000_24020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23993 === (2))){
var inst_23969 = (state_23992[(7)]);
var state_23992__$1 = state_23992;
if(cljs.core.truth_(inst_23969)){
var statearr_24001_24021 = state_23992__$1;
(statearr_24001_24021[(1)] = (4));

} else {
var statearr_24002_24022 = state_23992__$1;
(statearr_24002_24022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23993 === (11))){
var inst_23983 = cljs.core.async.close_BANG_.call(null,ch);
var state_23992__$1 = state_23992;
var statearr_24003_24023 = state_23992__$1;
(statearr_24003_24023[(2)] = inst_23983);

(statearr_24003_24023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23993 === (9))){
var state_23992__$1 = state_23992;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24004_24024 = state_23992__$1;
(statearr_24004_24024[(1)] = (11));

} else {
var statearr_24005_24025 = state_23992__$1;
(statearr_24005_24025[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23993 === (5))){
var inst_23969 = (state_23992[(7)]);
var state_23992__$1 = state_23992;
var statearr_24006_24026 = state_23992__$1;
(statearr_24006_24026[(2)] = inst_23969);

(statearr_24006_24026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23993 === (10))){
var inst_23988 = (state_23992[(2)]);
var state_23992__$1 = state_23992;
var statearr_24007_24027 = state_23992__$1;
(statearr_24007_24027[(2)] = inst_23988);

(statearr_24007_24027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23993 === (8))){
var inst_23969 = (state_23992[(7)]);
var inst_23979 = cljs.core.next.call(null,inst_23969);
var inst_23969__$1 = inst_23979;
var state_23992__$1 = (function (){var statearr_24008 = state_23992;
(statearr_24008[(7)] = inst_23969__$1);

return statearr_24008;
})();
var statearr_24009_24028 = state_23992__$1;
(statearr_24009_24028[(2)] = null);

(statearr_24009_24028[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_24010 = [null,null,null,null,null,null,null,null];
(statearr_24010[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_24010[(1)] = (1));

return statearr_24010;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_23992){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_23992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e24011){if((e24011 instanceof Object)){
var ex__23344__auto__ = e24011;
var statearr_24012_24029 = state_23992;
(statearr_24012_24029[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24030 = state_23992;
state_23992 = G__24030;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_23992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_23992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_24013 = f__23436__auto__.call(null);
(statearr_24013[(6)] = c__23435__auto__);

return statearr_24013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

return c__23435__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_24031 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_24031.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_24032 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_24032.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_24033 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_24033.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_24034 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_24034.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24035 = (function (ch,cs,meta24036){
this.ch = ch;
this.cs = cs;
this.meta24036 = meta24036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24037,meta24036__$1){
var self__ = this;
var _24037__$1 = this;
return (new cljs.core.async.t_cljs$core$async24035(self__.ch,self__.cs,meta24036__$1));
}));

(cljs.core.async.t_cljs$core$async24035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24037){
var self__ = this;
var _24037__$1 = this;
return self__.meta24036;
}));

(cljs.core.async.t_cljs$core$async24035.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24035.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24035.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24035.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24035.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24036","meta24036",-1826794961,null)], null);
}));

(cljs.core.async.t_cljs$core$async24035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24035");

(cljs.core.async.t_cljs$core$async24035.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24035.
 */
cljs.core.async.__GT_t_cljs$core$async24035 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24035(ch__$1,cs__$1,meta24036){
return (new cljs.core.async.t_cljs$core$async24035(ch__$1,cs__$1,meta24036));
});

}

return (new cljs.core.async.t_cljs$core$async24035(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__23435__auto___24257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_24172){
var state_val_24173 = (state_24172[(1)]);
if((state_val_24173 === (7))){
var inst_24168 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24174_24258 = state_24172__$1;
(statearr_24174_24258[(2)] = inst_24168);

(statearr_24174_24258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (20))){
var inst_24071 = (state_24172[(7)]);
var inst_24083 = cljs.core.first.call(null,inst_24071);
var inst_24084 = cljs.core.nth.call(null,inst_24083,(0),null);
var inst_24085 = cljs.core.nth.call(null,inst_24083,(1),null);
var state_24172__$1 = (function (){var statearr_24175 = state_24172;
(statearr_24175[(8)] = inst_24084);

return statearr_24175;
})();
if(cljs.core.truth_(inst_24085)){
var statearr_24176_24259 = state_24172__$1;
(statearr_24176_24259[(1)] = (22));

} else {
var statearr_24177_24260 = state_24172__$1;
(statearr_24177_24260[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (27))){
var inst_24040 = (state_24172[(9)]);
var inst_24120 = (state_24172[(10)]);
var inst_24115 = (state_24172[(11)]);
var inst_24113 = (state_24172[(12)]);
var inst_24120__$1 = cljs.core._nth.call(null,inst_24113,inst_24115);
var inst_24121 = cljs.core.async.put_BANG_.call(null,inst_24120__$1,inst_24040,done);
var state_24172__$1 = (function (){var statearr_24178 = state_24172;
(statearr_24178[(10)] = inst_24120__$1);

return statearr_24178;
})();
if(cljs.core.truth_(inst_24121)){
var statearr_24179_24261 = state_24172__$1;
(statearr_24179_24261[(1)] = (30));

} else {
var statearr_24180_24262 = state_24172__$1;
(statearr_24180_24262[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (1))){
var state_24172__$1 = state_24172;
var statearr_24181_24263 = state_24172__$1;
(statearr_24181_24263[(2)] = null);

(statearr_24181_24263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (24))){
var inst_24071 = (state_24172[(7)]);
var inst_24090 = (state_24172[(2)]);
var inst_24091 = cljs.core.next.call(null,inst_24071);
var inst_24049 = inst_24091;
var inst_24050 = null;
var inst_24051 = (0);
var inst_24052 = (0);
var state_24172__$1 = (function (){var statearr_24182 = state_24172;
(statearr_24182[(13)] = inst_24050);

(statearr_24182[(14)] = inst_24052);

(statearr_24182[(15)] = inst_24051);

(statearr_24182[(16)] = inst_24049);

(statearr_24182[(17)] = inst_24090);

return statearr_24182;
})();
var statearr_24183_24264 = state_24172__$1;
(statearr_24183_24264[(2)] = null);

(statearr_24183_24264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (39))){
var state_24172__$1 = state_24172;
var statearr_24187_24265 = state_24172__$1;
(statearr_24187_24265[(2)] = null);

(statearr_24187_24265[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (4))){
var inst_24040 = (state_24172[(9)]);
var inst_24040__$1 = (state_24172[(2)]);
var inst_24041 = (inst_24040__$1 == null);
var state_24172__$1 = (function (){var statearr_24188 = state_24172;
(statearr_24188[(9)] = inst_24040__$1);

return statearr_24188;
})();
if(cljs.core.truth_(inst_24041)){
var statearr_24189_24266 = state_24172__$1;
(statearr_24189_24266[(1)] = (5));

} else {
var statearr_24190_24267 = state_24172__$1;
(statearr_24190_24267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (15))){
var inst_24050 = (state_24172[(13)]);
var inst_24052 = (state_24172[(14)]);
var inst_24051 = (state_24172[(15)]);
var inst_24049 = (state_24172[(16)]);
var inst_24067 = (state_24172[(2)]);
var inst_24068 = (inst_24052 + (1));
var tmp24184 = inst_24050;
var tmp24185 = inst_24051;
var tmp24186 = inst_24049;
var inst_24049__$1 = tmp24186;
var inst_24050__$1 = tmp24184;
var inst_24051__$1 = tmp24185;
var inst_24052__$1 = inst_24068;
var state_24172__$1 = (function (){var statearr_24191 = state_24172;
(statearr_24191[(13)] = inst_24050__$1);

(statearr_24191[(14)] = inst_24052__$1);

(statearr_24191[(15)] = inst_24051__$1);

(statearr_24191[(16)] = inst_24049__$1);

(statearr_24191[(18)] = inst_24067);

return statearr_24191;
})();
var statearr_24192_24268 = state_24172__$1;
(statearr_24192_24268[(2)] = null);

(statearr_24192_24268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (21))){
var inst_24094 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24196_24269 = state_24172__$1;
(statearr_24196_24269[(2)] = inst_24094);

(statearr_24196_24269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (31))){
var inst_24120 = (state_24172[(10)]);
var inst_24124 = done.call(null,null);
var inst_24125 = cljs.core.async.untap_STAR_.call(null,m,inst_24120);
var state_24172__$1 = (function (){var statearr_24197 = state_24172;
(statearr_24197[(19)] = inst_24124);

return statearr_24197;
})();
var statearr_24198_24270 = state_24172__$1;
(statearr_24198_24270[(2)] = inst_24125);

(statearr_24198_24270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (32))){
var inst_24114 = (state_24172[(20)]);
var inst_24115 = (state_24172[(11)]);
var inst_24113 = (state_24172[(12)]);
var inst_24112 = (state_24172[(21)]);
var inst_24127 = (state_24172[(2)]);
var inst_24128 = (inst_24115 + (1));
var tmp24193 = inst_24114;
var tmp24194 = inst_24113;
var tmp24195 = inst_24112;
var inst_24112__$1 = tmp24195;
var inst_24113__$1 = tmp24194;
var inst_24114__$1 = tmp24193;
var inst_24115__$1 = inst_24128;
var state_24172__$1 = (function (){var statearr_24199 = state_24172;
(statearr_24199[(20)] = inst_24114__$1);

(statearr_24199[(22)] = inst_24127);

(statearr_24199[(11)] = inst_24115__$1);

(statearr_24199[(12)] = inst_24113__$1);

(statearr_24199[(21)] = inst_24112__$1);

return statearr_24199;
})();
var statearr_24200_24271 = state_24172__$1;
(statearr_24200_24271[(2)] = null);

(statearr_24200_24271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (40))){
var inst_24140 = (state_24172[(23)]);
var inst_24144 = done.call(null,null);
var inst_24145 = cljs.core.async.untap_STAR_.call(null,m,inst_24140);
var state_24172__$1 = (function (){var statearr_24201 = state_24172;
(statearr_24201[(24)] = inst_24144);

return statearr_24201;
})();
var statearr_24202_24272 = state_24172__$1;
(statearr_24202_24272[(2)] = inst_24145);

(statearr_24202_24272[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (33))){
var inst_24131 = (state_24172[(25)]);
var inst_24133 = cljs.core.chunked_seq_QMARK_.call(null,inst_24131);
var state_24172__$1 = state_24172;
if(inst_24133){
var statearr_24203_24273 = state_24172__$1;
(statearr_24203_24273[(1)] = (36));

} else {
var statearr_24204_24274 = state_24172__$1;
(statearr_24204_24274[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (13))){
var inst_24061 = (state_24172[(26)]);
var inst_24064 = cljs.core.async.close_BANG_.call(null,inst_24061);
var state_24172__$1 = state_24172;
var statearr_24205_24275 = state_24172__$1;
(statearr_24205_24275[(2)] = inst_24064);

(statearr_24205_24275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (22))){
var inst_24084 = (state_24172[(8)]);
var inst_24087 = cljs.core.async.close_BANG_.call(null,inst_24084);
var state_24172__$1 = state_24172;
var statearr_24206_24276 = state_24172__$1;
(statearr_24206_24276[(2)] = inst_24087);

(statearr_24206_24276[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (36))){
var inst_24131 = (state_24172[(25)]);
var inst_24135 = cljs.core.chunk_first.call(null,inst_24131);
var inst_24136 = cljs.core.chunk_rest.call(null,inst_24131);
var inst_24137 = cljs.core.count.call(null,inst_24135);
var inst_24112 = inst_24136;
var inst_24113 = inst_24135;
var inst_24114 = inst_24137;
var inst_24115 = (0);
var state_24172__$1 = (function (){var statearr_24207 = state_24172;
(statearr_24207[(20)] = inst_24114);

(statearr_24207[(11)] = inst_24115);

(statearr_24207[(12)] = inst_24113);

(statearr_24207[(21)] = inst_24112);

return statearr_24207;
})();
var statearr_24208_24277 = state_24172__$1;
(statearr_24208_24277[(2)] = null);

(statearr_24208_24277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (41))){
var inst_24131 = (state_24172[(25)]);
var inst_24147 = (state_24172[(2)]);
var inst_24148 = cljs.core.next.call(null,inst_24131);
var inst_24112 = inst_24148;
var inst_24113 = null;
var inst_24114 = (0);
var inst_24115 = (0);
var state_24172__$1 = (function (){var statearr_24209 = state_24172;
(statearr_24209[(20)] = inst_24114);

(statearr_24209[(27)] = inst_24147);

(statearr_24209[(11)] = inst_24115);

(statearr_24209[(12)] = inst_24113);

(statearr_24209[(21)] = inst_24112);

return statearr_24209;
})();
var statearr_24210_24278 = state_24172__$1;
(statearr_24210_24278[(2)] = null);

(statearr_24210_24278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (43))){
var state_24172__$1 = state_24172;
var statearr_24211_24279 = state_24172__$1;
(statearr_24211_24279[(2)] = null);

(statearr_24211_24279[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (29))){
var inst_24156 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24212_24280 = state_24172__$1;
(statearr_24212_24280[(2)] = inst_24156);

(statearr_24212_24280[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (44))){
var inst_24165 = (state_24172[(2)]);
var state_24172__$1 = (function (){var statearr_24213 = state_24172;
(statearr_24213[(28)] = inst_24165);

return statearr_24213;
})();
var statearr_24214_24281 = state_24172__$1;
(statearr_24214_24281[(2)] = null);

(statearr_24214_24281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (6))){
var inst_24104 = (state_24172[(29)]);
var inst_24103 = cljs.core.deref.call(null,cs);
var inst_24104__$1 = cljs.core.keys.call(null,inst_24103);
var inst_24105 = cljs.core.count.call(null,inst_24104__$1);
var inst_24106 = cljs.core.reset_BANG_.call(null,dctr,inst_24105);
var inst_24111 = cljs.core.seq.call(null,inst_24104__$1);
var inst_24112 = inst_24111;
var inst_24113 = null;
var inst_24114 = (0);
var inst_24115 = (0);
var state_24172__$1 = (function (){var statearr_24215 = state_24172;
(statearr_24215[(20)] = inst_24114);

(statearr_24215[(11)] = inst_24115);

(statearr_24215[(30)] = inst_24106);

(statearr_24215[(12)] = inst_24113);

(statearr_24215[(29)] = inst_24104__$1);

(statearr_24215[(21)] = inst_24112);

return statearr_24215;
})();
var statearr_24216_24282 = state_24172__$1;
(statearr_24216_24282[(2)] = null);

(statearr_24216_24282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (28))){
var inst_24131 = (state_24172[(25)]);
var inst_24112 = (state_24172[(21)]);
var inst_24131__$1 = cljs.core.seq.call(null,inst_24112);
var state_24172__$1 = (function (){var statearr_24217 = state_24172;
(statearr_24217[(25)] = inst_24131__$1);

return statearr_24217;
})();
if(inst_24131__$1){
var statearr_24218_24283 = state_24172__$1;
(statearr_24218_24283[(1)] = (33));

} else {
var statearr_24219_24284 = state_24172__$1;
(statearr_24219_24284[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (25))){
var inst_24114 = (state_24172[(20)]);
var inst_24115 = (state_24172[(11)]);
var inst_24117 = (inst_24115 < inst_24114);
var inst_24118 = inst_24117;
var state_24172__$1 = state_24172;
if(cljs.core.truth_(inst_24118)){
var statearr_24220_24285 = state_24172__$1;
(statearr_24220_24285[(1)] = (27));

} else {
var statearr_24221_24286 = state_24172__$1;
(statearr_24221_24286[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (34))){
var state_24172__$1 = state_24172;
var statearr_24222_24287 = state_24172__$1;
(statearr_24222_24287[(2)] = null);

(statearr_24222_24287[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (17))){
var state_24172__$1 = state_24172;
var statearr_24223_24288 = state_24172__$1;
(statearr_24223_24288[(2)] = null);

(statearr_24223_24288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (3))){
var inst_24170 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24172__$1,inst_24170);
} else {
if((state_val_24173 === (12))){
var inst_24099 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24224_24289 = state_24172__$1;
(statearr_24224_24289[(2)] = inst_24099);

(statearr_24224_24289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (2))){
var state_24172__$1 = state_24172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24172__$1,(4),ch);
} else {
if((state_val_24173 === (23))){
var state_24172__$1 = state_24172;
var statearr_24225_24290 = state_24172__$1;
(statearr_24225_24290[(2)] = null);

(statearr_24225_24290[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (35))){
var inst_24154 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24226_24291 = state_24172__$1;
(statearr_24226_24291[(2)] = inst_24154);

(statearr_24226_24291[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (19))){
var inst_24071 = (state_24172[(7)]);
var inst_24075 = cljs.core.chunk_first.call(null,inst_24071);
var inst_24076 = cljs.core.chunk_rest.call(null,inst_24071);
var inst_24077 = cljs.core.count.call(null,inst_24075);
var inst_24049 = inst_24076;
var inst_24050 = inst_24075;
var inst_24051 = inst_24077;
var inst_24052 = (0);
var state_24172__$1 = (function (){var statearr_24227 = state_24172;
(statearr_24227[(13)] = inst_24050);

(statearr_24227[(14)] = inst_24052);

(statearr_24227[(15)] = inst_24051);

(statearr_24227[(16)] = inst_24049);

return statearr_24227;
})();
var statearr_24228_24292 = state_24172__$1;
(statearr_24228_24292[(2)] = null);

(statearr_24228_24292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (11))){
var inst_24071 = (state_24172[(7)]);
var inst_24049 = (state_24172[(16)]);
var inst_24071__$1 = cljs.core.seq.call(null,inst_24049);
var state_24172__$1 = (function (){var statearr_24229 = state_24172;
(statearr_24229[(7)] = inst_24071__$1);

return statearr_24229;
})();
if(inst_24071__$1){
var statearr_24230_24293 = state_24172__$1;
(statearr_24230_24293[(1)] = (16));

} else {
var statearr_24231_24294 = state_24172__$1;
(statearr_24231_24294[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (9))){
var inst_24101 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24232_24295 = state_24172__$1;
(statearr_24232_24295[(2)] = inst_24101);

(statearr_24232_24295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (5))){
var inst_24047 = cljs.core.deref.call(null,cs);
var inst_24048 = cljs.core.seq.call(null,inst_24047);
var inst_24049 = inst_24048;
var inst_24050 = null;
var inst_24051 = (0);
var inst_24052 = (0);
var state_24172__$1 = (function (){var statearr_24233 = state_24172;
(statearr_24233[(13)] = inst_24050);

(statearr_24233[(14)] = inst_24052);

(statearr_24233[(15)] = inst_24051);

(statearr_24233[(16)] = inst_24049);

return statearr_24233;
})();
var statearr_24234_24296 = state_24172__$1;
(statearr_24234_24296[(2)] = null);

(statearr_24234_24296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (14))){
var state_24172__$1 = state_24172;
var statearr_24235_24297 = state_24172__$1;
(statearr_24235_24297[(2)] = null);

(statearr_24235_24297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (45))){
var inst_24162 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24236_24298 = state_24172__$1;
(statearr_24236_24298[(2)] = inst_24162);

(statearr_24236_24298[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (26))){
var inst_24104 = (state_24172[(29)]);
var inst_24158 = (state_24172[(2)]);
var inst_24159 = cljs.core.seq.call(null,inst_24104);
var state_24172__$1 = (function (){var statearr_24237 = state_24172;
(statearr_24237[(31)] = inst_24158);

return statearr_24237;
})();
if(inst_24159){
var statearr_24238_24299 = state_24172__$1;
(statearr_24238_24299[(1)] = (42));

} else {
var statearr_24239_24300 = state_24172__$1;
(statearr_24239_24300[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (16))){
var inst_24071 = (state_24172[(7)]);
var inst_24073 = cljs.core.chunked_seq_QMARK_.call(null,inst_24071);
var state_24172__$1 = state_24172;
if(inst_24073){
var statearr_24240_24301 = state_24172__$1;
(statearr_24240_24301[(1)] = (19));

} else {
var statearr_24241_24302 = state_24172__$1;
(statearr_24241_24302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (38))){
var inst_24151 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24242_24303 = state_24172__$1;
(statearr_24242_24303[(2)] = inst_24151);

(statearr_24242_24303[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (30))){
var state_24172__$1 = state_24172;
var statearr_24243_24304 = state_24172__$1;
(statearr_24243_24304[(2)] = null);

(statearr_24243_24304[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (10))){
var inst_24050 = (state_24172[(13)]);
var inst_24052 = (state_24172[(14)]);
var inst_24060 = cljs.core._nth.call(null,inst_24050,inst_24052);
var inst_24061 = cljs.core.nth.call(null,inst_24060,(0),null);
var inst_24062 = cljs.core.nth.call(null,inst_24060,(1),null);
var state_24172__$1 = (function (){var statearr_24244 = state_24172;
(statearr_24244[(26)] = inst_24061);

return statearr_24244;
})();
if(cljs.core.truth_(inst_24062)){
var statearr_24245_24305 = state_24172__$1;
(statearr_24245_24305[(1)] = (13));

} else {
var statearr_24246_24306 = state_24172__$1;
(statearr_24246_24306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (18))){
var inst_24097 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24247_24307 = state_24172__$1;
(statearr_24247_24307[(2)] = inst_24097);

(statearr_24247_24307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (42))){
var state_24172__$1 = state_24172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24172__$1,(45),dchan);
} else {
if((state_val_24173 === (37))){
var inst_24131 = (state_24172[(25)]);
var inst_24040 = (state_24172[(9)]);
var inst_24140 = (state_24172[(23)]);
var inst_24140__$1 = cljs.core.first.call(null,inst_24131);
var inst_24141 = cljs.core.async.put_BANG_.call(null,inst_24140__$1,inst_24040,done);
var state_24172__$1 = (function (){var statearr_24248 = state_24172;
(statearr_24248[(23)] = inst_24140__$1);

return statearr_24248;
})();
if(cljs.core.truth_(inst_24141)){
var statearr_24249_24308 = state_24172__$1;
(statearr_24249_24308[(1)] = (39));

} else {
var statearr_24250_24309 = state_24172__$1;
(statearr_24250_24309[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (8))){
var inst_24052 = (state_24172[(14)]);
var inst_24051 = (state_24172[(15)]);
var inst_24054 = (inst_24052 < inst_24051);
var inst_24055 = inst_24054;
var state_24172__$1 = state_24172;
if(cljs.core.truth_(inst_24055)){
var statearr_24251_24310 = state_24172__$1;
(statearr_24251_24310[(1)] = (10));

} else {
var statearr_24252_24311 = state_24172__$1;
(statearr_24252_24311[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__23341__auto__ = null;
var cljs$core$async$mult_$_state_machine__23341__auto____0 = (function (){
var statearr_24253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24253[(0)] = cljs$core$async$mult_$_state_machine__23341__auto__);

(statearr_24253[(1)] = (1));

return statearr_24253;
});
var cljs$core$async$mult_$_state_machine__23341__auto____1 = (function (state_24172){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_24172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e24254){if((e24254 instanceof Object)){
var ex__23344__auto__ = e24254;
var statearr_24255_24312 = state_24172;
(statearr_24255_24312[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24313 = state_24172;
state_24172 = G__24313;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23341__auto__ = function(state_24172){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23341__auto____1.call(this,state_24172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23341__auto____0;
cljs$core$async$mult_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23341__auto____1;
return cljs$core$async$mult_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_24256 = f__23436__auto__.call(null);
(statearr_24256[(6)] = c__23435__auto___24257);

return statearr_24256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24315 = arguments.length;
switch (G__24315) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_24317 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_24317.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_24318 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_24318.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_24319 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_24319.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_24320 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_24320.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_24321 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_24321.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24332 = arguments.length;
var i__4737__auto___24333 = (0);
while(true){
if((i__4737__auto___24333 < len__4736__auto___24332)){
args__4742__auto__.push((arguments[i__4737__auto___24333]));

var G__24334 = (i__4737__auto___24333 + (1));
i__4737__auto___24333 = G__24334;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24326){
var map__24327 = p__24326;
var map__24327__$1 = (((((!((map__24327 == null))))?(((((map__24327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24327):map__24327);
var opts = map__24327__$1;
var statearr_24329_24335 = state;
(statearr_24329_24335[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_24330_24336 = state;
(statearr_24330_24336[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_24331_24337 = state;
(statearr_24331_24337[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24322){
var G__24323 = cljs.core.first.call(null,seq24322);
var seq24322__$1 = cljs.core.next.call(null,seq24322);
var G__24324 = cljs.core.first.call(null,seq24322__$1);
var seq24322__$2 = cljs.core.next.call(null,seq24322__$1);
var G__24325 = cljs.core.first.call(null,seq24322__$2);
var seq24322__$3 = cljs.core.next.call(null,seq24322__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24323,G__24324,G__24325,seq24322__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24338 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24339){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24339 = meta24339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24340,meta24339__$1){
var self__ = this;
var _24340__$1 = this;
return (new cljs.core.async.t_cljs$core$async24338(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24339__$1));
}));

(cljs.core.async.t_cljs$core$async24338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24340){
var self__ = this;
var _24340__$1 = this;
return self__.meta24339;
}));

(cljs.core.async.t_cljs$core$async24338.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24338.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24338.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24338.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24338.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24338.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24338.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24338.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24339","meta24339",-114273752,null)], null);
}));

(cljs.core.async.t_cljs$core$async24338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24338");

(cljs.core.async.t_cljs$core$async24338.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24338.
 */
cljs.core.async.__GT_t_cljs$core$async24338 = (function cljs$core$async$mix_$___GT_t_cljs$core$async24338(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24339){
return (new cljs.core.async.t_cljs$core$async24338(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24339));
});

}

return (new cljs.core.async.t_cljs$core$async24338(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23435__auto___24502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_24442){
var state_val_24443 = (state_24442[(1)]);
if((state_val_24443 === (7))){
var inst_24357 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
var statearr_24444_24503 = state_24442__$1;
(statearr_24444_24503[(2)] = inst_24357);

(statearr_24444_24503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (20))){
var inst_24369 = (state_24442[(7)]);
var state_24442__$1 = state_24442;
var statearr_24445_24504 = state_24442__$1;
(statearr_24445_24504[(2)] = inst_24369);

(statearr_24445_24504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (27))){
var state_24442__$1 = state_24442;
var statearr_24446_24505 = state_24442__$1;
(statearr_24446_24505[(2)] = null);

(statearr_24446_24505[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (1))){
var inst_24344 = (state_24442[(8)]);
var inst_24344__$1 = calc_state.call(null);
var inst_24346 = (inst_24344__$1 == null);
var inst_24347 = cljs.core.not.call(null,inst_24346);
var state_24442__$1 = (function (){var statearr_24447 = state_24442;
(statearr_24447[(8)] = inst_24344__$1);

return statearr_24447;
})();
if(inst_24347){
var statearr_24448_24506 = state_24442__$1;
(statearr_24448_24506[(1)] = (2));

} else {
var statearr_24449_24507 = state_24442__$1;
(statearr_24449_24507[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (24))){
var inst_24393 = (state_24442[(9)]);
var inst_24402 = (state_24442[(10)]);
var inst_24416 = (state_24442[(11)]);
var inst_24416__$1 = inst_24393.call(null,inst_24402);
var state_24442__$1 = (function (){var statearr_24450 = state_24442;
(statearr_24450[(11)] = inst_24416__$1);

return statearr_24450;
})();
if(cljs.core.truth_(inst_24416__$1)){
var statearr_24451_24508 = state_24442__$1;
(statearr_24451_24508[(1)] = (29));

} else {
var statearr_24452_24509 = state_24442__$1;
(statearr_24452_24509[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (4))){
var inst_24360 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
if(cljs.core.truth_(inst_24360)){
var statearr_24453_24510 = state_24442__$1;
(statearr_24453_24510[(1)] = (8));

} else {
var statearr_24454_24511 = state_24442__$1;
(statearr_24454_24511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (15))){
var inst_24387 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
if(cljs.core.truth_(inst_24387)){
var statearr_24455_24512 = state_24442__$1;
(statearr_24455_24512[(1)] = (19));

} else {
var statearr_24456_24513 = state_24442__$1;
(statearr_24456_24513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (21))){
var inst_24392 = (state_24442[(12)]);
var inst_24392__$1 = (state_24442[(2)]);
var inst_24393 = cljs.core.get.call(null,inst_24392__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24394 = cljs.core.get.call(null,inst_24392__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24395 = cljs.core.get.call(null,inst_24392__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24442__$1 = (function (){var statearr_24457 = state_24442;
(statearr_24457[(12)] = inst_24392__$1);

(statearr_24457[(13)] = inst_24394);

(statearr_24457[(9)] = inst_24393);

return statearr_24457;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24442__$1,(22),inst_24395);
} else {
if((state_val_24443 === (31))){
var inst_24424 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
if(cljs.core.truth_(inst_24424)){
var statearr_24458_24514 = state_24442__$1;
(statearr_24458_24514[(1)] = (32));

} else {
var statearr_24459_24515 = state_24442__$1;
(statearr_24459_24515[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (32))){
var inst_24401 = (state_24442[(14)]);
var state_24442__$1 = state_24442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24442__$1,(35),out,inst_24401);
} else {
if((state_val_24443 === (33))){
var inst_24392 = (state_24442[(12)]);
var inst_24369 = inst_24392;
var state_24442__$1 = (function (){var statearr_24460 = state_24442;
(statearr_24460[(7)] = inst_24369);

return statearr_24460;
})();
var statearr_24461_24516 = state_24442__$1;
(statearr_24461_24516[(2)] = null);

(statearr_24461_24516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (13))){
var inst_24369 = (state_24442[(7)]);
var inst_24376 = inst_24369.cljs$lang$protocol_mask$partition0$;
var inst_24377 = (inst_24376 & (64));
var inst_24378 = inst_24369.cljs$core$ISeq$;
var inst_24379 = (cljs.core.PROTOCOL_SENTINEL === inst_24378);
var inst_24380 = ((inst_24377) || (inst_24379));
var state_24442__$1 = state_24442;
if(cljs.core.truth_(inst_24380)){
var statearr_24462_24517 = state_24442__$1;
(statearr_24462_24517[(1)] = (16));

} else {
var statearr_24463_24518 = state_24442__$1;
(statearr_24463_24518[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (22))){
var inst_24401 = (state_24442[(14)]);
var inst_24402 = (state_24442[(10)]);
var inst_24400 = (state_24442[(2)]);
var inst_24401__$1 = cljs.core.nth.call(null,inst_24400,(0),null);
var inst_24402__$1 = cljs.core.nth.call(null,inst_24400,(1),null);
var inst_24403 = (inst_24401__$1 == null);
var inst_24404 = cljs.core._EQ_.call(null,inst_24402__$1,change);
var inst_24405 = ((inst_24403) || (inst_24404));
var state_24442__$1 = (function (){var statearr_24464 = state_24442;
(statearr_24464[(14)] = inst_24401__$1);

(statearr_24464[(10)] = inst_24402__$1);

return statearr_24464;
})();
if(cljs.core.truth_(inst_24405)){
var statearr_24465_24519 = state_24442__$1;
(statearr_24465_24519[(1)] = (23));

} else {
var statearr_24466_24520 = state_24442__$1;
(statearr_24466_24520[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (36))){
var inst_24392 = (state_24442[(12)]);
var inst_24369 = inst_24392;
var state_24442__$1 = (function (){var statearr_24467 = state_24442;
(statearr_24467[(7)] = inst_24369);

return statearr_24467;
})();
var statearr_24468_24521 = state_24442__$1;
(statearr_24468_24521[(2)] = null);

(statearr_24468_24521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (29))){
var inst_24416 = (state_24442[(11)]);
var state_24442__$1 = state_24442;
var statearr_24469_24522 = state_24442__$1;
(statearr_24469_24522[(2)] = inst_24416);

(statearr_24469_24522[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (6))){
var state_24442__$1 = state_24442;
var statearr_24470_24523 = state_24442__$1;
(statearr_24470_24523[(2)] = false);

(statearr_24470_24523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (28))){
var inst_24412 = (state_24442[(2)]);
var inst_24413 = calc_state.call(null);
var inst_24369 = inst_24413;
var state_24442__$1 = (function (){var statearr_24471 = state_24442;
(statearr_24471[(7)] = inst_24369);

(statearr_24471[(15)] = inst_24412);

return statearr_24471;
})();
var statearr_24472_24524 = state_24442__$1;
(statearr_24472_24524[(2)] = null);

(statearr_24472_24524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (25))){
var inst_24438 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
var statearr_24473_24525 = state_24442__$1;
(statearr_24473_24525[(2)] = inst_24438);

(statearr_24473_24525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (34))){
var inst_24436 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
var statearr_24474_24526 = state_24442__$1;
(statearr_24474_24526[(2)] = inst_24436);

(statearr_24474_24526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (17))){
var state_24442__$1 = state_24442;
var statearr_24475_24527 = state_24442__$1;
(statearr_24475_24527[(2)] = false);

(statearr_24475_24527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (3))){
var state_24442__$1 = state_24442;
var statearr_24476_24528 = state_24442__$1;
(statearr_24476_24528[(2)] = false);

(statearr_24476_24528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (12))){
var inst_24440 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24442__$1,inst_24440);
} else {
if((state_val_24443 === (2))){
var inst_24344 = (state_24442[(8)]);
var inst_24349 = inst_24344.cljs$lang$protocol_mask$partition0$;
var inst_24350 = (inst_24349 & (64));
var inst_24351 = inst_24344.cljs$core$ISeq$;
var inst_24352 = (cljs.core.PROTOCOL_SENTINEL === inst_24351);
var inst_24353 = ((inst_24350) || (inst_24352));
var state_24442__$1 = state_24442;
if(cljs.core.truth_(inst_24353)){
var statearr_24477_24529 = state_24442__$1;
(statearr_24477_24529[(1)] = (5));

} else {
var statearr_24478_24530 = state_24442__$1;
(statearr_24478_24530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (23))){
var inst_24401 = (state_24442[(14)]);
var inst_24407 = (inst_24401 == null);
var state_24442__$1 = state_24442;
if(cljs.core.truth_(inst_24407)){
var statearr_24479_24531 = state_24442__$1;
(statearr_24479_24531[(1)] = (26));

} else {
var statearr_24480_24532 = state_24442__$1;
(statearr_24480_24532[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (35))){
var inst_24427 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
if(cljs.core.truth_(inst_24427)){
var statearr_24481_24533 = state_24442__$1;
(statearr_24481_24533[(1)] = (36));

} else {
var statearr_24482_24534 = state_24442__$1;
(statearr_24482_24534[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (19))){
var inst_24369 = (state_24442[(7)]);
var inst_24389 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24369);
var state_24442__$1 = state_24442;
var statearr_24483_24535 = state_24442__$1;
(statearr_24483_24535[(2)] = inst_24389);

(statearr_24483_24535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (11))){
var inst_24369 = (state_24442[(7)]);
var inst_24373 = (inst_24369 == null);
var inst_24374 = cljs.core.not.call(null,inst_24373);
var state_24442__$1 = state_24442;
if(inst_24374){
var statearr_24484_24536 = state_24442__$1;
(statearr_24484_24536[(1)] = (13));

} else {
var statearr_24485_24537 = state_24442__$1;
(statearr_24485_24537[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (9))){
var inst_24344 = (state_24442[(8)]);
var state_24442__$1 = state_24442;
var statearr_24486_24538 = state_24442__$1;
(statearr_24486_24538[(2)] = inst_24344);

(statearr_24486_24538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (5))){
var state_24442__$1 = state_24442;
var statearr_24487_24539 = state_24442__$1;
(statearr_24487_24539[(2)] = true);

(statearr_24487_24539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (14))){
var state_24442__$1 = state_24442;
var statearr_24488_24540 = state_24442__$1;
(statearr_24488_24540[(2)] = false);

(statearr_24488_24540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (26))){
var inst_24402 = (state_24442[(10)]);
var inst_24409 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24402);
var state_24442__$1 = state_24442;
var statearr_24489_24541 = state_24442__$1;
(statearr_24489_24541[(2)] = inst_24409);

(statearr_24489_24541[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (16))){
var state_24442__$1 = state_24442;
var statearr_24490_24542 = state_24442__$1;
(statearr_24490_24542[(2)] = true);

(statearr_24490_24542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (38))){
var inst_24432 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
var statearr_24491_24543 = state_24442__$1;
(statearr_24491_24543[(2)] = inst_24432);

(statearr_24491_24543[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (30))){
var inst_24394 = (state_24442[(13)]);
var inst_24393 = (state_24442[(9)]);
var inst_24402 = (state_24442[(10)]);
var inst_24419 = cljs.core.empty_QMARK_.call(null,inst_24393);
var inst_24420 = inst_24394.call(null,inst_24402);
var inst_24421 = cljs.core.not.call(null,inst_24420);
var inst_24422 = ((inst_24419) && (inst_24421));
var state_24442__$1 = state_24442;
var statearr_24492_24544 = state_24442__$1;
(statearr_24492_24544[(2)] = inst_24422);

(statearr_24492_24544[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (10))){
var inst_24344 = (state_24442[(8)]);
var inst_24365 = (state_24442[(2)]);
var inst_24366 = cljs.core.get.call(null,inst_24365,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24367 = cljs.core.get.call(null,inst_24365,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24368 = cljs.core.get.call(null,inst_24365,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24369 = inst_24344;
var state_24442__$1 = (function (){var statearr_24493 = state_24442;
(statearr_24493[(7)] = inst_24369);

(statearr_24493[(16)] = inst_24367);

(statearr_24493[(17)] = inst_24366);

(statearr_24493[(18)] = inst_24368);

return statearr_24493;
})();
var statearr_24494_24545 = state_24442__$1;
(statearr_24494_24545[(2)] = null);

(statearr_24494_24545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (18))){
var inst_24384 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
var statearr_24495_24546 = state_24442__$1;
(statearr_24495_24546[(2)] = inst_24384);

(statearr_24495_24546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (37))){
var state_24442__$1 = state_24442;
var statearr_24496_24547 = state_24442__$1;
(statearr_24496_24547[(2)] = null);

(statearr_24496_24547[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24443 === (8))){
var inst_24344 = (state_24442[(8)]);
var inst_24362 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24344);
var state_24442__$1 = state_24442;
var statearr_24497_24548 = state_24442__$1;
(statearr_24497_24548[(2)] = inst_24362);

(statearr_24497_24548[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__23341__auto__ = null;
var cljs$core$async$mix_$_state_machine__23341__auto____0 = (function (){
var statearr_24498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24498[(0)] = cljs$core$async$mix_$_state_machine__23341__auto__);

(statearr_24498[(1)] = (1));

return statearr_24498;
});
var cljs$core$async$mix_$_state_machine__23341__auto____1 = (function (state_24442){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_24442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e24499){if((e24499 instanceof Object)){
var ex__23344__auto__ = e24499;
var statearr_24500_24549 = state_24442;
(statearr_24500_24549[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24550 = state_24442;
state_24442 = G__24550;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23341__auto__ = function(state_24442){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23341__auto____1.call(this,state_24442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23341__auto____0;
cljs$core$async$mix_$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23341__auto____1;
return cljs$core$async$mix_$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_24501 = f__23436__auto__.call(null);
(statearr_24501[(6)] = c__23435__auto___24502);

return statearr_24501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_24553 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_24553.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_24554 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_24554.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_24555 = (function() {
var G__24556 = null;
var G__24556__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__24556__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__24556 = function(p,v){
switch(arguments.length){
case 1:
return G__24556__1.call(this,p);
case 2:
return G__24556__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24556.cljs$core$IFn$_invoke$arity$1 = G__24556__1;
G__24556.cljs$core$IFn$_invoke$arity$2 = G__24556__2;
return G__24556;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24552 = arguments.length;
switch (G__24552) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24555.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24555.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24560 = arguments.length;
switch (G__24560) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__24558_SHARP_){
if(cljs.core.truth_(p1__24558_SHARP_.call(null,topic))){
return p1__24558_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24558_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24561 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24562){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24562 = meta24562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24563,meta24562__$1){
var self__ = this;
var _24563__$1 = this;
return (new cljs.core.async.t_cljs$core$async24561(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24562__$1));
}));

(cljs.core.async.t_cljs$core$async24561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24563){
var self__ = this;
var _24563__$1 = this;
return self__.meta24562;
}));

(cljs.core.async.t_cljs$core$async24561.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24561.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24561.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24561.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async24561.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24561.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24562","meta24562",-308113742,null)], null);
}));

(cljs.core.async.t_cljs$core$async24561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24561");

(cljs.core.async.t_cljs$core$async24561.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24561.
 */
cljs.core.async.__GT_t_cljs$core$async24561 = (function cljs$core$async$__GT_t_cljs$core$async24561(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24562){
return (new cljs.core.async.t_cljs$core$async24561(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24562));
});

}

return (new cljs.core.async.t_cljs$core$async24561(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23435__auto___24681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_24635){
var state_val_24636 = (state_24635[(1)]);
if((state_val_24636 === (7))){
var inst_24631 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24637_24682 = state_24635__$1;
(statearr_24637_24682[(2)] = inst_24631);

(statearr_24637_24682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (20))){
var state_24635__$1 = state_24635;
var statearr_24638_24683 = state_24635__$1;
(statearr_24638_24683[(2)] = null);

(statearr_24638_24683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (1))){
var state_24635__$1 = state_24635;
var statearr_24639_24684 = state_24635__$1;
(statearr_24639_24684[(2)] = null);

(statearr_24639_24684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (24))){
var inst_24614 = (state_24635[(7)]);
var inst_24623 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24614);
var state_24635__$1 = state_24635;
var statearr_24640_24685 = state_24635__$1;
(statearr_24640_24685[(2)] = inst_24623);

(statearr_24640_24685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (4))){
var inst_24566 = (state_24635[(8)]);
var inst_24566__$1 = (state_24635[(2)]);
var inst_24567 = (inst_24566__$1 == null);
var state_24635__$1 = (function (){var statearr_24641 = state_24635;
(statearr_24641[(8)] = inst_24566__$1);

return statearr_24641;
})();
if(cljs.core.truth_(inst_24567)){
var statearr_24642_24686 = state_24635__$1;
(statearr_24642_24686[(1)] = (5));

} else {
var statearr_24643_24687 = state_24635__$1;
(statearr_24643_24687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (15))){
var inst_24608 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24644_24688 = state_24635__$1;
(statearr_24644_24688[(2)] = inst_24608);

(statearr_24644_24688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (21))){
var inst_24628 = (state_24635[(2)]);
var state_24635__$1 = (function (){var statearr_24645 = state_24635;
(statearr_24645[(9)] = inst_24628);

return statearr_24645;
})();
var statearr_24646_24689 = state_24635__$1;
(statearr_24646_24689[(2)] = null);

(statearr_24646_24689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (13))){
var inst_24590 = (state_24635[(10)]);
var inst_24592 = cljs.core.chunked_seq_QMARK_.call(null,inst_24590);
var state_24635__$1 = state_24635;
if(inst_24592){
var statearr_24647_24690 = state_24635__$1;
(statearr_24647_24690[(1)] = (16));

} else {
var statearr_24648_24691 = state_24635__$1;
(statearr_24648_24691[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (22))){
var inst_24620 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24620)){
var statearr_24649_24692 = state_24635__$1;
(statearr_24649_24692[(1)] = (23));

} else {
var statearr_24650_24693 = state_24635__$1;
(statearr_24650_24693[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (6))){
var inst_24614 = (state_24635[(7)]);
var inst_24566 = (state_24635[(8)]);
var inst_24616 = (state_24635[(11)]);
var inst_24614__$1 = topic_fn.call(null,inst_24566);
var inst_24615 = cljs.core.deref.call(null,mults);
var inst_24616__$1 = cljs.core.get.call(null,inst_24615,inst_24614__$1);
var state_24635__$1 = (function (){var statearr_24651 = state_24635;
(statearr_24651[(7)] = inst_24614__$1);

(statearr_24651[(11)] = inst_24616__$1);

return statearr_24651;
})();
if(cljs.core.truth_(inst_24616__$1)){
var statearr_24652_24694 = state_24635__$1;
(statearr_24652_24694[(1)] = (19));

} else {
var statearr_24653_24695 = state_24635__$1;
(statearr_24653_24695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (25))){
var inst_24625 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24654_24696 = state_24635__$1;
(statearr_24654_24696[(2)] = inst_24625);

(statearr_24654_24696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (17))){
var inst_24590 = (state_24635[(10)]);
var inst_24599 = cljs.core.first.call(null,inst_24590);
var inst_24600 = cljs.core.async.muxch_STAR_.call(null,inst_24599);
var inst_24601 = cljs.core.async.close_BANG_.call(null,inst_24600);
var inst_24602 = cljs.core.next.call(null,inst_24590);
var inst_24576 = inst_24602;
var inst_24577 = null;
var inst_24578 = (0);
var inst_24579 = (0);
var state_24635__$1 = (function (){var statearr_24655 = state_24635;
(statearr_24655[(12)] = inst_24601);

(statearr_24655[(13)] = inst_24579);

(statearr_24655[(14)] = inst_24577);

(statearr_24655[(15)] = inst_24576);

(statearr_24655[(16)] = inst_24578);

return statearr_24655;
})();
var statearr_24656_24697 = state_24635__$1;
(statearr_24656_24697[(2)] = null);

(statearr_24656_24697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (3))){
var inst_24633 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24635__$1,inst_24633);
} else {
if((state_val_24636 === (12))){
var inst_24610 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24657_24698 = state_24635__$1;
(statearr_24657_24698[(2)] = inst_24610);

(statearr_24657_24698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (2))){
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24635__$1,(4),ch);
} else {
if((state_val_24636 === (23))){
var state_24635__$1 = state_24635;
var statearr_24658_24699 = state_24635__$1;
(statearr_24658_24699[(2)] = null);

(statearr_24658_24699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (19))){
var inst_24566 = (state_24635[(8)]);
var inst_24616 = (state_24635[(11)]);
var inst_24618 = cljs.core.async.muxch_STAR_.call(null,inst_24616);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24635__$1,(22),inst_24618,inst_24566);
} else {
if((state_val_24636 === (11))){
var inst_24590 = (state_24635[(10)]);
var inst_24576 = (state_24635[(15)]);
var inst_24590__$1 = cljs.core.seq.call(null,inst_24576);
var state_24635__$1 = (function (){var statearr_24659 = state_24635;
(statearr_24659[(10)] = inst_24590__$1);

return statearr_24659;
})();
if(inst_24590__$1){
var statearr_24660_24700 = state_24635__$1;
(statearr_24660_24700[(1)] = (13));

} else {
var statearr_24661_24701 = state_24635__$1;
(statearr_24661_24701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (9))){
var inst_24612 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24662_24702 = state_24635__$1;
(statearr_24662_24702[(2)] = inst_24612);

(statearr_24662_24702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (5))){
var inst_24573 = cljs.core.deref.call(null,mults);
var inst_24574 = cljs.core.vals.call(null,inst_24573);
var inst_24575 = cljs.core.seq.call(null,inst_24574);
var inst_24576 = inst_24575;
var inst_24577 = null;
var inst_24578 = (0);
var inst_24579 = (0);
var state_24635__$1 = (function (){var statearr_24663 = state_24635;
(statearr_24663[(13)] = inst_24579);

(statearr_24663[(14)] = inst_24577);

(statearr_24663[(15)] = inst_24576);

(statearr_24663[(16)] = inst_24578);

return statearr_24663;
})();
var statearr_24664_24703 = state_24635__$1;
(statearr_24664_24703[(2)] = null);

(statearr_24664_24703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (14))){
var state_24635__$1 = state_24635;
var statearr_24668_24704 = state_24635__$1;
(statearr_24668_24704[(2)] = null);

(statearr_24668_24704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (16))){
var inst_24590 = (state_24635[(10)]);
var inst_24594 = cljs.core.chunk_first.call(null,inst_24590);
var inst_24595 = cljs.core.chunk_rest.call(null,inst_24590);
var inst_24596 = cljs.core.count.call(null,inst_24594);
var inst_24576 = inst_24595;
var inst_24577 = inst_24594;
var inst_24578 = inst_24596;
var inst_24579 = (0);
var state_24635__$1 = (function (){var statearr_24669 = state_24635;
(statearr_24669[(13)] = inst_24579);

(statearr_24669[(14)] = inst_24577);

(statearr_24669[(15)] = inst_24576);

(statearr_24669[(16)] = inst_24578);

return statearr_24669;
})();
var statearr_24670_24705 = state_24635__$1;
(statearr_24670_24705[(2)] = null);

(statearr_24670_24705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (10))){
var inst_24579 = (state_24635[(13)]);
var inst_24577 = (state_24635[(14)]);
var inst_24576 = (state_24635[(15)]);
var inst_24578 = (state_24635[(16)]);
var inst_24584 = cljs.core._nth.call(null,inst_24577,inst_24579);
var inst_24585 = cljs.core.async.muxch_STAR_.call(null,inst_24584);
var inst_24586 = cljs.core.async.close_BANG_.call(null,inst_24585);
var inst_24587 = (inst_24579 + (1));
var tmp24665 = inst_24577;
var tmp24666 = inst_24576;
var tmp24667 = inst_24578;
var inst_24576__$1 = tmp24666;
var inst_24577__$1 = tmp24665;
var inst_24578__$1 = tmp24667;
var inst_24579__$1 = inst_24587;
var state_24635__$1 = (function (){var statearr_24671 = state_24635;
(statearr_24671[(17)] = inst_24586);

(statearr_24671[(13)] = inst_24579__$1);

(statearr_24671[(14)] = inst_24577__$1);

(statearr_24671[(15)] = inst_24576__$1);

(statearr_24671[(16)] = inst_24578__$1);

return statearr_24671;
})();
var statearr_24672_24706 = state_24635__$1;
(statearr_24672_24706[(2)] = null);

(statearr_24672_24706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (18))){
var inst_24605 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24673_24707 = state_24635__$1;
(statearr_24673_24707[(2)] = inst_24605);

(statearr_24673_24707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (8))){
var inst_24579 = (state_24635[(13)]);
var inst_24578 = (state_24635[(16)]);
var inst_24581 = (inst_24579 < inst_24578);
var inst_24582 = inst_24581;
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24582)){
var statearr_24674_24708 = state_24635__$1;
(statearr_24674_24708[(1)] = (10));

} else {
var statearr_24675_24709 = state_24635__$1;
(statearr_24675_24709[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_24676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24676[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_24676[(1)] = (1));

return statearr_24676;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_24635){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_24635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e24677){if((e24677 instanceof Object)){
var ex__23344__auto__ = e24677;
var statearr_24678_24710 = state_24635;
(statearr_24678_24710[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24711 = state_24635;
state_24635 = G__24711;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_24635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_24635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_24679 = f__23436__auto__.call(null);
(statearr_24679[(6)] = c__23435__auto___24681);

return statearr_24679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24713 = arguments.length;
switch (G__24713) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24716 = arguments.length;
switch (G__24716) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24719 = arguments.length;
switch (G__24719) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__23435__auto___24786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_24758){
var state_val_24759 = (state_24758[(1)]);
if((state_val_24759 === (7))){
var state_24758__$1 = state_24758;
var statearr_24760_24787 = state_24758__$1;
(statearr_24760_24787[(2)] = null);

(statearr_24760_24787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (1))){
var state_24758__$1 = state_24758;
var statearr_24761_24788 = state_24758__$1;
(statearr_24761_24788[(2)] = null);

(statearr_24761_24788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (4))){
var inst_24722 = (state_24758[(7)]);
var inst_24724 = (inst_24722 < cnt);
var state_24758__$1 = state_24758;
if(cljs.core.truth_(inst_24724)){
var statearr_24762_24789 = state_24758__$1;
(statearr_24762_24789[(1)] = (6));

} else {
var statearr_24763_24790 = state_24758__$1;
(statearr_24763_24790[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (15))){
var inst_24754 = (state_24758[(2)]);
var state_24758__$1 = state_24758;
var statearr_24764_24791 = state_24758__$1;
(statearr_24764_24791[(2)] = inst_24754);

(statearr_24764_24791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (13))){
var inst_24747 = cljs.core.async.close_BANG_.call(null,out);
var state_24758__$1 = state_24758;
var statearr_24765_24792 = state_24758__$1;
(statearr_24765_24792[(2)] = inst_24747);

(statearr_24765_24792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (6))){
var state_24758__$1 = state_24758;
var statearr_24766_24793 = state_24758__$1;
(statearr_24766_24793[(2)] = null);

(statearr_24766_24793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (3))){
var inst_24756 = (state_24758[(2)]);
var state_24758__$1 = state_24758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24758__$1,inst_24756);
} else {
if((state_val_24759 === (12))){
var inst_24744 = (state_24758[(8)]);
var inst_24744__$1 = (state_24758[(2)]);
var inst_24745 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24744__$1);
var state_24758__$1 = (function (){var statearr_24767 = state_24758;
(statearr_24767[(8)] = inst_24744__$1);

return statearr_24767;
})();
if(cljs.core.truth_(inst_24745)){
var statearr_24768_24794 = state_24758__$1;
(statearr_24768_24794[(1)] = (13));

} else {
var statearr_24769_24795 = state_24758__$1;
(statearr_24769_24795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (2))){
var inst_24721 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24722 = (0);
var state_24758__$1 = (function (){var statearr_24770 = state_24758;
(statearr_24770[(7)] = inst_24722);

(statearr_24770[(9)] = inst_24721);

return statearr_24770;
})();
var statearr_24771_24796 = state_24758__$1;
(statearr_24771_24796[(2)] = null);

(statearr_24771_24796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (11))){
var inst_24722 = (state_24758[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24758,(10),Object,null,(9));
var inst_24731 = chs__$1.call(null,inst_24722);
var inst_24732 = done.call(null,inst_24722);
var inst_24733 = cljs.core.async.take_BANG_.call(null,inst_24731,inst_24732);
var state_24758__$1 = state_24758;
var statearr_24772_24797 = state_24758__$1;
(statearr_24772_24797[(2)] = inst_24733);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24758__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (9))){
var inst_24722 = (state_24758[(7)]);
var inst_24735 = (state_24758[(2)]);
var inst_24736 = (inst_24722 + (1));
var inst_24722__$1 = inst_24736;
var state_24758__$1 = (function (){var statearr_24773 = state_24758;
(statearr_24773[(7)] = inst_24722__$1);

(statearr_24773[(10)] = inst_24735);

return statearr_24773;
})();
var statearr_24774_24798 = state_24758__$1;
(statearr_24774_24798[(2)] = null);

(statearr_24774_24798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (5))){
var inst_24742 = (state_24758[(2)]);
var state_24758__$1 = (function (){var statearr_24775 = state_24758;
(statearr_24775[(11)] = inst_24742);

return statearr_24775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24758__$1,(12),dchan);
} else {
if((state_val_24759 === (14))){
var inst_24744 = (state_24758[(8)]);
var inst_24749 = cljs.core.apply.call(null,f,inst_24744);
var state_24758__$1 = state_24758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24758__$1,(16),out,inst_24749);
} else {
if((state_val_24759 === (16))){
var inst_24751 = (state_24758[(2)]);
var state_24758__$1 = (function (){var statearr_24776 = state_24758;
(statearr_24776[(12)] = inst_24751);

return statearr_24776;
})();
var statearr_24777_24799 = state_24758__$1;
(statearr_24777_24799[(2)] = null);

(statearr_24777_24799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (10))){
var inst_24726 = (state_24758[(2)]);
var inst_24727 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24758__$1 = (function (){var statearr_24778 = state_24758;
(statearr_24778[(13)] = inst_24726);

return statearr_24778;
})();
var statearr_24779_24800 = state_24758__$1;
(statearr_24779_24800[(2)] = inst_24727);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24758__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24759 === (8))){
var inst_24740 = (state_24758[(2)]);
var state_24758__$1 = state_24758;
var statearr_24780_24801 = state_24758__$1;
(statearr_24780_24801[(2)] = inst_24740);

(statearr_24780_24801[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_24781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24781[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_24781[(1)] = (1));

return statearr_24781;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_24758){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_24758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e24782){if((e24782 instanceof Object)){
var ex__23344__auto__ = e24782;
var statearr_24783_24802 = state_24758;
(statearr_24783_24802[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24803 = state_24758;
state_24758 = G__24803;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_24758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_24758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_24784 = f__23436__auto__.call(null);
(statearr_24784[(6)] = c__23435__auto___24786);

return statearr_24784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24806 = arguments.length;
switch (G__24806) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23435__auto___24860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_24838){
var state_val_24839 = (state_24838[(1)]);
if((state_val_24839 === (7))){
var inst_24818 = (state_24838[(7)]);
var inst_24817 = (state_24838[(8)]);
var inst_24817__$1 = (state_24838[(2)]);
var inst_24818__$1 = cljs.core.nth.call(null,inst_24817__$1,(0),null);
var inst_24819 = cljs.core.nth.call(null,inst_24817__$1,(1),null);
var inst_24820 = (inst_24818__$1 == null);
var state_24838__$1 = (function (){var statearr_24840 = state_24838;
(statearr_24840[(9)] = inst_24819);

(statearr_24840[(7)] = inst_24818__$1);

(statearr_24840[(8)] = inst_24817__$1);

return statearr_24840;
})();
if(cljs.core.truth_(inst_24820)){
var statearr_24841_24861 = state_24838__$1;
(statearr_24841_24861[(1)] = (8));

} else {
var statearr_24842_24862 = state_24838__$1;
(statearr_24842_24862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24839 === (1))){
var inst_24807 = cljs.core.vec.call(null,chs);
var inst_24808 = inst_24807;
var state_24838__$1 = (function (){var statearr_24843 = state_24838;
(statearr_24843[(10)] = inst_24808);

return statearr_24843;
})();
var statearr_24844_24863 = state_24838__$1;
(statearr_24844_24863[(2)] = null);

(statearr_24844_24863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24839 === (4))){
var inst_24808 = (state_24838[(10)]);
var state_24838__$1 = state_24838;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24838__$1,(7),inst_24808);
} else {
if((state_val_24839 === (6))){
var inst_24834 = (state_24838[(2)]);
var state_24838__$1 = state_24838;
var statearr_24845_24864 = state_24838__$1;
(statearr_24845_24864[(2)] = inst_24834);

(statearr_24845_24864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24839 === (3))){
var inst_24836 = (state_24838[(2)]);
var state_24838__$1 = state_24838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24838__$1,inst_24836);
} else {
if((state_val_24839 === (2))){
var inst_24808 = (state_24838[(10)]);
var inst_24810 = cljs.core.count.call(null,inst_24808);
var inst_24811 = (inst_24810 > (0));
var state_24838__$1 = state_24838;
if(cljs.core.truth_(inst_24811)){
var statearr_24847_24865 = state_24838__$1;
(statearr_24847_24865[(1)] = (4));

} else {
var statearr_24848_24866 = state_24838__$1;
(statearr_24848_24866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24839 === (11))){
var inst_24808 = (state_24838[(10)]);
var inst_24827 = (state_24838[(2)]);
var tmp24846 = inst_24808;
var inst_24808__$1 = tmp24846;
var state_24838__$1 = (function (){var statearr_24849 = state_24838;
(statearr_24849[(11)] = inst_24827);

(statearr_24849[(10)] = inst_24808__$1);

return statearr_24849;
})();
var statearr_24850_24867 = state_24838__$1;
(statearr_24850_24867[(2)] = null);

(statearr_24850_24867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24839 === (9))){
var inst_24818 = (state_24838[(7)]);
var state_24838__$1 = state_24838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24838__$1,(11),out,inst_24818);
} else {
if((state_val_24839 === (5))){
var inst_24832 = cljs.core.async.close_BANG_.call(null,out);
var state_24838__$1 = state_24838;
var statearr_24851_24868 = state_24838__$1;
(statearr_24851_24868[(2)] = inst_24832);

(statearr_24851_24868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24839 === (10))){
var inst_24830 = (state_24838[(2)]);
var state_24838__$1 = state_24838;
var statearr_24852_24869 = state_24838__$1;
(statearr_24852_24869[(2)] = inst_24830);

(statearr_24852_24869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24839 === (8))){
var inst_24819 = (state_24838[(9)]);
var inst_24818 = (state_24838[(7)]);
var inst_24808 = (state_24838[(10)]);
var inst_24817 = (state_24838[(8)]);
var inst_24822 = (function (){var cs = inst_24808;
var vec__24813 = inst_24817;
var v = inst_24818;
var c = inst_24819;
return (function (p1__24804_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24804_SHARP_);
});
})();
var inst_24823 = cljs.core.filterv.call(null,inst_24822,inst_24808);
var inst_24808__$1 = inst_24823;
var state_24838__$1 = (function (){var statearr_24853 = state_24838;
(statearr_24853[(10)] = inst_24808__$1);

return statearr_24853;
})();
var statearr_24854_24870 = state_24838__$1;
(statearr_24854_24870[(2)] = null);

(statearr_24854_24870[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_24855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24855[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_24855[(1)] = (1));

return statearr_24855;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_24838){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_24838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e24856){if((e24856 instanceof Object)){
var ex__23344__auto__ = e24856;
var statearr_24857_24871 = state_24838;
(statearr_24857_24871[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24872 = state_24838;
state_24838 = G__24872;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_24838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_24838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_24858 = f__23436__auto__.call(null);
(statearr_24858[(6)] = c__23435__auto___24860);

return statearr_24858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24874 = arguments.length;
switch (G__24874) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23435__auto___24919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_24898){
var state_val_24899 = (state_24898[(1)]);
if((state_val_24899 === (7))){
var inst_24880 = (state_24898[(7)]);
var inst_24880__$1 = (state_24898[(2)]);
var inst_24881 = (inst_24880__$1 == null);
var inst_24882 = cljs.core.not.call(null,inst_24881);
var state_24898__$1 = (function (){var statearr_24900 = state_24898;
(statearr_24900[(7)] = inst_24880__$1);

return statearr_24900;
})();
if(inst_24882){
var statearr_24901_24920 = state_24898__$1;
(statearr_24901_24920[(1)] = (8));

} else {
var statearr_24902_24921 = state_24898__$1;
(statearr_24902_24921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (1))){
var inst_24875 = (0);
var state_24898__$1 = (function (){var statearr_24903 = state_24898;
(statearr_24903[(8)] = inst_24875);

return statearr_24903;
})();
var statearr_24904_24922 = state_24898__$1;
(statearr_24904_24922[(2)] = null);

(statearr_24904_24922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (4))){
var state_24898__$1 = state_24898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24898__$1,(7),ch);
} else {
if((state_val_24899 === (6))){
var inst_24893 = (state_24898[(2)]);
var state_24898__$1 = state_24898;
var statearr_24905_24923 = state_24898__$1;
(statearr_24905_24923[(2)] = inst_24893);

(statearr_24905_24923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (3))){
var inst_24895 = (state_24898[(2)]);
var inst_24896 = cljs.core.async.close_BANG_.call(null,out);
var state_24898__$1 = (function (){var statearr_24906 = state_24898;
(statearr_24906[(9)] = inst_24895);

return statearr_24906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24898__$1,inst_24896);
} else {
if((state_val_24899 === (2))){
var inst_24875 = (state_24898[(8)]);
var inst_24877 = (inst_24875 < n);
var state_24898__$1 = state_24898;
if(cljs.core.truth_(inst_24877)){
var statearr_24907_24924 = state_24898__$1;
(statearr_24907_24924[(1)] = (4));

} else {
var statearr_24908_24925 = state_24898__$1;
(statearr_24908_24925[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (11))){
var inst_24875 = (state_24898[(8)]);
var inst_24885 = (state_24898[(2)]);
var inst_24886 = (inst_24875 + (1));
var inst_24875__$1 = inst_24886;
var state_24898__$1 = (function (){var statearr_24909 = state_24898;
(statearr_24909[(10)] = inst_24885);

(statearr_24909[(8)] = inst_24875__$1);

return statearr_24909;
})();
var statearr_24910_24926 = state_24898__$1;
(statearr_24910_24926[(2)] = null);

(statearr_24910_24926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (9))){
var state_24898__$1 = state_24898;
var statearr_24911_24927 = state_24898__$1;
(statearr_24911_24927[(2)] = null);

(statearr_24911_24927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (5))){
var state_24898__$1 = state_24898;
var statearr_24912_24928 = state_24898__$1;
(statearr_24912_24928[(2)] = null);

(statearr_24912_24928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (10))){
var inst_24890 = (state_24898[(2)]);
var state_24898__$1 = state_24898;
var statearr_24913_24929 = state_24898__$1;
(statearr_24913_24929[(2)] = inst_24890);

(statearr_24913_24929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24899 === (8))){
var inst_24880 = (state_24898[(7)]);
var state_24898__$1 = state_24898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24898__$1,(11),out,inst_24880);
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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_24914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24914[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_24914[(1)] = (1));

return statearr_24914;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_24898){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_24898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e24915){if((e24915 instanceof Object)){
var ex__23344__auto__ = e24915;
var statearr_24916_24930 = state_24898;
(statearr_24916_24930[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24931 = state_24898;
state_24898 = G__24931;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_24898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_24898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_24917 = f__23436__auto__.call(null);
(statearr_24917[(6)] = c__23435__auto___24919);

return statearr_24917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24933 = (function (f,ch,meta24934){
this.f = f;
this.ch = ch;
this.meta24934 = meta24934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24935,meta24934__$1){
var self__ = this;
var _24935__$1 = this;
return (new cljs.core.async.t_cljs$core$async24933(self__.f,self__.ch,meta24934__$1));
}));

(cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24935){
var self__ = this;
var _24935__$1 = this;
return self__.meta24934;
}));

(cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24936 = (function (f,ch,meta24934,_,fn1,meta24937){
this.f = f;
this.ch = ch;
this.meta24934 = meta24934;
this._ = _;
this.fn1 = fn1;
this.meta24937 = meta24937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24938,meta24937__$1){
var self__ = this;
var _24938__$1 = this;
return (new cljs.core.async.t_cljs$core$async24936(self__.f,self__.ch,self__.meta24934,self__._,self__.fn1,meta24937__$1));
}));

(cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24938){
var self__ = this;
var _24938__$1 = this;
return self__.meta24937;
}));

(cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__24932_SHARP_){
return f1.call(null,(((p1__24932_SHARP_ == null))?null:self__.f.call(null,p1__24932_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async24936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24934","meta24934",754380694,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24933","cljs.core.async/t_cljs$core$async24933",-879050618,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24937","meta24937",-780984666,null)], null);
}));

(cljs.core.async.t_cljs$core$async24936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24936");

(cljs.core.async.t_cljs$core$async24936.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24936.
 */
cljs.core.async.__GT_t_cljs$core$async24936 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24936(f__$1,ch__$1,meta24934__$1,___$2,fn1__$1,meta24937){
return (new cljs.core.async.t_cljs$core$async24936(f__$1,ch__$1,meta24934__$1,___$2,fn1__$1,meta24937));
});

}

return (new cljs.core.async.t_cljs$core$async24936(self__.f,self__.ch,self__.meta24934,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24934","meta24934",754380694,null)], null);
}));

(cljs.core.async.t_cljs$core$async24933.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24933");

(cljs.core.async.t_cljs$core$async24933.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24933");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24933.
 */
cljs.core.async.__GT_t_cljs$core$async24933 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24933(f__$1,ch__$1,meta24934){
return (new cljs.core.async.t_cljs$core$async24933(f__$1,ch__$1,meta24934));
});

}

return (new cljs.core.async.t_cljs$core$async24933(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24939 = (function (f,ch,meta24940){
this.f = f;
this.ch = ch;
this.meta24940 = meta24940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24941,meta24940__$1){
var self__ = this;
var _24941__$1 = this;
return (new cljs.core.async.t_cljs$core$async24939(self__.f,self__.ch,meta24940__$1));
}));

(cljs.core.async.t_cljs$core$async24939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24941){
var self__ = this;
var _24941__$1 = this;
return self__.meta24940;
}));

(cljs.core.async.t_cljs$core$async24939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async24939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24940","meta24940",-325740042,null)], null);
}));

(cljs.core.async.t_cljs$core$async24939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24939");

(cljs.core.async.t_cljs$core$async24939.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24939.
 */
cljs.core.async.__GT_t_cljs$core$async24939 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24939(f__$1,ch__$1,meta24940){
return (new cljs.core.async.t_cljs$core$async24939(f__$1,ch__$1,meta24940));
});

}

return (new cljs.core.async.t_cljs$core$async24939(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24942 = (function (p,ch,meta24943){
this.p = p;
this.ch = ch;
this.meta24943 = meta24943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24944,meta24943__$1){
var self__ = this;
var _24944__$1 = this;
return (new cljs.core.async.t_cljs$core$async24942(self__.p,self__.ch,meta24943__$1));
}));

(cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24944){
var self__ = this;
var _24944__$1 = this;
return self__.meta24943;
}));

(cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24943","meta24943",267641038,null)], null);
}));

(cljs.core.async.t_cljs$core$async24942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24942");

(cljs.core.async.t_cljs$core$async24942.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24942.
 */
cljs.core.async.__GT_t_cljs$core$async24942 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24942(p__$1,ch__$1,meta24943){
return (new cljs.core.async.t_cljs$core$async24942(p__$1,ch__$1,meta24943));
});

}

return (new cljs.core.async.t_cljs$core$async24942(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24946 = arguments.length;
switch (G__24946) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23435__auto___24986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_24967){
var state_val_24968 = (state_24967[(1)]);
if((state_val_24968 === (7))){
var inst_24963 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
var statearr_24969_24987 = state_24967__$1;
(statearr_24969_24987[(2)] = inst_24963);

(statearr_24969_24987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (1))){
var state_24967__$1 = state_24967;
var statearr_24970_24988 = state_24967__$1;
(statearr_24970_24988[(2)] = null);

(statearr_24970_24988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (4))){
var inst_24949 = (state_24967[(7)]);
var inst_24949__$1 = (state_24967[(2)]);
var inst_24950 = (inst_24949__$1 == null);
var state_24967__$1 = (function (){var statearr_24971 = state_24967;
(statearr_24971[(7)] = inst_24949__$1);

return statearr_24971;
})();
if(cljs.core.truth_(inst_24950)){
var statearr_24972_24989 = state_24967__$1;
(statearr_24972_24989[(1)] = (5));

} else {
var statearr_24973_24990 = state_24967__$1;
(statearr_24973_24990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (6))){
var inst_24949 = (state_24967[(7)]);
var inst_24954 = p.call(null,inst_24949);
var state_24967__$1 = state_24967;
if(cljs.core.truth_(inst_24954)){
var statearr_24974_24991 = state_24967__$1;
(statearr_24974_24991[(1)] = (8));

} else {
var statearr_24975_24992 = state_24967__$1;
(statearr_24975_24992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (3))){
var inst_24965 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24967__$1,inst_24965);
} else {
if((state_val_24968 === (2))){
var state_24967__$1 = state_24967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24967__$1,(4),ch);
} else {
if((state_val_24968 === (11))){
var inst_24957 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
var statearr_24976_24993 = state_24967__$1;
(statearr_24976_24993[(2)] = inst_24957);

(statearr_24976_24993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (9))){
var state_24967__$1 = state_24967;
var statearr_24977_24994 = state_24967__$1;
(statearr_24977_24994[(2)] = null);

(statearr_24977_24994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (5))){
var inst_24952 = cljs.core.async.close_BANG_.call(null,out);
var state_24967__$1 = state_24967;
var statearr_24978_24995 = state_24967__$1;
(statearr_24978_24995[(2)] = inst_24952);

(statearr_24978_24995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (10))){
var inst_24960 = (state_24967[(2)]);
var state_24967__$1 = (function (){var statearr_24979 = state_24967;
(statearr_24979[(8)] = inst_24960);

return statearr_24979;
})();
var statearr_24980_24996 = state_24967__$1;
(statearr_24980_24996[(2)] = null);

(statearr_24980_24996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (8))){
var inst_24949 = (state_24967[(7)]);
var state_24967__$1 = state_24967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24967__$1,(11),out,inst_24949);
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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_24981 = [null,null,null,null,null,null,null,null,null];
(statearr_24981[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_24981[(1)] = (1));

return statearr_24981;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_24967){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_24967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e24982){if((e24982 instanceof Object)){
var ex__23344__auto__ = e24982;
var statearr_24983_24997 = state_24967;
(statearr_24983_24997[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24998 = state_24967;
state_24967 = G__24998;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_24967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_24967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_24984 = f__23436__auto__.call(null);
(statearr_24984[(6)] = c__23435__auto___24986);

return statearr_24984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25000 = arguments.length;
switch (G__25000) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_25063){
var state_val_25064 = (state_25063[(1)]);
if((state_val_25064 === (7))){
var inst_25059 = (state_25063[(2)]);
var state_25063__$1 = state_25063;
var statearr_25065_25103 = state_25063__$1;
(statearr_25065_25103[(2)] = inst_25059);

(statearr_25065_25103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (20))){
var inst_25029 = (state_25063[(7)]);
var inst_25040 = (state_25063[(2)]);
var inst_25041 = cljs.core.next.call(null,inst_25029);
var inst_25015 = inst_25041;
var inst_25016 = null;
var inst_25017 = (0);
var inst_25018 = (0);
var state_25063__$1 = (function (){var statearr_25066 = state_25063;
(statearr_25066[(8)] = inst_25018);

(statearr_25066[(9)] = inst_25016);

(statearr_25066[(10)] = inst_25040);

(statearr_25066[(11)] = inst_25017);

(statearr_25066[(12)] = inst_25015);

return statearr_25066;
})();
var statearr_25067_25104 = state_25063__$1;
(statearr_25067_25104[(2)] = null);

(statearr_25067_25104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (1))){
var state_25063__$1 = state_25063;
var statearr_25068_25105 = state_25063__$1;
(statearr_25068_25105[(2)] = null);

(statearr_25068_25105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (4))){
var inst_25004 = (state_25063[(13)]);
var inst_25004__$1 = (state_25063[(2)]);
var inst_25005 = (inst_25004__$1 == null);
var state_25063__$1 = (function (){var statearr_25069 = state_25063;
(statearr_25069[(13)] = inst_25004__$1);

return statearr_25069;
})();
if(cljs.core.truth_(inst_25005)){
var statearr_25070_25106 = state_25063__$1;
(statearr_25070_25106[(1)] = (5));

} else {
var statearr_25071_25107 = state_25063__$1;
(statearr_25071_25107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (15))){
var state_25063__$1 = state_25063;
var statearr_25075_25108 = state_25063__$1;
(statearr_25075_25108[(2)] = null);

(statearr_25075_25108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (21))){
var state_25063__$1 = state_25063;
var statearr_25076_25109 = state_25063__$1;
(statearr_25076_25109[(2)] = null);

(statearr_25076_25109[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (13))){
var inst_25018 = (state_25063[(8)]);
var inst_25016 = (state_25063[(9)]);
var inst_25017 = (state_25063[(11)]);
var inst_25015 = (state_25063[(12)]);
var inst_25025 = (state_25063[(2)]);
var inst_25026 = (inst_25018 + (1));
var tmp25072 = inst_25016;
var tmp25073 = inst_25017;
var tmp25074 = inst_25015;
var inst_25015__$1 = tmp25074;
var inst_25016__$1 = tmp25072;
var inst_25017__$1 = tmp25073;
var inst_25018__$1 = inst_25026;
var state_25063__$1 = (function (){var statearr_25077 = state_25063;
(statearr_25077[(8)] = inst_25018__$1);

(statearr_25077[(9)] = inst_25016__$1);

(statearr_25077[(14)] = inst_25025);

(statearr_25077[(11)] = inst_25017__$1);

(statearr_25077[(12)] = inst_25015__$1);

return statearr_25077;
})();
var statearr_25078_25110 = state_25063__$1;
(statearr_25078_25110[(2)] = null);

(statearr_25078_25110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (22))){
var state_25063__$1 = state_25063;
var statearr_25079_25111 = state_25063__$1;
(statearr_25079_25111[(2)] = null);

(statearr_25079_25111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (6))){
var inst_25004 = (state_25063[(13)]);
var inst_25013 = f.call(null,inst_25004);
var inst_25014 = cljs.core.seq.call(null,inst_25013);
var inst_25015 = inst_25014;
var inst_25016 = null;
var inst_25017 = (0);
var inst_25018 = (0);
var state_25063__$1 = (function (){var statearr_25080 = state_25063;
(statearr_25080[(8)] = inst_25018);

(statearr_25080[(9)] = inst_25016);

(statearr_25080[(11)] = inst_25017);

(statearr_25080[(12)] = inst_25015);

return statearr_25080;
})();
var statearr_25081_25112 = state_25063__$1;
(statearr_25081_25112[(2)] = null);

(statearr_25081_25112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (17))){
var inst_25029 = (state_25063[(7)]);
var inst_25033 = cljs.core.chunk_first.call(null,inst_25029);
var inst_25034 = cljs.core.chunk_rest.call(null,inst_25029);
var inst_25035 = cljs.core.count.call(null,inst_25033);
var inst_25015 = inst_25034;
var inst_25016 = inst_25033;
var inst_25017 = inst_25035;
var inst_25018 = (0);
var state_25063__$1 = (function (){var statearr_25082 = state_25063;
(statearr_25082[(8)] = inst_25018);

(statearr_25082[(9)] = inst_25016);

(statearr_25082[(11)] = inst_25017);

(statearr_25082[(12)] = inst_25015);

return statearr_25082;
})();
var statearr_25083_25113 = state_25063__$1;
(statearr_25083_25113[(2)] = null);

(statearr_25083_25113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (3))){
var inst_25061 = (state_25063[(2)]);
var state_25063__$1 = state_25063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25063__$1,inst_25061);
} else {
if((state_val_25064 === (12))){
var inst_25049 = (state_25063[(2)]);
var state_25063__$1 = state_25063;
var statearr_25084_25114 = state_25063__$1;
(statearr_25084_25114[(2)] = inst_25049);

(statearr_25084_25114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (2))){
var state_25063__$1 = state_25063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25063__$1,(4),in$);
} else {
if((state_val_25064 === (23))){
var inst_25057 = (state_25063[(2)]);
var state_25063__$1 = state_25063;
var statearr_25085_25115 = state_25063__$1;
(statearr_25085_25115[(2)] = inst_25057);

(statearr_25085_25115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (19))){
var inst_25044 = (state_25063[(2)]);
var state_25063__$1 = state_25063;
var statearr_25086_25116 = state_25063__$1;
(statearr_25086_25116[(2)] = inst_25044);

(statearr_25086_25116[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (11))){
var inst_25029 = (state_25063[(7)]);
var inst_25015 = (state_25063[(12)]);
var inst_25029__$1 = cljs.core.seq.call(null,inst_25015);
var state_25063__$1 = (function (){var statearr_25087 = state_25063;
(statearr_25087[(7)] = inst_25029__$1);

return statearr_25087;
})();
if(inst_25029__$1){
var statearr_25088_25117 = state_25063__$1;
(statearr_25088_25117[(1)] = (14));

} else {
var statearr_25089_25118 = state_25063__$1;
(statearr_25089_25118[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (9))){
var inst_25051 = (state_25063[(2)]);
var inst_25052 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25063__$1 = (function (){var statearr_25090 = state_25063;
(statearr_25090[(15)] = inst_25051);

return statearr_25090;
})();
if(cljs.core.truth_(inst_25052)){
var statearr_25091_25119 = state_25063__$1;
(statearr_25091_25119[(1)] = (21));

} else {
var statearr_25092_25120 = state_25063__$1;
(statearr_25092_25120[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (5))){
var inst_25007 = cljs.core.async.close_BANG_.call(null,out);
var state_25063__$1 = state_25063;
var statearr_25093_25121 = state_25063__$1;
(statearr_25093_25121[(2)] = inst_25007);

(statearr_25093_25121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (14))){
var inst_25029 = (state_25063[(7)]);
var inst_25031 = cljs.core.chunked_seq_QMARK_.call(null,inst_25029);
var state_25063__$1 = state_25063;
if(inst_25031){
var statearr_25094_25122 = state_25063__$1;
(statearr_25094_25122[(1)] = (17));

} else {
var statearr_25095_25123 = state_25063__$1;
(statearr_25095_25123[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (16))){
var inst_25047 = (state_25063[(2)]);
var state_25063__$1 = state_25063;
var statearr_25096_25124 = state_25063__$1;
(statearr_25096_25124[(2)] = inst_25047);

(statearr_25096_25124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25064 === (10))){
var inst_25018 = (state_25063[(8)]);
var inst_25016 = (state_25063[(9)]);
var inst_25023 = cljs.core._nth.call(null,inst_25016,inst_25018);
var state_25063__$1 = state_25063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25063__$1,(13),out,inst_25023);
} else {
if((state_val_25064 === (18))){
var inst_25029 = (state_25063[(7)]);
var inst_25038 = cljs.core.first.call(null,inst_25029);
var state_25063__$1 = state_25063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25063__$1,(20),out,inst_25038);
} else {
if((state_val_25064 === (8))){
var inst_25018 = (state_25063[(8)]);
var inst_25017 = (state_25063[(11)]);
var inst_25020 = (inst_25018 < inst_25017);
var inst_25021 = inst_25020;
var state_25063__$1 = state_25063;
if(cljs.core.truth_(inst_25021)){
var statearr_25097_25125 = state_25063__$1;
(statearr_25097_25125[(1)] = (10));

} else {
var statearr_25098_25126 = state_25063__$1;
(statearr_25098_25126[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23341__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23341__auto____0 = (function (){
var statearr_25099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25099[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23341__auto__);

(statearr_25099[(1)] = (1));

return statearr_25099;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23341__auto____1 = (function (state_25063){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_25063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e25100){if((e25100 instanceof Object)){
var ex__23344__auto__ = e25100;
var statearr_25101_25127 = state_25063;
(statearr_25101_25127[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25128 = state_25063;
state_25063 = G__25128;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23341__auto__ = function(state_25063){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23341__auto____1.call(this,state_25063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23341__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23341__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_25102 = f__23436__auto__.call(null);
(statearr_25102[(6)] = c__23435__auto__);

return statearr_25102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));

return c__23435__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25130 = arguments.length;
switch (G__25130) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25133 = arguments.length;
switch (G__25133) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25136 = arguments.length;
switch (G__25136) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23435__auto___25183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_25160){
var state_val_25161 = (state_25160[(1)]);
if((state_val_25161 === (7))){
var inst_25155 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25162_25184 = state_25160__$1;
(statearr_25162_25184[(2)] = inst_25155);

(statearr_25162_25184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (1))){
var inst_25137 = null;
var state_25160__$1 = (function (){var statearr_25163 = state_25160;
(statearr_25163[(7)] = inst_25137);

return statearr_25163;
})();
var statearr_25164_25185 = state_25160__$1;
(statearr_25164_25185[(2)] = null);

(statearr_25164_25185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (4))){
var inst_25140 = (state_25160[(8)]);
var inst_25140__$1 = (state_25160[(2)]);
var inst_25141 = (inst_25140__$1 == null);
var inst_25142 = cljs.core.not.call(null,inst_25141);
var state_25160__$1 = (function (){var statearr_25165 = state_25160;
(statearr_25165[(8)] = inst_25140__$1);

return statearr_25165;
})();
if(inst_25142){
var statearr_25166_25186 = state_25160__$1;
(statearr_25166_25186[(1)] = (5));

} else {
var statearr_25167_25187 = state_25160__$1;
(statearr_25167_25187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (6))){
var state_25160__$1 = state_25160;
var statearr_25168_25188 = state_25160__$1;
(statearr_25168_25188[(2)] = null);

(statearr_25168_25188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (3))){
var inst_25157 = (state_25160[(2)]);
var inst_25158 = cljs.core.async.close_BANG_.call(null,out);
var state_25160__$1 = (function (){var statearr_25169 = state_25160;
(statearr_25169[(9)] = inst_25157);

return statearr_25169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25160__$1,inst_25158);
} else {
if((state_val_25161 === (2))){
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25160__$1,(4),ch);
} else {
if((state_val_25161 === (11))){
var inst_25140 = (state_25160[(8)]);
var inst_25149 = (state_25160[(2)]);
var inst_25137 = inst_25140;
var state_25160__$1 = (function (){var statearr_25170 = state_25160;
(statearr_25170[(10)] = inst_25149);

(statearr_25170[(7)] = inst_25137);

return statearr_25170;
})();
var statearr_25171_25189 = state_25160__$1;
(statearr_25171_25189[(2)] = null);

(statearr_25171_25189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (9))){
var inst_25140 = (state_25160[(8)]);
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25160__$1,(11),out,inst_25140);
} else {
if((state_val_25161 === (5))){
var inst_25140 = (state_25160[(8)]);
var inst_25137 = (state_25160[(7)]);
var inst_25144 = cljs.core._EQ_.call(null,inst_25140,inst_25137);
var state_25160__$1 = state_25160;
if(inst_25144){
var statearr_25173_25190 = state_25160__$1;
(statearr_25173_25190[(1)] = (8));

} else {
var statearr_25174_25191 = state_25160__$1;
(statearr_25174_25191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (10))){
var inst_25152 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25175_25192 = state_25160__$1;
(statearr_25175_25192[(2)] = inst_25152);

(statearr_25175_25192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (8))){
var inst_25137 = (state_25160[(7)]);
var tmp25172 = inst_25137;
var inst_25137__$1 = tmp25172;
var state_25160__$1 = (function (){var statearr_25176 = state_25160;
(statearr_25176[(7)] = inst_25137__$1);

return statearr_25176;
})();
var statearr_25177_25193 = state_25160__$1;
(statearr_25177_25193[(2)] = null);

(statearr_25177_25193[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_25178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25178[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_25178[(1)] = (1));

return statearr_25178;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_25160){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_25160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e25179){if((e25179 instanceof Object)){
var ex__23344__auto__ = e25179;
var statearr_25180_25194 = state_25160;
(statearr_25180_25194[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25195 = state_25160;
state_25160 = G__25195;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_25160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_25160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_25181 = f__23436__auto__.call(null);
(statearr_25181[(6)] = c__23435__auto___25183);

return statearr_25181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25197 = arguments.length;
switch (G__25197) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23435__auto___25263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_25235){
var state_val_25236 = (state_25235[(1)]);
if((state_val_25236 === (7))){
var inst_25231 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25237_25264 = state_25235__$1;
(statearr_25237_25264[(2)] = inst_25231);

(statearr_25237_25264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (1))){
var inst_25198 = (new Array(n));
var inst_25199 = inst_25198;
var inst_25200 = (0);
var state_25235__$1 = (function (){var statearr_25238 = state_25235;
(statearr_25238[(7)] = inst_25199);

(statearr_25238[(8)] = inst_25200);

return statearr_25238;
})();
var statearr_25239_25265 = state_25235__$1;
(statearr_25239_25265[(2)] = null);

(statearr_25239_25265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (4))){
var inst_25203 = (state_25235[(9)]);
var inst_25203__$1 = (state_25235[(2)]);
var inst_25204 = (inst_25203__$1 == null);
var inst_25205 = cljs.core.not.call(null,inst_25204);
var state_25235__$1 = (function (){var statearr_25240 = state_25235;
(statearr_25240[(9)] = inst_25203__$1);

return statearr_25240;
})();
if(inst_25205){
var statearr_25241_25266 = state_25235__$1;
(statearr_25241_25266[(1)] = (5));

} else {
var statearr_25242_25267 = state_25235__$1;
(statearr_25242_25267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (15))){
var inst_25225 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25243_25268 = state_25235__$1;
(statearr_25243_25268[(2)] = inst_25225);

(statearr_25243_25268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (13))){
var state_25235__$1 = state_25235;
var statearr_25244_25269 = state_25235__$1;
(statearr_25244_25269[(2)] = null);

(statearr_25244_25269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (6))){
var inst_25200 = (state_25235[(8)]);
var inst_25221 = (inst_25200 > (0));
var state_25235__$1 = state_25235;
if(cljs.core.truth_(inst_25221)){
var statearr_25245_25270 = state_25235__$1;
(statearr_25245_25270[(1)] = (12));

} else {
var statearr_25246_25271 = state_25235__$1;
(statearr_25246_25271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (3))){
var inst_25233 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25235__$1,inst_25233);
} else {
if((state_val_25236 === (12))){
var inst_25199 = (state_25235[(7)]);
var inst_25223 = cljs.core.vec.call(null,inst_25199);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25235__$1,(15),out,inst_25223);
} else {
if((state_val_25236 === (2))){
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25235__$1,(4),ch);
} else {
if((state_val_25236 === (11))){
var inst_25215 = (state_25235[(2)]);
var inst_25216 = (new Array(n));
var inst_25199 = inst_25216;
var inst_25200 = (0);
var state_25235__$1 = (function (){var statearr_25247 = state_25235;
(statearr_25247[(7)] = inst_25199);

(statearr_25247[(8)] = inst_25200);

(statearr_25247[(10)] = inst_25215);

return statearr_25247;
})();
var statearr_25248_25272 = state_25235__$1;
(statearr_25248_25272[(2)] = null);

(statearr_25248_25272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (9))){
var inst_25199 = (state_25235[(7)]);
var inst_25213 = cljs.core.vec.call(null,inst_25199);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25235__$1,(11),out,inst_25213);
} else {
if((state_val_25236 === (5))){
var inst_25203 = (state_25235[(9)]);
var inst_25199 = (state_25235[(7)]);
var inst_25200 = (state_25235[(8)]);
var inst_25208 = (state_25235[(11)]);
var inst_25207 = (inst_25199[inst_25200] = inst_25203);
var inst_25208__$1 = (inst_25200 + (1));
var inst_25209 = (inst_25208__$1 < n);
var state_25235__$1 = (function (){var statearr_25249 = state_25235;
(statearr_25249[(12)] = inst_25207);

(statearr_25249[(11)] = inst_25208__$1);

return statearr_25249;
})();
if(cljs.core.truth_(inst_25209)){
var statearr_25250_25273 = state_25235__$1;
(statearr_25250_25273[(1)] = (8));

} else {
var statearr_25251_25274 = state_25235__$1;
(statearr_25251_25274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (14))){
var inst_25228 = (state_25235[(2)]);
var inst_25229 = cljs.core.async.close_BANG_.call(null,out);
var state_25235__$1 = (function (){var statearr_25253 = state_25235;
(statearr_25253[(13)] = inst_25228);

return statearr_25253;
})();
var statearr_25254_25275 = state_25235__$1;
(statearr_25254_25275[(2)] = inst_25229);

(statearr_25254_25275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (10))){
var inst_25219 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25255_25276 = state_25235__$1;
(statearr_25255_25276[(2)] = inst_25219);

(statearr_25255_25276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (8))){
var inst_25199 = (state_25235[(7)]);
var inst_25208 = (state_25235[(11)]);
var tmp25252 = inst_25199;
var inst_25199__$1 = tmp25252;
var inst_25200 = inst_25208;
var state_25235__$1 = (function (){var statearr_25256 = state_25235;
(statearr_25256[(7)] = inst_25199__$1);

(statearr_25256[(8)] = inst_25200);

return statearr_25256;
})();
var statearr_25257_25277 = state_25235__$1;
(statearr_25257_25277[(2)] = null);

(statearr_25257_25277[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_25258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25258[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_25258[(1)] = (1));

return statearr_25258;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_25235){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_25235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e25259){if((e25259 instanceof Object)){
var ex__23344__auto__ = e25259;
var statearr_25260_25278 = state_25235;
(statearr_25260_25278[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25279 = state_25235;
state_25235 = G__25279;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_25235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_25235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_25261 = f__23436__auto__.call(null);
(statearr_25261[(6)] = c__23435__auto___25263);

return statearr_25261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25281 = arguments.length;
switch (G__25281) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23435__auto___25351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23436__auto__ = (function (){var switch__23340__auto__ = (function (state_25323){
var state_val_25324 = (state_25323[(1)]);
if((state_val_25324 === (7))){
var inst_25319 = (state_25323[(2)]);
var state_25323__$1 = state_25323;
var statearr_25325_25352 = state_25323__$1;
(statearr_25325_25352[(2)] = inst_25319);

(statearr_25325_25352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (1))){
var inst_25282 = [];
var inst_25283 = inst_25282;
var inst_25284 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25323__$1 = (function (){var statearr_25326 = state_25323;
(statearr_25326[(7)] = inst_25284);

(statearr_25326[(8)] = inst_25283);

return statearr_25326;
})();
var statearr_25327_25353 = state_25323__$1;
(statearr_25327_25353[(2)] = null);

(statearr_25327_25353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (4))){
var inst_25287 = (state_25323[(9)]);
var inst_25287__$1 = (state_25323[(2)]);
var inst_25288 = (inst_25287__$1 == null);
var inst_25289 = cljs.core.not.call(null,inst_25288);
var state_25323__$1 = (function (){var statearr_25328 = state_25323;
(statearr_25328[(9)] = inst_25287__$1);

return statearr_25328;
})();
if(inst_25289){
var statearr_25329_25354 = state_25323__$1;
(statearr_25329_25354[(1)] = (5));

} else {
var statearr_25330_25355 = state_25323__$1;
(statearr_25330_25355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (15))){
var inst_25313 = (state_25323[(2)]);
var state_25323__$1 = state_25323;
var statearr_25331_25356 = state_25323__$1;
(statearr_25331_25356[(2)] = inst_25313);

(statearr_25331_25356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (13))){
var state_25323__$1 = state_25323;
var statearr_25332_25357 = state_25323__$1;
(statearr_25332_25357[(2)] = null);

(statearr_25332_25357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (6))){
var inst_25283 = (state_25323[(8)]);
var inst_25308 = inst_25283.length;
var inst_25309 = (inst_25308 > (0));
var state_25323__$1 = state_25323;
if(cljs.core.truth_(inst_25309)){
var statearr_25333_25358 = state_25323__$1;
(statearr_25333_25358[(1)] = (12));

} else {
var statearr_25334_25359 = state_25323__$1;
(statearr_25334_25359[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (3))){
var inst_25321 = (state_25323[(2)]);
var state_25323__$1 = state_25323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25323__$1,inst_25321);
} else {
if((state_val_25324 === (12))){
var inst_25283 = (state_25323[(8)]);
var inst_25311 = cljs.core.vec.call(null,inst_25283);
var state_25323__$1 = state_25323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25323__$1,(15),out,inst_25311);
} else {
if((state_val_25324 === (2))){
var state_25323__$1 = state_25323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25323__$1,(4),ch);
} else {
if((state_val_25324 === (11))){
var inst_25291 = (state_25323[(10)]);
var inst_25287 = (state_25323[(9)]);
var inst_25301 = (state_25323[(2)]);
var inst_25302 = [];
var inst_25303 = inst_25302.push(inst_25287);
var inst_25283 = inst_25302;
var inst_25284 = inst_25291;
var state_25323__$1 = (function (){var statearr_25335 = state_25323;
(statearr_25335[(7)] = inst_25284);

(statearr_25335[(11)] = inst_25301);

(statearr_25335[(8)] = inst_25283);

(statearr_25335[(12)] = inst_25303);

return statearr_25335;
})();
var statearr_25336_25360 = state_25323__$1;
(statearr_25336_25360[(2)] = null);

(statearr_25336_25360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (9))){
var inst_25283 = (state_25323[(8)]);
var inst_25299 = cljs.core.vec.call(null,inst_25283);
var state_25323__$1 = state_25323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25323__$1,(11),out,inst_25299);
} else {
if((state_val_25324 === (5))){
var inst_25284 = (state_25323[(7)]);
var inst_25291 = (state_25323[(10)]);
var inst_25287 = (state_25323[(9)]);
var inst_25291__$1 = f.call(null,inst_25287);
var inst_25292 = cljs.core._EQ_.call(null,inst_25291__$1,inst_25284);
var inst_25293 = cljs.core.keyword_identical_QMARK_.call(null,inst_25284,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25294 = ((inst_25292) || (inst_25293));
var state_25323__$1 = (function (){var statearr_25337 = state_25323;
(statearr_25337[(10)] = inst_25291__$1);

return statearr_25337;
})();
if(cljs.core.truth_(inst_25294)){
var statearr_25338_25361 = state_25323__$1;
(statearr_25338_25361[(1)] = (8));

} else {
var statearr_25339_25362 = state_25323__$1;
(statearr_25339_25362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (14))){
var inst_25316 = (state_25323[(2)]);
var inst_25317 = cljs.core.async.close_BANG_.call(null,out);
var state_25323__$1 = (function (){var statearr_25341 = state_25323;
(statearr_25341[(13)] = inst_25316);

return statearr_25341;
})();
var statearr_25342_25363 = state_25323__$1;
(statearr_25342_25363[(2)] = inst_25317);

(statearr_25342_25363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (10))){
var inst_25306 = (state_25323[(2)]);
var state_25323__$1 = state_25323;
var statearr_25343_25364 = state_25323__$1;
(statearr_25343_25364[(2)] = inst_25306);

(statearr_25343_25364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (8))){
var inst_25291 = (state_25323[(10)]);
var inst_25283 = (state_25323[(8)]);
var inst_25287 = (state_25323[(9)]);
var inst_25296 = inst_25283.push(inst_25287);
var tmp25340 = inst_25283;
var inst_25283__$1 = tmp25340;
var inst_25284 = inst_25291;
var state_25323__$1 = (function (){var statearr_25344 = state_25323;
(statearr_25344[(14)] = inst_25296);

(statearr_25344[(7)] = inst_25284);

(statearr_25344[(8)] = inst_25283__$1);

return statearr_25344;
})();
var statearr_25345_25365 = state_25323__$1;
(statearr_25345_25365[(2)] = null);

(statearr_25345_25365[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23341__auto__ = null;
var cljs$core$async$state_machine__23341__auto____0 = (function (){
var statearr_25346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25346[(0)] = cljs$core$async$state_machine__23341__auto__);

(statearr_25346[(1)] = (1));

return statearr_25346;
});
var cljs$core$async$state_machine__23341__auto____1 = (function (state_25323){
while(true){
var ret_value__23342__auto__ = (function (){try{while(true){
var result__23343__auto__ = switch__23340__auto__.call(null,state_25323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23343__auto__;
}
break;
}
}catch (e25347){if((e25347 instanceof Object)){
var ex__23344__auto__ = e25347;
var statearr_25348_25366 = state_25323;
(statearr_25348_25366[(5)] = ex__23344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25367 = state_25323;
state_25323 = G__25367;
continue;
} else {
return ret_value__23342__auto__;
}
break;
}
});
cljs$core$async$state_machine__23341__auto__ = function(state_25323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23341__auto____1.call(this,state_25323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23341__auto____0;
cljs$core$async$state_machine__23341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23341__auto____1;
return cljs$core$async$state_machine__23341__auto__;
})()
})();
var state__23437__auto__ = (function (){var statearr_25349 = f__23436__auto__.call(null);
(statearr_25349[(6)] = c__23435__auto___25351);

return statearr_25349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23437__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1608325366163
