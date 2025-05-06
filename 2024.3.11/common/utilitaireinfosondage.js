IE.fModule({
  f: function (exports, require, module, global) {
    const { GDate } = require('ObjetDate.js');
    const { GTraductions } = require('ObjetTraduction.js');
    function TUtilitaireInfoSondage() {}
    TUtilitaireInfoSondage.getDate = function () {
      return (
        GTraductions.getValeur('Du') +
        GDate.formatDate(this.dateDebut, ' %JJ/%MM/%AAAA ') +
        GTraductions.getValeur('Au') +
        GDate.formatDate(this.dateFin, ' %JJ/%MM/%AAAA')
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
    module.exports = { TUtilitaireInfoSondage };
  },
  fn: 'utilitaireinfosondage.js',
});