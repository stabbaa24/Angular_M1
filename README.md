# Angular_M1

Ce projet a pour but de présenter une application web avec deux interfaces.

* Une interface étudiante
* Une interface professeur

Cela va permettre aux étudiants de voir les devoirs qu'ils ont à faire et à rendre mais aussi aux professeurs de créer leurs devoirs à rendre.

## Lien d'accès à l'application

https://studysync-b7j1.onrender.com

## Lien d'accès à la vidéo

https://www.youtube.com/watch?v=wWVtmTFiDr4

## Contributeur

* SAVE Pierre
* TABBAA Siham

## Répartition du travail

* SAVE Pierre : 40%
  * Front-End
* TABBAA Siham : 60%
  * API
  * Back-End

## Interface

Notre application se compose de plusieurs page et fonctionnalité (avec interface différente):

* Une page avec la liste des devoirs à faire
  * Admin :
    * Editer
    * Supprimer
    * Voir le nb étudiant ayant rendu
    * Filtrer (nom du devoirs, noté)
  * User
    * Filtrer (nom du devoirs, rendu, matière, noté)
* Une page avec la liste des étudiants
  * Filtre (nom étudiant, promotion, groupe)
* Une page  avec la liste des professeurs
  * Filtrer (nom professeur, matière)
* Une page calendrier avec les dates et les rendues
* Une page où un professeur peut noter des devoirs (pas fonctionnel)
  * Erreur 404

## API - BACK

En ce qui concerne l'api, la connexion se fait en jwt pour bien sécuriser.

Nous avons plusieurs collections dans notre BDD :

* Assignments
* Renders
* Students
* Subjects
* Teachers
* Users

## Connexion pour tester

Pour que vous puissez tester, vous pouvez :

* Soit vous inscrire
* Soit vous connecter

Pour la connexion voici quelques code :

* Admin

  * username : Snape.Severus
  * password : mdp
  * username : Mcgo.Minerva
  * password : mdp
* User

  * username : Granger.Hermione
  * password : mdp
  * username : Potter.Harry
  * password : mdp

## Les défauts

Evidemment, il y a plusieurs défaut dans l'application.

### Problème lors de l'hébergement

Déjà il faut savoir que toute la logique d'hébergement d'image a été cassé lors ce que j'ai déployé le projet sur Renders donc il a fallu modifier de méthode.

Hélas à présent, on ne peut plus uploader son image. Donc lors de l'inscription et l'ajout d'une matière on ne peut plus uploader automatiquement.

### Problème de pagination

La pagination marchait très bien mais en ajoutant les filtres elle n'a plus fonctionner.

Je n'ai pas eu le temps de la réparer ce qui fait que sur une page on peut n'avoir 0 rendu et dans une autre plusieurs.

J'aurai vraiment voulu pouvoir réparer à temps mais ça n'a pas été le cas.

## Pour le futur

Si j'avais eu le temps, j'aurai voulu implémenter :

* Notations des devoirs rendu
* Page de statistiques / KPI

# Sitographie

Pour effectuer le travail, beaucoup de site web ont été utilisé. Dans le code vous les retrouverez en commentaire et voici un récapitulatif (en espérant n'avoir rien oublié) :


* [https://mongoosejs.com/docs/schematypes.html](https://mongoosejs.com/docs/schematypes.html "https://mongoosejs.com/docs/schematypes.html")
* [https://mongoosejs.com/docs/schematypes.html](https://mongoosejs.com/docs/schematypes.html "https://mongoosejs.com/docs/schematypes.html")
* [https://stackoverflow.com/questions/48114129/populate-with-mongoose-pagination](https://stackoverflow.com/questions/48114129/populate-with-mongoose-pagination "https://stackoverflow.com/questions/48114129/populate-with-mongoose-pagination")
* [https://mongoosejs.com/docs/populate.html](https://mongoosejs.com/docs/populate.html "https://mongoosejs.com/docs/populate.html")
* [https://mongoosejs.com/docs/populate.html](https://mongoosejs.com/docs/populate.html "https://mongoosejs.com/docs/populate.html")
* [https://stackoverflow.com/questions/48114129/populate-with-mongoose-pagination](https://stackoverflow.com/questions/48114129/populate-with-mongoose-pagination "https://stackoverflow.com/questions/48114129/populate-with-mongoose-pagination")
* [https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/](https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/ "https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/")
* [https://geekflare.com/lookup-in-mongodb/](https://geekflare.com/lookup-in-mongodb/ "https://geekflare.com/lookup-in-mongodb/")
* [https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/](https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/ "https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/")
* [https://mattlewis-github.com/angular-calendar/#/kitchen-sink](https://mattlewis-github.com/angular-calendar/#/kitchen-sink "https://mattlewis-github.com/angular-calendar/#/kitchen-sink")
* [https://www.npmjs.com/package/angular-calendar](https://www.npmjs.com/package/angular-calendar "https://www.npmjs.com/package/angular-calendar")
* [https://www.danywalls.com/how-to-use-record-type-in-typescript](https://www.danywalls.com/how-to-use-record-type-in-typescript "https://www.danywalls.com/how-to-use-record-type-in-typescript")
* [https://angular.io/guide/http-interceptor-use-cases](https://angular.io/guide/http-interceptor-use-cases "https://angular.io/guide/http-interceptor-use-cases")* [https://docs.angular.lat/api/common/http/HttpInterceptor](https://docs.angular.lat/api/common/http/HttpInterceptor "https://docs.angular.lat/api/common/http/HttpInterceptor")
* [https://angular.io/guide/http-interceptor-use-cases](https://angular.io/guide/http-interceptor-use-cases "https://angular.io/guide/http-interceptor-use-cases")
* [https://rxjs.dev/api/index/function/switchMap](https://rxjs.dev/api/index/function/switchMap "https://rxjs.dev/api/index/function/switchMap")
* [https://rxjs.dev/api/index/function/tap](https://rxjs.dev/api/index/function/tap "https://rxjs.dev/api/index/function/tap")
* [https://developer.mozilla.org/en-US/docs/Web/API/FormData/append](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append "https://developer.mozilla.org/en-US/docs/Web/API/FormData/append")
* [https://v10.material.angular.io/components/card/examples](https://v10.material.angular.io/components/card/examples "https://v10.material.angular.io/components/card/examples")
