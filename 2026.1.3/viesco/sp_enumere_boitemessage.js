IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreBoiteMessageUtil = exports.EGenreBoiteMessage = void 0;
    const IconeSvgDiffuser_information_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_information');
    const IconeSvgExclamation_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgExclamation');
    const IconeSvgQuestion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgQuestion');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const TradEnumere_BoiteMessage =
      ObjetTraduction_1.TraductionsModule.getModule('Enumere_BoiteMessage', {
        Information: '',
        Confirmation: '',
      });
    var EGenreBoiteMessage;
    (function (EGenreBoiteMessage) {
      EGenreBoiteMessage[(EGenreBoiteMessage['Information'] = 0)] =
        'Information';
      EGenreBoiteMessage[(EGenreBoiteMessage['Confirmation'] = 1)] =
        'Confirmation';
      EGenreBoiteMessage[(EGenreBoiteMessage['MrFiche'] = 2)] = 'MrFiche';
    })(
      EGenreBoiteMessage ||
        (exports.EGenreBoiteMessage = EGenreBoiteMessage = {}),
    );
    const EGenreBoiteMessageUtil = {
      getLibelle(aGenre) {
        switch (aGenre) {
          case EGenreBoiteMessage.Information:
          case EGenreBoiteMessage.MrFiche:
            return TradEnumere_BoiteMessage.Information;
          case EGenreBoiteMessage.Confirmation:
            return TradEnumere_BoiteMessage.Confirmation;
        }
        return '';
      },
      getIconeSvg(aGenre) {
        switch (aGenre) {
          case EGenreBoiteMessage.Information:
            return IE.jsx.str(
              IconeSvgDiffuser_information_1.IconeSvgDiffuser_information,
              null,
            );
          case EGenreBoiteMessage.Confirmation:
            return IE.jsx.str(IconeSvgExclamation_1.IconeSvgExclamation, null);
          case EGenreBoiteMessage.MrFiche:
            return IE.jsx.str(IconeSvgQuestion_1.IconeSvgQuestion, null);
        }
      },
      getClasseTheme(aGenre) {
        switch (aGenre) {
          case EGenreBoiteMessage.Information:
            return 'is-info';
          case EGenreBoiteMessage.MrFiche:
            return 'is-info';
          case EGenreBoiteMessage.Confirmation:
            return 'is-info';
        }
      },
    };
    exports.EGenreBoiteMessageUtil = EGenreBoiteMessageUtil;
  },
  fn: 'enumere_boitemessage.js',
});