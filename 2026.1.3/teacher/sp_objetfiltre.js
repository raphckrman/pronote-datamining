IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Filtre = void 0;
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const GlossaireListe_1 = require('@cp/Produit/Script/GlossaireListe');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const IEHtml_BtnImage_css_1 = require('@cp/Produit/Css/IEHtml.BtnImage.css');
    const IconeSvgFiltre_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFiltre');
    const IconeSvgRond_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgRond');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    class ObjetFiltre extends ObjetIdentite_1.Identite {
      constructor(aParams = {}) {
        super(aParams);
        this.aveMarginBouton = true;
        this.IdNomConteneurFiltre = this.Nom + '_ConteneurFiltre';
        this.IdPremierElement = this.IdNomConteneurFiltre;
        this.avecBtnReinit = false;
      }
      construireAffichage(aHtml) {
        if (!aHtml) {
          return '';
        }
        return IE.jsx.str(
          'section',
          {
            id: this.IdNomConteneurFiltre,
            role: 'group',
            'aria-label': !this.ariaLabelledby
              ? GlossaireListe_1.TradGlossaireListe.Filtrer
              : false,
            'aria-labelledby': this.ariaLabelledby || false,
            class: 'zone-filtres objet-filtre',
          },
          aHtml,
          this.avecBtnReinit &&
            IE.jsx.str(
              'article',
              { class: 'filtre-footer' },
              IE.jsx.str(
                IEHtml_Bouton_1.Bouton,
                {
                  ie_model: this.jsxModelBtnReinitFiltres.bind(this),
                  class: 'small-bt',
                },
                GlossaireListe_1.TradGlossaireListe.ReinitialiserFiltre,
              ),
            ),
        );
      }
      setHtmlBoutonFiltre(aId) {
        ObjetHtml_1.GHtml.setHtml(aId, this._getHtmlBtnFiltre(), {
          instance: this,
        });
      }
      setDonnees(aHtml, aParametres) {
        var _a;
        if (aHtml && aParametres) {
          this.ariaLabelledby = aParametres.ariaLabelledby;
          if (aParametres.reinitFiltres) {
            this.avecBtnReinit = true;
            this.reinitFiltres = aParametres.reinitFiltres;
          }
          this.lesFiltresSontVides = aParametres.lesFiltresSontVides;
          this.callbackSurBtnFiltre = aParametres.callbackSurBtnFiltre;
          this.getDisabledBtnFiltre = aParametres.getDisabledBtnFiltre;
          this.aveMarginBouton =
            (_a = aParametres.aveMarginBouton) !== null && _a !== void 0
              ? _a
              : true;
          this.afficher(aHtml, aParametres);
        }
      }
      afficher(aHtml, aParametres) {
        ObjetHtml_1.GHtml.setHtml(this.Nom, this.construireAffichage(aHtml));
        ObjetStyle_1.GStyle.setDisplay(
          this.Nom,
          !!aParametres.avecAffichageDirect,
        );
        this.EstAffiche = !!aParametres.avecAffichageDirect;
      }
      _getHtmlBtnFiltre() {
        return IE.jsx.str(
          'div',
          { class: [this.aveMarginBouton && 'm-all-l', 'text-end'] },
          IE.jsx.str(
            IEHtml_BtnImage_1.BtnIcon,
            {
              class: [IEHtml_BtnImage_css_1.SIEHtmlBtnImage.avecFond],
              ie_model: this.jsxModeleBtnFiltre.bind(this),
              title: GlossaireListe_1.TradGlossaireListe.Filtrer,
            },
            IE.jsx.str(IconeSvgFiltre_1.IconeSvgFiltre, null),
            IE.jsx.str(IconeSvgRond_1.IconeSvgRond, {
              class: [
                Divers_css_1.SD.iconeBadge,
                Divers_css_1.SD.badgeBr,
                Divers_css_1.SD.badgeOrange,
              ],
              ie_display: () => {
                var _a;
                return (
                  ((_a = this.lesFiltresSontVides) === null || _a === void 0
                    ? void 0
                    : _a.call(this)) === false
                );
              },
            }),
          ),
        );
      }
      jsxModeleBtnFiltre() {
        return {
          event: () => {
            var _a;
            this.EstAffiche = !this.EstAffiche;
            ObjetStyle_1.GStyle.setDisplay(this.Nom, this.EstAffiche, 200);
            if (this.EstAffiche) {
              ObjetHtml_1.GHtml.getParentScrollable(this.Nom).scrollTop = 0;
            }
            (_a = this.callbackSurBtnFiltre) === null || _a === void 0
              ? void 0
              : _a.call(this);
          },
          getSelection: () => {
            return this.EstAffiche;
          },
          getTitle: () => {
            var _a;
            return (
              (_a = this.lesFiltresSontVides) === null || _a === void 0
                ? void 0
                : _a.call(this)
            )
              ? GlossaireListe_1.TradGlossaireListe.Filtrer
              : GlossaireListe_1.TradGlossaireListe.FiltrerActif;
          },
          getDisabled: () => {
            var _a;
            return (
              ((_a = this.getDisabledBtnFiltre) === null || _a === void 0
                ? void 0
                : _a.call(this)) || false
            );
          },
        };
      }
      jsxModelBtnReinitFiltres() {
        return {
          event: () => {
            var _a;
            (_a = this.reinitFiltres) === null || _a === void 0
              ? void 0
              : _a.call(this);
          },
        };
      }
    }
    const Filtre = ({ children, idBtnFiltre, parametres }) => {
      const lParamsIdent = {
        create: () => new ObjetFiltre(),
        start: (aInstance) => {
          aInstance.setDonnees(children, parametres);
          aInstance.setHtmlBoutonFiltre(idBtnFiltre);
        },
      };
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        IEHtml_1.IEHtml.getCommentHtmlDebug(`<Filtre>`),
        IE.jsx.str('div', { ie_identite: () => lParamsIdent }),
      );
    };
    exports.Filtre = Filtre;
  },
  fn: 'objetfiltre.js',
});