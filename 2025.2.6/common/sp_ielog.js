IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    require('NamespaceIE');
    require('DeclarationJQuery');
    const Invocateur_1 = require('Invocateur');
    let _actif = false;
    let _actifRequete = false;
    const _idLogAutorises = {};
    let _compteurRequete = 0;
    const _nbRequetesMax = 200;
    let _pileLog = [];
    const _pileRequete = [];
    var TypeGenreLog;
    (function (TypeGenreLog) {
      TypeGenreLog[(TypeGenreLog['Message'] = 0)] = 'Message';
      TypeGenreLog[(TypeGenreLog['Avertissement'] = 1)] = 'Avertissement';
      TypeGenreLog[(TypeGenreLog['Erreur'] = 2)] = 'Erreur';
      TypeGenreLog[(TypeGenreLog['Deprecated'] = 3)] = 'Deprecated';
    })(TypeGenreLog || (TypeGenreLog = {}));
    const Log = {
      genre: TypeGenreLog,
      getActif() {
        return _actif;
      },
      setActif(aActif) {
        _actif = aActif;
        if (aActif) {
          this.addLog('Démarrage Log', null, Log.genre.Avertissement);
        }
      },
      getActifRequete() {
        return _actifRequete;
      },
      setActifRequete(aActif) {
        _actifRequete = aActif;
      },
      addLog(aMessage, aIdFiltrage, aGenreLog) {
        if (!_actif) {
          return;
        }
        if (aIdFiltrage && _idLogAutorises && !_idLogAutorises[aIdFiltrage]) {
          return;
        }
        const lMessage =
          aMessage && aMessage.toString
            ? aMessage.toString()
            : 'aMessage NON LOGGABLE !!!';
        const lLog = {
          message: lMessage,
          genreLog: aGenreLog,
          date: new Date(),
        };
        _pileLog.push(lLog);
        this.addConsoleLog(aMessage, aGenreLog);
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.DEBUG_log,
          lLog,
        );
      },
      vider() {
        _pileLog = [];
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.DEBUG_log,
          null,
        );
      },
      setIDFiltrageLog(aID, aAutoriser) {
        if (aAutoriser) {
          _idLogAutorises[aID] = true;
        } else {
          delete _idLogAutorises[aID];
        }
      },
      addRequete(aDonnees) {
        if (!this.getActifRequete()) {
          return;
        }
        const lDonnees = {
          nomRequete: '',
          numeroRequete: 0,
          numeroOrdre: 0,
          chrono: null,
          estReponse: false,
          lgcontenu: null,
        };
        Object.assign(lDonnees, aDonnees);
        lDonnees.date = new Date();
        if (!lDonnees.estReponse) {
          _compteurRequete += 1;
        }
        _pileRequete.push(lDonnees);
        if (_pileRequete.length > _nbRequetesMax) {
          _pileRequete.shift();
        }
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.DEBUG_logRequete,
          lDonnees,
        );
      },
      getCompteurRequete() {
        return _compteurRequete;
      },
      getPile() {
        return _pileLog;
      },
      getRequetes() {
        return _pileRequete;
      },
      addConsoleLog(aMessage, aGenreMsg) {},
      addConsoleLogObjet(aObjet, aLibelle) {},
      addConsolePileAppel(aLibelle) {},
    };
    IE.log = Log;
    module.exports = Log;
  },
  fn: 'ielog.js',
});