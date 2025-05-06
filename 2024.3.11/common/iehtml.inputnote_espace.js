IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const ObjetHint_1 = require('ObjetHint');
    const TypeNote_1 = require('TypeNote');
    const UtilsInputNote_EspaceMobile_1 = require('UtilsInputNote_EspaceMobile');
    IEHtml.addBalise('ie-inputnote', (aContexteCourant, aOutils) => {
      let lJInput,
        lRacine,
        lContexteCourant,
        lEnFocus = false,
        lNomModele = aOutils.getModel(aContexteCourant),
        lOptions = (0,
        UtilsInputNote_EspaceMobile_1.UtilsInputNoteInitOptions)(),
        lValueInput = null;
      lJInput = $(
        IE.jsx.str('input', { type: 'text', 'ie-model': 'inputNote' }),
      );
      lRacine = lJInput.get(0);
      lJInput.ieData(aContexteCourant.data);
      aOutils.copyAttributs(aContexteCourant.node, lRacine, (aName) => {
        return aName !== 'type';
      });
      aOutils.replaceNode(aContexteCourant.node, lRacine);
      aOutils.addCommentaireDebug(lRacine, 'ie-inputnote');
      if (lNomModele) {
        aOutils.surNodeEtNodeAfter(aContexteCourant);
        aContexteCourant.node = lRacine;
        lContexteCourant = Object.assign({}, aContexteCourant);
        lContexteCourant.ignorerCommentaires = true;
        const lGetOptions = aOutils.getAccesParametresModel(
            'getOptionsNote',
            aContexteCourant,
          ),
          lGetNote = aOutils.getAccesParametresModel(
            'getNote',
            aContexteCourant,
          ),
          lSetNote = aOutils.getAccesParametresModel(
            'setNote',
            aContexteCourant,
          ),
          lGetDisabled = aOutils.getAccesParametresModel(
            'getDisabled',
            aContexteCourant,
          );
        if (lGetOptions.estFonction) {
          Object.assign(lOptions, lGetOptions.callback());
        }
        if (!lOptions.avecVirgule) {
          lOptions.afficherAvecVirgule = false;
        }
        if (lOptions.textAlign) {
          $(lRacine).css('text-align', lOptions.textAlign);
        }
        if (lGetNote.estFonction && lSetNote.estFonction) {
          let lDeclencherExitChange = false;
          lContexteCourant.controleur = Object.assign(
            {
              inputNote: {
                getValue: function () {
                  let lNote,
                    lValueTemp = lValueInput;
                  if (lValueTemp === null) {
                    lNote = lGetNote.callback();
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
                interrompreEvent: function (aEvent) {
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
                          GNavigateur.CaractereTouche,
                        );
                      if (lChaineAnnotation) {
                        const lEstAutorisee =
                          TypeNote_1.TypeNote.estAnnotationPermise(
                            TypeNote_1.TypeNote.getGenreAnnotationDeRaccourci(
                              GNavigateur.CaractereTouche,
                            ),
                          );
                        if (lEstAutorisee) {
                          this.node.value = lChaineAnnotation;
                        }
                        return true;
                      }
                    }
                  }
                },
                setValue: function (aValue, aParametres) {
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
                exitChange: function (aValue, aForceExit) {
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
                    if (lOptions.hintSurErreur) {
                      ObjetHint_1.ObjetHint.start(lResultValidation.message, {
                        sansDelai: true,
                        position: {
                          x:
                            ObjetPosition_1.GPosition.getLeft(this.node) +
                            ObjetPosition_1.GPosition.getWidth(this.node) +
                            10,
                          y: ObjetPosition_1.GPosition.getTop(this.node),
                        },
                      });
                    } else {
                      lResultValidation.promiseMessageErreur = new Promise(
                        (aResolve) => {
                          setTimeout(() => {
                            GApplication.getMessage()
                              .afficher({
                                titre: lOptions.titreMessageMinMax,
                                message: lResultValidation.message,
                              })
                              .then(
                                ((aNode) => {
                                  if ($(document).find(aNode).length > 0) {
                                    ObjetHtml_1.GHtml.setFocus(aNode);
                                    aNode.select();
                                  }
                                  aResolve();
                                }).bind(this, this.node),
                              );
                          }, 200);
                        },
                      );
                    }
                  } else {
                    lSetNote.callback([lResultValidation.note]);
                  }
                  lContexteCourant.controleur.$refreshSelf();
                },
                node: function () {
                  $(this.node).on({
                    focus: function () {
                      lEnFocus = true;
                      lValueInput = null;
                      lContexteCourant.controleur.$refreshSelf(true);
                      if (lOptions.selectionSurFocus) {
                        this.select();
                      }
                    },
                    focusout: function () {
                      lEnFocus = false;
                      lValueInput = null;
                      if (!lOptions.afficherAvecVirgule) {
                        lContexteCourant.controleur.$refreshSelf();
                      }
                    },
                  });
                },
              },
            },
            aContexteCourant.controleur,
          );
          if (lGetDisabled.estFonction) {
            lContexteCourant.controleur.inputNote.getDisabled = function () {
              return lGetDisabled.callback();
            };
          }
        } else {
        }
        aOutils.gererInputText(lContexteCourant, 'text');
      } else {
      }
      return { node: aContexteCourant.node, ignorerInputText: true };
    });
  },
  fn: 'iehtml.inputnote_espace.js',
});