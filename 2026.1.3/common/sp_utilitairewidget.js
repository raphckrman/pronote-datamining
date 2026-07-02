IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireWidget = exports.LigneWidgetLink = void 0;
    const tslib_1 = require('tslib');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const Widgets_dashboard_css_1 = require('@cp/Produit/Css/Widgets-dashboard.css');
    const IconeSvgAffichage_widget_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAffichage_widget');
    const IconeSvgFermeture_widget_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFermeture_widget');
    const IconeSvgExternal_link_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgExternal_link');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    const UtilitaireWidget = {
      parametres: {
        avecFermer: false,
        avecToutVoir: false,
        avecCompteur: false,
      },
      nbrItemsVisible: 3,
      suffixIdWidget: GUID_1.GUID.getId(),
      suffixIdContenu: '',
      suffixIdWrapper: GUID_1.GUID.getId(),
      suffixIdActualiser: GUID_1.GUID.getId(),
      suffixIdToutVoir: GUID_1.GUID.getId(),
      suffixIdFooter: GUID_1.GUID.getId(),
      invisible: false,
      setParametres(aParametres) {
        this.parametres = aParametres;
      },
      compose(aParams) {
        const H = [];
        H.push(this.composeTitre(aParams));
        H.push(aParams.contenu);
        return H.join('');
      },
      composeTitre(aParams) {
        if (UtilitaireWidget.invisible) {
          return '';
        }
        return IE.jsx.str('header', null, aParams.titre);
      },
      composeWidget(aWidget, aParametresJSX) {
        return UtilitaireWidget.compose({
          titre: UtilitaireWidget.composeTitreWidget(aWidget, aParametresJSX),
          hint: aWidget.hint,
          contenu: UtilitaireWidget.composeContenuWidget(aWidget),
        });
      },
      existePageRedirection(aWidget) {
        let lExiste =
          (aWidget.page &&
            (GEtatUtilisateur.existeGenreOnglet
              ? GEtatUtilisateur.existeGenreOnglet(aWidget.page.Onglet)
              : true)) ||
          !!aWidget.getPage;
        return (
          lExiste &&
          (!aWidget.existePageRedirection || aWidget.existePageRedirection())
        );
      },
      composeTitreWidget(aWidget, aParametresJSX) {
        const lExistePage = UtilitaireWidget.existePageRedirection(aWidget);
        const H = [];
        if (aWidget.titre) {
          const lTitre =
            aWidget.titre +
            (aWidget.nbrElements > 0 &&
            (this.parametres.avecCompteur ||
              UtilitaireWidget._avecCompteur(aWidget))
              ? ' (' + aWidget.nbrElements + ')'
              : '');
          H.push(
            IE.jsx.str(
              'h2',
              {
                class: lExistePage ? 'clickable' : false,
                ie_ellipsis: !aWidget.hint && !aWidget.titreFixe,
              },
              IE.jsx.str(
                'span',
                {
                  id: aWidget.id + '_TitreText',
                  tabindex: '0',
                  ie_node: lExistePage
                    ? aParametresJSX.surToutVoir(aWidget.genre)
                    : false,
                  role: lExistePage ? 'link' : false,
                  ie_tooltipdescribe:
                    aWidget.hint || lExistePage
                      ? (aWidget.hint ? aWidget.hint + '\n' : '') +
                        (lExistePage
                          ? 'Accéder à l'affichage dédié'
                          : '')
                      : false,
                },
                lTitre,
              ),
            ),
          );
        } else {
          H.push(
            IE.jsx.str(
              'h2',
              { class: 'sr-only', id: aWidget.id + '_TitreText' },
              aWidget.hint,
            ),
          );
        }
        H.push('<div class="cta-conteneur">');
        if (lExistePage) {
          H.push(
            UtilitaireWidget.composeToutVoir(
              aWidget,
              this.parametres.avecToutVoir
                ? 'Tout voir'
                : 'Accéder à l'affichage dédié',
              aParametresJSX.surToutVoir,
            ),
          );
        } else if (aWidget.infosURLExterne) {
          const lInfos = aWidget.infosURLExterne();
          if (lInfos) {
            H.push(
              UtilitaireWidget.composeLienExterne(
                aWidget,
                lInfos,
                aParametresJSX.surLienExterne,
              ),
            );
          }
        }
        if (
          aWidget &&
          aWidget.avecActualisation &&
          aParametresJSX.surActualiser
        ) {
          H.push(
            IE.jsx.str('i', {
              role: 'button',
              tabindex: '0',
              ie_tooltiplabel: 'Actualiser',
              id: aWidget.id + UtilitaireWidget.suffixIdActualiser,
              class: 'as-button bt-widget icon icon_refresh',
              ie_node: aParametresJSX.surActualiser(aWidget.genre),
            }),
          );
        }
        if (this.parametres.avecFermer && aParametresJSX.surFermer) {
          H.push(
            IE.jsx.str(
              IEHtml_BtnImage_1.BtnIcon,
              {
                tabindex: '0',
                ie_tooltiplabel: 'Fermer ce widget.\nVous pourrez le réafficher à partir du bouton "Paramètres des widgets" (symbolisé par une roue crantée)',
                class: 'as-button bt-close',
                ie_node: aParametresJSX.surFermer(aWidget.genre),
              },
              IE.jsx.str(
                IconeSvgFermeture_widget_1.IconeSvgFermeture_widget,
                null,
              ),
            ),
          );
        }
        if (
          aWidget.listeElementsGraphiques &&
          aWidget.listeElementsGraphiques.length
        ) {
          aWidget.listeElementsGraphiques.forEach((D) => {
            if (!!D.htmlMrFiche) {
              H.push(D.htmlMrFiche);
            }
          });
        }
        H.push('</div>');
        return H.join('');
      },
      composeContenuWidget(aWidget) {
        var _a;
        aWidget.nbrItemsVisible =
          aWidget.nbrItemsVisible === undefined
            ? this.nbrItemsVisible
            : aWidget.nbrItemsVisible;
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          aWidget.listeElementsGraphiques !== undefined &&
            IE.jsx.str(
              'div',
              { class: 'filtre-conteneur' },
              aWidget.listeElementsGraphiques.map((D) => {
                if (!!D.id) {
                  return IE.jsx.str('div', { id: D.id });
                }
                if (!!D.html) {
                  return D.html;
                }
              }),
            ),
          IE.jsx.str(
            'div',
            {
              class: 'content-container overflow-auto',
              id: aWidget.id + UtilitaireWidget.suffixIdWrapper,
              role: 'presentation',
            },
            IE.jsx.str(
              'div',
              { id: aWidget.id + UtilitaireWidget.suffixIdContenu },
              aWidget.afficherMessage && aWidget.message
                ? UtilitaireWidget.composeMessageAucuneDonnee(aWidget)
                : (_a = aWidget.getHtml) === null || _a === void 0
                  ? void 0
                  : _a.call(aWidget),
            ),
            IE.jsx.str('div', {
              id: aWidget.id + UtilitaireWidget.suffixIdFooter,
              class: 'as-footer',
            }),
            IE.jsx.str('i', {
              class: [
                Widgets_dashboard_css_1.SWidgetsDashboard.iconeWidgetFond,
              ],
              'aria-hidden': 'true',
            }),
          ),
        );
      },
      actualiserWidget(aInstanceWidget) {
        const lWidget = aInstanceWidget.donnees;
        if (!lWidget.avecActualisation) {
          ObjetHtml_1.GHtml.addClass(
            lWidget.id + UtilitaireWidget.suffixIdActualiser,
            'hideActualiser',
          );
        } else {
          ObjetHtml_1.GHtml.delClass(
            lWidget.id + UtilitaireWidget.suffixIdActualiser,
            'hideActualiser',
          );
        }
        const lIdContenu = lWidget.id + UtilitaireWidget.suffixIdContenu;
        if (ObjetHtml_1.GHtml.elementExiste(lIdContenu)) {
          ObjetHtml_1.GHtml.setHtml(
            lIdContenu,
            lWidget.afficherMessage && lWidget.message
              ? UtilitaireWidget.composeMessageAucuneDonnee(lWidget)
              : lWidget.getHtml(),
          );
        }
        if (lWidget.titre) {
          ObjetHtml_1.GHtml.setHtml(
            lWidget.id + '_TitreText',
            lWidget.titre +
              (lWidget.nbrElements > 0 ? ' (' + lWidget.nbrElements + ')' : ''),
          );
        }
        this.actualiserFooter(lWidget);
        this.afficherMasquerListe(lWidget);
      },
      composeMessageAucuneDonnee(aWidget, aMessage) {
        const H = [];
        H.push(
          IE.jsx.str(
            'div',
            { class: 'no-events' },
            IE.jsx.str(
              'p',
              null,
              aWidget && aWidget.message ? aWidget.message : aMessage,
            ),
          ),
        );
        return H.join('');
      },
      composeToutVoir(aWidget, aTrad, aJsxNodeSurToutVoir) {
        return IE.jsx.str(
          IEHtml_Bouton_1.Bouton,
          {
            id: aWidget.id + UtilitaireWidget.suffixIdToutVoir,
            role: 'link',
            class:
              'small-bt themeBoutonNeutre bg-white inline-flex flex-center flex-gap',
            ie_node: aJsxNodeSurToutVoir(aWidget.genre),
            tabindex: '0',
            ie_tooltiplabel: aTrad,
          },
          'Tout voir',
          IE.jsx.str(IconeSvgAffichage_widget_1.IconeSvgAffichage_widget, null),
        );
      },
      composeLienExterne(aWidget, aInfos, aJsxNodeSurLienExterne) {
        const lTooltip = () => {
          let lResult = '';
          const lInfos = aWidget.infosURLExterne();
          if (lInfos) {
            lResult = lInfos.titre;
          }
          return lResult;
        };
        return IE.jsx.str(
          IEHtml_Bouton_1.Bouton,
          {
            id: aWidget.id + UtilitaireWidget.suffixIdToutVoir,
            role: 'link',
            class: 'small-bt themeBoutonNeutre bg-white',
            svg: IE.jsx.str(
              IconeSvgExternal_link_1.IconeSvgExternal_link,
              null,
            ),
            ie_node: aJsxNodeSurLienExterne(aWidget.genre),
            tabindex: '0',
            ie_tooltiplabel: lTooltip,
          },
          aInfos.libelle ||
            'Accéder au site web',
        );
      },
      actualiserFooter(aWidget) {
        const lJQFooter = $('#' + aWidget.id + UtilitaireWidget.suffixIdFooter);
        lJQFooter.hide();
        if (aWidget.isCollapsible) {
          let lNbElementsAffichables = -1;
          if (!!aWidget.nbrListes && aWidget.nbrListes > 0 && !!aWidget.liste) {
            lNbElementsAffichables =
              UtilitaireWidget._getNbrElementsNonVisibles(aWidget);
          } else if (aWidget.nbrElements > aWidget.nbrItemsVisible) {
            lNbElementsAffichables =
              aWidget.nbrElements - aWidget.nbrItemsVisible;
          }
          if (lNbElementsAffichables > 0) {
            const lIdNbEltMasque =
              aWidget.id + UtilitaireWidget.suffixIdFooter + '_NbEltMasque';
            lJQFooter.show();
            lJQFooter.ieHtml(
              IE.jsx.str(
                'a',
                {
                  class: [
                    'btn-collapse',
                    IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple,
                  ],
                  tabindex: '0',
                  role: 'button',
                  ie_tooltiplabel: 'Afficher les éléments masqués',
                  'aria-describedby': lIdNbEltMasque,
                },
                IE.jsx.str('i', {
                  class: 'icon_eye_open',
                  'aria-hidden': 'true',
                }),
                IE.jsx.str('span', { class: 'counter' }, '+'),
                IE.jsx.str(
                  'span',
                  { id: lIdNbEltMasque },
                  lNbElementsAffichables,
                ),
              ),
            );
          }
        }
      },
      afficherMasquerListe(aWidget) {
        aWidget.nbrItemsVisible =
          aWidget.nbrItemsVisible === undefined
            ? this.nbrItemsVisible
            : aWidget.nbrItemsVisible;
        if (aWidget.isCollapsible) {
          const lWidgetComplet = $('#' + aWidget.id).closest('.widget');
          let lListItems;
          if (
            aWidget.nomDonnees === 'actualites' &&
            lWidgetComplet.find('ul ul').length > 1
          ) {
            lListItems = lWidgetComplet.find(
              '.content-container ul.liste-clickable',
            );
          } else {
            lListItems = lWidgetComplet.find('.content-container ul');
          }
          let lItems = lListItems.find(
            ' > li:gt(' + (aWidget.nbrItemsVisible - 1) + ')',
          );
          lItems.addClass('more masked');
          lItems.attr('aria-hidden', 'true');
          lItems.toArray().forEach((aNodeItems) => {
            const lTabElements =
              ObjetHtml_1.GHtml.getElementsFocusablesDElement(aNodeItems, {
                ignoreAriaHidden: false,
              });
            lTabElements.forEach((aNode) => {
              $(aNode).attr('tabindex', -1);
            });
          });
          $('.btn-collapse', lWidgetComplet).on('validation', function () {
            var _a;
            const lIconBt = $(this).find('i');
            const more = lListItems.find('li.more');
            lIconBt.hasClass('icon_eye_close')
              ? lIconBt.toggleClass('icon_eye_close icon_eye_open')
              : lIconBt.toggleClass('icon_eye_open icon_eye_close');
            let lAriaLabelBouton;
            if (more.hasClass('masked')) {
              lAriaLabelBouton = 'Cacher les éléments';
              more.toggleClass('masked unmasked');
              let lTabElements = [];
              lItems.toArray().forEach((aNodeItems) => {
                lTabElements = lTabElements.concat(
                  ObjetHtml_1.GHtml.getElementsFocusablesDElement(aNodeItems, {
                    ignoreAriaHidden: false,
                  }),
                );
              });
              lTabElements.forEach((aNode) => {
                $(aNode).attr('tabindex', 0);
              });
              more.attr('aria-hidden', null);
              (_a = lTabElements[0]) === null || _a === void 0
                ? void 0
                : _a.focus();
              $(this).find('span.counter').text('-');
            } else {
              lAriaLabelBouton = 'Afficher les éléments masqués';
              more.toggleClass('unmasked masked');
              lItems.toArray().forEach((aNodeItems) => {
                const lTabElements =
                  ObjetHtml_1.GHtml.getElementsFocusablesDElement(aNodeItems, {
                    ignoreAriaHidden: false,
                  });
                lTabElements.forEach((aNode) => {
                  $(aNode).attr('tabindex', -1);
                });
              });
              more.attr('aria-hidden', 'true');
              $(this).find('span.counter').text('+');
            }
            $(this).attr('aria-label', lAriaLabelBouton);
          });
        }
      },
      focusSurWidgetApresActualisation(aWidget) {
        if (aWidget === null || aWidget === void 0 ? void 0 : aWidget.id) {
          const lId = aWidget.id + UtilitaireWidget.suffixIdWidget;
          if (ObjetHtml_1.GHtml.elementExiste(lId)) {
            const lTabFocus =
              ObjetHtml_1.GHtml.getElementsFocusablesDElement(lId);
            if (lTabFocus.length > 0) {
              lTabFocus[0].focus();
              return true;
            }
          }
        }
        return false;
      },
      _getNbrElementsNonVisibles(aWidget) {
        let lNbrElements = 0;
        const lListes = [];
        for (let i = 0, j = -1, lNbr = aWidget.liste.count(); i < lNbr; i++) {
          if (aWidget.liste.get(i).estUnDeploiement) {
            j++;
            lListes[j] = new ObjetListeElements_1.ObjetListeElements();
            continue;
          }
          lListes[j].add(aWidget.liste.get(i));
        }
        for (let i = 0, lNbr = lListes.length; i < lNbr; i++) {
          if (lListes[i].count() > aWidget.nbrItemsVisible) {
            lNbrElements =
              lNbrElements + (lListes[i].count() - aWidget.nbrItemsVisible);
          }
        }
        return lNbrElements;
      },
      _avecCompteur(aWidget) {
        return ['discussions'].includes(aWidget.nomDonnees);
      },
    };
    exports.UtilitaireWidget = UtilitaireWidget;
    const LigneWidgetLink = (_a) => {
      var {
          nonCliquable,
          iconeSvg,
          childrenHorsWrap,
          validation,
          role,
          'aria-haspopup': ariaHaspopup,
          'aria-labelledby': ariaLabelledby,
          'aria-label': ariaLabel,
        } = _a,
        aProps = tslib_1.__rest(_a, [
          'nonCliquable',
          'iconeSvg',
          'childrenHorsWrap',
          'validation',
          'role',
          'aria-haspopup',
          'aria-labelledby',
          'aria-label',
        ]);
      const lId = GUID_1.GUID.getId();
      const lClasses = Array.isArray(aProps.class)
        ? aProps.class
        : [aProps.class || ''];
      lClasses.push(nonCliquable && 'yet-unclickable');
      if (!nonCliquable) {
        lClasses.push(IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple);
      }
      delete aProps.class;
      const lAriaLabelledby =
        nonCliquable || ariaLabel
          ? false
          : [(aProps.children.length > 0 && lId) || '', ariaLabelledby].join(
              ' ',
            );
      return IE.jsx.str(
        'li',
        Object.assign({ class: lClasses }, aProps, {
          ie_eventmap: nonCliquable ? false : { validation: validation },
        }),
        IE.jsx.str('a', {
          class: 'sr-only',
          'aria-hidden': nonCliquable ? 'true' : false,
          role: nonCliquable ? false : role || 'link',
          tabindex: nonCliquable ? '-1' : '0',
          'aria-haspopup': ariaHaspopup || false,
          'aria-label': ariaLabel || false,
          'aria-labelledby': lAriaLabelledby,
        }),
        iconeSvg,
        aProps.children.length > 0 &&
          IE.jsx.str('div', { class: 'wrap', id: lId }, aProps.children),
        childrenHorsWrap,
      );
    };
    exports.LigneWidgetLink = LigneWidgetLink;
  },
  fn: 'utilitairewidget.js',
});