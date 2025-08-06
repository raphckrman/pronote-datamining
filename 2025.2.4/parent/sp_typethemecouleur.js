IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ChoixThemesPourAppli =
      exports.ChoixDarkMode =
      exports.TypeThemeCollectivite =
      exports.TypeThemeProduit =
      exports.TypeThemeCouleur =
        void 0;
    exports.forEachThemesCouleurEtProduitEtCollectivite =
      forEachThemesCouleurEtProduitEtCollectivite;
    const MethodesObjet_1 = require('MethodesObjet');
    var TypeThemeCouleur;
    (function (TypeThemeCouleur) {
      TypeThemeCouleur[(TypeThemeCouleur['Bordeaux'] = 0)] = 'Bordeaux';
      TypeThemeCouleur[(TypeThemeCouleur['Jaune'] = 1)] = 'Jaune';
      TypeThemeCouleur[(TypeThemeCouleur['Bleu'] = 2)] = 'Bleu';
      TypeThemeCouleur[(TypeThemeCouleur['Turquoise'] = 3)] = 'Turquoise';
      TypeThemeCouleur[(TypeThemeCouleur['Vert'] = 4)] = 'Vert';
      TypeThemeCouleur[(TypeThemeCouleur['Violet'] = 5)] = 'Violet';
    })(TypeThemeCouleur || (exports.TypeThemeCouleur = TypeThemeCouleur = {}));
    var TypeThemeProduit;
    (function (TypeThemeProduit) {
      TypeThemeProduit[(TypeThemeProduit['ProduitPN'] = 1003)] = 'ProduitPN';
      TypeThemeProduit[(TypeThemeProduit['ProduitEDT'] = 1004)] = 'ProduitEDT';
      TypeThemeProduit[(TypeThemeProduit['ProduitHP'] = 1005)] = 'ProduitHP';
      TypeThemeProduit[(TypeThemeProduit['Pronote'] = 1006)] = 'Pronote';
      TypeThemeProduit[(TypeThemeProduit['EDT'] = 1007)] = 'EDT';
      TypeThemeProduit[(TypeThemeProduit['MobileHP'] = 1008)] = 'MobileHP';
    })(TypeThemeProduit || (exports.TypeThemeProduit = TypeThemeProduit = {}));
    var TypeThemeCollectivite;
    (function (TypeThemeCollectivite) {
      TypeThemeCollectivite[(TypeThemeCollectivite['ColIdf'] = 1009)] =
        'ColIdf';
    })(
      TypeThemeCollectivite ||
        (exports.TypeThemeCollectivite = TypeThemeCollectivite = {}),
    );
    function forEachThemesCouleurEtProduitEtCollectivite(aCallback) {
      for (const lKey of MethodesObjet_1.MethodesObjet.enumKeys(
        TypeThemeCouleur,
      )) {
        aCallback(TypeThemeCouleur[lKey], lKey);
      }
      for (const lKey of MethodesObjet_1.MethodesObjet.enumKeys(
        TypeThemeProduit,
      )) {
        aCallback(TypeThemeProduit[lKey], lKey);
      }
      for (const lKey of MethodesObjet_1.MethodesObjet.enumKeys(
        TypeThemeCollectivite,
      )) {
        aCallback(TypeThemeCollectivite[lKey], lKey);
      }
    }
    var ChoixDarkMode;
    (function (ChoixDarkMode) {
      ChoixDarkMode['systeme'] = 'systeme';
      ChoixDarkMode['clair'] = 'clair';
      ChoixDarkMode['sombre'] = 'sombre';
    })(ChoixDarkMode || (exports.ChoixDarkMode = ChoixDarkMode = {}));
    exports.ChoixThemesPourAppli = [
      TypeThemeProduit.Pronote,
      TypeThemeProduit.MobileHP,
      TypeThemeProduit.EDT,
      TypeThemeCollectivite.ColIdf,
    ];
  },
  fn: 'typethemecouleur.js',
});