IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.InterfaceConnexionEspace = void 0;
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_Connexion_1 = require('Enumere_Connexion');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const Enumere_Onglet_1 = require('Enumere_Onglet');
    const _InterfaceConnexion_1 = require('_InterfaceConnexion');
    require('ObjetRequeteAuthentificationPN.js');
    require('ObjetRequeteIdentification.js');
    const GImageConnexion = require('ObjetImageConnexion');
    const ObjetChaine_1 = require('ObjetChaine');
    const TypeArrierePlanAuthentification_1 = require('TypeArrierePlanAuthentification');
    const UtilitaireChangementLangue_1 = require('UtilitaireChangementLangue');
    const ObjetBandeauEspace_1 = require('ObjetBandeauEspace');
    const InterfaceBandeauPiedCommune_1 = require('InterfaceBandeauPiedCommune');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const UtilitaireSecurisationCompte_1 = require('UtilitaireSecurisationCompte');
    const ObjetHtml_1 = require('ObjetHtml');
    const MethodesObjet_1 = require('MethodesObjet');
    const ModeleInterfaceConnexion = require('InterfaceConnexion.tsxModele');
    const MultiObjetFenetreRecupIdMDP = require('ObjetFenetre_RecupIdMDP');
    const ObjetRequeteParametresUtilisateur_1 = require('ObjetRequeteParametresUtilisateur');
    const ThemesCouleurs_1 = require('ThemesCouleurs');
    require('Connexion.css');
    require('pages_connexion.css');
    class InterfaceConnexionEspace extends _InterfaceConnexion_1._InterfaceConnexion {
      constructor(...aParams) {
        super(...aParams);
        this.parametresSco = GParametres;
        this.applicationSco = GApplication;
        this.etatUtilisateurSco = this.applicationSco.getEtatUtilisateur();
        this.setOptions({
          genreImageConnexion: this.parametresSco.genreImageConnexion,
          urlImageConnexion: this.parametresSco.urlImageConnexion,
          avecChoixConnexion: this.parametresSco.avecChoixConnexion,
          avecRecupIdMdp: this.parametresSco.avecRecuperationInfosConnexion,
          parentAutoriseChangerMDP: this.parametresSco.parentAutoriseChangerMDP,
          pourInscription: [Enumere_Espace_1.EGenreEspace.Inscription].includes(
            this.etatUtilisateurSco.GenreEspace,
          ),
          requetes: {
            identification: 'Identification',
            authentification: 'Authentification',
          },
          utilitaireChangementLangue:
            UtilitaireChangementLangue_1.UtilitaireChangementLangue,
        });
      }
      construireInstances() {
        super.construireInstances();
        if (
          MultiObjetFenetreRecupIdMDP &&
          MultiObjetFenetreRecupIdMDP.ObjetFenetreRecupIdMDP
        ) {
          this.identFenetreRecupIdMDP = this.addFenetre(
            MultiObjetFenetreRecupIdMDP.ObjetFenetreRecupIdMDP,
            null,
            this.initialiserRecupIdMDP,
          );
        }
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          getIdentiteBandeau: function () {
            return {
              class: ObjetBandeauEspace_1.ObjetBandeauEspace,
              pere: {},
              init: function (aBandeau) {
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
                  _s;
                const lEstDarkMode =
                  ThemesCouleurs_1.ThemesCouleurs.getDarkMode();
                let lLogoCollectiviteImage = null;
                let lLogoCollectiviteLien = null;
                if (
                  (_a = aInstance.parametresSco) === null || _a === void 0
                    ? void 0
                    : _a.collectivite
                ) {
                  lLogoCollectiviteImage =
                    lEstDarkMode &&
                    ((_e =
                      (_d =
                        (_c =
                          (_b = aInstance.parametresSco) === null ||
                          _b === void 0
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
                              (_f = aInstance.parametresSco) === null ||
                              _f === void 0
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
                                (_k = aInstance.parametresSco) === null ||
                                _k === void 0
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
                      (_p = aInstance.parametresSco) === null || _p === void 0
                        ? void 0
                        : _p.collectivite) === null || _q === void 0
                      ? void 0
                      : _q.urlCollectivite
                  ) {
                    lLogoCollectiviteLien =
                      (_s =
                        (_r = aInstance.parametresSco) === null || _r === void 0
                          ? void 0
                          : _r.collectivite) === null || _s === void 0
                        ? void 0
                        : _s.urlCollectivite;
                  }
                }
                aBandeau.setParametres({
                  logoDepartementImage:
                    aInstance.parametresSco.logoDepartementImage,
                  logoDepartementLien:
                    aInstance.parametresSco.logoDepartementLien,
                  logoCollectiviteImage: lLogoCollectiviteImage,
                  logoCollectiviteLien: lLogoCollectiviteLien,
                });
              },
            };
          },
          getIdentiteFooter: function () {
            return {
              class: InterfaceBandeauPiedCommune_1.InterfaceBandeauPiedCommune,
              pere: {},
            };
          },
        });
      }
      initialiserRecupIdMDP(aInstance) {
        aInstance.setOptions({
          avecRecupParParent: this.options.parentAutoriseChangerMDP,
        });
      }
      eventCreation() {
        if (this.applicationSco.getModeExclusif()) {
          return this.applicationSco
            .getMessage()
            .afficher({
              message: ObjetTraduction_1.GTraductions.getValeur(
                'fenetreRecupIdMDP.RecupModeConsultation',
              ),
            });
        }
        const lInstance = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          MultiObjetFenetreRecupIdMDP.ObjetFenetreRecupIdMDP,
          {
            pere: this,
            initialiser: function (aInstance) {
              aInstance.setOptionsFenetre({
                titre: ObjetTraduction_1.GTraductions.getValeur(
                  'fenetreRecupIdMDP.titreCreation',
                ),
                estCreation: true,
              });
            },
            evenement: function (aStage) {
              if (aStage === -1) {
                this.options.pourInscription = false;
              }
            },
          },
        );
        lInstance.afficher();
      }
      evenementRecupIdMDP() {
        if (this.applicationSco.getModeExclusif()) {
          return this.applicationSco
            .getMessage()
            .afficher({
              message: ObjetTraduction_1.GTraductions.getValeur(
                'fenetreRecupIdMDP.RecupModeConsultation',
              ),
            });
        }
        this.getInstance(this.identFenetreRecupIdMDP).afficher();
      }
      construirePage() {
        const lFctHtml = ModeleInterfaceConnexion.getHtml;
        let lGenreImageConnexion = this.options.genreImageConnexion;
        const lObjetImage =
          GImageConnexion.getObjetImagePronote(lGenreImageConnexion);
        lObjetImage.avecFichierFond = false;
        if (
          lGenreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .Louvre
        ) {
          if (this.applicationSco.estEDT) {
            lObjetImage.classImageFond = 'bg-espace-edt ';
            lObjetImage.applicationNom = 'espace-edt ';
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
          }
        }
        if (
          lGenreImageConnexion ===
          TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
            .Arbre
        ) {
          if (this.applicationSco.estPrimaire) {
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
          case Enumere_Espace_1.EGenreEspace.Inscription:
            lImageEspace = 'Icone_EspaceInscription';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimProfesseur:
            lImageEspace = 'Icone_EspaceEnseignant';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimParent:
            lImageEspace = 'Icone_EspaceParent';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimEleve:
            lImageEspace = 'Icone_EspaceEtudiant';
            break;
          case Enumere_Espace_1.EGenreEspace.Accompagnant:
            lImageEspace = 'Icone_EspaceAccompagnant';
            break;
          case Enumere_Espace_1.EGenreEspace.PrimAccompagnant:
            lImageEspace = 'Icone_EspaceAccompagnant';
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
            lImageEspace = 'Icone_EspaceAdministratif';
            break;
        }
        let lCleIdentifiant;
        let lCleMotDePasse;
        let lCleIdentifiantTitre;
        let lCleMdpTitre;
        let lCleMdpMessage;
        let lCleIdentifiantMsg;
        if (this.applicationSco.getDemo()) {
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
            Enumere_Espace_1.EGenreEspace.Inscription
          ) {
            lCleMdpMessage = 'connexion.motDePasseMsgInscription';
            lCleIdentifiantMsg = 'connexion.identifiantMsgInscription';
          } else {
            lCleIdentifiantMsg = 'connexion.identifiantMessage';
            lCleMdpMessage = 'connexion.motDePasseMessage';
          }
        }
        const lParamHtml = {};
        lParamHtml.id = this.id;
        lParamHtml.couleur = {
          grisClair: GCouleur.grisClair,
          texte: GCouleur.texte,
          themeNeutre: { sombre: GCouleur.themeNeutre.sombre },
        };
        lParamHtml.traductions = {
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
                'Remplacements'[
                  Enumere_Onglet_1.EGenreOnglet.InfosPerso
                ],
              ]),
          ),
          textePlaceholderMotdepasse: ObjetChaine_1.GChaine.toTitle(
            ObjetTraduction_1.GTraductions.getValeur(lCleMotDePasse),
          ),
          texteMotdepasse: 'Mot de passe',
          ariaDescrMotdepasse: ObjetChaine_1.GChaine.toTitle(
            ObjetTraduction_1.GTraductions.getValeur(lCleMdpMessage, [
              'Remplacements'[
                Enumere_Onglet_1.EGenreOnglet.InfosPerso
              ],
            ]),
          ),
          texteRecupIdMdp: this.options.avecRecupIdMdp
            ? this.options.pourInscription
              ? ObjetTraduction_1.GTraductions.getValeur(
                  'connexion.RecuperationMDP.texteBis',
                )
              : ObjetTraduction_1.GTraductions.getValeur(
                  'connexion.RecuperationMDP.texte',
                )
            : '',
          ariaDescrRecupIdMdp: this.options.avecRecupIdMdp
            ? ObjetChaine_1.GChaine.toTitle(
                ObjetTraduction_1.GTraductions.getValeur(
                  'connexion.RecuperationMDP.titre',
                ),
              )
            : '',
          ariaDescrLienPartenaire: 'Redirection site partenaire',
          modeConnexion1: 'Domicile',
          modeConnexion2: 'Dans la classe',
          mentionsLegales:
            'Mentions légales',
          louvre: {
            lien: 'En savoir plus et découvrir l'exposition %s de la Petite Galerie du Louvre',
          },
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
        };
        lParamHtml.options = {
          applicationNom: lObjetImage.applicationNom
            ? lObjetImage.applicationNom
            : '',
          sousTitre:
            'Année scolaire' +
            ' ' +
            this.parametresSco.anneeScolaire,
          urlLien: this.parametresSco.urlSiteIndexEducation,
          decalageLogin:
            [
              TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
                .Louvre,
              TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification
                .Arbre,
            ].indexOf(lGenreImageConnexion) > -1,
          classImageEspace: lImageEspace,
          srcFondImage: lObjetImage.srcImage,
          urlImageSuite: lObjetImage.urlImageSuite,
          widthImageSuite:
            GNavigateur.clientL > lObjetImage.widthImageSuite
              ? lObjetImage.widthImageSuite
              : '1230',
          heightImageSuite: lObjetImage.heightImageSuite,
          urlImageFond:
            lObjetImage.urlImageFond || this.options.urlImageConnexion,
          classImageFond:
            lObjetImage.classImageFond ||
            (lObjetImage.urlImageFond ? '' : GImageConnexion.getClassFond()),
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
          suiviLienSuite: lObjetImage.suiviLienSuite || lObjetImage.suiviLogo2,
          couleurLien: lObjetImage.couleurLien || 'inherit',
          bottomLien: lObjetImage.bottomLien || '0',
          leftLien: lObjetImage.leftLien || '0',
          tailleLien: lObjetImage.tailleLien || '100%',
          nomEspace: this.parametresSco.getNomEspace(),
          modeDemo: this.applicationSco.getDemo(),
          avecRecupIdMdp: this.options.avecRecupIdMdp,
          pourInscription: this.options.pourInscription,
          infoWAIident: 'Identifiant',
          urlLogo: this.parametresSco.urlLogo,
          dataImageFond: lObjetImage.dataImageFond,
          avecFichierFond: lObjetImage.avecFichierFond,
          sansFichierFond: !lObjetImage.avecFichierFond,
          modeConnexion1: 0,
          modeConnexion2: 1,
          insriptions: {
            classImageParent: 'Icone_EspaceParent',
            classImageCreation: 'Icone_EspaceInscription',
            classImageInscription: 'Icone_EspaceInscription',
          },
          mentionsPagesPubliques: this.parametresSco.mentionsPagesPubliques,
        };
        return lFctHtml(lParamHtml);
      }
      callbackInitSecurisationCompte() {
        if (this.estConnexionSansInterface()) {
          const lJPage = $('#' + this.id.pageConnexionAuto.escapeJQ());
          const lJParent = lJPage.parent();
          lJPage.remove();
          lJParent.ieHtmlAppend(this.construirePage(), {
            controleur: this.controleur,
          });
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
        this.applicationSco.initAuthentification(lParams);
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
            lOnglet.Genre !== Enumere_Onglet_1.EGenreOnglet.Accueil;
          lOnglet.estUnOnglet =
            lOnglet.onglet === null || lOnglet.onglet === undefined;
          if (!lOnglet.estUnOnglet && lOnglet.Actif) {
            lOnglet.onglet.avecSousOnglet = true;
          }
        }
        const lOnglet = this._getOngletDemarrage();
        if (lOnglet !== null) {
          this.etatUtilisateurSco.setGenreOnglet(lOnglet);
        } else {
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
        this.applicationSco.afficherEspaceApresAuthentification(lParametres);
      }
      _getOngletDemarrage() {
        if (this.etatUtilisateurSco.forcerOngletInscription) {
          return Enumere_Onglet_1.EGenreOnglet.InscriptionsEtablissement;
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
          this.applicationSco.parametresUtilisateur.has('onglet') &&
          this.etatUtilisateurSco.estOngletAutorise(
            this.applicationSco.parametresUtilisateur.get('onglet'),
          ) &&
          (this.etatUtilisateurSco.GenreEspace !==
            Enumere_Espace_1.EGenreEspace.Professeur ||
            this.etatUtilisateurSco.genreConnexion ===
              Enumere_Connexion_1.EGenreConnexion.Normale)
        ) {
          lOnglet = this.applicationSco.parametresUtilisateur.get('onglet');
        }
        if (
          this.etatUtilisateurSco.avecPageAccueil() &&
          this.etatUtilisateurSco.estOngletAutorise(
            Enumere_Onglet_1.EGenreOnglet.Accueil,
          ) &&
          ((this.applicationSco.parametresUtilisateur.has(
            'demarrerSurPageAccueil',
          ) &&
            this.applicationSco.parametresUtilisateur.get(
              'demarrerSurPageAccueil',
            )) ||
            lOnglet === null)
        ) {
          lOnglet = Enumere_Onglet_1.EGenreOnglet.Accueil;
        }
        return lOnglet;
      }
    }
    exports.InterfaceConnexionEspace = InterfaceConnexionEspace;
  },
  fn: 'interfaceconnexionespace.js',
});