# Angular_M1

Ce projet a pour but de présenter une application web avec deux interfaces.

* Une interface étudiante
* Une interface professeur

Cela va permettre aux étudiants de voir les devoirs qu'ils ont à faire et à rendre mais aussi aux professeurs de créer leurs devoirs à rendre.

## Contributeur

* SAVE Pierre
* TABBAA Siham

## Répartition du travail

* SAVE Pierre : 10%
  * A dit bonjour
* TABBAA Siham : 90%
  * API : 100%
  * Back-End : 100%
  * Front-end : 100%

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
