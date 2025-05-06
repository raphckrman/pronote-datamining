IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteListePublics = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const TypeEnsembleNombre_1 = require('TypeEnsembleNombre');
    const Cache_1 = require('Cache');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetElement_1 = require('ObjetElement');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const TypeGenreNiveauResponsabilite_1 = require('TypeGenreNiveauResponsabilite');
    const MethodesObjet_1 = require('MethodesObjet');
    class ObjetRequeteListePublics extends ObjetRequeteJSON_1.ObjetRequeteConsultation {
      lancerRequete(aParam) {
        this.genres = aParam.genres;
        this.sansFiltreSurEleve = aParam.sansFiltreSurEleve || false;
        this.entreResponsables = aParam.entreResponsables;
        this.pourMessagerie = aParam.pourMessagerie;
        this.JSON = {
          genres: new TypeEnsembleNombre_1.TypeEnsembleNombre().add(
            aParam.genres,
          ),
          pourMessagerie: aParam.pourMessagerie,
          sansFiltreSurEleve: this.sansFiltreSurEleve,
          avecFonctionPersonnel: aParam.avecFonctionPersonnel || false,
          avecFiltreDelegues: aParam.avecFiltreDelegues,
          classe: aParam.classe,
          eleve: aParam.eleve,
          avecInfoRencontresSepareesDesResponsables:
            !!aParam.avecInfoRencontresSepareesDesResponsables,
          avecInfoResponsablePreferentiel:
            !!aParam.avecInfoResponsablePreferentiel,
        };
        const lCleCache = this._getCle();
        if (
          this.pourMessagerie &&
          Cache_1.GCache &&
          Cache_1.GCache.general._jetonViderCacheMessagerie &&
          Cache_1.GCache.general.existeDonnee(lCleCache)
        ) {
          delete Cache_1.GCache.general._jetonViderCacheMessagerie;
          Cache_1.GCache.general.vider(lCleCache);
        }
        if (
          Cache_1.GCache &&
          Cache_1.GCache.general._jetonViderCacheListePublics &&
          Cache_1.GCache.general.existeDonnee(lCleCache)
        ) {
          delete Cache_1.GCache.general._jetonViderCacheListePublics;
          Cache_1.GCache.general.vider(lCleCache);
        }
        if (Cache_1.GCache && Cache_1.GCache.general.existeDonnee(lCleCache)) {
          return new Promise((aResolve, aReject) => {
            this.reussitePromesse = aResolve;
            this.echecPromesse = aReject;
            this.executerCallbackReussite(
              aParam.genres,
              Cache_1.GCache.general.getDonnee(lCleCache),
            );
          });
        } else {
          return this.appelAsynchrone();
        }
      }
      _getCle() {
        return `listePublic_${this.genres.sort().join('_')}${this.sansFiltreSurEleve}_${this.entreResponsables}_${!!this.pourMessagerie}`;
      }
      actionApresRequete() {
        if (Cache_1.GCache) {
          Cache_1.GCache.general.setDonnee(this._getCle(), this.JSONReponse);
        }
        this.executerCallbackReussite(this.genres, this.JSONReponse);
      }
      executerCallbackReussite(aGenres, aDonneesJSON) {
        if (aDonneesJSON.listeFamilles) {
          if (aDonneesJSON.listePublics) {
            aDonneesJSON.listePublics.parcourir((aPublic) => {
              if (
                aPublic.listeNumerosSousFamille &&
                aPublic.listeNumerosSousFamille.length > 0
              ) {
                for (
                  let i = 0;
                  i < aPublic.listeNumerosSousFamille.length;
                  i++
                ) {
                  const lNumeroSousFamilleRecherche =
                    aPublic.listeNumerosSousFamille[i].N;
                  const lGenreSousFamilleRecherche =
                    aPublic.listeNumerosSousFamille[i].G;
                  const lObjFamilleSousFamilleTrouve =
                    this._getFamilleEtSousFamille(
                      aDonneesJSON.listeFamilles,
                      lNumeroSousFamilleRecherche,
                      lGenreSousFamilleRecherche,
                    );
                  if (
                    lObjFamilleSousFamilleTrouve &&
                    lObjFamilleSousFamilleTrouve.famille
                  ) {
                    if (!aPublic.listeFamilles) {
                      aPublic.listeFamilles =
                        new ObjetListeElements_1.ObjetListeElements();
                    }
                    let lFamilleDePublic =
                      aPublic.listeFamilles.getElementParElement(
                        lObjFamilleSousFamilleTrouve.famille,
                      );
                    if (!lFamilleDePublic) {
                      lFamilleDePublic = new ObjetElement_1.ObjetElement(
                        lObjFamilleSousFamilleTrouve.famille.getLibelle(),
                        lObjFamilleSousFamilleTrouve.famille.getNumero(),
                        lObjFamilleSousFamilleTrouve.famille.getGenre(),
                      );
                      aPublic.listeFamilles.add(lFamilleDePublic);
                    }
                    if (lObjFamilleSousFamilleTrouve.sousFamille) {
                      if (!lFamilleDePublic.listeSousFamilles) {
                        lFamilleDePublic.listeSousFamilles =
                          new ObjetListeElements_1.ObjetListeElements();
                      }
                      let lSousFamilleDePublic =
                        lFamilleDePublic.listeSousFamilles.getElementParElement(
                          lObjFamilleSousFamilleTrouve.sousFamille,
                        );
                      if (!lSousFamilleDePublic) {
                        lSousFamilleDePublic = new ObjetElement_1.ObjetElement(
                          lObjFamilleSousFamilleTrouve.sousFamille.getLibelle(),
                          lObjFamilleSousFamilleTrouve.sousFamille.getNumero(),
                          lObjFamilleSousFamilleTrouve.sousFamille.getGenre(),
                        );
                        lFamilleDePublic.listeSousFamilles.add(
                          lSousFamilleDePublic,
                        );
                      }
                    }
                  }
                }
              }
            });
          }
        }
        if (aDonneesJSON.niveauResponsabilite) {
          if (aDonneesJSON.listePublics) {
            const lNiveauLegal =
              aDonneesJSON.niveauResponsabilite.getElementParGenre(
                TypeGenreNiveauResponsabilite_1.TypeGenreNiveauResponsabilite
                  .gnrLegal,
              );
            aDonneesJSON.listePublics.parcourir((aPublic) => {
              if (
                aPublic.getGenre() ===
                  Enumere_Ressource_1.EGenreRessource.Responsable &&
                aPublic.eleves
              ) {
                let lNiveauResponsable;
                aPublic.eleves.parcourir((aEleve) => {
                  if (aEleve.nr === undefined) {
                    aEleve.niveauResponsabilite = lNiveauLegal;
                    if (
                      !lNiveauResponsable ||
                      lNiveauResponsable.getGenre() > lNiveauLegal.getGenre() ||
                      lNiveauResponsable.getGenre() ===
                        TypeGenreNiveauResponsabilite_1
                          .TypeGenreNiveauResponsabilite.gnrAucun
                    ) {
                      lNiveauResponsable = lNiveauLegal;
                    }
                  } else {
                    const lNiveau =
                      aDonneesJSON.niveauResponsabilite.getElementParGenre(
                        aEleve.nr,
                      );
                    if (!!lNiveau) {
                      aEleve.niveauResponsabilite = lNiveau;
                    }
                    if (
                      !lNiveauResponsable ||
                      lNiveauResponsable.getGenre() > lNiveau.getGenre() ||
                      lNiveauResponsable.getGenre() ===
                        TypeGenreNiveauResponsabilite_1
                          .TypeGenreNiveauResponsabilite.gnrAucun
                    ) {
                      lNiveauResponsable = lNiveau;
                    }
                  }
                });
                if (lNiveauResponsable) {
                  aPublic.niveauResponsabilite = lNiveauResponsable;
                }
              }
            });
          }
          aDonneesJSON.niveauResponsabilite.parcourir(
            (aNiveauResponsabilite) => {
              aNiveauResponsabilite.actif =
                TypeGenreNiveauResponsabilite_1.TypeGenreNiveauResponsabiliteUtil.estFiltreParDefautActif(
                  aNiveauResponsabilite.getGenre(),
                );
            },
          );
        }
        if (aDonneesJSON.listePublics) {
          aDonneesJSON.listePublics.parcourir((aPublic) => {
            if (aPublic.eleves) {
              const lListeClasses =
                new ObjetListeElements_1.ObjetListeElements();
              const lListeGroupes =
                new ObjetListeElements_1.ObjetListeElements();
              const lListeElevesResponsablePreferentiel = [];
              aPublic.eleves.parcourir((aEleve) => {
                var _a;
                if (aEleve.classe) {
                  const lMaClasse = lListeClasses.getElementParElement(
                    aEleve.classe,
                  );
                  if (!lMaClasse) {
                    lListeClasses.add(
                      MethodesObjet_1.MethodesObjet.dupliquer(aEleve.classe),
                    );
                  } else if (
                    aEleve.classe.estClasseMN &&
                    ((_a = aEleve.classe.classesNiv) === null || _a === void 0
                      ? void 0
                      : _a.count())
                  ) {
                    for (const lMaClasseNiv of aEleve.classe.classesNiv) {
                      if (
                        !lMaClasse.classesNiv
                          .getTableauNumeros()
                          .includes(lMaClasseNiv.getNumero())
                      ) {
                        lMaClasse.classesNiv.add(lMaClasseNiv);
                      }
                    }
                  }
                }
                if (aEleve.groupes) {
                  aEleve.groupes.parcourir((aGroupe) => {
                    if (!lListeGroupes.getElementParElement(aGroupe)) {
                      lListeGroupes.add(aGroupe);
                    }
                  });
                }
                if (aEleve.estPreferentiel) {
                  lListeElevesResponsablePreferentiel.push(aEleve.getNumero());
                  delete aEleve.estPreferentiel;
                }
              });
              aPublic.classes = lListeClasses;
              aPublic.groupes = lListeGroupes;
              if (lListeElevesResponsablePreferentiel.length > 0) {
                aPublic.listeNumElevesResponsablePreferentiel =
                  lListeElevesResponsablePreferentiel;
              }
            }
          });
        }
        this.callbackReussite.appel({
          genres: aGenres,
          listePublic: aDonneesJSON.listePublics,
          listeFamilles: aDonneesJSON.listeFamilles,
          listeServicesPeriscolaire: aDonneesJSON.listeServicesPeriscolaire,
          listeProjetsAcc: aDonneesJSON.listeProjetsAcc,
          listeNiveauxResponsabilite: aDonneesJSON.niveauResponsabilite,
        });
      }
      _getFamilleEtSousFamille(
        aListeFamilles,
        aNumeroSousFamille,
        aGenreSousFamille,
      ) {
        const lResult = { famille: null, sousFamille: null };
        if (aListeFamilles) {
          aListeFamilles.parcourir((aFamille) => {
            if (aFamille.listeSousFamilles) {
              aFamille.listeSousFamilles.parcourir((aSousFamille) => {
                if (
                  aSousFamille.egalParNumeroEtGenre(
                    aNumeroSousFamille,
                    aGenreSousFamille,
                  )
                ) {
                  lResult.sousFamille = aSousFamille;
                  return false;
                }
              });
              if (lResult.sousFamille) {
                lResult.famille = aFamille;
                return false;
              }
            }
          });
        }
        return lResult;
      }
    }
    exports.ObjetRequeteListePublics = ObjetRequeteListePublics;
    CollectionRequetes_1.Requetes.inscrire(
      'ListePublics',
      ObjetRequeteListePublics,
    );
  },
  fn: 'objetrequetelistepublics.js',
});