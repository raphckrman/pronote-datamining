IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplicationCommunSco = void 0;
    require('@librairies/script/Divers/NamespaceIE');
    require('@librairies/Declaration/DeclarationJQuery');
    require('@cp/images/Themes/scss/Theme_Modele.css');
    require('@cp/Produit/Css/general/Divers.css');
    require('@scolys/produit/css/Connexion.css');
    require('@cp/Espace/Css/communEspace.css');
    require('@cp/Produit/Css/pages_connexion.css');
    require('@cp/Produit/Script/ObjetNavigateur');
    const ObjetApplicationProduit_1 = require('@cp/script/ObjetApplicationProduit');
    const ObjetRequetePageCommune_1 = require('@scolys/espace/script/requete/ObjetRequetePageCommune');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const CommunicationProduit_1 = require('@cp/script/Communication/CommunicationProduit');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const ThemesCouleurs_1 = require('@cp/script/Theme/ThemesCouleurs');
    const _ObjetCouleur_1 = require('@cp/script/_ObjetCouleur');
    const UtilitairePagePubliqueEtablissement_1 = require('@scolys/produit/script/utilitaire/UtilitairePagePubliqueEtablissement');
    const UtilitairePageCommune_1 = require('@scolys/espace/script/utilitaire/UtilitairePageCommune');
    const ObjetEtatUtilisateur_1 = require('@scolys/produit/script/ObjetEtatUtilisateur');
    const ObjetParametresCommunSco_1 = require('@scolys/produit/script/ObjetParametresCommunSco');
    const ObjetRequetePagePubliqueEtablissement_1 = require('@scolys/produit/script/requete/ObjetRequetePagePubliqueEtablissement');
    const CookieAnnonce_1 = require('@cp/Produit/Script/CookieAnnonce');
    class ObjetApplicationCommunSco extends ObjetApplicationProduit_1.ObjetApplicationProduit {
      async lancer(aParametres) {
        this.setDemo(!!aParametres.d);
        const lNumeroSession = aParametres.h;
        this.numeroEspace =
          aParametres.a || Enumere_Espace_1.TypeGenreEspace.Espace_Commun;
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
        CookieAnnonce_1.CookieAnnonce.afficher();
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