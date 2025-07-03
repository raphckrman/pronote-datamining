IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetEtatUtilisateur = void 0;
    const ObjetEtatUtilisateurCP_1 = require('ObjetEtatUtilisateurCP');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetTri_1 = require('ObjetTri');
    const ObjetIdentification_1 = require('ObjetIdentification');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetNavigation_1 = require('ObjetNavigation');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const Enumere_Onglet_1 = require('Enumere_Onglet');
    const ObjetDroitsPN_1 = require('ObjetDroitsPN');
    const Enumere_Connexion_1 = require('Enumere_Connexion');
    const ObjetDate_1 = require('ObjetDate');
    const TypeSecurisationCompte_1 = require('TypeSecurisationCompte');
    class ObjetEtatUtilisateur extends ObjetEtatUtilisateurCP_1.ObjetEtatUtilisateurCP {
      constructor(aGenreEspace) {
        super();
        this.applicationSco = GApplication;
        this.derniereDate = null;
        this.existeGenreOnglet = (aGenreOnglet) => {
          const lGenreOnglet =
            this.listeOnglets.getElementParGenre(aGenreOnglet);
          return lGenreOnglet && lGenreOnglet.Actif;
        };
        this.GenreEspace = aGenreEspace;
        this.Navigation = new ObjetNavigation_1.ObjetNavigation();
        this.genreOnglet = null;
        this.accessibilite = { avecCodeCompetences: false };
      }
      get listeOngletsOriginal() {
        return super.listeOnglets;
      }
      get listeOnglets() {
        return this.getListeOngletsSelonContexte();
      }
      set listeOnglets(aValeur) {
        super.listeOnglets = aValeur;
      }
      initAuthentification(aParam) {
        var _a, _b;
        this.avecRessourcesGranulaire = aParam.avecRessourcesGranulaire;
        this.avecRessourcesRenduTAF = aParam.avecRessourcesRenduTAF;
        this.avecRessourcesEnvoiNote = aParam.avecRessourcesEnvoiNote;
        this.activerKiosqueRenduTAF = aParam.activerKiosqueRenduTAF;
        this.activerKiosqueEnvoiNote =
          aParam.activerKiosqueEnvoiNote && !this.pourPrimaire();
        if (
          aParam.messagesDyn &&
          this.genreConnexion !== Enumere_Connexion_1.EGenreConnexion.Allegee
        ) {
          this.applicationSco.donneesCentraleNotifications.addMessagesDynamiques(
            aParam.messagesDyn,
          );
        }
        this.listeRessourcesRecherche = aParam.listeRessourcesRecherche;
        this.modeSecurisationParDefaut = aParam.modeSecurisationParDefaut;
        if (aParam.messagerieSignature) {
          this.messagerieSignature = aParam.messagerieSignature;
        }
        if (
          ((_b =
            (_a =
              aParam === null || aParam === void 0
                ? void 0
                : aParam.listeAppareilsMobile_VisibleDebug) === null ||
            _a === void 0
              ? void 0
              : _a.listeConnexionMobile) === null || _b === void 0
            ? void 0
            : _b.length) > 0
        ) {
          this.setListeAppareilsMobile(
            aParam.listeAppareilsMobile_VisibleDebug.listeConnexionMobile,
          );
        }
        this.deserialiserOnglets(aParam);
        this.deserialiserRessources(aParam);
        this.deserialiserInfosSupp(aParam);
        this.deserialiserPage(aParam);
      }
      deserialiserOnglets(aParam) {
        this.listeOngletsInvisibles = aParam.listeOngletsInvisibles;
        this.listeGenreOngletsNotification = aParam.listeOngletsNotification;
        if (aParam.listeOnglets) {
          this.listeOnglets = new ObjetListeElements_1.ObjetListeElements();
          this.listeOngletsNotification =
            new ObjetListeElements_1.ObjetListeElements();
          for (let i = 0; i < aParam.listeOnglets.length; i++) {
            this._ajouterOnglet(aParam.listeOnglets[i], 0, null);
          }
        }
      }
      deserialiserRessources(aJSON) {
        const lRessource = new ObjetElement_1.ObjetElement().fromJSON(
          aJSON.ressource,
        );
        lRessource.libelleLong = lRessource.getLibelle();
        if (!!aJSON && !!aJSON.ressource) {
          lRessource.estDelegue = aJSON.ressource.estDelegue;
          lRessource.estMembreCA = aJSON.ressource.estMembreCA;
          lRessource.avecDiscussionResponsables =
            aJSON.ressource.avecDiscussionResponsables;
          lRessource.listeClassesDelegue = aJSON.ressource.listeClassesDelegue;
          lRessource.nbMaxJoursDeclarationAbsence =
            aJSON.ressource.nbMaxJoursDeclarationAbsence;
          lRessource.nbMaxJoursDeclarationDispCD =
            aJSON.ressource.nbMaxJoursDeclarationDispCD;
          lRessource.nbMaxJoursDeclarationDispLD =
            aJSON.ressource.nbMaxJoursDeclarationDispLD;
          if (aJSON.ressource.listeNumerosUtiles) {
            this.listeNumerosUtiles = aJSON.ressource.listeNumerosUtiles;
          }
          if (aJSON.ressource.destinatairePersonnelsMairie) {
            lRessource.destinatairePersonnelsMairie =
              aJSON.ressource.destinatairePersonnelsMairie;
          }
          lRessource.photoBase64 = aJSON.ressource.photoBase64;
        }
        let lMembreJSON, lMembre;
        const lListeRessources = new ObjetListeElements_1.ObjetListeElements();
        if (!!aJSON && !!aJSON.ressource && !!aJSON.ressource.listeRessources) {
          for (let i = 0; i < aJSON.ressource.listeRessources.length; i++) {
            lMembreJSON = aJSON.ressource.listeRessources[i];
            lMembre = new ObjetElement_1.ObjetElement().fromJSON(lMembreJSON);
            this._traiterUtilisateur(lMembre, lMembreJSON, aJSON);
            lListeRessources.addElement(lMembre);
          }
        } else if (
          !!aJSON &&
          !!aJSON.ressource &&
          !!aJSON.ressource.listeDisciplines
        ) {
          for (let i = 0; i < aJSON.ressource.listeDisciplines.length; i++) {
            const lDisciplineJSON = aJSON.ressource.listeDisciplines[i];
            const lDiscipline = new ObjetElement_1.ObjetElement().fromJSON(
              lDisciplineJSON,
            );
            lListeRessources.addElement(lDiscipline);
            lDiscipline.ClassAffichage = 'Gras';
            lDiscipline.AvecSelection = false;
            lDiscipline.estGroupeDeRessource = true;
            lDiscipline.Numero = 0;
            if (!!lDisciplineJSON.listeRessources) {
              for (let j = 0; j < lDisciplineJSON.listeRessources.length; j++) {
                lMembreJSON = lDisciplineJSON.listeRessources[j];
                lMembre = new ObjetElement_1.ObjetElement().fromJSON(
                  lMembreJSON,
                );
                this._traiterUtilisateur(lMembre, lMembreJSON, aJSON);
                lListeRessources.addElement(lMembre);
                lMembre.pere = lDiscipline;
                lMembre.ClassAffichage = 'GrandEspaceGauche';
              }
            }
          }
        } else {
          this._traiterUtilisateur(lRessource, aJSON.ressource, aJSON);
        }
        lListeRessources.setTri([
          ObjetTri_1.ObjetTri.init((D) => {
            return !(
              D.Genre === Enumere_Ressource_1.EGenreRessource.Eleve &&
              D.Classe &&
              D.Classe.existeNumero()
            );
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return D.pere
              ? D.pere.getLibelle()
              : D.Position > 0
                ? D.Position
                : D.getLibelle();
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return !D.estGroupeDeRessource;
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return D.Position > 0 ? D.Position : D.getLibelle();
          }),
        ]);
        lListeRessources.trier();
        this.setIdentification(lRessource, lListeRessources);
      }
      _traiterUtilisateur(aUtilisateur, aUtilisateurJSON, aJSONReponse) {
        if (aUtilisateurJSON.destinatairesCarnetLiaison) {
          aUtilisateur.destinatairesCarnetLiaison =
            aUtilisateurJSON.destinatairesCarnetLiaison;
          aUtilisateur.destinatairesCarnetLiaison
            .setTri([
              ObjetTri_1.ObjetTri.init('Genre'),
              ObjetTri_1.ObjetTri.init('Libelle'),
            ])
            .trier();
        }
        if (
          !!aUtilisateurJSON.listeProfesseurs &&
          !!aJSONReponse.listeClasses
        ) {
          aUtilisateur.listeProfesseurs = aUtilisateurJSON.listeProfesseurs;
          aUtilisateur.listeProfesseurs.parcourir(
            this._traiterListeProfesseurs.bind(this, aJSONReponse.listeClasses),
          );
          aUtilisateur.listeProfesseurs.trier();
        }
        if (aUtilisateurJSON.Etablissement !== undefined) {
          aUtilisateur.Etablissement = aUtilisateurJSON.Etablissement;
        }
        if (aUtilisateurJSON.notificationsPush !== undefined) {
          aUtilisateur.notificationsPush = aUtilisateurJSON.notificationsPush;
        }
        if (aUtilisateurJSON.estEnseignant !== undefined) {
          aUtilisateur.estEnseignant = aUtilisateurJSON.estEnseignant;
          if (aUtilisateur.estEnseignant === true) {
            aUtilisateur.ressourceEnseignant =
              aUtilisateurJSON.ressourceEnseignant;
          }
        }
        if (aUtilisateurJSON.estDirecteur !== undefined) {
          aUtilisateur.estDirecteur = aUtilisateurJSON.estDirecteur;
        }
        if (aUtilisateurJSON.autoriserImage !== undefined) {
          aUtilisateur.autoriserImage = aUtilisateurJSON.autoriserImage;
        }
        aUtilisateur.avecPhoto = !!aUtilisateurJSON.avecPhoto;
        if (aUtilisateurJSON.photoBase64) {
          aUtilisateur.photoBase64 = aUtilisateurJSON.photoBase64;
        }
        if (aUtilisateurJSON.listeDestProfsDiscussionPrimEleve) {
          aUtilisateur.listeDestProfsDiscussionPrimEleve =
            aUtilisateurJSON.listeDestProfsDiscussionPrimEleve;
        }
        if (aUtilisateurJSON.passeLeBrevet) {
          aUtilisateur.passeLeBrevet = aUtilisateurJSON.passeLeBrevet;
        }
        if (aUtilisateurJSON.listeMatieresDeclarationDispense) {
          aUtilisateur.listeMatieresDeclarationDispense =
            aUtilisateurJSON.listeMatieresDeclarationDispense;
        }
        if (aUtilisateurJSON.passeLeCFG) {
          aUtilisateur.passeLeCFG = aUtilisateurJSON.passeLeCFG;
        }
        if (this.estEspacePourEleve()) {
          aUtilisateur.Classe = new ObjetElement_1.ObjetElement().fromJSON(
            aUtilisateurJSON.classeDEleve,
          );
          aUtilisateur.libelleLong = aUtilisateur.getLibelle();
          let lTestClasseCourant = false;
          if (aUtilisateurJSON.listeClassesHistoriques !== undefined) {
            aUtilisateur.listeClasseHistorique =
              aUtilisateurJSON.listeClassesHistoriques;
            if (!aUtilisateurJSON.estClasseRattachementduJour) {
              aUtilisateur.listeClasseHistorique.parcourir((aClasse) => {
                if (aClasse.courant) {
                  lTestClasseCourant = true;
                  aUtilisateur.libelleLong += ' (' + aClasse.getLibelle() + ')';
                  return false;
                }
              });
            }
          }
          if (
            !lTestClasseCourant &&
            !!aUtilisateur.Classe &&
            aUtilisateur.Classe.getLibelle()
          ) {
            aUtilisateur.libelleLong +=
              ' (' + aUtilisateur.Classe.getLibelle() + ')';
          }
          if (aUtilisateurJSON.listeGroupes !== undefined) {
            aUtilisateur.ListeGroupes = aUtilisateurJSON.listeGroupes;
          }
          if (aUtilisateurJSON.autoriserImage !== undefined) {
            aUtilisateur.autoriserImage = aUtilisateurJSON.autoriserImage;
          }
          aUtilisateur.tableauOnglets = [];
          if (!!aUtilisateurJSON.listeOngletsPourPeriodes) {
            aUtilisateurJSON.listeOngletsPourPeriodes.parcourir((aOnglet) => {
              aUtilisateur.tableauOnglets[aOnglet.getGenre()] = aOnglet;
            });
          }
          if (!!aUtilisateurJSON.listeOngletsPourPiliers) {
            aUtilisateurJSON.listeOngletsPourPiliers.parcourir((aOnglet) => {
              aUtilisateur.tableauOnglets[aOnglet.getGenre()] = aOnglet;
            });
          }
        }
        if (!!aUtilisateurJSON.acces) {
          aUtilisateur.acces = aUtilisateurJSON.acces;
        }
      }
      deserialiserInfosSupp(aParam) {
        this.infosSupp = {};
        this.urlInstallClient = aParam.UrlInstallClient;
        this.urlParamClient = aParam.UrlParamClient;
        this.designationClient = aParam.designationClient;
        this.listeMotifsAbsences = aParam.listeMotifsAbsences;
        this.listeMotifsRetards = aParam.listeMotifsRetards;
        this.autorisationKiosque = !!aParam.autorisationKiosque;
        this.autorisationCloud = !!aParam.autorisationCloud;
        this.derniereConnexion = aParam.derniereConnexion;
        this.cloudIndexActif = !!aParam.cloudIndexActif;
        this.avecCloudIndex = !!aParam.avecCloudIndex;
        this.listeCloud =
          aParam.listeCloud || new ObjetListeElements_1.ObjetListeElements();
        this.listeCloudDepotServeur =
          aParam.listeCloudDepotServeur ||
          new ObjetListeElements_1.ObjetListeElements();
        this.listeClasses = aParam.listeClasses;
        this.listeMatieres = aParam.listeMatieres;
        this.listeNiveaux = aParam.listeNiveaux;
        this.existeCDTsDetaches = aParam.existeCDTsDetaches;
        this.tabEtablissementsModeleGrille =
          aParam.tabEtablissementsModeleGrille;
        this.listeInformationsEtablissements =
          aParam.listeInformationsEtablissements;
        this.joursOuvresServices = aParam.joursOuvresServices;
      }
      deserialiserPage(aParam) {
        const lPage = aParam.page;
        if (lPage && this.existeGenreOnglet) {
          if (this.existeGenreOnglet(lPage.Onglet)) {
            if (lPage.membre) {
              GEtatUtilisateur.setNumeroEleve(lPage.membre.getNumero());
            }
            if (lPage.cours || lPage.absenceRessource) {
              const lCours = lPage.cours || lPage.absenceRessource;
              this.setNavigationCours(lCours);
            }
            if (lPage.Date) {
              const lDate = ObjetDate_1.GDate.getDateJour(lPage.Date);
              this.setNavigationDate(lDate);
            }
            if (lPage.service) {
              this.Navigation.setRessource(
                Enumere_Ressource_1.EGenreRessource.Service,
                lPage.service.getLibelle(),
                lPage.service.getNumero(),
                lPage.service.getGenre(),
              );
            }
            if (lPage.palier) {
              this.Navigation.setRessource(
                Enumere_Ressource_1.EGenreRessource.Palier,
                lPage.palier.getLibelle(),
                lPage.palier.getNumero(),
                lPage.palier.getGenre(),
              );
            }
            if (lPage.competence) {
              this.Navigation.setRessource(
                Enumere_Ressource_1.EGenreRessource.Pilier,
                lPage.competence.getLibelle(),
                lPage.competence.getNumero(),
                lPage.competence.getGenre(),
              );
            }
            if (lPage.periode) {
              this.Navigation.setRessource(
                Enumere_Ressource_1.EGenreRessource.Periode,
                lPage.periode.getLibelle(),
                lPage.periode.getNumero(),
                lPage.periode.getGenre(),
              );
            }
            if (lPage.classe) {
              this.Navigation.setRessource(
                Enumere_Ressource_1.EGenreRessource.Classe,
                lPage.classe.getLibelle(),
                lPage.classe.getNumero(),
                lPage.classe.getGenre(),
              );
            }
            this.setPage(lPage);
          }
        }
      }
      setIdentification(aRessource, aListeRessources) {
        this.Identification = new ObjetIdentification_1.ObjetIdentification(
          aRessource,
          aListeRessources,
        );
        this.Identification.indiceEleve = 0;
        if (this.page && this.page.membre) {
          this.setNumeroEleve(this.page.membre.getNumero());
        }
      }
      getUtilisateur() {
        return this.Identification.ressource;
      }
      getMembre() {
        return this.Identification.getMembre();
      }
      avecPlusieursMembres() {
        return (
          this.Identification &&
          this.Identification.ListeRessources &&
          this.Identification.ListeRessources.count() > 1
        );
      }
      setNumeroEleve(aNumeroEleve) {
        let lIndice = false;
        for (let I = 0; I < this.Identification.ListeRessources.count(); I++) {
          const lEleve = this.Identification.ListeRessources.get(I);
          if (lEleve.getNumero() === aNumeroEleve) {
            lIndice = I;
          }
        }
        if (lIndice === false) {
          return;
        }
        this.Identification.indiceEleve = lIndice;
        this.Identification.NumeroEleve = aNumeroEleve;
        this.Navigation.setRessource(
          Enumere_Ressource_1.EGenreRessource.Eleve,
          this.getMembre().getLibelle(),
          aNumeroEleve,
        );
        this.Navigation.setRessource(
          Enumere_Ressource_1.EGenreRessource.Classe,
          this.Identification.getLibelleClasse(),
          this.Identification.getNumeroClasse(),
          Enumere_Ressource_1.EGenreRessource.Classe,
        );
      }
      getClasse() {
        return this.listeClasses.getElementParNumeroEtGenre(
          this.Navigation.getNumeroRessource(
            Enumere_Ressource_1.EGenreRessource.Classe,
          ),
          this.Navigation.getGenreRessource(
            Enumere_Ressource_1.EGenreRessource.Classe,
          ),
        );
      }
      setClasse(aClasse) {
        this.Navigation.setRessource(
          Enumere_Ressource_1.EGenreRessource.Classe,
          aClasse,
        );
      }
      getPage() {
        return this.page;
      }
      resetPage() {
        this.page = null;
      }
      setPage(aPage) {
        this.page = aPage;
        if (this.page && this.page.Onglet > 0) {
          this.setGenreOnglet(this.page.Onglet);
        }
        if (
          this.page &&
          this.page.ressource !== null &&
          this.page.ressource !== undefined
        ) {
          this.setGenreRessource(this.page.ressource);
        }
      }
      setGenreRessource(aGenreRessource) {}
      getGenreOnglet() {
        return this.genreOnglet;
      }
      setGenreOnglet(aGenreOnglet) {
        this.genreOnglet = aGenreOnglet;
      }
      getInfosSupp(aNomStockage) {
        if (!this.infosSupp) {
          return null;
        }
        if (!this.infosSupp[aNomStockage]) {
          this.infosSupp[aNomStockage] = {};
        }
        return this.infosSupp[aNomStockage];
      }
      getOngletSelectionne() {
        let lOngletSelectionne = null;
        if (this.listeOnglets) {
          let lGenreOngletActif = this.genreOnglet;
          if (lGenreOngletActif) {
            this.listeOnglets.parcourir((aOnglet) => {
              if (aOnglet.getGenre() === lGenreOngletActif) {
                lOngletSelectionne = aOnglet;
                return false;
              }
            });
          }
        }
        return lOngletSelectionne;
      }
      getLibelleLongOnglet() {
        const lOnglet = this.getOngletSelectionne();
        return (
          (lOnglet === null || lOnglet === void 0
            ? void 0
            : lOnglet.libelleLong) ||
          (lOnglet === null || lOnglet === void 0
            ? void 0
            : lOnglet.getLibelle()) ||
          ''
        );
      }
      estOngletAutorise(aGenreOnglet) {
        let lOK = false;
        this.listeOnglets.parcourir((aOnglet) => {
          if (aOnglet.getGenre() === aGenreOnglet && aOnglet.Actif) {
            lOK = true;
            return false;
          }
        });
        return lOK;
      }
      estAvecCodeCompetences() {
        return this.accessibilite.avecCodeCompetences;
      }
      setAvecCodeCompetences(aActif) {
        this.accessibilite.avecCodeCompetences = aActif;
        if (this.applicationSco.getOptionsEspaceLocal()) {
          this.applicationSco
            .getOptionsEspaceLocal()
            .setAvecCodeCompetences(aActif);
        }
      }
      getDerniereDate() {
        if (this.derniereDate === null || this.derniereDate === undefined) {
          return ObjetDate_1.GDate.getDateCourante();
        } else {
          return this.derniereDate;
        }
      }
      setDerniereDate(aDate) {
        this.derniereDate = aDate;
      }
      getNavigationDate() {
        return null;
      }
      setNavigationDate(aDate) {}
      getNavigationCours() {
        return null;
      }
      setNavigationCours(aCours) {}
      getEtablissement() {
        if (
          [
            Enumere_Espace_1.EGenreEspace.Parent,
            Enumere_Espace_1.EGenreEspace.Mobile_Parent,
            Enumere_Espace_1.EGenreEspace.PrimParent,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
            Enumere_Espace_1.EGenreEspace.Accompagnant,
            Enumere_Espace_1.EGenreEspace.Mobile_Accompagnant,
            Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant,
            Enumere_Espace_1.EGenreEspace.Tuteur,
            Enumere_Espace_1.EGenreEspace.Mobile_Tuteur,
            Enumere_Espace_1.EGenreEspace.Entreprise,
            Enumere_Espace_1.EGenreEspace.Mobile_Entreprise,
            Enumere_Espace_1.EGenreEspace.Academie,
          ].includes(this.GenreEspace)
        ) {
          return !!this.getMembre().Etablissement
            ? this.listeInformationsEtablissements.getElementParNumero(
                this.getMembre().Etablissement.getNumero(),
              )
            : null;
        } else {
          return !!this.getUtilisateur().Etablissement
            ? this.listeInformationsEtablissements.getElementParNumero(
                this.getUtilisateur().Etablissement.getNumero(),
              )
            : null;
        }
      }
      ongletEstVisible(aGenreOnglet) {
        return false;
      }
      desactiverPageAccueil() {
        this.sansPageAccueil = true;
      }
      avecPageAccueil() {
        if (this.sansPageAccueil) {
          return false;
        }
        const lOnglet = this.listeOnglets.getElementParGenre(
          Enumere_Onglet_1.EGenreOnglet.Accueil,
        );
        return (
          [
            Enumere_Espace_1.EGenreEspace.Parent,
            Enumere_Espace_1.EGenreEspace.Mobile_Parent,
            Enumere_Espace_1.EGenreEspace.Eleve,
            Enumere_Espace_1.EGenreEspace.Mobile_Eleve,
            Enumere_Espace_1.EGenreEspace.Professeur,
            Enumere_Espace_1.EGenreEspace.Mobile_Professeur,
            Enumere_Espace_1.EGenreEspace.Etablissement,
            Enumere_Espace_1.EGenreEspace.Mobile_Etablissement,
            Enumere_Espace_1.EGenreEspace.Administrateur,
            Enumere_Espace_1.EGenreEspace.Mobile_Administrateur,
            Enumere_Espace_1.EGenreEspace.PrimProfesseur,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimProfesseur,
            Enumere_Espace_1.EGenreEspace.PrimParent,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
            Enumere_Espace_1.EGenreEspace.PrimEleve,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve,
            Enumere_Espace_1.EGenreEspace.Accompagnant,
            Enumere_Espace_1.EGenreEspace.Mobile_Accompagnant,
            Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant,
            Enumere_Espace_1.EGenreEspace.Tuteur,
            Enumere_Espace_1.EGenreEspace.Mobile_Tuteur,
            Enumere_Espace_1.EGenreEspace.PrimPeriscolaire,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimPeriscolaire,
            Enumere_Espace_1.EGenreEspace.PrimMairie,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimMairie,
            Enumere_Espace_1.EGenreEspace.PrimDirection,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimDirection,
          ].includes(this.GenreEspace) &&
          lOnglet &&
          lOnglet.Actif
        );
      }
      estOngletActif(aGenreOnglet) {
        const lOnglet = this.listeOnglets.getElementParGenre(aGenreOnglet);
        return lOnglet ? lOnglet.Actif : false;
      }
      espacesAvecBoutonsTimeLine() {
        return [
          Enumere_Espace_1.EGenreEspace.Professeur,
          Enumere_Espace_1.EGenreEspace.PrimProfesseur,
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.PrimEleve,
          Enumere_Espace_1.EGenreEspace.Administrateur,
          Enumere_Espace_1.EGenreEspace.PrimDirection,
        ].includes(this.GenreEspace);
      }
      estEspacePourEleve() {
        return [
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          Enumere_Espace_1.EGenreEspace.Eleve,
          Enumere_Espace_1.EGenreEspace.Mobile_Eleve,
          Enumere_Espace_1.EGenreEspace.Entreprise,
          Enumere_Espace_1.EGenreEspace.Mobile_Entreprise,
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
          Enumere_Espace_1.EGenreEspace.PrimEleve,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve,
          Enumere_Espace_1.EGenreEspace.Accompagnant,
          Enumere_Espace_1.EGenreEspace.Mobile_Accompagnant,
          Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.Tuteur,
          Enumere_Espace_1.EGenreEspace.Mobile_Tuteur,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      estEspaceEleve() {
        return [
          Enumere_Espace_1.EGenreEspace.Eleve,
          Enumere_Espace_1.EGenreEspace.Mobile_Eleve,
          Enumere_Espace_1.EGenreEspace.PrimEleve,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      estEspaceParent() {
        return [
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      estEspacePourProf() {
        return [
          Enumere_Espace_1.EGenreEspace.Professeur,
          Enumere_Espace_1.EGenreEspace.Mobile_Professeur,
          Enumere_Espace_1.EGenreEspace.Academie,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      estEspaceMobile() {
        return [
          Enumere_Espace_1.EGenreEspace.Mobile_Administrateur,
          Enumere_Espace_1.EGenreEspace.Mobile_Commun,
          Enumere_Espace_1.EGenreEspace.Mobile_Professeur,
          Enumere_Espace_1.EGenreEspace.Mobile_Eleve,
          Enumere_Espace_1.EGenreEspace.Mobile_Etablissement,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimProfesseur,
          Enumere_Espace_1.EGenreEspace.Mobile_Accompagnant,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimPeriscolaire,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimMairie,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimDirection,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      estEspaceAvecMembre() {
        return GParametres.avecMembre;
      }
      pourPrimaire() {
        return [
          Enumere_Espace_1.EGenreEspace.PrimProfesseur,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimProfesseur,
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
          Enumere_Espace_1.EGenreEspace.PrimEleve,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve,
          Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.PrimPeriscolaire,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimPeriscolaire,
          Enumere_Espace_1.EGenreEspace.PrimMairie,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimMairie,
          Enumere_Espace_1.EGenreEspace.PrimDirection,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimDirection,
        ].includes(this.GenreEspace);
      }
      pourThemePrimaire() {
        return [
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.PrimEleve,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve,
          Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant,
        ].includes(this.GenreEspace);
      }
      estEspaceExecutionQCM() {
        return (
          this.estEspaceEleve() ||
          [
            Enumere_Espace_1.EGenreEspace.PrimParent,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
          ].includes(GEtatUtilisateur.GenreEspace)
        );
      }
      getListeOngletsSelonContexte() {
        if (!this.Identification) {
          return super.listeOnglets;
        }
        const lListeOnglet = MethodesObjet_1.MethodesObjet.dupliquer(
          super.listeOnglets,
        );
        for (const lOnglet of lListeOnglet) {
          if (!lOnglet.Actif) {
            continue;
          }
          switch (lOnglet.Genre) {
            case Enumere_Onglet_1.EGenreOnglet.FicheBrevet: {
              const lRessource = this.estEspaceAvecMembre()
                ? this.getMembre()
                : this.getUtilisateur();
              if (
                lRessource === null || lRessource === void 0
                  ? void 0
                  : lRessource.passeLeBrevet
              ) {
                lOnglet.libelleLong = 'Fiche brevet';
                lOnglet.setLibelle(
                  'Brevet',
                );
                break;
              }
              if (
                lRessource === null || lRessource === void 0
                  ? void 0
                  : lRessource.passeLeCFG
              ) {
                lOnglet.libelleLong = 'Certificat de formation générale';
                lOnglet.setLibelle(
                  'CFG',
                );
                break;
              }
              break;
            }
            default:
              break;
          }
        }
        return lListeOnglet;
      }
      getListeClasses(aParams) {
        if (
          this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.eleves.voirTousLesEleves,
          ) &&
          !this.applicationSco.parametresUtilisateur.get(
            'masquerDonneesAutresProfesseurs',
          )
        ) {
          aParams.uniquementClasseEnseignee = false;
        }
        const lListeClasses = new ObjetListeElements_1.ObjetListeElements();
        let lRecupererClasse = false;
        if (aParams.avecToutes) {
          lListeClasses.addElement(
            new ObjetElement_1.ObjetElement(
              'Toutes',
              0,
            ),
          );
        }
        for (let I = 0; I < this.listeClasses.count(); I++) {
          const lClasse = this.listeClasses.get(I);
          if (
            (aParams.avecClasse &&
              (lClasse.getGenre() ===
                Enumere_Ressource_1.EGenreRessource.Classe ||
                (lClasse.estClasseMN && aParams.avecClasseMultiNiveau))) ||
            (aParams.avecGroupe &&
              lClasse.getGenre() ===
                Enumere_Ressource_1.EGenreRessource.Groupe &&
              !lClasse.estClasseMN)
          ) {
            lRecupererClasse = true;
            if (aParams.uniquementClassePrincipal) {
              lRecupererClasse = lClasse.estPrincipal;
            } else if (aParams.uniquementClasseEnseignee) {
              lRecupererClasse = lClasse.estResponsable || lClasse.enseigne;
            }
            if (aParams.sansClasseDeRegroupement && lClasse.dansRegroupement) {
              lRecupererClasse = false;
            }
            if (aParams.uniquementClasseStagiaire) {
              lRecupererClasse =
                lClasse.getGenre() ===
                Enumere_Ressource_1.EGenreRessource.Classe
                  ? lClasse.estClasseDeMonStagiaire
                  : lClasse.estGroupeDeMonStagiaire;
            }
            if (lRecupererClasse) {
              let lClasseExistant = lListeClasses.getElementParElement(lClasse);
              if (!lClasseExistant) {
                lListeClasses.addElement(lClasse);
              }
              if (
                !aParams.sansClasseDeRegroupement &&
                lClasse.listeComposantes &&
                lClasse.estClasseMN
              ) {
                for (let j = 0; j < lClasse.listeComposantes.count(); j++) {
                  let lComposante = lClasse.listeComposantes.get(j);
                  const lClasseDeComposante =
                    this.listeClasses.getElementParElement(lComposante);
                  lClasseExistant =
                    lListeClasses.getElementParElement(lClasseDeComposante);
                  if (!lClasseExistant && !!lClasseDeComposante) {
                    lClasseDeComposante.pere = lClasse;
                    lListeClasses.addElement(lClasseDeComposante);
                  }
                }
              }
            }
          }
        }
        return lListeClasses;
      }
      getCategorie() {
        return this.Navigation.categorie;
      }
      setCategorie(aCategorie) {
        this.Navigation.categorie = aCategorie;
      }
      getContexteBilletBlog() {
        return this.Navigation.contexteBillet;
      }
      setContexteBilletBlog(aBillet, aFenetreCommentairesOuverte = false) {
        if (!this.Navigation.contexteBillet) {
          this.Navigation.contexteBillet = {
            billet: null,
            fenetreCommentairesOuverte: false,
          };
        }
        this.Navigation.contexteBillet.billet = aBillet;
        this.Navigation.contexteBillet.fenetreCommentairesOuverte =
          aFenetreCommentairesOuverte;
      }
      getInfoSond() {
        return this.Navigation.infoSond;
      }
      setInfoSond(aInfoSond) {
        this.Navigation.infoSond = aInfoSond;
      }
      getContexteTAF() {
        return this.Navigation.contexteTAF;
      }
      setContexteTAF(aContexteTAF) {
        this.Navigation.contexteTAF = aContexteTAF;
      }
      getContexteCDT() {
        return this.Navigation.contexteCDT;
      }
      setContexteCDT(aContexteCDT) {
        this.Navigation.contexteCDT = aContexteCDT;
      }
      getGenreAffichageCompteSelectionne() {
        return this.Navigation.GenreAffichageCompteSelectionne;
      }
      setGenreAffichageCompteSelectionne(aGenreAffichageCompte) {
        this.Navigation.GenreAffichageCompteSelectionne = aGenreAffichageCompte;
      }
      getContexteRemplacementsEnseignant() {
        return this.Navigation.contexteRemplacementsEnseignant;
      }
      setContexteRemplacementsEnseignant(contexteRemplacementsEnseignant) {
        this.Navigation.contexteRemplacementsEnseignant =
          contexteRemplacementsEnseignant;
      }
      estOngletAccessible(aGenreOnglet) {
        let lEstOngletAccessible = false;
        if (this.listeOnglets) {
          const lEstOngletPresent =
            !!this.listeOnglets.getElementParGenre(aGenreOnglet);
          if (lEstOngletPresent) {
            lEstOngletAccessible = true;
            if (this.listeOngletsInvisibles) {
              let lEstInvisible =
                this.listeOngletsInvisibles.includes(aGenreOnglet);
              if (lEstInvisible) {
                lEstOngletAccessible = false;
              }
            }
          }
        }
        return lEstOngletAccessible;
      }
      _ajouterOnglet(aJSON, aProfondeur, aOngletPere) {
        const lOnglet = new ObjetElement_1.ObjetElement().fromJSON(aJSON);
        if (
          this.listeOngletsInvisibles &&
          this.listeOngletsInvisibles.includes(lOnglet.getGenre())
        ) {
          lOnglet.Actif = false;
        }
        lOnglet.Libelle = ObjetChaine_1.GChaine.replaceRCToHTML(
          'Recherche'[
            lOnglet.getGenre()
          ],
        );
        lOnglet.libelleLong =
          'Recherches de stage'[
            lOnglet.getGenre()
          ] !== ' '
            ? 'Recherches de stage'[
                lOnglet.getGenre()
              ]
            : lOnglet.Libelle;
        if (
          lOnglet.Actif !== false &&
          this.listeGenreOngletsNotification &&
          this.listeGenreOngletsNotification.includes(lOnglet.getGenre())
        ) {
          const lElementNotification =
            MethodesObjet_1.MethodesObjet.dupliquer(lOnglet);
          lElementNotification.profondeur = 0;
          lElementNotification.avecClic = true;
          this.listeOngletsNotification.addElement(lElementNotification);
        }
        lOnglet.profondeur = aProfondeur;
        if (aOngletPere) {
          lOnglet.onglet = aOngletPere;
        }
        this.listeOnglets.addElement(lOnglet);
        let lAvecFilsActifs = false;
        if (aJSON.Onglet) {
          for (let i = 0; i < aJSON.Onglet.length; i++) {
            lAvecFilsActifs =
              this._ajouterOnglet(aJSON.Onglet[i], aProfondeur + 1, lOnglet) ||
              lAvecFilsActifs;
          }
          if (!lAvecFilsActifs) {
            lOnglet.Actif = false;
          }
        }
        return lOnglet.Actif;
      }
      _traiterListeProfesseurs(aListeClasses, aProfesseur) {
        const lArrayClasse = aProfesseur.listeClasses;
        aProfesseur.listeClasses =
          new ObjetListeElements_1.ObjetListeElements();
        if (aProfesseur.getGenre() === 0) {
          aProfesseur.Position = 0;
        }
        if (lArrayClasse) {
          for (let i = 0; i < lArrayClasse.length; i++) {
            let lClasse = aListeClasses.get(lArrayClasse[i]);
            if (lClasse) {
              let lClasseCopie = new ObjetElement_1.ObjetElement(
                lClasse.getLibelle(),
                lClasse.getNumero(),
                lClasse.getGenre(),
              );
              lClasseCopie.estResponsable = lClasse.estResponsable;
              aProfesseur.listeClasses.addElement(lClasseCopie);
            }
          }
        }
      }
      setListeAppareilsMobile(aListe) {
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        for (let lIndex = 0; lIndex < aListe.length; lIndex++) {
          lListe.add(
            ObjetElement_1.ObjetElement.create(
              Object.assign(
                {
                  Genre:
                    TypeSecurisationCompte_1.TypeGenreSourceConnexion
                      .GSC_ApplicationMobile,
                },
                aListe[lIndex],
              ),
            ),
          );
        }
        this.listeAppareilsMobile = lListe;
      }
      inverserEtatAssistantSaisie() {}
    }
    exports.ObjetEtatUtilisateur = ObjetEtatUtilisateur;
  },
  fn: 'objetetatutilisateur.js',
});