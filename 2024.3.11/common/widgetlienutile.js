IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.WidgetLienUtile = void 0;
    const ObjetChaine_1 = require('ObjetChaine');
    const UtilitairePartenaire_1 = require('UtilitairePartenaire');
    const ObjetWidget_1 = require('ObjetWidget');
    class WidgetLienUtile extends ObjetWidget_1.Widget.ObjetWidget {
      construire(aParams) {
        this.donnees = aParams.donnees;
        const lWidget = {
          html: this.composeWidgetLienUtile(),
          nbrElements: this.donnees.listeLiens.count(),
          afficherMessage: this.donnees.listeLiens.count() === 0,
        };
        $.extend(true, this.donnees, lWidget);
        aParams.construireWidget(this.donnees);
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          surLienPartenaire(aIndice) {
            $(this.node).eventValidation(() => {
              aInstance._surLienPartenaire(aIndice);
            });
          },
          surNumeroTel(aIndice) {
            $(this.node).eventValidation(() => {
              aInstance._surNumeroTel(aIndice);
            });
          },
        });
      }
      composeWidgetLienUtile() {
        const H = [];
        H.push('<ul class="liste-clickable one-line">');
        for (let i = 0; i < this.donnees.listeLiens.count(); i++) {
          const lLien = this.donnees.listeLiens.get(i);
          if (!!lLien.estFavori) {
            continue;
          }
          if (lLien.numeroTel) {
            const lBaliseMobile = `<li class="no-sso"><a tabindex="0" ie-node="surNumeroTel ('${i}')">`;
            const lBaliseDesktop = `<li tabindex="0" class="no-sso yet-unclickable" >`;
            H.push(
              IE.estMobile ? lBaliseMobile : lBaliseDesktop,
              `<div><div>${lLien.numeroTel}</div>${lLien.getLibelle() ? `<p>${lLien.getLibelle()}</p>` : ''}</div>`,
              IE.estMobile ? '</a>' : '',
              '</li>',
            );
          } else if (lLien.SSO) {
            H.push(
              '<li class="has-sso">',
              '<a class="wrapper-link" tabindex="0" ie-node="surLienPartenaire (',
              i,
              ')">',
              '<div class="wrap">',
              '<div ',
              lLien.commentaire ? ' ie-hint="' + lLien.commentaire + '"' : '',
              '>',
              lLien.getLibelle(),
              '</div>',
              lLien.commentaire ? '<p>' + lLien.commentaire + '</p>' : '',
              '</div>',
              '</a>',
              '</li>',
            );
          } else {
            H.push(
              '<li class="no-sso">',
              '<a class="wrapper-link" tabindex="0" href="',
              ObjetChaine_1.GChaine.verifierURLHttp(lLien.url),
              '">',
              '<div class="wrap">',
              '<div ',
              lLien.commentaire ? ' ie-hint="' + lLien.commentaire + '"' : '',
              '>',
              lLien.getLibelle(),
              '</div>',
              lLien.commentaire ? '<p>' + lLien.commentaire + '</p>' : '',
              '</div>',
              '</a>',
              '</li>',
            );
          }
        }
        H.push('</ul>');
        return H.join('');
      }
      _surLienPartenaire(i) {
        const lLien = this.donnees.listeLiens.get(i);
        UtilitairePartenaire_1.TUtilitairePartenaire.ouvrirURLPartenaire(lLien);
      }
      _surNumeroTel(aIndice) {
        const lLienWidget = this.donnees.listeLiens.get(aIndice);
        if (lLienWidget.numeroTel) {
          window.open(
            `tel:${ObjetChaine_1.GChaine.supprimerEspaces(lLienWidget.numeroTel)}`,
          );
        }
      }
    }
    exports.WidgetLienUtile = WidgetLienUtile;
  },
  fn: 'widgetlienutile.js',
});