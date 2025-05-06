IE.fModule({
  f: function (exports, require, module, global) {
    const { GChaine } = require('ObjetChaine.js');
    const { ObjetFenetre_Liste } = require('ObjetFenetre_Liste.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { ObjetListe } = require('ObjetListe.js');
    class ObjetFenetre_SelectionListeDiffusion extends ObjetFenetre_Liste {
      constructor(...aParams) {
        super(...aParams);
        this.uniquementMesListes =
          GApplication.parametresUtilisateur.get(
            'listeDiffusion.uniquementMesListes',
          ) || false;
        this.setOptionsFenetre({
          modale: true,
          titre: GTraductions.getValeur('listeDiffusion.titre'),
          largeur: 300,
          hauteur: 470,
          listeBoutons: [
            GTraductions.getValeur('Annuler'),
            GTraductions.getValeur('Valider'),
          ],
        });
      }
      initialiserListe(aInstance) {
        aInstance.setOptionsListe({ skin: ObjetListe.skin.flatDesign });
      }
      getControleur() {
        return $.extend(true, super.getControleur(this), {
          cbLesMiens: {
            getValue: function () {
              return GApplication.parametresUtilisateur.get(
                'listeDiffusion.uniquementMesListes',
              );
            },
            setValue: function (aValue) {
              _evenementSurCB.call(this.instance, aValue);
            },
          },
        });
      }
      composeContenu() {
        const T = [];
        T.push('<div class="flex-contain cols full-size">');
        T.push(
          '<div class="fix-bloc p-all-l">',
          '<ie-checkbox ie-model="cbLesMiens">',
          GChaine.insecable(GTraductions.getValeur('listeDiffusion.lesMiens')),
          '</ie-checkbox>',
          '</div>',
        );
        T.push(
          '<div class="fluid-bloc" id="' +
            this.getNomInstance(this.identListe) +
            '">',
          '</div>',
        );
        T.push('</div>');
        return T.join('');
      }
    }
    function _evenementSurCB(aValue) {
      this.uniquementMesListes = !!aValue;
      GApplication.parametresUtilisateur.set(
        'listeDiffusion.uniquementMesListes',
        this.uniquementMesListes,
      );
      if (
        this.getInstance(this.identListe) &&
        this.getInstance(this.identListe).getDonneesListe()
      ) {
        this.getInstance(this.identListe)
          .getDonneesListe()
          .setUniquementMesListes(this.uniquementMesListes);
        this.getInstance(this.identListe).actualiser(true, false);
      }
    }
    module.exports = { ObjetFenetre_SelectionListeDiffusion };
  },
  fn: 'objetfenetre_selectionlistediffusion.js',
});