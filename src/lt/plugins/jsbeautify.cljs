(ns lt.plugins.jsbeautify
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

;; Path to BeautifyJs node module
(def beautify-path (files/join plugins/*plugin-dir* "node_modules/js-beautify"))


(defn extract-type [obj-id]
  ((@obj-id :info) :type-name)
)

(defmulti beautify-execution
  (fn [obj-id beautify-path code opts] (extract-type obj-id)))

;; Require Beautify Function from node module
(defmethod beautify-execution "HTML" [obj-id beautify-path code opts]
       (let [jsbeautify ( .-html (js/require beautify-path))]
          (jsbeautify code (when opts (clj->js opts)))
      )
  )

(defmethod beautify-execution "CSS" [obj-id beautify-path code opts]
       (let [jsbeautify ( .-css (js/require beautify-path))]
          (jsbeautify code (when opts (clj->js opts)))
      )
  )

(defmethod beautify-execution :default [obj-id beautify-path code opts]
       (let [jsbeautify ( .-js (js/require beautify-path))]
          (jsbeautify code (when opts (clj->js opts)))
      )
  )

;; Apply beautify on current selection
(defn beautify-selection [obj-id beautify-path opts]
  (editor/replace-selection obj-id (beautify-execution obj-id beautify-path (editor/selection obj-id) opts))
 )

;; Apply beautify en current save
(defn beautify-file [obj-id beautify-path opts]
  (let [position (editor/->cursor obj-id)]
      (editor/set-val obj-id (beautify-execution obj-id beautify-path (editor/->val obj-id) opts))
      (editor/move-cursor obj-id position)
  )
 )

;; Declare on save behaviors to beautify file
(object/behavior* ::on-save
                  :triggers #{:save}
                  :type :user
                  :desc "JsBeautify: Beautify on save"
                  :reaction (fn [this]
                              (when-let [ed (pool/last-active)]
                               (beautify-file ed beautify-path (::jsbeautify-options @ed))))                              )

;; Declare JsBeautify user options
(object/behavior* ::jsbeautify-options
                  :triggers #{:object.instant}
                  :type :user
                  :desc "JSBeautify: Set JSBeautify options"
                  :params [{:label "options"
                            :example "{:indent_size 2}"
                            :type :clj}]
                  :reaction (fn [this opts]
                              (object/merge! this {::jsbeautify-options opts})))


;; Declare command to beautify current selection
(cmd/command {:command :jsbeautify.beautify-selection
              :desc "JsBeautify: Beautify current selection"
              :exec (fn [this]
                      (when-let [ed (pool/last-active)]
                        (beautify-selection ed beautify-path (::jsbeautify-options @ed))))})

;; Declare command to beautify js file
(cmd/command {:command :jsbeautify.beautify-file
              :desc "JsBeautify: Beautify current file"
              :exec (fn [this]
                      (when-let [ed (pool/last-active)]
                        (beautify-file ed beautify-path (::jsbeautify-options @ed))
                      ))})


