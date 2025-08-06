IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplicationCommunSco = void 0;
    require('NamespaceIE.js');
    require('DeclarationJQuery');
    require('Theme_Modele.css');
    require('Couleurs.css');
    require('Divers.css');
    require('Styles.css');
    require('Texte.css');
    require('DeclarationCurseurPN.js');
    require('Connexion.css');
    require('communEspace.css');
    require('pages_connexion.css');
    require('ObjetNavigateur.js');
    const ObjetApplicationProduit_1 = require('ObjetApplicationProduit');
    const ObjetRequetePageCommune_1 = require('ObjetRequetePageCommune');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const CommunicationProduit_1 = require('CommunicationProduit');
    const Invocateur_1 = require('Invocateur');
    const ThemesCouleurs_1 = require('ThemesCouleurs');
    const _ObjetCouleur_1 = require('_ObjetCouleur');
    const UtilitairePagePubliqueEtablissement_1 = require('UtilitairePagePubliqueEtablissement');
    const UtilitairePageCommune_1 = require('UtilitairePageCommune');
    const ObjetEtatUtilisateur_1 = require('ObjetEtatUtilisateur');
    const ObjetParametresCommunSco_1 = require('ObjetParametresCommunSco');
    const ObjetRequetePagePubliqueEtablissement_1 = require('ObjetRequetePagePubliqueEtablissement');
    class ObjetApplicationCommunSco extends ObjetApplicationProduit_1.ObjetApplicationProduit {
      async lancer(aParametres) {
        this.setDemo(!!aParametres.d);
        const lNumeroSession = aParametres.h;
        this.numeroEspace =
          aParametres.a || Enumere_Espace_1.EGenreEspace.Commun;
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.initChiffrement,
          aParametres,
        );
        this.setCommunication(
          new CommunicationProduit_1.CommunicationProduit(
            this.numeroEspace,
            lNumeroSession,
          ),
        );
        this.actionSurRecupererDonnees(
          await new ObjetRequetePageCommune_1.ObjetRequetePageCommune(
            this,
          ).lancerRequete(),
        );
      }
      actionSurRecupererDonnees(aParam) {
        const lParametres = (global.GParametres =
          new ObjetParametresCommunSco_1.ObjetParametresCommunSco(aParam));
        global.GEtatUtilisateur =
          new ObjetEtatUtilisateur_1.ObjetEtatUtilisateur(this.numeroEspace);
        ThemesCouleurs_1.ThemesCouleurs.setTheme(aParam.Theme);
        global.GCouleur = new _ObjetCouleur_1._ObjetCouleur();
        let lParam = Object.assign({ id: this.getIdConteneur() }, aParam);
        if (lParametres.avecPagePubliqueEtab === true) {
          this.utilitairePagePubliqueEtablissement =
            new UtilitairePagePubliqueEtablissement_1.UtilitairePagePubliqueEtablissement(
              {
                estSurMobile: false,
                estPrimaire: this.estPrimaire,
                parametresCommun: lParametres,
              },
            );
          this.utilitairePagePubliqueEtablissement.initGlobales();
          this.donneesRequete =
            this.utilitairePagePubliqueEtablissement.initDonneesRequete();
          new ObjetRequetePagePubliqueEtablissement_1.ObjetRequetePagePubliqueEtablissement(
            this,
          )
            .lancerRequete(this.donneesRequete)
            .then((aParam) => {
              $.extend(lParam, aParam);
              this.utilitairePagePubliqueEtablissement.construire(
                lParam,
                this.donneesRequete,
              );
            });
        } else {
          $.extend(lParam, {
            initBandeau: function (aBandeau) {
              aBandeau.setParametres({
                logoDepartementImage: lParametres.logoDepartementImage,
                logoDepartementLien: lParametres.logoDepartementLien,
              });
            },
          });
          new UtilitairePageCommune_1.UtilitairePageCommune().construire(
            lParam,
          );
        }
      }
    }
    exports.ObjetApplicationCommunSco = ObjetApplicationCommunSco;
  },
  fn: 'objetapplicationcommunsco.js',
});