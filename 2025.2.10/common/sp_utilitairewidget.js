IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireWidget = void 0;
    const GUID_1 = require('GUID');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const jsx_1 = require('jsx');
    require('Widgets-dashboard.css');
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
        const H = [];
        H.push(
          '<header',
          aParams.hint ? ' title="' + aParams.hint + '">' : '>',
          aParams.titre ? aParams.titre : '',
          '</header>',
        );
        return H.join('');
      },
      composeWidget(aWidget) {
        return UtilitaireWidget.compose({
          titre: UtilitaireWidget.composeTitreWidget(aWidget),
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
      composeTitreWidget(aWidget) {
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
                'ie-ellipsis': !aWidget.hint && !aWidget.titreFixe,
              },
              IE.jsx.str(
                'span',
                {
                  id: aWidget.id + '_TitreText',
                  tabindex: '0',
                  'ie-node': lExistePage
                    ? (0, jsx_1.jsxFuncAttr)(
                        'boutons.surToutVoir',
                        aWidget.genre,
                      )
                    : false,
                  role: lExistePage ? 'link' : false,
                  'ie-tooltipdescribe': lExistePage
                    ? (aWidget.hint ? aWidget.hint + '\n' : '') +
                      'Accéder à l'affichage dédié'
                    : false,
                },
                lTitre,
              ),
            ),
          );
        } else {
          H.push(
            '<h2 class="sr-only" id="' + aWidget.id + '_TitreText">',
            aWidget.hint ? aWidget.hint : '',
            '</h2>',
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
            ),
          );
        } else if (aWidget.infosURLExterne) {
          const lInfos = aWidget.infosURLExterne();
          if (lInfos) {
            H.push(UtilitaireWidget.composeLienExterne(aWidget, lInfos));
          }
        }
        if (aWidget && aWidget.avecActualisation) {
          H.push(
            IE.jsx.str('i', {
              role: 'button',
              tabindex: '0',
              'ie-tooltiplabel': 'Actualiser',
              id: aWidget.id + UtilitaireWidget.suffixIdActualiser,
              class: 'as-button bt-widget icon icon_refresh',
              'ie-node': (0, jsx_1.jsxFuncAttr)(
                'boutons.surActualiser',
                aWidget.genre,
              ),
            }),
          );
        }
        if (this.parametres.avecFermer) {
          H.push(
            IE.jsx.str('i', {
              role: 'button',
              tabindex: '0',
              'ie-tooltiplabel': 'Fermer ce widget.\nVous pourrez le réafficher à partir du bouton "Paramètres des widgets" (symbolisé par une roue crantée)',
              class: 'as-button bt-close icon icon_fermeture_widget',
              'ie-node': (0, jsx_1.jsxFuncAttr)(
                'boutons.surFermer',
                aWidget.genre,
              ),
            }),
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
        const H = [];
        aWidget.nbrItemsVisible =
          aWidget.nbrItemsVisible === undefined
            ? this.nbrItemsVisible
            : aWidget.nbrItemsVisible;
        if (aWidget.listeElementsGraphiques !== undefined) {
          H.push('<div class="filtre-conteneur">');
          aWidget.listeElementsGraphiques.forEach((D) => {
            if (!!D.id) {
              H.push('<div id="' + D.id + '"></div>');
            } else if (!!D.html) {
              H.push(D.html);
            }
          });
          H.push('</div>');
        }
        H.push(
          '<div class="content-container overflow-auto" id="',
          aWidget.id,
          UtilitaireWidget.suffixIdWrapper,
          '" ',
          ' role="presentation">',
        );
        H.push(
          '<div id="',
          aWidget.id + UtilitaireWidget.suffixIdContenu,
          '">',
        );
        H.push(
          aWidget.afficherMessage && aWidget.message
            ? UtilitaireWidget.composeMessageAucuneDonnee(aWidget)
            : aWidget.getHtml(),
        );
        H.push('</div>');
        H.push(
          IE.jsx.str('div', {
            id: aWidget.id + UtilitaireWidget.suffixIdFooter,
            class: 'as-footer',
          }),
        );
        H.push('</div>');
        return H.join('');
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
            { controleur: aInstanceWidget.controleur },
          );
        }
        ObjetHtml_1.GHtml.setHtml(
          lWidget.id + '_TitreText',
          lWidget.titre +
            (lWidget.nbrElements > 0 ? ' (' + lWidget.nbrElements + ')' : ''),
          { controleur: aInstanceWidget.controleur },
        );
        this.actualiserFooter(lWidget);
        this.afficherMasquerListe(lWidget);
      },
      composeMessageAucuneDonnee(aWidget, aMessage) {
        const H = [];
        H.push(
          '<div class="no-events" aria-label="',
          aWidget && aWidget.message ? aWidget.message : aMessage,
          '"><p>',
          aWidget && aWidget.message ? aWidget.message : aMessage,
          '</p></div>',
        );
        return H.join('');
      },
      composeToutVoir(aWidget, aTrad) {
        return IE.jsx.str(
          'ie-bouton',
          {
            id: aWidget.id + UtilitaireWidget.suffixIdToutVoir,
            role: 'link',
            class: 'small-bt themeBoutonNeutre bg-white',
            'ie-icon': 'icon_affichage_widget',
            'ie-node': (0, jsx_1.jsxFuncAttr)(
              'boutons.surToutVoir',
              aWidget.genre,
            ),
            tabindex: '0',
            'ie-tooltiplabel': aTrad,
          },
          'Tout voir',
        );
      },
      composeLienExterne(aWidget, aInfos) {
        const lTooltip = () => {
          let lResult = '';
          const lInfos = aWidget.infosURLExterne();
          if (lInfos) {
            lResult = lInfos.titre;
          }
          return lResult;
        };
        return IE.jsx.str(
          'ie-bouton',
          {
            id: aWidget.id + UtilitaireWidget.suffixIdToutVoir,
            role: 'link',
            class: 'small-bt themeBoutonNeutre bg-white',
            'ie-icon': 'icon_external_link',
            'ie-node': (0, jsx_1.jsxFuncAttr)(
              'boutons.surLienExterne',
              aWidget.genre,
            ),
            tabindex: '0',
            'ie-tooltiplabel': lTooltip,
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
                  class: 'btn-collapse',
                  tabindex: '0',
                  role: 'button',
                  'ie-tooltiplabel': 'Afficher les éléments masqués',
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
          $('.btn-collapse', lWidgetComplet).eventValidation(function () {
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
  },
  fn: 'utilitairewidget.js',
});