if(!lt.util.load.provided_QMARK_('lt.plugins.jsbeautify')) {
goog.provide('lt.plugins.jsbeautify');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.files');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.objs.files');
goog.require('lt.object');
lt.plugins.jsbeautify.beautify_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"node_modules/js-beautify");
lt.plugins.jsbeautify.extract_type = (function extract_type(obj_id){return cljs.core.deref.call(null,obj_id).call(null,new cljs.core.Keyword(null,"info","info",1017141280)).call(null,new cljs.core.Keyword(null,"type-name","type-name",1486910640));
});
lt.plugins.jsbeautify.beautify_execution = (function (){var method_table__7229__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7230__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7232__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7233__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("beautify-execution",((function (method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__,hierarchy__7233__auto__){
return (function (obj_id,beautify_path,code,opts){return lt.plugins.jsbeautify.extract_type.call(null,obj_id);
});})(method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__,hierarchy__7233__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7233__auto__,method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.jsbeautify.beautify_execution,"HTML",(function (obj_id,beautify_path,code,opts){var jsbeautify = require(beautify_path).html;return jsbeautify.call(null,code,(cljs.core.truth_(opts)?cljs.core.clj__GT_js.call(null,opts):null));
}));
cljs.core._add_method.call(null,lt.plugins.jsbeautify.beautify_execution,"CSS",(function (obj_id,beautify_path,code,opts){var jsbeautify = require(beautify_path).css;return jsbeautify.call(null,code,(cljs.core.truth_(opts)?cljs.core.clj__GT_js.call(null,opts):null));
}));
cljs.core._add_method.call(null,lt.plugins.jsbeautify.beautify_execution,new cljs.core.Keyword(null,"default","default",2558708147),(function (obj_id,beautify_path,code,opts){var jsbeautify = require(beautify_path).js;return jsbeautify.call(null,code,(cljs.core.truth_(opts)?cljs.core.clj__GT_js.call(null,opts):null));
}));
lt.plugins.jsbeautify.beautify_selection = (function beautify_selection(obj_id,beautify_path,opts){return lt.objs.editor.replace_selection.call(null,obj_id,lt.plugins.jsbeautify.beautify_execution.call(null,obj_id,beautify_path,lt.objs.editor.selection.call(null,obj_id),opts));
});
lt.plugins.jsbeautify.beautify_file = (function beautify_file(obj_id,beautify_path,opts){var position = lt.objs.editor.__GT_cursor.call(null,obj_id);lt.objs.editor.set_val.call(null,obj_id,lt.plugins.jsbeautify.beautify_execution.call(null,obj_id,beautify_path,lt.objs.editor.__GT_val.call(null,obj_id),opts));
return lt.objs.editor.move_cursor.call(null,obj_id,position);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jsbeautify","on-save","lt.plugins.jsbeautify/on-save",1671963816),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JsBeautify: Beautify on save",new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){var temp__4126__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4126__auto__))
{var ed = temp__4126__auto__;return lt.plugins.jsbeautify.beautify_file.call(null,ed,lt.plugins.jsbeautify.beautify_path,new cljs.core.Keyword("lt.plugins.jsbeautify","jsbeautify-options","lt.plugins.jsbeautify/jsbeautify-options",768787574).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return null;
}
}));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jsbeautify","jsbeautify-options","lt.plugins.jsbeautify/jsbeautify-options",768787574),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSBeautify: Set JSBeautify options",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"options",new cljs.core.Keyword(null,"example","example",3985900764),"{:indent_size 2}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], null)], null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,opts){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.jsbeautify","jsbeautify-options","lt.plugins.jsbeautify/jsbeautify-options",768787574),opts], null));
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jsbeautify.beautify-selection","jsbeautify.beautify-selection",2025636886),new cljs.core.Keyword(null,"desc","desc",1016984067),"JsBeautify: Beautify current selection",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4126__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4126__auto__))
{var ed = temp__4126__auto__;return lt.plugins.jsbeautify.beautify_selection.call(null,ed,lt.plugins.jsbeautify.beautify_path,new cljs.core.Keyword("lt.plugins.jsbeautify","jsbeautify-options","lt.plugins.jsbeautify/jsbeautify-options",768787574).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jsbeautify.beautify-file","jsbeautify.beautify-file",1363180246),new cljs.core.Keyword(null,"desc","desc",1016984067),"JsBeautify: Beautify current file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4126__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4126__auto__))
{var ed = temp__4126__auto__;return lt.plugins.jsbeautify.beautify_file.call(null,ed,lt.plugins.jsbeautify.beautify_path,new cljs.core.Keyword("lt.plugins.jsbeautify","jsbeautify-options","lt.plugins.jsbeautify/jsbeautify-options",768787574).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=jsbeautify_compiled.js.map