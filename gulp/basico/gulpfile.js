const gulp = require("gulp");
const { series, parallel } = require("gulp");

const antes1 = callback => {
  console.log('Tarefa Antes 1!')
  return callback()
}

const antes2 = callback => {
  console.log('Tarefa Antes 2!')
  return callback()
}

function copiar(callback) {
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) essa é a seleção literal dos arquivos

  // Seleção genérica irá selecionar todos os arquivos com final .txt
  // O asterístico duplo irá selecionar qualquer pasta dentro de src
  gulp.src('pastaA/**/*.txt')
    // .pipe(imagemPelaMetade())
    // .pipe(imagemEmPretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    // .pipe(transformacaoC())
    .pipe(gulp.dest('pastaB'))
  return callback();
}

const fim = callback => {
  console.log('Tarefa Fim!')
  return callback()
}

module.exports.default = series(
  parallel(antes1, antes2),
  copiar,
  fim,
);
