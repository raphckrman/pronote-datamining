IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_MessageDynamiqueDemarrage = void 0;
    require('@cp/Produit/Css/ObjetFenetre_MessageDynamiqueDemarrage.css');
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    class ObjetRequeteInfosDynamiquesMarquerLu extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    ObjetRequeteInfosDynamiquesMarquerLu.inscrire('InfosDynamiquesMarquerLu');
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
      jsxModelCheckboxLu() {
        return {
          getValue: () => {
            return !!this.marquerLu;
          },
          setValue: (aValue) => {
            this.marquerLu = aValue;
          },
        };
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
        return '';
      }
      composeBas() {
        return IE.jsx.str(
          IEHtml_CheckboxRadio_1.Checkbox,
          { ie_model: this.jsxModelCheckboxLu.bind(this), class: 'ob_mdd_cb' },
          'Marquer les messages comme lus.',
        );
      }
    }
    exports.ObjetFenetre_MessageDynamiqueDemarrage =
      ObjetFenetre_MessageDynamiqueDemarrage;
  },
  fn: 'objetfenetre_messagedynamiquedemarrage.js',
});