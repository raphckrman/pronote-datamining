IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteSaisieEtiquetteMessage = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    const ObjetFenetre_SelectionCategories_1 = require('@cp/Produit/Script/Fenetre/ObjetFenetre_SelectionCategories');
    class ObjetRequeteSaisieEtiquetteMessage extends ObjetRequeteJSON_1.ObjetRequeteSaisie {
      lancerRequete(aParametres) {
        var _a;
        const lParams = Object.assign(Object.assign({}, aParametres), {
          internetActualite:
            (_a = aParametres.actualite) === null || _a === void 0
              ? void 0
              : _a.toJSONAll(),
        });
        [lParams.listeEtiquettesMoins, lParams.listeEtiquettesPlus].forEach(
          (aListe) => {
            aListe === null || aListe === void 0
              ? void 0
              : aListe.setSerialisateurJSON({ ignorerEtatsElements: true });
          },
        );
        return super.lancerRequete(lParams);
      }
    }
    exports.ObjetRequeteSaisieEtiquetteMessage =
      ObjetRequeteSaisieEtiquetteMessage;
    ObjetRequeteSaisieEtiquetteMessage.inscrire('SaisieEtiquetteMessage');
    (function (ObjetRequeteSaisieEtiquetteMessage) {
      ObjetRequeteSaisieEtiquetteMessage.getParametresRequeteSaisie = (
        aParams,
      ) => {
        switch (aParams.genreSaisie) {
          case ObjetFenetre_SelectionCategories_1
            .ObjetFenetre_SelectionCategories.GenreSaisie.Creation:
            return {
              commande: 'creation',
              libelle: aParams.categorie.getLibelle(),
              abr: aParams.categorie.abr,
              couleur: aParams.categorie.couleur,
            };
          case ObjetFenetre_SelectionCategories_1
            .ObjetFenetre_SelectionCategories.GenreSaisie.Modification:
            return {
              commande: 'modifier',
              libelle: aParams.categorie.getLibelle(),
              abr: aParams.categorie.abr,
              couleur: aParams.categorie.couleur,
              etiquette: aParams.categorie,
            };
          case ObjetFenetre_SelectionCategories_1
            .ObjetFenetre_SelectionCategories.GenreSaisie.Suppresion:
            return { commande: 'suppression', etiquette: aParams.categorie };
        }
      };
    })(
      ObjetRequeteSaisieEtiquetteMessage ||
        (exports.ObjetRequeteSaisieEtiquetteMessage =
          ObjetRequeteSaisieEtiquetteMessage =
            {}),
    );
  },
  fn: 'objetrequetesaisieetiquettemessage.js',
});