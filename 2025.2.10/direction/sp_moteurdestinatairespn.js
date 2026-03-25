IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.MoteurDestinatairesPN = void 0;
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const TypeGenreInternetIndividu_1 = require('TypeGenreInternetIndividu');
    const ObjetDroitsPN_1 = require('ObjetDroitsPN');
    const ObjetRequeteListePublics_1 = require('ObjetRequeteListePublics');
    const ObjetFenetre_SelectionClasseGroupe_1 = require('ObjetFenetre_SelectionClasseGroupe');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetFenetre_SelectionPublic_1 = require('ObjetFenetre_SelectionPublic');
    const ObjetFenetre_SelectionPublic_PN_1 = require('ObjetFenetre_SelectionPublic_PN');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetElement_1 = require('ObjetElement');
    const UtilitaireMessagerie_1 = require('UtilitaireMessagerie');
    const UtilitaireListePublics_1 = require('UtilitaireListePublics');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const AccessApp_1 = require('AccessApp');
    const jsx_1 = require('jsx');
    class MoteurDestinatairesPN {
      constructor() {
        this.applicationSco = (0, AccessApp_1.getApp)();
      }
      estGenrePublicEntite(aParam) {
        if (aParam.donnee === null || aParam.donnee === undefined) {
          return false;
        }
        const lGenresPublicEntite = aParam.donnee.genresPublicEntite;
        switch (aParam.genreRessource) {
          case Enumere_Ressource_1.EGenreRessource.Responsable:
            return (
              lGenresPublicEntite.contains(
                TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
                  .InternetIndividu_ParentEleve,
              ) ||
              lGenresPublicEntite.contains(
                TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
                  .InternetIndividu_Parent,
              )
            );
          default:
            return lGenresPublicEntite.contains(
              _toInternetIndividu.call(this, aParam.genreRessource),
            );
        }
      }
      setGenrePublicEntite(aParam) {
        if (aParam.donnee === null || aParam.donnee === undefined) {
          return;
        }
        const lGenresPublicEntite = aParam.donnee.genresPublicEntite;
        const lRelatifEleve =
          aParam.genreRessource ===
          Enumere_Ressource_1.EGenreRessource.Responsable
            ? aParam.valeur === true
              ? true
              : this.estRelatifEleve(aParam)
            : null;
        const lGII = _toInternetIndividu.call(
          this,
          aParam.genreRessource,
          lRelatifEleve,
        );
        const lEstCoche = lGenresPublicEntite.contains(lGII);
        if (lEstCoche) {
          lGenresPublicEntite.remove(lGII);
        } else {
          lGenresPublicEntite.add(lGII);
        }
        aParam.donnee.avecModificationPublic = true;
      }
      estRelatifEleve(aParam) {
        if (aParam.donnee === null || aParam.donnee === undefined) {
          return;
        }
        const lGenresPublicEntite = aParam.donnee.genresPublicEntite;
        switch (aParam.genreRessource) {
          case Enumere_Ressource_1.EGenreRessource.Responsable:
            if (
              lGenresPublicEntite.contains(
                TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
                  .InternetIndividu_ParentEleve,
              )
            ) {
              return true;
            }
            if (
              lGenresPublicEntite.contains(
                TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
                  .InternetIndividu_Parent,
              )
            ) {
              return false;
            }
            break;
        }
        return null;
      }
      setChoixParMembre(aParam) {
        if (aParam.donnee === null || aParam.donnee === undefined) {
          return;
        }
        const lGenresPublicEntite = aParam.donnee.genresPublicEntite;
        switch (aParam.genreRessource) {
          case Enumere_Ressource_1.EGenreRessource.Responsable:
            lGenresPublicEntite.add(
              _toInternetIndividu.call(
                this,
                aParam.genreRessource,
                aParam.choixParMembre,
              ),
            );
            lGenresPublicEntite.remove(
              _toInternetIndividu.call(
                this,
                aParam.genreRessource,
                !aParam.choixParMembre,
              ),
            );
            aParam.donnee.avecModificationPublic = true;
            break;
        }
      }
      getDonneesPublic(aParam) {
        const lGenreRessource = aParam.genreRessource;
        const lEstResponsableAResponsable = [
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
        ].includes(GEtatUtilisateur.GenreEspace);
        const lParams = {
          genres: [lGenreRessource],
          sansFiltreSurEleve:
            this.applicationSco.droits.get(
              ObjetDroitsPN_1.TypeDroits.communication.toutesClasses,
            ) || aParam.forcerSansFiltreSurEleve === true,
          entreResponsables: lEstResponsableAResponsable,
          avecFonctionPersonnel: true,
          avecInfoRencontresSepareesDesResponsables:
            !!aParam.avecInfoRencontresSepareesDesResponsables,
          eleve: aParam.eleve,
          avecInfoResponsablePreferentiel:
            !!aParam.avecInfoResponsablePreferentiel,
          avecUniquementResponsableDelegue:
            lGenreRessource ===
              Enumere_Ressource_1.EGenreRessource.Responsable &&
            aParam.avecUniquementResponsableDelegue,
          avecEmail: !!aParam.avecEmail,
          avecUniquementEmail: !!aParam.avecUniquementEmail,
          estCtxModeleActualite: !!aParam.estCtxModeleActualite,
        };
        if (lEstResponsableAResponsable) {
          lParams['avecFiltreDelegues'] = true;
        }
        return new ObjetRequeteListePublics_1.ObjetRequeteListePublics(
          this,
          aParam.clbck ? aParam.clbck.bind(this) : null,
        ).lancerRequete(lParams);
      }
      getTitreSelectRessource(aParam) {
        const lGenreRessource = aParam.genreRessource;
        return Enumere_Ressource_1.EGenreRessourceUtil.getTitreFenetreSelectionRessource(
          lGenreRessource,
          aParam.singulier,
        );
      }
      ouvrirModaleSelectionRessource(aParam) {
        const lModaleSelect = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_SelectionClasseGroupe_1.ObjetFenetre_SelectionClasseGroupe,
          {
            pere: this,
            evenement: function (
              aGenreRessource,
              aListeRessourcesSelect,
              aNumeroBouton,
            ) {
              if (aNumeroBouton === 1) {
                const lEntitesAutreGenre =
                  aParam.donnee.listePublicEntite.getListeElements((aElt) => {
                    return aElt.getGenre() !== aGenreRessource;
                  });
                aParam.donnee.listePublicEntite = lEntitesAutreGenre;
                aParam.donnee.listePublicEntite.add(
                  MethodesObjet_1.MethodesObjet.dupliquer(
                    aListeRessourcesSelect,
                  ),
                );
                aParam.donnee.avecModificationPublic = true;
                aParam.clbck();
              }
            },
          },
        );
        const lGenreRessource = aParam.genreRessource;
        const lAvecClasse =
          lGenreRessource === Enumere_Ressource_1.EGenreRessource.Classe;
        const lListeClassesGroupes = this.applicationSco
          .getEtatUtilisateur()
          .getListeClasses({
            avecClasse: lAvecClasse,
            avecGroupe:
              lGenreRessource === Enumere_Ressource_1.EGenreRessource.Groupe,
            uniquementClasseEnseignee: [
              Enumere_Espace_1.EGenreEspace.Professeur,
              Enumere_Espace_1.EGenreEspace.Mobile_Professeur,
            ].includes(GEtatUtilisateur.GenreEspace)
              ? !this.applicationSco.droits.get(
                  ObjetDroitsPN_1.TypeDroits.communication.toutesClasses,
                )
              : false,
          });
        const lTitre =
          lGenreRessource === Enumere_Ressource_1.EGenreRessource.Classe
            ? 'Sélectionner des classes'
            : 'Sélectionner des groupes';
        lModaleSelect.setSelectionObligatoire(false);
        lModaleSelect.setAvecCumul(lAvecClasse);
        lModaleSelect.setDonnees({
          listeRessources: lListeClassesGroupes,
          listeRessourcesSelectionnees: MethodesObjet_1.MethodesObjet.dupliquer(
            aParam.donnee.listePublicEntite,
          ),
          genreRessource: lGenreRessource,
          titre: lTitre,
        });
      }
      ouvrirModaleSelectionPublic(aParam) {
        const lAvecFiltreDelegues =
          [
            Enumere_Espace_1.EGenreEspace.Parent,
            Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          ].includes(GEtatUtilisateur.GenreEspace) &&
          aParam.genreRessource ===
            Enumere_Ressource_1.EGenreRessource.Responsable;
        aParam = Object.assign(
          { avecCoche: true, avecFiltreDelegues: lAvecFiltreDelegues },
          aParam,
        );
        this.getDonneesPublic({
          genreRessource: aParam.genreRessource,
          forcerSansFiltreSurEleve: aParam.forcerSansFiltreSurEleve,
          avecUniquementEmail: aParam.avecUniquementEmail,
          avecEmail: aParam.avecEmail,
          eleve: aParam.eleve,
          avecUniquementResponsableDelegue:
            aParam.avecUniquementResponsableDelegue,
          estCtxModeleActualite: aParam.estCtxModeleActualite,
        }).then((aDonnees) => {
          this.openModaleSelectPublic({
            listePublicDonnee: aParam.listePublicDonnee,
            clbck: aParam.clbck,
            titre: this.getTitreSelectRessource({
              genreRessource: aParam.genreRessource,
              singulier: !aParam.avecCoche,
            }),
            genreRessource: aParam.genreRessource,
            listeRessources: aDonnees.listePublic,
            listeRessourcesSelectionnees:
              aParam.listePublicDonnee.getListeElements((aElt) => {
                return aElt.getGenre() === aParam.genreRessource;
              }),
            listeServicesPeriscolaire: aParam.listeServicesPeriscolaire,
            listeProjetsAcc: aParam.listeProjetsAcc,
            listeFamilles: aDonnees.listeFamilles,
            listeNiveauxResponsabilite: aDonnees.listeNiveauxResponsabilite,
            avecCoche: aParam.avecCoche,
            avecFiltreDelegues: aParam.avecFiltreDelegues,
            avecFiltreSelonAcceptRdv: aParam.avecFiltreSelonAcceptRdv,
            avecDirEnseignant: aParam.avecDirEnseignant,
            listeRessourceDesactiver: aParam.listeRessourceDesactiver,
          });
        });
      }
      automatiserSelectionPublic(aParam) {
        this.getDonneesPublic({
          genreRessource: aParam.genreRessource,
          clbck: (aDonnees) => {
            const lListeComplet = aDonnees.listePublic;
            if (aParam.donnee.listePublicIndividu.count() === 0) {
              if (lListeComplet.count() === 1) {
                aParam.donnee.listePublicIndividu =
                  lListeComplet.getListeElements();
                aParam.donnee.avecModificationPublic = true;
                aParam.clbck();
              }
            }
          },
        });
      }
      openModaleSelectPublic(aParam) {
        const lGenreRessource = aParam.genreRessource;
        const lAvecCoche = 'avecCoche' in aParam ? aParam.avecCoche : true;
        const lValeurParDefautAvecFiltreDelegues =
          aParam.genreRessource ===
            Enumere_Ressource_1.EGenreRessource.Responsable &&
          [
            Enumere_Espace_1.EGenreEspace.Parent,
            Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          ].includes(GEtatUtilisateur.GenreEspace);
        const lAvecFiltreDelegues =
          'avecFiltreDelegues' in aParam
            ? aParam.avecFiltreDelegues
            : lValeurParDefautAvecFiltreDelegues;
        const lModaleSelect = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_SelectionPublic_PN_1.ObjetFenetre_SelectionPublic_PN,
          {
            pere: this,
            evenement: function (
              aGenreRessource,
              aListeRessourcesSelect,
              aNumeroBouton,
            ) {
              if (aNumeroBouton === 1) {
                const lPublicAutresGenres =
                  aParam.listePublicDonnee.getListeElements((aElt) => {
                    return aElt.getGenre() !== aGenreRessource;
                  });
                aParam.listePublicDonnee = lPublicAutresGenres;
                aParam.listePublicDonnee.add(
                  MethodesObjet_1.MethodesObjet.dupliquer(
                    aListeRessourcesSelect,
                  ),
                );
                aParam.clbck({
                  listePublicDonnee: aParam.listePublicDonnee,
                  avecModificationPublic: true,
                });
              }
            },
          },
          { titre: aParam.titre },
        );
        const lListeCumuls = new ObjetListeElements_1.ObjetListeElements();
        switch (lGenreRessource) {
          case Enumere_Ressource_1.EGenreRessource.Eleve:
          case Enumere_Ressource_1.EGenreRessource.Responsable: {
            lListeCumuls.addElement(
              new ObjetElement_1.ObjetElement(
                'Classe',
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.classe,
                0,
              ),
            );
            lListeCumuls.addElement(
              new ObjetElement_1.ObjetElement(
                'Groupe',
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.groupe,
                1,
              ),
            );
            lListeCumuls.addElement(
              new ObjetElement_1.ObjetElement(
                'Ordre alphabétique',
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.initial,
                2,
              ),
            );
            if (
              lGenreRessource ===
              Enumere_Ressource_1.EGenreRessource.Responsable
            ) {
              lListeCumuls.addElement(
                new ObjetElement_1.ObjetElement(
                  'Nom des élèves',
                  0,
                  ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.nomEleves,
                ),
              );
            }
            if (aParam.listeServicesPeriscolaire) {
              lListeCumuls.addElement(
                new ObjetElement_1.ObjetElement(
                  'Services périscolaires',
                  0,
                  ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.servicesPeriscolaire,
                ),
              );
            }
            if (aParam.listeProjetsAcc) {
              lListeCumuls.addElement(
                new ObjetElement_1.ObjetElement(
                  'Projets d'accompagnement',
                  0,
                  ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.projetsAccompagnement,
                ),
              );
            }
            if (aParam.listeFamilles) {
              aParam.listeFamilles.parcourir((aFamille) => {
                const lFiltreFamille = new ObjetElement_1.ObjetElement(
                  aFamille.getLibelle(),
                  0,
                  ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.famille,
                );
                lFiltreFamille.famille = aFamille;
                lListeCumuls.addElement(lFiltreFamille);
              });
            }
            lModaleSelect.setListeCumuls(lListeCumuls);
            lModaleSelect.setGenreCumulActif(
              ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
                .classe,
            );
            lModaleSelect.setOptions({
              getInfosSuppZonePrincipale(aParams) {
                return UtilitaireListePublics_1.UtilitaireListePublics.getLibelleSuppListePublics(
                  aParams.article,
                );
              },
            });
            break;
          }
          case Enumere_Ressource_1.EGenreRessource.Personnel:
            lListeCumuls.add(
              new ObjetElement_1.ObjetElement(
                'Ordre alphabétique',
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.sans,
                0,
              ),
            );
            lListeCumuls.add(
              new ObjetElement_1.ObjetElement(
                'Fonction',
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.fonction,
                1,
              ),
            );
            lModaleSelect.setListeCumuls(lListeCumuls);
            lModaleSelect.setGenreCumulActif(
              ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
                .fonction,
            );
            lModaleSelect.setOptions({
              getInfosSuppZonePrincipale(aParams) {
                return lModaleSelect.getGenreCumul() !==
                  ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
                    .fonction
                  ? UtilitaireMessagerie_1.UtilitaireMessagerie.getLibelleSuppListePublics(
                      aParams.article,
                    )
                  : '';
              },
            });
            break;
          case Enumere_Ressource_1.EGenreRessource.Enseignant:
            lModaleSelect.setOptions({
              getInfosSuppZonePrincipale(aParams) {
                return UtilitaireListePublics_1.UtilitaireListePublics.getLibelleSuppListePublics(
                  aParams.article,
                );
              },
            });
            break;
        }
        lModaleSelect.setListeCumuls(lListeCumuls);
        lModaleSelect.setOptions({
          avecCocheRessources: true,
          selectionObligatoire: false,
          filtres: [],
          avecBarreTitre: false,
          estDeploye: false,
          avecFiltreDelegues: lAvecFiltreDelegues,
          avecFiltreSelonAcceptRdv: aParam.avecFiltreSelonAcceptRdv,
          avecFiltreAucunAccesEspace:
            aParam.avecFiltreAucunAccesEspace !== null &&
            aParam.avecFiltreAucunAccesEspace !== undefined
              ? aParam.avecFiltreAucunAccesEspace
              : false,
          avecDirEnseignant: aParam.avecDirEnseignant,
        });
        lModaleSelect.setOptionsFenetreSelectionRessource({
          listeRessourceDesactiver: aParam.listeRessourceDesactiver,
        });
        if (!lAvecCoche) {
          lModaleSelect.setOptionsFenetreSelectionRessource({
            optionsDonneesListe: {
              avecCB: false,
              avecSelection: true,
              avecEvnt_Selection: true,
            },
            avecCocheRessources: false,
          });
          lModaleSelect.setOptionsFenetre({
            listeBoutons: [
              {
                libelle: 'Fermer',
                theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
              },
            ],
          });
        }
        lModaleSelect.setDonnees({
          listeRessources: aParam.listeRessources,
          listeRessourcesSelectionnees: aParam.listeRessourcesSelectionnees,
          genreRessource: aParam.genreRessource,
          titre: aParam.titre,
          listeNiveauxResponsabilite: aParam.listeNiveauxResponsabilite,
        });
      }
      construireHtmlDestRespToResp(aParam) {
        const H = [];
        H.push(
          '<div ie-node="',
          aParam.node,
          '()" class="itemDest flex-contain conteneurIcon">',
        );
        H.push(IE.jsx.str('i', { role: 'presentation', class: 'icon_group' }));
        H.push(
          '<div class="strIcon">',
          'Responsables des classes',
          ' <span class="strNumber" id="',
          aParam.idCompteur,
          '"> (0) </span></div>',
        );
        H.push(
          IE.jsx.str('i', { role: 'presentation', class: 'icon_angle_right' }),
        );
        H.push('</div>');
        return H.join('');
      }
      construireHtmlDestPrimaireRespClasses(aParam) {
        const H = [];
        H.push(
          '<div ie-node="',
          aParam.node,
          '(',
          Enumere_Ressource_1.EGenreRessource.Classe,
          ')" class="itemDest flex-contain conteneurIcon">',
        );
        H.push(IE.jsx.str('i', { role: 'presentation', class: 'icon_group' }));
        H.push(
          '<div class="strIcon">',
          'Responsables des classes',
          ' <span class="strNumber" id="',
          aParam.idCompteur,
          '"> (0) </span></div>',
        );
        H.push(
          IE.jsx.str('i', { role: 'presentation', class: 'icon_angle_right' }),
        );
        H.push('</div>');
        return H.join('');
      }
      construireHtmlDestPrimaireResponsables(aParam) {
        var _a;
        return _construireHtmlSelectionDeRessource.call(this, {
          node: aParam.node,
          genreRessource: Enumere_Ressource_1.EGenreRessource.Responsable,
          strRessource: 'Responsables',
          idCompteur: aParam.idCompteur,
          ariaLabel:
            (_a = aParam.ariaLabel) !== null && _a !== void 0
              ? _a
              : 'Sélectionnez un responsable',
        });
      }
      construireHtmlDestPrimaireProfs(aParam) {
        var _a;
        return _construireHtmlSelectionDeRessource.call(this, {
          node: aParam.node,
          genreRessource: Enumere_Ressource_1.EGenreRessource.Enseignant,
          strRessource: 'Professeurs',
          idCompteur: aParam.idCompteur,
          ariaLabel:
            (_a = aParam.ariaLabel) !== null && _a !== void 0
              ? _a
              : 'Sélectionnez un professeur',
        });
      }
      construireHtmlDestPrimairePersonnels(aParam) {
        var _a;
        return _construireHtmlSelectionDeRessource.call(this, {
          node: aParam.node,
          genreRessource: Enumere_Ressource_1.EGenreRessource.Personnel,
          strRessource: 'Personnels',
          idCompteur: aParam.idCompteur,
          ariaLabel:
            (_a = aParam.ariaLabel) !== null && _a !== void 0
              ? _a
              : 'Sélectionnez un personnel',
        });
      }
      construireHtmlDestPrimaireDirecteur(aParam) {
        const H = [];
        H.push(
          '<ie-checkbox class="itemDest" ie-model="',
          aParam.node,
          '()">',
          aParam.str,
          '</ie-checkbox>',
        );
        return H.join('');
      }
      surSelectEntitesPrimaireRespClasses(aParam) {
        if (!this.applicationSco.getEtatUtilisateur().pourPrimaire()) {
          return;
        }
        const lDonnee = aParam.donnee;
        const lNbClasses = lDonnee.listePublicEntite
          .getListeElements((D) => {
            return D.getGenre() === Enumere_Ressource_1.EGenreRessource.Classe;
          })
          .getNbrElementsExistes();
        const lEstCoche = lDonnee.genresPublicEntite.contains(
          TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
            .InternetIndividu_Parent,
        );
        if (lNbClasses > 0) {
          if (!lEstCoche) {
            lDonnee.genresPublicEntite.add(
              TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
                .InternetIndividu_Parent,
            );
          }
        } else {
          if (lEstCoche) {
            lDonnee.genresPublicEntite.remove(
              TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
                .InternetIndividu_Parent,
            );
          }
        }
      }
    }
    exports.MoteurDestinatairesPN = MoteurDestinatairesPN;
    function _toInternetIndividu(aGenreRessource, aRelatifEleve) {
      switch (aGenreRessource) {
        case Enumere_Ressource_1.EGenreRessource.Enseignant:
          return TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
            .InternetIndividu_Professeur;
        case Enumere_Ressource_1.EGenreRessource.Eleve:
          return TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
            .InternetIndividu_Eleve;
        case Enumere_Ressource_1.EGenreRessource.Responsable:
          return aRelatifEleve
            ? TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
                .InternetIndividu_ParentEleve
            : TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
                .InternetIndividu_Parent;
        case Enumere_Ressource_1.EGenreRessource.MaitreDeStage:
          return TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
            .InternetIndividu_MaitreDeStageEleve;
        case Enumere_Ressource_1.EGenreRessource.Personnel:
          return TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
            .InternetIndividu_Personnel;
      }
    }
    function _construireHtmlSelectionDeRessource(aParam) {
      return IE.jsx.str(
        'ie-btnselecteur',
        {
          class: 'm-bottom-l',
          'ie-model': 'getSelectRessource',
          'aria-label': aParam.ariaLabel,
          'ie-node': (0, jsx_1.jsxFuncAttr)(aParam.node, [
            aParam.genreRessource,
          ]),
        },
        aParam.strRessource,
        IE.jsx.str('span', { class: 'strNumber', id: aParam.idCompteur }),
      );
    }
  },
  fn: 'moteurdestinatairespn.js',
});