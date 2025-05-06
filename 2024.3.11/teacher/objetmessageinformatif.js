IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetMessageInformatif = void 0;
    require('ObjetMessageInformatif.css');
    const GUID_1 = require('GUID');
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const GestionnaireModale_1 = require('GestionnaireModale');
    const LottiePatience_1 = require('LottiePatience');
    let u_windowOK = false;
    $(window).on('load', () => {
      u_windowOK = true;
    });
    class ObjetMessageInformatif {
      constructor() {
        this.Nom = GUID_1.GUID.getId();
        this.locked = false;
        this.DetailMessageInformatif = '';
        this.IdBarre = this.Nom + '_BarreProgression';
        this.IdDetailMessageInformatif = this.Nom + '_DetailMessageInformatif';
        this.IdMessageInformatif = this.Nom + '_DetailMessage';
        this.compteurBlocage = 0;
        if (u_windowOK) {
          this.init();
        } else {
          $(window).on('load', () => {
            this.init();
          });
        }
      }
      init() {
        if (!IE || !Invocateur_1.Invocateur || !ObjetHtml_1.GHtml) {
          return;
        }
        IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(this.Nom, 2000);
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.eventIOAjax,
          this._surEventIOAjax.bind(this),
        );
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.patience,
          this._surPatience.bind(this),
        );
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.erreurCommunication,
          () => {
            this.debloquer(true);
            this.masquer();
          },
        );
        const lThis = this;
        $(window).on('resize', () => {
          if (lThis.EnAffichage) {
            lThis._positionner();
          }
        });
      }
      setDonnees(
        aMessage,
        aAvecBarreDeProgression,
        ANbElmtsTotal,
        ANbElmtsTraites,
        aParams,
      ) {
        this.AvecBarreDeProgression = aAvecBarreDeProgression;
        this.DetailMessageInformatif = aMessage;
        this.NbElmtsTotal = ANbElmtsTotal;
        this.NbElmtsTraites = (ANbElmtsTraites ? ANbElmtsTraites : 0) - 1;
        const lTraduction = ObjetTraduction_1.GTraductions
          ? 'Veuillez patienter...'
          : '';
        this.afficher(lTraduction, null, true, null, aParams);
        if (this.AvecBarreDeProgression) {
          this.locked = true;
          this.progresser();
        }
      }
      afficher(aMessage, aDuree, aBloquer, aDetailMessageInformatif, aParams) {
        this.compteurBlocage += 1;
        this._arreterTimerAffichage();
        if (!this.locked) {
          this.message = aMessage;
          this.duree = aDuree;
          this.bloquer = aBloquer;
          if (this.bloquer && this.compteurBlocage === 1) {
            this._bloquerInterface();
          }
          this._afficherContenu(
            aMessage,
            aDuree,
            aDetailMessageInformatif,
            aParams,
          );
        }
      }
      bloquerAfficherAvecDelai(
        aMessage,
        aDelaiAffichage,
        aDetailMessageInformatif,
        aParams,
      ) {
        this.compteurBlocage += 1;
        this._arreterTimerAffichage();
        if (!this.locked) {
          this.message = aMessage;
          this.duree = null;
          this.bloquer = true;
          if (this.compteurBlocage === 1) {
            this._bloquerInterface();
          }
          if (this.EnAffichage) {
            this._afficherContenu(
              aMessage,
              null,
              aDetailMessageInformatif,
              aParams,
            );
          } else {
            const lDelaiAffichage =
              !IE.estMobile && aDelaiAffichage ? aDelaiAffichage : 0;
            this._timerAffichage = setTimeout(
              this._afficherContenu.bind(
                this,
                aMessage,
                null,
                aDetailMessageInformatif,
                aParams,
              ),
              lDelaiAffichage,
            );
          }
        }
      }
      masquer() {
        this.compteurBlocage = Math.max(0, this.compteurBlocage - 1);
        if (this.compteurBlocage > 0) {
          return;
        }
        this._arreterTimerAffichage();
        if (!this.locked) {
          ObjetHtml_1.GHtml.setDisplay(this.Nom, false);
          ObjetHtml_1.GHtml.setHtml(this.Nom, '');
          this.DetailMessageInformatif = '';
          if (this.bloquer && this.guidBlocage) {
            try {
              GestionnaireModale_1.GestionnaireModale.bloquerInterface({
                bloquer: false,
                avecVoile: false,
                guidBlocage: this.guidBlocage,
              });
              this.guidBlocage = null;
            } catch (E) {}
          }
          this.EnAffichage = false;
        }
      }
      masquerAvecLock() {
        this._arreterTimerAffichage();
        this.locked = false;
        this.masquer();
      }
      progresser(aParam) {
        this._arreterTimerAffichage();
        if (this.AvecBarreDeProgression && !aParam) {
          this.NbElmtsTraites++;
          if (this.NbElmtsTotal !== 0) {
            const LPourcentage =
              (this.NbElmtsTraites * 100) / this.NbElmtsTotal;
            ObjetHtml_1.GHtml.setHtml(
              this.IdBarre,
              this.construireBarre(LPourcentage),
            );
            ObjetHtml_1.GHtml.setHtml(
              this.IdDetailMessageInformatif,
              this.DetailMessageInformatif +
                ' ' +
                this.NbElmtsTraites +
                '/' +
                this.NbElmtsTotal,
            );
          }
        } else if (
          this.AvecBarreDeProgression &&
          aParam &&
          MethodesObjet_1.MethodesObjet.isObject(aParam)
        ) {
          this.NbElmtsTraites = aParam.progress.actualFile;
          ObjetHtml_1.GHtml.setHtml(
            this.IdBarre,
            this.construireBarre(aParam.progress.percent),
          );
          ObjetHtml_1.GHtml.setHtml(
            this.IdDetailMessageInformatif,
            (aParam.message || this.DetailMessageInformatif) +
              ' ' +
              this.NbElmtsTraites +
              '/' +
              this.NbElmtsTotal,
          );
        }
      }
      debloquer(aDebloquerForcer) {
        this._arreterTimerAffichage();
        const LPourcentage = (this.NbElmtsTraites * 100) / this.NbElmtsTotal;
        if (LPourcentage === 100 || aDebloquerForcer) {
          this.AvecBarreDeProgression = false;
          this.DetailMessageInformatif = '';
          this.locked = false;
        }
      }
      construireBarre(APourcentage) {
        return '<div style="width:' + APourcentage + '%;"></div>';
      }
      setDetailMessageInformatif(AMessage) {
        this.DetailMessageInformatif = AMessage;
        ObjetHtml_1.GHtml.setHtml(this.IdDetailMessageInformatif, AMessage);
      }
      _arreterTimerAffichage() {
        if (this._timerAffichage) {
          clearTimeout(this._timerAffichage);
          delete this._timerAffichage;
        }
      }
      _afficherContenu(aMessage, aDuree, aDetailMessageInformatif, aParams) {
        this._arreterTimerAffichage();
        const lParams = Object.assign(
          { htmlPied: '', controleur: null },
          aParams,
        );
        const lHtml = IE.jsx.str(
          'div',
          { class: 'MessageInformatif', role: 'presentation' },
          IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.estMobile ? IE.jsx.str('div', { class: 'overlay' }) : '',
            IE.jsx.str(
              'div',
              { class: 'content' },
              IE.jsx.str(
                IE.jsx.fragment,
                null,
                IE.jsx.str(
                  'div',
                  {
                    class: 'message',
                    id: this.IdMessageInformatif,
                    tabindex: '-1',
                    role: 'alert',
                  },
                  aMessage,
                ),
                LottiePatience_1.LottiePatience.construire(),
                IE.jsx.str(
                  'div',
                  {
                    class: 'detail-message',
                    id: this.IdDetailMessageInformatif,
                  },
                  aDetailMessageInformatif
                    ? aDetailMessageInformatif
                    : this.DetailMessageInformatif,
                ),
                this.AvecBarreDeProgression
                  ? IE.jsx.str(
                      'div',
                      {
                        id: this.IdBarre,
                        class: 'progress',
                        'aria-hidden': 'true',
                      },
                      this.construireBarre(0),
                    )
                  : '',
                lParams.htmlPied
                  ? IE.jsx.str('div', { class: 'pied' }, lParams.htmlPied)
                  : '',
              ),
            ),
          ),
        );
        if (this.EnAffichage) {
          clearInterval(this.Timer);
        }
        ObjetHtml_1.GHtml.setHtml(this.Nom, lHtml, {
          controleur: lParams.controleur,
        });
        try {
          ObjetHtml_1.GHtml.setDisplay(this.Nom, true);
          $(`#${this.Nom.escapeJQ()} .content`)
            .finish()
            .css('opacity', 0)
            .animate({ opacity: 1 }, { duration: 500 });
          this._positionner();
        } catch (E) {
          try {
            document.getElementById(
              this.IdMessageInformatif,
            ).style.outlineWidth = '0px';
          } catch (e) {}
        }
        this.EnAffichage = true;
        if (aDuree) {
          this.Timer = setTimeout(this.masquer.bind(this), aDuree * 1000);
        }
      }
      _positionner() {
        ObjetPosition_1.GPosition.centrer(this.Nom);
      }
      _bloquerInterface() {
        try {
          this.guidBlocage =
            GestionnaireModale_1.GestionnaireModale.bloquerInterface({
              bloquer: true,
              pourPatience: true,
              avecVoile: false,
              prioriteBlocage:
                GestionnaireModale_1.GestionnaireModale
                  .TypePrioriteBlocageInterface.messageInformatif,
            });
        } catch (E) {}
      }
      _surEventIOAjax(aParametres) {
        if (aParametres.actualisation) {
          if (this.EnAffichage && !this.locked) {
            this.setDetailMessageInformatif(aParametres.message || '');
          }
          return;
        }
        if (aParametres.blocageDeconnexion === true) {
          this.blocageDeconnexion = true;
          this.compteurBlocage = 0;
          this.debloquer(true);
          this.masquer();
          this.bloquerAfficherAvecDelai(
            'Veuillez patienter...',
            0,
            aParametres.message || '',
          );
          return;
        }
        if (aParametres.blocageDeconnexion === false) {
          delete this.blocageDeconnexion;
          this.masquer();
          return;
        }
        if (this.blocageDeconnexion) {
          return;
        }
        if (aParametres.emission) {
          if (aParametres.upload) {
            if (aParametres.nombreFichiers > 0 && aParametres.progress) {
              if (aParametres.progress.personnalise) {
                this.progresser(aParametres);
              } else if (aParametres.progress.percent === 0) {
                this.setDonnees(
                  aParametres.message ||
                    'Transfert des pièces jointes',
                  true,
                  aParametres.nombreFichiers,
                  aParametres.progress.actualFile,
                  aParametres.params,
                );
              } else {
                this.progresser(aParametres);
              }
            } else if (aParametres.nombreFichiers > 0) {
              this.setDonnees(
                aParametres.message ||
                  'Transfert des pièces jointes',
                true,
                aParametres.nombreFichiers,
                null,
                aParametres.params,
              );
            } else {
              this.progresser();
            }
          } else {
            const lMessage = 'Veuillez patienter...';
            const lDetail = aParametres.message || '';
            if (aParametres.delai === 0) {
              this.afficher(lMessage, null, true, lDetail, aParametres.params);
            } else {
              this.bloquerAfficherAvecDelai(
                lMessage,
                aParametres.delai || 500,
                lDetail,
                aParametres.params,
              );
            }
          }
        } else {
          if (aParametres.upload) {
            this.debloquer(aParametres.debloquerForcer);
          }
          this.masquer();
        }
      }
      _surPatience(aAfficher, aParametres) {
        const lParametres = Object.assign(
          { delai: 0, message: '' },
          aParametres,
        );
        if (aAfficher) {
          this.bloquerAfficherAvecDelai(
            'Veuillez patienter...',
            lParametres.delai || 0,
            lParametres.message || '',
          );
        } else {
          this.masquer();
        }
      }
    }
    exports.ObjetMessageInformatif = ObjetMessageInformatif;
  },
  fn: 'objetmessageinformatif.js',
});