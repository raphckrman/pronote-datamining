IE.fModule({
  f: function (exports, require, module, global) {
    const { TypeThemeBouton } = require('Type_ThemeBouton.js');
    const { EGenreDocumentJoint } = require('Enumere_DocumentJoint.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { GChaine } = require('ObjetChaine.js');
    const { ObjetListeElements } = require('ObjetListeElements.js');
    const { GUID } = require('GUID.js');
    const { GStyle } = require('ObjetStyle.js');
    const { GHtml } = require('ObjetHtml.js');
    const { ObjetElement } = require('ObjetElement.js');
    const { GDate } = require('ObjetDate.js');
    const { UtilitaireUrl } = require('UtilitaireUrl.js');
    const {
      EModeAffichageTimeline,
    } = require('Enumere_ModeAffichageTimeline.js');
    const { UtilitaireAudio } = require('UtilitaireAudio.js');
    require('UtilitaireBloc.css');
    const EGenreTitreBloc = { texte: 0, document: 1 };
    const EGenreProfondeurBloc = { petite: 0, moyenne: 1, grande: 2 };
    const EGenreBoutonBloc = {
      bouton: 0,
      texte: 1,
      selecFile: 2,
      chips: 3,
      chipsAudio: 4,
    };
    function TUtilitaireBloc() {}
    TUtilitaireBloc.compose = function (aParams) {
      const lDefault = {
        genreTitre: EGenreTitreBloc.texte,
        titre: '',
        estSelectionne: false,
        estTitreAvecEspace: true,
        estTitreMaigre: false,
        estPlie: false,
        sansContenu: false,
        htmlContenu: '',
        widthColDroite: 150,
        widthBtnAction: 120,
        eventPropagationTitre: null,
        eventPropagationSurBlocEntier: false,
        infoSousTitre: { avecInfo: false, strInfo: '' },
        infoTitre: { avecInfo: false, strInfo: '' },
        marqueurV: {
          avecMarqueur: true,
          surTitreUniquement: true,
          couleur: GCouleur.themeNeutre.sombre,
          epaisseur: 4,
        },
        documents: {
          genreRessource: aParams.genreRessourceDocumentJoint,
          avecDocuments: false,
          listeDocuments: new ObjetListeElements(),
        },
        ombre: { avecOmbre: true, profondeur: EGenreProfondeurBloc.petite },
        bordure: { avecBordure: false, couleur: GCouleur.themeNeutre.claire },
        avecArrondis: true,
        avecVoile: false,
        avecMargeGauche: true,
        avecNoWrap: false,
        couleursBloc: {
          fondBloc: '#ffffff',
          fondTitre: '#ffffff',
          fondContenu: '#ffffff',
          texteTitre: 'black',
          texteContenu: 'black',
        },
        menuContextuel: { actif: false, avecBtn3Pts: false, param: {} },
        boutonsActions: [],
      };
      const lParams = $.extend(true, {}, lDefault, aParams);
      return this.composeHtml({
        param: lParams,
        titre: this.composeTitre(lParams),
        contenu: this.composeContenu(lParams),
      });
    };
    TUtilitaireBloc.getCssProfondeur = function (aProfondeur) {
      switch (aProfondeur) {
        case EGenreProfondeurBloc.petite:
          return 'z-depth-1';
        case EGenreProfondeurBloc.moyenne:
          return 'z-depth-3';
        case EGenreProfondeurBloc.grande:
          return 'z-depth-5';
        default:
          break;
      }
    };
    TUtilitaireBloc.composeHtml = function (aParams) {
      const H = [];
      const lEstListe = aParams.param.estListe;
      const lClass = aParams.param.estSelectionne ? 'selection' : '';
      const lClassArrondis =
        aParams.param.avecArrondis && !lEstListe
          ? 'ArrondisBloc z-depth-1'
          : '';
      const lClassMargeGauche =
        aParams.param.avecMargeGauche && !lEstListe ? 'MargeGaucheBloc' : '';
      const lAvecVoile = aParams.param.avecVoile ? 'opacity:0.5;' : '';
      const lStyleBordure =
        !aParams.param.ombre.avecOmbre && aParams.param.bordure.avecBordure
          ? GStyle.composeCouleurBordure(aParams.param.bordure.couleur)
          : '';
      const lStyle = lEstListe
        ? ''
        : 'position:relative;margin: 0px 5px 10px 5px;';
      const lStyleFond = GStyle.composeCouleurFond(
        aParams.param.couleursBloc.fondBloc,
      );
      const lClassDivBloc = aParams.param.estListe
        ? 'DivBlocListe '
        : 'DivBloc ';
      const lEventStopPropagation = aParams.param.eventPropagationTitre
        ? ' ie-node="eventPropagationTitre" role="button"'
        : '';
      H.push(
        '<div style="',
        lStyle,
        lAvecVoile,
        lStyleBordure,
        lStyleFond,
        '" class="',
        lClassDivBloc,
        lClass,
        ' ',
        lClassArrondis,
        ' ',
        lClassMargeGauche,
        ' "',
        lEventStopPropagation,
        ' id="event_' +
          aParams.param.controleur.$GUID +
          '" tabindex="' +
          (aParams.param.estPlie ? '0' : '-1') +
          '">',
      );
      const lIdTitre = GUID.getId();
      const lAvecZoneAction =
        aParams.param.menuContextuel.actif ||
        aParams.param.boutonsActions.length > 0;
      const lDisplayInfoComp =
        aParams.param.infoTitre.avecInfo && aParams.param.infoTitre.strInfo
          ? 'display:block;'
          : 'display:none';
      H.push('<div class="Timeline UtilitaireBloc_containerGauche">');
      let lDisplay = aParams.param.avecDateAffichee ? '' : 'display:none;';
      H.push('<div class="UtilitaireBloc_itemGauche" style="', lDisplay, '">');
      const lDate = aParams.param.dateAffichee || new Date();
      const lCouleurBloc = GDate.estAvantJourCourant(lDate)
        ? GCouleur.themeNeutre.legere2
        : GCouleur.themeCouleur.claire;
      const lCouleurTexte = GDate.estAvantJourCourant(lDate)
        ? GCouleur.themeNeutre.foncee
        : GCouleur.themeCouleur.foncee;
      H.push(
        '<div class="UtilitaireBloc_Date AlignementMilieu ie-ellipsis ',
        lClass,
        '" style="font-weight:bold;' +
          (aParams.param.estSelectionne
            ? ''
            : GStyle.composeCouleurFond(lCouleurBloc)) +
          '">',
      );
      H.push(
        '  <span style="' + GStyle.composeCouleurTexte(lCouleurTexte) + '">',
        GDate.formatDate(lDate, '%JJ'),
        '</span>',
      );
      H.push(
        '  <span style="' + GStyle.composeCouleurTexte(lCouleurTexte) + '">',
        GDate.formatDate(lDate, '%MMM'),
        '</span>',
      );
      H.push('</div>');
      H.push('</div>');
      H.push(
        '<div class="UtilitaireBloc_itemGauche" role="group" aria-labelledby="' +
          lIdTitre +
          '">',
      );
      H.push(
        '<div class="AvecMain UtilitaireBloc_containerInverse" style="',
        aParams.param.avecNoWrap ? 'flex-wrap:nowrap;' : '',
        '" id="' + lIdTitre + '">',
      );
      H.push(
        '<div class="UtilitaireBloc_itemInverse" style="display:inline-flex">',
      );
      H.push(this.composeCelluleMarqueur(aParams, false, false));
      const lMinWidth = aParams.param.infoTitre.minWidth
        ? 'min-width:' + aParams.param.infoTitre.minWidth + ';'
        : 'min-width:150px;';
      H.push(
        '<div style="color : ',
        aParams.param.couleursBloc.texteTitre,
        '; ',
        GStyle.composeWidthCalc(aParams.param.marqueurV.epaisseur),
        '">',
        aParams.titre,
        '</div></div>',
        '<div style="',
        lMinWidth,
        'color : ',
        aParams.param.couleursBloc.texteTitre,
        ';',
        lDisplayInfoComp,
        '" class="UtilitaireBloc_itemInverse Bloc_InfoCompl',
        aParams.param.infoTitre.avecInfo && aParams.param.infoTitre.alignement
          ? ' ' + aParams.param.infoTitre.alignement
          : ' AlignementDroit AlignementHaut EspaceHaut',
        '">',
        aParams.param.infoTitre.avecInfo
          ? aParams.param.infoTitre.strInfo
          : '&nbsp;',
        '</div>',
      );
      H.push('</div>');
      lDisplay = aParams.param.estPlie === true ? 'display:none; ' : '';
      let lPropagation = aParams.param.eventPropagationSurBlocEntier
        ? ''
        : 'onclick="event.stopPropagation();"';
      H.push(
        '<div class="elementPliable " style="',
        lDisplay,
        '" ',
        lPropagation,
        '>',
      );
      const lDisplayActions = lAvecZoneAction
        ? 'display:block'
        : 'display:none';
      if (aParams.param.sansContenu !== true) {
        const lClassVertical =
          aParams.param.modeAffichage === EModeAffichageTimeline.grille
            ? 'containerVertical'
            : '';
        H.push(
          '<div class="UtilitaireBloc_containerNormal ',
          lClassVertical,
          '" style="',
          aParams.param.avecNoWrap ? 'flex-wrap:nowrap;' : '',
          '">',
        );
        H.push(
          '<div class="Bloc_Contenu UtilitaireBloc_itemNormal">',
          '<div>',
          aParams.contenu,
          '</div>',
          '</div>',
        );
        lPropagation = aParams.param.eventPropagationSurBlocEntier
          ? 'onclick="event.stopPropagation();"'
          : '';
        H.push(
          '<div class="UtilitaireBloc_itemNormal" style="',
          lDisplayActions,
          ' ',
          '" ',
          lPropagation,
          '>',
          lAvecZoneAction ? this.composeZoneBoutonsAction(aParams) : '',
          '</div>',
        );
        H.push('</div>');
        if (aParams.param.documents.avecDocuments) {
          H.push('<div>' + this.composeEspaceDocuments(aParams) + '</div>');
        }
      }
      H.push('</div>');
      H.push('</div>');
      H.push('</div>');
      return H.join('');
    };
    TUtilitaireBloc.composeCelluleMarqueur = function (
      aParams,
      avecTop,
      avecBottom,
    ) {
      const H = [];
      if (aParams.param.marqueurV.avecMarqueur) {
        const lArrondiTop = avecTop ? 'border-top-left-radius: 20px 30px;' : '';
        const lArrondiBottom = avecBottom
          ? 'border-bottom-left-radius: 20px 30px;'
          : '';
        H.push(
          '<div class="celluleMarqueur" style="width:',
          aParams.param.marqueurV.epaisseur,
          'px; background-color:',
          aParams.param.marqueurV.couleur,
          '; ',
          lArrondiTop,
          ' ',
          lArrondiBottom,
          ' border-radius:3px;">&nbsp;</div>',
        );
      }
      return H.join('');
    };
    TUtilitaireBloc.composeBtnAction = function (aBouton, aNumeroArticle) {
      const H = [];
      const lArrayAttr = [];
      lArrayAttr.push(aBouton.genreBtn);
      if (aNumeroArticle !== undefined) {
        lArrayAttr.push(aNumeroArticle);
      }
      const lIdBtnAction = GUID.getId();
      const lClassesBouton = [];
      lClassesBouton.push(TypeThemeBouton.secondaire);
      lClassesBouton.push('small-bt');
      let lGenreAffichageBouton = aBouton.genreAffichage;
      if (lGenreAffichageBouton === undefined) {
        lGenreAffichageBouton = EGenreBoutonBloc.bouton;
      }
      if (lGenreAffichageBouton === EGenreBoutonBloc.bouton) {
        H.push(
          '<ie-bouton id="',
          lIdBtnAction,
          '" ',
          GHtml.composeAttr('ie-model', 'btnAction', lArrayAttr),
          ' class="',
          lClassesBouton.join(' '),
          '">',
          aBouton.libelle,
          '</ie-bouton>',
        );
      } else if (lGenreAffichageBouton === EGenreBoutonBloc.selecFile) {
        H.push(
          '<ie-bouton id="',
          lIdBtnAction,
          '" ',
          GHtml.composeAttr('ie-model', 'btnSelecFile', lArrayAttr),
          ' ie-selecfile class="',
          lClassesBouton.join(' '),
          '">',
          aBouton.libelle,
          '</ie-bouton>',
        );
      } else if (lGenreAffichageBouton === EGenreBoutonBloc.texte) {
        H.push(
          '<div id="',
          lIdBtnAction,
          '" class="btn-texte">',
          aBouton.libelle,
          '</div>',
        );
      } else if (lGenreAffichageBouton === EGenreBoutonBloc.chips) {
        H.push(
          '<div><ie-chips ',
          GHtml.composeAttr('ie-model', 'chipsAction', lArrayAttr),
          '>',
          aBouton.libelle,
          '</ie-chips></div>',
        );
      } else if (lGenreAffichageBouton === EGenreBoutonBloc.chipsAudio) {
        H.push(
          '<div>',
          UtilitaireAudio.construitChipsAudio({
            libelle: aBouton.libelle,
            url: aBouton.url,
            ieModel: 'chipsAudio',
            argsIEModel: aBouton.argsIEModel,
            idAudio: aBouton.id,
            estLien: true,
          }),
          '</div>',
        );
      }
      return H.join('');
    };
    TUtilitaireBloc.composeEspaceDocumentsTitre = function (aParam) {
      const H = [];
      const lElement = aParam.titre.document;
      const lDocumentJoint = new ObjetElement(
        lElement.getLibelle(),
        lElement.getNumero(),
        EGenreDocumentJoint.Fichier,
      );
      const lLien = GChaine.composerUrlLienExterne({
        documentJoint: lDocumentJoint,
        genreRessource: lElement.getGenre(),
      });
      let lEvnt = '';
      if (aParam.titre.avecEvnt === true) {
        lEvnt =
          'onclick="' + aParam.titre.pereEvnt.Nom + '.evntSurDocumentTitre()"';
      }
      H.push('<div class="InlineBlock" ', lEvnt, '>' + lLien + '</div>');
      return H.join('');
    };
    TUtilitaireBloc.composeEspaceDocuments = function (aParam) {
      const H = [];
      let lListeDocuments = '';
      if (!!aParam.param.documents && !!aParam.param.documents.listeDocuments) {
        lListeDocuments = UtilitaireUrl.construireListeUrls(
          aParam.param.documents.listeDocuments,
          { genreRessource: aParam.param.documents.genreRessource },
        );
      }
      H.push(
        '<div style="',
        GStyle.composeCouleurFond(GCouleur.fond),
        'margin:.8rem .4rem .8rem 0;">',
      );
      H.push(
        '<div style="',
        GStyle.composeCouleurTexte(GCouleur.grisTresFonce),
        '">',
        GTraductions.getValeur('Bloc.Documents'),
        '</div>',
      );
      H.push(
        '<div style="word-break: break-all;">',
        lListeDocuments,
        ' </div>',
      );
      H.push('</div>');
      return H.join('');
    };
    TUtilitaireBloc.composeZoneBoutonsAction = function (aParams) {
      const lParamBtn = {
        libelle:
          aParams.param.menuContextuel.libelle ||
          GTraductions.getValeur('Editer'),
      };
      const H = [];
      const lIdBtn = GUID.getId();
      H.push('<div class="zone-boutons-action">');
      if (aParams.param.menuContextuel.actif) {
        if (IE.estMobile || aParams.param.menuContextuel.avecBtn3Pts) {
          const lVisibility = aParams.param.menuContextuel.estMasque
            ? 'hidden'
            : 'visible';
          H.push(
            '<ie-btnimage id="',
            lIdBtn,
            '" ie-model="btnMenuCtx" class="btnImageIcon icon_ellipsis_vertical" style="padding:1rem; ',
            IE.estMobile ? 'font-size:1.2rem;' : 'font-size:2rem;',
            ' color: ',
            GCouleur.themeCouleur.foncee,
            '; visibility:',
            lVisibility,
            '"></ie-btnimage>',
          );
        } else {
          H.push(
            '<ie-bouton id="',
            lIdBtn,
            '" ie-model="btnMenuCtx" class="small-bt">',
            lParamBtn.libelle,
            '</ie-bouton>',
          );
        }
      }
      if (
        !!aParams.param.boutonsActions &&
        aParams.param.boutonsActions.length > 0
      ) {
        aParams.param.boutonsActions.forEach((aBouton) => {
          H.push(this.composeBtnAction(aBouton));
        });
      }
      H.push('</div>');
      return H.join('');
    };
    TUtilitaireBloc.composeTitre = function (aParams) {
      const H = [];
      H.push(
        '<div class="Bloc_Titre_container ',
        aParams.estTitreAvecEspace ? 'Espace' : 'EspaceGauche EspaceDroit',
        '">',
      );
      const lClass = aParams.estTitreMaigre
        ? 'Bloc_Titre_Maigre'
        : 'Bloc_Titre';
      H.push('<div class="', lClass, '">');
      switch (aParams.genreTitre) {
        case EGenreTitreBloc.document:
          H.push(this.composeEspaceDocumentsTitre(aParams));
          break;
        default:
          H.push(aParams.titre ? aParams.titre : '&nbsp;');
          break;
      }
      H.push('</div>');
      if (aParams.infoSousTitre.avecInfo) {
        H.push('<div class="Bloc_SSTitre">');
        H.push(aParams.infoSousTitre.strInfo);
        H.push('</div>');
      }
      H.push('</div>');
      return H.join('');
    };
    TUtilitaireBloc.composeContenu = function (aParams) {
      const H = [];
      if (
        aParams.htmlContenu !== '' &&
        aParams.htmlContenu !== undefined &&
        aParams.htmlContenu !== null
      ) {
        H.push(
          '<div style="color : ',
          aParams.couleursBloc.texteContenu,
          '; height:100%;" >',
        );
        H.push(aParams.htmlContenu);
        H.push('</div>');
      } else {
        H.push(this.composeMsgAucuneDonnee(aParams));
      }
      return H.join('');
    };
    TUtilitaireBloc.composeMsgAucuneDonnee = function (aParams) {
      const H = [];
      H.push(
        '<div class="PetitEspace Italique" style="margin: 3px;">',
        aParams.msg ? aParams.msg : '',
        '</div>',
      );
      return H.join('');
    };
    module.exports = {
      TUtilitaireBloc,
      EGenreTitreBloc,
      EGenreProfondeurBloc,
      EGenreBoutonBloc,
    };
  },
  fn: 'utilitairebloc.js',
});