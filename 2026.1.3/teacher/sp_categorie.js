IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TradCategorie = exports.CarreCategorie = exports.Categorie = void 0;
    const tslib_1 = require('tslib');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Categorie_module_css_1 = require('@cp/Produit/Css/Categorie.module.css');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    var Categorie;
    (function (Categorie) {
      Categorie.c_couleurParDefaultCategorie = '#000';
      Categorie.c_couleurSansCategorie = '#bababa';
      Categorie.composeCarreCategorie = ({ couleur, abr, tooltiplabel }) => {
        couleur !== null && couleur !== void 0
          ? couleur
          : (couleur = Categorie.c_couleurParDefaultCategorie);
        const lStyle = {
          backgroundColor: couleur,
          color: (0, AccessApp_1.getApp)()
            .getCouleur()
            .getCouleurCorrespondance(couleur),
        };
        return IE.jsx.str(
          'div',
          {
            class: [Categorie_module_css_1.SCategorie.carreCategorie],
            ie_tooltiplabel:
              tooltiplabel !== null && tooltiplabel !== void 0
                ? tooltiplabel
                : false,
            role: tooltiplabel ? 'img' : 'presentation',
            style: lStyle,
          },
          abr,
        );
      };
    })(Categorie || (exports.Categorie = Categorie = {}));
    const CarreCategorie = (_a) => {
      var { children } = _a,
        aRest = tslib_1.__rest(_a, ['children']);
      return Categorie.composeCarreCategorie(
        Object.assign(Object.assign({}, aRest), {
          abr: children !== null && children !== void 0 ? children : '',
        }),
      );
    };
    exports.CarreCategorie = CarreCategorie;
    const TradCategorie = ObjetTraduction_1.TraductionsModule.getModule(
      'Categorie',
      { sansCategorie: '', categories: '', editerCategories: '' },
    );
    exports.TradCategorie = TradCategorie;
  },
  fn: 'categorie.js',
});