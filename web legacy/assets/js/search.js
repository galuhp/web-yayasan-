
/* Local, offline search over the generated page index. */
(function () {
  'use strict';
  var index = window.ATTAUFIQ_SEARCH_INDEX || [];
  var params = new URLSearchParams(window.location.search);
  var q = (params.get('s') || '').trim();
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var summary = document.getElementById('search-summary');
  if (input) input.value = q;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c];
    });
  }

  if (!results || !summary) return;
  if (!q) {
    summary.textContent = 'Masukkan kata kunci untuk mencari di seluruh situs.';
    return;
  }

  var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  var hits = [];
  for (var i = 0; i < index.length; i++) {
    var item = index[i];
    var hay = (item.title + ' ' + item.excerpt + ' ' + item.text).toLowerCase();
    var ok = true;
    for (var t = 0; t < terms.length; t++) {
      if (hay.indexOf(terms[t]) === -1) { ok = false; break; }
    }
    if (ok) {
      var score = 0;
      var titleLower = item.title.toLowerCase();
      for (var k = 0; k < terms.length; k++) {
        if (titleLower.indexOf(terms[k]) !== -1) score += 10;
        if (titleLower.indexOf(terms[k]) === 0) score += 20;
      }
      hits.push({item: item, score: score});
    }
  }
  hits.sort(function (a, b) { return b.score - a.score || a.item.title.localeCompare(b.item.title); });
  summary.textContent = hits.length + ' hasil untuk â€œ' + q + 'â€.';
  if (!hits.length) {
    results.innerHTML = '<li class="search-empty">Tidak ada halaman yang cocok. Coba kata kunci lain.</li>';
    return;
  }
  var html = '';
  for (var h = 0; h < hits.length; h++) {
    var it = hits[h].item;
    html += '<li><a href="' + esc(it.href) + '">' + esc(it.title) + '</a>' +
            '<span class="search-type">' + esc(it.type) + '</span>' +
            '<p>' + esc(it.excerpt) + '</p></li>';
  }
  results.innerHTML = html;
})();
