IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    IEHtml_1.IEHtml.addAttribut(
      'ie_identite',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        const lNode = aContexteCourant.node;
        if (lNode.id) {
          return true;
        }
        const lValue = aAttributValue || '';
        if (!lValue) {
          return true;
        }
        const lCallbackParams = aOutils.getAccesParametres(
          lValue,
          aAttrName,
          aContexteCourant,
        );
        if (!lCallbackParams.estFonction) {
          return true;
        }
        const lValueCallback = lCallbackParams.callback([
          aContexteCourant.node,
        ]);
        let lInstance = lValueCallback.create(aContexteCourant.node);
        lNode.id = lInstance.getNom();
        $(lNode).on('destroyed', () => {
          if (
            MethodesObjet_1.MethodesObjet.isFunction(lValueCallback.destroy)
          ) {
            lValueCallback.destroy(lInstance);
          }
          lInstance.free();
          lInstance = null;
        });
        if (MethodesObjet_1.MethodesObjet.isFunction(lValueCallback.init)) {
          lValueCallback.init(lInstance, aContexteCourant);
        }
        aOutils.surInjectionHtml(aContexteCourant, () => {
          if (MethodesObjet_1.MethodesObjet.isFunction(lInstance.initialiser)) {
            lInstance.initialiser();
          }
          if (MethodesObjet_1.MethodesObjet.isFunction(lValueCallback.start)) {
            lValueCallback.start(lInstance, aContexteCourant);
          }
        });
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          `ie_identite="${lCallbackParams.nomCommentaire || lValue}"`,
        );
        return true;
      },
    );
  },
  fn: 'iehtml.identite.js',
});