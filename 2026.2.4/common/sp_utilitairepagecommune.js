IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitairePageCommune = void 0;
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const UtilitaireRedirection_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireRedirection');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const ObjetImageConnexion_1 = require('@scolys/produit/script/ObjetImageConnexion');
    const TypeArrierePlanAuthentification_1 = require('@scolys/produit/script/enumere/TypeArrierePlanAuthentification');
    const ObjetBandeauEspace_1 = require('@cp/Produit/Script/ObjetBandeauEspace');
    const InterfaceBandeauPiedCommune_1 = require('@cp/Produit/Script/InterfaceBandeauPiedCommune');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    class UtilitairePageCommune {
      constructor() {
        this.application = (0, AccessApp_1.getApp)();
        this.Id = GUID_1.GUID.getId();
        this.idWrapper = this.Id + '_wrapper';
        this.idConnect = this.Id + '_connect';
        this.idBouton = this.Id + '_bouton_';
        this.idImage = this.Id + '_image';
        this.idImageSuite = this.Id + '_imageSuite';
      }
      construire(aParam) {
        this.parametres = Object.assign(
          {
            id: '',
            avecRedirectionUrl: true,
            evenementSurBouton: null,
            urlSiteIndexEducation: '',
            NomEtablissement: '',
            version: '',
            millesime: '',
            genreImageConnexion: -1,
            objetContenu: null,
            initBandeau: null,
          },
          aParam,
        );
        this.listeBoutons = aParam.espaces;
        this.urlImageFond =
          this.parametres.genreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .PersonnaliseURL
            ? aParam.urlImageConnexion
            : '';
        this.avecFondFichier =
          this.parametres.genreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .PersonnaliseFichier;
        ObjetHtml_1.GHtml.setHtml(this.parametres.id, this._construire());
        (0, AccessApp_1.getApp)()
          .getObjetParametres()
          .setDocumentTitle(GlossaireCP_1.TradGlossaireCP.PageCommune);
        if (this.parametres.objetContenu) {
          this.parametres.objetContenu.initialiser();
        }
        if (ObjetNavigateur_1.Navigateur.getToucheAltNum) {
          $('body').on('keyup', { aObjet: this }, this._raccourciClavierEspace);
        }
        if (this.listeBoutons.count() > 0) {
          $('#' + this.idBouton.escapeJQ() + '0').focus();
        }
      }
      jsxIdentiteBandeau() {
        return {
          create: () => new ObjetBandeauEspace_1.ObjetBandeauEspace(),
          init: (aInstance) => {
            if (this.parametres.initBandeau) {
              this.parametres.initBandeau(aInstance);
            }
          },
        };
      }
      jsxIdentiteFooter() {
        return {
          create: () =>
            new InterfaceBandeauPiedCommune_1.InterfaceBandeauPiedCommune(),
        };
      }
      _raccourciClavierEspace(event) {
        const J = ObjetNavigateur_1.Navigateur.getToucheAltNum(
          1,
          event.data.aObjet.listeBoutons.count(),
        );
        const lBouton = event.data.aObjet.listeBoutons.get(J - 1);
        if (lBouton && lBouton.url) {
          window.location.assign(
            lBouton.url +
              new UtilitaireRedirection_1.UtilitaireRedirection().getParametresUrl(),
          );
        }
      }
      jsxEventBtn(aIndice) {
        this.parametres.evenementSurBouton(
          this.listeBoutons.get(aIndice),
          aIndice,
        );
      }
      _construire() {
        const H = [];
        let lObjetImage = {};
        lObjetImage =
          this.parametres.imageConnexion ||
          ObjetImageConnexion_1.ImageConnexion.getObjetImagePronote(
            this.parametres.genreImageConnexion,
          );
        if (
          this.parametres.genreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .PersonnaliseURL
        ) {
          lObjetImage.couleurFond = '';
          lObjetImage.classImageFond = 'Cover';
          lObjetImage.couleurConnexion = '#ffffff';
        } else if (
          this.parametres.genreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .Louvre
        ) {
          lObjetImage.classWrapperBg = '';
        } else if (
          this.parametres.genreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .PersonnaliseFichier
        ) {
          lObjetImage.classImageFond = 'Cover';
        }
        lObjetImage.classeFond =
          lObjetImage.classeFond ||
          ObjetImageConnexion_1.ImageConnexion.getClassFond();
        lObjetImage.couleurFondBg =
          lObjetImage.couleurFond === ''
            ? ''
            : lObjetImage.couleurFond || 'white';
        lObjetImage.classImageFond =
          lObjetImage.classImageFond ||
          (lObjetImage.urlImageFond
            ? ''
            : ObjetImageConnexion_1.ImageConnexion.getClassFond());
        lObjetImage.urlImageFond =
          lObjetImage.urlImageFond || this.urlImageFond;
        if (
          this.parametres.genreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .Louvre
        ) {
          if (this.application.estEDT) {
            lObjetImage.classImageFond = 'bg-espace-edt ';
            lObjetImage.applicationEstEDT = 'espace-edt ';
          } else {
            lObjetImage.lienLogo = lObjetImage.lienLogo || '';
            lObjetImage.styleLogo = lObjetImage.styleLogo || '';
            lObjetImage.avecLienSuite = true;
            lObjetImage.texteLienSuite =
              lObjetImage.texteLienSuite ||
              'En savoir plus et découvrir l'exposition %s de la Petite Galerie du Louvre';
            lObjetImage.lienSuite = lObjetImage.lienSuite || lObjetImage.lien;
            lObjetImage.suiviLogo =
              lObjetImage.suiviLogo || lObjetImage.suiviLogo1;
            lObjetImage.suiviLienSuite =
              lObjetImage.suiviLienSuite || lObjetImage.suiviLogo2;
          }
        }
        if (
          this.parametres.genreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .Arbre
        ) {
          lObjetImage.classImageFond = 'bg-espace-primaire ';
          lObjetImage.applicationNom = 'espace-primaire ';
        }
        if (lObjetImage.urlImageFond || lObjetImage.classImageFond) {
          H.push(
            '<div class="ImageFond ' + lObjetImage.classImageFond + '" style="',
            lObjetImage.couleurFondBg
              ? 'background-color: ' + lObjetImage.couleurFondBg + '; '
              : '',
            lObjetImage.urlImageFond
              ? "background-image:url('" +
                  lObjetImage.urlImageFond +
                  "');background-repeat: repeat;"
              : '',
            'position:absolute;z-index:-15;width:100%;height:100%;min-height:calc(100% - 50px);',
            lObjetImage.widthImageSuite && lObjetImage.urlImageSuite
              ? ObjetNavigateur_1.Navigateur.clientL >
                lObjetImage.widthImageSuite
                ? 'min-width:' + lObjetImage.widthImageSuite + 'px;'
                : ''
              : '',
            '"></div>',
          );
        }
        if (this.avecFondFichier) {
          H.push(
            '<div class="ImageFond ' +
              lObjetImage.classImageFond +
              '" style="background-color:' +
              lObjetImage.couleurFondBg +
              ';',
          );
          H.push(
            " background-image:url('" +
              (this.parametres.urlFondEcran || '') +
              "'); ",
          );
          H.push(' position:absolute;z-index:-15;width:100%;height:100%;">');
          H.push('</div>');
        }
        H.push(
          '<div id="',
          this.idWrapper,
          '" class="' +
            (lObjetImage.classeImage || '') +
            '" style="position:absolute;width:100%;height:100%;min-height:650px;overflow:hidden;text-align:center;',
          lObjetImage.widthImageSuite && lObjetImage.urlImageSuite
            ? ObjetNavigateur_1.Navigateur.clientL > lObjetImage.widthImageSuite
              ? 'min-width:' + lObjetImage.widthImageSuite + 'px;'
              : ''
            : '',
          '">',
        );
        H.push(
          IE.jsx.str('div', {
            ie_identite: this.jsxIdentiteBandeau.bind(this),
            role: 'presentation',
            style: 'position:relative;width: 100%;z-index:101;',
          }),
        );
        if (lObjetImage.srcImage) {
          const lJSXImg = IE.jsx.str('img', {
            id: this.idImage,
            'aria-hidden': 'true',
            ie_eventmap: lObjetImage.urlImageSuite
              ? {
                  name: '_construire_img',
                  click: (aEvent) => {
                    $(`#${this.idImageSuite.escapeJQ()}`).toggle();
                    aEvent.stopImmediatePropagation();
                    return false;
                  },
                }
              : undefined,
            class: lObjetImage.urlImageSuite ? 'AvecMain' : '',
            src: lObjetImage.srcImage,
            style: 'height:100%',
            alt: '',
          });
          H.push(
            IE.jsx.str(
              'div',
              {
                style:
                  'position:absolute;left: 0px; bottom: 0px;height:80%;z-index:0;',
              },
              lObjetImage.avecLien &&
                lObjetImage.lien &&
                lObjetImage.texteLien &&
                lObjetImage.suiviLien
                ? IE.jsx.str(
                    'a',
                    {
                      href: lObjetImage.lien,
                      class: 'font-size-m LienLouvre',
                      ie_eventmap: {
                        name: '_construire_a',
                        click: () => $.get(lObjetImage.suiviLien),
                      },
                    },
                    lJSXImg,
                    IE.jsx.str(
                      'div',
                      {
                        style: {
                          position: 'absolute',
                          bottom: lObjetImage.bottomLien,
                          left: lObjetImage.leftLien,
                          color: lObjetImage.couleurLien,
                          'font-size': lObjetImage.tailleLien,
                        },
                      },
                      lObjetImage.texteLien,
                    ),
                  )
                : lJSXImg,
            ),
          );
        }
        if (this.parametres.objetContenu) {
          H.push(
            '<div id="',
            this.parametres.objetContenu.getNom(),
            '" style="position:absolute;width:100%;height:100%;overflow:hidden;"></div>',
          );
        } else {
          if (!lObjetImage.couleurConnexion) {
            lObjetImage.couleurConnexion = '#FFF';
          }
          H.push(
            '<div class="InlineBlock AlignementMilieuVertical full-height"></div>',
          );
          H.push(
            '<div class="' +
              (this.application.estEDT || this.application.estPrimaire
                ? lObjetImage.applicationNom
                : '') +
              ' wrapper-connect-conteneur' +
              (lObjetImage.srcImage ? ' image-aside' : '') +
              '">',
          );
          H.push(
            '<div class="logo-espace-edt bloc-elem"></div>',
            '<div class="illustration-container bloc-elem">',
            '<div class="illus-rond"></div>',
            '<div class="logo-pronote-primaire"></div>',
            '</div>',
          );
          H.push(
            '<nav role="navigation" id="',
            this.idConnect,
            '" class="bloc-elem choix-profil-contain">',
            '<ul>',
          );
          for (let I = 0; I < this.listeBoutons.count(); I++) {
            const lBouton = this.listeBoutons.get(I);
            H.push(
              IE.jsx.str(
                'li',
                null,
                IE.jsx.str(
                  'a',
                  {
                    id: this.idBouton + I,
                    href: this.parametres.avecRedirectionUrl
                      ? lBouton.url +
                        new UtilitaireRedirection_1.UtilitaireRedirection().getParametresUrl()
                      : '',
                    target: '_self',
                    class: 'btn-connexion',
                    ie_eventmap: MethodesObjet_1.MethodesObjet.isFunction(
                      this.parametres.evenementSurBouton,
                    )
                      ? {
                          name: 'jsxEventBtn',
                          validation: this.jsxEventBtn.bind(this, I),
                        }
                      : false,
                  },
                  IE.jsx.str(
                    'div',
                    { class: 'img-btn-bg' },
                    IE.jsx.str('span', {
                      class: ['img-btn', this._getImageEspace(lBouton.Genre)],
                    }),
                  ),
                  IE.jsx.str(
                    'span',
                    { class: 'libelle' },
                    lBouton.getLibelle(),
                  ),
                ),
              ),
            );
          }
          H.push('</ul>', '</nav>', '</div>');
        }
        if (
          !!this.parametres.mentionsPagesPubliques &&
          !!this.parametres.mentionsPagesPubliques.lien
        ) {
          H.push(
            '<div style="position:absolute; bottom:1rem; z-index:101; left:50%;">',
            this.parametres.mentionsPagesPubliques.lien,
            '</div>',
          );
        }
        H.push(
          IE.jsx.str('div', {
            ie_identite: this.jsxIdentiteFooter.bind(this),
            role: 'presentation',
            style: 'position:absolute;width: 100%;z-index:101; bottom:0;',
          }),
        );
        H.push('</div>');
        if (
          lObjetImage.urlImageFond &&
          lObjetImage.heightImageSuite &&
          lObjetImage.widthImageSuite &&
          lObjetImage.urlImageSuite
        ) {
          H.push(
            IE.jsx.str(
              'div',
              {
                id: this.idImageSuite,
                ie_eventmap: {
                  click: () => $('#' + this.idImageSuite).toggle(),
                },
                class:
                  'AvecMain ' +
                  (!lObjetImage.urlImageFond ? lObjetImage.classeFond : ''),
                style:
                  'display: none;position:absolute;width:100%;height:calc(100% - 50px);min-height:' +
                  lObjetImage.heightImageSuite +
                  'px;' +
                  (ObjetNavigateur_1.Navigateur.clientL >
                  lObjetImage.widthImageSuite
                    ? 'min-width:' + lObjetImage.widthImageSuite + 'px'
                    : '') +
                  ';padding-bottom:50px;z-index:1;background-image: url(' +
                  lObjetImage.urlImageFond +
                  ')',
              },
              IE.jsx.str('div', {
                style:
                  'background-position:center center;background-repeat: no-repeat;width:100%;height:100%;background-image:url(' +
                  lObjetImage.urlImageSuite +
                  ');',
              }),
              ');',
              IE.jsx.str(
                'div',
                { style: 'position:absolute; bottom: 10px;right:10px;' },
                lObjetImage.lienLogo &&
                  lObjetImage.styleLogo &&
                  lObjetImage.suiviLogo &&
                  IE.jsx.str('a', {
                    href: lObjetImage.lienLogo,
                    style:
                      'float: right; margin-right: 10px;' +
                      lObjetImage.styleLogo,
                    ie_eventmap: { click: () => $.get(lObjetImage.suiviLogo) },
                  }),
                lObjetImage.avecLienSuite &&
                  lObjetImage.lienSuite &&
                  lObjetImage.texteLienSuite &&
                  lObjetImage.suiviLienSuite &&
                  IE.jsx.str(
                    'a',
                    {
                      href: lObjetImage.lienSuite,
                      style: 'float: right; margin: 10px;',
                      class: 'font-size-m LienLouvre',
                      ie_eventmap: {
                        click: () => $.get(lObjetImage.suiviLienSuite),
                      },
                    },
                    lObjetImage.texteLienSuite,
                  ),
              ),
            ),
          );
        }
        return H.join('');
      }
      _getImageEspace(aEspace) {
        let lImageEspace = 'Icone_EspaceInvite';
        switch (aEspace) {
          case Enumere_Espace_1.TypeGenreEspace.Espace_Professeur:
            lImageEspace = 'Icone_EspaceEnseignant';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Eleve:
            lImageEspace = 'Icone_EspaceEtudiant';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement:
            lImageEspace = 'Icone_EspaceSecretariat';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Parent:
            lImageEspace = 'Icone_EspaceParent';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Entreprise:
            lImageEspace = 'Icone_EspaceEntreprise';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Academie:
            lImageEspace = 'Icone_EspaceAcademie';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur:
            lImageEspace = 'Icone_EspaceAdministratif';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur:
            lImageEspace = 'Icone_EspacePrimEnseignant';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent:
            lImageEspace = 'Icone_EspacePrimParent';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimEleve:
            lImageEspace = 'Icone_EspacePrimEtudiant';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant:
            lImageEspace = 'Icone_EspaceAccompagnant';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant:
            lImageEspace = 'Icone_EspacePrimAccompagnant';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Inscription:
            lImageEspace = 'Icone_EspaceInscription';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur:
            lImageEspace = 'Icone_EspaceTuteur';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimPeriscolaire:
            lImageEspace = 'Icone_EspacePeriscolaire';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimMairie:
            lImageEspace = 'Icone_EspaceMairie';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection:
            lImageEspace = 'Icone_EspacePrimAdministratif';
            break;
        }
        return lImageEspace;
      }
    }
    exports.UtilitairePageCommune = UtilitairePageCommune;
  },
  fn: 'utilitairepagecommune.js',
});