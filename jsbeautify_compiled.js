if(!lt.util.load.provided_QMARK_('lt.plugins.jsbeautify')) {
goog.provide('lt.plugins.jsbeautify');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.tabs');
goog.require('lt.objs.files');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.plugins');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.objs.files');
goog.require('lt.object');
lt.plugins.jsbeautify.beautify_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"node_modules/js-beautify");
lt.plugins.jsbeautify.beautify_execution = (function beautify_execution(obj_id,beautify_path,code){var jsbeautify = require(beautify_path).js_beautify;return jsbeautify.call(null,code);
});
lt.plugins.jsbeautify.beautify_selection = (function beautify_selection(obj_id,beautify_path){return lt.objs.editor.replace_selection.call(null,obj_id,lt.plugins.jsbeautify.beautify_execution.call(null,obj_id,beautify_path,lt.objs.editor.selection.call(null,obj_id)));
});
lt.plugins.jsbeautify.beautify_file = (function beautify_file(obj_id,beautify_path){var position = lt.objs.editor.__GT_cursor.call(null,obj_id);lt.objs.editor.set_val.call(null,obj_id,lt.plugins.jsbeautify.beautify_execution.call(null,obj_id,beautify_path,lt.objs.editor.__GT_val.call(null,obj_id)));
return lt.objs.editor.move_cursor.call(null,obj_id,position);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jsbeautify","on-save","lt.plugins.jsbeautify/on-save",1671963816),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JsBeautify: Beautify on save",new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){var temp__4126__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4126__auto__))
{var ed = temp__4126__auto__;return lt.plugins.jsbeautify.beautify_file.call(null,ed,lt.plugins.jsbeautify.beautify_path);
} else
{return null;
}
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jsbeautify.beautify-selection","jsbeautify.beautify-selection",2025636886),new cljs.core.Keyword(null,"desc","desc",1016984067),"JsBeautify: Beautify current selection",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4126__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4126__auto__))
{var ed = temp__4126__auto__;return lt.plugins.jsbeautify.beautify_selection.call(null,ed,lt.plugins.jsbeautify.beautify_path);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jsbeautify.beautify-file","jsbeautify.beautify-file",1363180246),new cljs.core.Keyword(null,"desc","desc",1016984067),"JsBeautify: Beautify current file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4126__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4126__auto__))
{var ed = temp__4126__auto__;return lt.plugins.jsbeautify.beautify_file.call(null,ed,lt.plugins.jsbeautify.beautify_path);
} else
{return null;
}
})], null));
}

//# sourceMappingURL=jsbeautify_compiled.js.map