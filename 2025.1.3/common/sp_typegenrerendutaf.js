IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenreRenduTAFUtil = exports.TypeGenreRenduTAF = void 0;
    var TypeGenreRenduTAF;
    (function (TypeGenreRenduTAF) {
      TypeGenreRenduTAF[(TypeGenreRenduTAF['GRTAF_AucunRendu'] = 0)] =
        'GRTAF_AucunRendu';
      TypeGenreRenduTAF[(TypeGenreRenduTAF['GRTAF_RenduPapier'] = 1)] =
        'GRTAF_RenduPapier';
      TypeGenreRenduTAF[(TypeGenreRenduTAF['GRTAF_RenduPronote'] = 2)] =
        'GRTAF_RenduPronote';
      TypeGenreRenduTAF[(TypeGenreRenduTAF['GRTAF_RenduKiosque'] = 3)] =
        'GRTAF_RenduKiosque';
      TypeGenreRenduTAF[
        (TypeGenreRenduTAF['GRTAF_RenduPronoteEnregistrementAudio'] = 4)
      ] = 'GRTAF_RenduPronoteEnregistrementAudio';
    })(
      TypeGenreRenduTAF || (exports.TypeGenreRenduTAF = TypeGenreRenduTAF = {}),
    );
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    const TypeGenreRenduTAFUtil = {
      estGenreValable(aGenre) {
        const lParametresPN = GParametres;
        let lResult = true;
        if (
          lParametresPN &&
          lParametresPN.general &&
          lParametresPN.general.genresRenduTAFValable
        ) {
          lResult =
            lParametresPN.general.genresRenduTAFValable.contains(aGenre);
        }
        return lResult;
      },
      getDureeMaxEnregistrementAudio() {
        const lParametresPN = GParametres;
        let lTailleMax = 30;
        if (
          lParametresPN &&
          lParametresPN.general &&
          lParametresPN.general.tailleMaxEnregistrementAudioRenduTAF
        ) {
          lTailleMax =
            lParametresPN.general.tailleMaxEnregistrementAudioRenduTAF * 60;
        }
        return lTailleMax;
      },
      getLibelle(aGenre) {
        switch (aGenre) {
          case TypeGenreRenduTAF.GRTAF_AucunRendu:
            return 'Aucun rendu prévu';
          case TypeGenreRenduTAF.GRTAF_RenduPapier:
            return 'À remettre au professeur';
          case TypeGenreRenduTAF.GRTAF_RenduPronote:
            return 'À déposer dans l'Espace Élèves (5 Mo max)';
          case TypeGenreRenduTAF.GRTAF_RenduKiosque:
            return 'Répondre en ligne';
          case TypeGenreRenduTAF.GRTAF_RenduPronoteEnregistrementAudio:
            return 'Audio - A enregistrer sur l'Espace Élèves ( 3 min. max)';
          default:
        }
        return '';
      },
      getOrdre(aGenre) {
        return [0, 1, 2, 3, 4][aGenre];
      },
      toElement(aGenre) {
        return ObjetElement_1.ObjetElement.create({
          Libelle: TypeGenreRenduTAFUtil.getLibelle(aGenre),
          Numero: 0,
          Genre: aGenre,
          ordre: TypeGenreRenduTAFUtil.getOrdre(aGenre),
        });
      },
      fromElement(aElt) {
        return aElt !== null && aElt !== undefined
          ? aElt.getGenre()
          : TypeGenreRenduTAF.GRTAF_AucunRendu;
      },
      toListe(aGenresAExclure) {
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        for (const lKey of MethodesObjet_1.MethodesObjet.enumKeys(
          TypeGenreRenduTAF,
        )) {
          const lRendu = TypeGenreRenduTAF[lKey];
          if (
            TypeGenreRenduTAFUtil.estGenreValable(lRendu) &&
            (!aGenresAExclure || !aGenresAExclure.includes(lRendu))
          ) {
            let lElement = TypeGenreRenduTAFUtil.toElement(lRendu);
            lListe.addElement(lElement);
          }
        }
        lListe.setTri([ObjetTri_1.ObjetTri.init('ordre')]);
        lListe.trier();
        return lListe;
      },
      estUnRenduEnligne(aGenre, aInclureKiosque = true) {
        if (aGenre === undefined || aGenre === null) {
          return false;
        }
        const lArrTypes = [
          TypeGenreRenduTAF.GRTAF_RenduPronote,
          TypeGenreRenduTAF.GRTAF_RenduPronoteEnregistrementAudio,
        ];
        if (aInclureKiosque !== false) {
          lArrTypes.push(TypeGenreRenduTAF.GRTAF_RenduKiosque);
        }
        return lArrTypes.includes(aGenre);
      },
      estUnRenduPapier(aGenre) {
        if (aGenre === undefined || aGenre === null) {
          return false;
        }
        return [TypeGenreRenduTAF.GRTAF_RenduPapier].includes(aGenre);
      },
      estSansRendu(aGenre) {
        if (aGenre === undefined || aGenre === null) {
          return true;
        }
        return [TypeGenreRenduTAF.GRTAF_AucunRendu].includes(aGenre);
      },
      estUnRenduKiosque(aGenre) {
        if (aGenre === undefined || aGenre === null) {
          return false;
        }
        return [TypeGenreRenduTAF.GRTAF_RenduKiosque].includes(aGenre);
      },
      estUnRenduMedia(aGenre) {
        if (aGenre === undefined || aGenre === null) {
          return false;
        }
        return [
          TypeGenreRenduTAF.GRTAF_RenduPronoteEnregistrementAudio,
        ].includes(aGenre);
      },
      getLibelleConsultation(aGenre, aPourEleve = false) {
        switch (aGenre) {
          case TypeGenreRenduTAF.GRTAF_AucunRendu:
            return '';
          case TypeGenreRenduTAF.GRTAF_RenduPapier:
            return '';
          case TypeGenreRenduTAF.GRTAF_RenduPronote:
            return 'Copie déposée';
          case TypeGenreRenduTAF.GRTAF_RenduKiosque:
            return aPourEleve
              ? 'Consulter mes réponses'
              : 'Consulter les réponses';
          case TypeGenreRenduTAF.GRTAF_RenduPronoteEnregistrementAudio:
            return ObjetTraduction_1.GTraductions.getValeur(
              'EnregistrementAudio.depose',
            );
        }
        return '';
      },
      getLibelleDeposer(aGenre, aPourEleve = false) {
        switch (aGenre) {
          case TypeGenreRenduTAF.GRTAF_AucunRendu:
            return '';
          case TypeGenreRenduTAF.GRTAF_RenduPapier:
            return 'A remettre au professeur';
          case TypeGenreRenduTAF.GRTAF_RenduPronote:
            return aPourEleve
              ? GApplication.getEtatUtilisateur().pourPrimaire()
                ? 'Déposer la copie'
                : 'Déposer ma copie'
              : 'A rendre en ligne';
          case TypeGenreRenduTAF.GRTAF_RenduKiosque:
            return aPourEleve
              ? 'Répondre sur le site'
              : 'Répondre en ligne';
          case TypeGenreRenduTAF.GRTAF_RenduPronoteEnregistrementAudio:
            return aPourEleve
              ? ObjetTraduction_1.GTraductions.getValeur(
                  'EnregistrementAudio.deposer',
                )
              : 'A rendre en ligne';
        }
        return '';
      },
    };
    exports.TypeGenreRenduTAFUtil = TypeGenreRenduTAFUtil;
  },
  fn: 'typegenrerendutaf.js',
});