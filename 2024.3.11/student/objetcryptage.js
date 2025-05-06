IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GCryptage = void 0;
    require('DeclarationForge');
    require('DeclarationPako');
    const Enumere_Cryptage_1 = require('Enumere_Cryptage');
    const ObjetCryptageAES_1 = require('ObjetCryptageAES');
    const ObjetCryptageRSA_1 = require('ObjetCryptageRSA');
    class ObjetCryptage {
      constructor() {
        this.Minuscules = 'abcdefghijklmnopkrstuvwxyz';
        this.Majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.Nombres = '0123456789';
        this.Caracteres = '&#|^@£$µ?!%ù§~°()[]{}+-*/=.,;';
        this.cryptageAES = new ObjetCryptageAES_1.ObjetCryptageAES();
        this.cryptageRSA = new ObjetCryptageRSA_1.ObjetCryptageRSA();
      }
      getCryptageAES() {
        return this.cryptageAES;
      }
      getCryptageRSA() {
        return this.cryptageRSA;
      }
      genererTexteAleatoire(ALongueur) {
        const LListeCaracteres =
          this.Minuscules + this.Majuscules + this.Nombres;
        const N = LListeCaracteres.length;
        let LChaine = '';
        while (LChaine.length < ALongueur) {
          LChaine += LListeCaracteres.charAt(Math.floor(N * Math.random()));
        }
        return LChaine;
      }
      getBuffer(aChaine) {
        return new forge.util.ByteBuffer(forge.util.encodeUtf8(aChaine));
      }
      encrypter(aOptions) {
        const lDefault = {
          genreCryptage: Enumere_Cryptage_1.EGenreCryptage.Aucun,
          chaine: '',
          cle: '',
          iv: '',
          avecAlea: false,
          avecCompression: false,
        };
        const lOptions = {};
        $.extend(lOptions, lDefault, aOptions);
        lOptions.chaine = '' + lOptions.chaine;
        lOptions.chaine = forge.util.encodeUtf8(lOptions.chaine);
        if (lOptions.avecAlea) {
          lOptions.chaine = this.ajouterAlea(lOptions.chaine);
        }
        if (lOptions.avecCompression) {
          lOptions.chaine = new forge.util.ByteBuffer(lOptions.chaine).toHex();
          const lUint = window.pako.deflateRaw(lOptions.chaine, {
            level: 6,
            to: 'string',
          });
          if (typeof lUint === 'string') {
            lOptions.chaine = lUint;
          } else {
            lOptions.chaine = this.uint8ArrayToStrRaw(lUint);
          }
        }
        let lChaineEncrypte = '';
        switch (lOptions.genreCryptage) {
          case Enumere_Cryptage_1.EGenreCryptage.Aucun:
            lChaineEncrypte = lOptions.chaine;
            break;
          case Enumere_Cryptage_1.EGenreCryptage.Unicode:
            lChaineEncrypte = lOptions.chaine;
            break;
          case Enumere_Cryptage_1.EGenreCryptage.AES:
            lChaineEncrypte = this.cryptageAES.encrypter(
              lOptions.chaine,
              lOptions.cle,
              lOptions.iv,
            );
            break;
          default:
            break;
        }
        return lChaineEncrypte;
      }
      decrypter(aOptions) {
        const lDefault = {
          genreCryptage: Enumere_Cryptage_1.EGenreCryptage.Aucun,
          chaine: '',
          cle: '',
          iv: '',
          avecAlea: false,
          enBytes: false,
          avecCompression: false,
        };
        const lOptions = {};
        $.extend(lOptions, lDefault, aOptions);
        let lChaineEncrypte = lOptions.chaine;
        let lChaineDecrypte = '';
        switch (lOptions.genreCryptage) {
          case Enumere_Cryptage_1.EGenreCryptage.Aucun:
            lChaineDecrypte = lChaineEncrypte;
            break;
          case Enumere_Cryptage_1.EGenreCryptage.Unicode:
            lChaineDecrypte = lChaineEncrypte;
            break;
          case Enumere_Cryptage_1.EGenreCryptage.AES:
            lChaineDecrypte = this.cryptageAES.decrypter(
              lChaineEncrypte,
              lOptions.cle,
              lOptions.iv,
            );
            break;
          default:
            break;
        }
        if (lChaineDecrypte !== '' && lOptions.avecCompression) {
          const lUint = this.strRawToUint8Array(lChaineDecrypte);
          lChaineDecrypte = window.pako.inflateRaw(lUint, { to: 'string' });
        }
        if (lChaineDecrypte !== '') {
          try {
            lChaineDecrypte = forge.util.decodeUtf8(lChaineDecrypte);
          } catch (e) {
            lChaineDecrypte = '';
          }
        }
        if (lChaineDecrypte !== '' && lOptions.avecAlea) {
          lChaineDecrypte = this.enleverAlea(lChaineDecrypte);
        }
        if (lOptions.enBytes) {
          const lBuff = new forge.util.ByteBuffer();
          const lArrInt = lChaineDecrypte.split(',');
          for (let i = 0; i < lArrInt.length; i++) {
            lBuff.putInt(parseInt(lArrInt[i]), 8);
          }
          lChaineDecrypte = lBuff;
        }
        return lChaineDecrypte;
      }
      ajouterAlea(AChaine) {
        const N = AChaine.length;
        const LTableauAvecAlea = [];
        const LListeCaracteres =
          this.Minuscules + this.Majuscules + this.Nombres;
        const C = LListeCaracteres.length;
        for (let I = 0; I < N; I++) {
          LTableauAvecAlea.push(
            LListeCaracteres.charAt(Math.floor(C * Math.random())),
          );
          LTableauAvecAlea.push(String(AChaine).charAt(I));
        }
        return LTableauAvecAlea.join('');
      }
      enleverAlea(AChaine) {
        const N = AChaine.length;
        const LTableauSansAlea = new Array(N);
        for (let I = 0; I < N; I += 1) {
          if (I % 2 === 0) {
            LTableauSansAlea.push(AChaine.charAt(I));
          }
        }
        return LTableauSansAlea.join('');
      }
      chiffrementUrl(LChemin, LNomFichier, ACle, ANumeroSession) {
        const LUrlChiffree = this.encrypter({
          genreCryptage: Enumere_Cryptage_1.EGenreCryptage.AES,
          chaine: LChemin,
          cle: ACle,
        });
        return (
          'cheminsecurise' +
          LUrlChiffree +
          '/' +
          LNomFichier +
          '?Session=' +
          ANumeroSession
        );
      }
      strRawToUint8Array(aStr) {
        return Uint8Array.from([...aStr].map((aChar) => aChar.charCodeAt(0)));
      }
      uint8ArrayToStrRaw(aUint) {
        const cCHUNK_SZ = 0x8000;
        const lArray = [];
        for (let i = 0; i < aUint.length; i += cCHUNK_SZ) {
          lArray.push(
            String.fromCharCode.apply(
              null,
              Array.from(aUint.subarray(i, i + cCHUNK_SZ)),
            ),
          );
        }
        return lArray.join('');
      }
    }
    const GCryptage = new ObjetCryptage();
    exports.GCryptage = GCryptage;
  },
  fn: 'objetcryptage.js',
});