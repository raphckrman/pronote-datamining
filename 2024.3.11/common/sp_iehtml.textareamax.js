IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('IEHtml.TextareaMax.css');
    const ObjetStyle_1 = require('ObjetStyle');
    const IEHtml = require('IEHtml');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetStyle_2 = require('ObjetStyle');
    const ObjetSupport_1 = require('ObjetSupport');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetChaine_1 = require('ObjetChaine');
    const GUID_1 = require('GUID');
    IEHtml.addBalise('ie-textareamax', (aContexteCourant, aOutils) => {
      var _a;
      const lModele = aOutils.getModel(aContexteCourant);
      const lMap = aOutils.getMapDeNode(aContexteCourant.node);
      let llName;
      let lContexteCourant;
      let H;
      let lMaxLength = 0;
      let lAvecMaxLength = false;
      const lOptions = {
        heightCompteur: '1.4rem',
        pourcentageAvertissement: 0.9,
        couleurFond: GCouleur.nonEditable.fond,
        couleurBordure: GCouleur.bordure,
        couleurTexte: GCouleur.themeNeutre.sombre,
        couleurTexteAvertissement: 'red',
        borduresZoneMax: ObjetStyle_1.EGenreBordure.haut,
        longueurTexte: -1,
        libelleMax_dd: '%d/%d',
        getCompteur: null,
      };
      let lSpeechRecognizer = null;
      let lInRecognition = false;
      let lJSpeechReco = null;
      let lJTextArea = null;
      let lAvecRefreshSelonTaille = null;
      const lFLogSpeech = function (aMsg) {
        let lMsg = aMsg;
        switch (aMsg) {
          case 'no-speech':
            lMsg = 'Aucune parole détectée';
            break;
          case 'aborted':
            lMsg = 'Annulation';
            break;
          case 'audio-capture':
            lMsg = 'La capture audio a échouée';
            break;
          case 'network':
            lMsg = 'Une connexion est nécessaire';
            break;
          case 'not-allowed':
            lMsg = 'La capture audio n'est pas autorisée';
            break;
          case 'service-not-allowed':
            lMsg = 'Le service de reconnaissance n'est pas autorisé';
            break;
          case 'bad-grammar':
            lMsg = 'Erreur de configuration du service';
            break;
          case 'language-not-supported':
            lMsg = 'La langue n'est pas supportée';
            break;
          default:
            lMsg = aMsg;
        }
        if (!!lMsg) {
          lJSpeechReco
            .children('i')
            .attr('class', 'icon_microphone_off')
            .before(
              '<div style="position:absolute;top:-15px;right:0;">' +
                lMsg +
                '</div>',
            )
            .prev()
            .delay(3000)
            .queue(function () {
              $(this).remove();
            });
        }
        lInRecognition = false;
        aContexteCourant.controleur.$refreshSelf();
      };
      if (!lModele) {
      }
      if (lModele && aContexteCourant.data.$modeleParsed) {
        const lInfosGetOptions = aOutils.getAccesParametresModel(
          'getOptions',
          aContexteCourant,
        );
        if (lInfosGetOptions && lInfosGetOptions.estFonction) {
          Object.assign(lOptions, lInfosGetOptions.callback([lOptions]));
        }
      }
      let lIdMaxLength = '';
      let lHtmlWAIDescr = '';
      let lAvecCompteur = false;
      if (lMap['ie-compteur'] !== undefined) {
        lAvecCompteur = true;
        aOutils.addCommentaireDebug(aContexteCourant.node, 'ie-compteur');
        aContexteCourant.node.removeAttribute('ie-compteur');
        delete lMap['ie-compteur'];
      } else if (lMap.maxlength || lMap['ie-compteurmax']) {
        lAvecCompteur = true;
        lAvecMaxLength = true;
        lMaxLength = parseInt(lMap.maxlength || lMap['ie-compteurmax'], 10);
        if (lMaxLength > 0) {
          lIdMaxLength = GUID_1.GUID.getId();
          lHtmlWAIDescr = IE.jsx.str(
            'span',
            { id: lIdMaxLength, class: 'sr-only', 'aria-hidden': 'true' },
            '%d caractères maximum',
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
                aContexteCourant.controleur.$refreshSelf();
              }
            }
          };
          lSpeechRecognizer.onerror = function (event) {
            lFLogSpeech(event.error);
            aContexteCourant.controleur.$refreshSelf();
          };
        } catch (ex) {
          lFLogSpeech(ex.error);
          aContexteCourant.controleur.$refreshSelf();
        }
      }
      const lAvecWrapperCompteurMobile = lAvecCompteur && !!IE.estMobile;
      const lAvecWrapperCompteurEspace =
        !lAvecWrapperCompteurMobile && (lAvecCompteur || !!lSpeechRecognizer);
      const lEstAutoSize =
        lMap['ie-autoresize'] !== undefined ||
        (IE.estMobile &&
          !$(aContexteCourant.node).hasClass('ie-no-autoresize'));
      if (lAvecWrapperCompteurMobile) {
        H = [
          IE.jsx.str(
            'div',
            { tabindex: '-1', class: 'textareamax-wrapper' },
            IE.jsx.str('textarea', { class: 'textareamax' }),
            IE.jsx.str('span', { class: 'tam_counter character-counter' }),
            lHtmlWAIDescr,
          ),
        ];
      } else if (lAvecWrapperCompteurEspace) {
        H = [
          '<div tabindex="-1" class="textareamax-wrapper">',
          IE.jsx.str(
            'div',
            { class: 'textarea-style' },
            IE.jsx.str('textarea', { class: 'textareamax' }),
          ),
          lAvecCompteur
            ? '<div class="tam_counter' +
              (lSpeechRecognizer ? ' tam_withspeech' : '') +
              ' textarea-counter"' +
              ' style="display:none;' +
              (lEstAutoSize
                ? ''
                : ObjetStyle_2.GStyle.composeCouleurFond(lOptions.couleurFond) +
                  ObjetStyle_2.GStyle.composeCouleurBordure(
                    lOptions.couleurBordure,
                    1,
                    lOptions.borduresZoneMax,
                  )) +
              (lOptions.heightCompteur
                ? 'height:' + lOptions.heightCompteur + ';'
                : '') +
              '">' +
              '<span></span>' +
              '</div>'
            : '',
          lSpeechRecognizer
            ? IE.jsx.str(
                'div',
                { class: 'tam_speech textarea-counter' },
                IE.jsx.str('i', {
                  role: 'img',
                  class: 'small-icon icon_microphone',
                  'aria-label': 'Capture audio',
                }),
              )
            : '',
          lHtmlWAIDescr,
          '</div>',
        ];
      } else {
        H = [IE.jsx.str('textarea', { class: 'textareamax' })];
      }
      const lDivConteneur = ObjetHtml_1.GHtml.htmlToDOM(H.join(''));
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
        lJSpeechReco = lJConteneur.children().eq(lAvecCompteur ? 2 : 1);
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
        if (aContexteCourant.data.$modeleValue) {
          lContexteCourant = Object.assign({}, aContexteCourant);
          lContexteCourant.node = lJTextArea.get(0);
          aOutils.gererInputText(lContexteCourant, '');
        }
        if (lJLibelleMax && lJLibelleMax.length === 1) {
          aOutils.surInjectionHtml(aContexteCourant, () => {
            aContexteCourant.controleur.$refreshSelf();
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
                  lJLibelleMax.get(0).innerHTML = ObjetChaine_1.GChaine.format(
                    lOptions.libelleMax_dd,
                    [lLongueur, lMaxLength],
                  );
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
            aContexteCourant.controleur.$refreshSelf();
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
      if (lSpeechRecognizer && lJSpeechReco.length > 0) {
        (lEstAutoSize
          ? lJSpeechReco.children('i')
          : lJSpeechReco
        ).eventValidation(() => {
          if (!lFuncEstNonEditable()) {
            if (!lInRecognition) {
              try {
                lSpeechRecognizer.start();
                lInRecognition = true;
                lJSpeechReco.children('i').attr('class', 'icon_microphone');
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
            lJSpeechReco
              .children('i')
              .css('color', lInRecognition ? 'red' : '');
            aContexteCourant.controleur.$refreshSelf();
          }
        });
      }
      aOutils.replaceNode(aContexteCourant.node, lDivConteneur);
      aContexteCourant.node = lDivConteneur;
      aOutils.addCommentaireDebug(lDivConteneur, 'ie-textareamax');
      return {
        node: aContexteCourant.node,
        avecCompileFils:
          lAvecWrapperCompteurMobile || lAvecWrapperCompteurEspace,
      };
    });
  },
  fn: 'iehtml.textareamax.js',
});