IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TradTextareaMax = void 0;
    require('IEHtml.TextareaMax.css');
    const ObjetStyle_1 = require('ObjetStyle');
    const IEHtml_1 = require('IEHtml');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetStyle_2 = require('ObjetStyle');
    const ObjetSupport_1 = require('ObjetSupport');
    const ObjetChaine_1 = require('ObjetChaine');
    const GUID_1 = require('GUID');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const AccessApp_1 = require('AccessApp');
    const IEHtml_TextareaMax_css_1 = require('IEHtml.TextareaMax.css');
    const Toast_1 = require('Toast');
    const Divers_css_1 = require('Divers.css');
    IEHtml_1.default.addBalise(
      'ie-textareamax',
      (aContexteCourant, aOutils) => {
        var _a;
        const lModele = aOutils.getModel(aContexteCourant);
        const lMap = aOutils.getMapDeNode(aContexteCourant.node);
        let llName;
        let lContexteCourant;
        let lMaxLength = 0;
        let lAvecMaxLength = false;
        const lOptions = {
          heightCompteur: '1.4rem',
          pourcentageAvertissement: 0.9,
          couleurFond: (0, AccessApp_1.getApp)().getCouleur().nonEditable.fond,
          couleurBordure: (0, AccessApp_1.getApp)().getCouleur().bordure,
          couleurTexte: (0, AccessApp_1.getApp)().getCouleur().themeNeutre
            .sombre,
          couleurTexteAvertissement: 'red',
          borduresZoneMax: ObjetStyle_1.EGenreBordure.haut,
          longueurTexte: -1,
          libelleMax_dd: '%d/%d',
          getCompteur: null,
        };
        let lSpeechRecognizer = null;
        let lInRecognition = false;
        let lJTextArea = null;
        let lAvecRefreshSelonTaille = null;
        const lFLogSpeech = function (aMsg) {
          let lMsg = '';
          switch (aMsg) {
            case 'no-speech':
              lMsg = TradTextareaMax.SaisieVocale.NoSpeech;
              break;
            case 'aborted':
              lMsg = TradTextareaMax.SaisieVocale.Aborted;
              break;
            case 'audio-capture':
              lMsg = TradTextareaMax.SaisieVocale.AudioCapture;
              break;
            case 'network':
              lMsg = TradTextareaMax.SaisieVocale.Network;
              break;
            case 'not-allowed':
              lMsg = TradTextareaMax.SaisieVocale.NotAllowed;
              break;
            case 'service-not-allowed':
              lMsg = TradTextareaMax.SaisieVocale.ServiceNotAllowed;
              break;
            case 'bad-grammar':
              lMsg = TradTextareaMax.SaisieVocale.BadGrammar;
              break;
            case 'language-not-supported':
              lMsg = TradTextareaMax.SaisieVocale.LanguageNotSupported;
              break;
            default:
              lMsg = aMsg;
          }
          if (!!lMsg) {
            Toast_1.Toast.afficher({
              msg: lMsg,
              type: Toast_1.ETypeToast.erreur,
            });
          }
          lInRecognition = false;
          IEHtml_1.default.refresh();
        };
        if (!lModele) {
        }
        if (lModele) {
          const lInfosGetOptions = aOutils.getAccesParametresModel(
            'getOptions',
            aContexteCourant,
          );
          if (lInfosGetOptions && lInfosGetOptions.estFonction) {
            Object.assign(
              lOptions,
              lInfosGetOptions.callback([lOptions, aContexteCourant.node]),
            );
          }
        }
        let lIdMaxLength = '';
        let lHtmlWAIDescr = '';
        let lAvecCompteur = false;
        if (lMap.maxlength || lMap['ie-compteurmax']) {
          lAvecCompteur = true;
          lAvecMaxLength = true;
          lMaxLength = parseInt(lMap.maxlength || lMap['ie-compteurmax'], 10);
          if (lMaxLength > 0) {
            lIdMaxLength = GUID_1.GUID.getId();
            lHtmlWAIDescr = IE.jsx.str(
              'span',
              {
                id: lIdMaxLength,
                class: Divers_css_1.StylesDivers.srOnly,
                'aria-hidden': 'true',
              },
              TradTextareaMax.XCaracteresMax_D.format(lMaxLength),
            );
          }
          if (lMap['ie-compteurmax']) {
            aOutils.addCommentaireDebug(
              aContexteCourant.node,
              'ie-compteurmax:"' + lMap['ie-compteurmax'] + '"',
            );
            aContexteCourant.node.removeAttribute('ie-compteurmax');
            delete lMap['ie-compteurmax'];
          }
          if (lMap['ie-compteur']) {
            aContexteCourant.node.removeAttribute('ie-compteur');
            delete lMap['ie-compteurmax'];
          }
        } else if (lMap['ie-compteur'] !== undefined) {
          lAvecCompteur = true;
          aOutils.addCommentaireDebug(aContexteCourant.node, 'ie-compteur');
          aContexteCourant.node.removeAttribute('ie-compteur');
          delete lMap['ie-compteur'];
        }
        if (lAvecCompteur) {
          const lCouleur = aContexteCourant.node.style.borderColor;
          if (
            lCouleur !== 'initial' &&
            lCouleur !== '' &&
            lCouleur !== '-moz-use-text-color' &&
            lCouleur !== 'currentColor'
          ) {
            lOptions.couleurBordure = lCouleur;
          }
        }
        if (!!ObjetSupport_1.Support.speechRecognition && !IE.estMobile) {
          try {
            lSpeechRecognizer = new ObjetSupport_1.Support.speechRecognition();
            lSpeechRecognizer.interimResults = true;
            lSpeechRecognizer.lang =
              ((_a = global.GParametres) === null || _a === void 0
                ? void 0
                : _a.langue) || 'fr';
            lSpeechRecognizer.onresult = function (event) {
              for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                  lJTextArea.get(0).value +=
                    (lJTextArea.get(0).value !== '' ? ' ' : '') +
                    event.results[i][0].transcript;
                  lInRecognition = false;
                  lJTextArea.trigger('change');
                  IEHtml_1.default.refresh();
                }
              }
            };
            lSpeechRecognizer.onerror = function (event) {
              lFLogSpeech(event.error);
              IEHtml_1.default.refresh();
            };
          } catch (ex) {
            lFLogSpeech(ex.error);
            IEHtml_1.default.refresh();
          }
        }
        const lAvecWrapperCompteurMobile = lAvecCompteur && !!IE.estMobile;
        const lAvecWrapperCompteurEspace =
          !lAvecWrapperCompteurMobile && (lAvecCompteur || !!lSpeechRecognizer);
        const lEstAutoSize =
          lMap['ie-autoresize'] !== undefined ||
          (IE.estMobile &&
            !$(aContexteCourant.node).hasClass('ie-no-autoresize'));
        let H;
        if (lAvecWrapperCompteurMobile) {
          H = IE.jsx.str(
            'div',
            {
              tabindex: '-1',
              class:
                IEHtml_TextareaMax_css_1.StylesIEHtmlTextareaMax
                  .textareamaxWrapper,
            },
            IE.jsx.str('textarea', {
              class:
                IEHtml_TextareaMax_css_1.StylesIEHtmlTextareaMax.textareamax,
            }),
            IE.jsx.str('span', {
              class: 'tam_counter character-counter',
              'ie-display': () => !lEstNonEditable,
            }),
            lHtmlWAIDescr,
          );
        } else if (lAvecWrapperCompteurEspace) {
          H = IE.jsx.str(
            'div',
            {
              tabindex: '-1',
              class:
                IEHtml_TextareaMax_css_1.StylesIEHtmlTextareaMax
                  .textareamaxWrapper,
            },
            IE.jsx.str(
              'div',
              { class: 'textarea-style' },
              IE.jsx.str('textarea', {
                class: [
                  Divers_css_1.StylesDivers.browserDefault,
                  IEHtml_TextareaMax_css_1.StylesIEHtmlTextareaMax.textareamax,
                ],
              }),
            ),
            lAvecCompteur
              ? IE.jsx.str(
                  'div',
                  {
                    class: [
                      IEHtml_TextareaMax_css_1.StylesIEHtmlTextareaMax
                        .tam_counter,
                      lSpeechRecognizer
                        ? IEHtml_TextareaMax_css_1.StylesIEHtmlTextareaMax
                            .tam_withspeech
                        : '',
                      IEHtml_TextareaMax_css_1.StylesIEHtmlTextareaMax
                        .textareaCounter,
                    ],
                    style:
                      'display:none;' +
                      (lEstAutoSize
                        ? ''
                        : ObjetStyle_2.GStyle.composeCouleurFond(
                            lOptions.couleurFond,
                          ) +
                          ObjetStyle_2.GStyle.composeCouleurBordure(
                            lOptions.couleurBordure,
                            1,
                            lOptions.borduresZoneMax,
                          )) +
                      (lOptions.heightCompteur
                        ? 'height:' + lOptions.heightCompteur + ';'
                        : ''),
                  },
                  IE.jsx.str('span', null),
                )
              : '',
            () => {
              if (lSpeechRecognizer) {
                const lNode = (aNode) => {
                  $(aNode).eventValidation(() => {
                    if (!lFuncEstNonEditable()) {
                      if (!lInRecognition) {
                        try {
                          lSpeechRecognizer.start();
                          lInRecognition = true;
                          $(aNode).attr('class', 'icon_microphone');
                        } catch (ex) {
                          lFLogSpeech(ex.error);
                        }
                      } else {
                        try {
                          lSpeechRecognizer.stop();
                          lInRecognition = false;
                        } catch (ex) {
                          lFLogSpeech(ex.error);
                        }
                      }
                      IEHtml_1.default.refresh();
                    }
                  });
                };
                const lGetAttr = () => {
                  return {
                    style: lInRecognition ? 'color:red' : null,
                    'aria-pressed': lInRecognition ? 'true' : 'false',
                  };
                };
                return IE.jsx.str(
                  'div',
                  { class: 'tam_speech textarea-counter' },
                  IE.jsx.str('i', {
                    role: 'button',
                    'ie-node': lNode,
                    'ie-attr': lGetAttr,
                    class: 'small-icon icon_microphone AvecMain',
                    'ie-tooltiplabel':
                      TradTextareaMax.SaisieVocale.CaptureAudio,
                    tabindex: '0',
                  }),
                );
              }
              return '';
            },
            lHtmlWAIDescr,
          );
        } else {
          H = IE.jsx.str('textarea', {
            class: IEHtml_TextareaMax_css_1.StylesIEHtmlTextareaMax.textareamax,
          });
        }
        const lDivConteneur = ObjetHtml_1.GHtml.htmlToDOM(H);
        const lJConteneur = $(lDivConteneur);
        let lJConteneurTextarea = null;
        let lJConteneurMax = null;
        let lJLibelleMax = null;
        if (lAvecWrapperCompteurMobile) {
          lJTextArea = lJConteneur.children().first();
          lJLibelleMax = lJConteneur.children().eq(1);
          lJConteneurMax = lJLibelleMax;
        } else if (lAvecWrapperCompteurEspace) {
          lJConteneurTextarea = lJConteneur.children().first();
          lJTextArea = lJConteneurTextarea.children().first();
          if (lAvecCompteur) {
            lJConteneurMax = lJConteneur.children().eq(1);
            lJLibelleMax = lJConteneurMax.children().first();
          }
        } else {
          lJTextArea = lJConteneur;
        }
        for (llName in lMap) {
          try {
            switch (llName) {
              case 'ie-autoresize':
                break;
              case 'required':
                lJTextArea.attr(llName, '');
                break;
              case 'id':
              case 'readonly':
              case 'disabled':
              case 'placeholder':
              case 'maxlength':
              case 'ie-trim':
              case 'ie-textbrut':
                lJTextArea.attr(llName, lMap[llName]);
                break;
              case 'ie-idcont':
                if (lAvecWrapperCompteurEspace || lAvecWrapperCompteurMobile) {
                  lJConteneur.attr('id', lMap[llName]);
                }
                break;
              default:
                if (llName.startsWith('aria-')) {
                  lJTextArea.attr(llName, lMap[llName]);
                } else {
                  if (llName === 'class') {
                    lJConteneur.addClass(lMap[llName]);
                  } else {
                    lJConteneur.attr(llName, lMap[llName]);
                  }
                }
            }
          } catch (e) {}
        }
        if (lEstAutoSize) {
          lJConteneur.addClass('ie-autoresize');
          lJTextArea.attr('ie-autoresize', '');
        }
        if (lIdMaxLength && lHtmlWAIDescr) {
          const lAttrDesc = (
            (lJTextArea.attr('aria-describedby') || '') +
            ' ' +
            lIdMaxLength
          ).trim();
          lJTextArea.attr('aria-describedby', lAttrDesc);
        }
        if (lAvecWrapperCompteurEspace || lAvecWrapperCompteurMobile) {
          if (
            aContexteCourant.data.$modeleValue ||
            aContexteCourant.data.$modelObjectJSX
          ) {
            lContexteCourant = Object.assign({}, aContexteCourant);
            lContexteCourant.node = lJTextArea.get(0);
            aOutils.gererInputText(lContexteCourant, '');
          }
          if (lJLibelleMax && lJLibelleMax.length === 1) {
            aOutils.surInjectionHtml(aContexteCourant, () => {
              IEHtml_1.default.refresh();
            });
            aOutils.abonnerRefresh(
              () => {
                const lValue = lJTextArea.get(0).value || '';
                const lLongueur = lOptions.getCompteur
                  ? lOptions.getCompteur(lValue)
                  : lValue.length;
                if (lLongueur !== lOptions.longueurTexte) {
                  lOptions.longueurTexte = lLongueur;
                  if (lAvecMaxLength) {
                    lJLibelleMax.get(0).innerHTML =
                      ObjetChaine_1.GChaine.format(lOptions.libelleMax_dd, [
                        lLongueur,
                        lMaxLength,
                      ]);
                    lJConteneurMax.css(
                      'color',
                      lLongueur > lMaxLength * lOptions.pourcentageAvertissement
                        ? lOptions.couleurTexteAvertissement
                        : lOptions.couleurTexte,
                    );
                  } else {
                    lJLibelleMax.get(0).innerHTML = lLongueur + '';
                  }
                }
              },
              lJLibelleMax.get(0),
              aContexteCourant,
            );
          }
        }
        const lFuncEstNonEditable = function () {
          return !!(lJTextArea.is(':disabled') || lJTextArea.prop('readonly'));
        };
        let lEstNonEditable = lFuncEstNonEditable();
        const lAppliquerDisabled = function () {
          if (lJConteneur.is('textarea')) {
            return;
          }
          if (lEstNonEditable) {
            lJConteneur.addClass('disabled');
          } else {
            lJConteneur.removeClass('disabled');
          }
        };
        lAppliquerDisabled();
        if (lAvecWrapperCompteurEspace) {
          lJConteneur.css({ position: 'relative' });
          let lTimeoutFocusOut;
          lJConteneur.on({
            focusin: function () {
              clearTimeout(lTimeoutFocusOut);
              if (lFuncEstNonEditable()) {
                return;
              }
              if (lJConteneurMax) {
                lJConteneurMax.show();
              }
              if (lOptions.heightCompteur) {
                lJConteneurTextarea.css('bottom', lOptions.heightCompteur);
              }
              IEHtml_1.default.refresh();
            },
            focusout: function () {
              if (lJConteneurMax) {
                lJConteneurMax.hide();
              }
              lJConteneurTextarea.css('bottom', '0');
              lTimeoutFocusOut = setTimeout(() => {
                lJTextArea.trigger('focusout_TextareaMax');
              }, 0);
            },
          });
        } else {
          (lAvecWrapperCompteurEspace || lAvecWrapperCompteurMobile
            ? lJConteneur
            : lJTextArea
          ).on('focusout', () => {
            lJTextArea.trigger('focusout_TextareaMax');
          });
        }
        aOutils.abonnerRefresh(
          () => {
            if (lEstNonEditable !== lFuncEstNonEditable()) {
              lEstNonEditable = !lEstNonEditable;
              lAppliquerDisabled();
            }
            if (lAvecRefreshSelonTaille) {
              lAvecRefreshSelonTaille();
            }
          },
          lDivConteneur,
          aContexteCourant,
        );
        aOutils.replaceNode(aContexteCourant.node, lDivConteneur);
        aContexteCourant.node = lDivConteneur;
        aOutils.addCommentaireDebug(lDivConteneur, 'ie-textareamax');
        return {
          node: aContexteCourant.node,
          avecCompileFils:
            lAvecWrapperCompteurMobile || lAvecWrapperCompteurEspace,
        };
      },
    );
    const TradTextareaMax = ObjetTraduction_1.TraductionsModule.getModule(
      'TextareaMax',
      {
        XCaracteresMax_D: '',
        SaisieVocale: {
          NoSpeech: '',
          Aborted: '',
          AudioCapture: '',
          Network: '',
          NotAllowed: '',
          ServiceNotAllowed: '',
          BadGrammar: '',
          LanguageNotSupported: '',
          CaptureAudio: '',
        },
      },
    );
    exports.TradTextareaMax = TradTextareaMax;
  },
  fn: 'iehtml.textareamax.js',
});