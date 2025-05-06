IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDeserialiser = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const Enumere_TriElement_1 = require('Enumere_TriElement');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    const TypeEtatExecutionQCMPourRepondant_1 = require('TypeEtatExecutionQCMPourRepondant');
    const TypeModeCorrectionQCM_1 = require('TypeModeCorrectionQCM');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const TypeGenrePunition_1 = require('TypeGenrePunition');
    const TypeGenreRenduTAF_1 = require('TypeGenreRenduTAF');
    const TypeHttpMarqueurContenuCours_1 = require('TypeHttpMarqueurContenuCours');
    class ObjetDeserialiser {
      listeEvenementsVS(aListe, aPourAccueil) {
        this.pourAccueil = aPourAccueil;
        aListe.parcourir(this._enrichirEvenementVS.bind(this, aListe));
        aListe.setTri([
          ObjetTri_1.ObjetTri.init(
            'aRegulariser',
            Enumere_TriElement_1.EGenreTriElement.Decroissant,
          ),
          ObjetTri_1.ObjetTri.init((D) => {
            return D.dateDebut ? D.dateDebut : D.dateDemande;
          }, Enumere_TriElement_1.EGenreTriElement.Decroissant),
        ]);
        aListe.trier();
        return aListe;
      }
      _formaterEvenementVS(aParam) {
        aParam.element.avecSaisie = !!aParam.element.avecSaisie;
        if (aParam.element.date) {
          aParam.element.dateDebut = aParam.element.date;
          aParam.element.dateFin = aParam.element.date;
        }
        if (!aParam.element.dateFin) {
          aParam.element.dateFin = aParam.element.dateDebut;
        }
        aParam.element.estDemiJournee = !!aParam.element.estMatin;
        if (
          aParam.element.getGenre() ===
            Enumere_Ressource_1.EGenreRessource.Punition &&
          (aParam.element.nature.getGenre() ===
            TypeGenrePunition_1.TypeGenrePunition.GP_ExclusionCours ||
            !aParam.pourAccueil)
        ) {
          aParam.element.dateDebut = aParam.element.dateDemande;
          aParam.element.dateFin = aParam.element.dateDemande;
          aParam.element.place = aParam.element.placeDemande;
          if (!aParam.pourAccueil && aParam.liste) {
            for (
              let I = 0;
              aParam.element.programmation &&
              I < aParam.element.programmation.count();
              I++
            ) {
              const lNewElement = MethodesObjet_1.MethodesObjet.dupliquer(
                aParam.element,
              );
              const lProg = aParam.element.programmation.get(I);
              lNewElement.dateDebut = lProg.date;
              lNewElement.dateFin = lProg.date;
              lNewElement.estProgrammation = true;
              if (lProg.place !== null && lProg.place !== undefined) {
                lNewElement.place = lProg.place;
              }
              if (lProg.duree) {
                lNewElement.duree = lProg.duree;
              } else {
                lNewElement.duree = aParam.element.duree;
              }
              lNewElement.Position =
                Enumere_Ressource_1.EGenreRessourceUtil.getPositionAbsence(
                  lNewElement.getGenre(),
                  { genreObservation: lNewElement.genreObservation },
                );
              aParam.liste.addElement(lNewElement);
            }
          }
        }
        if (aParam.element.programmation) {
          aParam.element.programmation.setTri([
            ObjetTri_1.ObjetTri.init('date'),
          ]);
          aParam.element.programmation.trier();
        }
        aParam.element.Position =
          Enumere_Ressource_1.EGenreRessourceUtil.getPositionAbsence(
            aParam.element.getGenre(),
            { genreObservation: aParam.element.genreObservation },
          );
        aParam.element.aRegulariser = this._evenementVSARegulariser(
          aParam.element,
        );
      }
      _evenementVSARegulariser(aElement) {
        switch (aElement.getGenre()) {
          case Enumere_Ressource_1.EGenreRessource.Absence:
          case Enumere_Ressource_1.EGenreRessource.Retard: {
            let lIlYADejaInfoSaisie = false;
            if (aElement.avecSaisie) {
              if (
                !!aElement.aJustifierParParents &&
                aElement.reglee &&
                !aElement.confirmee
              ) {
                return false;
              }
              lIlYADejaInfoSaisie = !!aElement.motifParent;
              if (
                !!aElement.aJustifierParParents &&
                (!lIlYADejaInfoSaisie || aElement.confirmee)
              ) {
                lIlYADejaInfoSaisie = !!aElement.justification;
                if (!lIlYADejaInfoSaisie && !!aElement.documents) {
                  lIlYADejaInfoSaisie =
                    aElement.documents.getNbrElementsExistes() > 0;
                }
              }
              return !lIlYADejaInfoSaisie;
            } else {
              return false;
            }
          }
          case Enumere_Ressource_1.EGenreRessource.ObservationProfesseurEleve:
            return !aElement.estLue;
          case Enumere_Ressource_1.EGenreRessource.Punition:
            return !!(
              aElement.nature &&
              aElement.nature.estAvecARParent &&
              !aElement.parentAAccuseDeReception
            );
          default:
            return false;
        }
      }
      listeCours(aJSON) {
        const lListe = new ObjetListeElements_1.ObjetListeElements().fromJSON(
          aJSON.ListeCours,
          this._ajouterCours.bind(this),
        );
        lListe.setTri([ObjetTri_1.ObjetTri.init('DateDuCours')]);
        lListe.trier();
        return lListe;
      }
      _ajouterCours(aJSON, aElement) {
        aElement.copieJSON(aJSON);
        aElement.Debut = aElement.place;
        aElement.Fin = aElement.place + aElement.duree - 1;
        aElement.AppelFait =
          aElement.NomImageAppelFait === 'AppelFait' ||
          aElement.NomImageAppelFait === 'AppelVerrouFait';
        aElement.estAppelVerrouille =
          aElement.NomImageAppelFait === 'AppelVerrouNonFait' ||
          aElement.NomImageAppelFait === 'AppelVerrouFait';
        if (aJSON.estSortiePedagogique) {
          aElement.couleurFondHorsBordure = '#FFFFFF';
          aElement.ListeContenus =
            new ObjetListeElements_1.ObjetListeElements();
          let lElement = Object.assign(
            new ObjetElement_1.ObjetElement(
              'Activité pédagogique',
            ),
            { marqueur: 'titreSortie', estLibelleTitreSortie: true },
          );
          aElement.ListeContenus.addElement(lElement);
          lElement = Object.assign(
            new ObjetElement_1.ObjetElement(aElement.strDateDebut),
            { marqueur: 'titreSortie' },
          );
          aElement.ListeContenus.addElement(lElement);
          if (aElement.strDateFin) {
            lElement = Object.assign(
              new ObjetElement_1.ObjetElement(aElement.strDateFin),
              { marqueur: 'titreSortie' },
            );
            aElement.ListeContenus.addElement(lElement);
          }
          const lMotif = new ObjetElement_1.ObjetElement(
            aElement.motif,
            0,
            Enumere_Ressource_1.EGenreRessource.Matiere,
          );
          aElement.matiere = lMotif;
          aElement.ListeContenus.addElement(lMotif);
          if (aElement.pourAcc && aElement.strRess) {
            aElement.ListeContenus.addElement(
              new ObjetElement_1.ObjetElement(
                aElement.strRess,
                0,
                Enumere_Ressource_1.EGenreRessource.Classe,
              ),
            );
          }
          if (aElement.accompagnateurs && aElement.accompagnateurs.forEach) {
            aElement.accompagnateurs.forEach((aStr) => {
              aElement.ListeContenus.addElement(
                new ObjetElement_1.ObjetElement(
                  aStr,
                  0,
                  Enumere_Ressource_1.EGenreRessource.Enseignant,
                ),
              );
            });
          }
          if (aElement.forcerAppelVerrou) {
            aElement.estAppelVerrouille = true;
          }
        } else if (aJSON.estRetenue) {
          aElement.CouleurFond = '#FF0000';
          aElement.couleurFondHorsBordure = '#FFFFFF';
        } else {
          aElement.estAnnule = !!aJSON.estAnnule;
          aElement.estPermanence = !!aJSON.estPermanence;
          aElement.utilisable = aJSON.utilisable !== false;
          aElement.utilisableCDT = aJSON.utilisableCDT !== false;
          aElement.utilisableAppel = aJSON.utilisableAppel !== false;
          aElement.modifiable = !!aJSON.modifiable;
          aElement.ressourcesModifiables = !!aJSON.ressourcesModifiables;
          aElement.verrouDeplacement = !!aJSON.verrouDeplacement;
          aElement.cdtAffecte =
            aJSON.CahierDeTextes && aJSON.CahierDeTextes.Affecte;
          aElement.avecTafPublie = aJSON.AvecTafPublie;
          aElement.avecChargeTAF = !!aJSON.AvecChargeTAF;
          aElement.estGAEV = !!aJSON.estGAEV;
          aElement.estCoEnseignement = !!aJSON.estCoEnseignement;
          aElement.ListeContenus.parcourir((aContenu) => {
            if (
              aContenu.getGenre() ===
              Enumere_Ressource_1.EGenreRessource.Matiere
            ) {
              aElement.matiere = aContenu;
            }
            if (
              aContenu.getGenre() ===
                Enumere_Ressource_1.EGenreRessource.Materiel ||
              aContenu.getGenre() === Enumere_Ressource_1.EGenreRessource.Salle
            ) {
              aContenu.nombre = aContenu.nombre || 1;
            }
          });
          aElement.ListeContenus.setTri([
            ObjetTri_1.ObjetTri.init((D) => {
              switch (D.getGenre()) {
                case Enumere_Ressource_1.EGenreRessource.Matiere:
                  return -1;
                case Enumere_Ressource_1.EGenreRessource.LibelleCours:
                  return -0.4;
                case Enumere_Ressource_1.EGenreRessource.Enseignant:
                  return 0;
                case Enumere_Ressource_1.EGenreRessource.Groupe:
                  return 1;
                case Enumere_Ressource_1.EGenreRessource.Classe:
                  return 2;
                case Enumere_Ressource_1.EGenreRessource.PartieDeClasse:
                  return 3;
                case Enumere_Ressource_1.EGenreRessource.Salle:
                  return 4;
                case Enumere_Ressource_1.EGenreRessource.Site:
                  return 5;
                case Enumere_Ressource_1.EGenreRessource.Personnel:
                  return 6;
                case Enumere_Ressource_1.EGenreRessource.Materiel:
                  return 7;
                case Enumere_Ressource_1.EGenreRessource.Service:
                  return 8;
              }
              switch (D.marqueur) {
                case TypeHttpMarqueurContenuCours_1.TypeHttpMarqueurContenuCours
                  .hmcc_ReservePar:
                  return -0.6;
                case TypeHttpMarqueurContenuCours_1.TypeHttpMarqueurContenuCours
                  .hmcc_LibelleHoraire:
                  return 99999;
                case TypeHttpMarqueurContenuCours_1.TypeHttpMarqueurContenuCours
                  .hmcc_TitreCDT:
                  return -0.5;
                case TypeHttpMarqueurContenuCours_1.TypeHttpMarqueurContenuCours
                  .hmcc_ElevesAccompagnes:
                  return -0.3;
                case TypeHttpMarqueurContenuCours_1.TypeHttpMarqueurContenuCours
                  .hmcc_Remplacant:
                  return 4.5;
                case TypeHttpMarqueurContenuCours_1.TypeHttpMarqueurContenuCours
                  .hmcc_PeriodeAnnuel:
                  return -9999;
                case TypeHttpMarqueurContenuCours_1.TypeHttpMarqueurContenuCours
                  .hmcc_PartiesCours:
                  return -10;
              }
              return 1000;
            }),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]);
          aElement.ListeContenus.trier();
          if (aElement.matiere) {
            aElement.matiere.CouleurFond = aElement.CouleurFond;
          }
        }
        if (aElement.DateDuCours) {
          aElement.numeroSemaine = IE.Cycles.cycleDeLaDate(
            aElement.DateDuCours,
          );
        }
      }
      _ajouterQCM(aJSON, aElement) {
        aElement.copieJSON(aJSON);
        if (
          aElement.getGenre() ===
          Enumere_Ressource_1.EGenreRessource.ExecutionQCM
        ) {
          aElement.QCM = new ObjetElement_1.ObjetElement().fromJSON(aJSON.QCM);
          aElement.QCM.copieJSON(aJSON.QCM);
          const lEspaceQCMConsult = [
            Enumere_Espace_1.EGenreEspace.Parent,
            Enumere_Espace_1.EGenreEspace.PrimParent,
            Enumere_Espace_1.EGenreEspace.Mobile_Parent,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
            Enumere_Espace_1.EGenreEspace.Accompagnant,
            Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
            Enumere_Espace_1.EGenreEspace.Mobile_Accompagnant,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant,
            Enumere_Espace_1.EGenreEspace.Tuteur,
            Enumere_Espace_1.EGenreEspace.Mobile_Tuteur,
            Enumere_Espace_1.EGenreEspace.Entreprise,
          ].includes(GEtatUtilisateur.GenreEspace);
          if (
            lEspaceQCMConsult &&
            (aElement.etatCloture === undefined ||
              aElement.etatCloture ===
                TypeEtatExecutionQCMPourRepondant_1
                  .TypeEtatExecutionQCMPourRepondant.EQR_EnCours)
          ) {
            aElement.modeDiffusionCorrige =
              TypeModeCorrectionQCM_1.TypeModeCorrectionQCM.FBQ_CorrigeSans;
            IE.log.addLog('modification modeDiffusionCorrige');
          }
        } else {
          aElement.niveau = new ObjetElement_1.ObjetElement().fromJSON(
            aJSON.niveau,
          );
          aElement.proprietaire = new ObjetElement_1.ObjetElement().fromJSON(
            aJSON.proprietaire,
          );
        }
        if (
          !aElement.matiere ||
          !MethodesObjet_1.MethodesObjet.isFunction(
            aElement.matiere.existeNumero,
          )
        ) {
          aElement.matiere = new ObjetElement_1.ObjetElement().fromJSON(
            aJSON.matiere,
          );
        }
      }
      getListeEvenements(aJSON, aCroissant) {
        const lListeEvenements =
          new ObjetListeElements_1.ObjetListeElements().fromJSON(
            aJSON,
            this._ajouterEvenement.bind(this),
          );
        lListeEvenements.setTri([
          ObjetTri_1.ObjetTri.init(
            (D) => {
              return D.sansHoraire
                ? new Date(
                    D.DateDebut.getFullYear(),
                    D.DateDebut.getMonth(),
                    D.DateDebut.getDate(),
                  )
                : D.DateDebut;
            },
            aCroissant
              ? Enumere_TriElement_1.EGenreTriElement.Croissant
              : Enumere_TriElement_1.EGenreTriElement.Decroissant,
          ),
          ObjetTri_1.ObjetTri.init(
            (D) => {
              return D.sansHoraire
                ? new Date(
                    D.DateFin.getFullYear(),
                    D.DateFin.getMonth(),
                    D.DateFin.getDate(),
                  )
                : D.DateFin;
            },
            aCroissant
              ? Enumere_TriElement_1.EGenreTriElement.Croissant
              : Enumere_TriElement_1.EGenreTriElement.Decroissant,
          ),
          ObjetTri_1.ObjetTri.init('Libelle'),
        ]);
        lListeEvenements.trier();
        lListeEvenements._getLibelleEvenement = this._getLibelleEvenement;
        lListeEvenements._getDateEvenement = this._getDateEvenement;
        return lListeEvenements;
      }
      deserialiserTAF(aTAF) {
        if (
          aTAF.avecMiseEnForme === undefined ||
          aTAF.avecMiseEnForme === null
        ) {
          aTAF.avecMiseEnForme = true;
        }
        aTAF.descriptif = ObjetChaine_1.GChaine.nettoyerCommentaire(
          aTAF.descriptif,
        );
        aTAF.estVide = false;
        if (!aTAF.genreRendu) {
          aTAF.genreRendu =
            TypeGenreRenduTAF_1.TypeGenreRenduTAF.GRTAF_AucunRendu;
        }
        if (!aTAF.ListePieceJointe) {
          aTAF.ListePieceJointe = new ObjetListeElements_1.ObjetListeElements();
        }
        aTAF.ListePieceJointe.parcourir((aPieceJointeDeTAF) => {
          aPieceJointeDeTAF.Url =
            ObjetChaine_1.GChaine.creerUrlBruteLienExterne(aPieceJointeDeTAF);
        });
        if (!!aTAF.executionQCM) {
          const lExecutionQCMaRemplir = new ObjetElement_1.ObjetElement();
          new ObjetDeserialiser()._ajouterQCM(
            aTAF.executionQCM,
            lExecutionQCMaRemplir,
          );
          aTAF.executionQCM = lExecutionQCMaRemplir;
        }
      }
      deserialiserContenuDeCours(aContenuCours) {
        aContenuCours.descriptif = ObjetChaine_1.GChaine.nettoyerCommentaire(
          aContenuCours.descriptif,
        );
        aContenuCours.objectifs = ObjetChaine_1.GChaine.nettoyerCommentaire(
          aContenuCours.objectifs || '',
        );
        if (!aContenuCours.categorie) {
          aContenuCours.categorie = new ObjetElement_1.ObjetElement('', 0);
        }
        aContenuCours.estVide = false;
        if (!aContenuCours.ListePieceJointe) {
          aContenuCours.ListePieceJointe =
            new ObjetListeElements_1.ObjetListeElements();
        }
        aContenuCours.ListePieceJointe.parcourir(
          (aPieceJointeDeContenuDeCours) => {
            aPieceJointeDeContenuDeCours.Url =
              ObjetChaine_1.GChaine.creerUrlBruteLienExterne(
                aPieceJointeDeContenuDeCours,
              );
          },
        );
        aContenuCours.ListePieceJointe.setTri([
          ObjetTri_1.ObjetTri.init((D) => {
            return (
              D.getGenre() !==
              Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier
            );
          }),
          ObjetTri_1.ObjetTri.init('Libelle'),
          ObjetTri_1.ObjetTri.init('Numero'),
        ]).trier();
        aContenuCours.listeExecutionQCM =
          new ObjetListeElements_1.ObjetListeElements();
        if (!!aContenuCours.training) {
          const lDeserialiser = new ObjetDeserialiser();
          aContenuCours.listeExecutionQCM =
            new ObjetListeElements_1.ObjetListeElements().fromJSON(
              aContenuCours.training.ListeExecutionsQCM,
              lDeserialiser._ajouterQCM.bind(lDeserialiser),
            );
        }
      }
      deserialiserCahierDeTexte(aCahierDeTexte) {
        const lThis = this;
        if (!aCahierDeTexte.listeContenus) {
          aCahierDeTexte.listeContenus =
            new ObjetListeElements_1.ObjetListeElements();
        }
        aCahierDeTexte.listeContenus.parcourir((aContenu) => {
          lThis.deserialiserContenuDeCours(aContenu);
        });
        aCahierDeTexte.listeContenus.aUnElementVide =
          ObjetDeserialiser._aUnElementVide;
        aCahierDeTexte.listeContenus.verifierAvantValidation =
          ObjetDeserialiser._verifierAvantValidation;
        if (!!aCahierDeTexte.Matiere) {
          aCahierDeTexte.Matiere.CouleurFond = aCahierDeTexte.CouleurFond;
        }
        if (!aCahierDeTexte.ListeTravailAFaire) {
          aCahierDeTexte.ListeTravailAFaire =
            new ObjetListeElements_1.ObjetListeElements();
        }
        aCahierDeTexte.ListeTravailAFaire.parcourir((aTaf) => {
          lThis.deserialiserTAF(aTaf);
        });
        aCahierDeTexte.ListeTravailAFaire.setTri([
          ObjetTri_1.ObjetTri.init('DonneLe'),
          ObjetTri_1.ObjetTri.init('Genre'),
        ]);
        aCahierDeTexte.ListeTravailAFaire.trier();
        aCahierDeTexte.ListeTravailAFaire.aUnElementVide =
          ObjetDeserialiser._aUnElementVide;
        aCahierDeTexte.ListeTravailAFaire.verifierAvantValidation =
          ObjetDeserialiser._verifierAvantValidation;
      }
      static _aUnElementVide() {
        let lResult = false;
        for (let I = 0; I < this.count() && !lResult; I++) {
          if (this.existe(I) && this.get(I).estVide) {
            lResult = true;
          }
        }
        return lResult;
      }
      static _verifierAvantValidation() {
        for (let I = 0; I < this.count(); I++) {
          if (this.existe(I) && this.get(I).estVide) {
            if (!this.get(I).executionQCM) {
              this.get(I).setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
            }
          }
        }
      }
      _enrichirEvenementVS(aListe, aElement) {
        new ObjetDeserialiser()._formaterEvenementVS({
          element: aElement,
          pourAccueil: this.pourAccueil,
          liste: aListe,
        });
      }
      _ajouterEvenement(aJSON, aElement) {
        aElement.DateDebut = aJSON.DateDebut;
        if (!aJSON.DateDebut) {
          aElement.DateDebut = GParametres.PremiereDate;
        }
        aElement.DateFin = aJSON.DateFin;
        aElement.sansHoraire = aJSON.sansHoraire;
        aElement.Commentaire = aJSON.Commentaire;
        aElement.CouleurCellule = aJSON.CouleurCellule;
        aElement.estConseilClasse = aJSON.estConseilClasse;
        aElement.famille = aJSON.famille;
        aElement.strAuteur = aJSON.strAuteur;
        aElement.listeFichiers = aJSON.listeFichiers;
        aElement.estPeriodique = aJSON.estPeriodique;
        aElement.periodicite = aJSON.Periodicite;
        aElement.publie = !aJSON.nonPublie;
        aElement.proprietaire = aJSON.Proprietaire;
        aElement.listeEleves = aJSON.listeEleves;
        aElement.genresPublicEntite = aJSON.genresPublicEntite;
        aElement.avecElevesRattaches = aJSON.avecElevesRattaches;
        aElement.listePublicEntite = aJSON.listePublicEntite;
        aElement.listePublicIndividu = aJSON.listePublicIndividu;
        aElement.presidentCC = aJSON.presidentCC;
        aElement.listeProfsPrincipaux = aJSON.listeProfsPrincipaux;
        aElement.listeDeleguesParents = aJSON.listeDeleguesParents;
        aElement.listeDeleguesEleves = aJSON.listeDeleguesEleves;
        aElement.avecDirecteur = !!aJSON.avecDirecteur;
        aElement.publicationPageEtablissement =
          !!aJSON.publicationPageEtablissement;
        aElement.listeDocJoints =
          new ObjetListeElements_1.ObjetListeElements().fromJSON(
            aJSON.PiecesJointes,
            this._ajouterDocJoint,
          );
        aElement.navigation = aJSON.navigation;
        aElement.visio = aJSON.visio;
        aElement.eleveConvoque = aJSON.eleveConvoque;
      }
      _ajouterDocJoint(aJSON, aElement) {
        aElement.url = aJSON.url;
        aElement.Url = ObjetChaine_1.GChaine.creerUrlBruteLienExterne(aElement);
      }
      _composeListeDelegues(aTitre, aListe) {
        let lResult = '';
        lResult += aTitre + ' : ';
        const lArrayDelegues = [];
        for (let I = 0; I < aListe.count() && I < 2; I++) {
          const lElement = aListe.get(I);
          lArrayDelegues.push(lElement.getLibelle());
        }
        lResult += lArrayDelegues.join(', ');
        if (aListe.count() > 2) {
          lResult += ', ...';
        }
        return lResult;
      }
      _getLibelleEvenement(aParam) {
        const lTab = [],
          lParam = {
            evenement: null,
            avecTitre: false,
            avecDetailConseil: false,
            avecDateDuJour: true,
            formatDateDuJour:
              '[' +
              'le'.ucfirst() +
              ' %J %MMMM' +
              ']',
          };
        $.extend(lParam, aParam);
        if (lParam.avecTitre) {
          lTab.push(lParam.evenement.getLibelle());
        }
        if (
          lParam.evenement &&
          lParam.evenement.DateDebut &&
          lParam.evenement.DateFin
        ) {
          const lChaine = ObjetDate_1.GDate.strDates(
            lParam.evenement.DateDebut,
            lParam.evenement.DateFin,
            { sansHoraire: lParam.evenement.sansHoraire },
          );
          lTab.push(lChaine.trim());
        }
        lTab.push(lParam.evenement.Commentaire);
        if (lParam.avecDetailConseil) {
          if (lParam.evenement.salle) {
            lTab.push(
              'Salle' +
                ' : ' +
                lParam.evenement.salle,
            );
          }
          if (
            lParam.evenement.president &&
            lParam.evenement.president.getLibelle()
          ) {
            lTab.push(
              'Président' +
                ' : ' +
                lParam.evenement.president.getLibelle(),
            );
          }
          if (
            lParam.evenement.listeParentsDelegues &&
            lParam.evenement.listeParentsDelegues.count() > 0
          ) {
            lTab.push(
              this._composeListeDelegues(
                'Parents délégués',
                lParam.evenement.listeParentsDelegues,
              ),
            );
          }
          if (
            lParam.evenement.listeElevesDelegues &&
            lParam.evenement.listeElevesDelegues.count() > 0
          ) {
            lTab.push(
              this._composeListeDelegues(
                'Élèves délégués',
                lParam.evenement.listeElevesDelegues,
              ),
            );
          }
        }
        return lTab;
      }
      _getDateEvenement(aParam) {
        const lParam = {
          evenement: null,
          avecDateDuJour: true,
          formatDateDuJour:
            '[' +
            'le' +
            ' %J %MMM' +
            ']',
        };
        $.extend(lParam, aParam);
        const lChaine =
          lParam.evenement &&
          lParam.evenement.DateDebut &&
          lParam.evenement.DateFin
            ? ObjetDate_1.GDate.strDates(
                lParam.evenement.DateDebut,
                lParam.evenement.DateFin,
                {
                  sansHoraire: lParam.evenement.sansHoraire,
                  formatDate: ' %J %MMM',
                },
              )
            : '';
        return lChaine.toLowerCase().ucfirst();
      }
    }
    exports.ObjetDeserialiser = ObjetDeserialiser;
  },
  fn: 'objetdeserialiser.js',
});