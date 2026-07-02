IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_PanierRessourceKiosque = void 0;
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const Enumere_EvenementListe_1 = require('@cp/script/Enumere/Enumere_EvenementListe');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetListe_1 = require('@cp/Produit/Script/ObjetListe');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const TypeEnsembleNombre_1 = require('@cp/script/Type/TypeEnsembleNombre');
    const DonneesListe_PanierRessourceKiosque_1 = require('@scolys/espace/script/donneesliste/DonneesListe_PanierRessourceKiosque');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const ObjetFenetre_LienKiosque_1 = require('@scolys/espace/script/professeur/Fenetre/ObjetFenetre_LienKiosque');
    const ObjetRequetePanierRessourceKiosque_1 = require('@scolys/espace/script/requete/ObjetRequetePanierRessourceKiosque');
    const TypeGenreApiKiosque_1 = require('@scolys/espace/script/enumere/TypeGenreApiKiosque');
    const ObjetRequeteSaisiePanierRessourceKiosque_1 = require('@scolys/espace/script/requete/ObjetRequeteSaisiePanierRessourceKiosque');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetRequeteListeManuelsRessourcesGranulaires_1 = require('@scolys/espace/script/requete/ObjetRequeteListeManuelsRessourcesGranulaires');
    class ObjetFenetre_PanierRessourceKiosque extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.options = { avecMultiSelection: false };
        this.setOptionsFenetre({
          titre: 'Liens extraits de manuels numériques',
          largeur: 532,
          hauteur: 550,
          listeBoutons: [
            'Fermer',
            'Ajouter le lien sélectionné',
          ],
        });
      }
      setOptions(aOptions) {
        $.extend(this.options, aOptions);
        return this;
      }
      construireInstances() {
        this.identListe = this.add(
          ObjetListe_1.ObjetListe,
          this.evenementSurListe,
          this.initialiserListe,
        );
        this.getInstance(this.identListe).setOptionsListe({
          ariaLabel: 'Liens extraits de manuels numériques',
        });
        Invocateur_1.Invocateur.abonner(
          'notification_Kiosque',
          this._notificationKiosque,
          this,
        );
      }
      detruireInstances() {
        Invocateur_1.Invocateur.desabonner('notification_Kiosque', this);
      }
      _notificationKiosque() {
        this.actualiserDonneesKiosque();
      }
      afficherFenetre(aGenresApiKiosque) {
        const lEtatUtil = (0, AccessApp_1.getApp)().getEtatUtilisateur();
        this.genresApiKiosque =
          aGenresApiKiosque || new TypeEnsembleNombre_1.TypeEnsembleNombre();
        this.pouriDevoir =
          this.genresApiKiosque.contains(
            TypeGenreApiKiosque_1.TypeGenreApiKiosque.Api_EnvoiNote,
          ) && lEtatUtil.activerKiosqueRenduTAF;
        this.pourExerciceNum =
          this.genresApiKiosque.contains(
            TypeGenreApiKiosque_1.TypeGenreApiKiosque.Api_RenduPJTAF,
          ) && lEtatUtil.activerKiosqueRenduTAF;
        const lColonnesCachees = [
          DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.coche,
          DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.api,
        ];
        if (this.pouriDevoir || this.pourExerciceNum) {
          lColonnesCachees.push(
            DonneesListe_PanierRessourceKiosque_1
              .DonneesListe_PanierRessourceKiosque.colonnes.renduTAF,
          );
          lColonnesCachees.push(
            DonneesListe_PanierRessourceKiosque_1
              .DonneesListe_PanierRessourceKiosque.colonnes.envoiNote,
          );
        } else {
          if (!lEtatUtil.activerKiosqueRenduTAF) {
            lColonnesCachees.push(
              DonneesListe_PanierRessourceKiosque_1
                .DonneesListe_PanierRessourceKiosque.colonnes.renduTAF,
            );
          }
          if (!lEtatUtil.activerKiosqueEnvoiNote) {
            lColonnesCachees.push(
              DonneesListe_PanierRessourceKiosque_1
                .DonneesListe_PanierRessourceKiosque.colonnes.envoiNote,
            );
          }
        }
        this.getInstance(this.identListe).setOptionsListe({
          colonnesCachees: lColonnesCachees,
        });
        this.actualiserDonneesKiosque();
      }
      actualiserDonneesKiosque() {
        new ObjetRequetePanierRessourceKiosque_1.ObjetRequetePanierRessourceKiosque(
          this,
          this.apresRequeteDonnees,
        ).lancerRequete({ genresApi: this.genresApiKiosque });
      }
      apresRequeteDonnees(aJSON) {
        this.listeRessourceKiosque = aJSON.listeRessourceKiosque;
        this.listeRessourceKiosque.parcourir(
          (aElement, aIndice, alisteRessourceKiosque) => {
            aElement.estSelectionne = false;
            if (!!aElement.pere) {
              const lPere = alisteRessourceKiosque.getElementParGenre(
                aElement.pere.getGenre(),
              );
              aElement.pere = lPere;
            } else {
              aElement.estUnDeploiement = true;
              aElement.estDeploye = true;
            }
          },
        );
        if (!!this.fenetreManuels && this._ouvertureInvisible) {
          this.fenetreManuels.fermer();
        }
        this._ouvertureInvisible =
          this.listeRessourceKiosque.getNbrElementsExistes() === 0;
        this.setDonnees(this.listeRessourceKiosque, aJSON.message);
      }
      setDonnees(aListe, aMessage) {
        if (aMessage) {
          const lThis = this;
          GApplication.getMessage().afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
            message: aMessage,
            callback: function () {
              lThis.callback.appel(0);
            },
          });
        } else {
          this.liste = aListe;
          if (!this._actualisationDesDonnees) {
            this.actualiser();
            if (!this._ouvertureInvisible) {
              this.afficher();
            }
          } else {
            this._actualisationDesDonnees = undefined;
          }
          this.setBoutonActif(1, false);
          if (!this._ouvertureInvisible || this._listeSet) {
            this._actualiserListe();
          }
          if (this._ouvertureInvisible) {
            this.ouvrirFenetreSelectionManuels();
          }
        }
      }
      composeContenu() {
        const T = [];
        T.push('<table class="Table">');
        if (this.pouriDevoir) {
          T.push('<tr><td>');
          T.push('<div style="padding: 5px;">');
          T.push(
            'Seules les ressources disposant de l'icône iDevoir %s dans le contenu du manuel numérique peuvent être associées à un devoir dans PRONOTE.',
            '*',
          );
          T.push('</div>');
          T.push('</td></tr>');
        }
        if (this.pourExerciceNum) {
          T.push('<tr><td>');
          T.push('<div style="padding: 5px;">');
          T.push(
            'Seules les ressources disposant de l'icône des exercices numériques %s dans le contenu du manuel numérique peuvent être associées à un travail à faire dans PRONOTE.',
            '*',
          );
          T.push('</div>');
          T.push('</td></tr>');
        }
        T.push(
          '<tr style="width: 100%; height: 100%;"><td style="width: 100%; height: 100%;">',
          '<div id="' +
            this.getNomInstance(this.identListe) +
            '" style="width: 100%; height: 100%"></div>',
          '</td></tr>',
        );
        if (this.pouriDevoir || this.pourExerciceNum) {
          T.push('<tr><td>');
          T.push('<div style="padding: 5px;">');
          T.push(
            '* ',
            'Disponible uniquement avec Génération 5, la fonctionnalité a été proposée à l'ensemble des éditeurs partenaires.',
          );
          T.push('</div>');
          T.push('</td></tr>');
        }
        T.push('</table>');
        return T.join('');
      }
      initialiserListe(aInstance) {
        const lColonnes = [];
        const lEtatUtil = (0, AccessApp_1.getApp)().getEtatUtilisateur();
        lColonnes.push({
          id: DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.coche,
          taille: 18,
        });
        lColonnes.push({
          id: DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.titre,
          taille: '100%',
          titre: 'Titre',
          sansBordureDroite: true,
        });
        lColonnes.push({
          id: DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.lien,
          taille: 17,
          titre: null,
        });
        lColonnes.push({
          id: DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.commentaire,
          taille: 132,
          titre: {
            libelle: 'Commentaire personnel',
            title: 'Commentaire personnel pour identifier la ressource parmi la liste des liens',
          },
        });
        lColonnes.push({
          id: DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.dateAjout,
          taille: 80,
          titre: 'Date d'ajout',
        });
        lColonnes.push({
          id: DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.api,
          taille: 40,
          titre: 'Api',
        });
        lColonnes.push({
          id: DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.renduTAF,
          taille: 20,
          titre: {
            classeCssImage: 'Image_Kiosque_ListeCahierTexte',
            title: 'indique que le lien (ou au moins un des liens du manuel) peut être associé à un travail à faire en tant qu'exercice numérique dans la saisie du cahier de textes',
          },
        });
        lColonnes.push({
          id: DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.envoiNote,
          taille: 20,
          titre: {
            classeCssImage: 'Image_Kiosque_ListeDevoir',
            title: 'indique que le lien (ou au moins un des liens du manuel) peut être associé à un devoir en tant qu'iDevoir dans la saisie des notes',
          },
        });
        const lColonnesCachees = [
          DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.coche,
          DonneesListe_PanierRessourceKiosque_1
            .DonneesListe_PanierRessourceKiosque.colonnes.api,
        ];
        if (!lEtatUtil.activerKiosqueRenduTAF) {
          lColonnesCachees.push(
            DonneesListe_PanierRessourceKiosque_1
              .DonneesListe_PanierRessourceKiosque.colonnes.renduTAF,
          );
        }
        if (!lEtatUtil.activerKiosqueEnvoiNote) {
          lColonnesCachees.push(
            DonneesListe_PanierRessourceKiosque_1
              .DonneesListe_PanierRessourceKiosque.colonnes.envoiNote,
          );
        }
        aInstance.setOptionsListe({
          colonnes: lColonnes,
          colonnesCachees: lColonnesCachees,
          avecBoutonCreation: true,
          avecCreationEnLigneDesignClassique: true,
          titreCreation: 'Créer un lien',
        });
      }
      surValidation(aNumeroBouton) {
        const lResult = {
          genreBouton: aNumeroBouton,
          liste: this.listeRessourceKiosque,
          selection: this.listeSelectionnes,
        };
        this.callback.appel(lResult);
        this.fermer();
      }
      evenementSurListe(aParametres, aGenreEvenementListe) {
        switch (aGenreEvenementListe) {
          case Enumere_EvenementListe_1.EGenreEvenementListe.Selection:
            this.listeSelectionnes = this.getInstance(
              this.identListe,
            ).getListeElementsSelection();
            this._mettreAJourBoutonAjouter();
            break;
          case Enumere_EvenementListe_1.EGenreEvenementListe.ApresEdition:
            if (
              aParametres.idColonne ===
              DonneesListe_PanierRessourceKiosque_1
                .DonneesListe_PanierRessourceKiosque.colonnes.coche
            ) {
              this.listeSelectionnes = this.liste.getListeElements(
                (aElement) => {
                  return aElement.estSelectionne;
                },
              );
              this._mettreAJourBoutonAjouter();
            } else {
              const lListeATraiter =
                new ObjetListeElements_1.ObjetListeElements();
              if (
                !!aParametres.article &&
                !!aParametres.article.ressource &&
                aParametres.article.ressource.getEtat() ===
                  Enumere_Etat_1.EGenreEtat.Modification
              ) {
                lListeATraiter.addElement(aParametres.article.ressource);
                lListeATraiter.setSerialisateurJSON({
                  methodeSerialisation: _serialiserRessource.bind(this),
                });
                new ObjetRequeteSaisiePanierRessourceKiosque_1.ObjetRequeteSaisiePanierRessourceKiosque(
                  this,
                  this.apresRequeteSaisie,
                ).lancerRequete({ ressources: lListeATraiter });
              }
            }
            break;
          case Enumere_EvenementListe_1.EGenreEvenementListe.Creation:
            this.ouvrirFenetreSelectionManuels();
            return Enumere_EvenementListe_1.EGenreEvenementListe.Creation;
          case Enumere_EvenementListe_1.EGenreEvenementListe.Suppression: {
            const lListeASupprimer =
              new ObjetListeElements_1.ObjetListeElements();
            aParametres.listeSuppressions.parcourir(function (aElement) {
              if (
                !!aElement.ressource &&
                aElement.ressource.getGenre() ===
                  Enumere_Ressource_1.TypeHttpRessource
                    .HttpRessource_PanierRessourceKiosque
              ) {
                aElement.ressource.setEtat(
                  Enumere_Etat_1.EGenreEtat.Suppression,
                );
                lListeASupprimer.addElement(aElement.ressource);
              }
            });
            const lListe = this.listeRessourceKiosque.getListeElements(
              (aElement) => {
                return aElement.ressource.existe();
              },
            );
            IE.log.addLog('nombre ressources restantes : ' + lListe.count());
            this._ouvertureInvisible = false;
            new ObjetRequeteSaisiePanierRessourceKiosque_1.ObjetRequeteSaisiePanierRessourceKiosque(
              this,
              this.apresRequeteSaisie,
            ).lancerRequete({ ressources: lListeASupprimer });
            return Enumere_EvenementListe_1.EGenreEvenementListe.Suppression;
          }
        }
      }
      ouvrirFenetreSelectionManuels() {
        const lThis = this;
        new ObjetRequeteListeManuelsRessourcesGranulaires_1.ObjetRequeteListeManuelsRessourcesGranulaires(
          this,
          (aJSON) => {
            this.fenetreManuels =
              ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
                ObjetFenetre_LienKiosque_1.ObjetFenetre_LienKiosque,
                {
                  pere: lThis,
                  evenement: lThis._eventFenetreLienKiosque.bind(lThis),
                  initialiser: _initFenetreLienKiosque,
                },
              );
            this.fenetreManuels.setDonnees(
              aJSON.listeRessources,
              this.genresApiKiosque,
            );
          },
        ).lancerRequete({ genresApi: this.genresApiKiosque });
      }
      apresRequeteSaisie() {
        this._actualisationDesDonnees = true;
        this.actualiserDonneesKiosque();
      }
      _mettreAJourBoutonAjouter() {
        const lActif = this.options.avecMultiSelection
          ? this.listeSelectionnes.count() > 0
          : this.listeSelectionnes.count() === 1;
        if (this.options.avecMultiSelection) {
          let lLibelle = 'Ajouter le lien sélectionné';
          if (this.listeSelectionnes.count() > 1) {
            lLibelle = 'Ajouter les %d liens sélectionnés'],
            );
          }
          this.setBoutonLibelle(1, lLibelle);
        }
        this.setBoutonActif(1, lActif);
      }
      _actualiserListe() {
        this._listeSet = true;
        this.getInstance(this.identListe).setDonnees(
          new DonneesListe_PanierRessourceKiosque_1.DonneesListe_PanierRessourceKiosque(
            {
              donnees: this.liste,
              avecMultiSelection: this.options.avecMultiSelection,
              callbackLien: this._eventFenetreLienKiosque.bind(this, 0),
            },
          ),
        );
      }
      _eventFenetreLienKiosque(aBouton, aGenre) {
        if (
          aGenre ===
          Enumere_Ressource_1.TypeHttpRessource
            .HttpRessource_RessourceNumeriqueKiosque
        ) {
        } else {
          if (this._ouvertureInvisible) {
            this.fermer();
          }
        }
      }
    }
    exports.ObjetFenetre_PanierRessourceKiosque =
      ObjetFenetre_PanierRessourceKiosque;
    function _serialiserRessource(aElement, aJSON) {
      aJSON.commentaire = aElement.commentaire;
    }
    function _initFenetreLienKiosque(aInstance) {
      aInstance.setOptionsFenetre({
        titre: 'Liens extraits de manuels numériques',
        largeur: 532,
        hauteur: 220,
        listeBoutons: ['Fermer'],
      });
    }
  },
  fn: 'objetfenetre_panierressourcekiosque.js',
});