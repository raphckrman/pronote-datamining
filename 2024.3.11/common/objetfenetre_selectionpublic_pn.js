IE.fModule({
  f: function (exports, require, module, global) {
    const {
      ObjetFenetre_SelectionPublic,
      TypeGenreCumulSelectionPublic,
    } = require('ObjetFenetre_SelectionPublic.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { EGenreRessource } = require('Enumere_Ressource.js');
    const { EGenreEspace } = require('Enumere_Espace.js');
    const { ObjetListeElements } = require('ObjetListeElements.js');
    const { MethodesObjet } = require('MethodesObjet.js');
    const { ObjetElement } = require('ObjetElement.js');
    const { ObjetTri } = require('ObjetTri.js');
    const { TypeDroits } = require('ObjetDroitsPN.js');
    const { tag } = require('tag.js');
    const {
      TypeGenreNiveauResponsabiliteUtil,
    } = require('TypeGenreNiveauResponsabilite.js');
    const { EGenreEvenementListe } = require('Enumere_EvenementListe.js');
    const {
      TypeGenreNiveauResponsabilite,
    } = require('TypeGenreNiveauResponsabilite.js');
    class ObjetFenetre_SelectionPublic_PN extends ObjetFenetre_SelectionPublic {
      constructor(...aParams) {
        super(...aParams);
        this.avecFiltreSurProfs = ![
          EGenreEspace.Eleve,
          EGenreEspace.PrimEleve,
          EGenreEspace.Mobile_Eleve,
          EGenreEspace.Mobile_PrimEleve,
          EGenreEspace.Parent,
          EGenreEspace.PrimParent,
          EGenreEspace.Mobile_Parent,
          EGenreEspace.Mobile_PrimParent,
          EGenreEspace.Accompagnant,
          EGenreEspace.PrimAccompagnant,
          EGenreEspace.Mobile_Accompagnant,
          EGenreEspace.Mobile_PrimAccompagnant,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      estPourPrimaire() {
        return GEtatUtilisateur.pourPrimaire();
      }
      setDonnees(aParam) {
        _construireFiltresListe.call(this, aParam);
        super.setDonnees(aParam);
      }
      forcerDeploiementSurElementSelectionne() {
        const lElements = this.listeRessources.getListeElements(
          (aElem) => aElem.selectionne,
        );
        lElements.parcourir((aElement) => {
          const lIndice =
            this.listeRessources.getIndiceExisteParElement(aElement);
          if (MethodesObjet.isNumeric(lIndice)) {
            if (aElement.pere && aElement.pere.estUnDeploiement) {
              aElement.pere.estDeploye = true;
            }
            this.getInstance(this.identListe).actualiser();
            this.getInstance(this.identListe).selectionnerLigne({
              ligne: lIndice,
              avecEvenementModificationSelection: false,
              avecScroll: true,
            });
          }
        });
      }
      _evenementSurListe(aParametres) {
        switch (aParametres.genreEvenement) {
          case EGenreEvenementListe.Selection: {
            if (aParametres.article.estUnDeploiement) {
              return;
            }
            const lRessource = this.listeRessources.getElementParNumero(
              aParametres.article.getNumero(),
            );
            if (lRessource && !lRessource.estUnDeploiement) {
              this.listeRessourcesSelectionnees.vider();
              this.listeRessourcesSelectionnees.add(lRessource);
              this.validationAuto();
            }
            break;
          }
          default:
            super._evenementSurListe(aParametres);
        }
      }
      validationAuto() {
        this.fermer();
        this.callback.appel(
          this.genreRessource,
          this.listeRessourcesSelectionnees,
          this.indexBtnValider,
          this.listeRessourcesSelectionneesAvecInfoEleve,
        );
      }
      _construireListeRessourceAvecCumulPresentielEleve(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lEstDeployeParDefaut = this._options.estDeploye || false;
        this.listeRessources = new ObjetListeElements();
        let lCumulPresent;
        let lCumulAbsent;
        aListeRessources.parcourir((aEleve) => {
          const lEleve = MethodesObjet.dupliquer(aEleve);
          this.listeRessources.add(lEleve);
          if (!!aListeRessourcesSelectionnees.getElementParElement(lEleve)) {
            lEleve.selectionne = true;
          }
          let lCumul;
          if (lEleve.estAbsent) {
            if (!lCumulAbsent) {
              lCumulAbsent = new ObjetElement({
                Numero: 0,
                estUnDeploiement: true,
                estDeploye: lEstDeployeParDefaut,
                nb: 0,
                cumulAbsent: false,
              });
              this.listeRessources.add(lCumulAbsent);
            }
            lCumul = lCumulAbsent;
          } else {
            if (!lCumulPresent) {
              lCumulPresent = new ObjetElement({
                Numero: 0,
                estUnDeploiement: true,
                estDeploye: lEstDeployeParDefaut,
                nb: 0,
                cumulAbsent: false,
              });
              this.listeRessources.add(lCumulPresent);
            }
            lCumul = lCumulPresent;
          }
          lCumul.nb += 1;
          lEleve.pere = lCumul;
        });
        if (lCumulPresent) {
          lCumulPresent.setLibelle(
            GTraductions.getValeur(
              'Messagerie.Filtre_AbsencePresenceEleve_SansAbsence_S',
              [lCumulPresent.nb],
            ),
          );
          if (!lCumulAbsent) {
            lCumulPresent.estDeploye = true;
          }
        }
        if (lCumulAbsent) {
          lCumulAbsent.setLibelle(
            GTraductions.getValeur(
              'Messagerie.Filtre_AbsencePresenceEleve_AvecAbsence_S',
              [lCumulAbsent.nb],
            ),
          );
          if (!lCumulPresent) {
            lCumulAbsent.estDeploye = true;
          }
        }
        this.listeRessources
          .setTri([
            ObjetTri.initRecursif('pere', [
              ObjetTri.init('cumulAbsent'),
              ObjetTri.init('Position'),
              ObjetTri.init('Libelle'),
            ]),
          ])
          .trier();
      }
      _construireListeRessourceAvecCumulElevesClasse(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lCumulGroupe = new ObjetElement(
          GTraductions.getValeur('Fenetre_SelectionPublic.SansClasse'),
          0,
          0,
        );
        lCumulGroupe.estDeploye = this._options.estDeploye || false;
        lCumulGroupe.estUnDeploiement = true;
        lCumulGroupe.__sansClasse__ = true;
        lCumulGroupe.setActif(true);
        const lCacheRessSelec = new Map();
        aListeRessourcesSelectionnees.parcourir((aElement) => {
          if (aElement && aElement.existe()) {
            let lCle =
              this.getCleHashElementAvecInformationEleveDansResponsable(
                aElement,
              );
            lCacheRessSelec.set(lCle, aElement);
          }
        });
        let lAvecGroupe = false;
        this.listeRessources = new ObjetListeElements();
        const lListeCumulClasse = new ObjetListeElements();
        const lListeCumulEleve = new ObjetListeElements();
        for (let i = 0; i < aListeRessources.count(); i++) {
          const lRessource = MethodesObjet.dupliquer(aListeRessources.get(i));
          if (!lRessource.existeNumero() || !lRessource.eleves) {
            continue;
          }
          for (let i = 0; i < lRessource.eleves.count(); i++) {
            const lEleve = MethodesObjet.dupliquer(lRessource.eleves.get(i));
            let lCumulEleve = lListeCumulEleve.getElementParElement(lEleve);
            if (!lCumulEleve) {
              lCumulEleve = MethodesObjet.dupliquer(lEleve);
              lCumulEleve.estUnDeploiement = true;
              lCumulEleve.estDeploye = this._options.estDeploye || false;
              if (!lRessource.classes || lRessource.classes.count() === 0) {
                lAvecGroupe = true;
                lCumulEleve.pere = lCumulGroupe;
              } else if (lEleve.classe) {
                const lClasse = lEleve.classe;
                let lNiveau = lListeCumulClasse.getElementParNumero(
                  lClasse.getNumero(),
                );
                if (!lNiveau) {
                  const lSansClasse = !lClasse.getLibelle();
                  lNiveau = new ObjetElement(
                    lClasse.getLibelle() ||
                      GTraductions.getValeur(
                        'Fenetre_SelectionPublic.SansClasse',
                      ),
                    lClasse.getNumero(),
                    0,
                  );
                  lNiveau.estUnDeploiement = true;
                  lNiveau.estDeploye = this._options.estDeploye || false;
                  if (lClasse.estClasseMN) {
                    lNiveau.estClasseMN = true;
                  }
                  lNiveau.__sansClasse__ = lSansClasse;
                  lListeCumulClasse.addElement(lNiveau);
                }
                lCumulEleve.pere = lNiveau;
                if (lClasse.estClasseMN && lClasse.classesNiv) {
                  lCumulEleve.classesNiv = lClasse.classesNiv;
                }
              }
              lListeCumulEleve.addElement(lCumulEleve);
            }
            const lCopieRessource = MethodesObjet.dupliquer(lRessource);
            lCopieRessource.pere = lCumulEleve;
            lCopieRessource.estDeploye = this._options.estDeploye || false;
            let lEltSelec = lCacheRessSelec.get(
              this.getCleHashElementAvecInformationEleveDansResponsable(
                lCopieRessource,
              ),
            );
            lCopieRessource.selectionne = !!lEltSelec;
            if (lEltSelec) {
              lCopieRessource.avecReponse = !!lEltSelec.avecReponse;
              lCopieRessource.nonModifiable = !!lEltSelec.nonModifiable;
            }
            this.listeRessources.add(lCopieRessource);
          }
        }
        if (lAvecGroupe) {
          this.listeRessources.addElement(lCumulGroupe);
        }
        for (let i = 0, lNbr = lListeCumulClasse.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumulClasse.get(i));
        }
        for (let i = 0, lNbr = lListeCumulEleve.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumulEleve.get(i));
        }
        this.listeRessources.setTri([
          ObjetTri.initRecursif('pere', [
            ObjetTri.init((D) => {
              return !D.__sansClasse__;
            }),
            ObjetTri.init('Position'),
            ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
      _construireListeRessourceAvecCumulElevesGroupe(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lCumulSansGroupe = new ObjetElement(
          GTraductions.getValeur('Fenetre_SelectionPublic.SansGroupe'),
          0,
          TypeGenreCumulSelectionPublic.groupe,
        );
        lCumulSansGroupe.estDeploye = this._options.estDeploye || false;
        lCumulSansGroupe.estUnDeploiement = true;
        lCumulSansGroupe.__sans__ = true;
        lCumulSansGroupe.setActif(true);
        const lCacheRessSelec = new Map();
        aListeRessourcesSelectionnees.parcourir((aElement) => {
          if (aElement && aElement.existe()) {
            let lCle =
              this.getCleHashElementAvecInformationEleveDansResponsable(
                aElement,
              );
            lCacheRessSelec.set(lCle, aElement);
          }
        });
        const lAjouterRessource = (aParams) => {
          let lCumulEleve = lListeCumulEleve.getElementParFiltre((aElem) => {
            return (
              aElem.getNumero() === aParams.eleve.getNumero() &&
              aElem.pere &&
              aElem.pere === aParams.cumulGroupe
            );
          });
          if (!lCumulEleve) {
            lCumulEleve = MethodesObjet.dupliquer(aParams.eleve);
            lCumulEleve.estUnDeploiement = true;
            lCumulEleve.estDeploye = !!this._options.estDeploye;
            lCumulEleve.pere = aParams.cumulGroupe;
            lListeCumulEleve.addElement(lCumulEleve);
          }
          const lCopieRessource = MethodesObjet.dupliquer(aParams.responsable);
          lCopieRessource.pere = lCumulEleve;
          lCopieRessource.estDeploye = !!this._options.estDeploye;
          let lEltSelec = lCacheRessSelec.get(
            this.getCleHashElementAvecInformationEleveDansResponsable(
              lCopieRessource,
            ),
          );
          lCopieRessource.selectionne = !!lEltSelec;
          this.listeRessources.add(lCopieRessource);
        };
        let lAvecCumulSansGroupe = false;
        this.listeRessources = new ObjetListeElements();
        const lListeCumulGroupe = new ObjetListeElements();
        const lListeCumulEleve = new ObjetListeElements();
        for (let i = 0; i < aListeRessources.count(); i++) {
          const lRessource = MethodesObjet.dupliquer(aListeRessources.get(i));
          if (!lRessource.existeNumero() || !lRessource.eleves) {
            continue;
          }
          for (let i = 0; i < lRessource.eleves.count(); i++) {
            const lEleve = MethodesObjet.dupliquer(lRessource.eleves.get(i));
            if (!lEleve.groupes || lEleve.groupes.count() === 0) {
              lAvecCumulSansGroupe = true;
              lAjouterRessource({
                cumulGroupe: lCumulSansGroupe,
                eleve: lEleve,
                responsable: lRessource,
              });
            } else {
              for (let j = 0, lNbr2 = lEleve.groupes.count(); j < lNbr2; j++) {
                const lGroupe = MethodesObjet.dupliquer(lEleve.groupes.get(j));
                let lCumulGroupe = lListeCumulGroupe.getElementParNumero(
                  lGroupe.getNumero(),
                );
                if (!lCumulGroupe) {
                  const lSansClasse = !lEleve.groupes.getLibelle(j);
                  lCumulGroupe = new ObjetElement(
                    lEleve.groupes.getLibelle(j) ||
                      GTraductions.getValeur(
                        'Fenetre_SelectionPublic.SansGroupe',
                      ),
                    lEleve.groupes.getNumero(j),
                    TypeGenreCumulSelectionPublic.groupe,
                  );
                  lCumulGroupe.estUnDeploiement = true;
                  lCumulGroupe.estDeploye = !!this._options.estDeploye;
                  lCumulGroupe.__sans__ = lSansClasse;
                  lListeCumulGroupe.addElement(lCumulGroupe);
                }
                lAjouterRessource({
                  cumulGroupe: lCumulGroupe,
                  eleve: lEleve,
                  responsable: lRessource,
                });
              }
            }
          }
        }
        if (lAvecCumulSansGroupe) {
          this.listeRessources.addElement(lCumulSansGroupe);
        }
        for (let i = 0, lNbr = lListeCumulGroupe.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumulGroupe.get(i));
        }
        for (let i = 0, lNbr = lListeCumulEleve.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumulEleve.get(i));
        }
        this.listeRessources.setTri([
          ObjetTri.initRecursif('pere', [
            ObjetTri.init((D) => {
              return !D.__sans__;
            }),
            ObjetTri.init('Position'),
            ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
    }
    function _construireFiltresListe(aParam) {
      const lEvnFiltre = () => {
        this.getInstance(this.identListe)
          .getDonneesListe()
          .paramsListe.actualiserListe();
      };
      if (
        aParam.genreRessource === EGenreRessource.Enseignant &&
        this.avecFiltreSurProfs
      ) {
        const H = [];
        H.push(
          `<fieldset>\n      <legend>${GTraductions.getValeur('Fenetre_SelectionRessource.filtreAfficher')}</legend>`,
        );
        H.push(
          `<div class="m-top-l"><ie-checkbox ie-model="cbPrincipaux">${GApplication.estPrimaire ? GTraductions.getValeur('Fenetre_SelectionRessource.filtreProfReferents') : GTraductions.getValeur('Fenetre_SelectionRessource.filtreProfPrincipaux')}</ie-checkbox></div>`,
        );
        if (!GApplication.estPrimaire) {
          H.push(
            `<div class="m-top-l"><ie-checkbox ie-model="cbTuteurs">${GTraductions.getValeur('Fenetre_SelectionRessource.filtreProfTuteurs')}</ie-checkbox></div>`,
          );
        }
        H.push(`</fieldset>`);
        let lProfsPrincipaux = false;
        let lProfsTuteurs = false;
        const lParamsFiltre = {
          funcFiltreVisible: (aArticle) => {
            const lAvecProfsPrincipaux =
              lProfsPrincipaux && aArticle.estProfPrincipal;
            const lAvecProfsTuteurs = lProfsTuteurs && aArticle.estProfTuteur;
            return (
              lAvecProfsPrincipaux ||
              lAvecProfsTuteurs ||
              (!lProfsPrincipaux && !lProfsTuteurs)
            );
          },
          htmlFiltre: H.join(''),
          filtreControleur: {
            cbPrincipaux: {
              getValue() {
                return lProfsPrincipaux;
              },
              setValue(aValue) {
                lProfsPrincipaux = aValue;
                lEvnFiltre();
              },
            },
            cbTuteurs: {
              getValue() {
                return lProfsTuteurs;
              },
              setValue(aValue) {
                lProfsTuteurs = aValue;
                lEvnFiltre();
              },
            },
          },
          filtreParDefaut: () => {
            return !lProfsPrincipaux && !lProfsTuteurs;
          },
          reinitFiltres: () => {
            lProfsPrincipaux = false;
            lProfsTuteurs = false;
            lEvnFiltre();
          },
        };
        aParam.parametresFiltre = lParamsFiltre;
        return;
      }
      if (
        aParam.genreRessource === EGenreRessource.Eleve &&
        GEtatUtilisateur.getUtilisateur().getGenre() ===
          EGenreRessource.Enseignant &&
        GApplication.droits.get(TypeDroits.communication.toutesClasses)
      ) {
        let lUniquementEnseigne = false;
        const lParamsFiltre = {
          funcFiltreVisible: (aArticle) => {
            return !lUniquementEnseigne || !!aArticle.enseigne;
          },
          htmlFiltre: tag(
            'ie-checkbox',
            { 'ie-model': 'cb' },
            GTraductions.getValeur(
              'Fenetre_SelectionRessource.FiltreUniquementElevesEnseigne',
            ),
          ),
          filtreControleur: {
            cb: {
              getValue() {
                return lUniquementEnseigne;
              },
              setValue(aValue) {
                lUniquementEnseigne = aValue;
                lEvnFiltre();
              },
            },
          },
          filtreParDefaut: () => {
            return !lUniquementEnseigne;
          },
          reinitFiltres: () => {
            lUniquementEnseigne = false;
            lEvnFiltre();
          },
        };
        aParam.parametresFiltre = lParamsFiltre;
      }
      if (
        aParam.genreRessource === EGenreRessource.Responsable &&
        aParam.listeNiveauxResponsabilite &&
        aParam.listeNiveauxResponsabilite.count() > 1
      ) {
        const H = [];
        const llisteNiveauxResponsabilite = aParam.listeNiveauxResponsabilite;
        llisteNiveauxResponsabilite.parcourir(
          (aNiveauResponsabilite, aIndex) => {
            const lClass = [];
            const lEstEspaceParent = [
              EGenreEspace.Parent,
              EGenreEspace.Mobile_Parent,
            ].includes(GEtatUtilisateur.GenreEspace);
            const lEstAutreContacts =
              aNiveauResponsabilite.getGenre() ===
              TypeGenreNiveauResponsabilite.gnrContact;
            if (lEstEspaceParent && lEstAutreContacts) {
              return;
            }
            if (aIndex < llisteNiveauxResponsabilite.count() - 1) {
              lClass.push('p-bottom');
            }
            H.push(
              tag(
                'div',
                { class: lClass },
                tag(
                  'ie-checkbox',
                  {
                    'ie-model': tag.funcAttr('cb', [
                      aNiveauResponsabilite.getGenre(),
                    ]),
                  },
                  aNiveauResponsabilite.getLibelle(),
                ),
              ),
            );
          },
        );
        const lParamsFiltre = {
          funcFiltreVisible: (aArticle) => {
            let lVisible = false;
            if (aArticle.getGenre() !== EGenreRessource.Responsable) {
              return true;
            }
            if (this._options.avecInformationEleveDansListeResponsable) {
              const lEleveDuResponsable =
                aArticle.eleves &&
                aArticle.eleves.getElementParNumero(aArticle.pere.getNumero());
              if (
                lEleveDuResponsable &&
                lEleveDuResponsable.niveauResponsabilite
              ) {
                const lNivResponsablilite =
                  llisteNiveauxResponsabilite.getElementParElement(
                    lEleveDuResponsable.niveauResponsabilite,
                  );
                if (lNivResponsablilite) {
                  lVisible =
                    'actif' in lNivResponsablilite
                      ? lNivResponsablilite.actif
                      : true;
                }
              }
            } else if (aArticle.niveauResponsabilite) {
              llisteNiveauxResponsabilite.parcourir((aNiveauResponsabilite) => {
                if (
                  aNiveauResponsabilite.getGenre() ===
                  aArticle.niveauResponsabilite.getGenre()
                ) {
                  lVisible =
                    aNiveauResponsabilite.actif === undefined
                      ? true
                      : aNiveauResponsabilite.actif;
                  return false;
                }
              });
            }
            return lVisible;
          },
          htmlFiltre: H.join(''),
          filtreControleur: {
            cb: {
              getValue(aGenreNiveauResponsabilite) {
                const lElmNiveauResponsabilite =
                  llisteNiveauxResponsabilite.getElementParGenre(
                    aGenreNiveauResponsabilite,
                  );
                let lActif = false;
                if (lElmNiveauResponsabilite) {
                  if (lElmNiveauResponsabilite.actif === undefined) {
                    lElmNiveauResponsabilite.actif =
                      TypeGenreNiveauResponsabiliteUtil.estFiltreParDefautActif(
                        lElmNiveauResponsabilite.getGenre(),
                      );
                  }
                  lActif = lElmNiveauResponsabilite.actif;
                }
                return lActif;
              },
              setValue(aGenreNiveauResponsabilite, aValue) {
                const lElmNiveauResponsabilite =
                  llisteNiveauxResponsabilite.getElementParGenre(
                    aGenreNiveauResponsabilite,
                  );
                if (lElmNiveauResponsabilite) {
                  lElmNiveauResponsabilite.actif = aValue;
                }
                lEvnFiltre();
              },
            },
          },
          filtreParDefaut: () => {
            let lFilteDef = true;
            llisteNiveauxResponsabilite.parcourir((aNiveauResponsabilite) => {
              if (lFilteDef) {
                if (
                  TypeGenreNiveauResponsabiliteUtil.estFiltreParDefautActif(
                    aNiveauResponsabilite.getGenre(),
                  )
                ) {
                  lFilteDef = aNiveauResponsabilite.actif;
                } else {
                  lFilteDef = !aNiveauResponsabilite.actif;
                }
                if (!lFilteDef) {
                  return false;
                }
              }
            });
            return lFilteDef;
          },
          reinitFiltres: () => {
            llisteNiveauxResponsabilite.parcourir((aNiveauResponsabilite) => {
              aNiveauResponsabilite.actif =
                TypeGenreNiveauResponsabiliteUtil.estFiltreParDefautActif(
                  aNiveauResponsabilite.getGenre(),
                );
            });
            lEvnFiltre();
          },
        };
        aParam.parametresFiltre = lParamsFiltre;
        if (!('avecFiltresVisibles' in aParam)) {
          aParam.avecFiltresVisibles = true;
        }
      }
    }
    module.exports = { ObjetFenetre_SelectionPublic_PN };
  },
  fn: 'objetfenetre_selectionpublic_pn.js',
});