IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteIdentification = void 0;
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetMoteurConnexion_1 = require('@cp/Produit/Script/moteur/ObjetMoteurConnexion');
    const TypesRequeteJSON_1 = require('@cp/script/Communication/TypesRequeteJSON');
    class ObjetRequeteIdentification extends ObjetMoteurConnexion_1
      .ObjetMoteurConnexion.ObjetRequeteIdentificationCP {
      constructor(...aParams) {
        super(...aParams);
        this.setOptions({
          messageDetail:
            'Identification',
        });
      }
      lancerRequete(aParam) {
        Object.assign(this.JSON, aParam);
        return this.appelAsynchrone();
      }
    }
    exports.ObjetRequeteIdentification = ObjetRequeteIdentification;
    ObjetRequeteIdentification.inscrire(
      TypesRequeteJSON_1.ConstantesIdRequetesAjaxCP.identification,
    );
  },
  fn: 'objetrequeteidentification.js',
});