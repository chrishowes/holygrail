// Compiled by ClojureScript 1.7.189 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__6854_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6854_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__6859 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6860 = null;
var count__6861 = (0);
var i__6862 = (0);
while(true){
if((i__6862 < count__6861)){
var s = cljs.core._nth.call(null,chunk__6860,i__6862);
var temp__4425__auto___6863 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6863)){
var sheet_6864 = temp__4425__auto___6863;
var temp__4425__auto___6865__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6864.href,changed);
if(cljs.core.truth_(temp__4425__auto___6865__$1)){
var href_uri_6866 = temp__4425__auto___6865__$1;
sheet_6864.ownerNode.href = href_uri_6866.makeUnique().toString();
} else {
}
} else {
}

var G__6867 = seq__6859;
var G__6868 = chunk__6860;
var G__6869 = count__6861;
var G__6870 = (i__6862 + (1));
seq__6859 = G__6867;
chunk__6860 = G__6868;
count__6861 = G__6869;
i__6862 = G__6870;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6859);
if(temp__4425__auto__){
var seq__6859__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6859__$1)){
var c__5811__auto__ = cljs.core.chunk_first.call(null,seq__6859__$1);
var G__6871 = cljs.core.chunk_rest.call(null,seq__6859__$1);
var G__6872 = c__5811__auto__;
var G__6873 = cljs.core.count.call(null,c__5811__auto__);
var G__6874 = (0);
seq__6859 = G__6871;
chunk__6860 = G__6872;
count__6861 = G__6873;
i__6862 = G__6874;
continue;
} else {
var s = cljs.core.first.call(null,seq__6859__$1);
var temp__4425__auto___6875__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6875__$1)){
var sheet_6876 = temp__4425__auto___6875__$1;
var temp__4425__auto___6877__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6876.href,changed);
if(cljs.core.truth_(temp__4425__auto___6877__$2)){
var href_uri_6878 = temp__4425__auto___6877__$2;
sheet_6876.ownerNode.href = href_uri_6878.makeUnique().toString();
} else {
}
} else {
}

var G__6879 = cljs.core.next.call(null,seq__6859__$1);
var G__6880 = null;
var G__6881 = (0);
var G__6882 = (0);
seq__6859 = G__6879;
chunk__6860 = G__6880;
count__6861 = G__6881;
i__6862 = G__6882;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__6887 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6888 = null;
var count__6889 = (0);
var i__6890 = (0);
while(true){
if((i__6890 < count__6889)){
var s = cljs.core._nth.call(null,chunk__6888,i__6890);
var temp__4425__auto___6891 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6891)){
var image_6892 = temp__4425__auto___6891;
var temp__4425__auto___6893__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6892.src,changed);
if(cljs.core.truth_(temp__4425__auto___6893__$1)){
var href_uri_6894 = temp__4425__auto___6893__$1;
image_6892.src = href_uri_6894.makeUnique().toString();
} else {
}
} else {
}

var G__6895 = seq__6887;
var G__6896 = chunk__6888;
var G__6897 = count__6889;
var G__6898 = (i__6890 + (1));
seq__6887 = G__6895;
chunk__6888 = G__6896;
count__6889 = G__6897;
i__6890 = G__6898;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6887);
if(temp__4425__auto__){
var seq__6887__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6887__$1)){
var c__5811__auto__ = cljs.core.chunk_first.call(null,seq__6887__$1);
var G__6899 = cljs.core.chunk_rest.call(null,seq__6887__$1);
var G__6900 = c__5811__auto__;
var G__6901 = cljs.core.count.call(null,c__5811__auto__);
var G__6902 = (0);
seq__6887 = G__6899;
chunk__6888 = G__6900;
count__6889 = G__6901;
i__6890 = G__6902;
continue;
} else {
var s = cljs.core.first.call(null,seq__6887__$1);
var temp__4425__auto___6903__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6903__$1)){
var image_6904 = temp__4425__auto___6903__$1;
var temp__4425__auto___6905__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6904.src,changed);
if(cljs.core.truth_(temp__4425__auto___6905__$2)){
var href_uri_6906 = temp__4425__auto___6905__$2;
image_6904.src = href_uri_6906.makeUnique().toString();
} else {
}
} else {
}

var G__6907 = cljs.core.next.call(null,seq__6887__$1);
var G__6908 = null;
var G__6909 = (0);
var G__6910 = (0);
seq__6887 = G__6907;
chunk__6888 = G__6908;
count__6889 = G__6909;
i__6890 = G__6910;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6913){
var map__6916 = p__6913;
var map__6916__$1 = ((((!((map__6916 == null)))?((((map__6916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6916):map__6916);
var on_jsload = cljs.core.get.call(null,map__6916__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6916,map__6916__$1,on_jsload){
return (function (p1__6911_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6911_SHARP_,".js");
});})(map__6916,map__6916__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6916,map__6916__$1,on_jsload){
return (function (p1__6912_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6912_SHARP_).makeUnique());
});})(js_files,map__6916,map__6916__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6916,map__6916__$1,on_jsload){
return (function() { 
var G__6918__delegate = function (_){
return on_jsload.call(null);
};
var G__6918 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6919__i = 0, G__6919__a = new Array(arguments.length -  0);
while (G__6919__i < G__6919__a.length) {G__6919__a[G__6919__i] = arguments[G__6919__i + 0]; ++G__6919__i;}
  _ = new cljs.core.IndexedSeq(G__6919__a,0);
} 
return G__6918__delegate.call(this,_);};
G__6918.cljs$lang$maxFixedArity = 0;
G__6918.cljs$lang$applyTo = (function (arglist__6920){
var _ = cljs.core.seq(arglist__6920);
return G__6918__delegate(_);
});
G__6918.cljs$core$IFn$_invoke$arity$variadic = G__6918__delegate;
return G__6918;
})()
;})(js_files,map__6916,map__6916__$1,on_jsload))
,((function (js_files,map__6916,map__6916__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6916,map__6916__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6925_6929 = cljs.core.seq.call(null,things_to_log);
var chunk__6926_6930 = null;
var count__6927_6931 = (0);
var i__6928_6932 = (0);
while(true){
if((i__6928_6932 < count__6927_6931)){
var t_6933 = cljs.core._nth.call(null,chunk__6926_6930,i__6928_6932);
console.log(t_6933);

var G__6934 = seq__6925_6929;
var G__6935 = chunk__6926_6930;
var G__6936 = count__6927_6931;
var G__6937 = (i__6928_6932 + (1));
seq__6925_6929 = G__6934;
chunk__6926_6930 = G__6935;
count__6927_6931 = G__6936;
i__6928_6932 = G__6937;
continue;
} else {
var temp__4425__auto___6938 = cljs.core.seq.call(null,seq__6925_6929);
if(temp__4425__auto___6938){
var seq__6925_6939__$1 = temp__4425__auto___6938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6925_6939__$1)){
var c__5811__auto___6940 = cljs.core.chunk_first.call(null,seq__6925_6939__$1);
var G__6941 = cljs.core.chunk_rest.call(null,seq__6925_6939__$1);
var G__6942 = c__5811__auto___6940;
var G__6943 = cljs.core.count.call(null,c__5811__auto___6940);
var G__6944 = (0);
seq__6925_6929 = G__6941;
chunk__6926_6930 = G__6942;
count__6927_6931 = G__6943;
i__6928_6932 = G__6944;
continue;
} else {
var t_6945 = cljs.core.first.call(null,seq__6925_6939__$1);
console.log(t_6945);

var G__6946 = cljs.core.next.call(null,seq__6925_6939__$1);
var G__6947 = null;
var G__6948 = (0);
var G__6949 = (0);
seq__6925_6929 = G__6946;
chunk__6926_6930 = G__6947;
count__6927_6931 = G__6948;
i__6928_6932 = G__6949;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__6951 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6951,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6951);

adzerk.boot_reload.reload.reload_css.call(null,G__6951);

adzerk.boot_reload.reload.reload_img.call(null,G__6951);

return G__6951;
});

//# sourceMappingURL=reload.js.map