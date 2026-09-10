/**
 * Configuração de conexão do AVISOFT com o backend (Google Apps Script).
 *
 * Este arquivo fica separado do index.html de propósito, para não misturar
 * a chave de acesso com o resto do código.
 *
 * AVISO IMPORTANTE — leia antes de publicar:
 * Qualquer pessoa que abrir o site consegue ver o conteúdo deste arquivo
 * (ele precisa ser baixado pelo navegador para o site funcionar — isso é
 * inevitável em qualquer site, não é uma falha específica deste arquivo).
 * A chave abaixo dá acesso de LEITURA E ESCRITA à sua planilha inteira,
 * incluindo dados sensíveis (funcionários, financeiro).
 *
 * Se um dia desconfiar que essa chave vazou ou foi usada por alguém
 * indevido, troque o valor da propriedade API_KEY no Apps Script
 * (Configurações do projeto > Propriedades do script) — isso invalida
 * esta chave na hora, e você atualiza o valor aqui embaixo também.
 */
window.AVISOFT_CONFIG = {
  apiUrl: "https://script.google.com/macros/s/AKfycbxWkXDvoFpPuqSwEyxOZ9W9heTCe2GsUGF7wz0O3o8AEmylAFFj5yse2B6T9lxh4Eg2/exec",
  apiKey: "bb7b1681-ab69-4803-bc1c-58c739e87ce9",
};
