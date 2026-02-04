IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitairePageCommune = void 0;
    const GUID_1 = require('GUID');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const UtilitaireRedirection_1 = require('UtilitaireRedirection');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const GImageConnexion = require('ObjetImageConnexion');
    const TypeArrierePlanAuthentification_1 = require('TypeArrierePlanAuthentification');
    const ObjetBandeauEspace_1 = require('ObjetBandeauEspace');
    const InterfaceBandeauPiedCommune_1 = require('InterfaceBandeauPiedCommune');
    const UtilitaireMenuContextuelNatif_1 = require('UtilitaireMenuContextuelNatif');
    const AccessApp_1 = require('AccessApp');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    const GlossaireCP_1 = require('GlossaireCP');
    class UtilitairePageCommune {
      constructor() {
        this.application = (0, AccessApp_1.getApp)();
        this.PositionFocus = 1;
        this.Id = GUID_1.GUID.getId();
        this.idWrapper = this.Id + '_wrapper';
        this.idBandeau = this.Id + '_bandeau';
        this.idWrapperLien = this.Id + '_wrapperlien';
        this.idConnect = this.Id + '_connect';
        this.idBouton = this.Id + '_bouton_';
        this.idImage = this.Id + '_image';
        this.idCarte = this.Id + '_carte';
        this.idImageSuite = this.Id + '_imageSuite';
        this.afficherSuite = false;
      }
      construire(aParam) {
        this.controleur = this._getControleur(this);
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
        ObjetHtml_1.GHtml.setHtml(this.parametres.id, this._construire(), {
          controleur: this.controleur,
        });
        (0, AccessApp_1.getApp)()
          .getObjetParametres()
          .setDocumentTitle(GlossaireCP_1.TradGlossaireCP.PageCommune);
        if (this.parametres.objetContenu) {
          this.parametres.objetContenu.initialiser();
        }
        if (ObjetNavigateur_1.Navigateur.getToucheAltNum) {
          $('body').on('keyup', { aObjet: this }, this._raccourciClavierEspace);
        }
        UtilitaireMenuContextuelNatif_1.UtilitaireMenuContextuelNatif.desactiverSurElement(
          $(document),
        );
        if (this.listeBoutons.count() > 0) {
          $('#' + this.idBouton.escapeJQ() + '0').focus();
        }
      }
      _getControleur(aInstance) {
        return {
          getIdentiteBandeau() {
            return {
              class: ObjetBandeauEspace_1.ObjetBandeauEspace,
              pere: {},
              init: function (aBandeau) {
                if (aInstance.parametres.initBandeau) {
                  aInstance.parametres.initBandeau(aBandeau);
                }
              },
            };
          },
          getIdentiteFooter() {
            return {
              pere: {},
              class: InterfaceBandeauPiedCommune_1.InterfaceBandeauPiedCommune,
            };
          },
          nodeBouton: function (aIndice) {
            if (
              MethodesObjet_1.MethodesObjet.isFunction(
                aInstance.parametres.evenementSurBouton,
              )
            ) {
              $(this.node).eventValidation(() => {
                aInstance.parametres.evenementSurBouton(
                  aInstance.listeBoutons.get(aIndice),
                  aIndice,
                );
              });
            }
          },
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
      _construire() {
        const H = [];
        let lObjetImage = {};
        lObjetImage =
          this.parametres.imageConnexion ||
          GImageConnexion.getObjetImagePronote(
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
          lObjetImage.classeFond || GImageConnexion.getClassFond();
        lObjetImage.couleurFondBg =
          lObjetImage.couleurFond === ''
            ? ''
            : lObjetImage.couleurFond || 'white';
        lObjetImage.classImageFond =
          lObjetImage.classImageFond ||
          (lObjetImage.urlImageFond ? '' : GImageConnexion.getClassFond());
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
            lObjetImage.lienLogo =
              lObjetImage.lienLogo || 'https://www.louvre.fr';
            lObjetImage.styleLogo =
              lObjetImage.styleLogo ||
              'background-image: url(images/Connexion/Louvre/logo-louvre.png);width: 110px;height: 33px;';
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
          '<div ie-identite="getIdentiteBandeau" role="presentation" style="position:relative;width: 100%;z-index:101;"></div>',
        );
        if (lObjetImage.srcImage) {
          H.push(
            '<div style="position:absolute;left: 0px; bottom: 0px;height:80%;z-index:0;">',
          );
          if (
            lObjetImage.avecLien &&
            lObjetImage.lien &&
            lObjetImage.texteLien &&
            lObjetImage.suiviLien
          ) {
            H.push(
              '<a href="' +
                lObjetImage.lien +
                '" class="Texte12 LienLouvre" onclick="$.get(\'' +
                lObjetImage.suiviLien +
                '\');">',
            );
          }
          H.push(
            '<img id="' +
              this.idImage +
              '" aria-hidden="true" ' +
              (lObjetImage.urlImageSuite
                ? 'onclick="$(\'#' +
                  this.idImageSuite +
                  '\').toggle();event.stopImmediatePropagation();return false;" class="AvecMain"'
                : '') +
              ' src="' +
              lObjetImage.srcImage +
              '" style="height:100%" alt="" />',
          );
          if (
            lObjetImage.avecLien &&
            lObjetImage.lien &&
            lObjetImage.texteLien &&
            lObjetImage.suiviLien
          ) {
            H.push(
              '<div style="position: absolute;bottom:' +
                lObjetImage.bottomLien +
                ';left:' +
                lObjetImage.leftLien +
                ';color:' +
                lObjetImage.couleurLien +
                ';font-size:' +
                lObjetImage.tailleLien +
                ';">' +
                lObjetImage.texteLien +
                '</div></a>',
            );
          }
          H.push('</div>');
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
            '<nav id="',
            this.idConnect,
            '" class="bloc-elem choix-profil-contain">',
            '<ul>',
          );
          for (let I = 0; I < this.listeBoutons.count(); I++) {
            const lBouton = this.listeBoutons.get(I);
            H.push(
              '<li>',
              '<a id="',
              this.idBouton + I,
              '" ',
              this.parametres.avecRedirectionUrl
                ? 'href="' +
                    lBouton.url +
                    new UtilitaireRedirection_1.UtilitaireRedirection().getParametresUrl() +
                    '" '
                : '',
              ' target="_self" accessKey="',
              I + 1,
              '" ',
              'class="btn-connexion"',
              ObjetHtml_1.GHtml.composeAttr('ie-node', 'nodeBouton', [I]),
              '>',
              '<div class="img-btn-bg">',
              '<span class="img-btn ',
              this._getImageEspace(lBouton.Genre),
              '"></span>',
              '</div>',
              '<span class="libelle">',
              lBouton.getLibelle(),
              '</span>',
              '</a>',
              '</li>',
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
          '<div ie-identite="getIdentiteFooter" role="presentation" style="position:absolute;width: 100%;z-index:101; bottom:0;"></div>',
        );
        H.push('</div>');
        if (
          lObjetImage.urlImageFond &&
          lObjetImage.heightImageSuite &&
          lObjetImage.widthImageSuite &&
          lObjetImage.urlImageSuite
        ) {
          H.push(
            '<div id="' +
              this.idImageSuite +
              '" onclick="$(\'#' +
              this.idImageSuite +
              '\').toggle();" class="AvecMain ' +
              (!lObjetImage.urlImageFond ? lObjetImage.classeFond : '') +
              '" style="display: none;position:absolute;width:100%;height:calc(100% - 50px);min-height:' +
              lObjetImage.heightImageSuite +
              'px;' +
              (ObjetNavigateur_1.Navigateur.clientL >
              lObjetImage.widthImageSuite
                ? 'min-width:' + lObjetImage.widthImageSuite + 'px'
                : '') +
              ';padding-bottom:50px;z-index:1;background-image: url(' +
              lObjetImage.urlImageFond +
              ');">',
          );
          H.push(
            '<div style="background-position:center center;background-repeat: no-repeat;width:100%;height:100%;background-image:url(' +
              lObjetImage.urlImageSuite +
              ');"></div>',
          );
          H.push('<div style="position:absolute; bottom: 10px;right:10px;">');
          if (
            lObjetImage.lienLogo &&
            lObjetImage.styleLogo &&
            lObjetImage.suiviLogo
          ) {
            H.push(
              '<a href="' +
                lObjetImage.lienLogo +
                '" style="float: right; margin-right: 10px;' +
                lObjetImage.styleLogo +
                '" onclick="$.get(\'' +
                lObjetImage.suiviLogo +
                '\');"></a>',
            );
          }
          if (
            lObjetImage.avecLienSuite &&
            lObjetImage.lienSuite &&
            lObjetImage.texteLienSuite &&
            lObjetImage.suiviLienSuite
          ) {
            H.push(
              '<a href="' +
                lObjetImage.lienSuite +
                '" style="float: right; margin: 10px;" class="Texte12 LienLouvre" onclick="$.get(\'' +
                lObjetImage.suiviLienSuite +
                '\');">' +
                lObjetImage.texteLienSuite +
                '</a>',
            );
          }
          H.push('</div>');
          H.push('</div>');
        }
        return H.join('');
      }
      _getImageEspace(aEspace) {
        let lImageEspace = 'Icone_EspaceInvite';
        switch (aEspace) {
          case Enumere_Espace_1.EGenreEspace.Professeur:
            lImageEspace = 'Icone_EspaceEnseignant';
            break;
          case Enumere_Espace_1.EGenreEspace.Eleve:
            lImageEspace = 'Icone_EspaceEtudiant';
            break;
          case Enumere_Espace_1.EGenreEspace.Etablissement:
            lImageEspace = 'Icone_EspaceSecretariat';
            break;
          case Enumere_Espace_1.EGenreEspace.Parent:
            lImageEspace = 'Icone_EspaceParent';
            break;
          case Enumere_Espace_1.EGenreEspace.Entreprise:
            lImageEspace = 'Icone_EspaceEntreprise';
            break;
          case Enumere_Espace_1.EGenreEspace.Academie:
            lImageEspace = 'Icone_EspaceAcademie';
            break;
          case Enumere_Espace_1.EGenreEspace.Administrateur:
            lImageEspace = 'Icone_EspaceAdministratif';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimProfesseur:
            lImageEspace = 'Icone_EspacePrimEnseignant';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimParent:
            lImageEspace = 'Icone_EspacePrimParent';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimEleve:
            lImageEspace = 'Icone_EspacePrimEtudiant';
            break;
          case Enumere_Espace_1.EGenreEspace.Accompagnant:
            lImageEspace = 'Icone_EspaceAccompagnant';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimAccompagnant:
            lImageEspace = 'Icone_EspacePrimAccompagnant';
            break;
          case Enumere_Espace_1.EGenreEspace.Inscription:
            lImageEspace = 'Icone_EspaceInscription';
            break;
          case Enumere_Espace_1.EGenreEspace.Tuteur:
            lImageEspace = 'Icone_EspaceTuteur';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimPeriscolaire:
            lImageEspace = 'Icone_EspacePeriscolaire';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimMairie:
            lImageEspace = 'Icone_EspaceMairie';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimDirection:
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