IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('IEHtml.BtnImage.css');
    const IEHtml = require('IEHtml');
    const Invocateur_1 = require('Invocateur');
    const ObjetHtml_1 = require('ObjetHtml');
    const ControleSaisieEvenement_1 = require('ControleSaisieEvenement');
    var TypeEtatBtnImage;
    (function (TypeEtatBtnImage) {
      TypeEtatBtnImage[(TypeEtatBtnImage['NonSelectionne'] = 0)] =
        'NonSelectionne';
      TypeEtatBtnImage[(TypeEtatBtnImage['Inactif'] = 1)] = 'Inactif';
      TypeEtatBtnImage[(TypeEtatBtnImage['ClicNonSelectionne'] = 2)] =
        'ClicNonSelectionne';
      TypeEtatBtnImage[(TypeEtatBtnImage['Selectionne'] = 3)] = 'Selectionne';
      TypeEtatBtnImage[(TypeEtatBtnImage['SurvolNonSelectionne'] = 4)] =
        'SurvolNonSelectionne';
      TypeEtatBtnImage[(TypeEtatBtnImage['SurvolSelectionne'] = 5)] =
        'SurvolSelectionne';
    })(TypeEtatBtnImage || (TypeEtatBtnImage = {}));
    IEHtml.addBalise('ie-btnimage', (aContexteCourant, aOutils) => {
      return _ieBtn(false, aContexteCourant, aOutils);
    });
    IEHtml.addBalise('ie-btnicon', (aContexteCourant, aOutils) => {
      return _ieBtn(true, aContexteCourant, aOutils);
    });
    function _ieBtn(aForcerIcone, aContexteCourant, aOutils) {
      let lEstIcone;
      let lEstSVG;
      let lInfosGetSelection;
      function _actualiser(aJBouton, aData, aEtat) {
        if (lEstIcone) {
          if (aData.$selection) {
            aJBouton.addClass('btnImageSelection');
          } else {
            aJBouton.removeClass('btnImageSelection');
          }
          if (lInfosGetSelection && lInfosGetSelection.valide) {
            aJBouton.attr('aria-pressed', aData.$selection ? 'true' : 'false');
          }
        }
        if (lEstIcone || lEstSVG) {
          return;
        }
        if (!aData.$disabled) {
          if (aData.$selection) {
            aData.$genre = aEtat.survol
              ? TypeEtatBtnImage.SurvolSelectionne
              : TypeEtatBtnImage.Selectionne;
          } else if (aEtat.clique) {
            aData.$genre = TypeEtatBtnImage.ClicNonSelectionne;
          } else {
            aData.$genre = aEtat.survol
              ? TypeEtatBtnImage.SurvolNonSelectionne
              : TypeEtatBtnImage.NonSelectionne;
          }
        } else {
          aData.$genre = TypeEtatBtnImage.Inactif;
        }
        aJBouton.css(
          'background-position',
          -aData.$width * aData.$genre + 'px 0',
        );
      }
      const lEtat = { clique: false, survol: false };
      Object.assign(aContexteCourant.data, {
        $width: 20,
        $selection: false,
        $genre: TypeEtatBtnImage.NonSelectionne,
        $disabled: false,
      });
      const lData = aContexteCourant.data;
      const lInnerHtml = aContexteCourant.node.innerHTML;
      lEstSVG = !!lInnerHtml && $(aContexteCourant.node).find('svg').length > 0;
      const lEstIconeStandard =
        aForcerIcone || $(aContexteCourant.node).hasClass('btnImageIcon');
      lEstIcone =
        lEstIconeStandard ||
        $(aContexteCourant.node).hasClass('btn-bandeau') ||
        $(aContexteCourant.node).hasClass('ObjetBoutonMenu_icone');
      const lBouton = lEstIcone
        ? ObjetHtml_1.GHtml.htmlToDOM(
            IE.jsx.str('i', { role: 'button', tabindex: '0' }),
          )
        : ObjetHtml_1.GHtml.htmlToDOM(
            IE.jsx.str('div', { role: 'button', tabindex: '0' }),
          );
      const lJBouton = $(lBouton);
      lJBouton.ieData(aContexteCourant.data);
      let lInfosEvent,
        lInfosGetDisabled,
        lInfosGetTitle,
        lAvecControleSaisie,
        lDisabled = false,
        lModele = aOutils.getModel(aContexteCourant),
        lAvecLabelAccessible =
          aContexteCourant.node.hasAttribute('aria-label') ||
          aContexteCourant.node.hasAttribute('aria-labelledby'),
        lLabelWAIManquant = !lAvecLabelAccessible,
        lSetTitle = function (aTitle) {
          lData.$oldTitle = aTitle;
          lJBouton.attr('title', aTitle);
          if (!lAvecLabelAccessible) {
            lJBouton.attr('aria-label', aTitle);
          }
        };
      const lSetDisabled = function (aDisabled) {
        if (aDisabled) {
          lJBouton.attr('aria-disabled', 'true');
          lJBouton.addClass('btnImageDisable');
        } else {
          lJBouton.get(0).removeAttribute('aria-disabled');
          lJBouton.removeClass('btnImageDisable');
        }
      };
      if (lModele && aContexteCourant.data.$modeleParsed) {
        lInfosEvent = aOutils.getAccesParametresModel(
          'event',
          aContexteCourant,
        );
        lInfosGetSelection = aOutils.getAccesParametresModel(
          'getSelection',
          aContexteCourant,
        );
        lInfosGetDisabled = aOutils.getAccesParametresModel(
          'getDisabled',
          aContexteCourant,
        );
        lInfosGetTitle = aOutils.getAccesParametresModel(
          'getTitle',
          aContexteCourant,
        );
        const lRefresh = aContexteCourant.contexte.refresh;
        lAvecControleSaisie = aOutils.getControleSaisieEvent(aContexteCourant);
        if (lInfosEvent.estFonction) {
          lJBouton.eventValidation(function (event) {
            if (lData.$disabled) {
              return;
            }
            const lAction = () => {
              const lResult = lInfosEvent.callback([
                event,
                this,
                aContexteCourant.data,
              ]);
              lRefresh();
              return lResult;
            };
            if (lAvecControleSaisie) {
              (0, ControleSaisieEvenement_1.ControleSaisieEvenement)(lAction);
            } else {
              return lAction();
            }
          });
        }
        let lGetSelection, lGetterDisabled, lGetterTitle;
        if (lInfosGetSelection.valide) {
          lGetSelection = function () {
            return !!lInfosGetSelection.callback([
              aContexteCourant.node,
              aContexteCourant.data,
            ]);
          };
          lData.$selection = lGetSelection();
        }
        if (lInfosGetDisabled.valide) {
          lGetterDisabled = function () {
            return !!lInfosGetDisabled.callback([
              lBouton,
              aContexteCourant.data,
            ]);
          };
          if (
            lInfosGetDisabled.estFonction ||
            !lGetterDisabled() ||
            lGetterDisabled() === true
          ) {
            lDisabled = !!lGetterDisabled();
          } else {
            lGetterDisabled = null;
            IE.log.addLog(
              'echec getDisabled de ie-bouton, propriété incorrecte du model "' +
                lModele +
                '"',
            );
          }
        }
        if (lInfosGetTitle.estFonction) {
          lGetterTitle = function () {
            return (
              lInfosGetTitle.callback([lBouton, aContexteCourant.data]) || ''
            );
          };
          lSetTitle(lGetterTitle());
          lLabelWAIManquant = false;
        }
        if (lGetSelection || lGetterDisabled || lGetterTitle) {
          aOutils.abonnerRefresh(
            () => {
              let lActualiser = false;
              if (lGetSelection) {
                const lSelection = lGetSelection();
                if (lSelection !== lData.$selection) {
                  lData.$selection = lSelection;
                  lActualiser = true;
                }
              }
              if (lGetterDisabled) {
                const lDisabled = !!lGetterDisabled();
                if (lDisabled !== lData.$disabled) {
                  lData.$disabled = lDisabled;
                  lSetDisabled(lDisabled);
                  lActualiser = true;
                }
              }
              if (lActualiser) {
                _actualiser(lJBouton, aContexteCourant.data, lEtat);
              }
              if (lGetterTitle) {
                const lTitle = lGetterTitle();
                if (lTitle !== lData.$oldTitle) {
                  lSetTitle(lTitle);
                }
              }
            },
            lBouton,
            aContexteCourant,
          );
        }
      }
      aOutils.copyAttributs(aContexteCourant.node, lBouton, (aName, aValue) => {
        if (
          aName === 'title' &&
          aValue &&
          (!lInfosGetTitle || !lInfosGetTitle.estFonction)
        ) {
          lJBouton.attr('aria-label', aValue);
          lLabelWAIManquant = false;
        } else if (aName === 'disabled') {
          lDisabled = true;
          return false;
        }
      });
      if (!lBouton.style.width) {
        if (!lEstSVG && !lEstIconeStandard) {
          lBouton.style.width = lData.$width + 'px';
        }
      } else {
        lData.$width = parseInt(lBouton.style.width, 10) || lData.$width;
      }
      lData.$disabled = lDisabled;
      _actualiser(lJBouton, aContexteCourant.data, lEtat);
      if (lDisabled) {
        lSetDisabled(lDisabled);
      }
      lJBouton
        .addClass('btnImage')
        .on('focusin mouseover', () => {
          lEtat.survol = true;
          _actualiser(lJBouton, aContexteCourant.data, lEtat);
        })
        .on('focusout mouseout', () => {
          lEtat.survol = false;
          _actualiser(lJBouton, aContexteCourant.data, lEtat);
        })
        .on('pointerdown', () => {
          lEtat.clique = true;
          _actualiser(lJBouton, aContexteCourant.data, lEtat);
          Invocateur_1.Invocateur.abonnerUnique(
            GNavigateur.getEventInvocateur('pointerup'),
            () => {
              lEtat.clique = false;
              _actualiser(lJBouton, aContexteCourant.data, lEtat);
            },
          );
        });
      const lRacine = lJBouton.get(0);
      aOutils.replaceNode(aContexteCourant.node, lRacine);
      if (lModele && aContexteCourant.data.$modeleParsed) {
        aOutils.surNodeEtNodeAfter(aContexteCourant);
      }
      aOutils.addCommentaireDebug(
        lRacine,
        aForcerIcone ? 'ie-btnicon' : 'ie-btnimage',
      );
      if (lInnerHtml) {
        aOutils.injectHTML({
          element: lRacine,
          html: lInnerHtml,
          controleur: aContexteCourant.controleur,
          ignorerScroll: true,
          contexte: aContexteCourant.contexte,
        });
      }
      return { node: lRacine, avecCompileFils: false };
    }
  },
  fn: 'iehtml.btnimage.js',
});