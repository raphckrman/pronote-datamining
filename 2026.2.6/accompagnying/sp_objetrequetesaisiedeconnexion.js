IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteSaisieDeconnexion = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    class ObjetRequeteSaisieDeconnexion extends ObjetRequeteJSON_1.ObjetRequeteConsultation {
      constructor(...aParams) {
        super(...aParams);
        this.setOptions({
          messageDetail: 'Déconnexion en cours',
          avecControleModeExclusif: false,
          estRequeteDeconnexion: true,
        });
      }
    }
    exports.ObjetRequeteSaisieDeconnexion = ObjetRequeteSaisieDeconnexion;
    ObjetRequeteSaisieDeconnexion.inscrire('SaisieDeconnexion');
  },
  fn: 'objetrequetesaisiedeconnexion.js',
});