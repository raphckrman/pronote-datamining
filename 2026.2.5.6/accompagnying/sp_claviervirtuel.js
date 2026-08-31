IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreCurseurClavier =
      exports.ETypeToucheClavier =
      exports.ToucheClavierVirtuel =
      exports.Clavier =
        void 0;
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const Enumere_OrientationAffichage_1 = require('@cp/script/Enumere/Enumere_OrientationAffichage');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ModaleBottomSheet_1 = require('@cp/Produit/Script/ModaleBottomSheet');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    require('@cp/Produit/Css/ClavierVirtuel.css');
    const IEHtml_BtnImage_css_1 = require('@cp/Produit/Css/IEHtml.BtnImage.css');
    var ETypeToucheClavier;
    (function (ETypeToucheClavier) {
      ETypeToucheClavier['texte'] = 'texte';
      ETypeToucheClavier['image'] = 'image';
    })(
      ETypeToucheClavier ||
        (exports.ETypeToucheClavier = ETypeToucheClavier = {}),
    );
    var EGenreCurseurClavier;
    (function (EGenreCurseurClavier) {
      EGenreCurseurClavier['selection'] = 'selection';
      EGenreCurseurClavier['fin'] = 'fin';
    })(
      EGenreCurseurClavier ||
        (exports.EGenreCurseurClavier = EGenreCurseurClavier = {}),
    );
    class Clavier extends ModaleBottomSheet_1.ModaleBottomSheet {
      constructor(...aParams) {
        super(...aParams);
        this.strSaisieCourante = '';
        this.strValeurInit = '';
        this.indiceEcran = 0;
        this.curseur = EGenreCurseurClavier.selection;
        this.setOptions({
          orientation:
            Enumere_OrientationAffichage_1.EGenreOrientationAffichage
              .Horizontal,
          contexte: {
            avec: true,
            couleurFond: (0, AccessApp_1.getApp)().getCouleur().themeNeutre
              .moyen1,
          },
          visuSaisie: { style: '', class: '' },
          contenueAdditionnel: {
            avec: false,
            couleurFond: (0, AccessApp_1.getApp)().getCouleur().themeNeutre
              .moyen1,
          },
          paveSaisie: {
            avec: true,
            couleurFond: (0, AccessApp_1.getApp)().getCouleur().themeNeutre
              .claire,
          },
        });
        this.ids = $.extend(this.ids, {
          panelClavier: GUID_1.GUID.getId(),
          panelContexte: GUID_1.GUID.getId(),
          panelVisu: GUID_1.GUID.getId(),
          zoneContenueAdditionnel: GUID_1.GUID.getId(),
          msgErreur: GUID_1.GUID.getId(),
        });
        this.dimensions = { hauteurContexte: 60, largeurZoneVisu: 80 };
      }
      estCurseurClavier(aGenreCurseurClavier) {
        return this.curseur === aGenreCurseurClavier;
      }
      setCurseurClavier(aGenreCurseurClavier) {
        this.curseur = aGenreCurseurClavier;
      }
      setOptions(aParam) {
        super.setOptions(aParam);
        this.strValeurInit = aParam.valeurInit;
        this.strSaisieCourante = aParam.valeurInit;
        return this;
      }
      getValeurInit() {
        return this.strValeurInit;
      }
      reIntialiserValeur() {
        this.setStrSaisieCourante(this.getValeurInit());
        this.actualiserVisuSaisie();
        this.setCurseurClavier(EGenreCurseurClavier.selection);
      }
      definirTouches() {
        return [];
      }
      definirGrille() {
        return { nbLignes: 0, nbColonnes: 0, cells: [] };
      }
      dessinerContexte() {
        return '';
      }
      surEvntTouche(aParam) {}
      estToucheDouble(aTouche) {
        return false;
      }
      definirClavier() {
        this.listeTouches = this.definirTouches();
        this.grille = this.definirGrille();
      }
      avecBorderBottomZoneVisu() {
        return true;
      }
      getHtmlContenu() {
        const H = [];
        const lHauteurContexte = this.dimensions.hauteurContexte;
        H.push(
          '<div class="clavierVirtuel SansSelectionTexte disable-dark-mode">',
        );
        H.push(
          '<div class="color-red-moyen EspaceGauche EspaceDroit" style="height:10px; background-color:',
          this.options.contexte.couleurFond,
          ';" id="',
          this.ids.msgErreur,
          '"></div>',
        );
        H.push(
          '<div class="NoWrap Espace" style="height:',
          lHauteurContexte,
          'px; background-color:',
          this.options.contexte.couleurFond,
          ';">',
        );
        H.push(
          '<div style="height:100%; width:calc(100% - ',
          this.dimensions.largeurZoneVisu,
          'px);" class="InlineBlock AlignementBas NoWrap" id="',
          this.ids.panelContexte,
          '">',
        );
        H.push(this.dessinerContexte());
        H.push('</div>');
        H.push(
          '<div style="height:100%; width:',
          this.dimensions.largeurZoneVisu,
          'px;',
          this.avecBorderBottomZoneVisu()
            ? ' border-bottom-color: ' +
                (0, AccessApp_1.getApp)().getCouleur().themeCouleur.foncee +
                ';'
            : 'border:none;',
          '" class="zoneVisuSaisie InlineBlock AlignementBas AlignementDroit NoWrap" id="',
          this.ids.panelVisu,
          '">',
        );
        H.push(this.dessinerVisuSaisie());
        H.push('</div>');
        H.push('</div>');
        H.push(
          `<div style="background-color:${this.options.contenueAdditionnel.couleurFond}; padding:5px;" id="${this.ids.zoneContenueAdditionnel}">${this.dessinerContenueAdditionnel()}</div>`,
        );
        H.push(
          '<div style="height:calc(100% - ',
          lHauteurContexte,
          'px)" id="',
          this.ids.panelClavier,
          '">',
        );
        H.push(this.dessinerClavier());
        H.push('</div>');
        H.push('</div>');
        return H.join('');
      }
      dessinerClavier() {
        if (!this.options.paveSaisie.avec) {
          return '';
        }
        const H = [];
        const lMarge = 5;
        H.push(
          '<div class="paveNum" style="display:flex; flex-direction:column; justify-content:space-around; height:100%; background-color:',
          this.options.paveSaisie.couleurFond,
          '; padding:',
          lMarge,
          'px;">',
        );
        for (
          let lLigne = 0, lNbr = this.grille.nbLignes;
          lLigne < lNbr;
          lLigne++
        ) {
          H.push(
            '<div class="ligneClavierVirtuel" style="display:flex; flex-direction:row; justify-content:space-around; height:calc(100% / ',
            this.grille.nbLignes,
            ');">',
          );
          for (
            let lCol = 0, lNbr2 = this.grille.nbColonnes;
            lCol < lNbr2;
            lCol++
          ) {
            const lTouche = this._getToucheDeCell({
              ligne: lLigne,
              col: lCol,
              ecran: this.indiceEcran,
            });
            if (lTouche !== null && lTouche !== undefined) {
              H.push(
                lTouche.dessinerTouche({
                  estToucheDouble: this.estToucheDouble(lTouche),
                  nbColonnes: this.grille.nbColonnes,
                  marge: lMarge,
                }),
              );
            } else {
              if (lTouche === null) {
                H.push(
                  '<div style="background-color:transparent; margin:',
                  lMarge,
                  'px; width:calc(100% / ',
                  this.grille.nbColonnes,
                  ');">&nbsp;</div>',
                );
              }
            }
          }
          H.push('</div>');
        }
        H.push('</div>');
        return H.join('');
      }
      dessinerContenueAdditionnel() {
        var _a, _b;
        if (
          !((_b =
            (_a = this.options) === null || _a === void 0
              ? void 0
              : _a.contenueAdditionnel) === null || _b === void 0
            ? void 0
            : _b.avec)
        ) {
          return '';
        }
        return this.options.contenueAdditionnel.html;
      }
      actualiserMsgErreur(aMsg) {
        ObjetHtml_1.GHtml.setHtml(this.ids.msgErreur, aMsg, { instance: this });
      }
      actualiserClavier() {
        ObjetHtml_1.GHtml.setHtml(
          this.ids.panelClavier,
          this.dessinerClavier(),
          { instance: this },
        );
      }
      masquerClavier() {
        ObjetHtml_1.GHtml.setDisplay(this.ids.panelClavier, false);
      }
      afficherClavier() {
        ObjetHtml_1.GHtml.setDisplay(this.ids.panelClavier, true);
      }
      getStrSaisieCourante() {
        return this.strSaisieCourante;
      }
      setStrSaisieCourante(aValeur) {
        this.strSaisieCourante = '' + aValeur;
      }
      viderSaisieCourante() {
        this.setStrSaisieCourante('');
      }
      concatSaisieCourante(aValeur) {
        this.setStrSaisieCourante(this.strSaisieCourante + aValeur);
      }
      dessinerVisuSaisie() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const H = [];
        H.push(
          `<div class="InlineBlock AlignementBas SansSelectionTexte ${(_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.visuSaisie) === null || _b === void 0 ? void 0 : _b.class}" style="${(_d = (_c = this.options) === null || _c === void 0 ? void 0 : _c.visuSaisie) === null || _d === void 0 ? void 0 : _d.style}">`,
        );
        H.push(this.getStrSaisieCourante());
        H.push('</div>');
        H.push(
          '<div style="height:100%" class="InlineBlock AlignementBas">&nbsp;</div>',
        );
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            'div',
            {
              class: [
                'InlineBlock',
                'AlignementBas',
                'SansSelectionTexte',
                (_f =
                  (_e = this.options) === null || _e === void 0
                    ? void 0
                    : _e.visuSaisie) === null || _f === void 0
                  ? void 0
                  : _f.class,
              ],
              style:
                (_h =
                  (_g = this.options) === null || _g === void 0
                    ? void 0
                    : _g.visuSaisie) === null || _h === void 0
                  ? void 0
                  : _h.style,
            },
            this.getStrSaisieCourante(),
          ),
          IE.jsx.str(
            'div',
            { style: 'height:100%', class: 'InlineBlock AlignementBas' },
            '\u00A0',
          ),
        );
      }
      actualiserVisuSaisie() {
        ObjetHtml_1.GHtml.setHtml(
          this.ids.panelVisu,
          this.dessinerVisuSaisie(),
          { instance: this },
        );
      }
      getIndiceEcran() {
        return this.indiceEcran;
      }
      nbEcrans() {
        return 1;
      }
      getLibelleToucheBascule() {
        return this.indiceEcran + 1 + '/' + this.nbEcrans();
      }
      basculerIndiceEcran() {
        this.indiceEcran++;
        const lNbrEcrans = this.nbEcrans();
        this.indiceEcran = this.indiceEcran % lNbrEcrans;
      }
      basculerEcran(aParam) {
        this.basculerIndiceEcran();
        aParam.toucheBascule.setContenuTouche(this.getLibelleToucheBascule());
        this.actualiserClavier();
      }
      _getToucheDeCell(aParam) {
        const lLigne = this.grille.cells[aParam.ligne];
        const lCell = lLigne[aParam.col];
        let lTouche = lCell;
        if (lCell !== null && lCell !== undefined) {
          if (Array.isArray(lCell)) {
            lTouche = lCell[aParam.ecran];
          } else {
            lTouche = lCell;
          }
        }
        return lTouche;
      }
    }
    exports.Clavier = Clavier;
    class ToucheClavierVirtuel extends ObjetIdentite_1.Identite {
      setDonnees(aParam) {
        this.contenu = {
          type: aParam.type,
          valeur: aParam.valeur,
          hint: aParam.hint || '',
        };
        const lAff = aParam.affichage;
        this.affichage = lAff;
        this.id = aParam.id;
        this.genreTouche = aParam.genreTouche;
      }
      getValeur() {
        return this.contenu.valeur;
      }
      setValeur(aValeur) {
        this.contenu.valeur = aValeur;
      }
      getType() {
        return this.contenu.type;
      }
      getHint() {
        return this.contenu.hint;
      }
      evntSurTouche() {
        if (window.navigator && window.navigator.vibrate) {
          window.navigator.vibrate(20);
        }
        this.callback.appel({ touche: this });
      }
      dessinerTouche(aParam) {
        const lMarge = aParam.marge ? aParam.marge.toString() : '';
        const lWitdh = aParam.estToucheDouble
          ? 'calc(((100% / ' + aParam.nbColonnes + ') + ' + lMarge + 'px) * 2 )'
          : 'calc(100% / ' + aParam.nbColonnes + ')';
        let lAriaLabel = '';
        if (this.getType() === ETypeToucheClavier.image) {
          lAriaLabel = this.getHint();
        }
        return IE.jsx.str(
          'div',
          {
            role: 'button',
            tabindex: '0',
            ie_eventmap: {
              name: 'dessinerTouche',
              validation: () => this.evntSurTouche(),
            },
            'aria-label': lAriaLabel,
            class: [
              IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple,
              'NoWrap z-depth-1 toucheClavierVirtuel SansSelectionTexte',
              this.affichage.css,
              'ligneClavierVirtuel',
            ],
            style: { margin: lMarge + 'px', width: lWitdh },
          },
          IE.jsx.str(
            'div',
            {
              id: this.id,
              style: 'width:100%;',
              class:
                'InlineBlock AlignementMilieuVertical AlignementMilieu contenuToucheClavier',
            },
            this.dessinerContenu(),
          ),
          IE.jsx.str(
            'div',
            {
              class: 'InlineBlock AlignementMilieuVertical',
              style: 'height:100%; width:0px;',
            },
            '\u00A0',
          ),
        );
      }
      dessinerContenu() {
        const H = [];
        const lValeur = this.getValeur();
        if (this.getType() === ETypeToucheClavier.image) {
          H.push(
            IE.jsx.str('i', {
              role: 'presentation',
              class: [
                'InlineBlock',
                IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnImageIcon,
                IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnImage,
                lValeur,
              ],
            }),
          );
        } else {
          H.push(lValeur);
        }
        return H.join('');
      }
      setContenuTouche(aValeurContenu) {
        this.setValeur(aValeurContenu);
        ObjetHtml_1.GHtml.setHtml(this.id, this.dessinerContenu());
      }
    }
    exports.ToucheClavierVirtuel = ToucheClavierVirtuel;
  },
  fn: 'claviervirtuel.js',
});