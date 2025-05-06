IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.CommunicationProduit = void 0;
    require('Divers');
    require('DeclarationForge');
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const Enumere_Cryptage_1 = require('Enumere_Cryptage');
    const Enumere_IdsRequeteAjax_1 = require('Enumere_IdsRequeteAjax');
    const ObjetCryptage_1 = require('ObjetCryptage');
    const ObjetRequete_1 = require('ObjetRequete');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetJSON_1 = require('ObjetJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetRequeteUploadFile_1 = require('ObjetRequeteUploadFile');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const TypeEtatRequeteAjax_1 = require('TypeEtatRequeteAjax');
    const ModuleMD5_RequeteUploadFile_1 = require('ModuleMD5_RequeteUploadFile');
    CollectionRequetes_1.Requetes.inscrire(
      'annulation',
      ObjetRequeteJSON_1.ObjetRequeteConsultation,
    );
    class CommunicationProduit {
      constructor(AGenreEspace, aNumeroSession) {
        this.nom = 'GCommunication';
        this._pileTimerEnAttente = {};
        this._attenteEnCours = false;
        this.FDureeEnCours = 1000 * 0.5;
        this._dureeTimerPresence = CommunicationProduit.cDureeTimerPresence;
        this.GenreEspace = AGenreEspace;
        this.NomRequete = 'appelfonction';
        this.pileRequetes = [];
        this.compteurRequete = 0;
        this.NumeroDeSession = aNumeroSession ? aNumeroSession : '0';
        this.NumeroOrdreCommunication = 1;
        this.cleAES = new forge.util.ByteBuffer();
        this.ivAES = new forge.util.ByteBuffer();
        this.ivAESTemp = new forge.util.ByteBuffer(forge.random.generate(16));
        this.backupAjax = {
          nbBackupEchec: 20,
          delaiTimeoutEchecReseau: 30 * 60 * 1000,
          delaiRepetitionEchecReseau: 3 * 1000,
        };
        this.polling = {
          nbRequetes: 0,
          numeroOrdre: 1,
          nbRepetitionEchecReseau: 15,
          delaiRepetitionEchecReseau: 3000,
          delaiTimeoutEchecReseau: 30 * 60 * 1000,
          delaiTimeoutRequete: 10 * 60 * 1000,
        };
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.modificationPresenceUtilisateur,
          this._modificationPresenceUtilisateur.bind(this),
        );
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.interruption_Requete,
          this._eventInterruptionRequete.bind(this),
        );
        window.addEventListener(
          'pagehide',
          this._requeteBeaconDeconnexion.bind(this),
        );
      }
      getNom() {
        return this.nom;
      }
      setNom(aNom) {
        this.nom = aNom;
      }
      arreter() {
        if (this.estArrete) {
          return;
        }
        this._requeteBeaconDeconnexion();
        clearTimeout(this._timeoutRequeteBackup);
        this.estArrete = true;
        this.desactiverPresence();
        delete this.ivAES;
        delete this.cleAES;
        delete this.NumeroOrdreCommunication;
      }
      getIvAES() {
        return this.ivAES;
      }
      setIvAES() {
        this.ivAES = this.ivAESTemp;
        delete this.ivAESTemp;
      }
      setCleAES(aCleAES) {
        this.cleAES = aCleAES;
      }
      appelFonctionAsynchroneXML(aParametres) {
        if (this.estArrete) {
          return;
        }
        const lParametresAppel = {
          nom: '',
          json: {},
          callbackPere: null,
          callbackEvenement: null,
          requetePrioritaire: false,
          sansBlocageInterface: false,
          messageDetail: '',
          estBackup: false,
          backupDataJSON: null,
        };
        $.extend(lParametresAppel, aParametres);
        let lRequeteUpload = null;
        const lParamsRequete = {
          numeroSession: this.NumeroDeSession,
          numeroRequete: this.compteurRequete,
          nomRequete: this.NomRequete,
          genreEspace: this.GenreEspace,
          sansBlocageInterface: lParametresAppel.sansBlocageInterface === true,
          nomDeFonction: lParametresAppel.nom,
          callBackReadyStateChange: this._evenementSurReponseRequete.bind(
            this,
            lParametresAppel,
          ),
          pereReponse: lParametresAppel.callbackPere,
          evenementReponse: lParametresAppel.callbackEvenement,
          messageDetail: lParametresAppel.messageDetail,
          log: { tailleDonnees: '', tempsChiffre: '' },
        };
        if (!lParametresAppel.estBackup) {
          const lJSONCollection = {};
          lParametresAppel.json = ObjetJSON_1.ObjetJSON.preparerJSON(
            lParametresAppel.json,
            { JSONCollection: lJSONCollection },
          );
          if (
            lParametresAppel.paramsUpload &&
            lParametresAppel.paramsUpload.listeFichiers
          ) {
            lRequeteUpload = this._factoryRequeteUploadFile(
              Object.assign(
                { nomRequete: lParametresAppel.nom },
                lParametresAppel.paramsUpload,
              ),
            );
            if (!lRequeteUpload.estVide()) {
              this.pileRequetes.push(lRequeteUpload);
              this._envoieRequete();
            } else {
              lRequeteUpload = null;
            }
          }
          const lResultJSON = this._traiterJSONEnvoi(lParametresAppel.json);
          Object.assign(lParamsRequete, {
            parametres: lResultJSON.JSON,
            jsonOrigine: lParametresAppel.json,
            jsonNonSecurise: $.isEmptyObject(lJSONCollection)
              ? null
              : lJSONCollection,
            log: {
              tailleDonnees: lResultJSON.JSONStr_clair.length,
              tempsChiffre: lResultJSON.chronoStr,
            },
          });
        } else {
          Object.assign(lParamsRequete, {
            estBackup: true,
            dataPOST: lParametresAppel.backupDataJSON,
          });
        }
        const lRequete = new ObjetRequete_1.ObjetRequete(lParamsRequete);
        if (lParametresAppel.estBackup) {
          this.pileRequetes.splice(0, 0, lRequete);
        } else if (lParametresAppel.requetePrioritaire && !lRequeteUpload) {
          this.pileRequetes.splice(1, 0, lRequete);
        } else {
          this.pileRequetes.push(lRequete);
        }
        this.compteurRequete += 1;
        if (lRequeteUpload) {
          lRequeteUpload.requeteSaisieApresUpload = lRequete;
        }
        this._envoieRequete();
        return lRequete;
      }
      setMAJServeurEnCours(aMAJEnCours) {
        this._MAJServeurEnCours = aMAJEnCours;
        if (this._requetePresenceActive) {
          this._requetePresenceDelai();
        }
      }
      activerPresence() {
        this._requetePresenceActive = true;
        this._requetePresenceDelai();
        this._envoiRequetePolling();
      }
      desactiverPresence() {
        this._requetePresenceActive = false;
        window.clearTimeout(this.timerPresence);
      }
      setDureeTimerPresence(aDureeMs) {
        this._dureeTimerPresence = aDureeMs;
        if (this._requetePresenceActive) {
          this._requetePresenceDelai();
        }
      }
      requeteEnCours() {
        return (
          (this.pileRequetes[0] && this.pileRequetes[0].enAttente()) ||
          this._attenteEnCours
        );
      }
      composeUrlFichier(aPrefix, aNomFichier, aParam) {
        let lResult = '';
        if (aPrefix !== '') {
          lResult += aPrefix + '/';
        }
        lResult += this.getChaineChiffreeAES(
          JSON.stringify(
            aParam && aParam.toJSONAll ? aParam.toJSONAll() : aParam,
          ),
        );
        lResult += '/' + aNomFichier;
        lResult += '?Session=' + this.NumeroDeSession;
        if (aParam.miniature !== null && aParam.miniature !== undefined) {
          lResult += '&miniature=' + aParam.miniature;
        }
        return lResult;
      }
      composeUrlFichierExterne(aNomFichier, aParam) {
        return this.composeUrlFichier(
          'FichiersExternes',
          ObjetChaine_1.GChaine.enleverEntites(aNomFichier),
          aParam,
        );
      }
      getChaineChiffreeAES(aChaine) {
        return ObjetCryptage_1.GCryptage.encrypter({
          genreCryptage: Enumere_Cryptage_1.EGenreCryptage.AES,
          chaine: aChaine,
          cle: this.cleAES,
          iv: this.ivAES,
        });
      }
      getChaineDechiffreeAES(aChaine) {
        return ObjetCryptage_1.GCryptage.decrypter({
          genreCryptage: Enumere_Cryptage_1.EGenreCryptage.AES,
          chaine: aChaine,
          cle: this.cleAES,
          iv: this.ivAES,
        });
      }
      serialiserIVAESPourSeveur() {
        if (CommunicationProduit.optionsSecurite.http) {
          return ObjetCryptage_1.GCryptage.getCryptageRSA().encrypter1024(
            this.ivAESTemp,
          );
        }
        return forge.util.encode64(this.ivAESTemp.bytes(), 64);
      }
      sendLogClient(aMessage) {
        if (aMessage && navigator && navigator.sendBeacon) {
          try {
            navigator.sendBeacon(
              'LogClientLeger',
              ObjetJSON_1.ObjetJSON.toJSON({
                ns: parseInt(this.NumeroDeSession, 10),
                msg: aMessage,
              }),
            );
          } catch (e) {}
        }
      }
      startPolling() {
        this._envoiRequetePolling();
      }
      _traiterJSONEnvoi(aJSON) {
        const lResult = { JSON: aJSON, JSONStr_clair: '', chronoStr: '' };
        if (!aJSON) {
          return lResult;
        }
        const lSecurise = !CommunicationProduit.optionsSecurite.sansCryptageAES;
        let lChrono;
        if (lSecurise) {
          if (
            IE.log &&
            IE.log.getActifRequete &&
            IE.log.getActifRequete() &&
            Chronometre_1.Chronometre
          ) {
            lChrono = new Chronometre_1.Chronometre();
          }
          lResult.JSONStr_clair = JSON.stringify(lResult.JSON) || '';
          lResult.JSON = ObjetCryptage_1.GCryptage.encrypter({
            genreCryptage: lSecurise
              ? Enumere_Cryptage_1.EGenreCryptage.AES
              : Enumere_Cryptage_1.EGenreCryptage.Unicode,
            chaine: lResult.JSONStr_clair,
            cle: this.cleAES,
            iv: lSecurise ? this.ivAES : null,
            avecCompression:
              lSecurise &&
              !CommunicationProduit.optionsSecurite.sansCompressionAES,
          });
          if (lChrono) {
            lResult.chronoStr = lChrono.toString();
          }
        } else {
        }
        return lResult;
      }
      _factoryRequeteUploadFile(aDonnees) {
        const lDonnees = Object.assign(
          {
            listeFichiers: null,
            moduleMD5:
              ModuleMD5_RequeteUploadFile_1.ModuleMD5_RequeteUploadFile,
            conserverIdFichier: false,
            filtreFichiers: function (D) {
              return (
                !!D &&
                (D.getEtat() === Enumere_Etat_1.EGenreEtat.Creation ||
                  D.getEtat() === Enumere_Etat_1.EGenreEtat.Modification) &&
                D.existe() &&
                D.idFichier !== CommunicationProduit.c_IdFichierAIgnorer &&
                D.idFichier !== undefined &&
                !!D.file
              );
            },
            getFormData: (aFichier) => {
              return {
                numeroOrdre: this.getChaineChiffreeAES(
                  this.NumeroOrdreCommunication,
                ),
                numeroSession: this.NumeroDeSession,
                nomRequete: lDonnees.nomRequete,
                idFichier: aFichier.idFichier,
              };
            },
            getUrl: () => {
              return ObjetChaine_1.GChaine.format('%s/%s/%s', [
                'uploadfilesession',
                this.GenreEspace,
                this.NumeroDeSession,
              ]);
            },
            callbackInterrupt: function () {
              (0, CollectionRequetes_1.Requetes)('annulation')
                .setOptions({ requetePrioritaire: true })
                .lancerRequete({ annulationUpload: true });
            },
            callbackEach: (aJSON) => {
              let lNumeroOrdre = null;
              try {
                if (aJSON && aJSON.numeroOrdre) {
                  lNumeroOrdre = parseInt(
                    ObjetCryptage_1.GCryptage.decrypter({
                      genreCryptage: Enumere_Cryptage_1.EGenreCryptage.AES,
                      chaine: aJSON.numeroOrdre,
                      cle: this.cleAES,
                      iv: this.ivAES,
                    }),
                    10,
                  );
                }
              } catch (e) {}
              if (lNumeroOrdre !== this.NumeroOrdreCommunication + 1) {
                return this._getErreurConnexionInterrompue();
              } else {
                this.NumeroOrdreCommunication += 2;
              }
              return null;
            },
            callbackDone: (aParams) => {
              if (aParams.erreurSession) {
                this._composePageErreur(aParams.erreurSession);
                return;
              }
              if (
                aParams.requete &&
                aParams.requete.requeteSaisieApresUpload &&
                aParams.requete.requeteSaisieApresUpload.etat ===
                  TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.initial &&
                aParams.progression.error &&
                (aParams.requete.donnees.annulerSurErreurUpload ||
                  (aParams.progression.error.abort &&
                    aParams.requete.donnees.annulerSurAbortUpload))
              ) {
                aParams.requete.requeteSaisieApresUpload.estRequeteAnnulee = true;
              }
              if (
                aParams.requete.estUploadFile &&
                aParams.requete.enAttente()
              ) {
                this._setRequeteEtatTermine(aParams.requete);
              } else {
              }
              if (!CommunicationProduit.optionsSecurite.avecPollingActif) {
                this.activerPresence();
              }
              this._envoieRequete();
            },
          },
          aDonnees,
        );
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        if (lDonnees.listeFichiers && lDonnees.listeFichiers.parcourir) {
          lDonnees.listeFichiers.parcourir((D) => {
            if (lDonnees.filtreFichiers && lDonnees.filtreFichiers(D)) {
              const lElement = MethodesObjet_1.MethodesObjet.dupliquer(D);
              lElement.file = D.file;
              lListe.addElement(lElement);
              if (!lDonnees.conserverIdFichier) {
                D.idFichier = CommunicationProduit.c_IdFichierAIgnorer;
              }
            }
          });
        }
        lDonnees.listeFichiers = lListe;
        return new ObjetRequeteUploadFile_1.ObjetRequeteUploadFile(lDonnees);
      }
      _envoieRequete() {
        clearTimeout(this._timeoutRequeteBackup);
        const lRequete = this.pileRequetes[0];
        if (!lRequete) {
          return;
        }
        const lEstRequeteAjax = lRequete instanceof ObjetRequete_1.ObjetRequete;
        const lEstRequeteUpload =
          lRequete instanceof ObjetRequeteUploadFile_1.ObjetRequeteUploadFile;
        if (
          lRequete.estRequeteAnnulee &&
          !lRequete.enAttente() &&
          lEstRequeteAjax
        ) {
          this._surReception(lRequete, null, { annulationRequete: true });
          return;
        }
        if (!lRequete.enAttente()) {
          lRequete.etat =
            TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.preparationEnvoi;
          if (
            !this._attenteEnCours &&
            (lEstRequeteUpload ||
              (lEstRequeteAjax &&
                (!lRequete.Parametres ||
                  !lRequete.Parametres.sansBlocageInterface)))
          ) {
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.eventIOAjax,
              {
                emission: true,
                upload: !lRequete.estUneRequete,
                message: lEstRequeteAjax
                  ? lRequete.Parametres.messageDetail
                  : null,
                delai:
                  this.pileRequetes.length > 1 ||
                  (lEstRequeteAjax &&
                    lRequete.Parametres &&
                    lRequete.Parametres.estBackup)
                    ? 0
                    : null,
              },
            );
          }
          if (lRequete.estUneRequete && lEstRequeteAjax) {
            lRequete.envoieRequete({
              numeroOrdre: this.NumeroOrdreCommunication,
              numeroOrdreChiffre: this.getChaineChiffreeAES(
                this.NumeroOrdreCommunication,
              ),
            });
          } else if (lRequete.estUploadFile && lEstRequeteUpload) {
            if (!CommunicationProduit.optionsSecurite.avecPollingActif) {
              this.desactiverPresence();
            }
            lRequete.envoiRequete();
          } else {
          }
        } else {
          if (
            lRequete &&
            lEstRequeteAjax &&
            lRequete.etat ===
              TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.envoye &&
            !this._attenteEnCours &&
            lRequete.Parametres &&
            lRequete.Parametres.sansBlocageInterface
          ) {
            let lAvecBlocageEnAttente = false;
            this.pileRequetes.every((aRequete, aIndex) => {
              if (
                aRequete &&
                (aRequete instanceof
                  ObjetRequeteUploadFile_1.ObjetRequeteUploadFile ||
                  (aRequete instanceof ObjetRequete_1.ObjetRequete &&
                    (!aRequete.Parametres ||
                      !aRequete.Parametres.sansBlocageInterface)))
              ) {
                lAvecBlocageEnAttente = true;
                this.pileRequetes.every((aRequete, aIndex2) => {
                  if (
                    aRequete &&
                    aRequete instanceof ObjetRequete_1.ObjetRequete &&
                    aRequete.Parametres &&
                    aRequete.Parametres.sansBlocageInterface
                  ) {
                    aRequete.Parametres.sansBlocageInterface = false;
                  }
                  return aIndex2 < aIndex;
                });
                return false;
              }
              return true;
            });
            if (lAvecBlocageEnAttente) {
              Invocateur_1.Invocateur.evenement(
                Invocateur_1.ObjetInvocateur.events.eventIOAjax,
                { emission: true, upload: false, delai: 0 },
              );
            }
          }
        }
      }
      _getErreurConnexionInterrompue() {
        return {
          Titre: '',
          Message: 'Connexion interrompue !',
        };
      }
      _getXmlReponseStatut200(ARequete, AReponse, aJSON, aSurPolling) {
        if (this.estArrete) {
          return;
        }
        const lNumeroSession =
          aJSON[Enumere_IdsRequeteAjax_1.EGenreIdsRequeteAjax.numeroSession];
        const lNumeroOrdre =
          aJSON[Enumere_IdsRequeteAjax_1.EGenreIdsRequeteAjax.numeroOrdre];
        const lDonneesSecurisees =
          aJSON[Enumere_IdsRequeteAjax_1.EGenreIdsRequeteAjax.donneesSecurisee];
        const lSecurise = !CommunicationProduit.optionsSecurite.sansCryptageAES;
        let lNomRequete =
          aJSON[Enumere_IdsRequeteAjax_1.EGenreIdsRequeteAjax.nomFonction] +
          'Reponse';
        const lErreur = this._getErreurConnexionInterrompue();
        if (aSurPolling) {
          lNomRequete = 'pollingReponse';
        }
        if (
          parseInt(this.NumeroDeSession, 10) !== lNumeroSession &&
          lNumeroSession !== 0
        ) {
          if (!aJSON.Erreur) {
            aJSON.Erreur = lErreur;
          }
          return null;
        }
        const lNumOrdreServeur = parseInt(
          ObjetCryptage_1.GCryptage.decrypter({
            genreCryptage: Enumere_Cryptage_1.EGenreCryptage.AES,
            chaine: lNumeroOrdre,
            cle: this.cleAES,
            iv: this.ivAES,
          }),
          10,
        );
        let lEstErreurNumeroOrdre = false;
        if (aSurPolling) {
          lEstErreurNumeroOrdre =
            lNumOrdreServeur !== this.polling.numeroOrdre - 1;
        } else {
          lEstErreurNumeroOrdre =
            lNumOrdreServeur !== this.NumeroOrdreCommunication + 1;
        }
        if (lEstErreurNumeroOrdre) {
          if (!aJSON.Erreur) {
            aJSON.Erreur = lErreur;
          }
          return null;
        }
        if (!aSurPolling) {
          this.NumeroOrdreCommunication += 2;
        }
        let lChrono;
        let lChronoTrait = '';
        if (lSecurise) {
          if (
            IE.log &&
            IE.log.getActifRequete &&
            IE.log.getActifRequete() &&
            Chronometre_1.Chronometre
          ) {
            lChrono = new Chronometre_1.Chronometre();
          }
          const lReponse = ObjetCryptage_1.GCryptage.decrypter({
            genreCryptage: CommunicationProduit.optionsSecurite.sansCryptageAES
              ? Enumere_Cryptage_1.EGenreCryptage.Unicode
              : Enumere_Cryptage_1.EGenreCryptage.AES,
            chaine: lDonneesSecurisees,
            cle: this.cleAES,
            iv: this.ivAES,
            avecCompression:
              !CommunicationProduit.optionsSecurite.sansCompressionAES,
          });
          aJSON.donnees = ObjetJSON_1.ObjetJSON.parseJSON(lReponse);
          if (lChrono && IE.log.getActifRequete()) {
            lChronoTrait = lChrono.toString();
          }
        } else {
          aJSON.donnees = lDonneesSecurisees;
        }
        delete aJSON[
          Enumere_IdsRequeteAjax_1.EGenreIdsRequeteAjax.donneesSecurisee
        ];
        if (!aJSON.donnees) {
          aJSON.Erreur = lErreur;
          return null;
        }
        aJSON.donnees = ObjetJSON_1.ObjetJSON.parseVariables(aJSON.donnees, {
          JSONCollection:
            aJSON[
              Enumere_IdsRequeteAjax_1.EGenreIdsRequeteAjax.donneesNonSecurisee
            ],
        });
        try {
          if (IE.log.getActifRequete()) {
            let lChronoServeur = null;
            let lChronoSaisieMs;
            let lEstAttente = false;
            IE.log.addRequete({
              nomRequete: lNomRequete,
              numeroRequete: ARequete.Parametres.numeroRequete,
              numeroOrdre: aSurPolling
                ? this.polling.numeroOrdre
                : this.NumeroOrdreCommunication - 1,
              chrono: {
                requeteServeurtickMs: lChronoServeur,
                traitement: lChronoTrait,
                saisieMS: lChronoSaisieMs,
              },
              estReponse: true,
              lgcontenu: AReponse.length,
              estPolling: ARequete.Parametres.estPolling,
              estAttente: lEstAttente,
            });
          }
        } catch (e) {}
      }
      _evenementSurReponseRequete(
        aParametresAppel,
        ARequete,
        AReponse,
        AStatut,
      ) {
        this._traiterPileAttenteSurReponseRequete(ARequete);
        clearTimeout(this._timeoutRequeteBackup);
        const lStatut =
          typeof AStatut === 'number' ? AStatut : parseInt(AStatut, 10);
        switch (lStatut) {
          case 200: {
            if (aParametresAppel.estRequeteDeconnexion) {
              this._requeteDeconnexionEnvoyee = true;
            }
            const lJSONReseau = ObjetJSON_1.ObjetJSON.parseJSON(AReponse);
            if (!lJSONReseau) {
              this._composePageErreur(this._getErreurConnexionInterrompue());
              return;
            } else {
              this._getXmlReponseStatut200(ARequete, AReponse, lJSONReseau);
            }
            if (
              lJSONReseau.Erreur ||
              (lJSONReseau.donnees && lJSONReseau.donnees.Erreur)
            ) {
              this._composePageErreur(
                lJSONReseau.Erreur
                  ? lJSONReseau.Erreur
                  : lJSONReseau.donnees.Erreur,
              );
            } else {
              const lJSONAttente =
                lJSONReseau.donnees[
                  Enumere_IdsRequeteAjax_1.EGenreIdsRequeteAjax.SignatureAttente
                ];
              const lParametresAttente = lJSONAttente
                ? this._recupererParametresAttente(lJSONAttente.Parametres)
                : {};
              if (lJSONAttente) {
                if (!lParametresAttente.sansBlocageInterface) {
                  this._attenteEnCours = !!lJSONAttente;
                }
              } else {
                this._attenteEnCours = false;
              }
              if (this._attenteEnCours) {
                if (ARequete.Parametres.sansBlocageInterface) {
                  Invocateur_1.Invocateur.evenement(
                    Invocateur_1.ObjetInvocateur.events.eventIOAjax,
                    {
                      emission: true,
                      upload: false,
                      message: ARequete.Parametres.messageDetail,
                    },
                  );
                  delete ARequete.Parametres.sansBlocageInterface;
                }
                this._declencherAttente({
                  JSONAttente: lJSONAttente,
                  requeteModele: ARequete,
                  parametresAttente: lParametresAttente,
                });
              } else {
                if (!ARequete.Parametres.sansBlocageInterface) {
                  Invocateur_1.Invocateur.evenement(
                    Invocateur_1.ObjetInvocateur.events.eventIOAjax,
                    { emission: false },
                  );
                }
                if (lJSONAttente && lParametresAttente.sansBlocageInterface) {
                  this._declencherAttente({
                    JSONAttente: lJSONAttente,
                    requeteModele: ARequete,
                    parametresAttente: lParametresAttente,
                  });
                  if (lParametresAttente.deserialisation) {
                    this._surReception(ARequete, lJSONReseau);
                  } else {
                    this._setRequeteEtatTermine(ARequete);
                    this._envoieRequete();
                  }
                } else {
                  this._surReception(ARequete, lJSONReseau);
                }
              }
            }
            break;
          }
          default: {
            IE.log.addLog(
              'échec requête ajax. requête = ' +
                ARequete +
                '. statut = ' +
                AStatut,
            );
            if (this._renvoyerRequeteSurErreur(ARequete, lStatut)) {
              return;
            }
            if (!window.GApplication || !GApplication._unloadEnCours) {
              let lMessage = `erreur ajax - requete : ${ARequete} - statut : ${AStatut}`;
              if (ARequete.Parametres && ARequete.Parametres.estBackup) {
                lMessage += ' (backup)';
              }
              this.sendLogClient(lMessage);
            }
            this._composePageErreur(null, AStatut);
            break;
          }
        }
      }
      _renvoyerRequeteSurErreur(aRequete, aStatut) {
        clearTimeout(this._timeoutRequeteBackup);
        if (
          this.estArrete ||
          !aRequete ||
          !aRequete.backupDataJSON ||
          !aRequete.Parametres
        ) {
          return false;
        }
        if (aStatut !== 0 && !aRequete.Parametres.DEBUG_decoSimule) {
          return false;
        }
        if (aRequete.nbBackup > this.backupAjax.nbBackupEchec) {
          return false;
        }
        if (
          aRequete.nbBackup >= 4 &&
          aRequete.timeDebutBackup &&
          Date.now() - aRequete.timeDebutBackup >
            this.backupAjax.delaiTimeoutEchecReseau
        ) {
          return false;
        }
        this._timeoutRequeteBackup = setTimeout(() => {
          if (!aRequete.Parametres.sansBlocageInterface) {
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.eventIOAjax,
              { emission: false },
            );
          }
          if (this.estArrete) {
            return;
          }
          this._setRequeteEtatTermine(aRequete);
          const lRequeteBackup = this.appelFonctionAsynchroneXML({
            estBackup: true,
            backupDataJSON: aRequete.backupDataJSON,
            json: null,
            nom: aRequete.Parametres.nomDeFonction,
            callbackPere: aRequete.Parametres.pereReponse,
            callbackEvenement: aRequete.Parametres.evenementReponse,
            messageDetail:
              aRequete.nbBackup > 3
                ? 'La connexion au serveur a été perdue, tentative de reconnexion.'
                : aRequete.Parametres.messageDetail,
            sansBlocageInterface: false,
          });
          if (!aRequete.timeDebutBackup) {
            lRequeteBackup.nbBackup = 1;
            lRequeteBackup.timeDebutBackup = Date.now();
          } else {
            lRequeteBackup.nbBackup = aRequete.nbBackup + 1;
            lRequeteBackup.timeDebutBackup = aRequete.timeDebutBackup;
          }
        }, this.backupAjax.delaiRepetitionEchecReseau);
        return true;
      }
      _declencherAttente(aParametres) {
        const lParametres = {
          JSONAttente: null,
          requeteModele: null,
          parametresAttente: {},
        };
        $.extend(lParametres, aParametres);
        if (!lParametres.parametresAttente.sansBlocageInterface) {
          window.clearTimeout(this.Timer);
          this.Timer = setTimeout(
            this._repeterRequeteAttente.bind(this, lParametres),
            lParametres.parametresAttente.delai,
          );
        } else {
          const lNomFunction =
            lParametres.requeteModele.Parametres.nomDeFonction;
          if (this._pileTimerEnAttente[lNomFunction]) {
            if (this._pileTimerEnAttente[lNomFunction].timer) {
              clearTimeout(this._pileTimerEnAttente[lNomFunction].timer);
            }
            delete this._pileTimerEnAttente[lNomFunction];
          }
          if (lParametres.requeteModele.__interruptionReponse) {
            delete lParametres.requeteModele.__interruptionReponse;
            return;
          }
          const lTimer = setTimeout(
            this._repeterRequeteAttente.bind(this, lParametres),
            lParametres.parametresAttente.delai,
          );
          this._pileTimerEnAttente[lNomFunction] = { timer: lTimer };
        }
      }
      _repeterRequeteAttente(aParametres) {
        let lJSON;
        const lNomRequete = aParametres.requeteModele.Parametres.nomDeFonction;
        if (aParametres.parametresAttente.repeterRequete) {
          lJSON = aParametres.requeteModele.Parametres.jsonOrigine;
          if (
            !(
              lJSON &&
              lJSON[
                Enumere_IdsRequeteAjax_1.EGenreIdsRequeteAjax.SignatureAttente
              ]
            ) &&
            aParametres.JSONAttente
          ) {
            lJSON[
              Enumere_IdsRequeteAjax_1.EGenreIdsRequeteAjax.SignatureAttente
            ] = MethodesObjet_1.MethodesObjet.dupliquer(
              aParametres.JSONAttente,
            );
          }
        } else {
          lJSON = {};
          if (aParametres.JSONAttente) {
            lJSON[
              Enumere_IdsRequeteAjax_1.EGenreIdsRequeteAjax.SignatureAttente
            ] = MethodesObjet_1.MethodesObjet.dupliquer(
              aParametres.JSONAttente,
            );
          }
        }
        this._setRequeteEtatTermine(aParametres.requeteModele);
        const lRequete = this.appelFonctionAsynchroneXML({
          nom: lNomRequete,
          json: lJSON,
          callbackPere: aParametres.requeteModele.Parametres.pereReponse,
          callbackEvenement:
            aParametres.requeteModele.Parametres.evenementReponse,
          requetePrioritaire:
            !aParametres.parametresAttente.sansBlocageInterface,
          sansBlocageInterface:
            aParametres.parametresAttente.sansBlocageInterface,
        });
        if (aParametres.parametresAttente.sansBlocageInterface) {
          lRequete.__estUneAttenteNonBloquante = true;
          this._pileTimerEnAttente[lRequete.Parametres.nomDeFonction].requete =
            lRequete;
        }
      }
      _traiterPileAttenteSurReponseRequete(aRequete) {
        if (aRequete && aRequete.__estUneAttenteNonBloquante) {
          const lNomRequete = aRequete.Parametres.nomDeFonction;
          if (this._pileTimerEnAttente[lNomRequete]) {
            if (this._pileTimerEnAttente[lNomRequete].timer) {
              clearTimeout(this._pileTimerEnAttente[lNomRequete].timer);
            }
            delete this._pileTimerEnAttente[lNomRequete];
          }
          delete aRequete.__estUneAttenteNonBloquante;
        }
      }
      _eventInterruptionRequete(aParametres) {
        if (this.estArrete) {
          return;
        }
        const lParametres = { nomRequete: '' };
        $.extend(lParametres, aParametres);
        if (
          lParametres.nomRequete &&
          this._pileTimerEnAttente[lParametres.nomRequete]
        ) {
          if (this._pileTimerEnAttente[lParametres.nomRequete].timer) {
            clearTimeout(
              this._pileTimerEnAttente[lParametres.nomRequete].timer,
            );
            delete this._pileTimerEnAttente[lParametres.nomRequete].timer;
          }
          if (this._pileTimerEnAttente[lParametres.nomRequete].requete) {
            this._pileTimerEnAttente[
              lParametres.nomRequete
            ].requete.__interruptionReponse = true;
          } else {
            delete this._pileTimerEnAttente[lParametres.nomRequete];
          }
          IE.log.addLog(
            'requete en attente : [' + lParametres.nomRequete + '] interrompu',
          );
        }
      }
      _recupererParametresAttente(aParametres) {
        const lParametres = {
          sansBlocageInterface: false,
          delai: this.FDureeEnCours,
          repeterRequete: false,
          deserialisation: false,
          date: null,
        };
        if (aParametres) {
          if (aParametres.sansBlocageInterface) {
            lParametres.sansBlocageInterface = true;
          }
          if (aParametres.delai && aParametres.delai > 0) {
            lParametres.delai = aParametres.delai * 1000;
          }
          if (aParametres.repeterRequete) {
            lParametres.repeterRequete = true;
          }
          if (aParametres.date) {
            lParametres.date = aParametres.date;
          }
          if (aParametres.deserialisation) {
            lParametres.deserialisation = aParametres.deserialisation;
          }
        }
        return lParametres;
      }
      _setRequeteEtatTermine(aRequete) {
        if (aRequete) {
          aRequete.etat = TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.termine;
          this.pileRequetes = this.pileRequetes.filter((aRequete, aIndex) => {
            return (
              !!aRequete &&
              aRequete.etat !==
                TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.termine
            );
          });
        }
        this._requetePresenceDelai();
      }
      _surReception(aRequete, aJSON, aDonneesEchec) {
        this._setRequeteEtatTermine(aRequete);
        this._envoieRequete();
        if (
          aRequete.Parametres.pereReponse &&
          aRequete.Parametres.evenementReponse
        ) {
          aRequete.Parametres.evenementReponse.call(
            aRequete.Parametres.pereReponse,
            aJSON ? aJSON.donnees : {},
            aDonneesEchec,
          );
        }
      }
      _composePageErreur(aJSONErreur, aStatut) {
        const lParametres = {
          constructionPage: true,
          statut: aStatut,
          jsonErreur: aJSONErreur,
        };
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.erreurCommunication,
          lParametres,
        );
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.fermerFenetres,
          true,
        );
      }
      _requeteBeaconDeconnexion() {
        if (
          navigator &&
          navigator.sendBeacon &&
          !this.estArrete &&
          this.NumeroOrdreCommunication > 0 &&
          !this._requeteDeconnexionEnvoyee
        ) {
          this._requeteDeconnexionEnvoyee = true;
          const lNumeroOrdre = this.getChaineChiffreeAES(
            this.NumeroOrdreCommunication,
          );
          if (lNumeroOrdre) {
            try {
              navigator.sendBeacon(
                'appeldeconnexion/' + lNumeroOrdre + '/' + new Date().getTime(),
                ObjetJSON_1.ObjetJSON.toJSON({
                  ns: parseInt(this.NumeroDeSession, 10),
                  no: lNumeroOrdre,
                }),
              );
            } catch (e) {}
          }
        }
      }
      _requetePresenceDelai() {
        window.clearTimeout(this.timerPresence);
        this.timerPresence = setTimeout(
          this._requeteDePresence.bind(this),
          this._getDureeTimerPresence(),
        );
      }
      _getDureeTimerPresence() {
        return this._MAJServeurEnCours
          ? Math.min(
              CommunicationProduit.cDureeTimerPresenceMAJServeurEnCours,
              this._dureeTimerPresence,
            )
          : this._dureeTimerPresence;
      }
      _requeteDePresence() {
        if (CommunicationProduit.optionsSecurite.avecPollingActif) {
          return;
        }
        if (
          !this.requeteEnCours() &&
          this._requetePresenceActive &&
          this._requetePresenceEnPause !== true
        ) {
        }
        this._requetePresenceDelai();
      }
      _modificationPresenceUtilisateur(aPresenceUtilisateur) {
        if (this.estArrete) {
          return;
        }
        let lNomRequete;
        if (aPresenceUtilisateur) {
          delete this._requetePresenceEnPause;
          this._requeteDePresence();
          this._envoiRequetePolling({ presence: true });
        } else {
          this._requetePresenceEnPause = true;
          window.clearTimeout(this.timerPresence);
          for (lNomRequete in this._pileTimerEnAttente) {
            if (this._pileTimerEnAttente[lNomRequete]) {
              this._eventInterruptionRequete({ nomRequete: lNomRequete });
            }
          }
        }
      }
      _arretTimeoutsPolling() {
        if (this.polling.timeoutEchec) {
          clearTimeout(this.polling.timeoutEchec);
          this.polling.timeoutEchec = null;
        }
        if (this.polling.timeoutExpirationRequete) {
          clearTimeout(this.polling.timeoutExpirationRequete);
          this.polling.timeoutExpirationRequete = null;
        }
      }
      _envoiRequetePolling(aParams) {
        if (!CommunicationProduit.optionsSecurite.avecPollingActif) {
          return;
        }
        if (this.estArrete) {
          return;
        }
        const lParams = Object.assign({ presence: false }, aParams);
        this._arretTimeoutsPolling();
        if (this.polling.requeteEnCours) {
          if (!lParams.presence) {
            IE.log.addLog('Double envoi Polling');
          }
          return;
        }
        if (
          !this.polling.echecReseau &&
          (this._requetePresenceEnPause || !this._requetePresenceActive)
        ) {
          if (this.polling.messageDecoEnCours) {
            this.polling.messageDecoEnCours = false;
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.eventIOAjax,
              { blocageDeconnexion: false },
            );
          }
          return;
        }
        let lJSONEnvoi = {};
        lJSONEnvoi = ObjetJSON_1.ObjetJSON.preparerJSON(lJSONEnvoi, {
          JSONCollection: {},
        });
        const lResultJSON = this._traiterJSONEnvoi(lJSONEnvoi);
        this.polling.requeteEnCours = new ObjetRequete_1.ObjetRequete({
          numeroSession: this.NumeroDeSession,
          numeroRequete: this.polling.nbRequetes,
          nomRequete: 'appelpolling',
          genreEspace: this.GenreEspace,
          nomDeFonction: 'polling',
          estPolling: true,
          parametres: lResultJSON.JSON,
          echecReseau: this.polling.echecReseau,
          callBackReadyStateChange: (aRequete, aReponse, aStatut) => {
            this.polling.requeteEnCours = null;
            this._arretTimeoutsPolling();
            if (this.estArrete) {
              return;
            }
            this.polling.nbRequetes += 1;
            const lStatut =
              typeof aStatut === 'number' ? aStatut : parseInt(aStatut, 10);
            switch (lStatut) {
              case 200: {
                this.polling.numeroOrdre += 1;
                delete this.polling.echecReseau;
                if (this.polling.messageDecoEnCours) {
                  this.polling.messageDecoEnCours = false;
                  Invocateur_1.Invocateur.evenement(
                    Invocateur_1.ObjetInvocateur.events.eventIOAjax,
                    { blocageDeconnexion: false },
                  );
                }
                const lJSONReseau = aReponse
                  ? ObjetJSON_1.ObjetJSON.parseJSON(aReponse)
                  : null;
                if (lJSONReseau) {
                  this._getXmlReponseStatut200(
                    aRequete,
                    aReponse,
                    lJSONReseau,
                    true,
                  );
                  if (
                    lJSONReseau.Erreur ||
                    (lJSONReseau.donnees && lJSONReseau.donnees.Erreur)
                  ) {
                    this._composePageErreur(
                      lJSONReseau.Erreur
                        ? lJSONReseau.Erreur
                        : lJSONReseau.donnees.Erreur,
                    );
                    return;
                  }
                  if (lJSONReseau.donnees) {
                    Invocateur_1.Invocateur.evenement(
                      'deserialisation_notificationsPolling',
                      lJSONReseau.donnees,
                    );
                  }
                }
                this._envoiRequetePolling();
                break;
              }
              default: {
                if (!this.polling.echecReseau) {
                  this.polling.echecReseau = {
                    nb: 0,
                    timeDebut: Date.now(),
                    log: '',
                  };
                }
                this.polling.echecReseau.nb += 1;
                if (
                  this.polling.echecReseau.nb >=
                    this.polling.nbRepetitionEchecReseau ||
                  (this.polling.echecReseau.timeDebut &&
                    this.polling.echecReseau.nb > 2 &&
                    Date.now() - this.polling.echecReseau.timeDebut >
                      this.polling.delaiTimeoutEchecReseau)
                ) {
                  if (
                    !global.GApplication ||
                    !global.GApplication._unloadEnCours
                  ) {
                    this.sendLogClient(`erreur polling - statut : ${aStatut}`);
                  }
                  IE.log.addLog(
                    'FIN SESSION : Echec requête polling. statut = ' + aStatut,
                  );
                  this._composePageErreur(null, aStatut);
                  return;
                }
                const lDateEchec = new Date();
                this.polling.echecReseau.log +=
                  (this.polling.echecReseau.log ? ' / ' : '') +
                  lDateEchec.getHours() +
                  ':' +
                  lDateEchec.getMinutes() +
                  ':' +
                  lDateEchec.getSeconds() +
                  ':' +
                  lDateEchec.getMilliseconds() +
                  ' -statut:' +
                  aStatut;
                if (
                  !this.polling.messageDecoEnCours &&
                  (this.polling.echecReseau.nb === 3 || lParams.presence)
                ) {
                  this.polling.messageDecoEnCours = true;
                  Invocateur_1.Invocateur.evenement(
                    Invocateur_1.ObjetInvocateur.events.eventIOAjax,
                    {
                      blocageDeconnexion: true,
                      message: 'La connexion au serveur a été perdue, tentative de reconnexion.',
                    },
                  );
                }
                IE.log.addLog(
                  'Echec polling => rejeu requête polling. Statut = ' +
                    aStatut +
                    ' - nb:' +
                    this.polling.echecReseau.nb,
                );
                this.polling.timeoutEchec = setTimeout(() => {
                  this._envoiRequetePolling();
                }, this.polling.delaiRepetitionEchecReseau);
              }
            }
          },
          log: {
            tailleDonnees: lResultJSON.JSONStr_clair.length,
            tempsChiffre: '',
          },
        });
        this.polling.requeteEnCours.envoieRequete({
          numeroOrdre: this.polling.numeroOrdre,
          numeroOrdreChiffre: this.getChaineChiffreeAES(
            this.polling.numeroOrdre,
          ),
        });
        this.polling.timeoutExpirationRequete = setTimeout(() => {
          this.polling.timeoutExpirationRequete = null;
          IE.log.addLog('Timeout Polling');
          if (
            this.polling.requeteEnCours &&
            this.polling.requeteEnCours.getXmlRequest() &&
            this.polling.requeteEnCours.getXmlRequest().abort
          ) {
            return this.polling.requeteEnCours.getXmlRequest().abort();
          }
        }, this.polling.delaiTimeoutRequete);
      }
    }
    exports.CommunicationProduit = CommunicationProduit;
    CommunicationProduit.optionsSecurite = {};
    CommunicationProduit.cDureeTimerPresence = 2 * 60 * 1000;
    CommunicationProduit.cDureeTimerPresenceMAJServeurEnCours = 20 * 1000;
    CommunicationProduit.c_IdFichierAIgnorer = '__idFichierAIgnorer__';
    Invocateur_1.Invocateur.abonner(
      Invocateur_1.ObjetInvocateur.events.initChiffrement,
      (aParam) => {
        const lOptionsSecurite = {};
        if (aParam.http) {
          lOptionsSecurite.http = true;
        }
        if (aParam.sCrA) {
          lOptionsSecurite.sansCryptageAES = true;
        }
        if (aParam.sCoA) {
          lOptionsSecurite.sansCompressionAES = true;
        }
        if (aParam.poll) {
          lOptionsSecurite.avecPollingActif = true;
        }
        CommunicationProduit.optionsSecurite = lOptionsSecurite;
      },
    );
  },
  fn: 'communicationproduit.js',
});