IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetModulePJ = void 0;
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    require('IEHtml.SelecFile.js');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const UtilitaireUrl_1 = require('UtilitaireUrl');
    const ToucheClavier_1 = require('ToucheClavier');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Tooltip_1 = require('Tooltip');
    class ObjetModulePJ extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.id_trombone = this.Nom + '_trombone';
        this.idOrigPJ = true;
        this.id_libellesPJ = this.Nom + '_libellesPJ';
        this.genreCommande = { menuContext: 0, click: 1 };
        this.setOptions({
          genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
          forcerEvenementSurClickIcon: false,
          IEModelChipsPJ: null,
          controleur: null,
          title: 'Ajouter une nouvelle pièce jointe',
          maxWidthLibelle: 0,
          addFiles: null,
          getDisabledFiles: null,
          libelleSelecteur: '',
          masquerListeChips: false,
          input: {},
        });
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          getNodeConteneur: function () {
            $(this.node).on('contextmenu', (event) => {
              event.stopImmediatePropagation();
              event.preventDefault();
              aInstance.callback.appel({
                action: aInstance.genreCommande.menuContext,
              });
              return false;
            });
          },
          getClassNodeConteneur() {
            return aInstance.Actif ? '' : 'is-disabled';
          },
          nodeTrombone: function () {
            if (
              aInstance.options.genrePJ ===
                Enumere_DocumentJoint_1.EGenreDocumentJoint.Url ||
              aInstance.options.forcerEvenementSurClickIcon
            ) {
              $(this.node).on('click keyup', (event) => {
                if (
                  event.type === 'keyup' &&
                  event.which !== ToucheClavier_1.ToucheClavier.RetourChariot &&
                  event.which !== ToucheClavier_1.ToucheClavier.Espace
                ) {
                  return;
                }
                event.stopImmediatePropagation();
                event.preventDefault();
                aInstance.callback.appel({
                  action: aInstance.genreCommande.click,
                  id: aInstance.getNomTrombone(),
                });
                return false;
              });
            }
          },
          getClassNodeTrombone: function () {
            return aInstance.options.libelleSelecteur && aInstance.Actif
              ? ' LienAccueil'
              : '';
          },
          trombone: {
            getOptionsSelecFile: function () {
              return aInstance.options.getOptionsSelecFile();
            },
            addFiles: function (aParams) {
              if (aInstance.options.addFiles) {
                aInstance.options.addFiles(aParams);
                this.controleur.$refresh();
              }
            },
            getDisabled: function () {
              return (
                aInstance.options.genrePJ ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.Url ||
                !aInstance.Actif ||
                !!(
                  aInstance.options.getDisabledFiles &&
                  aInstance.options.getDisabledFiles()
                )
              );
            },
          },
        });
      }
      setGenrePJ(aGenrePJ) {
        this.options.genrePJ = aGenrePJ;
      }
      getIdTrombone() {
        return this.id_trombone;
      }
      construireAffichage() {
        if (!this._avecDonnees) {
          return '';
        }
        const lImage = IE.jsx.str('i', {
          role: 'presentation',
          class:
            'btnImage pj-icon bt-activable bt-large m-right ' +
            (this.options.genrePJ ===
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
              ? 'icon_globe'
              : 'icon_piece_jointe'),
        });
        const lAvecModele =
          this.options.genrePJ !==
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Url &&
          !this.options.forcerEvenementSurClickIcon;
        return IE.jsx.str(
          'div',
          {
            class: 'pj-global-conteneur flex-gap-s',
            'ie-node': 'getNodeConteneur',
            'ie-class': 'getClassNodeConteneur',
          },
          IE.jsx.str(
            'div',
            {
              id: this.getNomTrombone(),
              role: 'button',
              'ie-node': 'nodeTrombone',
              class: 'flex-inline-contain',
              tabindex: '0',
              'aria-label': this.options.title ? this.options.title : false,
              'data-tooltip': Tooltip_1.Tooltip.Type.default,
              'ie-model': lAvecModele ? 'trombone' : false,
              'ie-selecfile': lAvecModele,
            },
            this.options.libelleSelecteur
              ? IE.jsx.str(
                  'div',
                  { class: 'select-file' },
                  lImage,
                  IE.jsx.str('span', null, this.options.libelleSelecteur),
                )
              : IE.jsx.str('div', { class: 'select-file' }, lImage),
          ),
          this.idOrigPJ && !this.options.masquerListeChips
            ? IE.jsx.str('div', {
                id: this.id_libellesPJ,
                class: 'pj-liste-conteneur',
              })
            : '',
        );
      }
      setDonnees(aParam) {
        this._avecDonnees = true;
        this.genreRessourcePJ = aParam.genreRessourcePJ;
        this.afficher();
        if (aParam.idListePJ) {
          this.setIdPourLibellesPJ(aParam.idListePJ);
        }
        if (aParam.listePJ) {
          this.setLibellesPJ(aParam.listePJ);
        }
      }
      getNomTrombone() {
        return this.id_trombone;
      }
      setLibellesPJ(aListePJ) {
        if (aListePJ && !this.options.masquerListeChips) {
          $('#' + this.id_libellesPJ.escapeJQ()).ieHtml(
            UtilitaireUrl_1.UtilitaireUrl.construireListeUrls(aListePJ, {
              genreFiltre: this.options.genrePJ,
              genreRessource: this.genreRessourcePJ,
              IEModelChips: this.Actif ? this.options.IEModelChipsPJ : '',
              maxWidth: this.options.maxWidthLibelle,
            }),
            { controleur: this.options.controleur },
          );
        }
      }
      setIdPourLibellesPJ(aIdListePJ) {
        this.idOrigPJ = false;
        this.id_libellesPJ = aIdListePJ;
      }
      setActif(AActif) {
        this.Actif = AActif;
        this.$refreshSelf();
      }
    }
    exports.ObjetModulePJ = ObjetModulePJ;
  },
  fn: 'objetmodulepj.js',
});