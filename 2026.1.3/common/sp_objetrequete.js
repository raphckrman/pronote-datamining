IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequete = void 0;
    const XmlHttp_1 = require('@librairies/script/XmlHttp');
    const TypeEtatRequeteAjax_1 = require('@cp/script/Communication/TypeEtatRequeteAjax');
    const TypesRequeteJSON_1 = require('@cp/script/Communication/TypesRequeteJSON');
    class ObjetRequete {
      constructor(aParametres) {
        this.Parametres = {
          numeroSession: 0,
          asynchrone: true,
          post: true,
          nomRequete: '',
          genreEspace: 0,
          sansBlocageInterface: false,
          nomDeFonction: '',
          parametres: '',
          jsonNonSecurise: undefined,
          callBackReadyStateChange: undefined,
          pereReponse: undefined,
          evenementReponse: undefined,
          messageDetail: '',
          jsonOrigine: undefined,
          echecReseau: false,
          estBackup: false,
          dataPOST: undefined,
          log: {},
          numeroRequete: 0,
        };
        $.extend(this.Parametres, aParametres);
        this.estUneRequete = true;
        this.etat = TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.initial;
      }
      getXmlRequest() {
        return this.Requete;
      }
      enAttente() {
        return (
          this.etat ===
            TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.preparationEnvoi ||
          this.etat === TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.envoye ||
          this.etat === TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.recu
        );
      }
      envoieRequete(aParametres) {
        const lParametres = $.extend(
          { numeroOrdre: 0, numeroOrdreChiffre: '' },
          aParametres,
        );
        const lCheminSecurise =
          this.Parametres.nomRequete +
          '/' +
          (this.Parametres.genreEspace || 0).toString() +
          '/' +
          this.Parametres.numeroSession +
          '/' +
          lParametres.numeroOrdreChiffre;
        this.Requete = (0, XmlHttp_1.getXmlHttp)();
        this.Requete.open(
          this.Parametres.post ? 'Post' : 'Get',
          lCheminSecurise,
          !!this.Parametres.asynchrone,
        );
        this.Requete.onreadystatechange = this.onReadyStateChange.bind(this);
        this.Requete.setRequestHeader('Content-Type', 'application/json');
        let lDataPost = null;
        if (this.Parametres.post) {
          lDataPost = this.Parametres.estBackup
            ? this.Parametres.dataPOST
            : this._getData(lParametres.numeroOrdreChiffre);
        }
        this.backupDataJSON = lDataPost;
        this.Requete.send(lDataPost);
        this.etat = TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.envoye;
        try {
          if (IE.log.getActifRequete()) {
            let lEstAttente = false;
            IE.log.addRequete({
              nomRequete: this.Parametres.nomDeFonction,
              numeroRequete: this.Parametres.numeroRequete,
              numeroOrdre: lParametres.numeroOrdre,
              chrono: { xml: '', traitement: this.Parametres.log.tempsChiffre },
              estReponse: false,
              estBackup: this.Parametres.estBackup,
              lgcontenu: this.Parametres.log.tailleDonnees,
              estPolling: this.Parametres.estPolling,
              estAttente: lEstAttente,
            });
          }
        } catch (e) {}
      }
      toString() {
        return this.Parametres.nomDeFonction;
      }
      _getData(aNumeroOrdreChiffre) {
        var _a;
        const lJSON = {};
        lJSON[TypesRequeteJSON_1.ConstantesJSON.numeroSession] =
          this.Parametres.numeroSession;
        lJSON[TypesRequeteJSON_1.ConstantesJSON.numeroOrdre] =
          aNumeroOrdreChiffre;
        lJSON[TypesRequeteJSON_1.ConstantesJSON.idRequete] =
          this.Parametres.nomDeFonction;
        lJSON[TypesRequeteJSON_1.ConstantesJSON.donneesSecurisee] =
          (_a = this.Parametres.parametres) !== null && _a !== void 0 ? _a : '';
        if (this.Parametres.jsonNonSecurise) {
          lJSON[TypesRequeteJSON_1.ConstantesJSON.donneesNonSecurisee] =
            this.Parametres.jsonNonSecurise;
        }
        if (this.Parametres.echecReseau) {
          lJSON[TypesRequeteJSON_1.ConstantesJSON.echecReseau] = true;
        }
        return JSON.stringify(lJSON);
      }
      onReadyStateChange() {
        var _a;
        if (
          ((_a = this.Requete) === null || _a === void 0
            ? void 0
            : _a.readyState) === 4
        ) {
          this.etat = TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.recu;
          if (this.Parametres.callBackReadyStateChange) {
            const lRequeteXmlHttp = this.Requete;
            delete this.Requete;
            this.Parametres.callBackReadyStateChange(
              this,
              lRequeteXmlHttp.responseText,
              lRequeteXmlHttp.status,
            );
            lRequeteXmlHttp.onreadystatechange = null;
          }
        }
      }
    }
    exports.ObjetRequete = ObjetRequete;
  },
  fn: 'objetrequete.js',
});