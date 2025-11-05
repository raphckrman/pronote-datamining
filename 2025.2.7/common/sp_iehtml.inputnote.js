IE.fModule({
  f: function (exports, require, module, global) {
    if (IE.estMobile) {
      require('IEHtml.InputNote_Mobile.js');
    } else {
      require('IEHtml.InputNote_Espace.js');
    }
  },
  fn: 'iehtml.inputnote.js',
});