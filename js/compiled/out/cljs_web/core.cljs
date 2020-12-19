(ns cljs-web.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs-http.client :as http]
            [reagent.dom :as rd]
            [cljs.core.async :refer [<!]]))


(def api-url "https://api.github.com/users/Omar-ALkhateeb/repos")
(def request-opts {:with-credentials? false
                   :headers {"Content-Type" "application/json"}})


(def api-response (atom nil))
(def exp (atom ["js", "python", "golang", "nodejs", "vuejs", "clojurescript", "docker", "tensorflow"]))

(defn get-repos []
  (go
    (let [response (<! (http/get api-url request-opts))]
      (println (:body response))
      (reset! api-response response))))

(get-repos)

(enable-console-print!)

; (println "This text is printed from src/cljs-web/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

; (defonce app-state (atom {:text "Hello From Clojurescript"}))


(defn hello-world []
  [:div
   [:h2 "Omar-ALkhateeb" [:a {:href "mailto:omar.alkhateeb9919@gmail.com"} " <omar.alkhateeb9919@gmail.com>"]]
   [:p
    [:a {:href "https://github.com/Omar-ALkhateeb"} "Github / "]
    [:a {:href "https://twitter.com/Omr_khateeb"} "Twitter / "]
    [:a {:href "https://www.instagram.com/omr.khateeb/"} "Insta"]]
   [:h3 "about:"]
   [:p "22 years old hipster fullstack dev looking for a nieche language to learn"]
   [:h3 "my CV:"
    [:br]
    [:br]
    [:a {:href "/omar-nabeel.pdf"} "download"]
    [:small "  - might be a bit outdated.."]]

   [:h3 "my repos and contributions:"]
   [:ul
    (for [repo (:body @api-response)]

      [:li [:a {:href (:html_url repo)} (:name repo)]])]
   [:h3 "experienced in:"]
   [:ul
    (for [ex @exp]

      [:li ex])]
  ;  [:h3 "Edit this and watch it change!"]
   ])

(rd/render [hello-world]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
