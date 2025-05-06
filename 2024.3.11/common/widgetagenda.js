IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.WidgetAgenda = void 0;
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetWAI_1 = require('ObjetWAI');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetDate_1 = require('ObjetDate');
    const UtilitaireVisiosSco_1 = require('UtilitaireVisiosSco');
    const tag_1 = require('tag');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetFenetre_DetailAgenda_1 = require('ObjetFenetre_DetailAgenda');
    const ObjetWidget_1 = require('ObjetWidget');
    class WidgetAgenda extends ObjetWidget_1.Widget.ObjetWidget {
      construire(aParams) {
        this.idEvent = 'idEventWidget_';
        this.donnees = aParams.donnees;
        const lWidget = {
          html: this._composeWidgetAgenda(),
          nbrElements: this.donnees.listeEvenements.count(),
          afficherMessage: this.donnees.listeEvenements.count() === 0,
          fermerFiches: () => {
            this.fenetreDetailAgenda.fermer();
          },
        };
        $.extend(this.donnees, lWidget);
        aParams.construireWidget(aParams.donnees);
        this._creerObjetAgenda();
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(this), {
          getNode(aIndice) {
            $(this.node).eventValidation(() => {
              if (aInstance.fenetreDetailAgenda.estAffiche()) {
                aInstance.fenetreDetailAgenda.fermer();
              }
              aInstance.fenetreDetailAgenda.setDonnees({
                detail: aInstance.donnees.listeEvenements.get(aIndice),
                id: aInstance.idEvent + aIndice,
              });
            });
          },
          getNodeVisio(aIndice, aAvecOuvertureFenetre) {
            $(this.node).on('click', (aEvent) => {
              const lElement = aInstance.donnees.listeEvenements.get(aIndice);
              if (lElement && lElement.visio) {
                aEvent.stopPropagation();
                if (aAvecOuvertureFenetre) {
                  const lOptions = {
                    titre: 'Lien pour un conseil en visioconférence',
                  };
                  UtilitaireVisiosSco_1.UtilitaireVisios.ouvrirFenetreConsultVisio(
                    lElement.visio,
                    lOptions,
                  );
                }
              }
            });
          },
        });
      }
      _composeEvenement(aEvenement, i) {
        var _a;
        const composeCercleEleve = (aEleve) =>
          '<span class="circle" aria-label="' +
          aEleve +
          '" ie-hint="' +
          aEleve +
          '">' +
          aEleve.substring(0, 1) +
          '</span>';
        const H = [];
        H.push('<li>');
        H.push(
          '<a class="wrapper-link" tabindex="0" id="',
          this.idEvent + i,
          '" ',
          ObjetWAI_1.GObjetWAI.composeAttribut({
            genre: ObjetWAI_1.EGenreAttribut.label,
            valeur:
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
                : ''),
          }),
          ObjetHtml_1.GHtml.composeAttr('ie-node', 'getNode', i),
          '>',
        );
        H.push('<div class="wrap">');
        H.push(
          '<div class="bloc-date-conteneur" aria-hidden="true">',
          ObjetDate_1.GDate.formatDate(
            aEvenement.DateDebut,
            '<div>%JJ</div><div>%MMM</div>',
          ),
          '</div>',
        );
        H.push('<div class="infos-agenda-conteneur">');
        H.push(
          '<h3 title="',
          'Afficher le détail de l'évènement',
          '">',
          aEvenement.getLibelle(),
          '</h3>',
        );
        H.push(
          '<span>' +
            this.donnees.listeEvenements._getDateEvenement({
              evenement: aEvenement,
            }) +
            '</span>',
        );
        H.push('</div>');
        H.push('</div>');
        if (aEvenement.listeEleves && aEvenement.listeEleves.length > 0) {
          H.push('<div class="liste-enfants">');
          aEvenement.listeEleves.forEach((aEleve) =>
            H.push(composeCercleEleve(aEleve)),
          );
          H.push('</div>');
        }
        if (aEvenement.eleveConvoque && aEvenement.eleveConvoque.prenom) {
          H.push(composeCercleEleve(aEvenement.eleveConvoque.prenom));
        }
        if (aEvenement.visio && aEvenement.visio.url) {
          if (IE.estMobile) {
            H.push(
              (0, tag_1.tag)('i', {
                class: [
                  'btn-lien-visio',
                  UtilitaireVisiosSco_1.UtilitaireVisios.getNomIconePresenceVisios(),
                ],
                'ie-node': tag_1.tag.funcAttr('getNodeVisio', [i, true]),
              }),
            );
          } else {
            H.push(
              (0, tag_1.tag)('a', {
                class: [
                  UtilitaireVisiosSco_1.UtilitaireVisios.getNomIconePresenceVisios(),
                ],
                href: ObjetChaine_1.GChaine.verifierURLHttp(
                  aEvenement.visio.url,
                ),
                target: '_blank',
                'ie-hint':
                  UtilitaireVisiosSco_1.UtilitaireVisios.getHintVisio(
                    aEvenement.visio,
                  ) || false,
                'ie-node': tag_1.tag.funcAttr('getNodeVisio', [i, false]),
              }),
            );
          }
        }
        H.push('</a>');
        H.push('</li>');
        return H.join('');
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