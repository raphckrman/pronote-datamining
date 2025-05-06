IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireUrl = void 0;
    const ObjetChaine_1 = require('ObjetChaine');
    exports.UtilitaireUrl = {
      construireListeUrls(aListe, aParams) {
        const lParams = Object.assign(
          {
            genreFiltre: null,
            genreRessource: exports.UtilitaireUrl.genreRessourceDefault,
            separateur: ' ',
            IEModelChips: '',
            argsIEModelChips: null,
            maxWidth: 0,
            class: '',
          },
          aParams,
        );
        if (!aListe || !aListe.parcourir) {
          return '';
        }
        const T = [];
        aListe.parcourir((aElement, aIndex) => {
          if (aElement.existe()) {
            if (
              lParams.genreFiltre === null ||
              lParams.genreFiltre === undefined ||
              aElement.getGenre() === lParams.genreFiltre
            ) {
              let lArgsIEModel = null;
              if (!!lParams.IEModelChips) {
                lArgsIEModel = [aIndex];
                if (
                  !!lParams.argsIEModelChips &&
                  Array.isArray(lParams.argsIEModelChips)
                ) {
                  lArgsIEModel = lArgsIEModel.concat(lParams.argsIEModelChips);
                }
              }
              const lIeChips = ObjetChaine_1.GChaine.composerUrlLienExterne({
                documentJoint: aElement,
                genreRessource: lParams.genreRessource,
                maxWidth: lParams.maxWidth,
                ieModelChips: lParams.IEModelChips,
                argsIEModel: lArgsIEModel,
                class: lParams.class,
              });
              T.push(IE.jsx.str('div', null, lIeChips));
            }
          }
        });
        let lResult = T.join(lParams.separateur);
        if (T.length > 0) {
          lResult = IE.jsx.str('div', { class: 'liste-url-chips' }, lResult);
        }
        return lResult;
      },
      genreRessourceDefault: null,
    };
  },
  fn: 'utilitaireurl.js',
});