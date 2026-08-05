IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetModulePJ = void 0;
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    require('@cp/Produit/Script/IEHtml.SelecFile');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Tooltip_1 = require('@cp/Produit/Script/Tooltip');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const IconeSvgGlobe_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgGlobe');
    const IconeSvgPiece_jointe_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPiece_jointe');
    class ObjetModulePJ extends ObjetIdentite_1.Identite {
      constructor(aParams) {
        super(aParams);
        this.id_trombone = this.Nom + '_trombone';
        this.idOrigPJ = true;
        this.id_libellesPJ = this.Nom + '_libellesPJ';
        this.genreCommande = { menuContext: 0, click: 1 };
        this.setOptions({
          genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
          forcerEvenementSurClickIcon: false,
          jsxModelChipsPJ: null,
          title: 'Ajouter une nouvelle pièce jointe',
          maxWidthLibelle: 0,
          addFiles: null,
          getDisabledFiles: null,
          libelleSelecteur: '',
          masquerListeChips: false,
          input: {},
        });
      }
      jsxModelSelecFileTrombone() {
        return {
          getOptionsSelecFile: () => {
            var _a, _b;
            return (_b = (_a = this.options).getOptionsSelecFile) === null ||
              _b === void 0
              ? void 0
              : _b.call(_a);
          },
          addFiles: (aParams) => {
            if (this.options.addFiles) {
              this.options.addFiles(aParams);
              IEHtml_1.IEHtml.refresh();
            }
          },
          getDisabled: () => {
            return (
              this.options.genrePJ ===
                Enumere_DocumentJoint_1.EGenreDocumentJoint.Url ||
              !this.Actif ||
              !!(
                this.options.getDisabledFiles && this.options.getDisabledFiles()
              )
            );
          },
        };
      }
      getIdTrombone() {
        return this.id_trombone;
      }
      jsxGetClassNodeConteneur() {
        return this.Actif ? '' : 'is-disabled';
      }
      construireAffichage() {
        if (!this._avecDonnees || !ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
          return '';
        }
        const lImage = IE.jsx.str(
          'i',
          {
            role: 'presentation',
            class: 'btnImage bt-activable bt-large m-right pj-icon',
          },
          this.options.genrePJ ===
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
            ? IE.jsx.str(IconeSvgGlobe_1.IconeSvgGlobe, null)
            : IE.jsx.str(IconeSvgPiece_jointe_1.IconeSvgPiece_jointe, null),
        );
        const lAvecModele =
          this.options.genrePJ !==
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Url &&
          !this.options.forcerEvenementSurClickIcon;
        let lJsxModelSelecFile = false;
        if (lAvecModele) {
          lJsxModelSelecFile = this.jsxModelSelecFileTrombone.bind(this);
        }
        return IE.jsx.str(
          'div',
          {
            class: 'pj-global-conteneur flex-gap-s',
            ie_eventmap: {
              name: 'eventmapConteneurPjtrombone',
              contextmenu: (aEvent) => this.ceventCOntextMenuConteneur(aEvent),
            },
            ie_class: this.jsxGetClassNodeConteneur.bind(this),
          },
          IE.jsx.str(
            'div',
            {
              id: this.getNomTrombone(),
              role: 'button',
              ie_eventmap: {
                name: 'eventmapPjtrombone',
                validation: (aEvent) => this.validationTrombone(aEvent),
              },
              class: 'display-inline-flex',
              tabindex: '0',
              'aria-label': this.options.title ? this.options.title : false,
              'data-tooltip': Tooltip_1.Tooltip.Type.default,
              ie_model: lJsxModelSelecFile,
              ie_selecfile: lAvecModele,
              'aria-haspopup': 'dialog',
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
      ceventCOntextMenuConteneur(aEvent) {
        aEvent.stopImmediatePropagation();
        aEvent.preventDefault();
        this.callback.appel({ action: this.genreCommande.menuContext });
        return false;
      }
      validationTrombone(aEvent) {
        if (
          this.options.genrePJ ===
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Url ||
          this.options.forcerEvenementSurClickIcon
        ) {
          aEvent.stopImmediatePropagation();
          aEvent.preventDefault();
          this.callback.appel({
            action: this.genreCommande.click,
            id: this.getNomTrombone(),
          });
          return false;
        }
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
              jsxModelChips: this.Actif ? this.options.jsxModelChipsPJ : null,
              maxWidth: this.options.maxWidthLibelle,
            }),
          );
        }
      }
      setIdPourLibellesPJ(aIdListePJ) {
        this.idOrigPJ = false;
        this.id_libellesPJ = aIdListePJ;
      }
      setActif(AActif) {
        this.Actif = AActif;
        this.$refresh();
      }
    }
    exports.ObjetModulePJ = ObjetModulePJ;
  },
  fn: 'objetmodulepj.js',
});