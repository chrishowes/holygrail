(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:58755" {:on-jsload (fn* [] (+))})