IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetIdentite_1 = require('ObjetIdentite');
    IEHtml.addAttribut(
      'ie-identite',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lNode = aContexteCourant.node;
        if (lNode.id) {
          return true;
        }
        const lValue = aAttributValue || '';
        if (!lValue || !aContexteCourant.controleur) {
          return true;
        }
        const lCallbackParams = aOutils.getAccesParametres(
          lValue,
          aContexteCourant,
        );
        if (!lCallbackParams.estFonction) {
          return true;
        }
        const lValueCallback = lCallbackParams.callback([]);
        if (!lValueCallback || !lValueCallback.class || !lValueCallback.pere) {
          return true;
        }
        let lInstance = ObjetIdentite_1.Identite.creerInstance(
          lValueCallback.class,
          { pere: lValueCallback.pere, evenement: lValueCallback.evenement },
        );
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
          lValueCallback.init(lInstance);
        }
        aOutils.surInjectionHtml(aContexteCourant, () => {
          if (MethodesObjet_1.MethodesObjet.isFunction(lInstance.initialiser)) {
            lInstance.initialiser();
          }
          if (MethodesObjet_1.MethodesObjet.isFunction(lValueCallback.start)) {
            lValueCallback.start(lInstance);
          }
        });
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie-identite="' + lValue + '"',
        );
        return true;
      },
    );
  },
  fn: 'iehtml.identite.js',
});