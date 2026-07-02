IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.DonneesListe_PanierRessourceKiosque = void 0;
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetDonneesListe_1 = require('@cp/script/ObjetDonneesListe');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const TypeGenreApiKiosque_1 = require('@scolys/espace/script/enumere/TypeGenreApiKiosque');
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    class DonneesListe_PanierRessourceKiosque extends ObjetDonneesListe_1.ObjetDonneesListe {
      constructor(aParam) {
        super(aParam.donnees);
        this.callbackLien = aParam.callbackLien;
        this.setOptions({
          avecEvnt_Selection: true,
          avecEtatSaisie: false,
          avecEvnt_Creation: true,
          avecEvnt_Suppression: true,
          avecDeploiement: true,
          avecEventDeploiementSurCellule: false,
          avecMultiSelection: !!aParam.avecMultiSelection,
        });
      }
      avecEdition(aParams) {
        if (!aParams.article.estUnDeploiement) {
          return [
            DonneesListe_PanierRessourceKiosque.colonnes.coche,
            DonneesListe_PanierRessourceKiosque.colonnes.titre,
            DonneesListe_PanierRessourceKiosque.colonnes.commentaire,
          ].includes(aParams.idColonne);
        } else {
          return false;
        }
      }
      avecSuppression(aParams) {
        return !aParams.article.estUnDeploiement;
      }
      avecSelection(aParams) {
        return (
          !aParams.article.estUnDeploiement &&
          aParams.idColonne !==
            DonneesListe_PanierRessourceKiosque.colonnes.lien
        );
      }
      avecEvenementApresEdition(aParams) {
        return (
          !aParams.article.estUnDeploiement &&
          [
            DonneesListe_PanierRessourceKiosque.colonnes.coche,
            DonneesListe_PanierRessourceKiosque.colonnes.titre,
            DonneesListe_PanierRessourceKiosque.colonnes.commentaire,
          ].includes(aParams.idColonne)
        );
      }
      avecMenuContextuel(aParams) {
        return !!aParams.article && !aParams.article.estUnDeploiement;
      }
      avecDeploiementSurColonne(aParams) {
        return [
          DonneesListe_PanierRessourceKiosque.colonnes.coche,
          DonneesListe_PanierRessourceKiosque.colonnes.titre,
        ].includes(aParams.idColonne);
      }
      avecImageSurColonneDeploiement(aParams) {
        return (
          aParams.idColonne ===
          DonneesListe_PanierRessourceKiosque.colonnes.titre
        );
      }
      getTri() {
        return [
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init('Genre'),
            ObjetTri_1.ObjetTri.init((aElement) => {
              return aElement.Libelle;
            }),
          ]),
        ];
      }
      getColonneDeFusion(aParams) {
        if (!aParams.article.estUnDeploiement) {
          return;
        }
        if (
          [
            DonneesListe_PanierRessourceKiosque.colonnes.coche,
            DonneesListe_PanierRessourceKiosque.colonnes.lien,
            DonneesListe_PanierRessourceKiosque.colonnes.commentaire,
            DonneesListe_PanierRessourceKiosque.colonnes.dateAjout,
            DonneesListe_PanierRessourceKiosque.colonnes.api,
          ].includes(aParams.idColonne)
        ) {
          return DonneesListe_PanierRessourceKiosque.colonnes.titre;
        }
      }
      getValeur(aParams) {
        const lResult = [];
        switch (aParams.idColonne) {
          case DonneesListe_PanierRessourceKiosque.colonnes.coche:
            return aParams.article.estSelectionne;
          case DonneesListe_PanierRessourceKiosque.colonnes.titre:
            if (!!aParams.article) {
              if (!!aParams.article.estUnDeploiement) {
                const lnodeLien = (aNode) => {
                  $(aNode).on('validation', () => {
                    if (
                      !!aParams.article &&
                      !!aParams.article.ressource &&
                      this.callbackLien
                    ) {
                      this.callbackLien(
                        aParams.article.ressource.getGenre() ||
                          Enumere_Ressource_1.TypeHttpRessource
                            .HttpRessource_RessourceNumeriqueKiosque,
                      );
                    }
                  });
                };
                lResult.push(
                  IE.jsx.str(
                    IE.jsx.fragment,
                    null,
                    '\u00A0',
                    IE.jsx.str(
                      'span',
                      { ie_node: lnodeLien },
                      UtilitaireUrl_1.UtilitaireUrl.composerUrlLienExterne({
                        documentJoint: aParams.article.ressource,
                        title: aParams.article.ressource.description,
                        libelleEcran: aParams.article.ressource.titre,
                      }),
                    ),
                  ),
                );
              } else {
                lResult.push(aParams.article.ressource.getLibelle());
              }
            }
            return lResult.join('');
          case DonneesListe_PanierRessourceKiosque.colonnes.lien:
            return !!aParams.article.ressource
              ? UtilitaireUrl_1.UtilitaireUrl.composerUrlLienExterne({
                  documentJoint: aParams.article.ressource,
                  title: aParams.article.ressource.description,
                  libelleEcran: '',
                })
              : '';
          case DonneesListe_PanierRessourceKiosque.colonnes.commentaire:
            if (!!aParams.article.estUnDeploiement) {
              return '';
            }
            return !!aParams.article.ressource
              ? aParams.article.ressource.commentaire
              : '';
          case DonneesListe_PanierRessourceKiosque.colonnes.dateAjout:
            if (!!aParams.article.estUnDeploiement) {
              return '';
            }
            return !!aParams.article.ressource
              ? aParams.article.ressource.strdate
              : '';
          case DonneesListe_PanierRessourceKiosque.colonnes.api:
            if (!!aParams.article.estUnDeploiement) {
              return '';
            }
            if (
              !!aParams.article.ressource &&
              !!aParams.article.ressource.apiSupport
            ) {
              if (
                aParams.article.ressource.apiSupport.contains(
                  TypeGenreApiKiosque_1.TypeGenreApiKiosque.Api_AjoutPanier,
                )
              ) {
                lResult.push('P ');
              }
              if (
                aParams.article.ressource.apiSupport.contains(
                  TypeGenreApiKiosque_1.TypeGenreApiKiosque.Api_RenduPJTAF,
                )
              ) {
                lResult.push('R ');
              }
              if (
                aParams.article.ressource.apiSupport.contains(
                  TypeGenreApiKiosque_1.TypeGenreApiKiosque.Api_EnvoiNote,
                )
              ) {
                lResult.push('N ');
              }
            }
            return lResult.join('');
          case DonneesListe_PanierRessourceKiosque.colonnes.envoiNote:
            return aParams.article &&
              aParams.article.ressource &&
              aParams.article.ressource.apiSupport
              ? aParams.article.ressource.apiSupport.contains(
                  TypeGenreApiKiosque_1.TypeGenreApiKiosque.Api_EnvoiNote,
                )
              : false;
          case DonneesListe_PanierRessourceKiosque.colonnes.renduTAF: {
            return aParams.article &&
              aParams.article.ressource &&
              aParams.article.ressource.apiSupport
              ? aParams.article.ressource.apiSupport.contains(
                  TypeGenreApiKiosque_1.TypeGenreApiKiosque.Api_RenduPJTAF,
                )
              : false;
          }
          default:
            return '';
        }
      }
      getTooltip(aParams) {
        if (
          aParams.idColonne ===
            DonneesListe_PanierRessourceKiosque.colonnes.lien &&
          !!aParams.article.ressource
        ) {
          return 'Accéder au lien en ligne';
        }
        return '';
      }
      getLibelleDraggable(aParams) {
        return aParams.article.ressource.getLibelle();
      }
      getTypeValeur(aParams) {
        switch (aParams.idColonne) {
          case DonneesListe_PanierRessourceKiosque.colonnes.coche:
            if (!aParams.article.estUnDeploiement) {
              return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche;
            }
            return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte;
          case DonneesListe_PanierRessourceKiosque.colonnes.envoiNote:
          case DonneesListe_PanierRessourceKiosque.colonnes.renduTAF:
            return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche;
          case DonneesListe_PanierRessourceKiosque.colonnes.lien:
          case DonneesListe_PanierRessourceKiosque.colonnes.titre:
            return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Html;
          default:
            return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte;
        }
      }
      surEdition(aParams, aValeur) {
        if (
          aParams.idColonne ===
            DonneesListe_PanierRessourceKiosque.colonnes.coche &&
          !aParams.article.estUnDeploiement
        ) {
          if (!!aValeur && !this.options.avecMultiSelection) {
            this.Donnees.parcourir((aElement) => {
              aElement.estSelectionne = false;
            });
          }
          aParams.article.estSelectionne = aValeur;
        }
        if (!aParams.article.estUnDeploiement) {
          switch (aParams.idColonne) {
            case DonneesListe_PanierRessourceKiosque.colonnes.coche:
              if (!!aValeur && !this.options.avecMultiSelection) {
                this.Donnees.parcourir((aElement) => {
                  aElement.estSelectionne = false;
                });
              }
              aParams.article.estSelectionne = aValeur;
              break;
            case DonneesListe_PanierRessourceKiosque.colonnes.titre:
              aParams.article.ressource.setLibelle(aValeur);
              aParams.article.ressource.setEtat(
                Enumere_Etat_1.EGenreEtat.Modification,
              );
              aParams.article.setEtat(
                Enumere_Etat_1.EGenreEtat.FilsModification,
              );
              break;
            case DonneesListe_PanierRessourceKiosque.colonnes.commentaire:
              aParams.article.ressource.commentaire = aValeur;
              aParams.article.ressource.setEtat(
                Enumere_Etat_1.EGenreEtat.Modification,
              );
              aParams.article.setEtat(
                Enumere_Etat_1.EGenreEtat.FilsModification,
              );
              break;
          }
        }
      }
    }
    exports.DonneesListe_PanierRessourceKiosque =
      DonneesListe_PanierRessourceKiosque;
    (function (DonneesListe_PanierRessourceKiosque) {
      let colonnes;
      (function (colonnes) {
        colonnes['coche'] = 'panierKiosque_Coche';
        colonnes['titre'] = 'panierKiosque_Titre';
        colonnes['lien'] = 'panierKiosque_Lien';
        colonnes['commentaire'] = 'panierKiosque_Commentaire';
        colonnes['dateAjout'] = 'panierKiosque_DateAjout';
        colonnes['api'] = 'panierKiosque_API';
        colonnes['renduTAF'] = 'panierKiosque_RenduTAF';
        colonnes['envoiNote'] = 'panierKiosque_EnvoiNote';
      })(
        (colonnes =
          DonneesListe_PanierRessourceKiosque.colonnes ||
          (DonneesListe_PanierRessourceKiosque.colonnes = {})),
      );
      let genreCommande;
      (function (genreCommande) {
        genreCommande[(genreCommande['VisuEleve'] = 0)] = 'VisuEleve';
        genreCommande[(genreCommande['CopierQCM'] = 1)] = 'CopierQCM';
      })(
        (genreCommande =
          DonneesListe_PanierRessourceKiosque.genreCommande ||
          (DonneesListe_PanierRessourceKiosque.genreCommande = {})),
      );
    })(
      DonneesListe_PanierRessourceKiosque ||
        (exports.DonneesListe_PanierRessourceKiosque =
          DonneesListe_PanierRessourceKiosque =
            {}),
    );
  },
  fn: 'donneesliste_panierressourcekiosque.js',
});