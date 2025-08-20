IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TUtilitaireInfoSondage = TUtilitaireInfoSondage;
    const ObjetDate_1 = require('ObjetDate');
    const ObjetTraduction_1 = require('ObjetTraduction');
    function TUtilitaireInfoSondage() {}
    TUtilitaireInfoSondage.getDate = function () {
      return (
        'du' +
        ObjetDate_1.GDate.formatDate(this.dateDebut, ' %JJ/%MM/%AAAA ') +
        'au' +
        ObjetDate_1.GDate.formatDate(this.dateFin, ' %JJ/%MM/%AAAA')
      );
    };
    TUtilitaireInfoSondage.avecReponse = function () {
      let lResult = false;
      for (let i = 0; i < this.listeQuestions.count() && !lResult; i++) {
        const lQuestion = this.listeQuestions.get(i);
        lResult =
          lQuestion.reponse.avecReponse ||
          !lQuestion.reponse.estReponseAttendue;
      }
      return lResult;
    };
    TUtilitaireInfoSondage.aToutRepondu = function () {
      let lResult = true;
      for (let i = 0; i < this.listeQuestions.count() && lResult; i++) {
        const lQuestion = this.listeQuestions.get(i);
        lResult =
          lQuestion.reponse.avecReponse ||
          !lQuestion.reponse.estReponseAttendue;
      }
      return lResult;
    };
  },
  fn: 'utilitaireinfosondage.js',
});