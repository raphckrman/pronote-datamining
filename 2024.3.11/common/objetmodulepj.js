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
    const tag_1 = require('tag');
    const ObjetChaine_1 = require('ObjetChaine');
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
          title: '',
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
                this.controleur.$refreshSelf();
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
        const H = [];
        const lImage = IE.jsx.str('i', {
          role: 'presentation',
          class:
            'btnImage pj-icon ' +
            (this.options.genrePJ ===
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
              ? 'icon_globe'
              : 'icon_piece_jointe'),
        });
        H.push(
          '<div class="pj-global-conteneur flex-gap-s" ie-node="getNodeConteneur" ie-class="getClassNodeConteneur">',
        );
        H.push(
          '<div id="',
          this.getNomTrombone(),
          '" role="button" ie-node="nodeTrombone" class="flex-inline-contain" tabindex="0"',
          this.options.title
            ? ' title="' +
                ObjetChaine_1.GChaine.toTitle(this.options.title) +
                '" aria-label="' +
                ObjetChaine_1.GChaine.toTitle(this.options.title) +
                '"'
            : '',
          this.options.genrePJ !==
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Url &&
            !this.options.forcerEvenementSurClickIcon
            ? ' ie-model="trombone" ie-selecfile '
            : '',
          '>',
          this.options.libelleSelecteur
            ? (0, tag_1.tag)(
                'div',
                { class: 'select-file' },
                lImage,
                (0, tag_1.tag)(
                  'span',
                  { class: '' },
                  this.options.libelleSelecteur,
                ),
              )
            : (0, tag_1.tag)('div', { class: 'select-file' }, lImage),
          '</div>',
        );
        if (this.idOrigPJ && !this.options.masquerListeChips) {
          H.push(
            '<div id="',
            this.id_libellesPJ,
            '" class="pj-liste-conteneur"></div>',
          );
        }
        H.push('</div>');
        return H.join('');
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