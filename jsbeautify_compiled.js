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
lt.plugins.jsbeautify.beauty = (function beauty(obj_id,beautify_path,code){var jsbeautify = require(beautify_path).js_beautify;return jsbeautify.call(null,code);
});
lt.plugins.jsbeautify.beautyCall = (function beautyCall(obj_id,beautify_path,code){return lt.objs.editor.replace_selection.call(null,obj_id,lt.plugins.jsbeautify.beauty.call(null,obj_id,beautify_path,code));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.beauty","user.beauty",4119786353),new cljs.core.Keyword(null,"desc","desc",1016984067),"JsBeautify: beautify current selection",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4126__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4126__auto__))
{var ed = temp__4126__auto__;return lt.plugins.jsbeautify.beautyCall.call(null,ed,lt.plugins.jsbeautify.beautify_path,lt.objs.editor.selection.call(null,ed));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=jsbeautify_compiled.js.map