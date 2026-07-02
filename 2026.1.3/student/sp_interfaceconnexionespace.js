IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.InterfaceConnexionEspace = void 0;
    const tslib_1 = require('tslib');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Enumere_Connexion_1 = require('@scolys/espace/script/enumere/Enumere_Connexion');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const TypeGenreOngletInternet_1 = require('@scolys/produit/script/enumere/TypeGenreOngletInternet');
    const _InterfaceConnexion_1 = require('@cp/Produit/Script/_InterfaceConnexion');
    const ObjetImageConnexion_1 = require('@scolys/produit/script/ObjetImageConnexion');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const TypeArrierePlanAuthentification_1 = require('@scolys/produit/script/enumere/TypeArrierePlanAuthentification');
    const UtilitaireChangementLangue_1 = require('@cp/Produit/Script/UtilitaireChangementLangue');
    const ObjetBandeauEspace_1 = require('@cp/Produit/Script/ObjetBandeauEspace');
    const InterfaceBandeauPiedCommune_1 = require('@cp/Produit/Script/InterfaceBandeauPiedCommune');
    const UtilitaireSecurisationCompte_1 = require('@cp/script/UtilitaireSecurisationCompte');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ModeleInterfaceConnexion = tslib_1.__importStar(
      require('@scolys/espace/script/html/InterfaceConnexion.tsxModele'),
    );
    const ObjetRequeteParametresUtilisateur_1 = require('@scolys/produit/script/requete/ObjetRequeteParametresUtilisateur');
    const ThemesCouleurs_1 = require('@cp/script/Theme/ThemesCouleurs');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const ObjetRequeteIdentification_1 = require('@scolys/produit/script/requete/ObjetRequeteIdentification');
    const ObjetRequeteAuthentificationPN_1 = require('@scolys/produit/script/requete/ObjetRequeteAuthentificationPN');
    const DeferLoadingScript_1 = require('@librairies/script/Divers/DeferLoadingScript');
    require('@scolys/produit/css/Connexion.css');
    require('@cp/Produit/Css/pages_connexion.css');
    class InterfaceConnexionEspace extends _InterfaceConnexion_1._InterfaceConnexion {
      constructor(...aParams) {
        super(...aParams);
        this.parametresSco = this.applicationCP.getObjetParametres();
        this.etatUtilisateurSco = this.applicationCP.getEtatUtilisateur();
        this.setOptions({
          genreImageConnexion: this.parametresSco.genreImageConnexion,
          urlImageConnexion: this.parametresSco.urlImageConnexion,
          avecChoixConnexion: this.parametresSco.avecChoixConnexion,
          avecRecupIdMdp: this.parametresSco.avecRecuperationInfosConnexion,
          parentAutoriseChangerMDP: this.parametresSco.parentAutoriseChangerMDP,
          pourInscription: [
            Enumere_Espace_1.TypeGenreEspace.Espace_Inscription,
          ].includes(this.etatUtilisateurSco.GenreEspace),
          requetes: {
            getRequeteIdent: (aPere) =>
              new ObjetRequeteIdentification_1.ObjetRequeteIdentification(
                aPere,
              ),
            getRequeteAuth: (aPere) =>
              new ObjetRequeteAuthentificationPN_1.ObjetRequeteAuthentificationPN(
                aPere,
              ),
          },
          utilitaireChangementLangue:
            UtilitaireChangementLangue_1.UtilitaireChangementLangue,
        });
      }
      jsxIdentiteBandeau() {
        return {
          create: () =>
            new ObjetBandeauEspace_1.ObjetBandeauEspace({ pere: {} }),
          init: (aBandeau) => {
            var _a,
              _b,
              _c,
              _d,
              _e,
              _f,
              _g,
              _h,
              _j,
              _k,
              _l,
              _m,
              _o,
              _p,
              _q,
              _r,
              _s,
              _t,
              _u;
            const lEstDarkMode = ThemesCouleurs_1.ThemesCouleurs.getDarkMode();
            let lLogoCollectiviteImage;
            let lLogoCollectiviteLien;
            let lLabelImageCollectivite;
            let lLabelUrlCollectivite;
            if (
              (_a = this.parametresSco) === null || _a === void 0
                ? void 0
                : _a.collectivite
            ) {
              lLogoCollectiviteImage =
                lEstDarkMode &&
                ((_e =
                  (_d =
                    (_c =
                      (_b = this.parametresSco) === null || _b === void 0
                        ? void 0
                        : _b.collectivite) === null || _c === void 0
                      ? void 0
                      : _c.logo) === null || _d === void 0
                    ? void 0
                    : _d.siteDesktop) === null || _e === void 0
                  ? void 0
                  : _e.sombre)
                  ? (_j =
                      (_h =
                        (_g =
                          (_f = this.parametresSco) === null || _f === void 0
                            ? void 0
                            : _f.collectivite) === null || _g === void 0
                          ? void 0
                          : _g.logo) === null || _h === void 0
                        ? void 0
                        : _h.siteDesktop) === null || _j === void 0
                    ? void 0
                    : _j.sombre
                  : (_o =
                        (_m =
                          (_l =
                            (_k = this.parametresSco) === null || _k === void 0
                              ? void 0
                              : _k.collectivite) === null || _l === void 0
                            ? void 0
                            : _l.logo) === null || _m === void 0
                          ? void 0
                          : _m.siteDesktop) === null || _o === void 0
                    ? void 0
                    : _o.clair;
              if (
                (_q =
                  (_p = this.parametresSco) === null || _p === void 0
                    ? void 0
                    : _p.collectivite) === null || _q === void 0
                  ? void 0
                  : _q.urlCollectivite
              ) {
                lLogoCollectiviteLien =
                  (_s =
                    (_r = this.parametresSco) === null || _r === void 0
                      ? void 0
                      : _r.collectivite) === null || _s === void 0
                    ? void 0
                    : _s.urlCollectivite;
              }
              if (
                (_u =
                  (_t = this.parametresSco) === null || _t === void 0
                    ? void 0
                    : _t.collectivite) === null || _u === void 0
                  ? void 0
                  : _u.libelleCollectivite
              ) {
                if (!!this.parametresSco.collectivite.urlCollectivite) {
                  lLabelUrlCollectivite =
                    'Aller sur le site de la collectivité %s';
                }
                lLabelImageCollectivite =
                  'Logo de la collectivité %s';
              }
            }
            aBandeau.setParametres({
              logoDepartementImage: this.parametresSco.logoDepartementImage,
              logoDepartementLien: this.parametresSco.logoDepartementLien,
              logoCollectiviteImage: lLogoCollectiviteImage,
              logoCollectiviteLien: lLogoCollectiviteLien,
              labelImageCollectivite: lLabelImageCollectivite,
              labelUrlCollectivite: lLabelUrlCollectivite,
            });
          },
        };
      }
      jsxIdentiteFooter() {
        return {
          create: () =>
            new InterfaceBandeauPiedCommune_1.InterfaceBandeauPiedCommune({
              pere: {},
            }),
        };
      }
      eventCreation() {
        return this.ouvrirFenetreRecupMDP(
          (aInstance) => {
            aInstance.setOptionsFenetre({
              titre: 'Créer mon compte sur l'Espace Inscription',
              estCreation: true,
            });
          },
          (aStage) => {
            if (aStage === -1) {
              this.options.pourInscription = false;
            }
          },
        );
      }
      evenementRecupIdMDP() {
        return this.ouvrirFenetreRecupMDP((aInstance) => {
          aInstance.setOptions({
            avecRecupParParent: this.options.parentAutoriseChangerMDP,
          });
        });
      }
      async ouvrirFenetreRecupMDP(aInit, aEvenement) {
        if (this.applicationCP.getModeExclusif()) {
          await this.applicationCP
            .getMessage()
            .afficher({
              message: 'la récupération de votre identifiant / mot de passe n'est pas possible en mode consultation',
            });
          return;
        }
        await DeferLoadingScript_1.deferLoadingScript.loadAsync(
          'fenetrerecupmdp',
        );
        const { ObjetFenetre_RecupIdMDP } = await Promise.resolve().then(() =>
          tslib_1.__importStar(
            require('@cp/Produit/Script/Fenetre/ObjetFenetre_RecupIdMDP'),
          ),
        );
        new ObjetFenetre_RecupIdMDP({ pere: this, evenement: aEvenement })
          .initAfficher({
            initialiser: (aInstance) => {
              aInit(aInstance);
            },
          })
          .afficher();
      }
      construirePage() {
        const lFctHtml = ModeleInterfaceConnexion.getHtml;
        let lGenreImageConnexion = this.options.genreImageConnexion;
        const lObjetImage =
          ObjetImageConnexion_1.ImageConnexion.getObjetImagePronote(
            lGenreImageConnexion,
          );
        lObjetImage.avecFichierFond = false;
        if (
          lGenreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .Louvre
        ) {
          if (this.applicationCP.estEDT) {
            lObjetImage.classImageFond = 'bg-espace-edt ';
            lObjetImage.applicationNom = 'espace-edt ';
          } else {
            lObjetImage.lienLogo = lObjetImage.lienLogo || '';
            lObjetImage.styleLogo = lObjetImage.styleLogo || '';
            lObjetImage.avecLienSuite = true;
            lObjetImage.texteLienSuite =
              lObjetImage.texteLienSuite ||
              'En savoir plus et découvrir l'exposition %s de la Petite Galerie du Louvre';
            lObjetImage.lienSuite = lObjetImage.lienSuite || lObjetImage.lien;
          }
        }
        if (
          lGenreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .Arbre
        ) {
          if (this.applicationCP.estPrimaire) {
            lObjetImage.classImageFond = 'bg-espace-primaire ';
            lObjetImage.applicationNom = 'espace-primaire ';
          }
        }
        if (
          [
            TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
              .Neutre,
            TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
              .PersonnaliseFichier,
            TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
              .PersonnaliseURL,
          ].indexOf(lGenreImageConnexion) === -1 &&
          !lObjetImage.urlImageFond
        ) {
          lGenreImageConnexion =
            TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
              .Neutre;
        }
        if (
          lGenreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .PersonnaliseURL
        ) {
          lObjetImage.classImageFond = 'Cover';
        }
        if (
          lGenreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .PersonnaliseFichier
        ) {
          lObjetImage.classImageFond = 'Cover';
          lObjetImage.avecFichierFond = true;
          lObjetImage.dataImageFond = this.parametresSco.urlFondEcran || '';
        }
        let lImageEspace = 'Icone_EspaceInvite';
        switch (this.etatUtilisateurSco.GenreEspace) {
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
          case Enumere_Espace_1.TypeGenreEspace.Espace_Inscription:
            lImageEspace = 'Icone_EspaceInscription';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur:
            lImageEspace = 'Icone_EspacePrimEnseignant';
            break;
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent:
            lImageEspace = 'Icone_EspacPrimeParent';
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
            lImageEspace = 'Icone_EspaceAdministratif';
            break;
        }
        let lCleIdentifiant;
        let lCleMotDePasse;
        let lCleIdentifiantTitre;
        let lCleMdpTitre;
        let lCleMdpMessage;
        let lCleIdentifiantMsg;
        if (this.applicationCP.getDemo()) {
          lCleIdentifiant = 'connexion.identifiantInfoDemo';
          lCleMotDePasse = 'connexion.motDePasseInfoDemo';
          lCleIdentifiantTitre = 'connexion.identifiantTitreDemo';
          lCleMdpTitre = 'connexion.motDePasseTitreDemo';
          lCleMdpMessage = 'connexion.motDePasseMessageDemo';
        } else {
          lCleIdentifiant = 'connexion.identifiantInfo';
          lCleMotDePasse = 'connexion.motDePasseInfo';
          lCleIdentifiantTitre = 'connexion.identifiantTitre';
          lCleMdpTitre = 'connexion.motDePasseTitre';
          if (
            this.etatUtilisateurSco.GenreEspace ===
            Enumere_Espace_1.TypeGenreEspace.Espace_Inscription
          ) {
            lCleMdpMessage = 'connexion.motDePasseMsgInscription';
            lCleIdentifiantMsg = 'connexion.identifiantMsgInscription';
          } else {
            lCleIdentifiantMsg = 'connexion.identifiantMessage';
            lCleMdpMessage = 'connexion.motDePasseMessage';
          }
        }
        const lParamHtml = {
          instance: this,
          id: this.id,
          couleur: {
            texte: GCouleur.texte,
            themeNeutre: { sombre: GCouleur.themeNeutre.sombre },
          },
          traductions: {
            altImageDeFond: 'Image de fond',
            texteBouton: 'Se connecter',
            titreBouton: ObjetChaine_1.GChaine.toTitle(
              'Cliquez sur le bouton "Se connecter".',
            ),
            texteModeConnexion: this.options.avecChoixConnexion
              ? 'Mode de connexion'
              : '',
            texteChampsObligatoires: '* champs obligatoires',
            texteIdentifiant: 'Identifiant',
            ariaDescrModeConnexion: this.options.avecChoixConnexion
              ? 'Choisissez le mode de connexion.' +
                ' ' +
                'En mode "Dans la classe" vous n\'aurez accès qu\'à la saisie des absences et du cahier de textes, pour plus de confidentialité.'
              : '',
            ariaDescrIdentifiant: 'Il vous est communiqué par l'établissement et peut être différent de votre nom de famille.',
            texteTitleIdentifiant: ObjetChaine_1.GChaine.toTitle(
              ObjetTraduction_1.GTraductions.getValeur(lCleIdentifiantTitre) +
                (lCleIdentifiantMsg
                  ? ' ' +
                    ObjetTraduction_1.GTraductions.getValeur(lCleIdentifiantMsg)
                  : ''),
            ),
            textePlaceholderIdentifiant: ObjetChaine_1.GChaine.toTitle(
              ObjetTraduction_1.GTraductions.getValeur(lCleIdentifiant),
            ),
            texteTitleMotdepasse: ObjetChaine_1.GChaine.toTitle(
              ObjetTraduction_1.GTraductions.getValeur(lCleMdpTitre, [
                this.parametresSco.getNomEspace(),
              ]) +
                ' ' +
                ObjetTraduction_1.GTraductions.getValeur(lCleMdpMessage, [
                  'Récapitulatif des mentions'[
                    TypeGenreOngletInternet_1.TypeGenreOngletInternet
                      .Onglet_InfosPerso
                  ],
                ]),
            ),
            textePlaceholderMotdepasse: ObjetChaine_1.GChaine.toTitle(
              ObjetTraduction_1.GTraductions.getValeur(lCleMotDePasse),
            ),
            texteMotdepasse: 'Mot de passe',
            ariaDescrMotdepasse: ObjetChaine_1.GChaine.toTitle(
              ObjetTraduction_1.GTraductions.getValeur(lCleMdpMessage, [
                'Récapitulatif des mentions'[
                  TypeGenreOngletInternet_1.TypeGenreOngletInternet
                    .Onglet_InfosPerso
                ],
              ]),
            ),
            texteRecupIdMdp: this.options.avecRecupIdMdp
              ? this.options.pourInscription
                ? 'Récupérer votre mot de passe'
                : 'Récupérer son identifiant et son mot de passe'
              : '',
            ariaDescrRecupIdMdp: this.options.avecRecupIdMdp
              ? ObjetChaine_1.GChaine.toTitle(
                  'Cliquez pour commencer la procédure de récupération de vos identifiant et mot de passe.',
                )
              : '',
            ariaDescrLienPartenaire: 'Redirection site partenaire',
            modeConnexion1: 'Domicile',
            modeConnexion2: 'Dans la classe',
            inscriptions: {
              titre:
                'Bienvenue dans l'Espace Inscription',
              boutonEspaceParent: {
                titre: 'Vous avez déjà un compte Parents dans cet établissement',
                info: 'Un autre enfant est déjà inscrit dans cet établissement, connectez vous directement à votre Espace Parents habituel',
              },
              boutonCreation: {
                titre: 'Vous souhaitez faire une première demande d'inscription',
                info: 'Vous venez pour la première fois sur l'Espace Inscription et souhaitez créer un compte',
              },
              boutonEspaceInscription: {
                titre: 'Vous avez déjà une inscription en cours et compte sur l'Espace Inscription',
                info: 'Vous avez déjà fait votre demande d'inscription et souhaitez suivre votre dossier',
              },
            },
            AvertissementDemo: ObjetChaine_1.GChaine.replaceRCToHTML(
              'Ce site est une version de démonstration de PRONOTE.\nPour consulter vos données personnelles vous devez vous connecter à l'adresse fournie par votre établissement.',
            ),
          },
          options: {
            applicationNom: lObjetImage.applicationNom
              ? lObjetImage.applicationNom
              : '',
            decalageLogin:
              [
                TypeArrierePlanAuthentification_1
                  .TypeArrierePlanAuthentification.Louvre,
                TypeArrierePlanAuthentification_1
                  .TypeArrierePlanAuthentification.Arbre,
              ].indexOf(lGenreImageConnexion) > -1,
            classImageEspace: lImageEspace,
            srcFondImage: lObjetImage.srcImage,
            urlImageSuite: lObjetImage.urlImageSuite,
            widthImageSuite:
              ObjetNavigateur_1.Navigateur.clientL > lObjetImage.widthImageSuite
                ? lObjetImage.widthImageSuite
                : '1230',
            heightImageSuite: lObjetImage.heightImageSuite,
            urlImageFond:
              lObjetImage.urlImageFond || this.options.urlImageConnexion,
            classImageFond:
              lObjetImage.classImageFond ||
              (lObjetImage.urlImageFond
                ? ''
                : ObjetImageConnexion_1.ImageConnexion.getClassFond()),
            couleurFondBg: lObjetImage.couleurFond || 'white',
            couleurConnexion: lObjetImage.couleurConnexion || 'white',
            avecLien: lObjetImage.avecLien || false,
            avecLienSuite: lObjetImage.avecLienSuite || false,
            lien: lObjetImage.lien,
            lienSuite: lObjetImage.lienSuite,
            lienLogo: lObjetImage.lienLogo,
            styleLogo: lObjetImage.styleLogo,
            texteLien: lObjetImage.texteLien,
            texteLienSuite: lObjetImage.texteLienSuite,
            suiviLogo: lObjetImage.suiviLogo || lObjetImage.suiviLogo1,
            suiviLien: lObjetImage.suiviLien,
            suiviLienSuite:
              lObjetImage.suiviLienSuite || lObjetImage.suiviLogo2,
            couleurLien: lObjetImage.couleurLien || 'inherit',
            bottomLien: lObjetImage.bottomLien || '0',
            leftLien: lObjetImage.leftLien || '0',
            tailleLien: lObjetImage.tailleLien || '100%',
            nomEspace: this.parametresSco.getNomEspace(),
            modeDemo: this.applicationCP.getDemo(),
            urlLogo: this.parametresSco.urlLogo,
            dataImageFond: lObjetImage.dataImageFond,
            avecFichierFond: lObjetImage.avecFichierFond,
            sansFichierFond: !lObjetImage.avecFichierFond,
            insriptions: {
              classImageParent: 'Icone_EspaceParent',
              classImageCreation: 'Icone_EspaceInscription',
              classImageInscription: 'Icone_EspaceInscription',
            },
            mentionsPagesPubliques: this.parametresSco.mentionsPagesPubliques,
          },
          jsx: {
            modelRadioChoixConnexion:
              this.jsxModelRadioChoixConnexion.bind(this),
            montrerMasquerMDP: this.jsxModeleBoutonMontrerMasquerMDP.bind(this),
            displayBoutonRedirigerParent:
              this.jsxIfDisplayBoutonRedirigerParent.bind(this),
            modelBoutonRedirigerParent:
              this.jsxModelBoutonRedirigerParent.bind(this),
            displayBoutonRecuperationMDP:
              this.jsxDisplayRecuperationMDP.bind(this),
            modelBoutonCreationInscription:
              this.jsxModelBoutonCreationInscription.bind(this),
            modelBoutonConnexionInscription:
              this.jsxModelBoutonConnexionInscription.bind(this),
            modelBoutonValidation: this.jsxModelBoutonValidation.bind(this),
            getAttrLogin: this.jsxFuncAttrLogin.bind(this),
            getAttrMDP: this.jsxFuncAttrMDP.bind(this),
            visibiliteConnexion: this.jsxIfVisibiliteConnexion.bind(this),
            visibiliteInscription: this.jsxIfVisibiliteInscription.bind(this),
            visibiliteModeConnexion:
              this.jsxIfVisibiliteModeConnexion.bind(this),
            modelTexteLogin: this.jsxModelLogin.bind(this),
            modelTexteMdp: this.jsxModelMdp.bind(this),
            identiteBandeau: this.jsxIdentiteBandeau.bind(this),
            identiteFooter: this.jsxIdentiteFooter.bind(this),
          },
        };
        return lFctHtml(lParamHtml);
      }
      jsxModelBoutonCreationInscription() {
        return () => {
          return {
            event: () => {
              this.eventCreation();
            },
          };
        };
      }
      jsxModelBoutonConnexionInscription() {
        return () => {
          return {
            event: () => {
              this.options.pourInscription = false;
            },
          };
        };
      }
      jsxIfVisibiliteConnexion() {
        return !this.options.pourInscription;
      }
      jsxIfVisibiliteInscription() {
        return !!this.options.pourInscription;
      }
      jsxIfDisplayBoutonRedirigerParent() {
        return () => {
          return (
            this.options.pourInscription &&
            GParametres &&
            GParametres.infosInscription &&
            GParametres.infosInscription.espace
          );
        };
      }
      jsxModelBoutonRedirigerParent() {
        return () => {
          return {
            event: () => {
              if (
                GParametres &&
                GParametres.infosInscription &&
                GParametres.infosInscription.espace &&
                GParametres.infosInscription.espace.url
              ) {
                const lUrl = window.location.href.split('/');
                lUrl.pop();
                lUrl.push(GParametres.infosInscription.espace.url);
                window.location.href = lUrl.join('/');
              }
            },
          };
        };
      }
      callbackInitSecurisationCompte() {
        if (this.estConnexionSansInterface()) {
          const lJPage = $('#' + this.id.pageConnexionAuto.escapeJQ());
          const lJParent = lJPage.parent();
          lJPage.remove();
          lJParent.ieHtmlAppend(this.construirePage(), { instance: this });
        }
        ObjetHtml_1.GHtml.setDisplay(this.id.wrapperConnect, false);
      }
      callbackPersonnalisationMDPPromise(aParam) {
        return UtilitaireSecurisationCompte_1.UtilitaireSecurisationCompte.demarrerPersonnalisationMDP(
          aParam,
        );
      }
      callbackSecurisationDoubleAuthPromise(aParam) {
        return UtilitaireSecurisationCompte_1.UtilitaireSecurisationCompte.demarrerDoubleAut(
          aParam,
        );
      }
      async _reussiteAuthentification(aParamsAuthentification) {
        const lReponse =
          await new ObjetRequeteParametresUtilisateur_1.ObjetRequeteParametresUtilisateur(
            this,
          ).lancerRequete({
            motDePasseInvalide:
              aParamsAuthentification.motDePasseInvalide || undefined,
          });
        const lParams = Object.assign(aParamsAuthentification, lReponse);
        this.applicationCP.initAuthentification(lParams);
        this.etatUtilisateurSco.initAuthentification(lParams);
        this.parametresSco.initAuthentification(lParams);
        for (
          let I = 0;
          I < this.etatUtilisateurSco.listeOngletsOriginal.count();
          I++
        ) {
          const lOnglet = this.etatUtilisateurSco.listeOngletsOriginal.get(I);
          lOnglet.Actif = lOnglet.Actif !== false;
          lOnglet.Visible =
            lOnglet.Genre !==
            TypeGenreOngletInternet_1.TypeGenreOngletInternet.Onglet_Accueil;
          lOnglet.estUnOnglet =
            lOnglet.onglet === null || lOnglet.onglet === undefined;
          if (!lOnglet.estUnOnglet && lOnglet.Actif) {
            lOnglet.onglet.avecSousOnglet = true;
          }
        }
        const lOnglet = this._getOngletDemarrage();
        if (lOnglet !== null) {
          this.etatUtilisateurSco.setGenreOnglet(lOnglet);
        }
        const lParametres = {
          libelle:
            this.etatUtilisateurSco.Identification.ressource.getLibelle(),
          listeRessource:
            this.etatUtilisateurSco.Identification.ListeRessources,
        };
        if (lParams.messageAucuneEleve) {
          lParametres.message = lParams.messageAucuneEleve;
        }
        this.applicationCP.afficherEspaceApresAuthentification(lParametres);
      }
      _getOngletDemarrage() {
        if (this.etatUtilisateurSco.forcerOngletInscription) {
          return TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_InscriptionEtablissement;
        }
        if (
          MethodesObjet_1.MethodesObjet.isNumeric(
            this.etatUtilisateurSco.getGenreOnglet(),
          )
        ) {
          return null;
        }
        let lOnglet = null;
        if (
          this.applicationCP.parametresUtilisateur.has('onglet') &&
          this.etatUtilisateurSco.estOngletAutorise(
            this.applicationCP.parametresUtilisateur.get('onglet'),
          ) &&
          (this.etatUtilisateurSco.GenreEspace !==
            Enumere_Espace_1.TypeGenreEspace.Espace_Professeur ||
            this.etatUtilisateurSco.genreConnexion ===
              Enumere_Connexion_1.EGenreConnexion.Normale)
        ) {
          lOnglet = this.applicationCP.parametresUtilisateur.get('onglet');
        }
        if (
          this.etatUtilisateurSco.avecPageAccueil() &&
          this.etatUtilisateurSco.estOngletAutorise(
            TypeGenreOngletInternet_1.TypeGenreOngletInternet.Onglet_Accueil,
          ) &&
          ((this.applicationCP.parametresUtilisateur.has(
            'demarrerSurPageAccueil',
          ) &&
            this.applicationCP.parametresUtilisateur.get(
              'demarrerSurPageAccueil',
            )) ||
            lOnglet === null)
        ) {
          lOnglet =
            TypeGenreOngletInternet_1.TypeGenreOngletInternet.Onglet_Accueil;
        }
        return lOnglet;
      }
    }
    exports.InterfaceConnexionEspace = InterfaceConnexionEspace;
  },
  fn: 'interfaceconnexionespace.js',
});