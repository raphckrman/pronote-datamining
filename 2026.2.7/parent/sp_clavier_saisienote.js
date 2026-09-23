IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Clavier_SaisieNote = void 0;
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const Enumere_Annotation_1 = require('@cp/script/Enumere/Enumere_Annotation');
    const TypeNote_1 = require('@cp/script/Type/TypeNote');
    const ClavierVirtuel_1 = require('@cp/Produit/Script/ClavierVirtuel');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    var EGenreToucheClavierNote;
    (function (EGenreToucheClavierNote) {
      EGenreToucheClavierNote['annotation'] = 'annotation';
      EGenreToucheClavierNote['numerique'] = 'numerique';
      EGenreToucheClavierNote['action'] = 'action';
    })(EGenreToucheClavierNote || (EGenreToucheClavierNote = {}));
    const EGenreToucheClavierNoteUtil = {
      getInfosAffichage(aGenreTouche) {
        switch (aGenreTouche) {
          case EGenreToucheClavierNote.annotation:
            return { css: 'toucheAnnot' };
          case EGenreToucheClavierNote.numerique:
            return { css: 'toucheNum' };
          case EGenreToucheClavierNote.action:
            return { css: 'toucheAction' };
        }
      },
      getType(aGenreTouche) {
        switch (aGenreTouche) {
          case EGenreToucheClavierNote.action:
            return ClavierVirtuel_1.ETypeToucheClavier.image;
        }
        return ClavierVirtuel_1.ETypeToucheClavier.texte;
      },
    };
    class Clavier_SaisieNote extends ClavierVirtuel_1.Clavier {
      constructor(...aParams) {
        super(...aParams);
        this.erreurAffichee = false;
        this.idTouche = {
          valider: GUID_1.GUID.getId(),
          supprimer: GUID_1.GUID.getId(),
          chiffre: GUID_1.GUID.getId(),
          separateurDecimal: GUID_1.GUID.getId(),
          signeMoins: GUID_1.GUID.getId(),
          annotation: GUID_1.GUID.getId(),
          basculeEcran: GUID_1.GUID.getId(),
        };
        this.setOptions({
          metier: {
            avecAnnotations: false,
            avecSeparateurDecimal: false,
            avecSigneMoins: false,
            avecFocusSurNote: true,
            htmlContexte: '',
          },
          grille: { nbLignes: 0 },
        });
        this.options.evntSurCloseStart = () => {
          if (!this._surValidationNote) {
            this.callback.appel(null);
          }
        };
        const lListeAnnotationsCompletes = this.getTabAnnotations();
        this.listeAnnotations = [];
        for (let i = 0; i < lListeAnnotationsCompletes.length; i++) {
          if (
            TypeNote_1.TypeNote.estAnnotationPermise(
              lListeAnnotationsCompletes[i],
            )
          ) {
            this.listeAnnotations.push(lListeAnnotationsCompletes[i]);
          }
        }
        this.erreurAffichee = false;
        this.callbackSurTouche = null;
      }
      afficher() {
        this.definirClavier();
        super.afficher();
      }
      avecBorderBottomZoneVisu() {
        return !!this.options.metier.avecFocusSurNote;
      }
      setFocusSurNote(aValue) {
        var _a;
        if (
          !(
            ((_a = this === null || this === void 0 ? void 0 : this.options) ===
              null || _a === void 0
              ? void 0
              : _a.metier) && 'avecFocusSurNote' in this.options.metier
          )
        ) {
          return;
        }
        this.options.metier.avecFocusSurNote = aValue;
        const lZoneVisu = ObjetHtml_1.GHtml.getElement(this.ids.panelVisu);
        if (lZoneVisu) {
          if (this.avecBorderBottomZoneVisu()) {
            lZoneVisu.style.border = '';
            lZoneVisu.style.borderBottomColor = (0,
            AccessApp_1.getApp)().getCouleur().themeCouleur.foncee;
          } else {
            lZoneVisu.style.border = 'none';
          }
        }
      }
      nbEcrans() {
        return this.options.metier.avecAnnotations
          ? Math.ceil(
              this.listeAnnotations.length / this.options.grille.nbLignes,
            )
          : 1;
      }
      afficherErreurNoteInvalide(aMsg) {
        this.actualiserMsgErreur(aMsg);
        this.erreurAffichee = true;
        this.reIntialiserValeur();
      }
      dessinerContexte() {
        const H = [];
        H.push('<div class="InlineBlock AlignementMilieuVertical">');
        H.push(this.options.metier.htmlContexte);
        H.push('</div>');
        H.push(
          '<div style="height:100%" class="InlineBlock AlignementMilieuVertical">&nbsp;</div>',
        );
        return H.join('');
      }
      definirTouches() {
        const lTabTouches = [];
        lTabTouches.push(
          this._newToucheAction({
            id: this.idTouche.valider,
            valeur: 'icon_ok',
            hint: 'Valider',
          }),
        );
        lTabTouches.push(
          this._newToucheAction({
            id: this.idTouche.supprimer,
            valeur: 'icon_delete_clavier_mobile',
            hint: GlossaireCP_1.TradGlossaireCP.Supprimer,
          }),
        );
        for (let i = 0, lNbr = 10; i < lNbr; i++) {
          lTabTouches.push(
            this._newToucheNumerique({
              id: this._getIdToucheChiffre(i),
              valeur: i + '',
            }),
          );
        }
        if (this.options.metier.avecSeparateurDecimal) {
          lTabTouches.push(
            this._newToucheNumerique({
              id: this.idTouche.separateurDecimal,
              valeur: ',',
            }),
          );
        }
        if (this.options.metier.avecSigneMoins) {
          lTabTouches.push(
            this._newToucheNumerique({
              id: this.idTouche.signeMoins,
              valeur: '-',
            }),
          );
        }
        if (this.options.metier.avecAnnotations) {
          for (let i = 0, lNbr = this.listeAnnotations.length; i < lNbr; i++) {
            const lGenreAnnotation = this.listeAnnotations[i];
            lTabTouches.push(
              this._newToucheAnnotation({
                id: this._getIdToucheAnnotation(lGenreAnnotation),
                valeur: new TypeNote_1.TypeNote().getChaineAnnotationDeGenre(
                  lGenreAnnotation,
                ),
              }),
            );
          }
        }
        if (this.nbEcrans() > 1) {
          lTabTouches.push(
            this._newToucheAnnotation({
              id: this.idTouche.basculeEcran,
              valeur: this.getLibelleToucheBascule(),
            }),
          );
        }
        return lTabTouches;
      }
      definirGrille() {
        const lGrille = {
          nbLignes: this.options.grille.nbLignes,
          nbColonnes: this.options.metier.avecAnnotations ? 5 : 4,
          nbEcrans: this.nbEcrans(),
          cells: [],
        };
        for (let i = 0, lNbr = lGrille.nbLignes; i < lNbr; i++) {
          lGrille.cells[i] = [];
        }
        let lIndiceCol, lIndiceLigne, lTouche;
        if (this.options.metier.avecAnnotations) {
          lIndiceCol = 0;
          lIndiceLigne = 0;
          let lIndiceEcran = this.getIndiceEcran();
          for (let i = 0, lNbr = this.listeAnnotations.length; i < lNbr; i++) {
            const lAnnotation = this.listeAnnotations[i];
            if (lIndiceLigne >= lGrille.nbLignes) {
              lIndiceLigne = 0;
              lIndiceEcran++;
            }
            if (!$.isArray(lGrille.cells[lIndiceLigne][lIndiceCol])) {
              lGrille.cells[lIndiceLigne][lIndiceCol] = [];
            }
            lTouche = this._getToucheParId({
              id: this._getIdToucheAnnotation(lAnnotation),
            });
            lGrille.cells[lIndiceLigne][lIndiceCol][lIndiceEcran] = lTouche;
            lIndiceLigne++;
          }
          for (let i = lIndiceLigne, lNbr = lGrille.nbLignes; i < lNbr; i++) {
            if (!$.isArray(lGrille.cells[lIndiceLigne][lIndiceCol])) {
              lGrille.cells[lIndiceLigne][lIndiceCol] = [];
            }
            lGrille.cells[lIndiceLigne][lIndiceCol][lIndiceEcran] = null;
            lIndiceLigne++;
          }
        }
        let lChiffre = 0;
        lIndiceCol = this.options.metier.avecAnnotations ? 2 : 1;
        lGrille.cells[3][lIndiceCol] = this._getToucheParId({
          id: this._getIdToucheChiffre(lChiffre),
        });
        let lNbr = 3;
        let lNbr2;
        const lDebCol = this.options.metier.avecAnnotations ? 1 : 0;
        lChiffre = 1;
        for (lIndiceLigne = 0; lIndiceLigne < lNbr; lIndiceLigne++) {
          for (
            lIndiceCol = lDebCol, lNbr2 = 3 + lDebCol;
            lIndiceCol < lNbr2;
            lIndiceCol++
          ) {
            lTouche = this._getToucheParId({
              id: this._getIdToucheChiffre(lChiffre),
            });
            lGrille.cells[lIndiceLigne][lIndiceCol] = lTouche;
            lChiffre++;
          }
        }
        lIndiceCol = this.options.metier.avecAnnotations ? 4 : 3;
        lGrille.cells[0][lIndiceCol] = this.options.metier.avecSigneMoins
          ? this._getToucheParId({ id: this.idTouche.signeMoins })
          : null;
        lGrille.cells[1][lIndiceCol] = this.options.metier.avecSeparateurDecimal
          ? this._getToucheParId({ id: this.idTouche.separateurDecimal })
          : null;
        lGrille.cells[2][lIndiceCol] = this._getToucheParId({
          id: this.idTouche.supprimer,
        });
        const lToucheValider = this._getToucheParId({
          id: this.idTouche.valider,
        });
        lGrille.cells[3][lIndiceCol - 1] = lToucheValider;
        lGrille.cells[3][lIndiceCol] = undefined;
        lIndiceCol = this.options.metier.avecAnnotations ? 1 : 0;
        lGrille.cells[3][lIndiceCol] = this.options.metier.avecAnnotations
          ? this._getToucheParId({ id: this.idTouche.basculeEcran })
          : null;
        return lGrille;
      }
      surEvntTouche(aParam) {
        if (this.erreurAffichee) {
          this.actualiserMsgErreur('');
          this.erreurAffichee = false;
        }
        const lStrAvant = this.getStrSaisieCourante();
        let lGenreCurseur = ClavierVirtuel_1.EGenreCurseurClavier.fin;
        const lTouche = aParam.touche;
        switch (lTouche.id) {
          case this.idTouche.basculeEcran:
            this.basculerEcran({ toucheBascule: lTouche });
            break;
          case this.idTouche.supprimer:
            if (lStrAvant !== '') {
              if (
                this._estStrToucheAnnotation(lStrAvant) ||
                this.estCurseurClavier(
                  ClavierVirtuel_1.EGenreCurseurClavier.selection,
                )
              ) {
                this.viderSaisieCourante();
              } else {
                this.setStrSaisieCourante(
                  lStrAvant.substring(0, lStrAvant.length - 1),
                );
              }
            }
            break;
          case this.idTouche.valider: {
            if (this.options.metier.avecSeparateurDecimal) {
              const lToucheSep = this._getToucheParId({
                id: this.idTouche.separateurDecimal,
              });
              const lCharSep = lToucheSep.getValeur();
              if (new RegExp(lCharSep + '$').test(lStrAvant)) {
                this.concatSaisieCourante('0');
              }
            }
            if (this.options.metier.avecSigneMoins && lStrAvant.length === 1) {
              const lToucheMoins = this._getToucheParId({
                id: this.idTouche.signeMoins,
              });
              if (lStrAvant === lToucheMoins.getValeur()) {
                this.viderSaisieCourante();
              }
            }
            const lResult = TypeNote_1.TypeNote.validerNote(
              this.getStrSaisieCourante(),
              {
                min: this.options.metier.min,
                max: this.options.metier.max,
                sansNotePossible: this.options.metier.sansNotePossible,
                avecAnnotation: this.options.metier.avecAnnotations,
                avecVirgule: this.options.metier.avecSeparateurDecimal,
              },
            );
            if (lResult.estValide) {
              this._surValidationNote = true;
              try {
                this.callback.appel(lResult.note);
                this.fermer();
              } finally {
                this._surValidationNote = false;
              }
            } else {
              this.afficherErreurNoteInvalide(lResult.message);
              lGenreCurseur = ClavierVirtuel_1.EGenreCurseurClavier.selection;
            }
            break;
          }
          case this.idTouche.separateurDecimal:
            if (this.options.metier.avecSeparateurDecimal) {
              if (
                lStrAvant === '' ||
                this.estCurseurClavier(
                  ClavierVirtuel_1.EGenreCurseurClavier.selection,
                )
              ) {
                this.setStrSaisieCourante('0' + lTouche.getValeur());
              } else {
                if (!this._estStrToucheAnnotation(lStrAvant)) {
                  const lExp = new RegExp('[0-9]$');
                  if (
                    lExp.test(lStrAvant) &&
                    lStrAvant.indexOf(lTouche.getValeur()) === -1
                  ) {
                    this.concatSaisieCourante(lTouche.getValeur());
                  }
                }
              }
            } else {
            }
            break;
          case this.idTouche.signeMoins:
            if (this.options.metier.avecSigneMoins) {
              if (
                lStrAvant === '' ||
                this.estCurseurClavier(
                  ClavierVirtuel_1.EGenreCurseurClavier.selection,
                )
              ) {
                this.setStrSaisieCourante(lTouche.getValeur());
              }
            } else {
            }
            break;
          default:
            if (this._estIdToucheChiffre(lTouche.id)) {
              if (
                lStrAvant !== '' &&
                (this._estStrToucheAnnotation(lStrAvant) ||
                  this.estCurseurClavier(
                    ClavierVirtuel_1.EGenreCurseurClavier.selection,
                  ))
              ) {
                this.setStrSaisieCourante('' + lTouche.getValeur());
              } else {
                this.concatSaisieCourante('' + lTouche.getValeur());
              }
            } else if (
              this.options.metier.avecAnnotations &&
              this._estIdToucheAnnotation(lTouche.id)
            ) {
              this.setStrSaisieCourante(lTouche.getValeur());
            }
        }
        this.setCurseurClavier(lGenreCurseur);
        const lStrApres = this.getStrSaisieCourante();
        if (lStrAvant !== lStrApres) {
          this.actualiserVisuSaisie();
        }
        if (MethodesObjet_1.MethodesObjet.isFunction(this.callbackSurTouche)) {
          this.callbackSurTouche();
        }
      }
      setCallbackSurTouche(aCallback) {
        this.callbackSurTouche = aCallback;
      }
      estToucheDouble(aTouche) {
        return aTouche.id === this.idTouche.valider;
      }
      _getIdToucheChiffre(aChiffre) {
        return this.idTouche.chiffre + '_' + aChiffre;
      }
      _estIdToucheChiffre(aId) {
        return aId.startsWith(this.idTouche.chiffre + '_');
      }
      _getIdToucheAnnotation(aGenreAnnotation) {
        return this.idTouche.annotation + '_' + aGenreAnnotation;
      }
      _estIdToucheAnnotation(aId) {
        return aId.startsWith(this.idTouche.annotation + '_');
      }
      _getToucheParId(aParam) {
        for (let i = 0, lNbr = this.listeTouches.length; i < lNbr; i++) {
          const lTouche = this.listeTouches[i];
          if (lTouche.id === aParam.id) {
            return lTouche;
          }
        }
        return null;
      }
      _getNoteSaisie() {
        let lStrAvant = `${this.getStrSaisieCourante()}`;
        if (this.options.metier.avecSeparateurDecimal) {
          const lToucheSep = this._getToucheParId({
            id: this.idTouche.separateurDecimal,
          });
          const lCharSep = lToucheSep.getValeur();
          if (new RegExp(lCharSep + '$').test(lStrAvant)) {
            lStrAvant += '0';
          }
        }
        if (this.options.metier.avecSigneMoins && lStrAvant.length === 1) {
          const lToucheMoins = this._getToucheParId({
            id: this.idTouche.signeMoins,
          });
          if (lStrAvant === lToucheMoins.getValeur()) {
            lStrAvant = '';
          }
        }
        const lResult = TypeNote_1.TypeNote.validerNote(lStrAvant, {
          min: this.options.metier.min,
          max: this.options.metier.max,
          sansNotePossible: this.options.metier.sansNotePossible,
          avecAnnotation: this.options.metier.avecAnnotations,
          avecVirgule: this.options.metier.avecSeparateurDecimal,
        });
        return { estValide: lResult.estValide, note: lResult.note };
      }
      estNoteSaisieVide() {
        var _a, _b;
        return !!((_b =
          (_a = this.getNoteSaisie()) === null || _a === void 0
            ? void 0
            : _a.estUneNoteVide) === null || _b === void 0
          ? void 0
          : _b.call(_a));
      }
      getNoteSaisie() {
        const lResult = this._getNoteSaisie();
        if (lResult.estValide) {
          return lResult.note;
        }
        return null;
      }
      _newTouche(aParam) {
        const lTouche = new ClavierVirtuel_1.ToucheClavierVirtuel({
          pere: this,
          evenement: this.surEvntTouche.bind(this),
        });
        lTouche.setDonnees({
          type: EGenreToucheClavierNoteUtil.getType(aParam.genreTouche),
          affichage: EGenreToucheClavierNoteUtil.getInfosAffichage(
            aParam.genreTouche,
          ),
          valeur: aParam.valeur,
          hint: aParam.hint,
          genreTouche: aParam.genreTouche,
          id: aParam.id,
        });
        return lTouche;
      }
      _newToucheAnnotation(aParam) {
        const lParam = { genreTouche: EGenreToucheClavierNote.annotation };
        return this._newTouche($.extend({}, lParam, aParam));
      }
      _newToucheNumerique(aParam) {
        const lParam = { genreTouche: EGenreToucheClavierNote.numerique };
        return this._newTouche($.extend({}, lParam, aParam));
      }
      _newToucheAction(aParam) {
        const lParam = { genreTouche: EGenreToucheClavierNote.action };
        return this._newTouche($.extend({}, lParam, aParam));
      }
      getTabAnnotations() {
        return [
          Enumere_Annotation_1.EGenreAnnotation.absent,
          Enumere_Annotation_1.EGenreAnnotation.dispense,
          Enumere_Annotation_1.EGenreAnnotation.nonNote,
          Enumere_Annotation_1.EGenreAnnotation.nonRendu,
          Enumere_Annotation_1.EGenreAnnotation.inapte,
          Enumere_Annotation_1.EGenreAnnotation.absentZero,
          Enumere_Annotation_1.EGenreAnnotation.nonRenduZero,
          Enumere_Annotation_1.EGenreAnnotation.felicitations,
        ];
      }
      _estStrToucheAnnotation(aStr) {
        if (this.options.metier.avecAnnotations) {
          const lNote = new TypeNote_1.TypeNote();
          for (let i = 0, lNbr = this.listeAnnotations.length; i < lNbr; i++) {
            const lGenreAnnotation = this.listeAnnotations[i];
            if (lNote.getChaineAnnotationDeGenre(lGenreAnnotation) === aStr) {
              return true;
            }
          }
        }
        return false;
      }
    }
    exports.Clavier_SaisieNote = Clavier_SaisieNote;
  },
  fn: 'clavier_saisienote.js',
});