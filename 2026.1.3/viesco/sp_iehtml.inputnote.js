IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.InputNote = void 0;
    const TypeNote_1 = require('@cp/script/Type/TypeNote');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const UtilsInputNote_EspaceMobile_1 = require('@cp/script/UtilsInputNote_EspaceMobile');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const Clavier_SaisieNote_1 = require('@cp/Produit/Script/Clavier_SaisieNote');
    const InputNote = (aProps) => {
      return IE.jsx.str(
        'input',
        Object.assign({ [IEHtml_1.IEHtml.attrJsxComp]: 'InputNote' }, aProps),
      );
    };
    exports.InputNote = InputNote;
    IEHtml_1.IEHtml.addJsxComponent(
      'InputNote',
      (aContexteCourant, aOutils) => {
        let lJInput,
          lRacine,
          lEnFocus = false,
          lNomModele = aOutils.getModel(aContexteCourant),
          lOptions = (0,
          UtilsInputNote_EspaceMobile_1.UtilsInputNoteInitOptions)(),
          lValueInput = null;
        let lModeleInputInterne;
        if (lNomModele) {
          const lGetNote = aOutils.getAccesParametresModel(
            'getNote',
            aContexteCourant,
          );
          const lSetNote = aOutils.getAccesParametresModel(
            'setNote',
            aContexteCourant,
          );
          const lGetDisabled = aOutils.getAccesParametresModel(
            'getDisabled',
            aContexteCourant,
          );
          let lDeclencherExitChange = false;
          if (lGetNote.estFonction && lSetNote.estFonction) {
            if (IE.estMobile) {
              const lGetNoteFormat = function (aNote) {
                let lVal = '';
                if (aNote) {
                  if (!lOptions.avecVirgule || !lOptions.afficherAvecVirgule) {
                    lVal = aNote.getNoteSansDecimaleForcee();
                  } else {
                    lVal = aNote.getNote();
                  }
                }
                return lVal;
              };
              const lFuncGetDisabled = () => {
                return lGetDisabled.estFonction
                  ? lGetDisabled.callback([aContexteCourant.node])
                  : false;
              };
              let lNoteFormat = lGetNoteFormat(
                lGetNote.callback([aContexteCourant.node]),
              );
              lModeleInputInterne = () => {
                return {
                  getValue() {
                    return lNoteFormat;
                  },
                  setValue() {},
                  getDisabled() {
                    return lFuncGetDisabled();
                  },
                  node(aNode) {
                    $(aNode).on('validation', () => {
                      if (lFuncGetDisabled()) {
                        return;
                      }
                      lRacine.classList.add('active');
                      const lClavierSaisieNote =
                        new Clavier_SaisieNote_1.Clavier_SaisieNote({
                          evenement(aValeurSaisie) {
                            lSetNote.callback([
                              aValeurSaisie,
                              aContexteCourant.node,
                            ]);
                            const lNote = lGetNote.callback([
                              aContexteCourant.node,
                            ]);
                            lNoteFormat = lGetNoteFormat(lNote);
                            lRacine.classList.remove('active');
                            IEHtml_1.IEHtml.refresh(true);
                          },
                        });
                      const lNote = lGetNote.callback([aContexteCourant.node]);
                      lClavierSaisieNote.setOptions({
                        valeurInit:
                          lNote === null || lNote === void 0
                            ? void 0
                            : lNote.getNote(),
                        metier: {
                          avecAnnotations: lOptions.avecAnnotation,
                          avecSeparateurDecimal: lOptions.avecVirgule,
                          avecSigneMoins: lOptions.avecSigneMoins,
                          sansNotePossible: lOptions.sansNotePossible,
                          min: lOptions.min,
                          max: lOptions.max,
                          htmlContexte: lOptions.htmlContexte,
                        },
                        grille: { nbLignes: 4 },
                      });
                      lClavierSaisieNote.afficher();
                    });
                  },
                };
              };
            } else {
              lModeleInputInterne = () => {
                return {
                  getValue() {
                    let lNote,
                      lValueTemp = lValueInput;
                    if (lValueTemp === null) {
                      lNote = lGetNote.callback([aContexteCourant.node]);
                      if (lNote) {
                        const lValeurMin = (0,
                        UtilsInputNote_EspaceMobile_1.UtilsInputNoteGetMinMax)(
                          lOptions.min,
                        );
                        const lValeurMax = (0,
                        UtilsInputNote_EspaceMobile_1.UtilsInputNoteGetMinMax)(
                          lOptions.max,
                        );
                        if (
                          !lNote.estUneNoteValide ||
                          !lNote.estUneNoteValide(
                            new TypeNote_1.TypeNote(lValeurMin),
                            new TypeNote_1.TypeNote(lValeurMax),
                            true,
                            true,
                          )
                        ) {
                          lValueTemp = '';
                        } else {
                          lValueTemp = lNote.getNote();
                        }
                      }
                    }
                    if (
                      lValueTemp &&
                      (!lOptions.avecVirgule ||
                        (!lOptions.afficherAvecVirgule && !lEnFocus))
                    ) {
                      lNote = new TypeNote_1.TypeNote(lValueTemp);
                      return lNote.getNoteSansDecimaleForcee();
                    }
                    return lValueTemp === null ? '' : lValueTemp;
                  },
                  interrompreEvent(aEvent, aNode) {
                    if (aEvent.type === 'keypress') {
                      let lValeurMin = (0,
                      UtilsInputNote_EspaceMobile_1.UtilsInputNoteGetMinMax)(
                        lOptions.min,
                      );
                      const lAnnotations = lOptions.listeAnnotations
                        ? new TypeNote_1.TypeNote().getCaractereAnnotation(
                            lOptions.listeAnnotations,
                          )
                        : undefined;
                      if (
                        !TypeNote_1.TypeNote.estCaractereNote(
                          String.fromCharCode(aEvent.which),
                          lOptions.avecAnnotation,
                          lOptions.avecVirgule,
                          lValeurMin < 0,
                          lAnnotations,
                        )
                      ) {
                        return true;
                      }
                      if (lOptions.avecAnnotation) {
                        const lChaineAnnotation =
                          new TypeNote_1.TypeNote().getChaineAnnotationDeCaractere(
                            ObjetNavigateur_1.Navigateur.CaractereTouche,
                          );
                        if (lChaineAnnotation) {
                          const lEstAutorisee =
                            TypeNote_1.TypeNote.estAnnotationPermise(
                              TypeNote_1.TypeNote.getGenreAnnotationDeRaccourci(
                                ObjetNavigateur_1.Navigateur.CaractereTouche,
                              ),
                            );
                          if (lEstAutorisee) {
                            aNode.value = lChaineAnnotation;
                          }
                          return true;
                        }
                      }
                    }
                  },
                  setValue(aValue, aParametres) {
                    lDeclencherExitChange = true;
                    if (lOptions.maxLength > 0 && aValue && aValue.substring) {
                      aValue = aValue.substring(0, lOptions.maxLength - 1);
                    }
                    if (lOptions.avecAnnotation && aValue.length === 1) {
                      const lChaineAnnotation =
                        new TypeNote_1.TypeNote().getChaineAnnotationDeCaractere(
                          aValue[0],
                        );
                      if (lChaineAnnotation) {
                        lValueInput = lChaineAnnotation;
                        aParametres.selectionTexte = true;
                        return;
                      }
                    }
                    const lNote = TypeNote_1.TypeNote.formatStrToNote(
                      aValue,
                      lOptions,
                    );
                    if (lNote || aValue === '') {
                      lValueInput = aValue;
                      if (lNote && lNote.getGenre() > 0) {
                        aParametres.selectionTexte = true;
                      }
                    }
                  },
                  exitChange(aValue, aForceExit) {
                    if (!lDeclencherExitChange) {
                      return;
                    }
                    lDeclencherExitChange = false;
                    lValueInput = null;
                    const lResultValidation = TypeNote_1.TypeNote.validerNote(
                      aValue,
                      lOptions,
                    );
                    if (aForceExit) {
                      aForceExit.resultValidation = lResultValidation;
                    }
                    if (!lResultValidation.estValide) {
                      if (!lOptions.ignorerMessageErreur) {
                        lResultValidation.promiseMessageErreur = new Promise(
                          (aResolve) => {
                            setTimeout(async () => {
                              await (0, AccessApp_1.getApp)()
                                .getMessage()
                                .afficher({
                                  titre: lOptions.titreMessageMinMax,
                                  message: lResultValidation.message,
                                });
                              if (
                                $(document).find(aForceExit.node).length > 0
                              ) {
                                ObjetHtml_1.GHtml.setFocus(aForceExit.node);
                                aForceExit.node.select();
                              }
                              aResolve();
                            }, 200);
                          },
                        );
                      }
                    } else {
                      lSetNote.callback([
                        lResultValidation.note,
                        aContexteCourant.node,
                      ]);
                    }
                    IEHtml_1.IEHtml.refresh();
                  },
                  getDisabled() {
                    return lGetDisabled.estFonction
                      ? lGetDisabled.callback([aContexteCourant.node])
                      : false;
                  },
                  node(aNode) {
                    $(aNode).on({
                      focus: function () {
                        lEnFocus = true;
                        lValueInput = null;
                        IEHtml_1.IEHtml.refresh(true);
                        if (lOptions.selectionSurFocus) {
                          this.select();
                        }
                      },
                      focusout: function () {
                        lEnFocus = false;
                        lValueInput = null;
                        if (!lOptions.afficherAvecVirgule) {
                          IEHtml_1.IEHtml.refresh();
                        }
                      },
                    });
                  },
                };
              };
            }
          } else {
          }
        }
        lJInput = $(
          IE.jsx.str('input', {
            type: 'text',
            readonly: !!IE.estMobile,
            'aria-haspopup': IE.estMobile ? 'dialog' : false,
            ie_model: lModeleInputInterne || false,
          }),
        );
        lRacine = lJInput.get(0);
        lJInput.ieData(aContexteCourant.data);
        aOutils.copyAttributs(aContexteCourant.node, lRacine, (aName) => {
          return aName !== 'type';
        });
        aOutils.replaceNode(aContexteCourant.node, lRacine);
        aOutils.addCommentaireDebug(lRacine, 'InputNote');
        if (lNomModele) {
          aOutils.surNodeEtNodeAfter(aContexteCourant);
          aContexteCourant.node = lRacine;
          const lGetOptions = aOutils.getAccesParametresModel(
            'getOptionsNote',
            aContexteCourant,
          );
          if (lGetOptions.estFonction) {
            Object.assign(
              lOptions,
              lGetOptions.callback([aContexteCourant.node]),
            );
          }
          if (!lOptions.avecVirgule) {
            lOptions.afficherAvecVirgule = false;
          }
          if (lOptions.textAlign) {
            $(lRacine).css('text-align', lOptions.textAlign);
          }
          if (!IE.estMobile) {
            if (!lOptions.sansTooltipMinMax) {
              const lMessage = TypeNote_1.TypeNote.messageValidation(lOptions);
              if (lMessage) {
                if (
                  lRacine.getAttribute('data-tooltip') ||
                  lRacine.getAttribute('ie_tooltiplabel') ||
                  lRacine.getAttribute('ie_tooltipdescribe')
                ) {
                } else {
                  lRacine.setAttribute('ie_tooltipdescribe', lMessage.message);
                }
              }
            }
          }
          aOutils.gererInputText(aContexteCourant, 'text');
        } else {
        }
        return { node: aContexteCourant.node, ignorerInputText: true };
      },
    );
  },
  fn: 'iehtml.inputnote.js',
});