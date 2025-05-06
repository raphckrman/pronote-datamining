IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFiche_Espace = void 0;
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetStyle_1 = require('ObjetStyle');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetWAI_1 = require('ObjetWAI');
    const tag_1 = require('tag');
    const ObjetFiche_DesktopMobile_1 = require('ObjetFiche_DesktopMobile');
    class ObjetFiche_Espace extends ObjetFiche_DesktopMobile_1.ObjetFiche_DesktopMobile {
      constructor(...aParams) {
        super(...aParams);
        this.EnAffichage = false;
        this.idContenuFenetre = this.IdContenu;
        this.idContenu = this.Nom + '_ContenuFiche';
        this.IdPremierElement = this.idContenu;
        this.idCorpsContenu = this.Nom + '_corpsContenu';
        this.idBandeau = this.Nom + '_Bandeau';
        this.avecBandeau = true;
        this.avecDeplacementSurBandeau = true;
        this.avecDeplacementSurFiche = false;
        this.avecBoutonFermer = true;
        this.setOptionsFenetre({
          modale: false,
          largeur: null,
          hauteur: null,
          avecAbonnementBlocage: true,
          avecAbonnementPremierPlan: true,
          avecTailleSelonContenu: true,
          positionnerFenetreSurAfficher: false,
          conserverCoordonnees: false,
          htmlContenu: '',
          labelledBy: '',
          bloquerFocus: false,
        });
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          eventBoutonFermer: function (event) {
            switch (event.type) {
              case 'keyup':
                if (GNavigateur.isToucheSelection()) {
                  aInstance.fermer();
                }
                break;
              case 'click':
                aInstance.fermer();
                break;
            }
          },
        });
      }
      compose() {
        const H = [];
        H.push(
          '<span class="sr-only" tabindex="0" onfocus="',
          this.Nom,
          '.focusSurPremierElement();"></span>',
        );
        H.push(
          '<div tabindex="-1" id="',
          this.idContenu,
          '" class="ObjetFenetre_Espace ',
          this.optionsFenetre.cssFenetre || '',
          '"',
          ObjetWAI_1.GObjetWAI.composeRole(ObjetWAI_1.EGenreRole.Dialog),
          this.optionsFenetre.labelledBy
            ? ObjetWAI_1.GObjetWAI.composeAttribut({
                genre: ObjetWAI_1.EGenreAttribut.labelledby,
                valeur: this.optionsFenetre.labelledBy,
              })
            : '',
          '>',
        );
        H.push(
          '<div class="Fenetre_Cadre ombre-cadre" style="',
          ObjetStyle_1.GStyle.composeWidth(this.optionsFenetre.largeur),
          ObjetStyle_1.GStyle.composeCouleurFond(
            this.optionsFenetre.couleurFond,
          ),
          '">',
        );
        if (this.avecBandeau) {
          H.push(
            '<div id="',
            this.idBandeau,
            '" class="bandeau-header">',
            this.composeBandeau(this.avecBoutonFermer),
            '</div>',
          );
        } else if (this.avecBoutonFermer) {
          H.push(
            (0, tag_1.tag)(
              'div',
              { class: 'Fenetre_Titre sans-bandeau' },
              _construireBtnFermer(),
            ),
          );
        }
        H.push(
          (0, tag_1.tag)(
            'div',
            {
              id: this.idCorpsContenu,
              class:
                'ObjetFenetre_Edition content ' +
                (this.avecDeplacementSurFiche ? 'AvecMove' : ''),
              'ie-draggable': this.avecDeplacementSurFiche
                ? 'getDragFenetre'
                : '',
              style: 'height:100%;',
              tabindex: '0',
            },
            this.optionsFenetre.htmlContenu || this.composeContenu(),
          ),
        );
        H.push('</div>');
        H.push('</div>');
        H.push(
          '<span class="sr-only" tabindex="0" onfocus="',
          this.Nom,
          '.focusSurPremierElement();"></span>',
        );
        return H.join('');
      }
      composeBandeau(AAvecBoutonFermer) {
        const lHtml = [];
        this.avecBoutonFermer = AAvecBoutonFermer;
        lHtml.push('<div class="Fenetre_Titre">');
        lHtml.push(
          (0, tag_1.tag)('h1', {
            id: this.IdTitre,
            class: this.avecDeplacementSurBandeau ? 'AvecMove' : false,
            'ie-draggable': this.avecDeplacementSurBandeau
              ? 'getDragFenetre'
              : '',
            'ie-html': 'getTitre',
            tabindex: '0',
          }),
        );
        if (AAvecBoutonFermer) {
          lHtml.push(_construireBtnFermer());
        }
        lHtml.push('</div>');
        return lHtml.join('');
      }
      actualiser() {
        return this.afficher(this.idCours);
      }
      surAfficher() {
        if (this.surPreAffichage) {
          this.surPreAffichage();
        }
        this.positionnerFenetre(this._parametresAffichageFiche);
      }
      focusSurPremierElement() {
        if (ObjetHtml_1.GHtml.elementExiste(this.IdTitre)) {
          ObjetHtml_1.GHtml.setFocus(this.IdTitre);
        } else if (ObjetHtml_1.GHtml.elementExiste(this.idCorpsContenu)) {
          ObjetHtml_1.GHtml.setFocus(this.idCorpsContenu);
        } else {
        }
      }
      construireStructureAffichageAutre() {
        return (
          '<div ie-node="getNodeFenetre" id="' +
          this.idContenuFenetre +
          '"></div>'
        );
      }
      afficher(AIdCours, aLeft, aTop) {
        return this.afficherFiche({
          id: AIdCours,
          left: aLeft,
          top: aTop,
          positionSurSouris: true,
          positionSurSourisSiAffiche: false,
        });
      }
      afficherFiche(aParametres) {
        this._parametresAffichageFiche = $.extend(
          {
            enAffichage: this.EnAffichage,
            left: null,
            top: null,
            id: null,
            positionSurSouris: false,
            positionSurSourisSiAffiche: false,
            centrerParDefaut: false,
          },
          aParametres,
        );
        if (this.EnAffichage) {
          if (this.destructionSurFermeture === true) {
            this._parametresAffichageFiche.enAffichage = false;
            this.EnAffichage = false;
            ObjetHtml_1.GHtml.setHtml(this.idContenuFenetre, '');
          } else {
            this.fermer(false);
          }
        }
        this.idCours = this._parametresAffichageFiche.id;
        const lProm = super.afficher();
        if (!this.optionsFenetre.bloquerFocus) {
          ObjetHtml_1.GHtml.setFocus(this.IdPremierElement);
        }
        if (this.surAfficher) {
          this.surAfficher();
        }
        return lProm;
      }
      fermer(aSurInteractionUtilisateur) {
        const lProm = super.fermer(aSurInteractionUtilisateur);
        ObjetHtml_1.GHtml.setHtml(this.idContenuFenetre, '');
        return lProm;
      }
      surValidation() {
        this.fermer();
      }
    }
    exports.ObjetFiche_Espace = ObjetFiche_Espace;
    function _construireBtnFermer() {
      return IE.jsx.str(
        'div',
        { class: 'cta-conteneur' },
        IE.jsx.str('ie-btnimage', {
          class: 'btnImageIcon as-button icon_fermeture_widget',
          'ie-model': 'btnCroixFermeture',
          title: 'Fermer',
        }),
      );
    }
  },
  fn: 'objetfiche_espace.js',
});