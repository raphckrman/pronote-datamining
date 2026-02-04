IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_EnvoiEMail = void 0;
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const AccessApp_1 = require('AccessApp');
    require('ObjetFenetre_DepotDocument.css');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const ObjetTraduction_2 = require('ObjetTraduction');
    const Divers_css_1 = require('Divers.css');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetDroitsPN_1 = require('ObjetDroitsPN');
    const MoteurDestinatairesPN_1 = require('MoteurDestinatairesPN');
    const MethodesObjet_1 = require('MethodesObjet');
    const MoteurMailTo_1 = require('MoteurMailTo');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const Enumere_Espace_1 = require('Enumere_Espace');
    class ObjetFenetre_EnvoiEMail extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.applicationSco = (0, AccessApp_1.getApp)();
        this.etatUtilisateurSco = this.applicationSco.getEtatUtilisateur();
        this.objetParametres = this.applicationSco.getObjetParametres();
        this.destinataires = new Map();
        this.setOptionsFenetre({
          avecTailleSelonContenu: true,
          largeur: 400,
          listeBoutons: [
            'Annuler',
            TradObjetFenetre_EnvoiEMail.validerEtRediger,
          ],
          titre: TradObjetFenetre_EnvoiEMail.titre,
        });
        this.moteurDestinatairesPN =
          new MoteurDestinatairesPN_1.MoteurDestinatairesPN();
        this.genreRessources = ObjetFenetre_EnvoiEMail.getGenreRessources();
        this.initDestinataires();
      }
      surSelectionSelecteur(aGenreRessource) {
        this.moteurDestinatairesPN.ouvrirModaleSelectionPublic({
          genreRessource: aGenreRessource,
          listePublicDonnee: this.destinataires.get(aGenreRessource),
          avecCoche: true,
          avecEmail: true,
          avecUniquementEmail: true,
          clbck: (aParam) => {
            this.destinataires.set(aGenreRessource, aParam.listePublicDonnee);
          },
        });
      }
      initDestinataires() {
        this.genreRessources.forEach((aGenre) => {
          this.destinataires.set(
            aGenre,
            new ObjetListeElements_1.ObjetListeElements(),
          );
        });
      }
      composeContenu() {
        if (!this.genreRessources) {
          return '';
        }
        return IE.jsx.str(
          'div',
          {
            class: [
              Divers_css_1.StylesDivers.flexContain,
              Divers_css_1.StylesDivers.cols,
              Divers_css_1.StylesDivers.flexGap,
            ],
          },
          this.genreRessources.map((aGenre) => this.composeSelecteur(aGenre)),
        );
      }
      jsxModelBtnSelecteur(aGenre) {
        return {
          event: () => {
            this.surSelectionSelecteur(aGenre);
          },
          getLibelle: () => this.getLibelleSelecteur(aGenre),
          getIcone: () => {
            return '';
          },
          getDisabled: () => {
            return !ObjetFenetre_EnvoiEMail.avecDroitCommunicationGenreRessource(
              aGenre,
            );
          },
        };
      }
      composeSelecteur(aGenre) {
        return IE.jsx.str('ie-btnselecteur', {
          'ie-model': this.jsxModelBtnSelecteur.bind(this, aGenre),
          'aria-haspopup': 'dialog',
          'aria-label': this.getLibelleRessource(aGenre),
        });
      }
      getLibelleSelecteur(aGenre) {
        const lDestinataires = this.destinataires.get(aGenre);
        if (!lDestinataires) {
          return '';
        }
        const lCompteur = lDestinataires.count();
        return `${this.getLibelleRessource(aGenre)} (${lCompteur})`;
      }
      getLibelleRessource(aGenre) {
        switch (aGenre) {
          case Enumere_Ressource_1.EGenreRessource.Eleve:
            return 'Élèves';
          case Enumere_Ressource_1.EGenreRessource.Responsable:
            return 'Responsables';
          case Enumere_Ressource_1.EGenreRessource.Personnel:
            return 'Personnels';
          case Enumere_Ressource_1.EGenreRessource.Enseignant:
            return 'Professeurs';
          default:
            return '';
        }
      }
      static avecDroitCommunicationGenreRessource(aGenreRessource) {
        const lApp = (0, AccessApp_1.getApp)();
        if (
          !lApp.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.avecDiscussion,
          )
        ) {
          return false;
        }
        return (
          ObjetFenetre_EnvoiEMail.estGenreRessourceAutorisePourGenreEspace(
            aGenreRessource,
          ) &&
          ObjetFenetre_EnvoiEMail.estGenreEspaceAutorisePourGenreRessource(
            aGenreRessource,
          )
        );
      }
      static avecAuMoinsUnTypeDeDestinatairesPossible() {
        return ObjetFenetre_EnvoiEMail.getGenreRessources().length > 0;
      }
      static estGenreEspaceAutorisePourGenreRessource(
        aGenreRessource,
        aGenreEspace = GEtatUtilisateur.GenreEspace,
      ) {
        const lApp = (0, AccessApp_1.getApp)();
        const lEtatUtil = lApp.getEtatUtilisateur();
        switch (aGenreRessource) {
          case Enumere_Ressource_1.EGenreRessource.Classe:
            return (
              [
                Enumere_Espace_1.EGenreEspace.Professeur,
                Enumere_Espace_1.EGenreEspace.PrimProfesseur,
                Enumere_Espace_1.EGenreEspace.Etablissement,
                Enumere_Espace_1.EGenreEspace.Administrateur,
                Enumere_Espace_1.EGenreEspace.PrimDirection,
              ].includes(aGenreEspace) &&
              lEtatUtil
                .getListeClasses({
                  avecClasse: true,
                  uniquementClasseEnseignee: true,
                })
                .count() > 0
            );
          case Enumere_Ressource_1.EGenreRessource.Eleve:
            return [
              Enumere_Espace_1.EGenreEspace.Professeur,
              Enumere_Espace_1.EGenreEspace.PrimProfesseur,
              Enumere_Espace_1.EGenreEspace.Etablissement,
              Enumere_Espace_1.EGenreEspace.Administrateur,
              Enumere_Espace_1.EGenreEspace.PrimDirection,
            ].includes(aGenreEspace);
          case Enumere_Ressource_1.EGenreRessource.Enseignant:
            return [
              Enumere_Espace_1.EGenreEspace.Professeur,
              Enumere_Espace_1.EGenreEspace.PrimProfesseur,
              Enumere_Espace_1.EGenreEspace.Etablissement,
              Enumere_Espace_1.EGenreEspace.Administrateur,
              Enumere_Espace_1.EGenreEspace.PrimDirection,
              Enumere_Espace_1.EGenreEspace.PrimParent,
              Enumere_Espace_1.EGenreEspace.PrimEleve,
              Enumere_Espace_1.EGenreEspace.Parent,
              Enumere_Espace_1.EGenreEspace.Eleve,
              Enumere_Espace_1.EGenreEspace.Accompagnant,
              Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
              Enumere_Espace_1.EGenreEspace.Tuteur,
            ].includes(aGenreEspace);
          case Enumere_Ressource_1.EGenreRessource.Personnel:
            return [
              Enumere_Espace_1.EGenreEspace.Professeur,
              Enumere_Espace_1.EGenreEspace.Etablissement,
              Enumere_Espace_1.EGenreEspace.Administrateur,
              Enumere_Espace_1.EGenreEspace.Parent,
              Enumere_Espace_1.EGenreEspace.Eleve,
            ].includes(aGenreEspace);
          case Enumere_Ressource_1.EGenreRessource.Responsable:
            return [
              Enumere_Espace_1.EGenreEspace.Professeur,
              Enumere_Espace_1.EGenreEspace.PrimProfesseur,
              Enumere_Espace_1.EGenreEspace.Etablissement,
              Enumere_Espace_1.EGenreEspace.Administrateur,
              Enumere_Espace_1.EGenreEspace.PrimDirection,
            ].includes(aGenreEspace);
          default:
            return false;
        }
      }
      static estGenreRessourceAutorisePourGenreEspace(
        aGenreRessource,
        aGenreEspace = GEtatUtilisateur.GenreEspace,
      ) {
        switch (aGenreEspace) {
          case Enumere_Espace_1.EGenreEspace.PrimProfesseur:
            return [
              Enumere_Ressource_1.EGenreRessource.Eleve,
              Enumere_Ressource_1.EGenreRessource.Responsable,
              Enumere_Ressource_1.EGenreRessource.Enseignant,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.EGenreEspace.Professeur:
            return [
              Enumere_Ressource_1.EGenreRessource.Eleve,
              Enumere_Ressource_1.EGenreRessource.Responsable,
              Enumere_Ressource_1.EGenreRessource.Enseignant,
              Enumere_Ressource_1.EGenreRessource.Personnel,
              Enumere_Ressource_1.EGenreRessource.MaitreDeStage,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.EGenreEspace.Etablissement:
            return [
              Enumere_Ressource_1.EGenreRessource.Eleve,
              Enumere_Ressource_1.EGenreRessource.Responsable,
              Enumere_Ressource_1.EGenreRessource.Enseignant,
              Enumere_Ressource_1.EGenreRessource.Personnel,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.EGenreEspace.Administrateur:
            return [
              Enumere_Ressource_1.EGenreRessource.Eleve,
              Enumere_Ressource_1.EGenreRessource.Responsable,
              Enumere_Ressource_1.EGenreRessource.Enseignant,
              Enumere_Ressource_1.EGenreRessource.Personnel,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.EGenreEspace.PrimDirection:
            return [
              Enumere_Ressource_1.EGenreRessource.Eleve,
              Enumere_Ressource_1.EGenreRessource.Responsable,
              Enumere_Ressource_1.EGenreRessource.Enseignant,
              Enumere_Ressource_1.EGenreRessource.Personnel,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.EGenreEspace.Parent:
            return [
              Enumere_Ressource_1.EGenreRessource.Enseignant,
              Enumere_Ressource_1.EGenreRessource.Personnel,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.EGenreEspace.Accompagnant:
            return [
              Enumere_Ressource_1.EGenreRessource.Responsable,
              Enumere_Ressource_1.EGenreRessource.Enseignant,
              Enumere_Ressource_1.EGenreRessource.Personnel,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.EGenreEspace.PrimParent:
            return [Enumere_Ressource_1.EGenreRessource.Enseignant].includes(
              aGenreRessource,
            );
          case Enumere_Espace_1.EGenreEspace.PrimAccompagnant:
            return [Enumere_Ressource_1.EGenreRessource.Enseignant].includes(
              aGenreRessource,
            );
          case Enumere_Espace_1.EGenreEspace.Tuteur:
            return [
              Enumere_Ressource_1.EGenreRessource.Responsable,
              Enumere_Ressource_1.EGenreRessource.Enseignant,
              Enumere_Ressource_1.EGenreRessource.Personnel,
            ].includes(aGenreRessource);
          default:
            return false;
        }
      }
      surValidation(ANumeroBouton) {
        if (ANumeroBouton === 1) {
          const lMoteurMailTo = new MoteurMailTo_1.MoteurMailTo();
          let lAvecEmail = false;
          this.destinataires.forEach((aListe) => {
            aListe.parcourir((aElement) => {
              if (
                'email' in aElement &&
                MethodesObjet_1.MethodesObjet.isString(aElement.email)
              ) {
                lAvecEmail = true;
                lMoteurMailTo.ajouterAdresseEmail(aElement.email);
              } else {
              }
            });
          });
          if (!lAvecEmail) {
            GApplication.getMessage().afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              message: TradObjetFenetre_EnvoiEMail.messageErreurDestinataires,
            });
            return;
          }
          const lLink = document.createElement('a');
          lLink.setAttribute('href', lMoteurMailTo.toString());
          lLink.click();
        }
        super.surValidation(ANumeroBouton);
      }
      static getGenreRessources() {
        return [
          Enumere_Ressource_1.EGenreRessource.Eleve,
          Enumere_Ressource_1.EGenreRessource.Responsable,
          Enumere_Ressource_1.EGenreRessource.Enseignant,
          Enumere_Ressource_1.EGenreRessource.Personnel,
        ].filter((aGenre) =>
          ObjetFenetre_EnvoiEMail.avecDroitCommunicationGenreRessource(aGenre),
        );
      }
    }
    exports.ObjetFenetre_EnvoiEMail = ObjetFenetre_EnvoiEMail;
    const TradObjetFenetre_EnvoiEMail =
      ObjetTraduction_2.TraductionsModule.getModule('ObjetFenetre_EnvoiEMail', {
        titre: '',
        messageErreurDestinataires: '',
        validerEtRediger: '',
      });
  },
  fn: 'objetfenetre_envoiemail.js',
});