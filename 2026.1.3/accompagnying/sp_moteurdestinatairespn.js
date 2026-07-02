IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.MoteurDestinatairesPN = void 0;
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const TypeGenreInternetIndividu_1 = require('@scolys/produit/script/enumere/TypeGenreInternetIndividu');
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const ObjetRequeteListePublics_1 = require('@scolys/produit/script/requete/ObjetRequeteListePublics');
    const ObjetFenetre_SelectionClasseGroupe_1 = require('@scolys/produit/script/ObjetFenetre_SelectionClasseGroupe');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetFenetre_SelectionPublic_1 = require('@cp/Espace/Script/Fenetres/ObjetFenetre_SelectionPublic');
    const ObjetFenetre_SelectionPublic_PN_1 = require('@scolys/espace/script/ObjetFenetre_SelectionPublic_PN');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const UtilitaireMessagerie_1 = require('@scolys/produit/script/utilitaire/UtilitaireMessagerie');
    const UtilitaireListePublics_1 = require('@scolys/produit/script/utilitaire/UtilitaireListePublics');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const IEHtml_BtnSelecteur_1 = require('@cp/Produit/Script/IEHtml.BtnSelecteur');
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
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable:
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
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable
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
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable:
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
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable:
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
          Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
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
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable &&
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
        return Enumere_Ressource_1.TypeHttpRessourceUtil.getTitreFenetreSelectionRessource(
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
          lGenreRessource ===
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Classe;
        const lListeClassesGroupes = this.applicationSco
          .getEtatUtilisateur()
          .getListeClasses({
            avecClasse: lAvecClasse,
            avecGroupe:
              lGenreRessource ===
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Groupe,
            uniquementClasseEnseignee: [
              Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
              Enumere_Espace_1.TypeGenreEspace.Mobile_Professeur,
            ].includes(GEtatUtilisateur.GenreEspace)
              ? !this.applicationSco.droits.get(
                  ObjetDroitsPN_1.TypeDroits.communication.toutesClasses,
                )
              : false,
          });
        const lTitre =
          lGenreRessource ===
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Classe
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
            Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
            Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
          ].includes(GEtatUtilisateur.GenreEspace) &&
          aParam.genreRessource ===
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable;
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
            avecBoutonListeDiffusion: aParam.avecBoutonListeDiffusion,
            selectionCumul: aParam.selectionCumul,
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
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable &&
          [
            Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
            Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
          ].includes(GEtatUtilisateur.GenreEspace);
        const lAvecFiltreDelegues =
          'avecFiltreDelegues' in aParam
            ? aParam.avecFiltreDelegues
            : lValeurParDefautAvecFiltreDelegues;
        const lAvecSelectionCumul =
          'selectionCumul' in aParam ? aParam.selectionCumul : true;
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
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve:
          case Enumere_Ressource_1.TypeHttpRessource
            .HttpRessource_Responsable: {
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
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable
            ) {
              lListeCumuls.addElement(
                new ObjetElement_1.ObjetElement(
                  'Nom des élèves',
                  0,
                  ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.nomEleves,
                ),
              );
              lListeCumuls.addElement(
                new ObjetElement_1.ObjetElement(
                  'Régime des élèves',
                  0,
                  ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.regimeEleve,
                ),
              );
              lListeCumuls.addElement(
                new ObjetElement_1.ObjetElement(
                  'Autorisation de sortie des élèves',
                  0,
                  ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.autorisationsDeSortieEleve,
                ),
              );
            }
            if (
              lGenreRessource ===
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve
            ) {
              lListeCumuls.addElement(
                new ObjetElement_1.ObjetElement(
                  'Régime de demi-pension',
                  0,
                  ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.regime,
                ),
              );
              lListeCumuls.addElement(
                new ObjetElement_1.ObjetElement(
                  'Autorisation de sortie',
                  0,
                  ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.autorisationsDeSortie,
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
            lModaleSelect.setOptionsFenetreSelectionRessource({
              getInfosSuppZonePrincipale(aParams) {
                return UtilitaireListePublics_1.UtilitaireListePublics.getLibelleSuppListePublics(
                  aParams.article,
                );
              },
            });
            break;
          }
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
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
            lModaleSelect.setOptionsFenetreSelectionRessource({
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
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
            lModaleSelect.setOptionsFenetreSelectionRessource({
              getInfosSuppZonePrincipale(aParams) {
                return UtilitaireListePublics_1.UtilitaireListePublics.getLibelleSuppListePublics(
                  aParams.article,
                );
              },
            });
            break;
        }
        lModaleSelect.setListeCumuls(lListeCumuls);
        lModaleSelect.setOptionsFenetreSelectionRessource({
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
          selectionCumul: lAvecSelectionCumul,
        });
        lModaleSelect.setOptionsFenetreSelectionRessource({
          listeRessourceDesactiver: aParam.listeRessourceDesactiver,
        });
        if (aParam.avecBoutonListeDiffusion) {
          lModaleSelect.setAvecListeDiffusion(true);
        }
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
          IE.jsx.str(
            'div',
            {
              ie_node: aParam.node,
              class: 'itemDest flex-contain conteneurIcon',
            },
            IE.jsx.str('i', { role: 'presentation', class: 'icon_group' }),
            IE.jsx.str(
              'div',
              { class: 'strIcon' },
              'Responsables des classes',
              ' ',
              IE.jsx.str(
                'span',
                { class: 'strNumber', id: aParam.idCompteur },
                ' (0) ',
              ),
            ),
            IE.jsx.str('i', {
              role: 'presentation',
              class: 'icon_angle_right',
            }),
          ),
        );
        return H.join('');
      }
      construireHtmlDestPrimaireResponsables(aParam) {
        var _a;
        return _construireHtmlSelectionDeRessource.call(this, {
          modelSelect: aParam.modelSelecteur(
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
          ),
          strRessource: 'Responsables',
          idCompteur: aParam.idCompteur,
          ariaLabel:
            (_a = aParam.ariaLabel) !== null && _a !== void 0
              ? _a
              : 'Sélectionner un responsable',
        });
      }
      construireHtmlDestPrimaireProfs(aParam) {
        var _a;
        return _construireHtmlSelectionDeRessource.call(this, {
          modelSelect: aParam.modelSelecteur(
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
          ),
          strRessource: 'Professeurs',
          idCompteur: aParam.idCompteur,
          ariaLabel:
            (_a = aParam.ariaLabel) !== null && _a !== void 0
              ? _a
              : 'Sélectionner un professeur',
        });
      }
      construireHtmlDestPrimairePersonnels(aParam) {
        var _a;
        return _construireHtmlSelectionDeRessource.call(this, {
          modelSelect: aParam.modelSelecteur(
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
          ),
          strRessource: 'Personnels',
          idCompteur: aParam.idCompteur,
          ariaLabel:
            (_a = aParam.ariaLabel) !== null && _a !== void 0
              ? _a
              : 'Sélectionner un personnel',
        });
      }
      construireHtmlDestPrimaireDirecteur(aLibelle, aJsxModelCheckbox) {
        const H = [];
        H.push(
          IE.jsx.str(
            IEHtml_CheckboxRadio_1.Checkbox,
            { class: 'itemDest', ie_model: aJsxModelCheckbox },
            aLibelle,
          ),
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
            return (
              D.getGenre() ===
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Classe
            );
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
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
          return TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
            .InternetIndividu_Professeur;
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve:
          return TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
            .InternetIndividu_Eleve;
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable:
          return aRelatifEleve
            ? TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
                .InternetIndividu_ParentEleve
            : TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
                .InternetIndividu_Parent;
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_MaitreDeStage:
          return TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
            .InternetIndividu_MaitreDeStageEleve;
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
          return TypeGenreInternetIndividu_1.TypeGenreInternetIndividu
            .InternetIndividu_Personnel;
      }
    }
    function _construireHtmlSelectionDeRessource(aParam) {
      return IE.jsx.str(
        IEHtml_BtnSelecteur_1.BtnSelecteur,
        {
          class: 'm-bottom-l',
          ie_model: aParam.modelSelect,
          'aria-label': aParam.ariaLabel,
        },
        aParam.strRessource,
        IE.jsx.str('span', { class: 'strNumber', id: aParam.idCompteur }),
      );
    }
  },
  fn: 'moteurdestinatairespn.js',
});