IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteGenerationURLRecherchePartenaire = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    class ObjetRequeteGenerationURLRecherchePartenaire extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequeteGenerationURLRecherchePartenaire =
      ObjetRequeteGenerationURLRecherchePartenaire;
    ObjetRequeteGenerationURLRecherchePartenaire.inscrire(
      'GenerationURLRecherchePartenaire',
    );
  },
  fn: 'objetrequetegenerationurlrecherchepartenaire.js',
});