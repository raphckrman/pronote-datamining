IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SelectionPublic =
      exports.TypeGenreCumulSelectionPublic = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_EvenementObjetSaisie_1 = require('Enumere_EvenementObjetSaisie');
    const ObjetFenetre_SelectionRessource_1 = require('ObjetFenetre_SelectionRessource');
    const ObjetListe_1 = require('ObjetListe');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    const ObjetHtml_1 = require('ObjetHtml');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const DonneesListe_SelectionPublic_1 = require('DonneesListe_SelectionPublic');
    const tag_1 = require('tag');
    var TypeGenreCumulSelectionPublic;
    (function (TypeGenreCumulSelectionPublic) {
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['sans'] = 0)
      ] = 'sans';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['classe'] = 1)
      ] = 'classe';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['initial'] = 2)
      ] = 'initial';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['nomEleves'] = 3)
      ] = 'nomEleves';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['lieuEnseignement'] = 4)
      ] = 'lieuEnseignement';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['attendusEnCours'] = 5)
      ] = 'attendusEnCours';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['respDelegues'] = 6)
      ] = 'respDelegues';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['famille'] = 7)
      ] = 'famille';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['servicesPeriscolaire'] = 8)
      ] = 'servicesPeriscolaire';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['groupe'] = 9)
      ] = 'groupe';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['presentielEleve'] = 10)
      ] = 'presentielEleve';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['fonction'] = 11)
      ] = 'fonction';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['projetsAccompagnement'] = 12)
      ] = 'projetsAccompagnement';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['nomElevesClasse'] = 13)
      ] = 'nomElevesClasse';
      TypeGenreCumulSelectionPublic[
        (TypeGenreCumulSelectionPublic['nomElevesGroupe'] = 14)
      ] = 'nomElevesGroupe';
    })(
      TypeGenreCumulSelectionPublic ||
        (exports.TypeGenreCumulSelectionPublic = TypeGenreCumulSelectionPublic =
          {}),
    );
    class ObjetFenetre_SelectionPublic extends ObjetFenetre_SelectionRessource_1.ObjetFenetre_SelectionRessource {
      constructor(...aParams) {
        super(...aParams);
        this.idMessage = this.Nom + '_message';
        this.setOptionsFenetre({
          largeur: 400,
          hauteur: 650,
          listeBoutons: [
            {
              libelle: 'Annuler',
              theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
            },
            {
              libelle: 'Valider',
              theme: Type_ThemeBouton_1.TypeThemeBouton.primaire,
            },
          ],
          listeBoutonsInactifs: [],
          heightMax_mobile: true,
          masquerListeSiVide: true,
        });
        this.setSelectionObligatoire(true);
        this.indexBtnValider = 1;
        this.listeRessourcesSelectionneesAvecInfoEleve = null;
        this.donnees = { listeCumuls: null, cumulActif: null };
        this._options = {
          afficherUtilisateurCourant: true,
          selectionCumul: true,
          avecIndicationDiscussionInterdit: false,
          avecFiltreDelegues: false,
          estDeploye: false,
          avecElevesDetaches: false,
          avecBoutonRechercher: true,
          avecCacheDoublonArticles: true,
          avecInformationEleveDansListeResponsable: false,
          avecMonoSelectionDeFamille: false,
          avecMonoSelectionSurResponsablesAvecRencontreSeparee: false,
          avecFiltreSelonAcceptRdv: false,
          avecFiltreAucunAccesEspace: false,
          avecDirEnseignant: false,
        };
      }
      estPourPrimaire() {
        return false;
      }
      setOptions(aOptions) {
        this.setOptionsFenetreSelectionRessource(aOptions);
        return this;
      }
      getGenreCumul() {
        return this.donnees.cumulActif
          ? this.donnees.cumulActif.getGenre()
          : TypeGenreCumulSelectionPublic.sans;
      }
      setGenreCumulActif(aGenreCumul) {
        if (aGenreCumul) {
          let lCumulDepuisListe = null;
          if (!!this.donnees.listeCumuls) {
            lCumulDepuisListe =
              this.donnees.listeCumuls.getElementParGenre(aGenreCumul);
          }
          if (!lCumulDepuisListe) {
            lCumulDepuisListe = new ObjetElement_1.ObjetElement(
              '',
              0,
              aGenreCumul,
              0,
            );
          }
          this.setCumulActif(lCumulDepuisListe);
        }
      }
      setCumulActif(aCumul) {
        this.donnees.cumulActif = aCumul;
      }
      setListeCumuls(aListeCumuls) {
        this.donnees.listeCumuls = aListeCumuls;
      }
      construireInstances() {
        this.identListe = this.add(
          ObjetListe_1.ObjetListe,
          this._evenementSurListe,
          this._initialiserListe,
        );
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          comboCumul: {
            init(aCombo) {
              aInstance.comboCumul = aCombo;
              aCombo.setOptionsObjetSaisie({
                longueur: 160,
                texteEdit: 'Classer par : ',
              });
            },
            event(aParams) {
              if (
                aParams.genreEvenement ===
                Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                  .selection
              ) {
                aInstance.setCumulActif(aParams.element);
                aInstance.forcerMajListeSelection();
                aInstance.actualiserAffichage();
              }
            },
          },
        });
      }
      composeContenu() {
        return (0, tag_1.tag)(
          'div',
          { class: 'flex-contain cols full-height' },
          (T) => {
            T.push(
              '<div class="m-top-l fix-bloc" id="',
              this.idConteneurFiltre,
              '" style="display:none"></div>',
            );
            T.push(
              (0, tag_1.tag)(
                'div',
                { class: 'fix-bloc' },
                (0, tag_1.tag)('ie-combo', {
                  'ie-model': 'comboCumul',
                  class: [
                    'PetitEspaceBas',
                    IE.estMobile ? '' : 'GrandEspaceGauche',
                  ],
                  style: 'display:none',
                }),
              ),
            );
            T.push(
              '<div id="' +
                this.getNomInstance(this.identListe) +
                '" class="fluid-bloc"></div>',
            );
            T.push(
              '<div style="display:none" class="Espace" id="',
              this.idMessage,
              '">',
              'Aucun destinataire possible',
              '</div>',
            );
          },
        );
      }
      setDonnees(aParam) {
        this.titre = aParam.titre;
        this.estGenreRessourceDUtilisateurConnecte =
          aParam.estGenreRessourceDUtilisateurConnecte;
        this._options.avecIndicationDiscussionInterdit =
          aParam.avecIndicationDiscussionInterdit;
        this.listeRessourcesT = aParam.listeRessources;
        this.listeRessourcesSelectionnees = aParam.listeRessourcesSelectionnees;
        this.genreRessource = aParam.genreRessource;
        this.parametresFiltre = aParam.parametresFiltre;
        this.listeNiveauxResponsabilite = aParam.listeNiveauxResponsabilite;
        if (this._options.avecInformationEleveDansListeResponsable) {
          this.listeRessourcesSelectionneesAvecInfoEleve =
            new ObjetListeElements_1.ObjetListeElements();
        }
        this._formatterDonneesSelonOptions();
        const lBoutons = [];
        if (this._options.avecBoutonRechercher) {
          lBoutons.push({
            genre: ObjetListe_1.ObjetListe.typeBouton.rechercher,
          });
        }
        if (this.parametresFiltre) {
          lBoutons.push({ genre: ObjetListe_1.ObjetListe.typeBouton.filtrer });
        }
        if (this.getGenreCumul() !== TypeGenreCumulSelectionPublic.sans) {
          lBoutons.push({ genre: ObjetListe_1.ObjetListe.typeBouton.deployer });
        }
        this.getInstance(this.identListe).setOptionsListe({
          avecCBToutCocher: !!this._options.avecCocheRessources,
          boutons: lBoutons,
          nonEditable: false,
          avecCelluleEditableTriangle: false,
          avecFiltresVisibles: !!aParam.avecFiltresVisibles,
          messageContenuVide:
            this._options && this._options.avecFiltreSelonAcceptRdv
              ? 'Aucun individu n'accepte les demandes de rendez-vous'
              : '',
        });
        this.actualiserAffichage();
        if (this.donnees.listeCumuls && this.donnees.listeCumuls.count() > 0) {
          let lIndice = 0;
          if (this.estPourPrimaire()) {
            if (this.donnees.cumulActif) {
              const lIndiceActif = this.donnees.listeCumuls.getIndiceParElement(
                this.donnees.cumulActif,
              );
              if (lIndiceActif > 0) {
                lIndice = lIndiceActif;
              }
            }
          }
          this.comboCumul.setDonnees(this.donnees.listeCumuls, lIndice);
          $('#' + this.comboCumul.getNom().escapeJQ()).show();
        } else {
          $('#' + this.comboCumul.getNom().escapeJQ()).hide();
        }
        if (this._options.avecFiltreDelegues) {
          $('#' + this.comboCumul.getNom().escapeJQ()).hide();
        }
      }
      _formatterDonneesSelonOptions() {
        const lSelf = this;
        const lNumeroUtilisateur =
          GEtatUtilisateur.getUtilisateur().getNumero();
        this.listeRessourcesT.parcourir((D) => {
          if (
            lSelf._options.afficherUtilisateurCourant === false &&
            lSelf.estGenreRessourceDUtilisateurConnecte &&
            D.getNumero() === lNumeroUtilisateur
          ) {
            D.nePasAfficher = true;
          } else {
            delete D.nePasAfficher;
          }
        });
      }
      actualiserAffichage() {
        switch (this.getGenreCumul()) {
          case TypeGenreCumulSelectionPublic.sans:
            this.construireListeRessource(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          case TypeGenreCumulSelectionPublic.classe:
            this._construireListeRessourceAvecCumulClasse(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          case TypeGenreCumulSelectionPublic.initial:
            this._construireListeRessourceAvecCumulInitial(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          case TypeGenreCumulSelectionPublic.nomEleves:
            this._construireListeRessourceAvecCumulEleves(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          case TypeGenreCumulSelectionPublic.lieuEnseignement:
            this._construireListeRessourceAvecCumulLieuEnseignement(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          case TypeGenreCumulSelectionPublic.attendusEnCours:
            this._construireListeRessourceAvecCumulAttendusEnCours(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          case TypeGenreCumulSelectionPublic.respDelegues:
            this._construireListeRessourceAvecCumulRespDelegues(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          case TypeGenreCumulSelectionPublic.famille: {
            const lFamilleConcernee = this.donnees.cumulActif
              ? this.donnees.cumulActif.famille
              : null;
            this._construireListeRessourceAvecCumulFamille(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
              lFamilleConcernee,
            );
            break;
          }
          case TypeGenreCumulSelectionPublic.servicesPeriscolaire: {
            this._construireListeRessourceAvecCumulServicePeriscolaire(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          }
          case TypeGenreCumulSelectionPublic.groupe:
            this._construireListeRessourceAvecCumulGroupe(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          case TypeGenreCumulSelectionPublic.presentielEleve: {
            this._construireListeRessourceAvecCumulPresentielEleve(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          }
          case TypeGenreCumulSelectionPublic.fonction: {
            this._construireListeRessourceAvecCumulFonction(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          }
          case TypeGenreCumulSelectionPublic.projetsAccompagnement: {
            this._construireListeRessourceAvecCumulProjAcc(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          }
          case TypeGenreCumulSelectionPublic.nomElevesClasse:
            this._construireListeRessourceAvecCumulElevesClasse(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          case TypeGenreCumulSelectionPublic.nomElevesGroupe:
            this._construireListeRessourceAvecCumulElevesGroupe(
              this.listeRessourcesT,
              this.listeRessourcesSelectionnees,
            );
            break;
          default:
            break;
        }
        if (
          this._options.autoriseEltAucun &&
          this._options.listeElementsAPositionnerEnPremier
        ) {
          if (this._options.listeElementsAPositionnerEnPremier.count() > 0) {
            this._options.listeElementsAPositionnerEnPremier.parcourir(
              (aElement, aIndex) => {
                this.listeRessources.insererElement(aElement, aIndex);
              },
            );
          }
        }
        if (this.titre) {
          this.setOptionsFenetre({ titre: this.titre });
        }
        this.afficher();
        this._construireFiltres();
        this._actualiserListe();
      }
      surValidation(ANumeroBouton) {
        if (ANumeroBouton === this.indexBtnValider) {
          this._majListeSelection();
          if (this._options.avecInformationEleveDansListeResponsable) {
            this._formatListeRessourcesSelectionneesAvecInfoEleve(
              this.listeRessourcesSelectionnees,
            );
          }
        }
        this.fermer();
        this.callback.appel(
          this.genreRessource,
          this.listeRessourcesSelectionnees,
          ANumeroBouton,
          this.listeRessourcesSelectionneesAvecInfoEleve,
        );
      }
      _majListeSelection() {
        this.listeRessourcesSelectionnees.vider();
        const lHashCache = new Map();
        const lNb = this.listeRessources.count();
        for (let i = 0; i < lNb; i++) {
          const lRessource = this.listeRessources.get(i);
          let lCle =
            this.getCleHashElementAvecInformationEleveDansResponsable(
              lRessource,
            );
          if (
            lRessource.selectionne &&
            !lRessource.estUnDeploiement &&
            (!lHashCache.has(lCle) || !this._options.avecCacheDoublonArticles)
          ) {
            this.listeRessourcesSelectionnees.addElement(
              MethodesObjet_1.MethodesObjet.dupliquer(lRessource),
            );
            lHashCache.set(lCle, true);
          }
        }
      }
      _formatListeRessourcesSelectionneesAvecInfoEleve(aListe) {
        this.listeRessourcesSelectionneesAvecInfoEleve.vider();
        const lListe = aListe;
        const lListeEleves = new Set();
        for (let i = 0; i < lListe.count(); i++) {
          const lRessource = lListe.get(i);
          if (!lRessource.eleves) {
            continue;
          }
          const lEleveConcerne = lRessource.eleveConcerne || lRessource.pere;
          const lObjetElementRessource = new ObjetElement_1.ObjetElement(
            lRessource.getLibelle(),
            lRessource.getNumero(),
            lRessource.getGenre(),
          );
          if (lEleveConcerne) {
            if (lListeEleves.has(lEleveConcerne.getNumero())) {
              const lRessourceSelectionnee =
                this.listeRessourcesSelectionneesAvecInfoEleve.getElementParFiltre(
                  (aRessource) =>
                    aRessource.eleveConcerne &&
                    aRessource.eleveConcerne.getNumero() ===
                      lEleveConcerne.getNumero(),
                );
              if (
                lRessourceSelectionnee &&
                lRessourceSelectionnee.responsables
              ) {
                lRessourceSelectionnee.responsables.add(lObjetElementRessource);
              }
            } else {
              const lRessourceSelectionnee = ObjetElement_1.ObjetElement.create(
                {
                  eleveConcerne:
                    MethodesObjet_1.MethodesObjet.dupliquer(lEleveConcerne),
                  responsables:
                    new ObjetListeElements_1.ObjetListeElements().add(
                      lObjetElementRessource,
                    ),
                },
              );
              this.listeRessourcesSelectionneesAvecInfoEleve.add(
                lRessourceSelectionnee,
              );
              lListeEleves.add(lEleveConcerne.getNumero());
            }
          }
        }
      }
      _initialiserListe(aInstance) {
        let lOptions = {
          skin: ObjetListe_1.ObjetListe.skin.flatDesign,
          avecCBToutCocher: !!this._options.avecCocheRessources,
        };
        if (this._options.optionsListe) {
          $.extend(lOptions, this._options.optionsListe);
        }
        aInstance.setOptionsListe(lOptions);
      }
      _actualiserListe() {
        this.setBoutonActif(
          this.indexBtnValider,
          !this.selectionObligatoire || this._nbRessourcesCochees() > 0,
        );
        const lDonneesListe =
          new DonneesListe_SelectionPublic_1.DonneesListe_SelectionPublic(
            this.listeRessources,
          );
        if (this.parametresFiltre) {
          lDonneesListe.setOptions(this.parametresFiltre);
        }
        lDonneesListe._options = this._options;
        lDonneesListe._options.avecIconElevesDetaches =
          this._options.avecElevesDetaches;
        if (this._options.optionsDonneesListe) {
          lDonneesListe.setOptions(this._options.optionsDonneesListe);
        }
        if (
          this.listeRessources.count() > 0 ||
          !this.optionsFenetre.masquerListeSiVide
        ) {
          this.getInstance(this.identListe).setDonnees(lDonneesListe);
          if (this._options.forcerDeploiementSurElementSelectionne) {
            this.forcerDeploiementSurElementSelectionne();
          }
        } else {
          ObjetHtml_1.GHtml.setDisplay(this.idMessage, true);
          ObjetHtml_1.GHtml.setDisplay(
            this.getNomInstance(this.identListe),
            false,
          );
        }
      }
      getCleHashElementAvecInformationEleveDansResponsable(aElement) {
        let lCle = aElement.getCleHash();
        if (this._options.avecInformationEleveDansListeResponsable) {
          if ('pere' in aElement) {
            return `${lCle}_${aElement.pere.getCleHash()}`;
          }
          if ('eleveConcerne' in aElement) {
            return `${lCle}_${aElement.eleveConcerne.getCleHash()}`;
          }
        }
        return lCle;
      }
      forcerDeploiementSurElementSelectionne() {}
      _construireListeRessourceAvecCumulClasse(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lCumulGroupe = new ObjetElement_1.ObjetElement(
          'Sans classe',
          0,
          0,
        );
        lCumulGroupe.estDeploye = this._options.estDeploye || false;
        lCumulGroupe.estUnDeploiement = true;
        lCumulGroupe.__sansClasse__ = true;
        lCumulGroupe.setActif(true);
        const lListeCumulClasses =
          new ObjetListeElements_1.ObjetListeElements();
        const lListeCumulClassesMN =
          new ObjetListeElements_1.ObjetListeElements();
        let lAvecGroupe = false;
        const lCacheRessSelec = new Map();
        aListeRessourcesSelectionnees.parcourir((aElement) => {
          if (aElement && aElement.existe()) {
            lCacheRessSelec.set(aElement.getCleHash(), aElement);
          }
        });
        const lAjouterRessourceALaListe = (aRessource, aPere) => {
          const lMaRessource =
            MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
          lMaRessource.pere = aPere;
          const lEltResSel = lCacheRessSelec.get(aRessource.getCleHash());
          if (lEltResSel) {
            lMaRessource.selectionne = true;
            lMaRessource.avecReponse = !!lEltResSel.avecReponse;
            aRessource.nonModifiable = !!lEltResSel.nonModifiable;
          } else {
            lMaRessource.selectionne = false;
          }
          this.listeRessources.addElement(lMaRessource);
        };
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        for (let i = 0, lNbr = aListeRessources.count(); i < lNbr; i++) {
          if (aListeRessources.get(i).existeNumero()) {
            const lRessource = MethodesObjet_1.MethodesObjet.dupliquer(
              aListeRessources.get(i),
            );
            const lCleMap = lRessource.getCleHash();
            if (!lRessource.classes || lRessource.classes.count() === 0) {
              lAvecGroupe = true;
              lRessource.pere = lCumulGroupe;
              const lEltResSel = lCacheRessSelec.get(lCleMap);
              if (lEltResSel) {
                lRessource.selectionne = true;
                lRessource.avecReponse = !!lEltResSel.avecReponse;
                lRessource.nonModifiable = !!lEltResSel.nonModifiable;
              } else {
                lRessource.selectionne = false;
              }
              this.listeRessources.addElement(lRessource);
            } else {
              for (
                let j = 0, lNbr2 = lRessource.classes.count();
                j < lNbr2;
                j++
              ) {
                const lClasse = lRessource.classes.get(j);
                let lNiveau = lListeCumulClasses.get(
                  lListeCumulClasses.getIndiceParNumeroEtGenre(
                    lClasse.getNumero(),
                  ),
                );
                if (!lNiveau) {
                  const lSansClasse = !lClasse.getLibelle();
                  lNiveau = new ObjetElement_1.ObjetElement(
                    lClasse.getLibelle() ||
                      'Sans classe',
                    lClasse.getNumero(),
                    0,
                  );
                  lNiveau.estUnDeploiement = true;
                  lNiveau.estDeploye = this._options.estDeploye || false;
                  if (lClasse.estClasseMN) {
                    lNiveau.estClasseMN = true;
                  }
                  lNiveau.__sansClasse__ = lSansClasse;
                  lListeCumulClasses.addElement(lNiveau);
                }
                if (lClasse.estClasseMN && lClasse.classesNiv) {
                  lClasse.classesNiv.parcourir((aNiv) => {
                    let lClasseNiv = lListeCumulClassesMN.get(
                      lListeCumulClassesMN.getIndiceParNumeroEtGenre(
                        aNiv.getNumero(),
                      ),
                    );
                    if (!lClasseNiv) {
                      lClasseNiv = ObjetElement_1.ObjetElement.create({
                        Libelle: aNiv.getLibelle(),
                        Numero: aNiv.getNumero(),
                        Genre: 0,
                        estUnDeploiement: true,
                        estDeploye: this._options.estDeploye || false,
                        __sansClasse__: !aNiv.getLibelle(),
                        pere: lNiveau,
                      });
                      lListeCumulClassesMN.add(lClasseNiv);
                    }
                    lAjouterRessourceALaListe(lRessource, lClasseNiv);
                  });
                } else {
                  lAjouterRessourceALaListe(lRessource, lNiveau);
                }
              }
            }
          }
        }
        if (lAvecGroupe) {
          this.listeRessources.addElement(lCumulGroupe);
        }
        for (let i = 0, lNbr = lListeCumulClasses.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumulClasses.get(i));
        }
        for (let i = 0, lNbr = lListeCumulClassesMN.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumulClassesMN.get(i));
        }
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init((D) => {
              return !D.__sansClasse__;
            }),
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
      _construireListeRessourceAvecCumulGroupe(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lCumulGroupe = new ObjetElement_1.ObjetElement(
          'Sans groupe',
          0,
          TypeGenreCumulSelectionPublic.groupe,
        );
        lCumulGroupe.estDeploye = this._options.estDeploye || false;
        lCumulGroupe.estUnDeploiement = true;
        lCumulGroupe.__sans__ = true;
        lCumulGroupe.setActif(true);
        const lListeCumul = new ObjetListeElements_1.ObjetListeElements();
        let lAvecGroupe = false;
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        let lEltResSel;
        for (let i = 0, lNbr = aListeRessources.count(); i < lNbr; i++) {
          if (aListeRessources.get(i).existeNumero()) {
            const lRessource = MethodesObjet_1.MethodesObjet.dupliquer(
              aListeRessources.get(i),
            );
            if (!lRessource.groupes || lRessource.groupes.count() === 0) {
              lAvecGroupe = true;
              lRessource.pere = lCumulGroupe;
              lEltResSel =
                aListeRessourcesSelectionnees.getElementParElement(lRessource);
              if (lEltResSel) {
                lRessource.selectionne = true;
                lRessource.avecReponse = !!lEltResSel.avecReponse;
                lRessource.nonModifiable = !!lEltResSel.nonModifiable;
              } else {
                lRessource.selectionne = false;
              }
              this.listeRessources.addElement(lRessource);
            } else {
              for (
                let j = 0, lNbr2 = lRessource.groupes.count();
                j < lNbr2;
                j++
              ) {
                const lMaRessource =
                  MethodesObjet_1.MethodesObjet.dupliquer(lRessource);
                let lNiveau = lListeCumul.get(
                  lListeCumul.getIndiceParNumeroEtGenre(
                    lRessource.groupes.getNumero(j),
                  ),
                );
                if (!lNiveau) {
                  const lSansClasse = !lRessource.groupes.getLibelle(j);
                  lNiveau = new ObjetElement_1.ObjetElement(
                    lRessource.groupes.getLibelle(j) ||
                      'Sans groupe',
                    lRessource.groupes.getNumero(j),
                    TypeGenreCumulSelectionPublic.groupe,
                  );
                  lNiveau.estUnDeploiement = true;
                  lNiveau.estDeploye = this._options.estDeploye || false;
                  lNiveau.__sans__ = lSansClasse;
                  lListeCumul.addElement(lNiveau);
                }
                lMaRessource.pere = lNiveau;
                lEltResSel =
                  aListeRessourcesSelectionnees.getElementParElement(
                    lRessource,
                  );
                if (lEltResSel) {
                  lMaRessource.selectionne = true;
                  lMaRessource.avecReponse = !!lEltResSel.avecReponse;
                  lRessource.nonModifiable = !!lEltResSel.nonModifiable;
                } else {
                  lMaRessource.selectionne = false;
                }
                this.listeRessources.addElement(lMaRessource);
              }
            }
          }
        }
        if (lAvecGroupe) {
          this.listeRessources.addElement(lCumulGroupe);
        }
        for (let i = 0, lNbr = lListeCumul.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumul.get(i));
        }
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init((D) => {
              return !D.__sans__;
            }),
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
      _construireListeRessourceAvecCumulInitial(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lCumulGroupe = new ObjetElement_1.ObjetElement(' ', 0, 0);
        lCumulGroupe.estDeploye = this._options.estDeploye || false;
        lCumulGroupe.estUnDeploiement = true;
        lCumulGroupe.setActif(true);
        lCumulGroupe.__sansInitiale__ = true;
        const lListeCumul = new ObjetListeElements_1.ObjetListeElements();
        let lAvecGroupe = false;
        const lCacheRessSelec = new Map();
        aListeRessourcesSelectionnees.parcourir((aElement) => {
          if (aElement && aElement.existe()) {
            lCacheRessSelec.set(aElement.getCleHash(), aElement);
          }
        });
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        for (let i = 0, lNbr = aListeRessources.count(); i < lNbr; i++) {
          if (aListeRessources.get(i).existeNumero()) {
            const lRessource = MethodesObjet_1.MethodesObjet.dupliquer(
              aListeRessources.get(i),
            );
            if (!lRessource.ini) {
              lAvecGroupe = true;
              lRessource.pere = lCumulGroupe;
            } else {
              let lNiveau = lListeCumul.get(
                lListeCumul.getIndiceParLibelle(lRessource.ini),
              );
              if (!lNiveau) {
                lNiveau = new ObjetElement_1.ObjetElement(
                  lRessource.ini,
                  ObjetElement_1.ObjetElement.getNumeroCreation(),
                  0,
                );
                lNiveau.estUnDeploiement = true;
                lNiveau.estDeploye = this._options.estDeploye || false;
                lListeCumul.addElement(lNiveau);
              }
              lRessource.pere = lNiveau;
            }
            const lEltResSel = lCacheRessSelec.get(lRessource.getCleHash());
            if (lEltResSel) {
              lRessource.selectionne = true;
              lRessource.avecReponse = !!lEltResSel.avecReponse;
              lRessource.nonModifiable = !!lEltResSel.nonModifiable;
            } else {
              lRessource.selectionne = false;
            }
            this.listeRessources.addElement(lRessource);
          }
        }
        if (lAvecGroupe) {
          this.listeRessources.addElement(lCumulGroupe);
        }
        for (let i = 0, lNbr = lListeCumul.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumul.get(i));
        }
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.init((D) => {
            return D.pere ? !!D.pere.__sansInitiale__ : !!D.__sansInitiale__;
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return D.pere ? D.pere.getLibelle() : D.getLibelle();
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return !!D.pere;
          }),
          ObjetTri_1.ObjetTri.init('Position'),
          ObjetTri_1.ObjetTri.init('Libelle'),
        ]);
        this.listeRessources.trier();
      }
      _construireListeRessourceAvecCumulPresentielEleve(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {}
      _construireListeRessourceAvecCumulFonction(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lListeRessources = new ObjetListeElements_1.ObjetListeElements();
        let lTestElmAucuneExiste = false;
        if (aListeRessources && aListeRessources.count() > 0) {
          const lCumulAucun = new ObjetElement_1.ObjetElement(
            'Fonction non définie',
            0,
            -1,
            1,
          );
          lCumulAucun.estUnDeploiement = true;
          lCumulAucun.estDeploye = false;
          aListeRessources.parcourir((aRessource) => {
            const lRessource =
              MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
            if (
              !!aListeRessourcesSelectionnees.getElementParElement(aRessource)
            ) {
              lRessource.selectionne = true;
            }
            if (lRessource.fonction) {
              let lCumulFonction = lListeRessources.getElementParElement(
                lRessource.fonction,
              );
              if (!lCumulFonction) {
                lCumulFonction = lRessource.fonction;
                lCumulFonction.estUnDeploiement = true;
                lCumulFonction.estDeploye = false;
                lListeRessources.add(lCumulFonction);
              }
              const lRessourceDupliquee =
                MethodesObjet_1.MethodesObjet.dupliquer(lRessource);
              lRessourceDupliquee.pere = lCumulFonction;
              lListeRessources.addElement(lRessourceDupliquee);
            } else {
              lTestElmAucuneExiste =
                lTestElmAucuneExiste ||
                !!lListeRessources.getElementParElement(lCumulAucun);
              if (!lTestElmAucuneExiste) {
                lListeRessources.add(lCumulAucun);
              }
              lRessource.pere = lCumulAucun;
              lListeRessources.addElement(lRessource);
            }
          });
          this.listeRessources = lListeRessources;
          this.listeRessources.setTri([
            ObjetTri_1.ObjetTri.initRecursif('pere', [
              ObjetTri_1.ObjetTri.init('Position'),
              ObjetTri_1.ObjetTri.init('Libelle'),
            ]),
          ]);
          this.listeRessources.trier();
        }
      }
      _construireListeRessourceAvecCumulEleves(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        aListeRessources.parcourir((aRessource) => {
          if (aRessource.eleves) {
            aRessource.eleves.parcourir((aEleve) => {
              let lCumulEleve =
                this.listeRessources.getElementParElement(aEleve);
              if (!lCumulEleve) {
                lCumulEleve = MethodesObjet_1.MethodesObjet.dupliquer(aEleve);
                this.listeRessources.addElement(lCumulEleve);
                lCumulEleve.estUnDeploiement = true;
                lCumulEleve.estDeploye = this._options.estDeploye || false;
              }
              const lRessource =
                MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
              if (aEleve.niveauResponsabilite) {
                lRessource.afficherResponsabilite = true;
                lRessource.niveauResponsabilite =
                  MethodesObjet_1.MethodesObjet.dupliquer(
                    aEleve.niveauResponsabilite,
                  );
              }
              this.listeRessources.addElement(lRessource);
              lRessource.pere = lCumulEleve;
              let lEltResSel = this.getElementDansListeRessourcesSelectionnees(
                aListeRessourcesSelectionnees,
                lRessource,
              );
              lRessource.selectionne = !!lEltResSel;
              if (lEltResSel) {
                lRessource.avecReponse = !!lEltResSel.avecReponse;
                lRessource.nonModifiable = !!lEltResSel.nonModifiable;
              }
            });
          }
        });
        this.listeRessources
          .setTri([
            ObjetTri_1.ObjetTri.initRecursif('pere', [
              ObjetTri_1.ObjetTri.init('Position'),
              ObjetTri_1.ObjetTri.init('Libelle'),
            ]),
          ])
          .trier();
      }
      getElementDansListeRessourcesSelectionnees(
        aListeRessourcesSelectionnees,
        aRessource,
      ) {
        var _a, _b;
        if (this._options.avecInformationEleveDansListeResponsable) {
          const lNumeroEleve =
            ((_a =
              aRessource === null || aRessource === void 0
                ? void 0
                : aRessource.eleveConcerne) === null || _a === void 0
              ? void 0
              : _a.getNumero()) ||
            ((_b =
              aRessource === null || aRessource === void 0
                ? void 0
                : aRessource.pere) === null || _b === void 0
              ? void 0
              : _b.getNumero());
          if (lNumeroEleve) {
            return aListeRessourcesSelectionnees.getElementParFiltre(
              (aRessourceSelectionnee) => {
                var _a, _b;
                const lEstLaMemeRessource =
                  aRessourceSelectionnee.getNumero() === aRessource.getNumero();
                const lConcerneLeMemeEleve = [
                  (_a =
                    aRessourceSelectionnee === null ||
                    aRessourceSelectionnee === void 0
                      ? void 0
                      : aRessourceSelectionnee.pere) === null || _a === void 0
                    ? void 0
                    : _a.getNumero(),
                  (_b =
                    aRessourceSelectionnee === null ||
                    aRessourceSelectionnee === void 0
                      ? void 0
                      : aRessourceSelectionnee.eleveConcerne) === null ||
                  _b === void 0
                    ? void 0
                    : _b.getNumero(),
                ].includes(lNumeroEleve);
                return lEstLaMemeRessource && lConcerneLeMemeEleve;
              },
            );
          }
        }
        return aListeRessourcesSelectionnees.getElementParElement(aRessource);
      }
      _construireListeRessourceAvecCumulRespDelegues(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lEstDeployeParDefaut = this._options.estDeploye || false;
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        aListeRessources.parcourir((aCumul) => {
          if (aCumul.listeResp.count() > 0) {
            const lCumul = new ObjetElement_1.ObjetElement(aCumul.getLibelle());
            lCumul.estUnDeploiement = true;
            lCumul.estDeploye = lEstDeployeParDefaut;
            this.listeRessources.addElement(lCumul);
            aCumul.listeResp.parcourir((aRessource) => {
              const lRessource =
                MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
              if (
                !!aListeRessourcesSelectionnees.getElementParElement(aRessource)
              ) {
                lRessource.selectionne = true;
              }
              if (lRessource.delegueDesClasses) {
                lRessource.setLibelle(
                  lRessource.getLibelle() +
                    ' (' +
                    lRessource.delegueDesClasses +
                    ')',
                );
              }
              lRessource.pere = lCumul;
              this.listeRessources.addElement(lRessource);
            });
          }
        });
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
      _construireListeRessourceAvecCumulServicePeriscolaire(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lEstDeployeParDefaut = this._options.estDeploye || false;
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        let lTestElmAucuneExiste = false;
        if (aListeRessources && aListeRessources.count() > 0) {
          const lCumulAucun = new ObjetElement_1.ObjetElement(
            'Sans service périscolaire',
            0,
            -1,
            1,
          );
          lCumulAucun.estUnDeploiement = true;
          lCumulAucun.estDeploye = false;
          aListeRessources.parcourir((aRessource) => {
            if (
              !!aRessource.listeServicesPeriscolaire &&
              aRessource.listeServicesPeriscolaire.count() > 0
            ) {
              aRessource.listeServicesPeriscolaire.parcourir(
                (aServicePeriscolaire) => {
                  let lRessource =
                    MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
                  if (
                    !!aListeRessourcesSelectionnees.getElementParElement(
                      aRessource,
                    )
                  ) {
                    lRessource.selectionne = true;
                  }
                  let lCumulSP =
                    this.listeRessources.getElementParElement(
                      aServicePeriscolaire,
                    );
                  if (!lCumulSP) {
                    lCumulSP =
                      MethodesObjet_1.MethodesObjet.dupliquer(
                        aServicePeriscolaire,
                      );
                    this.listeRessources.addElement(lCumulSP);
                    lCumulSP.estUnDeploiement = true;
                    lCumulSP.estDeploye = lEstDeployeParDefaut;
                  }
                  lRessource.pere = lCumulSP;
                  this.listeRessources.addElement(lRessource);
                },
              );
            } else {
              let lRessource =
                MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
              if (
                !!aListeRessourcesSelectionnees.getElementParElement(aRessource)
              ) {
                lRessource.selectionne = true;
              }
              lTestElmAucuneExiste =
                lTestElmAucuneExiste ||
                !!this.listeRessources.getElementParElement(lCumulAucun);
              if (!lTestElmAucuneExiste) {
                this.listeRessources.add(lCumulAucun);
              }
              lRessource.pere = lCumulAucun;
              this.listeRessources.addElement(lRessource);
            }
          });
        }
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
      _construireListeRessourceAvecCumulProjAcc(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lEstDeployeParDefaut = this._options.estDeploye || false;
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        let lTestElmAucuneExiste = false;
        if (aListeRessources && aListeRessources.count() > 0) {
          const lCumulAucun = new ObjetElement_1.ObjetElement(
            'Sans projets d'accompagnement',
            0,
            -1,
            1,
          );
          lCumulAucun.estUnDeploiement = true;
          lCumulAucun.estDeploye = false;
          aListeRessources.parcourir((aRessource) => {
            if (
              !!aRessource.listeProjetsAcc &&
              aRessource.listeProjetsAcc.count() > 0
            ) {
              aRessource.listeProjetsAcc.parcourir((aProjetAcc) => {
                let lRessource =
                  MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
                if (
                  !!aListeRessourcesSelectionnees.getElementParElement(
                    aRessource,
                  )
                ) {
                  lRessource.selectionne = true;
                }
                let lCumulSP =
                  this.listeRessources.getElementParElement(aProjetAcc);
                if (!lCumulSP) {
                  lCumulSP =
                    MethodesObjet_1.MethodesObjet.dupliquer(aProjetAcc);
                  this.listeRessources.addElement(lCumulSP);
                  lCumulSP.estUnDeploiement = true;
                  lCumulSP.estDeploye = lEstDeployeParDefaut;
                }
                lRessource.pere = lCumulSP;
                this.listeRessources.addElement(lRessource);
              });
            } else {
              let lRessource =
                MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
              if (
                !!aListeRessourcesSelectionnees.getElementParElement(aRessource)
              ) {
                lRessource.selectionne = true;
              }
              lTestElmAucuneExiste =
                lTestElmAucuneExiste ||
                !!this.listeRessources.getElementParElement(lCumulAucun);
              if (!lTestElmAucuneExiste) {
                this.listeRessources.add(lCumulAucun);
              }
              lRessource.pere = lCumulAucun;
              this.listeRessources.addElement(lRessource);
            }
          });
        }
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
      _construireListeRessourceAvecCumulFamille(
        aListeRessources,
        aListeRessourcesSelectionnees,
        aFamilleConcernee,
      ) {
        const lListeRessources = new ObjetListeElements_1.ObjetListeElements();
        let lTestElmAucuneExiste = false;
        if (aListeRessources && aListeRessources.count() > 0) {
          const lCumulAucun = new ObjetElement_1.ObjetElement(
            'Sans rubrique',
            0,
            -1,
            1,
          );
          lCumulAucun.estUnDeploiement = true;
          lCumulAucun.estDeploye = false;
          aListeRessources.parcourir((aRessource) => {
            const lRessource =
              MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
            if (
              !!aListeRessourcesSelectionnees.getElementParElement(aRessource)
            ) {
              lRessource.selectionne = true;
            }
            let lAppartientAAuMoinsUneSousFamille = false;
            if (lRessource.listeFamilles) {
              const lFamilleTrouvee =
                lRessource.listeFamilles.getElementParElement(
                  aFamilleConcernee,
                );
              if (
                lFamilleTrouvee &&
                lFamilleTrouvee.listeSousFamilles &&
                lFamilleTrouvee.listeSousFamilles.count() > 0
              ) {
                lAppartientAAuMoinsUneSousFamille = true;
                lFamilleTrouvee.listeSousFamilles.parcourir((aSousFamille) => {
                  let lCumulSousFamille =
                    lListeRessources.getElementParElement(aSousFamille);
                  if (!lCumulSousFamille) {
                    lCumulSousFamille = aSousFamille;
                    lCumulSousFamille.estUnDeploiement = true;
                    lCumulSousFamille.estDeploye = false;
                    lListeRessources.add(lCumulSousFamille);
                  }
                  if (lListeRessources.getElementParElement(lRessource)) {
                    const lRessourceDupliquee =
                      MethodesObjet_1.MethodesObjet.dupliquer(lRessource);
                    lRessourceDupliquee.pere = lCumulSousFamille;
                    lListeRessources.addElement(lRessourceDupliquee);
                  } else {
                    lRessource.pere = lCumulSousFamille;
                    lListeRessources.addElement(lRessource);
                  }
                });
              }
            }
            if (!lAppartientAAuMoinsUneSousFamille) {
              lTestElmAucuneExiste =
                lTestElmAucuneExiste ||
                !!lListeRessources.getElementParElement(lCumulAucun);
              if (!lTestElmAucuneExiste) {
                lListeRessources.add(lCumulAucun);
              }
              lRessource.pere = lCumulAucun;
              lListeRessources.addElement(lRessource);
            }
          });
          this.listeRessources = lListeRessources;
          this.listeRessources.setTri([
            ObjetTri_1.ObjetTri.initRecursif('pere', [
              ObjetTri_1.ObjetTri.init('Position'),
              ObjetTri_1.ObjetTri.init('Libelle'),
            ]),
          ]);
          this.listeRessources.trier();
        }
      }
      _construireListeRessourceAvecCumulAttendusEnCours(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lThis = this;
        const lEstDeployeParDefaut = this._options.estDeploye || false;
        const lGenresCumuls = { detaches: 0, attendus: 1 };
        const lListeCumulsPossibles =
          new ObjetListeElements_1.ObjetListeElements();
        lListeCumulsPossibles.addElement(
          new ObjetElement_1.ObjetElement(
            'Détachés de ce cours',
            lGenresCumuls.detaches,
            -1,
            1,
          ),
        );
        lListeCumulsPossibles.addElement(
          new ObjetElement_1.ObjetElement(
            'Attendus',
            lGenresCumuls.attendus,
            -1,
            2,
          ),
        );
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        aListeRessources.parcourir((aRessource) => {
          const lRessource =
            MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
          if (
            !!aListeRessourcesSelectionnees.getElementParElement(aRessource)
          ) {
            lRessource.selectionne = true;
          }
          let lPere;
          if (!!lRessource.estElevesDetachesDuCours) {
            lPere = lListeCumulsPossibles.getElementParNumero(
              lGenresCumuls.detaches,
            );
          } else {
            lPere = lListeCumulsPossibles.getElementParNumero(
              lGenresCumuls.attendus,
            );
          }
          lPere.estUnDeploiement = true;
          lPere.estDeploye = lEstDeployeParDefaut;
          lRessource.pere = lPere;
          lThis.listeRessources.addElement(lRessource);
        });
        lListeCumulsPossibles.parcourir((aCumul) => {
          if (aCumul.estUnDeploiement) {
            lThis.listeRessources.addElement(aCumul);
          }
        });
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
      _construireListeRessourceAvecCumulLieuEnseignement(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lThis = this;
        const lEstDeployeParDefaut = this._options.estDeploye || false;
        const LieuEnseignement = { ALEtablissement: 0, ALaMaison: 1 };
        const lListeCumulsPossibles =
          new ObjetListeElements_1.ObjetListeElements();
        lListeCumulsPossibles.addElement(
          new ObjetElement_1.ObjetElement(
            'dans l'établissement',
            LieuEnseignement.ALEtablissement,
          ),
        );
        lListeCumulsPossibles.addElement(
          new ObjetElement_1.ObjetElement(
            'à la maison',
            LieuEnseignement.ALaMaison,
          ),
        );
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        aListeRessources.parcourir((aRessource) => {
          const lRessource =
            MethodesObjet_1.MethodesObjet.dupliquer(aRessource);
          if (
            !!aListeRessourcesSelectionnees.getElementParElement(aRessource)
          ) {
            lRessource.selectionne = true;
          }
          let lPere;
          if (!!lRessource.estEnEnseignementADistance) {
            lPere = lListeCumulsPossibles.getElementParNumero(
              LieuEnseignement.ALaMaison,
            );
          } else {
            lPere = lListeCumulsPossibles.getElementParNumero(
              LieuEnseignement.ALEtablissement,
            );
          }
          lPere.estUnDeploiement = true;
          lPere.estDeploye = lEstDeployeParDefaut;
          lRessource.pere = lPere;
          lThis.listeRessources.addElement(lRessource);
        });
        lListeCumulsPossibles.parcourir((aCumul) => {
          if (aCumul.estUnDeploiement) {
            lThis.listeRessources.addElement(aCumul);
          }
        });
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
      _construireListeRessourceAvecCumulElevesClasse(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {}
      _construireListeRessourceAvecCumulElevesGroupe(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {}
    }
    exports.ObjetFenetre_SelectionPublic = ObjetFenetre_SelectionPublic;
  },
  fn: 'objetfenetre_selectionpublic.js',
});