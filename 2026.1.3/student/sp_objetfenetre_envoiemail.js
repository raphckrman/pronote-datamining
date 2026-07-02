IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_EnvoiEMail = void 0;
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const ObjetTraduction_2 = require('@cp/script/ObjetTraduction');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const MoteurDestinatairesPN_1 = require('@scolys/produit/script/MoteurDestinatairesPN');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const MoteurMailTo_1 = require('@cp/script/MoteurMailTo');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const IEHtml_BtnSelecteur_1 = require('@cp/Produit/Script/IEHtml.BtnSelecteur');
    require('@scolys/produit/css/ObjetFenetre_SaisieDocumentCasier.css');
    class ObjetFenetre_EnvoiEMail extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
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
              Divers_css_1.SD.flexContain,
              Divers_css_1.SD.cols,
              Divers_css_1.SD.flexGap,
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
          getIconeSvg: () => {
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
        return IE.jsx.str(IEHtml_BtnSelecteur_1.BtnSelecteur, {
          ie_model: this.jsxModelBtnSelecteur.bind(this, aGenre),
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
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve:
            return 'Élèves';
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable:
            return 'Responsables';
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
            return 'Personnels';
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
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
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Classe:
            return (
              [
                Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
                Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur,
                Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement,
                Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur,
                Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection,
              ].includes(aGenreEspace) &&
              lEtatUtil
                .getListeClasses({
                  avecClasse: true,
                  uniquementClasseEnseignee: true,
                })
                .count() > 0
            );
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve:
            return [
              Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur,
              Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement,
              Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection,
            ].includes(aGenreEspace);
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
            return [
              Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur,
              Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement,
              Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimEleve,
              Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
              Enumere_Espace_1.TypeGenreEspace.Espace_Eleve,
              Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant,
              Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur,
            ].includes(aGenreEspace);
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
            return [
              Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
              Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement,
              Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur,
              Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
              Enumere_Espace_1.TypeGenreEspace.Espace_Eleve,
            ].includes(aGenreEspace);
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable:
            return [
              Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur,
              Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement,
              Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection,
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
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur:
            return [
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.TypeGenreEspace.Espace_Professeur:
            return [
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_MaitreDeStage,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement:
            return [
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur:
            return [
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection:
            return [
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.TypeGenreEspace.Espace_Parent:
            return [
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant:
            return [
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent:
            return [
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant:
            return [
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
            ].includes(aGenreRessource);
          case Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur:
            return [
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
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
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve,
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
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