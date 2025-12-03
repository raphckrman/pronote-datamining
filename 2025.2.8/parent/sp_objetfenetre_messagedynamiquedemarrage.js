IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_MessageDynamiqueDemarrage = void 0;
    require('ObjetFenetre_MessageDynamiqueDemarrage.css');
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    class ObjetRequeteInfosDynamiquesMarquerLu extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    CollectionRequetes_1.Requetes.inscrire(
      'InfosDynamiquesMarquerLu',
      ObjetRequeteInfosDynamiquesMarquerLu,
    );
    class ObjetFenetre_MessageDynamiqueDemarrage extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          listeBoutons: ['Fermer'],
          avecComposeBasInFooter: true,
          callbackFermer: () => {
            if (
              this.marquerLu &&
              this.optionsFenetre.messages &&
              this.optionsFenetre.messages.length > 0
            ) {
              const lIds = [];
              this.optionsFenetre.messages.forEach((aMessage) => {
                lIds.push(aMessage.id);
              });
              new ObjetRequeteInfosDynamiquesMarquerLu(this).lancerRequete({
                tab: lIds,
              });
            }
          },
        });
        this.marquerLu = false;
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          cbLu: {
            getValue: function () {
              return !!aInstance.marquerLu;
            },
            setValue: function (aValue) {
              aInstance.marquerLu = aValue;
            },
          },
        });
      }
      composeContenu() {
        if (
          this.optionsFenetre.messages &&
          this.optionsFenetre.messages.length > 0
        ) {
          let H = [];
          this.optionsFenetre.messages.forEach((aMessage) => {
            if (aMessage && aMessage.contenu) {
              if (H.length > 0) {
                H.push('<hr class="ob_mdd_hr">');
              }
              H.push(
                '<div class="comm_contenuMessageDynamique">',
                aMessage.contenu,
                '</div>',
              );
            }
          });
          if (!IE.estMobile) {
            H = ['<div class="ob_mdd_conteneur">', H.join(''), '</div>'];
          }
          return H.join('');
        }
      }
      composeBas() {
        return IE.jsx.str(
          'ie-checkbox',
          { 'ie-model': 'cbLu', class: 'ob_mdd_cb' },
          'Marquer les messages comme lus.',
        );
      }
    }
    exports.ObjetFenetre_MessageDynamiqueDemarrage =
      ObjetFenetre_MessageDynamiqueDemarrage;
  },
  fn: 'objetfenetre_messagedynamiquedemarrage.js',
});