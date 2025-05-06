IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('IEHtml.Bouton.css');
    const IEHtml = require('IEHtml');
    const ObjetHtml_1 = require('ObjetHtml');
    const ControleSaisieEvenement_1 = require('ControleSaisieEvenement');
    const ToucheClavier_1 = require('ToucheClavier');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const MethodesObjet_1 = require('MethodesObjet');
    const u_Dots = '...';
    IEHtml.addBalise('ie-bouton', (aContexteCourant, aOutils) => {
      let lOptions = {
        disabled: false,
        theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
        tailleBordure: null,
        fontWeight: '',
        hasDots: false,
      };
      function _getCss(aSurvol) {
        const lStyle = {};
        let lColor =
          (lOptions.disabled
            ? lOptions.couleurTexteInactif
            : aSurvol
              ? lOptions.couleurTexteSurvol
              : lOptions.couleurTexte) || '';
        if (lColor) {
          lStyle.color = lColor;
        }
        lColor =
          (lOptions.disabled
            ? lOptions.couleurFondInactif
            : aSurvol
              ? lOptions.couleurFondSurvol
              : lOptions.couleurFond) || '';
        if (lColor) {
          lStyle.backgroundColor = lColor;
        }
        if (
          lOptions.tailleBordure >= 0 &&
          MethodesObjet_1.MethodesObjet.isNumber(lOptions.tailleBordure)
        ) {
          lStyle.borderWidth = lOptions.tailleBordure + 'px';
        }
        lColor =
          (lOptions.disabled
            ? lOptions.couleurBordureInactif
            : aSurvol
              ? lOptions.couleurBordureSurvol
              : lOptions.couleurBordure) || '';
        if (lColor) {
          lStyle.borderColor = lColor;
        }
        return lStyle;
      }
      function _estToucheValider(aNumeroTouche) {
        return (
          aNumeroTouche === ToucheClavier_1.ToucheClavier.Espace ||
          aNumeroTouche === ToucheClavier_1.ToucheClavier.RetourChariot
        );
      }
      let lInnerHtml = aContexteCourant.node.innerHTML;
      const lInnerHtmlInitial = lInnerHtml;
      const lBouton = ObjetHtml_1.GHtml.htmlToDOM('<button>' + '</button>');
      const lJBouton = $(lBouton);
      if (lInnerHtml === u_Dots) {
        lOptions.hasDots = true;
      }
      if (
        $(aContexteCourant.node).hasClass(
          Type_ThemeBouton_1.TypeThemeBouton.primaire,
        )
      ) {
        lOptions.theme = Type_ThemeBouton_1.TypeThemeBouton.primaire;
      }
      const lImage = aContexteCourant.node.getAttribute('ie-image') || '';
      if (lImage) {
        aContexteCourant.node.removeAttribute('ie-image');
      }
      const lImageIcon = aContexteCourant.node.getAttribute('ie-icon') || '';
      if (lImageIcon) {
        aContexteCourant.node.removeAttribute('ie-icon');
      }
      const lIconSize = aContexteCourant.node.getAttribute('ie-iconsize') || '';
      if (lIconSize) {
        aContexteCourant.node.removeAttribute('ie-iconsize');
      }
      const lEstBoutonCarre = $(aContexteCourant.node).hasClass('bouton-carre');
      if (lEstBoutonCarre) {
        let lWidthDefaut = 0;
        if (aContexteCourant.node.style.width) {
          const lWidth = Math.round($(aContexteCourant.node).innerWidth());
          if (lWidth > 0) {
            lWidthDefaut = Math.max(10, lWidth - 2 - 2);
          }
        }
        lOptions = Object.assign(lOptions, {
          theme: Type_ThemeBouton_1.TypeThemeBouton.neutre,
          widthBoutonImage: lWidthDefaut,
          heightTexteBoutonImage: 0,
          heightImageBoutonImage: 0,
        });
      }
      let lDisabled = false;
      const lModele = aOutils.getModel(aContexteCourant);
      let lInfosGetLibelle;
      if (lModele && aContexteCourant.data.$modeleParsed) {
        const lInfosEvent = aOutils.getAccesParametresModel(
            'event',
            aContexteCourant,
          ),
          lInfosGetDisabled = aOutils.getAccesParametresModel(
            'getDisabled',
            aContexteCourant,
          ),
          lInfosGetOptions = aOutils.getAccesParametresModel(
            'getOptions',
            aContexteCourant,
          );
        lInfosGetLibelle = aOutils.getAccesParametresModel(
          'getLibelle',
          aContexteCourant,
        );
        const lAvecControleSaisie =
          aOutils.getControleSaisieEvent(aContexteCourant);
        let lKeyUpValiderAIgnorer = false;
        if (lInfosEvent.estFonction) {
          const lRefresh = aContexteCourant.contexte.refresh;
          lJBouton
            .eventValidation(function (aEvent) {
              if (lOptions.disabled) {
                return;
              }
              if (aEvent.type === 'keyup') {
                if (lKeyUpValiderAIgnorer) {
                  lKeyUpValiderAIgnorer = false;
                  return;
                }
              }
              const lAction = () => {
                const lResult = lInfosEvent.callback([
                  aEvent,
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
            })
            .on({
              focusin: function () {
                if (
                  window.GNavigateur &&
                  window.GNavigateur.ShiftTouche !== null
                ) {
                  lKeyUpValiderAIgnorer = _estToucheValider(
                    window.GNavigateur.CodeTouche,
                  );
                  if (lKeyUpValiderAIgnorer) {
                    $(window)
                      .off('keydown.IEHTMLBoutonKeyupAIgnorer')
                      .one('keydown.IEHTMLBoutonKeyupAIgnorer', () => {
                        lKeyUpValiderAIgnorer = false;
                      });
                  }
                }
              },
              focusout: function () {
                lKeyUpValiderAIgnorer = false;
              },
            });
        }
        if (lInfosGetDisabled.valide) {
          const lGetter = function () {
            return !!lInfosGetDisabled.callback([
              lBouton,
              aContexteCourant.data,
            ]);
          };
          if (
            lInfosGetDisabled.estFonction ||
            !lGetter() ||
            lGetter() === true
          ) {
            lDisabled = !!lGetter();
            aOutils.abonnerRefresh(
              () => {
                const lDisabled = !!lGetter();
                if (lDisabled !== lOptions.disabled) {
                  lOptions.disabled = lDisabled;
                  $(lBouton).inputDisabled(lDisabled);
                }
              },
              lBouton,
              aContexteCourant,
            );
          } else {
            IE.log.addLog(
              'echec getDisabled de ie-bouton, propriété incorrecte du model "' +
                lModele +
                '"',
            );
          }
        }
        if (lInfosGetOptions.estFonction) {
          const lOptionsPerso = lInfosGetOptions.callback([
            lBouton,
            aContexteCourant.data,
          ]);
          if (lOptionsPerso) {
            Object.assign(lOptions, lOptionsPerso);
          }
        }
        aOutils.surNodeEtNodeAfter(aContexteCourant);
        aContexteCourant.invocateurNode.abonner(
          aOutils.nomInvocRefresh,
          (aParams) => {
            if (aParams.refreshHtml) {
              const lHasDots = aParams.html === u_Dots;
              if (lOptions.hasDots !== lHasDots) {
                lOptions.hasDots = lHasDots;
                if (lOptions.hasDots) {
                  lJBouton.addClass('has-dots');
                } else {
                  lJBouton.removeClass('has-dots');
                }
              }
            }
          },
        );
      }
      aOutils.copyAttributs(aContexteCourant.node, lBouton, (aName) => {
        switch (aName) {
          case 'disabled':
            lDisabled = true;
            break;
        }
      });
      let lClassDefaut = '';
      if (!lBouton.style.height && !lImage && !lImageIcon) {
        lClassDefaut = ' ieBoutonDefautSansImage';
      }
      switch (lOptions.theme) {
        case Type_ThemeBouton_1.TypeThemeBouton.primaire:
          if (
            !lJBouton.hasClass(Type_ThemeBouton_1.TypeThemeBouton.secondaire) &&
            !lJBouton.hasClass(Type_ThemeBouton_1.TypeThemeBouton.neutre)
          ) {
            lJBouton.addClass(Type_ThemeBouton_1.TypeThemeBouton.primaire);
          }
          break;
        case Type_ThemeBouton_1.TypeThemeBouton.neutre:
          if (
            !lJBouton.hasClass(Type_ThemeBouton_1.TypeThemeBouton.secondaire) &&
            !lJBouton.hasClass(Type_ThemeBouton_1.TypeThemeBouton.primaire)
          ) {
            lJBouton.addClass(Type_ThemeBouton_1.TypeThemeBouton.neutre);
          }
          break;
      }
      if (!lDisabled && lOptions.disabled) {
        lJBouton.attr('disabled', '');
      } else if (lDisabled) {
        $(lBouton).inputDisabled(true);
      }
      lOptions.disabled = lDisabled;
      const lCss = { 'font-weight': lOptions.fontWeight };
      let lWrapperHtml;
      if (lImage || lImageIcon) {
        lWrapperHtml = function (aHtml) {
          return IE.jsx.str('span', { 'ie-ellipsis-multiline': true }, aHtml);
        };
        const lHtmlImage = lImage
          ? IE.jsx.str('span', { class: lImage })
          : IE.jsx.str('i', {
              class: ['ieBoutonIcon', lImageIcon],
              style: lIconSize ? `font-size:${lIconSize}` : false,
              'aria-hidden': 'true',
            });
        if (lEstBoutonCarre) {
          lInnerHtml = [
            IE.jsx.str('span', { class: 'ieBtnContImg-img' }, lHtmlImage),
            IE.jsx.str(
              'span',
              { class: 'ieBtnContImg-texte' },
              lWrapperHtml(lInnerHtml),
            ),
          ].join('');
          lCss.padding = 1;
        } else {
          lInnerHtml = IE.jsx.str(
            'span',
            { class: 'ieBtnContImg-img' },
            IE.jsx.str(
              IE.jsx.fragment,
              null,
              lHtmlImage,
              IE.jsx.str(
                'span',
                {
                  'ie-ellipsis':
                    aContexteCourant.node.hasAttribute('ie-ellipsis'),
                },
                lInnerHtml,
              ),
            ),
          );
        }
      }
      if (lOptions.minWidth > 0) {
        lCss['min-width'] = lOptions.minWidth + 'px';
      }
      let lClasse = 'ieBouton ';
      lClasse += 'ie-ripple ';
      lClasse = (lOptions.hasDots ? 'has-dots ' : '') + lClasse;
      lJBouton
        .css(Object.assign(lCss, _getCss()))
        .addClass(lClasse + ' NoWrap' + lClassDefaut)
        .on({
          mouseout: function () {
            if (window.GNavigateur && window.GNavigateur.isTactile) {
              return;
            }
            if (lOptions.disabled) {
              return;
            }
            $(this).css(_getCss(false));
          },
          mouseover: function () {
            if (window.GNavigateur && window.GNavigateur.isTactile) {
              return;
            }
            if (lOptions.disabled) {
              return;
            }
            $(this).css(_getCss(true));
          },
          IEDisabled: function () {
            const lJThis = $(this);
            lOptions.disabled = lJThis.is(':disabled');
            if (lOptions.disabled) {
              lJThis.removeClass('AvecMain');
            } else {
              lJThis.addClass('AvecMain');
            }
            lJThis.css(_getCss());
          },
        });
      const lRacine = lJBouton.get(0);
      aOutils.replaceNode(aContexteCourant.node, lRacine);
      aContexteCourant.node = lJBouton.get(0);
      if (lInnerHtml) {
        aOutils.injectHTML({
          element: lRacine,
          html: lInnerHtml,
          controleur: aContexteCourant.controleur,
          ignorerScroll: true,
          contexte: aContexteCourant.contexte,
        });
      }
      if (lImage || lImageIcon) {
        if (lEstBoutonCarre) {
          aContexteCourant.nodeTransfertContenuDynamique = $(
            aContexteCourant.node,
          )
            .find('>.ieBtnContImg-texte')
            .get(0);
        } else {
          aContexteCourant.nodeTransfertContenuDynamique = $(
            aContexteCourant.node,
          )
            .find('>.ieBtnContImg-img>:not(:first-child)')
            .get(0);
        }
      }
      if (lInfosGetLibelle && lInfosGetLibelle.estFonction) {
        aOutils.addGetterHtml(aContexteCourant, lInfosGetLibelle, lWrapperHtml);
      }
      aOutils.addCommentaireDebug(
        lRacine,
        'ie-bouton' +
          (lImage ? ' ie-image="' + lImage + '"' : '') +
          (lImageIcon ? ' ie-icon="' + lImageIcon + '"' : '') +
          (lIconSize ? ' ie-iconsize="' + lIconSize + '"' : ''),
      );
      return { node: aContexteCourant.node, avecCompileFils: false };
    });
  },
  fn: 'iehtml.bouton.js',
});