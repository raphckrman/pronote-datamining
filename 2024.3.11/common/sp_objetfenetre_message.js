IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_Message = void 0;
    const ObjetDroitsPN_1 = require('ObjetDroitsPN');
    const GUID_1 = require('GUID');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetHtml_1 = require('ObjetHtml');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    const UtilitaireUrl_1 = require('UtilitaireUrl');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const ObjetSelecteurPJ_1 = require('ObjetSelecteurPJ');
    const TypeHttpNotificationDonnes_1 = require('TypeHttpNotificationDonnes');
    const UtilitaireMessagerie_1 = require('UtilitaireMessagerie');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const TinyInit_1 = require('TinyInit');
    const MoteurMessagerie_1 = require('MoteurMessagerie');
    const ObjetDestinatairesMessagerie_1 = require('ObjetDestinatairesMessagerie');
    const ObjetFenetre_SelectionPublic_1 = require('ObjetFenetre_SelectionPublic');
    const jsx_1 = require('jsx');
    class ObjetFenetre_Message extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.applicationSco = GApplication;
        this.etatUtilisateurSco = this.applicationSco.getEtatUtilisateur();
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
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          estVisibleInclureResponsables: function () {
            return aInstance.avecCBInclureDelegues;
          },
          cbInclureResponsables: {
            getValue: function () {
              return aInstance.inclureResponsablesDeleguesClasse
                ? aInstance.inclureResponsablesDeleguesClasse
                : false;
            },
            setValue: function (aValue) {
              aInstance.inclureResponsablesDeleguesClasse = aValue;
            },
          },
          afficherLegende: function () {
            return !!(aInstance.message && aInstance.message.legende);
          },
          getLegende: function () {
            return aInstance.message && aInstance.message.legende
              ? aInstance.message.legende
              : '';
          },
          getObjetTexte: function () {
            return aInstance.message && aInstance.message.objet
              ? aInstance.message.objet || ''
              : '';
          },
          inputObjet: {
            getValue: function () {
              return aInstance.message && aInstance.message.objet
                ? aInstance.message.objet || ''
                : '';
            },
            setValue: function (aValue) {
              if (aInstance.message) {
                aInstance.message.objet = aValue;
              }
            },
          },
          chipsFichierCloud: {
            eventBtn: function (aIndice) {
              const lElement = aInstance.message.listeFichiers.get(aIndice);
              if (lElement) {
                lElement.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
                aInstance._actualiserSelecteurPJ();
                aInstance.actualiserListeCloud();
                aInstance.message.setEtat(
                  Enumere_Etat_1.EGenreEtat.Modification,
                );
              }
            },
          },
          textareaSansTiny: {
            getValue: function () {
              return aInstance.message ? aInstance.message.contenu : '';
            },
            setValue: function (aValue) {
              aInstance.message.contenu = aValue;
            },
          },
          visuMessage: {
            btnPublic: {
              event(aNumeroMessage, aGauche) {
                UtilitaireMessagerie_1.UtilitaireMessagerie.afficherFenetreDestinatairesDeMessage(
                  aNumeroMessage,
                  aGauche,
                  false,
                );
              },
              hintPublic(aNumeroMessage, aGauche) {
                return UtilitaireMessagerie_1.UtilitaireMessagerie.getStrHintPublicMessagePromise(
                  aInstance,
                  aNumeroMessage,
                  aGauche,
                  false,
                  this.node,
                );
              },
            },
          },
          cbDestProfsUniquement: {
            getValue: function (aNumeroArticle) {
              return !!aInstance.listeSelectionDestProfsUniquement.getElementParNumero(
                aNumeroArticle,
              );
            },
            setValue: function (aNumeroArticle, aGenre, aValue) {
              if (!aValue) {
                if (aInstance.listeSelectionDestProfsUniquement.count() === 1) {
                  return;
                }
                const lIndice =
                  aInstance.listeSelectionDestProfsUniquement.getIndiceParNumeroEtGenre(
                    aNumeroArticle,
                  );
                if (lIndice >= 0) {
                  aInstance.listeSelectionDestProfsUniquement.remove(lIndice);
                }
              } else {
                if (
                  !aInstance.listeSelectionDestProfsUniquement.getElementParNumero(
                    aNumeroArticle,
                  )
                ) {
                  aInstance.listeSelectionDestProfsUniquement.add(
                    new ObjetElement_1.ObjetElement('', aNumeroArticle, aGenre),
                  );
                }
              }
            },
          },
          cbTypeDestinatairePourEleve: {
            getValue: function (aIdTypeDestinataire) {
              return aInstance._estDestinatairePossibleEstCocheEtActif(
                aIdTypeDestinataire,
              );
            },
            setValue: function (aIdTypeDestinataire, aValue) {
              const lTypeDestinataire =
                aInstance._getTypeDestinatairesPossiblesPourEleve(
                  aIdTypeDestinataire,
                );
              if (!!lTypeDestinataire && !!lTypeDestinataire.actif) {
                lTypeDestinataire.estCoche = aValue;
              }
            },
            getDisabled: function (aIdTypeDestinataire) {
              const lTypeDestinataire =
                aInstance._getTypeDestinatairesPossiblesPourEleve(
                  aIdTypeDestinataire,
                );
              return !lTypeDestinataire || !lTypeDestinataire.actif;
            },
            getLibelle: function (aIdTypeDestinataire) {
              const lTexte = [];
              const lTypeDestinataire =
                aInstance._getTypeDestinatairesPossiblesPourEleve(
                  aIdTypeDestinataire,
                );
              if (!!lTypeDestinataire) {
                lTexte.push(lTypeDestinataire.label);
                if (lTypeDestinataire.nb) {
                  lTexte.push(' (', lTypeDestinataire.nb, ')');
                }
              }
              return lTexte.join('');
            },
          },
          cbDestinataireDirecteur: {
            getValue() {
              return !!aInstance.estAvecDirecteur;
            },
            setValue(aValue) {
              aInstance.estAvecDirecteur = aValue;
            },
          },
          cbDestinataireEnseignant: {
            getValue() {
              return !!aInstance.estAvecEnseignant;
            },
            setValue(aValue) {
              aInstance.estAvecEnseignant = aValue;
            },
          },
          cbInclureResp2: {
            getValue() {
              let lListe = aInstance.param.ListeRessources;
              let lActif = false;
              lListe.parcourir((aDest) => {
                if (
                  aDest.getGenre() ===
                  Enumere_Ressource_1.EGenreRessource.Responsable
                ) {
                  lActif = aDest.Actif;
                }
              });
              return lActif;
            },
            setValue(aValue) {
              let lListe = aInstance.param.ListeRessources;
              lListe.parcourir((aDest) => {
                if (
                  aDest.getGenre() ===
                  Enumere_Ressource_1.EGenreRessource.Responsable
                ) {
                  aDest.Actif = aValue;
                }
              });
            },
          },
          btnSelectionPersonnel: {
            event() {
              const lFenetreSelectionPublic =
                ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
                  ObjetFenetre_SelectionPublic_1.ObjetFenetre_SelectionPublic,
                  {
                    pere: aInstance,
                    evenement: function (
                      aGenreRessource,
                      aListeRessourcesSelectionnees,
                      aNumeroBouton,
                    ) {
                      if (aNumeroBouton === 1) {
                        aInstance.param.listeSelectionnee =
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
                listeRessources: aInstance.param.ListeRessources,
                listeRessourcesSelectionnees: aInstance.param.listeSelectionnee,
                genreRessource: Enumere_Ressource_1.EGenreRessource.Personnel,
                titre:
                  Enumere_Ressource_1.EGenreRessourceUtil.getTitreFenetreSelectionRessource(
                    Enumere_Ressource_1.EGenreRessource.Personnel,
                  ),
              });
            },
          },
          getNbrDest() {
            return aInstance.param.listeSelectionnee.count();
          },
          btnSignature: {
            event() {
              let lMessage = aInstance._getContent();
              aInstance.message.contenu =
                lMessage +
                aInstance.etatUtilisateurSco.messagerieSignature.signature;
              if (aInstance._autoriseTiny()) {
                const lEditor = TinyInit_1.TinyInit.get(aInstance.idContenuMsg);
                if (lEditor) {
                  lEditor.setContent(aInstance.message.contenu);
                }
              }
            },
          },
        });
      }
      setGenreDiscussion(aGenreDiscussion) {
        this.genreDiscussion = aGenreDiscussion;
      }
      _autorisePJ() {
        return this.optionsFenetre.avecPieceJointe;
      }
      _autoriseTiny() {
        return this.optionsFenetre.avecTiny && GNavigateur.withContentEditable;
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
          case Enumere_Ressource_1.EGenreRessource.Classe:
          case Enumere_Ressource_1.EGenreRessource.Groupe: {
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
          case Enumere_Ressource_1.EGenreRessource.Eleve: {
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
              if (lElt.listeRessources) {
                for (
                  let j = 0, lNbrJ = lElt.listeRessources.count();
                  j < lNbrJ;
                  j++
                ) {
                  const lEltJ = lElt.listeRessources.get(j);
                  if (lEltJ.existeNumero() && lEltJ.avecDiscussion) {
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
              if (lElt.listePP) {
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
              if (!!lElt.listeTuteurs) {
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
              if (!!lElt.listeEquipePeda) {
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
          case Enumere_Ressource_1.EGenreRessource.Responsable:
          case Enumere_Ressource_1.EGenreRessource.Enseignant:
          case Enumere_Ressource_1.EGenreRessource.Personnel:
            if (
              [
                Enumere_Espace_1.EGenreEspace.Eleve,
                Enumere_Espace_1.EGenreEspace.Parent,
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
          Enumere_Ressource_1.EGenreRessource.Eleve
        ) {
          let lDestinataireEleve;
          const lAutresDestinataires = [];
          const lAvecEleves =
            UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
              Enumere_Ressource_1.EGenreRessource.Eleve,
            );
          const lAvecParents =
            UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
              Enumere_Ressource_1.EGenreRessource.Responsable,
            );
          const lAvecPP =
            UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
              Enumere_Ressource_1.EGenreRessource.Enseignant,
            );
          const lAvecTuteurs =
            UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
              Enumere_Ressource_1.EGenreRessource.Enseignant,
            );
          const lAvecEquipePeda =
            UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
              Enumere_Ressource_1.EGenreRessource.Enseignant,
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
              estCoche: false,
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
              estCoche: false,
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
          Enumere_Ressource_1.EGenreRessource.Eleve
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
      _setDestinatairesParGenreRessource() {
        function _getTraducGenreRessource(aGenreRessource) {
          switch (aGenreRessource) {
            case Enumere_Ressource_1.EGenreRessource.Classe:
            case Enumere_Ressource_1.EGenreRessource.Groupe:
              return 'Équipe pédagogique';
            case Enumere_Ressource_1.EGenreRessource.Responsable:
              return 'Responsables';
            case Enumere_Ressource_1.EGenreRessource.Enseignant:
              return 'Professeurs';
            case Enumere_Ressource_1.EGenreRessource.Personnel:
              return 'Personnels';
            default:
              return '';
          }
        }
        this.listeSelectionDestProfsUniquement =
          new ObjetListeElements_1.ObjetListeElements();
        this.cache_listDestPourEleves = null;
        let lAvecChoixResponsable2 = this.optionsFenetre.avecChoixResponsable2;
        const T = [];
        if (this.etatUtilisateurSco.pourPrimaire()) {
          if (this.message.destinataireMairie) {
            T.push(
              '<div class="m-left-xl m-bottom-l">',
              'Personnel de mairie',
              ' : <ie-bouton class="small-bt" ie-model="btnSelectionPersonnel">...</ie-bouton> <span ie-html="getNbrDest"></span></div>',
            );
            T.push(
              '<div class="m-bottom-l">',
              UtilitaireMessagerie_1.UtilitaireMessagerie.composeMettreEnCopie({
                avecDirection: true,
                avecEnseigantDEleve: true,
              }),
              '</div>',
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
                            'ie-checkbox',
                            {
                              'ie-model': (0, jsx_1.jsxFuncAttr)(
                                'cbDestProfsUniquement',
                                [aProf.getNumero(), aProf.getGenre()],
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
                Enumere_Espace_1.EGenreEspace.PrimParent
              ) {
                lListeChoixProfs = this.param.ListeRessources.getListeElements(
                  (D) => {
                    return (
                      D.getGenre() ===
                      Enumere_Ressource_1.EGenreRessource.Enseignant
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
                        Enumere_Ressource_1.EGenreRessource.Enseignant
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
                    '<ie-checkbox',
                    ObjetHtml_1.GHtml.composeAttr(
                      'ie-model',
                      'cbDestProfsUniquement',
                      [D.getNumero(), D.getGenre()],
                    ),
                    '>',
                    D.getLibelle(),
                    '</ie-checkbox>',
                  );
                });
                T.push('</div>');
              }
              lListeDestinatairesAAfficher.parcourir((D) => {
                if (
                  lAvecChoixResponsable2 &&
                  D.getGenre() ===
                    Enumere_Ressource_1.EGenreRessource.Responsable
                ) {
                  T.push(
                    '<ie-checkbox ',
                    ObjetHtml_1.GHtml.composeAttr('ie-model', 'cbInclureResp2'),
                    ' class="PetitEspaceHaut">',
                    D.getLibelle(),
                    '</ie-checkbox>',
                  );
                } else {
                  T.push('<label class="m-left-xl">');
                  T.push(D.getLibelle());
                  T.push('</label>');
                }
              });
              T.push('</div>');
            }
            if (
              UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                Enumere_Ressource_1.EGenreRessource.Personnel,
              )
            ) {
              T.push(
                UtilitaireMessagerie_1.UtilitaireMessagerie.composeMettreEnCopie(
                  { avecDirection: true },
                ),
              );
            }
          }
        } else {
          switch (this.param.genreRessource) {
            case Enumere_Ressource_1.EGenreRessource.Eleve: {
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
            case Enumere_Ressource_1.EGenreRessource.Responsable:
            case Enumere_Ressource_1.EGenreRessource.Enseignant:
            case Enumere_Ressource_1.EGenreRessource.Personnel:
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
            case Enumere_Ressource_1.EGenreRessource.Classe:
            case Enumere_Ressource_1.EGenreRessource.Groupe:
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
          controleur: this.controleur,
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
          case Enumere_Ressource_1.EGenreRessource.Eleve: {
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
          case Enumere_Ressource_1.EGenreRessource.Responsable:
          case Enumere_Ressource_1.EGenreRessource.Enseignant:
          case Enumere_Ressource_1.EGenreRessource.Personnel:
            if (
              this.param.genreRessource ===
                Enumere_Ressource_1.EGenreRessource.Enseignant &&
              UtilitaireMessagerie_1.UtilitaireMessagerie.avecListeDestinatairesProfsStatique() &&
              this.listeSelectionDestProfsUniquement &&
              this.listeSelectionDestProfsUniquement.count() > 0
            ) {
              lListe.add(this.listeSelectionDestProfsUniquement);
            } else if (
              [
                Enumere_Espace_1.EGenreEspace.Eleve,
                Enumere_Espace_1.EGenreEspace.Parent,
              ].includes(this.etatUtilisateurSco.GenreEspace)
            ) {
              lListe.add(this.donneesDest.destinataires);
              if (this.inclureResponsablesDeleguesClasse) {
                lListe.add(this.donneesDest.delegues);
              }
            } else if (
              [Enumere_Espace_1.EGenreEspace.PrimParent].includes(
                this.etatUtilisateurSco.GenreEspace,
              ) &&
              this.param.genreRessource ===
                Enumere_Ressource_1.EGenreRessource.Enseignant
            ) {
              if (
                this.listeSelectionDestProfsUniquement &&
                this.listeSelectionDestProfsUniquement.count() > 0
              ) {
                this.param.listeSelectionnee.removeFilter((D) => {
                  if (
                    D.getGenre() ===
                      Enumere_Ressource_1.EGenreRessource.Enseignant &&
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
          case Enumere_Ressource_1.EGenreRessource.Classe:
          case Enumere_Ressource_1.EGenreRessource.Groupe:
            lListe = this.param.listeSelectionnee
              .get(0)
              .listeRessources.getListeElements((aElement) => {
                return !!(aElement && aElement.avecDiscussion);
              });
            lNbr = lListe.count();
            lListe = lListe.getListeElements((aElement) => {
              return (
                ![
                  Enumere_Espace_1.EGenreEspace.Professeur,
                  Enumere_Espace_1.EGenreEspace.Etablissement,
                  Enumere_Espace_1.EGenreEspace.Administrateur,
                  Enumere_Espace_1.EGenreEspace.PrimProfesseur,
                  Enumere_Espace_1.EGenreEspace.PrimDirection,
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
                Enumere_Ressource_1.EGenreRessource.Personnel,
              ),
            );
          }
          if (this.estAvecEnseignant) {
            lListe.addElement(
              new ObjetElement_1.ObjetElement(
                '',
                0,
                Enumere_Ressource_1.EGenreRessource.Enseignant,
              ),
            );
          }
        }
        for (let i = 0, lNbr = lListe.count(); i < lNbr; i++) {
          lListe.get(i).setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        }
        return lListe;
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
            Enumere_Espace_1.EGenreEspace.Eleve,
            Enumere_Espace_1.EGenreEspace.Parent,
            Enumere_Espace_1.EGenreEspace.PrimParent,
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
                btnModel: 'visuMessage.btnPublic',
              }),
              { controleur: this.controleur },
            );
        }
        this.$refreshSelf();
        this.positionnerFenetre();
      }
      actualiserListeCloud() {
        if (this.etatUtilisateurSco.avecCloudDisponibles()) {
          ObjetHtml_1.GHtml.setHtml(
            this.idLibelleCloud,
            UtilitaireUrl_1.UtilitaireUrl.construireListeUrls(
              this.message.listeFichiers,
              {
                genreFiltre: Enumere_DocumentJoint_1.EGenreDocumentJoint.Cloud,
                genreRessource: Enumere_Ressource_1.EGenreRessource.Evaluation,
                separateur: ' ',
                IEModelChips: 'chipsFichierCloud',
              },
            ),
            { controleur: this.controleur },
          );
        }
      }
      composeContenu() {
        const T = [];
        T.push(this._composeZoneEnteteMsg());
        T.push(this._composeZoneContenuMsg());
        if (this.optionsFenetre.transfertMessage) {
          T.push(
            '<div class="EspaceHaut">',
            '<div id="',
            this.idDiscussion,
            '" style="overflow-y: auto; max-height:200px; width:100%;"></div>',
            '</div>',
          );
        }
        return T.join('');
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
          eleveCarnetLiaison: this.message.eleveCarnetLiaison,
          dossier: this.message.dossier,
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
              Enumere_Espace_1.EGenreEspace.Professeur,
              Enumere_Espace_1.EGenreEspace.Mobile_Professeur,
              Enumere_Espace_1.EGenreEspace.Etablissement,
              Enumere_Espace_1.EGenreEspace.Mobile_Etablissement,
              Enumere_Espace_1.EGenreEspace.Administrateur,
              Enumere_Espace_1.EGenreEspace.Mobile_Administrateur,
              Enumere_Espace_1.EGenreEspace.PrimDirection,
              Enumere_Espace_1.EGenreEspace.Mobile_PrimDirection,
              Enumere_Espace_1.EGenreEspace.Accompagnant,
              Enumere_Espace_1.EGenreEspace.Mobile_Accompagnant,
              Enumere_Espace_1.EGenreEspace.PrimProfesseur,
              Enumere_Espace_1.EGenreEspace.Mobile_PrimProfesseur,
              Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
              Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant,
              Enumere_Espace_1.EGenreEspace.Tuteur,
              Enumere_Espace_1.EGenreEspace.Mobile_Tuteur,
            ].includes(GEtatUtilisateur.GenreEspace),
            listeEtiquettes: null,
            estCreationCarnetLiaison: false,
            estCreationDossierDecrochage: false,
            eleveCarnetLiaison: null,
            dossier: null,
          },
          aOptions,
        );
        const lDonnees = Object.assign(
          {
            genresRessources: [],
            message: {
              objet: '',
              contenu: '',
              placeholder: '',
              messageAvertissement: '',
              listeEtiquettes: lOptions.listeEtiquettes,
              estCreationCarnetLiaison: lOptions.estCreationCarnetLiaison,
              estCreationDossierDecrochage:
                lOptions.estCreationDossierDecrochage,
              eleveCarnetLiaison: lOptions.eleveCarnetLiaison,
              dossier: lOptions.dossier,
            },
            avecIndicationDiscussionInterdit: [
              Enumere_Espace_1.EGenreEspace.Professeur,
              Enumere_Espace_1.EGenreEspace.Etablissement,
              Enumere_Espace_1.EGenreEspace.Administrateur,
              Enumere_Espace_1.EGenreEspace.Accompagnant,
              Enumere_Espace_1.EGenreEspace.Tuteur,
            ].includes(GEtatUtilisateur.GenreEspace),
          },
          aDonnees,
        );
        if (
          UtilitaireMessagerie_1.UtilitaireMessagerie.avecListeDestinatairesProfsStatique()
        ) {
          lOptions.avecChoixDestinataires = false;
          lDonnees.genreRessource =
            Enumere_Ressource_1.EGenreRessource.Enseignant;
          lDonnees.listeSelectionnee =
            new ObjetListeElements_1.ObjetListeElements();
        }
        const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_Message,
          { pere: aInstance },
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
            genre: Enumere_Ressource_1.EGenreRessource.Eleve,
            getDisabled: function () {
              return !UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                Enumere_Ressource_1.EGenreRessource.Eleve,
              );
            },
          },
          {
            genre: Enumere_Ressource_1.EGenreRessource.Responsable,
            getDisabled: () => {
              return !(
                UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                  Enumere_Ressource_1.EGenreRessource.Responsable,
                ) &&
                (GEtatUtilisateur.GenreEspace !==
                  Enumere_Espace_1.EGenreEspace.Parent ||
                  (GApplication.getObjetParametres()
                    .ActivationMessagerieEntreParents &&
                    GApplication.getEtatUtilisateur().Identification.ressource
                      .avecDiscussionResponsables))
              );
            },
          },
          {
            genre: Enumere_Ressource_1.EGenreRessource.Enseignant,
            getDisabled: function () {
              return !UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                Enumere_Ressource_1.EGenreRessource.Enseignant,
              );
            },
          },
          {
            genre: Enumere_Ressource_1.EGenreRessource.Personnel,
            getDisabled: function () {
              return !UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                Enumere_Ressource_1.EGenreRessource.Personnel,
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
                genre: Enumere_Ressource_1.EGenreRessource.Enseignant,
                getDisabled() {
                  return !UtilitaireMessagerie_1.UtilitaireMessagerie.estGenreDestinataireAutorise(
                    Enumere_Ressource_1.EGenreRessource.Enseignant,
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
      _composeBlockGenreDestinataire(aElt) {
        const lResult = [];
        if (!!aElt.aLaLigne) {
          lResult.push('<br/>');
        }
        lResult.push(
          '<div class="InlineBlock AlignementHaut" title="',
          ObjetChaine_1.GChaine.toTitle(aElt.hint),
          '" style="padding-right:10px; padding-bottom: 5px;">',
        );
        lResult.push(
          '<ie-checkbox ie-model="cbTypeDestinatairePourEleve(',
          aElt.id,
          ')">',
        );
        lResult.push('</ie-checkbox>');
        lResult.push('</div>');
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
        if (GNavigateur.withContentEditable) {
          TinyInit_1.TinyInit.init({
            id: this.idContenuMsg,
            labelWAI: 'Zone de texte riche saisie du message',
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
      _composeChampDestinataires() {
        const T = [];
        if (!this.optionsFenetre.avecChoixDestinataires) {
          T.push(
            '<div id="',
            this.id_destinataires_conteneur,
            '" class="field-contain Gras label-up" role="group" aria-label="',
            'Destinataires'.toAttrValue(),
            '">',
            '<div>',
            'Destinataires',
            '</div>',
            '<div id="',
            this.id_destinataires,
            '" class="fluid-bloc"></div>',
            '</div>',
            '<div id="',
            this.idCopieAutresResp,
            '" class="m-top-l full-width">',
            '<ie-checkbox ie-model="cbInclureResponsables" ie-display="estVisibleInclureResponsables">',
            'Copie aux autres parents délégués de la classe',
            '</ie-checkbox>',
            '</div>',
          );
        } else {
          T.push(
            '<div id="',
            this.getNomInstance(this.identDestinataire),
            '"></div>',
          );
        }
        return T.join('');
      }
      _composeChampObjet() {
        return IE.jsx.str(
          'label',
          { class: 'flex-contain cols m-top-l m-bottom-l' },
          IE.jsx.str(
            'span',
            { class: 'ie-titre-petit m-bottom' },
            'Objet',
          ),
          () => {
            if (this.optionsFenetre.transfertMessage) {
              return IE.jsx.str('div', { 'ie-html': 'getObjetTexte' });
            } else {
              return IE.jsx.str('input', {
                'ie-model': 'inputObjet',
                maxlength:
                  UtilitaireMessagerie_1.UtilitaireMessagerie
                    .C_TailleObjetMessage,
                type: 'text',
                class: 'round-style',
              });
            }
          },
        );
      }
      _composeChampPJ() {
        const T = [];
        T.push(
          `<div class="pj-global-conteneur" id="${this.getNomInstance(this.identSelecteurPJ)}"></div>`,
        );
        return T.join('');
      }
      _composeZoneEnteteMsg() {
        const T = [];
        T.push('<div id="', this.idEntete, '" class="full-width m-top">');
        T.push(this._composeChampDestinataires());
        T.push(
          IE.jsx.str('div', {
            'ie-html': 'getLegende',
            'ie-display': 'afficherLegende',
            class: 'm-bottom-xl',
          }),
        );
        T.push(this._composeChampObjet());
        T.push('</div>');
        return T.join('');
      }
      _composeZoneContenuMsg() {
        const T = [];
        const lAvecPJ = this._autorisePJ();
        const lAvecCloud = GEtatUtilisateur.listeCloud.count() > 0;
        T.push(`<div class="flex-contain">`);
        if (this._autorisePJ()) {
          T.push(`<div class="fix-bloc flex-contain cols">\n                ${this._composeChampPJ()}
            </div>`);
        }
        T.push(
          `<div class="fluid-bloc">\n              <textarea id="${this.idContenuMsg}" ${!this._autoriseTiny() ? ' ie-model="textareaSansTiny" maxlength="10000"' : ''} class="round-style" style="height:300px;width:100%;"></textarea>`,
          this.etatUtilisateurSco.messagerieSignature &&
            this.etatUtilisateurSco.messagerieSignature.signature
            ? IE.jsx.str(
                'ie-bouton',
                {
                  'ie-model': 'btnSignature',
                  'ie-icon': 'icon_signature',
                  class: 'themeBoutonNeutre m-top-l',
                },
                'Insérer ma signature',
              )
            : '',
          `</div>`,
        );
        T.push(`</div>`);
        if (lAvecPJ || lAvecCloud) {
          T.push('<div class="m-top-l">');
          if (lAvecPJ) {
            T.push(
              '<div id="',
              this.idLibellePJ,
              '" class="pj-liste-conteneur"></div>',
            );
          }
          if (lAvecCloud) {
            T.push(
              '<div id="',
              this.idLibelleCloud,
              '" class="pj-liste-conteneur"></div>',
            );
          }
          T.push('</div>');
        }
        const lContenu = T.join('');
        if (this._autoriseTiny() || this._autorisePJ()) {
          const lId = `${this.Nom}_labelcontenu`;
          return IE.jsx.str(
            'div',
            {
              role: 'group',
              class: 'flex-contain cols',
              'aria-labelledby': lId,
            },
            IE.jsx.str(
              'span',
              { class: 'ie-titre-petit m-bottom', id: lId },
              'Contenu',
            ),
            lContenu,
          );
        }
        return IE.jsx.str(
          'label',
          { class: 'flex-contain cols' },
          IE.jsx.str(
            'span',
            { class: 'ie-titre-petit m-bottom' },
            'Contenu',
          ),
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
        this.$refreshSelf();
      }
    }
    exports.ObjetFenetre_Message = ObjetFenetre_Message;
  },
  fn: 'objetfenetre_message.js',
});