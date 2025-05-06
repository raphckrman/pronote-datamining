IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TLienPolitiqueMotDePasse = void 0;
    const ObjetTraduction_1 = require('ObjetTraduction');
    exports.TLienPolitiqueMotDePasse = {
      getLien: function () {
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            'a',
            {
              href: 'https://www.index-education.com/redirect.php?produit=pn&page=comment-renforcer-securite&version=2024.3.11.0&distrib=FR&lg=fr&flag=Espace_Parent&type=LienDocProduit',
              target: '_blank',
            },
            'Comment renforcer la sécurité de mon compte ?',
          ),
        );
      },
    };
  },
  fn: 'lienpolitiquemotdepasse.js',
});