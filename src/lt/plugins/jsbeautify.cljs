(ns lt.plugins.jsbeautify
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))


;; Define path to js-beautify
(def beautify-path (files/join plugins/*plugin-dir* "node_modules/js-beautify"))

(defn beauty [obj-id beautify-path code]
    (let [jsbeautify ( .-js_beautify (
                                 js/require beautify-path
                                 )
                  )]
          (jsbeautify code)
      )
    )

(defn beautyCall [obj-id beautify-path code]
  (editor/replace-selection obj-id (beauty obj-id beautify-path code))
 )

(cmd/command {:command :user.beauty
              :desc "JsBeautify: beautify current selection"
              :exec (fn [this]
                      (when-let [ed (pool/last-active)]
                        (beautyCall ed beautify-path (editor/selection ed))))})
