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
    (let [jsbeautify ( .-js_beautify (js/require beautify-path))]
          (jsbeautify code)
      )
)

(defn beautify-selection [obj-id beautify-path]
  (editor/replace-selection obj-id (beauty obj-id beautify-path (editor/selection obj-id)))
 )

(defn beautify-file [obj-id beautify-path]
  (let [position (editor/->cursor obj-id)]
      (editor/set-val obj-id (beauty obj-id beautify-path (editor/->val obj-id)))
      (editor/move-cursor obj-id position)
  )
 )

(object/behavior* ::on-save
                  :triggers #{:save}
                  :type :user
                  :desc "JsBeautify: Beautify on save"
                  :reaction (fn [this]
                              (when-let [ed (pool/last-active)]
                               (beautify-file ed beautify-path )))                              )


(cmd/command {:command :jsbeautify.beautify-selection
              :desc "JsBeautify: Beautify current selection"
              :exec (fn [this]
                      (when-let [ed (pool/last-active)]
                        (beautify-selection ed beautify-path)))})

(cmd/command {:command :jsbeautify.beautify-file
              :desc "JsBeautify: Beautify current file"
              :exec (fn [this]
                      (when-let [ed (pool/last-active)]
                        (beautify-file ed beautify-path)
                      ))
            })
