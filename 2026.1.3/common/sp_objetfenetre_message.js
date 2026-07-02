IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_Message = void 0;
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const ObjetSelecteurPJ_1 = require('@scolys/espace/script/ObjetSelecteurPJ');
    const TypeHttpNotificationDonnes_1 = require('@scolys/produit/script/enumere/TypeHttpNotificationDonnes');
    const UtilitaireMessagerie_1 = require('@scolys/produit/script/utilitaire/UtilitaireMessagerie');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const TinyInit_1 = require('@cp/tiny/TinyInit');
    const MoteurMessagerie_1 = require('@scolys/produit/script/utilitaire/MoteurMessagerie');
    const ObjetDestinatairesMessagerie_1 = require('@scolys/espace/script/ObjetDestinatairesMessagerie');
    const ObjetFenetre_SelectionPublic_1 = require('@cp/Espace/Script/Fenetres/ObjetFenetre_SelectionPublic');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IconeSvgSignature_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgSignature');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    class ObjetFenetre_Message extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.idEntete = GUID_1.GUID.getId();
        this.idCopieAutresResp = GUID_1.GUID.getId();
        this.idContenuMsg = GUID_1.GUID.getId();
        this.id_destinataires_conteneur = GUID_1.GUID.getId();
        this.id_destinataires = GUID_1.GUID.getId();
        this.idTypesDestinataire = {
          eleve: 1,
          responsable1: 2,
          responsable2: 3,
          profsprincipaux: 4,
          tuteurs: 5,
          equipePedagogique: 6,
        };
        this.idDiscussion = GUID_1.GUID.getId();
        this.idLibellePJ = GUID_1.GUID.getId();
        this.idLibelleCloud = GUID_1.GUID.getId();
        this.estAvecDirecteur = false;
        this.estAvecEnseignant = false;
        this.applicationSco = (0, AccessApp_1.getApp)();
        this.etatUtilisateurSco = this.applicationSco.getEtatUtilisateur();
        this.setOptionsFenetre({
          titre: 'Nouvelle discussion',
          largeur: 630,
          avecTailleSelonContenu: true,
          listeBoutons: [
            {
              libelle: 'Annuler',
              theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
            },
            {
              libelle: 'Envoyer',
              theme: Type_ThemeBouton_1.TypeThemeBouton.primaire,
            },
          ],
          avecPieceJointe:
            UtilitaireMessagerie_1.UtilitaireMessagerie.avecAjoutPieceJointeMessage(),
          avecTiny:
            UtilitaireMessagerie_1.UtilitaireMessagerie.avecEditeurTiny(),
          avecSauvegardeBrouillon: false,
        });
        this.moteurMessagerie =
          new MoteurMessagerie_1.MoteurMessagerie().setOptions({
            instance: this,
            avecTiny: this.optionsFenetre.avecTiny,
          });
      }
      jsxModeleCheckboxDestProfsUniquement(aNumeroArticle, aGenre) {
        return {
          getValue: () => {
            return !!this.listeSelectionDestProfsUniquement.getElementParNumero(
              aNumeroArticle,
            );
          },
          setValue: (aValue) => {
            if (!aValue) {
              if (this.listeSelectionDestProfsUniquement.count() === 1) {
                return;
              }
              const lIndice =
                this.listeSelectionDestProfsUniquement.getIndiceParNumeroEtGenre(
                  aNumeroArticle,
                );
              if (lIndice >= 0) {
                this.listeSelectionDestProfsUniquement.remove(lIndice);
              }
            } else {
              if (
                !this.listeSelectionDestProfsUniquement.getElementParNumero(
                  aNumeroArticle,
                )
              ) {
                this.listeSelectionDestProfsUniquement.add(
                  new ObjetElement_1.ObjetElement('', aNumeroArticle, aGenre),
                );
              }
            }
          },
        };
      }
      jsxModelCheckboxDirecteur() {
        return {
          getValue: () => {
            return !!this.estAvecDirecteur;
          },
          setValue: (aValue) => {
            this.estAvecDirecteur = aValue;
          },
        };
      }
      jsxCheckboxAvecEnseigantDEleve() {
        return {
          getValue: () => {
            return !!this.estAvecEnseignant;
          },
          setValue: (aValue) => {
            this.estAvecEnseignant = aValue;
          },
        };
      }
      jsxModelBoutonSelectionPersonnel() {
        return {
          event: () => {
            const lFenetreSelectionPublic =
              ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
                ObjetFenetre_SelectionPublic_1.ObjetFenetre_SelectionPublic,
                {
                  pere: this,
                  evenement: function (
                    aGenreRessource,
                    aListeRessourcesSelectionnees,
                    aNumeroBouton,
                  ) {
                    if (aNumeroBouton === 1) {
                      this.param.listeSelectionnee =
                        aListeRessourcesSelectionnees;
                    }
                  },
                  initialiser: function (aInstance) {
                    const lListeCumuls =
                      new ObjetListeElements_1.ObjetListeElements();
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
                    aInstance.setListeCumuls(lListeCumuls);
                    aInstance.setOptionsFenetreSelectionRessource({
                      avecCocheRessources: true,
                    });
                  },
                },
              );
            lFenetreSelectionPublic.setDonnees({
              listeRessources: this.param.ListeRessources,
              listeRessourcesSelectionnees: this.param.listeSelectionnee,
              genreRessource:
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
              titre:
                Enumere_Ressource_1.TypeHttpRessourceUtil.getTitreFenetreSelectionRessource(
                  Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
                ),
            });
          },
        };
      }
      jsxGetHtmlObjetMessage() {
        return this.message && this.message.objet
          ? this.message.objet || ''
          : '';
      }
      jsxGetHtmlNbDestinataires() {
        return this.param.listeSelectionnee.count();
      }
      jsxModelInputObjet() {
        return {
          getValue: () => {
            return this.message && this.message.objet
              ? this.message.objet || ''
              : '';
          },
          setValue: (aValue) => {
            if (this.message) {
              this.message.objet = aValue;
            }
          },
        };
      }
      setGenreDiscussion(aGenreDiscussion) {
        this.genreDiscussion = aGenreDiscussion;
      }
      _autorisePJ() {
        return this.optionsFenetre.avecPieceJointe;
      }
      _autoriseTiny() {
        return (
          this.optionsFenetre.avecTiny &&
          ObjetNavigateur_1.Navigateur.withContentEditable
        );
      }
      construireInstances() {
        if (this._autorisePJ()) {
          this.identSelecteurPJ = this.add(
            ObjetSelecteurPJ_1.ObjetSelecteurPJ,
            this._evntSelecteurPJ.bind(this),
            this._initSelecteurPJ.bind(this),
          );
        }
        if (this.optionsFenetre.avecChoixDestinataires) {
          this.identDestinataire = this.add(
            ObjetDestinatairesMessagerie_1.ObjetDestinatairesMessagerie,
            null,
            null,
          );
        }
      }
      recupererDonnees() {
        this.listePJ =
          this._autorisePJ() && this.etatUtilisateurSco.listeDonnees
            ? MethodesObjet_1.MethodesObjet.dupliquer(
                this.etatUtilisateurSco.listeDonnees[
                  TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes
                    .THND_ListeDocJointEtablissement
                ],
              )
            : new ObjetListeElements_1.ObjetListeElements();
      }
      _infosDest(aNb, aHint) {
        return {
          nbDest: aNb,
          arrHint: aHint,
          hintDest: () => aHint.join('\r'),
        };
      }
      _formatterDonneesPourAffichage() {
        if (!this.optionsFenetre.avecChoixDestinataires) {
          return this._formatterDonneesParGenreRessource();
        }
      }
      _formatterDonneesParGenreRessource() {
        let lNb = 0;
        const lHint = [];
        switch (this.param.genreRessource) {
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Classe:
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Groupe: {
            const lEquipe = this._getListeDestinataires();
            let lNbEquipe = 0;
            let lHintEquipe = [];
            if (lEquipe) {
              lEquipe.setTri([
                ObjetTri_1.ObjetTri.init('Genre'),
                ObjetTri_1.ObjetTri.init('Position'),
              ]);
              lEquipe.trier();
              lNbEquipe = lEquipe.count();
              lHintEquipe = lEquipe.getTableauLibelles();
            }
            return { destinataires: this._infosDest(lNbEquipe, lHintEquipe) };
          }
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve: {
            const lThis = this;
            let lNbResp1 = 0,
              lNbResp2 = 0,
              lNbPP = 0,
              lNbTuteurs = 0,
              lNbEquipePeda = 0;
            let lHintResp1 = [],
              lHintResp2 = [],
              lHintPP = [],
              lHintTuteurs = [],
              lHintEquipePeda = [];
            for (
              let i = 0, lNbr = this.param.listeSelectionnee.count();
              i < lNbr;
              i++
            ) {
              const lElt = this.param.listeSelectionnee.get(i);
              if (lElt.avecDiscussion) {
                this.donneesDest.eleves.addElement(lElt);
                lNb++;
                lHint.push(lElt.getLibelle());
              }
              if ('listeRessources' in lElt && lElt.listeRessources) {
                for (
                  let j = 0, lNbrJ = lElt.listeRessources.count();
                  j < lNbrJ;
                  j++
                ) {
                  const lEltJ = lElt.listeRessources.get(j);
                  if (
                    lEltJ.existeNumero() &&
                    'avecDiscussion' in lEltJ &&
                    lEltJ.avecDiscussion
                  ) {
                    switch (j) {
                      case 0:
                        if (
                          !this.donneesDest.respLegal1.getElementParNumero(
                            lEltJ.getNumero(),
                          )
                        ) {
                          lNbResp1++;
                          lHintResp1.push(lEltJ.getLibelle());
                          this.donneesDest.respLegal1.addElement(lEltJ);
                        }
                        break;
                      case 1:
                        if (
                          !this.donneesDest.respLegal2.getElementParNumero(
                            lEltJ.getNumero(),
                          )
                        ) {
                          lNbResp2++;
                          lHintResp2.push(lEltJ.getLibelle());
                          this.donneesDest.respLegal2.addElement(lEltJ);
                        }
                        break;
                    }
                    if (
                      !this.donneesDest.respLegaux.getElementParNumero(
                        lEltJ.getNumero(),
                      )
                    ) {
                      this.donneesDest.respLegaux.addElement(lEltJ);
                    }
                  }
                }
              }
              if ('listePP' in lElt && lElt.listePP) {
                lElt.listePP.parcourir((aPP) => {
                  if (
                    aPP.existeNumero() &&
                    aPP.avecDiscussion &&
                    !lThis.donneesDest.profsprincipaux.getElementParNumero(
                      aPP.getNumero(),
                    )
                  ) {
                    lThis.donneesDest.profsprincipaux.addElement(aPP);
                  }
                });
              }
              if ('listeTuteurs' in lElt && !!lElt.listeTuteurs) {
                lElt.listeTuteurs.parcourir((aTuteurEleve) => {
                  if (
                    aTuteurEleve.existeNumero() &&
                    aTuteurEleve.avecDiscussion &&
                    !lThis.donneesDest.tuteurs.getElementParNumero(
                      aTuteurEleve.getNumero(),
                    )
                  ) {
                    lThis.donneesDest.tuteurs.addElement(aTuteurEleve);
                  }
                });
              }
              if ('listeEquipePeda' in lElt && !!lElt.listeEquipePeda) {
                lElt.listeEquipePeda.parcourir((aMembreEquipePeda) => {
                  if (
                    aMembreEquipePeda.existeNumero() &&
                    aMembreEquipePeda.avecDiscussion &&
                    !lThis.donneesDest.equipePeda.getElementParNumero(
                      aMembreEquipePeda.getNumero(),
                    )
                  ) {
                    lThis.donneesDest.equipePeda.addElement(aMembreEquipePeda);
                  }
                });
              }
            }
            if (
              !!this.donneesDest.profsprincipaux &&
              this.donneesDest.profsprincipaux.count() > 0
            ) {
              this.donneesDest.profsprincipaux.trier();
              lNbPP = this.donneesDest.profsprincipaux.count();
              lHintPP = this.donneesDest.profsprincipaux.getTableauLibelles();
            }
            if (
              !!this.donneesDest.tuteurs &&
              this.donneesDest.tuteurs.count() > 0
            ) {
              this.donneesDest.tuteurs.trier();
              lNbTuteurs = this.donneesDest.tuteurs.count();
              lHintTuteurs = this.donneesDest.tuteurs.getTableauLibelles();
            }
            if (
              !!this.donneesDest.equipePeda &&
              this.donneesDest.equipePeda.count() > 0
            ) {
              this.donneesDest.equipePeda.trier();
              lNbEquipePeda = this.donneesDest.equipePeda.count();
              lHintEquipePeda =
                this.donneesDest.equipePeda.getTableauLibelles();
            }
            return {
              eleves: this._infosDest(lNb, lHint),
              resp1: this._infosDest(lNbResp1, lHintResp1),
              resp2: this._infosDest(lNbResp2, lHintResp2),
              pp: this._infosDest(lNbPP, lHintPP),
              tuteurs: this._infosDest(lNbTuteurs, lHintTuteurs),
              equipePeda: this._infosDest(lNbEquipePeda, lHintEquipePeda),
            };
          }
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable:
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
            if (
              [
                Enumere_Espace_1.TypeGenreEspace.Espace_Eleve,
                Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
              ].includes(this.etatUtilisateurSco.GenreEspace)
            ) {
              for (
                let i = 0, lNbr = this.param.listeSelectionnee.count();
                i < lNbr;
                i++
              ) {
                const lElt = this.param.listeSelectionnee.get(i);
                if (lElt.avecDiscussion) {
                  lNb++;
                  lHint.push(lElt.getLibelle());
                  this.donneesDest.destinataires.addElement(lElt);
                }
              }
            } else {
              for (
                let i = 0, lNbr = this.param.listeSelectionnee.count();
                i < lNbr;
                i++
              ) {
                const lElt = this.param.listeSelectionnee.get(i);
                lNb++;
                lHint.push(lElt.getLibelle());
              }
            }
            return { destinataires: this._infosDest(lNb, lHint) };
          default:
            break;
        }
      }
      _setDestinataires() {
        if (!this.optionsFenetre.avecChoixDestinataires) {
          this._setDestinatairesParGenreRessource();
        } else {
          const lInstanceDest = this.getInstance(this.identDestinataire);
          lInstanceDest.setDonnees(
            this.param.genresRessources,
            this.avecIndicationDiscussionInterdit,
            this.param.avecListeDiffusion,
          );
        }
      }
      _getListeTypeDestinatairesPossiblesPourEleve() {
        const lListeTypesDestinataires = [];
        if (
          this.param.genreRessource ===
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve
        ) {
          let lDestinataireEleve;
          const lAutresDestinataires = [];
          const lAvecEleves =
            UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve,
            );
          const lAvecParents =
            UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
            );
          const lAvecPP =
            UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
            );
          const lAvecTuteurs =
            UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
            );
          const lAvecEquipePeda =
            UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
            );
          if (this.destinataires.eleves.nbDest > 1) {
            lDestinataireEleve = {
              hint: lAvecEleves
                ? this.destinataires.eleves.hintDest()
                : 'Vous n'avez pas activé la messagerie avec les élèves',
              nb: this.destinataires.eleves.nbDest,
              id: this.idTypesDestinataire.eleve,
              label:
                'Élèves',
              actif: lAvecEleves,
              estCoche: lAvecEleves,
            };
            if (this.destinataires.resp1.nbDest > 0) {
              lAutresDestinataires.push({
                hint: lAvecParents
                  ? this.destinataires.resp1.hintDest()
                  : 'Vous n'avez pas activé la messagerie avec les responsables',
                nb: this.destinataires.resp1.nbDest,
                id: this.idTypesDestinataire.responsable1,
                label: 'Responsables préférentiels',
                actif: lAvecParents,
                estCoche: false,
              });
            }
            if (this.destinataires.resp2.nbDest > 0) {
              lAutresDestinataires.push({
                hint: lAvecParents
                  ? this.destinataires.resp2.hintDest()
                  : 'Vous n'avez pas activé la messagerie avec les responsables',
                nb: this.destinataires.resp2.nbDest,
                id: this.idTypesDestinataire.responsable2,
                label: 'Responsables non préférentiels',
                actif: lAvecParents,
                estCoche: false,
              });
            }
          } else {
            lDestinataireEleve = {
              hint: lAvecEleves
                ? ''
                : 'Vous n'avez pas activé la messagerie avec les élèves',
              nb: null,
              id: this.idTypesDestinataire.eleve,
              label: this.destinataires.eleves.hintDest(),
              actif: lAvecEleves,
              estCoche: lAvecEleves,
            };
            if (this.destinataires.resp1.nbDest > 0) {
              lAutresDestinataires.push({
                hint: lAvecParents
                  ? ''
                  : 'Vous n'avez pas activé la messagerie avec les responsables',
                nb: null,
                id: this.idTypesDestinataire.responsable1,
                label: this.destinataires.resp1.hintDest(),
                actif: lAvecParents,
                estCoche: false,
              });
            }
            if (this.destinataires.resp2.nbDest > 0) {
              lAutresDestinataires.push({
                hint: lAvecParents
                  ? ''
                  : 'Vous n'avez pas activé la messagerie avec les responsables',
                nb: null,
                id: this.idTypesDestinataire.responsable2,
                label: this.destinataires.resp2.hintDest(),
                actif: lAvecParents,
                estCoche: false,
              });
            }
          }
          let lALaLigneAuProchain = true;
          if (
            lAvecPP &&
            this.destinataires.pp &&
            this.destinataires.pp.nbDest > 0
          ) {
            let lHintPP,
              lLabelPP,
              lNbPP = null;
            if (this.destinataires.pp.nbDest > 1) {
              lHintPP = this.destinataires.pp.hintDest();
              lLabelPP = 'Professeurs principaux';
              lNbPP = this.destinataires.pp.nbDest;
            } else {
              lHintPP = 'Professeur principal';
              lLabelPP =
                this.destinataires.pp.hintDest() +
                ' (' +
                'PP' +
                ')';
            }
            lAutresDestinataires.push({
              hint: lHintPP,
              nb: lNbPP,
              id: this.idTypesDestinataire.profsprincipaux,
              label: lLabelPP,
              actif: lAvecPP,
              estCoche: false,
              aLaLigne: lALaLigneAuProchain,
            });
            lALaLigneAuProchain = false;
          }
          if (
            lAvecTuteurs &&
            this.destinataires.tuteurs &&
            this.destinataires.tuteurs.nbDest > 0
          ) {
            let lHintTuteur,
              lLabelTuteur,
              lNbTuteur = null;
            if (this.destinataires.tuteurs.nbDest > 1) {
              lHintTuteur = this.destinataires.tuteurs.hintDest();
              lLabelTuteur =
                'Tuteurs';
              lNbTuteur = this.destinataires.tuteurs.nbDest;
            } else {
              lHintTuteur =
                'Tuteur';
              lLabelTuteur =
                this.destinataires.tuteurs.hintDest() +
                ' (' +
                'Tuteur' +
                ')';
            }
            lAutresDestinataires.push({
              hint: lHintTuteur,
              nb: lNbTuteur,
              id: this.idTypesDestinataire.tuteurs,
              label: lLabelTuteur,
              actif: lAvecTuteurs,
              estCoche: false,
              aLaLigne: lALaLigneAuProchain,
            });
          }
          if (
            lAvecEquipePeda &&
            this.destinataires.equipePeda &&
            this.destinataires.equipePeda.nbDest > 0
          ) {
            lALaLigneAuProchain = true;
            lAutresDestinataires.push({
              hint: this.destinataires.equipePeda.hintDest(),
              nb: this.destinataires.equipePeda.nbDest,
              id: this.idTypesDestinataire.equipePedagogique,
              label: 'Équipe pédagogique',
              actif: lAvecEquipePeda,
              estCoche: false,
              aLaLigne: lALaLigneAuProchain,
            });
          }
          lListeTypesDestinataires.push(lDestinataireEleve);
          lListeTypesDestinataires.push(lAutresDestinataires);
        }
        return lListeTypesDestinataires;
      }
      _getTypeDestinatairesPossiblesPourEleve(aIdTypeDestinataire) {
        let lResult = null;
        if (
          this.param.genreRessource ===
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve
        ) {
          if (!this.cache_listDestPourEleves) {
            return lResult;
          }
          const lListeDestinatairesPossibles = this.cache_listDestPourEleves;
          let lListeCompletesAPlat = [];
          lListeCompletesAPlat.push(lListeDestinatairesPossibles[0]);
          lListeCompletesAPlat = lListeCompletesAPlat.concat(
            lListeDestinatairesPossibles[1],
          );
          for (let i = 0; i < lListeCompletesAPlat.length; i++) {
            if (lListeCompletesAPlat[i].id === aIdTypeDestinataire) {
              lResult = lListeCompletesAPlat[i];
              break;
            }
          }
        }
        return lResult;
      }
      _estDestinatairePossibleEstCocheEtActif(aIdTypeDestinataire) {
        const lTypeDestinataire =
          this._getTypeDestinatairesPossiblesPourEleve(aIdTypeDestinataire);
        return (
          !!lTypeDestinataire &&
          lTypeDestinataire.estCoche &&
          lTypeDestinataire.actif
        );
      }
      jsxModelCheckboxInclureReponsable2() {
        return {
          getValue: () => {
            let lListe = this.param.ListeRessources;
            let lActif = false;
            lListe.parcourir((aDest) => {
              if (
                aDest.getGenre() ===
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable
              ) {
                lActif = aDest.Actif;
              }
            });
            return lActif;
          },
          setValue: (aValue) => {
            let lListe = this.param.ListeRessources;
            lListe.parcourir((aDest) => {
              if (
                aDest.getGenre() ===
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable
              ) {
                aDest.Actif = aValue;
              }
            });
          },
        };
      }
      _setDestinatairesParGenreRessource() {
        function _getTraducGenreRessource(aGenreRessource) {
          switch (aGenreRessource) {
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Classe:
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Groupe:
              return 'Équipe pédagogique';
            case Enumere_Ressource_1.TypeHttpRessource
              .HttpRessource_Responsable:
              return 'Responsables';
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
              return 'Professeurs';
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
              return 'Personnels';
          }
          return '';
        }
        this.listeSelectionDestProfsUniquement =
          new ObjetListeElements_1.ObjetListeElements();
        this.cache_listDestPourEleves = null;
        let lAvecChoixResponsable2 = this.optionsFenetre.avecChoixResponsable2;
        const T = [];
        if (this.etatUtilisateurSco.pourPrimaire()) {
          if (this.message.destinataireMairie) {
            T.push(
              IE.jsx.str(
                IE.jsx.fragment,
                null,
                IE.jsx.str(
                  'div',
                  { class: 'm-left-xl m-bottom-l' },
                  'Personnel de mairie',
                  ' :',
                  IE.jsx.str(
                    IEHtml_Bouton_1.Bouton,
                    {
                      class: 'small-bt',
                      ie_model:
                        this.jsxModelBoutonSelectionPersonnel.bind(this),
                      ie_tooltiplabel:
                        Enumere_Ressource_1.TypeHttpRessourceUtil.getTitreFenetreSelectionRessource(
                          Enumere_Ressource_1.TypeHttpRessource
                            .HttpRessource_Personnel,
                        ),
                      'aria-haspopup': 'dialog',
                    },
                    '...',
                  ),
                  IE.jsx.str('span', {
                    ie_html: this.jsxGetHtmlNbDestinataires.bind(this),
                  }),
                ),
                IE.jsx.str(
                  'div',
                  { class: 'm-bottom-l' },
                  UtilitaireMessagerie_1.UtilitaireMessagerie.composeMettreEnCopie(
                    {
                      jsxCheckboxDestinataireDirecteur:
                        this.jsxModelCheckboxDirecteur.bind(this),
                      jsxCheckboxAvecEnseigantDEleve:
                        this.jsxCheckboxAvecEnseigantDEleve.bind(this),
                    },
                  ),
                ),
              ),
            );
          } else {
            if (
              UtilitaireMessagerie_1.UtilitaireMessagerie.avecListeDestinatairesProfsStatique()
            ) {
              const lListeUtil =
                UtilitaireMessagerie_1.UtilitaireMessagerie.getListeDestProfsDiscussionPrimEleveFormat();
              if (lListeUtil && lListeUtil.count() > 0) {
                T.push(
                  IE.jsx.str(
                    'div',
                    { class: 'flex-contain cols m-left-xl m-top-l' },
                    (H) => {
                      const lNb = lListeUtil.count();
                      lListeUtil.parcourir((aProf) => {
                        if (lNb === 1 || aProf.estPrincipal) {
                          this.listeSelectionDestProfsUniquement.add(aProf);
                        }
                        H.push(
                          IE.jsx.str(
                            IEHtml_CheckboxRadio_1.Checkbox,
                            {
                              ie_model:
                                this.jsxModeleCheckboxDestProfsUniquement.bind(
                                  this,
                                  aProf.getNumero(),
                                  aProf.getGenre(),
                                ),
                              disabled: lNb === 1 ? 'disabled' : false,
                              class: 'p-bottom',
                            },
                            aProf.getLibelle(),
                          ),
                        );
                      });
                    },
                  ),
                );
              } else {
                T.push(
                  IE.jsx.str(
                    'span',
                    null,
                    'Aucun destinataire possible',
                  ),
                );
              }
            }
            if (!!this.param.ListeRessources) {
              T.push('<div class="flex-contain cols m-bottom-l flex-gap">');
              let lListeDestinatairesAAfficher = this.param.ListeRessources;
              let lListeChoixProfs = null;
              if (
                this.etatUtilisateurSco.GenreEspace ===
                Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent
              ) {
                lListeChoixProfs = this.param.ListeRessources.getListeElements(
                  (D) => {
                    return (
                      D.getGenre() ===
                      Enumere_Ressource_1.TypeHttpRessource
                        .HttpRessource_Enseignant
                    );
                  },
                );
                if (lListeChoixProfs.count() === 1) {
                  lListeChoixProfs = null;
                } else {
                  this.listeSelectionDestProfsUniquement.add(
                    lListeChoixProfs.get(0),
                  );
                  lListeDestinatairesAAfficher =
                    this.param.ListeRessources.getListeElements((D) => {
                      return (
                        D.getGenre() !==
                        Enumere_Ressource_1.TypeHttpRessource
                          .HttpRessource_Enseignant
                      );
                    });
                }
              }
              if (lListeChoixProfs) {
                T.push(
                  '<div class="flex-contain flex-wrap flex-gap m-left-xl m-top-l">',
                );
                lListeChoixProfs.parcourir((D) => {
                  T.push(
                    IE.jsx.str(
                      IEHtml_CheckboxRadio_1.Checkbox,
                      {
                        ie_model:
                          this.jsxModeleCheckboxDestProfsUniquement.bind(
                            this,
                            D.getNumero(),
                            D.getGenre(),
                          ),
                      },
                      D.getLibelle(),
                    ),
                  );
                });
                T.push('</div>');
              }
              lListeDestinatairesAAfficher.parcourir((D) => {
                if (
                  lAvecChoixResponsable2 &&
                  D.getGenre() ===
                    Enumere_Ressource_1.TypeHttpRessource
                      .HttpRessource_Responsable
                ) {
                  T.push(
                    IE.jsx.str(
                      IEHtml_CheckboxRadio_1.Checkbox,
                      {
                        ie_model:
                          this.jsxModelCheckboxInclureReponsable2.bind(this),
                        class: 'PetitEspaceHaut',
                      },
                      D.getLibelle(),
                    ),
                  );
                } else {
                  T.push(
                    IE.jsx.str('label', { class: 'm-left-xl' }, D.getLibelle()),
                  );
                }
              });
              T.push('</div>');
            }
            if (
              UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
              )
            ) {
              T.push(
                UtilitaireMessagerie_1.UtilitaireMessagerie.composeMettreEnCopie(
                  {
                    jsxCheckboxDestinataireDirecteur:
                      this.jsxModelCheckboxDirecteur.bind(this),
                  },
                ),
              );
            }
          }
        } else {
          switch (this.param.genreRessource) {
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve: {
              this.cache_listDestPourEleves =
                this._getListeTypeDestinatairesPossiblesPourEleve();
              const lAffEleve = this.cache_listDestPourEleves[0];
              const lAffAutres = this.cache_listDestPourEleves[1];
              T.push('<div class="NoWrap" style="width:100%;">');
              T.push(this._composeBlockGenreDestinataire(lAffEleve));
              T.push('<div class="InlineBlock AlignementHaut">');
              for (let i = 0; i < lAffAutres.length; i++) {
                T.push(this._composeBlockGenreDestinataire(lAffAutres[i]));
              }
              T.push('</div>');
              T.push('</div>');
              break;
            }
            case Enumere_Ressource_1.TypeHttpRessource
              .HttpRessource_Responsable:
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
              if (this.destinataires.destinataires.nbDest > 1) {
                T.push(
                  '<div title="',
                  this.destinataires.destinataires.hintDest(),
                  '">',
                  _getTraducGenreRessource(this.param.genreRessource),
                  ' (',
                  this.destinataires.destinataires.nbDest,
                  ')',
                  '</div>',
                );
              } else {
                T.push(
                  '<div>',
                  this.destinataires.destinataires.hintDest(),
                  '</div>',
                );
              }
              break;
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Classe:
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Groupe:
              if (this.destinataires.destinataires.nbDest > 1) {
                T.push(
                  '<div title="',
                  this.destinataires.destinataires.hintDest(),
                  '">',
                  _getTraducGenreRessource(this.param.genreRessource),
                  ' (',
                  this.destinataires.destinataires.nbDest,
                  ')',
                  '</div>',
                );
              } else {
                T.push(
                  '<div>',
                  _getTraducGenreRessource(this.param.genreRessource),
                  ' (',
                  this.destinataires.destinataires.hintDest(),
                  ')',
                  '</div>',
                );
              }
              break;
            default:
              break;
          }
        }
        ObjetHtml_1.GHtml.setHtml(this.id_destinataires, T.join(''), {
          instance: this,
        });
      }
      _getListeDestinataires() {
        if (this.optionsFenetre.avecChoixDestinataires) {
          return this.getInstance(
            this.identDestinataire,
          ).getListeDestinataires();
        }
        let lNbr;
        let lListe = new ObjetListeElements_1.ObjetListeElements();
        switch (this.param.genreRessource) {
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve: {
            const lAvecEleves = this._estDestinatairePossibleEstCocheEtActif(
              this.idTypesDestinataire.eleve,
            );
            const lAvecResp1 = this._estDestinatairePossibleEstCocheEtActif(
              this.idTypesDestinataire.responsable1,
            );
            const lAvecResp2 = this._estDestinatairePossibleEstCocheEtActif(
              this.idTypesDestinataire.responsable2,
            );
            const lAvecPP = this._estDestinatairePossibleEstCocheEtActif(
              this.idTypesDestinataire.profsprincipaux,
            );
            const lAvecTuteurs = this._estDestinatairePossibleEstCocheEtActif(
              this.idTypesDestinataire.tuteurs,
            );
            const lAvecEquipePeda =
              this._estDestinatairePossibleEstCocheEtActif(
                this.idTypesDestinataire.equipePedagogique,
              );
            if (lAvecEleves) {
              lListe.add(this.donneesDest.eleves);
            }
            if (lAvecResp1 && lAvecResp2) {
              lListe.add(this.donneesDest.respLegaux);
            } else {
              if (lAvecResp1) {
                lListe.add(this.donneesDest.respLegal1);
              }
              if (lAvecResp2) {
                lListe.add(this.donneesDest.respLegal2);
              }
            }
            if (lAvecPP) {
              lListe.add(this.donneesDest.profsprincipaux);
            }
            if (lAvecTuteurs) {
              lListe.add(this.donneesDest.tuteurs);
            }
            if (lAvecEquipePeda) {
              lListe.add(this.donneesDest.equipePeda);
            }
            break;
          }
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable:
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
            if (
              this.param.genreRessource ===
                Enumere_Ressource_1.TypeHttpRessource
                  .HttpRessource_Enseignant &&
              UtilitaireMessagerie_1.UtilitaireMessagerie.avecListeDestinatairesProfsStatique() &&
              this.listeSelectionDestProfsUniquement &&
              this.listeSelectionDestProfsUniquement.count() > 0
            ) {
              lListe.add(this.listeSelectionDestProfsUniquement);
            } else if (
              [
                Enumere_Espace_1.TypeGenreEspace.Espace_Eleve,
                Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
              ].includes(this.etatUtilisateurSco.GenreEspace)
            ) {
              lListe.add(this.donneesDest.destinataires);
              if (this.inclureResponsablesDeleguesClasse) {
                lListe.add(this.donneesDest.delegues);
              }
            } else if (
              [Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent].includes(
                this.etatUtilisateurSco.GenreEspace,
              ) &&
              this.param.genreRessource ===
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant
            ) {
              if (
                this.listeSelectionDestProfsUniquement &&
                this.listeSelectionDestProfsUniquement.count() > 0
              ) {
                this.param.listeSelectionnee.removeFilter((D) => {
                  if (
                    D.getGenre() ===
                      Enumere_Ressource_1.TypeHttpRessource
                        .HttpRessource_Enseignant &&
                    !this.listeSelectionDestProfsUniquement.getElementParNumero(
                      D.getNumero(),
                    )
                  ) {
                    return true;
                  }
                  return false;
                });
              }
              lListe.add(this.param.listeSelectionnee);
            } else {
              lListe.add(this.param.listeSelectionnee);
            }
            break;
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Classe:
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Groupe:
            lListe = this.param.listeSelectionnee
              .get(0)
              .listeRessources.getListeElements((aElement) => {
                return !!(aElement && aElement.avecDiscussion);
              });
            lNbr = lListe.count();
            lListe = lListe.getListeElements((aElement) => {
              return (
                ![
                  Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
                  Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement,
                  Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur,
                  Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur,
                  Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection,
                ].includes(this.etatUtilisateurSco.GenreEspace) ||
                lNbr === 1 ||
                this.etatUtilisateurSco.getUtilisateur().getNumero() !==
                  aElement.getNumero()
              );
            });
            break;
          default:
            break;
        }
        if (this.etatUtilisateurSco.pourPrimaire()) {
          if (this.estAvecDirecteur) {
            lListe.addElement(
              new ObjetElement_1.ObjetElement(
                '',
                0,
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
              ),
            );
          }
          if (this.estAvecEnseignant) {
            lListe.addElement(
              new ObjetElement_1.ObjetElement(
                '',
                0,
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
              ),
            );
          }
        }
        for (let i = 0, lNbr = lListe.count(); i < lNbr; i++) {
          lListe.get(i).setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        }
        return lListe;
      }
      jsxModeleBoutonDestinataire(aNumeroMessage, aGauche) {
        return () => {
          return {
            event: () => {
              UtilitaireMessagerie_1.UtilitaireMessagerie.afficherFenetreDestinatairesDeMessage(
                aNumeroMessage,
                aGauche,
                false,
              );
            },
          };
        };
      }
      setDonnees(aParam) {
        if (
          !UtilitaireMessagerie_1.UtilitaireMessagerie.controleMessagerieDesactivee()
        ) {
          this.fermer();
          return;
        }
        this.message = new ObjetElement_1.ObjetElement();
        $.extend(this.message, {
          objet: '',
          destinataires: new ObjetListeElements_1.ObjetListeElements(),
          contenu: '',
          placeholder: '',
          estMsgInitial: true,
        });
        if (aParam.message) {
          $.extend(this.message, aParam.message);
        }
        this.avecIndicationDiscussionInterdit =
          aParam.avecIndicationDiscussionInterdit;
        this.donneesDest = {
          eleves: new ObjetListeElements_1.ObjetListeElements(),
          respLegal1: new ObjetListeElements_1.ObjetListeElements(),
          respLegal2: new ObjetListeElements_1.ObjetListeElements(),
          respLegaux: new ObjetListeElements_1.ObjetListeElements(),
          profsprincipaux: new ObjetListeElements_1.ObjetListeElements(),
          tuteurs: new ObjetListeElements_1.ObjetListeElements(),
          equipePeda: new ObjetListeElements_1.ObjetListeElements(),
        };
        if (
          [
            Enumere_Espace_1.TypeGenreEspace.Espace_Eleve,
            Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent,
          ].includes(this.etatUtilisateurSco.GenreEspace)
        ) {
          $.extend(this.donneesDest, {
            destinataires: new ObjetListeElements_1.ObjetListeElements(),
            delegues: aParam.listeDelegues,
          });
          this.avecCBInclureDelegues = aParam.avecCBInclureDelegues;
        }
        const $contenuMessage = $('#' + this.idContenuMsg.escapeJQ());
        if (!!this.message.placeholder) {
          $contenuMessage.attr('placeholder', this.message.placeholder);
        }
        $contenuMessage.val(this.message.contenu);
        this.param = aParam;
        if (this._autoriseTiny()) {
          this._initTiny();
        }
        this.destinataires = this._formatterDonneesPourAffichage();
        this.setOptionsFenetre({ largeur: 600 });
        this.afficher();
        this._setDestinataires();
        if (this.param.avecAffichageChampDestinataires === false) {
          $('#' + this.id_destinataires_conteneur.escapeJQ()).hide();
        }
        if (this._autorisePJ()) {
          this.message.listeFichiers =
            new ObjetListeElements_1.ObjetListeElements();
          this.getInstance(this.identSelecteurPJ).setDonnees({
            listePJ: this.message.listeFichiers,
            listeTotale: this.listePJ,
            idContextFocus: this.Nom,
          });
          this._actualiserSelecteurPJ();
        }
        if (this.optionsFenetre.transfertMessage && this.param.transfert) {
          this.message.objet = this.param.transfert.objet;
          $('#' + this.idDiscussion.escapeJQ())
            .show()
            .ieHtml(
              UtilitaireMessagerie_1.UtilitaireMessagerie.getDiscussion({
                listeMessages: this.param.transfert.listeMessages,
                btnModel: this.jsxModeleBoutonDestinataire.bind(this),
              }),
              { instance: this },
            );
        }
        this.$refresh();
        this.positionnerFenetre();
      }
      jsxModelChipsFichierCloud(aIndice) {
        return () => {
          return {
            eventBtn: () => {
              const lElement = this.message.listeFichiers.get(aIndice);
              if (lElement) {
                lElement.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
                this._actualiserSelecteurPJ();
                this.actualiserListeCloud();
                this.message.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
              }
            },
          };
        };
      }
      actualiserListeCloud() {
        if (this.etatUtilisateurSco.avecCloudDisponibles()) {
          ObjetHtml_1.GHtml.setHtml(
            this.idLibelleCloud,
            UtilitaireUrl_1.UtilitaireUrl.construireListeUrls(
              this.message.listeFichiers,
              {
                genreFiltre: Enumere_DocumentJoint_1.EGenreDocumentJoint.Cloud,
                genreRessource:
                  Enumere_Ressource_1.TypeHttpRessource
                    .HttpRessource_Evaluation,
                separateur: ' ',
                jsxModelChips: this.jsxModelChipsFichierCloud.bind(this),
              },
            ),
            { instance: this },
          );
        }
      }
      composeContenu() {
        const H = [];
        H.push(this._composeZoneEnteteMsg());
        H.push(this._composeZoneContenuMsg());
        if (this.optionsFenetre.transfertMessage) {
          H.push(
            '<div class="EspaceHaut">',
            '<div id="',
            this.idDiscussion,
            '" style="overflow-y: auto; max-height:200px; width:100%;"></div>',
            '</div>',
          );
        }
        return H.join('');
      }
      controlerSaisieMsg(aListeDestinataires) {
        const lResult = {
          estOk: true,
          destinatairesKo: false,
          contenuKo: false,
          content: '',
        };
        if (this.message.avecControleNbDest !== false) {
          if (!aListeDestinataires || aListeDestinataires.count() === 0) {
            $.extend(lResult, { estOk: false, destinatairesKo: true });
          }
        }
        lResult.content = this._getContent();
        if (lResult.content.trim() === '') {
          $.extend(lResult, { estOk: false, contenuKo: true });
        }
        return lResult;
      }
      surValidation(aNumeroBouton) {
        const lListeDest = this._getListeDestinataires();
        const lControle = this.controlerSaisieMsg(lListeDest);
        this.message.contenu = lControle.content;
        this.message.destinataires = lListeDest;
        let lMessageDestinatairesFiltree =
          this.message.destinataires.getListeElements((aElt) => {
            return aElt.Actif;
          });
        const lParametres = {
          objet: this.message.objet,
          contenu: this.message.contenu,
          listeDestinataires: this.optionsFenetre.avecChoixResponsable2
            ? lMessageDestinatairesFiltree
            : this.message.destinataires,
          listeFichiers: this.message.listeFichiers,
          avecControleNbDest: this.message.avecControleNbDest,
          commande: this.message.commande,
          estCreationCarnetLiaison: this.message.estCreationCarnetLiaison,
          estCreationDossierDecrochage:
            this.message.estCreationDossierDecrochage,
          estCreationRechercheDeStage: this.message.estCreationRechercheDeStage,
          eleveCarnetLiaison: this.message.eleveCarnetLiaison,
          dossier: this.message.dossier,
          rechercheDeStage: this.message.rechercheDeStage,
          listeMessagesTransfert: this.message.listeMessagesTransfert,
          genreDiscussion: this.genreDiscussion,
        };
        if (aNumeroBouton === 1) {
          if (lControle.estOk) {
            this.moteurMessagerie.requeteSaisieMessage(lParametres).then(
              (aResult) => {
                if (aResult && aResult.saisieMessageOK) {
                  this.fermer();
                  this.callback.appel(aNumeroBouton, this.message, this, true);
                }
              },
              () => {},
            );
          } else {
            GApplication.getMessage().afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              message: lControle.destinatairesKo
                ? 'Veuillez sélectionner un destinataire.'
                : lControle.contenuKo
                  ? 'Veuillez saisir un contenu'
                  : '',
            });
          }
        } else {
          Promise.resolve()
            .then(() => {
              if (this.optionsFenetre.avecSauvegardeBrouillon) {
                return this.moteurMessagerie.sauvegarderCreationBrouillon(
                  lParametres,
                );
              }
            })
            .finally(() => {
              this.fermer();
              this.callback.appel(aNumeroBouton, this.message, this, true);
            });
        }
      }
      static creerFenetreDiscussion(aInstance, aDonnees, aOptions) {
        if (
          !UtilitaireMessagerie_1.UtilitaireMessagerie.controleMessagerieDesactivee()
        ) {
          return;
        }
        const lOptions = Object.assign(
          {
            avecSauvegardeBrouillon: true,
            avecChoixDestinataires: [
              Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
              Enumere_Espace_1.TypeGenreEspace.Mobile_Professeur,
              Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement,
              Enumere_Espace_1.TypeGenreEspace.Mobile_Etablissement,
              Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur,
              Enumere_Espace_1.TypeGenreEspace.Mobile_Administrateur,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection,
              Enumere_Espace_1.TypeGenreEspace.Mobile_PrimDirection,
              Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant,
              Enumere_Espace_1.TypeGenreEspace.Mobile_Accompagnant,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur,
              Enumere_Espace_1.TypeGenreEspace.Mobile_PrimProfesseur,
              Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant,
              Enumere_Espace_1.TypeGenreEspace.Mobile_PrimAccompagnant,
              Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur,
              Enumere_Espace_1.TypeGenreEspace.Mobile_Tuteur,
            ].includes(GEtatUtilisateur.GenreEspace),
            listeEtiquettes: null,
            estCreationCarnetLiaison: false,
            estCreationDossierDecrochage: false,
            estCreationRechercheDeStage: false,
            eleveCarnetLiaison: null,
            dossier: null,
            rechercheDeStage: null,
          },
          aOptions,
        );
        const lDonnees = Object.assign(
          {
            genresRessources: [],
            message: {
              objet: lOptions.objet,
              contenu: '',
              placeholder: '',
              messageAvertissement: '',
              listeEtiquettes: lOptions.listeEtiquettes,
              estCreationCarnetLiaison: lOptions.estCreationCarnetLiaison,
              estCreationDossierDecrochage:
                lOptions.estCreationDossierDecrochage,
              estCreationRechercheDeStage: lOptions.estCreationRechercheDeStage,
              eleveCarnetLiaison: lOptions.eleveCarnetLiaison,
              dossier: lOptions.dossier,
              rechercheDeStage: lOptions.rechercheDeStage,
            },
            avecIndicationDiscussionInterdit: [
              Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
              Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement,
              Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur,
              Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant,
              Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur,
            ].includes(GEtatUtilisateur.GenreEspace),
          },
          aDonnees,
        );
        if (
          UtilitaireMessagerie_1.UtilitaireMessagerie.avecListeDestinatairesProfsStatique()
        ) {
          lOptions.avecChoixDestinataires = false;
          lDonnees.genreRessource =
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant;
          lDonnees.listeSelectionnee =
            new ObjetListeElements_1.ObjetListeElements();
        }
        const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_Message,
          { pere: aInstance, evenement: lOptions.eventApresDiscussion },
          { avecChoixDestinataires: lOptions.avecChoixDestinataires },
        );
        if (lOptions.avecSauvegardeBrouillon) {
          lFenetre.setOptionsFenetre({
            avecSauvegardeBrouillon: lOptions.avecSauvegardeBrouillon,
          });
        }
        if (lOptions.titreFenetre) {
          lFenetre.setOptionsFenetre({ titre: lOptions.titreFenetre });
        }
        lFenetre.setDonnees(lDonnees);
      }
      static getRessourcesDefaut() {
        return [
          {
            genre: Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve,
            getDisabled: function () {
              return !UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve,
              );
            },
          },
          {
            genre:
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
            getDisabled: () => {
              return !(
                UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                  Enumere_Ressource_1.TypeHttpRessource
                    .HttpRessource_Responsable,
                ) &&
                (GEtatUtilisateur.GenreEspace !==
                  Enumere_Espace_1.TypeGenreEspace.Espace_Parent ||
                  (GApplication.getObjetParametres()
                    .ActivationMessagerieEntreParents &&
                    GApplication.getEtatUtilisateur().Identification.ressource
                      .avecDiscussionResponsables))
              );
            },
          },
          {
            genre:
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
            getDisabled: function () {
              return !UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
              );
            },
          },
          {
            genre:
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
            getDisabled: function () {
              return !UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
              );
            },
          },
        ];
      }
      static creerDiscussionRaccourciPrimEleve() {
        ObjetFenetre_Message.creerFenetreDiscussion(
          {},
          {
            genresRessources: [
              {
                genre:
                  Enumere_Ressource_1.TypeHttpRessource
                    .HttpRessource_Enseignant,
                getDisabled() {
                  return !UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                    Enumere_Ressource_1.TypeHttpRessource
                      .HttpRessource_Enseignant,
                  );
                },
              },
            ],
            avecIndicationDiscussionInterdit: true,
            avecListeDiffusion: false,
          },
          { avecSauvegardeBrouillon: true, avecChoixDestinataires: true },
        );
      }
      jsxModelCheckboxTypeDestinatairePourEleve(aIdTypeDestinataire) {
        return {
          getValue: () => {
            return this._estDestinatairePossibleEstCocheEtActif(
              aIdTypeDestinataire,
            );
          },
          setValue: (aValue) => {
            const lTypeDestinataire =
              this._getTypeDestinatairesPossiblesPourEleve(aIdTypeDestinataire);
            if (!!lTypeDestinataire && !!lTypeDestinataire.actif) {
              lTypeDestinataire.estCoche = aValue;
            }
          },
          getDisabled: () => {
            const lTypeDestinataire =
              this._getTypeDestinatairesPossiblesPourEleve(aIdTypeDestinataire);
            return !lTypeDestinataire || !lTypeDestinataire.actif;
          },
          getLibelle: () => {
            const lTexte = [];
            const lTypeDestinataire =
              this._getTypeDestinatairesPossiblesPourEleve(aIdTypeDestinataire);
            if (!!lTypeDestinataire) {
              lTexte.push(lTypeDestinataire.label);
              if (lTypeDestinataire.nb) {
                lTexte.push(' (', lTypeDestinataire.nb, ')');
              }
            }
            return lTexte.join('');
          },
        };
      }
      _composeBlockGenreDestinataire(aElt) {
        const lResult = [];
        if (!!aElt.aLaLigne) {
          lResult.push('<br/>');
        }
        lResult.push(
          IE.jsx.str(
            'div',
            {
              class: 'InlineBlock AlignementHaut',
              title: ObjetChaine_1.GChaine.toTitle(aElt.hint),
              style: 'padding-right:10px; padding-bottom: 5px;',
            },
            IE.jsx.str(IEHtml_CheckboxRadio_1.Checkbox, {
              ie_model: this.jsxModelCheckboxTypeDestinatairePourEleve.bind(
                this,
                aElt.id,
              ),
            }),
          ),
        );
        return lResult.join('');
      }
      _initSelecteurPJ(aInstance) {
        aInstance.setOptions({
          genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
          title: 'Ajouter une nouvelle pièce jointe',
          maxFiles: 0,
          multiple: true,
          avecMenuContextuel: false,
          maxSize: this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.tailleMaxDocJointEtablissement,
          ),
          ouvrirFenetreChoixTypesAjout: true,
          optionsCloud: {
            avecCloud: true,
            callbackChoixFichierParFichier:
              this.surAjoutUnFichierCloud.bind(this),
            callbackChoixFichierFinal:
              this.surAjoutFinalFichiersClouds.bind(this),
          },
          idLibellePJ: this.idLibellePJ,
          avecAjoutExistante: true,
          avecEtatSaisie: false,
          avecBoutonSupp: true,
        });
      }
      surAjoutUnFichierCloud(aNouvelElement) {
        this.message.listeFichiers.addElement(aNouvelElement);
        this.listePJ.addElement(aNouvelElement);
      }
      surAjoutFinalFichiersClouds() {
        this.actualiserListeCloud();
        this.message.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
      }
      _initTiny() {
        if (ObjetNavigateur_1.Navigateur.withContentEditable) {
          TinyInit_1.TinyInit.init({
            id: this.idContenuMsg,
            ariaLabel: 'Zone de texte riche saisie du message',
            modeMail: true,
            height: this.optionsFenetre.transfertMessage ? 180 : 310,
            min_height: this.optionsFenetre.transfertMessage ? 150 : 298,
            max_height: 600,
          });
        }
      }
      _getContent() {
        let lResult = '';
        if (this._autoriseTiny()) {
          const lEditor = TinyInit_1.TinyInit.get(this.idContenuMsg);
          lResult = lEditor ? lEditor.getContent() : '';
          if (TinyInit_1.TinyInit.estContenuVide(lResult)) {
            lResult = '';
          }
        } else {
          lResult = this.message.contenu;
        }
        return lResult;
      }
      jsxDisplayCheckboxInclureResponsables() {
        return this.avecCBInclureDelegues;
      }
      jsxModelCheckboxInclureResponsablesDeleguesClasse() {
        return {
          getValue: () => {
            return this.inclureResponsablesDeleguesClasse
              ? this.inclureResponsablesDeleguesClasse
              : false;
          },
          setValue: (aValue) => {
            this.inclureResponsablesDeleguesClasse = aValue;
          },
        };
      }
      _composeChampDestinataires() {
        const H = [];
        if (!this.optionsFenetre.avecChoixDestinataires) {
          H.push(
            IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str(
                'div',
                {
                  id: this.id_destinataires_conteneur,
                  class: 'field-contain font-weight-semi-bold label-up',
                  role: 'group',
                  'aria-label': 'Destinataires'.toAttrValue(),
                },
                IE.jsx.str(
                  'div',
                  null,
                  'Destinataires',
                ),
                IE.jsx.str('div', {
                  id: this.id_destinataires,
                  class: 'fluid-bloc',
                }),
              ),
              IE.jsx.str(
                'div',
                { id: this.idCopieAutresResp, class: 'm-top-l full-width' },
                IE.jsx.str(
                  IEHtml_CheckboxRadio_1.Checkbox,
                  {
                    ie_model:
                      this.jsxModelCheckboxInclureResponsablesDeleguesClasse.bind(
                        this,
                      ),
                    ie_display:
                      this.jsxDisplayCheckboxInclureResponsables.bind(this),
                  },
                  'Copie aux autres parents délégués de la classe',
                ),
              ),
            ),
          );
        } else {
          H.push(
            IE.jsx.str('div', {
              id: this.getNomInstance(this.identDestinataire),
              class: Divers_css_1.SD.mBottom,
            }),
          );
        }
        return H.join('');
      }
      _composeChampObjet() {
        return IE.jsx.str(
          'div',
          { class: 'field-wrapper full-width' },
          IE.jsx.str(
            'label',
            { for: 'champObjet' },
            'Objet',
          ),
          () => {
            if (this.optionsFenetre.transfertMessage) {
              return IE.jsx.str('div', {
                ie_html: this.jsxGetHtmlObjetMessage.bind(this),
              });
            } else {
              return IE.jsx.str('input', {
                id: 'champObjet',
                class: 'full-width',
                ie_model: this.jsxModelInputObjet.bind(this),
                'aria-label': 'Objet',
                maxlength:
                  UtilitaireMessagerie_1.UtilitaireMessagerie
                    .C_TailleObjetMessage,
                type: 'text',
              });
            }
          },
        );
      }
      _composeChampPJ() {
        const H = [];
        H.push(
          IE.jsx.str('div', {
            class: 'pj-global-conteneur',
            id: this.getNomInstance(this.identSelecteurPJ),
          }),
        );
        return H.join('');
      }
      jsxDisplayLegende() {
        return !!(this.message && this.message.legende);
      }
      jsxGetHtmlLegende() {
        return this.message && this.message.legende ? this.message.legende : '';
      }
      _composeZoneEnteteMsg() {
        const H = [];
        H.push(
          IE.jsx.str(
            'div',
            { id: this.idEntete, class: 'full-width m-top' },
            this._composeChampDestinataires(),
            IE.jsx.str('div', {
              ie_html: this.jsxGetHtmlLegende.bind(this),
              ie_display: this.jsxDisplayLegende.bind(this),
              class: 'm-bottom-xl',
            }),
            this._composeChampObjet(),
          ),
        );
        return H.join('');
      }
      jsxModelBoutonAjouterSignature() {
        return {
          event: () => {
            let lMessage = this._getContent();
            this.message.contenu =
              lMessage +
              this.etatUtilisateurSco.messagerieActualiteSignature.signature;
            if (this._autoriseTiny()) {
              const lEditor = TinyInit_1.TinyInit.get(this.idContenuMsg);
              if (lEditor) {
                lEditor.setContent(this.message.contenu);
              }
            }
          },
        };
      }
      jsxModelTextareaSansTiny() {
        return {
          getValue: () => {
            return this.message ? this.message.contenu : '';
          },
          setValue: (aValue) => {
            this.message.contenu = aValue;
          },
        };
      }
      _composeZoneContenuMsg() {
        const H = [];
        const lAvecPJ = this._autorisePJ();
        const lAvecTiny = this._autoriseTiny();
        const lAvecCloud = GEtatUtilisateur.listeCloud.count() > 0;
        const lTitre =
          'Contenu';
        H.push(`<div class="flex-contain">`);
        if (this._autorisePJ()) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'fix-bloc flex-contain cols' },
              this._composeChampPJ(),
            ),
          );
        }
        H.push(
          IE.jsx.str(
            'div',
            { class: 'fluid-bloc' },
            IE.jsx.str('textarea', {
              id: this.idContenuMsg,
              ie_model: !lAvecTiny
                ? this.jsxModelTextareaSansTiny.bind(this)
                : false,
              maxlength: !lAvecTiny ? '10000' : false,
              'aria-label': lTitre,
              style: 'height:300px;width:100%;',
            }),
            this.etatUtilisateurSco.messagerieActualiteSignature &&
              this.etatUtilisateurSco.messagerieActualiteSignature.signature
              ? IE.jsx.str(
                  IEHtml_Bouton_1.Bouton,
                  {
                    ie_model: this.jsxModelBoutonAjouterSignature.bind(this),
                    svg: IE.jsx.str(
                      IconeSvgSignature_1.IconeSvgSignature,
                      null,
                    ),
                    class: 'themeBoutonNeutre m-top-l',
                  },
                  'Insérer ma signature',
                )
              : '',
          ),
        );
        H.push(`</div>`);
        if (lAvecPJ || lAvecCloud) {
          H.push('<div class="m-top-l">');
          if (lAvecPJ) {
            H.push(
              '<div id="',
              this.idLibellePJ,
              '" class="pj-liste-conteneur"></div>',
            );
          }
          if (lAvecCloud) {
            H.push(
              '<div id="',
              this.idLibelleCloud,
              '" class="pj-liste-conteneur"></div>',
            );
          }
          H.push('</div>');
        }
        const lContenu = H.join('');
        if (lAvecTiny || this._autorisePJ()) {
          const lId = `${this.Nom}_labelcontenu`;
          return IE.jsx.str(
            'div',
            {
              role: 'group',
              class: 'field-wrapper full-width',
              'aria-labelledby': lId,
            },
            IE.jsx.str(
              'span',
              { class: 'libelle', id: lId },
              'Contenu',
            ),
            lContenu,
          );
        }
        return IE.jsx.str(
          'div',
          { class: 'field-wrapper full-width' },
          IE.jsx.str('label', { for: this.idContenuMsg }, lTitre),
          lContenu,
        );
      }
      _actualiserSelecteurPJ() {
        if (!this._autorisePJ()) {
          return;
        }
        const lInstance = this.getInstance(this.identSelecteurPJ);
        lInstance.setDonnees({
          listePJ: this.message.listeFichiers,
          listeTotale: this.listePJ,
          idContextFocus: this.Nom,
        });
      }
      _evntSelecteurPJ() {
        if (
          this.message.contenu !== '' ||
          this.message.listeFichiers.count() > 0
        ) {
          this.message.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        }
        this.$refresh();
      }
    }
    exports.ObjetFenetre_Message = ObjetFenetre_Message;
  },
  fn: 'objetfenetre_message.js',
});