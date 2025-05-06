IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetCryptageAES = void 0;
    require('DeclarationForge.js');
    class ObjetCryptageAES {
      decrypter(aChaine, aCle, aIv) {
        try {
          aCle = forge.md.md5.create().update(aCle.bytes()).digest();
          aIv = aIv.length()
            ? forge.md.md5.create().update(aIv.bytes()).digest()
            : new forge.util.ByteBuffer('\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0');
          aChaine = new forge.util.ByteBuffer(forge.util.hexToBytes(aChaine));
          const lChiffreur = forge.cipher.createDecipher('AES-CBC', aCle);
          lChiffreur.start({ iv: aIv });
          lChiffreur.update(aChaine);
          return lChiffreur.finish() && lChiffreur.output.bytes();
        } catch (e) {
          return false;
        }
      }
      encrypter(aChaine, aCle, aIv) {
        try {
          aCle = forge.md.md5.create().update(aCle.bytes()).digest();
          aIv = aIv.length()
            ? forge.md.md5.create().update(aIv.bytes()).digest()
            : new forge.util.ByteBuffer('\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0');
          aChaine = new forge.util.ByteBuffer(aChaine);
          const lChiffreur = forge.cipher.createCipher('AES-CBC', aCle);
          lChiffreur.start({ iv: aIv });
          lChiffreur.update(aChaine);
          return lChiffreur.finish() && lChiffreur.output.toHex();
        } catch (e) {
          return false;
        }
      }
    }
    exports.ObjetCryptageAES = ObjetCryptageAES;
  },
  fn: 'objetcryptageaes.js',
});