// JavaScript Document
$(document).ready(function() {
     $('#selected-plays > li').addClass('horizontal');
     $('a[href^="mailto:"]').addClass('mailto');
     $('a[href$=".pdf"]').addClass('pdflink');
});
