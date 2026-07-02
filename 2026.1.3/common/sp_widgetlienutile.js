IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.WidgetLienUtile = void 0;
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const UtilitairePartenaire_1 = require('@scolys/produit/script/utilitaire/UtilitairePartenaire');
    const ObjetWidget_1 = require('@cp/script/ObjetWidget');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    class WidgetLienUtile extends ObjetWidget_1.Widget.ObjetWidget {
      constructor(aParams) {
        super(aParams);
        this.utilitairePartenaire =
          new UtilitairePartenaire_1.UtilitairePartenaire();
      }
      construire(aParams) {
        this.donnees = aParams.donnees;
        const lWidget = {
          getHtml: this.composeWidgetLienUtile.bind(this),
          nbrElements: this.donnees.listeLiens.count(),
          afficherMessage: this.donnees.listeLiens.count() === 0,
        };
        $.extend(true, this.donnees, lWidget);
        aParams.construireWidget(this.donnees);
      }
      composeWidgetLienUtile() {
        const H = [];
        H.push('<ul class="one-line">');
        if (this.donnees.listeLiens) {
          for (const lLien of this.donnees.listeLiens) {
            if (!!lLien.estFavori) {
              continue;
            }
            const lTitreLienUtile = [];
            lTitreLienUtile.push('<div>');
            if (lLien.url) {
              lTitreLienUtile.push(
                IE.jsx.str(
                  'div',
                  { class: 'lien-communication' },
                  IE.jsx.str('a', { href: lLien.url }, lLien.getLibelle()),
                ),
              );
            } else {
              lTitreLienUtile.push(IE.jsx.str('h3', null, lLien.getLibelle()));
            }
            lTitreLienUtile.push('</div>');
            const lHtmlNumeroTelephone = [];
            if (lLien.numeroTelFormate) {
              const lHref = 'tel:' + lLien.numeroTelBrut;
              lHtmlNumeroTelephone.push(
                IE.jsx.str(
                  'div',
                  null,
                  IE.jsx.str(
                    'div',
                    { class: 'lien-communication tel-autre' },
                    IE.jsx.str(
                      'a',
                      { href: lHref, target: '_blank' },
                      lLien.numeroTelFormate,
                    ),
                  ),
                ),
              );
            }
            const lHtmlCommentaire = [];
            if (lLien.commentaire) {
              lHtmlCommentaire.push(
                IE.jsx.str(
                  'div',
                  null,
                  IE.jsx.str('p', null, lLien.commentaire),
                ),
              );
            }
            H.push(
              IE.jsx.str(
                'li',
                null,
                IE.jsx.str(
                  'div',
                  {
                    class: [
                      Divers_css_1.SD.flexContain,
                      Divers_css_1.SD.flexDirectionColumn,
                      Divers_css_1.SD.gapS,
                    ],
                  },
                  lTitreLienUtile.join(''),
                  lHtmlNumeroTelephone.join(''),
                  lHtmlCommentaire.join(''),
                ),
              ),
            );
          }
        }
        H.push('</ul>');
        return H.join('');
      }
      _surLien(aLien) {
        if (!aLien.SSO) {
          window.open(ObjetChaine_1.GChaine.verifierURLHttp(aLien.url));
        } else {
          this.utilitairePartenaire.ouvrirURLPartenaire(aLien);
        }
      }
    }
    exports.WidgetLienUtile = WidgetLienUtile;
  },
  fn: 'widgetlienutile.js',
});