IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.WidgetAgenda = void 0;
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const UtilitaireVisiosSco_1 = require('@scolys/produit/script/utilitaire/UtilitaireVisiosSco');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetFenetre_DetailAgenda_1 = require('@scolys/produit/script/ObjetFenetre_DetailAgenda');
    const ObjetWidget_1 = require('@cp/script/ObjetWidget');
    const UtilitaireWidget_1 = require('@cp/Espace/Script/Utilitaire/UtilitaireWidget');
    class WidgetAgenda extends ObjetWidget_1.Widget.ObjetWidget {
      constructor(aParams) {
        super(aParams);
      }
      construire(aParams) {
        this.idEvent = 'idEventWidget_';
        this.donnees = aParams.donnees;
        let lNbEvenements = this.donnees.listeEvenements
          ? this.donnees.listeEvenements.count()
          : 0;
        const lWidget = {
          getHtml: this._composeWidgetAgenda.bind(this),
          nbrElements: lNbEvenements,
          afficherMessage: lNbEvenements === 0,
          fermerFiches: () => {
            this.fenetreDetailAgenda.fermer();
          },
        };
        $.extend(this.donnees, lWidget);
        aParams.construireWidget(aParams.donnees);
        this._creerObjetAgenda();
      }
      jsxNodeVisio(aEvenement, aAvecOuvertureFenetre, aNode) {
        $(aNode).on('validation', (aEvent) => {
          if (aEvenement && aEvenement.visio) {
            aEvent.stopPropagation();
            if (aAvecOuvertureFenetre) {
              const lOptions = {
                titre: 'Lien pour un conseil en visioconférence',
              };
              UtilitaireVisiosSco_1.UtilitaireVisios.ouvrirFenetreConsultVisio(
                aEvenement.visio,
                lOptions,
              );
            }
          }
        });
      }
      jsxNodeLien(aIndice) {
        if (this.fenetreDetailAgenda.estAffiche()) {
          this.fenetreDetailAgenda.fermer();
        }
        this.fenetreDetailAgenda.setDonnees({
          detail: this.donnees.listeEvenements.get(aIndice),
          id: this.idEvent + aIndice,
        });
      }
      _composeEvenement(aEvenement, i) {
        var _a;
        const composeCercleEleve = (aEleve) => {
          return IE.jsx.str(
            'span',
            { class: 'circle', ie_tooltiplabel: aEleve },
            aEleve.substring(0, 1),
          );
        };
        const lAriaLabel =
          aEvenement.getLibelle() +
          ' ' +
          this.donnees.listeEvenements
            ._getLibelleEvenement({ evenement: aEvenement })
            .join(', ') +
          ((
            (_a = aEvenement.listeEleves) === null || _a === void 0
              ? void 0
              : _a.length
          )
            ? ', ' + aEvenement.listeEleves.join(', ')
            : '') +
          (aEvenement.eleveConvoque
            ? ', ' + aEvenement.eleveConvoque.prenom
            : '');
        let lLienVisio = '';
        if (aEvenement.visio && aEvenement.visio.url) {
          const lLabel = aEvenement.visio.libelleLien || aEvenement.visio.url;
          if (IE.estMobile) {
            lLienVisio = IE.jsx.str('i', {
              class: [
                'btn-lien-visio',
                UtilitaireVisiosSco_1.UtilitaireVisios.getNomIconePresenceVisios(),
              ],
              ie_tooltipdescribe: () => {
                return UtilitaireVisiosSco_1.UtilitaireVisios.getHintVisio(
                  aEvenement.visio,
                );
              },
              'aria-label': lLabel,
              ie_node: this.jsxNodeVisio.bind(this, aEvenement, true),
              tabindex: '0',
              role: 'button',
              'aria-haspopup': 'dialog',
            });
          } else {
            lLienVisio = IE.jsx.str('a', {
              class: [
                UtilitaireVisiosSco_1.UtilitaireVisios.getNomIconePresenceVisios(),
              ],
              href: ObjetChaine_1.GChaine.verifierURLHttp(aEvenement.visio.url),
              target: '_blank',
              ie_tooltipdescribe: () => {
                return UtilitaireVisiosSco_1.UtilitaireVisios.getHintVisio(
                  aEvenement.visio,
                );
              },
              'aria-label': lLabel,
              ie_node: this.jsxNodeVisio.bind(this, aEvenement, false),
            });
          }
        }
        return IE.jsx.str(
          UtilitaireWidget_1.LigneWidgetLink,
          {
            id: this.idEvent + i,
            ie_tooltipdescribe: 'Afficher le détail de l'évènement',
            role: 'button',
            'aria-haspopup': 'dialog',
            'aria-label': lAriaLabel,
            childrenHorsWrap: IE.jsx.str(
              IE.jsx.fragment,
              null,
              aEvenement.listeEleves &&
                aEvenement.listeEleves.length > 0 &&
                IE.jsx.str(
                  'div',
                  { class: 'liste-enfants' },
                  aEvenement.listeEleves.map((aEleve) =>
                    composeCercleEleve(aEleve),
                  ),
                ),
              aEvenement.eleveConvoque &&
                aEvenement.eleveConvoque.prenom &&
                composeCercleEleve(aEvenement.eleveConvoque.prenom),
              lLienVisio,
            ),
            validation: this.jsxNodeLien.bind(this, i),
          },
          IE.jsx.str(
            'div',
            { class: 'bloc-date-conteneur', 'aria-hidden': 'true' },
            ObjetDate_1.GDate.formatDate(
              aEvenement.DateDebut,
              '<div>%JJ</div><div>%MMM</div>',
            ),
          ),
          IE.jsx.str(
            'div',
            { class: 'infos-agenda-conteneur' },
            IE.jsx.str('h3', null, aEvenement.getLibelle()),
            IE.jsx.str(
              'span',
              null,
              this.donnees.listeEvenements._getDateEvenement({
                evenement: aEvenement,
              }),
            ),
          ),
        );
      }
      _creerObjetAgenda() {
        this.fenetreDetailAgenda =
          ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
            ObjetFenetre_DetailAgenda_1.ObjetFenetre_DetailAgenda,
            {
              pere: this,
              initialiser(aInstance) {
                aInstance.setOptionsFenetre({
                  avecComposeBasInFooter: false,
                  avecTailleSelonContenu: true,
                  positionSurSouris: true,
                });
              },
            },
          );
        this.fenetreDetailAgenda.destructionSurFermeture = false;
        this.fenetreDetailAgenda.initialiser();
      }
      _composeWidgetAgenda() {
        const H = [];
        if (this.donnees.listeEvenements.count() > 0) {
          H.push('<ul class="liste-clickable">');
          for (let I = 0; I < this.donnees.listeEvenements.count(); I++) {
            H.push(
              this._composeEvenement(this.donnees.listeEvenements.get(I), I),
            );
          }
          H.push('</ul>');
        }
        return H.join('');
      }
    }
    exports.WidgetAgenda = WidgetAgenda;
  },
  fn: 'widgetagenda.js',
});