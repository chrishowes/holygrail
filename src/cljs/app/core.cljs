(ns app.core
  (:require [reagent.core :as reagent])) 

(def app-state (reagent/atom {}))

(defn base-component []
  [:h1 "This is only a testtt"])

(reagent/render-component [base-component]
                          (js/document.getElementById "app"))
