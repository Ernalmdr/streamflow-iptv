var _document$getElementB, _document$getElementB2, _document$getElementB3, _document$getElementB4, _document$getElementB5, _document$getElementB6, _document$getElementB7, _document$getElementB8, _document$getElementB0, _document$getElementB10, _document$getElementB12, _document$getElementB13, _document$getElementB14, _document$getElementB15, _document$getElementB16, _document$getElementB17, _document$getElementB18, _document$getElementB19, _document$getElementB20, _document$getElementB21, _document$getElementB22;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, t) { var e = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (Array.isArray(r) && (null == e || e === ("undefined" != typeof Symbol && [][Symbol.iterator]) || e === []["@@iterator"])) return r; if (null != e) { var l, n, i, a, u = [], o = !0, f = !1; try { if (i = (e = e.call(r)).next, 0 === t) { if (Object(e) !== e) return; o = !1; } else for (; !(o = (l = i.call(e)).done) && (u.push(l.value), u.length !== t); o = !0); } catch (r) { f = !0, n = r; } finally { try { if (!o && null != e.return && (a = e.return(), Object(a) !== a)) return; } finally { if (f) throw n; } } return u; } }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// --- Application State ---
var channels = []; // Master memory list
var liveChannels = [];
var vodChannels = [];
var seriesChannels = [];

// Filtered result references
var filteredLiveList = [];
var filteredMoviesList = [];
var filteredSeriesList = [];

// Virtual pagination counters (Batch size = 40 for butter smooth 60fps)
var BATCH_SIZE = 40;
var renderedLiveCount = 0;
var renderedMoviesCount = 0;
var renderedSeriesCount = 0;
var currentItem = null;
var favorites = new Set(JSON.parse(localStorage.getItem('sf_favs') || '[]'));
var recentUrls = JSON.parse(localStorage.getItem('sf_recent') || '[]');
var downloadedItems = JSON.parse(localStorage.getItem('sf_downloads') || '[]');
var isTvMode = false;
var hlsInstance = null;
var mpegtsInstance = null;
var streamFailoverTried = false;
var audioHintTimeout = null;

// Active Category filters
var activeLiveCategory = 'ALL';
var activeMoviesCategory = 'ALL';
var activeSeriesCategory = 'ALL';
var currentCategoryModalTarget = 'live';
var activeQuickTab = 'live';

// Phase 1: Parental PIN & Category Locking State
var parentalPin = localStorage.getItem('sf_parental_pin') || '0000';
var isSessionUnlocked = false;
var pendingPinAction = null;
var currentPinInput = '';
var isChangingPin = false;
var tempNewPin = '';

// Phase 1: Smart TV NumPad (0-9 LCN Tuning) State
var numPadInput = '';
var numPadTimer = null;

// Phase 1: VOD / Series Resume Playback State
var pendingResumeItem = null;
var pendingResumeTime = 0;
var lastProgressSaveTime = 0;

// ================= PHASE 1 HELPERS: PARENTAL CONTROL & PIN =================
var sensitiveKeywords = ['adult', '+18', 'xxx', 'yetişkin', 'erotik', 'erotic', 'porn', 'nsfw', '18+'];
function isCategoryLocked(categoryName) {
  if (!categoryName) return false;
  var lower = categoryName.toLowerCase();
  var matchesKeyword = sensitiveKeywords.some(function (kw) {
    return lower.includes(kw);
  });
  var lockedList = JSON.parse(localStorage.getItem('sf_locked_cats') || '[]');
  return matchesKeyword || lockedList.includes(categoryName);
}
function updatePinStatusUI() {
  var lbl = document.getElementById('lblPinStatus');
  if (lbl) {
    lbl.innerText = "PIN Korumas\u0131: Aktif (".concat(parentalPin === '0000' ? 'Varsayılan: 0000' : 'Özel PIN', ") \u2022 +18 ve Yeti\u015Fkin kategoriler kilitli");
  }
}
function updatePinDots() {
  for (var i = 0; i < 4; i++) {
    var dot = document.getElementById("pinDot".concat(i));
    if (dot) {
      if (i < currentPinInput.length) {
        dot.className = "w-4 h-4 rounded-full bg-primary border-2 border-primary transition-all scale-110 shadow-sm";
      } else {
        dot.className = "w-4 h-4 rounded-full border-2 border-primary/50 transition-all";
      }
    }
  }
}
function inputPinDigit(digit) {
  if (currentPinInput.length >= 4) return;
  currentPinInput += digit;
  updatePinDots();
  var err = document.getElementById('pinErrorMsg');
  if (err) err.classList.add('hidden');
  if (currentPinInput.length === 4) {
    setTimeout(verifyPinInput, 150);
  }
}
function verifyPinInput() {
  if (isChangingPin) {
    if (!tempNewPin) {
      tempNewPin = currentPinInput;
      currentPinInput = '';
      updatePinDots();
      document.getElementById('pinModalDesc').innerText = 'Lütfen yeni PIN kodunuzu tekrar girerek onaylayın:';
      return;
    } else {
      if (currentPinInput === tempNewPin) {
        parentalPin = tempNewPin;
        localStorage.setItem('sf_parental_pin', parentalPin);
        showToast('✅ 4 Haneli PIN başarıyla güncellendi!');
        closePinModal();
        updatePinStatusUI();
      } else {
        var err = document.getElementById('pinErrorMsg');
        if (err) {
          err.innerText = 'PIN kodları eşleşmedi! Tekrar deneyin.';
          err.classList.remove('hidden');
        }
        currentPinInput = '';
        tempNewPin = '';
        updatePinDots();
      }
      return;
    }
  }
  if (currentPinInput === parentalPin) {
    isSessionUnlocked = true;
    showToast('🔓 Ebeveyn kilidi açıldı');
    var action = pendingPinAction;
    closePinModal();
    if (typeof action === 'function') {
      action();
    }
  } else {
    var _err = document.getElementById('pinErrorMsg');
    if (_err) {
      _err.innerText = 'Hatalı PIN kodu! (Varsayılan: 0000)';
      _err.classList.remove('hidden');
    }
    currentPinInput = '';
    updatePinDots();
  }
}
function openPinModal(descText, onApproved) {
  currentPinInput = '';
  isChangingPin = false;
  tempNewPin = '';
  pendingPinAction = onApproved;
  updatePinDots();
  document.getElementById('pinModalTitle').innerText = 'Ebeveyn Koruması (PIN)';
  document.getElementById('pinModalDesc').innerText = descText || 'Bu kategori kilitlidir. Lütfen 4 haneli PIN kodunuzu girin (Varsayılan: 0000):';
  var err = document.getElementById('pinErrorMsg');
  if (err) err.classList.add('hidden');
  document.getElementById('pinModal').classList.remove('hidden');
  if (isTvMode) {
    var firstKey = document.querySelector('.pin-key');
    if (firstKey) setFocus(firstKey);
  }
}
function closePinModal() {
  document.getElementById('pinModal').classList.add('hidden');
  currentPinInput = '';
  isChangingPin = false;
  tempNewPin = '';
  pendingPinAction = null;
}
function checkParentalAccess(categoryName, onAllowed) {
  if (!isCategoryLocked(categoryName) || isSessionUnlocked) {
    onAllowed();
    return;
  }
  openPinModal("\"".concat(categoryName, "\" kilitlidir. Giri\u015F i\xE7in 4 haneli PIN kodunu girin:"), onAllowed);
}

// ================= PHASE 1 HELPERS: RESUME PLAYBACK (KALDIĞIN YERDEN DEVAM ET) =================
function getResumeRecord(item) {
  if (!item || !item.url) return null;
  var key = 'sf_resume_' + (item.id || item.url);
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return null;
  }
}
function saveResumeRecord(item, time, duration) {
  if (!item || !item.url || !time || time < 10) return;
  var key = 'sf_resume_' + (item.id || item.url);
  localStorage.setItem(key, JSON.stringify({
    time: Math.floor(time),
    duration: Math.floor(duration || 0),
    updated: Date.now()
  }));
}
function clearResumeRecord(item) {
  if (!item || !item.url) return;
  var key = 'sf_resume_' + (item.id || item.url);
  localStorage.removeItem(key);
}
function checkAndPromptResume(item) {
  var banner = document.getElementById('playerResumePrompt');
  if (!banner) return;
  banner.classList.add('hidden');
  if (!item || item.type !== 'vod' && item.type !== 'series' || item.isCatchup) return;
  var record = getResumeRecord(item);
  if (record && record.time > 15 && (!record.duration || record.duration - record.time > 30)) {
    pendingResumeItem = item;
    pendingResumeTime = record.time;
    var durText = record.duration ? " / ".concat(formatSeconds(record.duration)) : '';
    document.getElementById('playerResumeTimeText').innerText = "\xD6nceki izleme: ".concat(formatSeconds(record.time)).concat(durText);
    banner.classList.remove('hidden');
    setTimeout(function () {
      banner.classList.add('hidden');
    }, 12000);
  }
}

// ================= PHASE 1 HELPERS: SMART TV NUMPAD (0-9 TUNING) =================
function handleNumPadKey(digitChar) {
  var activeTag = document.activeElement ? document.activeElement.tagName : '';
  if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

  // If PIN modal is open, route numbers to PIN input
  var pinModal = document.getElementById('pinModal');
  if (pinModal && !pinModal.classList.contains('hidden')) {
    inputPinDigit(digitChar);
    return;
  }
  numPadInput += digitChar;
  var overlay = document.getElementById('playerNumPadOverlay');
  var digitsEl = document.getElementById('playerNumPadDigits');
  if (overlay && digitsEl) {
    digitsEl.innerText = numPadInput;
    overlay.classList.remove('hidden');
  }
  clearTimeout(numPadTimer);
  numPadTimer = setTimeout(function () {
    executeNumPadTuning();
  }, 1400);
}
function executeNumPadTuning() {
  clearTimeout(numPadTimer);
  var overlay = document.getElementById('playerNumPadOverlay');
  if (overlay) overlay.classList.add('hidden');
  if (!numPadInput) return;
  var targetIndex = parseInt(numPadInput, 10);
  numPadInput = '';
  if (isNaN(targetIndex) || targetIndex <= 0) return;
  if (liveChannels && liveChannels.length >= targetIndex) {
    var channel = liveChannels[targetIndex - 1];
    playItem(channel);
    showToast("\uD83D\uDCFA Kanal ".concat(targetIndex, ": ").concat(channel.name));
  } else {
    showToast("\u26A0\uFE0F Kanal No: ".concat(targetIndex, " bulunamad\u0131 (").concat(liveChannels.length, " canl\u0131 kanal kay\u0131tl\u0131)"));
  }
}

// ================= PHASE 1 HELPERS: OYNATICI ARAÇLAR MENÜSÜ =================
function togglePlayerToolsModal(force) {
  var modal = document.getElementById('playerToolsModal');
  if (!modal) return;
  var isHidden = modal.classList.contains('hidden');
  var shouldOpen = typeof force === 'boolean' ? force : isHidden;
  if (shouldOpen) {
    modal.classList.remove('hidden');
    updateMatchModeUI();
    updatePinStatusUI();
    if (isTvMode) {
      var first = modal.querySelector('.tv-focusable');
      if (first) setFocus(first);
    }
  } else {
    modal.classList.add('hidden');
  }
}

// --- IndexedDB for Fast, Non-Blocking, Infinite Storage ---
var DB_NAME = 'StreamFlowIPTV_DB';
var STORE_NAME = 'playlists';
function openDb() {
  return new Promise(function (resolve, reject) {
    var req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = function (e) {
      var db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = function (e) {
      return resolve(e.target.result);
    };
    req.onerror = function (e) {
      return reject(e);
    };
  });
}
function savePlaylistToDb(_x) {
  return _savePlaylistToDb.apply(this, arguments);
}
function _savePlaylistToDb() {
  _savePlaylistToDb = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(data) {
    var db, _t4;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _context7.n = 1;
          return openDb();
        case 1:
          db = _context7.v;
          return _context7.a(2, new Promise(function (resolve, reject) {
            var tx = db.transaction(STORE_NAME, 'readwrite');
            var store = tx.objectStore(STORE_NAME);
            store.put(data, 'active_playlist');
            tx.oncomplete = function () {
              return resolve();
            };
            tx.onerror = function (e) {
              return reject(e);
            };
          }));
        case 2:
          _context7.p = 2;
          _t4 = _context7.v;
          console.warn('IDB save fallback:', _t4);
        case 3:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 2]]);
  }));
  return _savePlaylistToDb.apply(this, arguments);
}
function loadPlaylistFromDb() {
  return _loadPlaylistFromDb.apply(this, arguments);
} // --- Rich Default/Sample Legal Streams ---
function _loadPlaylistFromDb() {
  _loadPlaylistFromDb = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
    var db, _t5;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return openDb();
        case 1:
          db = _context8.v;
          return _context8.a(2, new Promise(function (resolve) {
            var tx = db.transaction(STORE_NAME, 'readonly');
            var store = tx.objectStore(STORE_NAME);
            var req = store.get('active_playlist');
            req.onsuccess = function (e) {
              return resolve(e.target.result || null);
            };
            req.onerror = function () {
              return resolve(null);
            };
          }));
        case 2:
          _context8.p = 2;
          _t5 = _context8.v;
          return _context8.a(2, null);
      }
    }, _callee8, null, [[0, 2]]);
  }));
  return _loadPlaylistFromDb.apply(this, arguments);
}
var SAMPLE_DATA = [
// 1. CANLI TV
{
  id: 1,
  name: "TRT 1 HD",
  group: "Ulusal Kanallar",
  url: "https://tv-trt1.medya.trt.com.tr/master.m3u8",
  logo: "https://i.hizliresim.com/pZqN9m.png",
  type: "live",
  program: "Ana Haber & Canlı Maç"
}, {
  id: 2,
  name: "TRT Haber",
  group: "Haber & Politika",
  url: "https://tv-trthaber.medya.trt.com.tr/master.m3u8",
  logo: "",
  type: "live",
  program: "Günün Sıcak Gelişmeleri"
}, {
  id: 3,
  name: "TRT Spor",
  group: "Spor & Karşılaşmalar",
  url: "https://tv-trtspor.medya.trt.com.tr/master.m3u8",
  logo: "",
  type: "live",
  program: "Süper Lig & Spor Bülteni"
}, {
  id: 4,
  name: "TRT Spor Yıldız",
  group: "Spor & Karşılaşmalar",
  url: "https://tv-trtsporyildiz.medya.trt.com.tr/master.m3u8",
  logo: "",
  type: "live",
  program: "Olimpik Branşlar & Canlı"
}, {
  id: 5,
  name: "TRT Belgesel",
  group: "Belgesel & Doğa",
  url: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8",
  logo: "",
  type: "live",
  program: "Vahşi Yaşam Savaşçıları"
}, {
  id: 6,
  name: "TRT Müzik",
  group: "Müzik & Eğlence",
  url: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8",
  logo: "",
  type: "live",
  program: "Nostalji Rüzgarı & Canlı"
}, {
  id: 7,
  name: "TRT World HD",
  group: "Haber & Politika",
  url: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
  logo: "",
  type: "live",
  program: "Global Breaking News"
}, {
  id: 8,
  name: "Euronews Türkçe",
  group: "Haber & Politika",
  url: "https://euronews-euronews-turkish-1-tr.samsung.wurl.tv/playlist.m3u8",
  logo: "",
  type: "live",
  program: "Dünya Gündemi Canlı"
}, {
  id: 9,
  name: "Red Bull TV",
  group: "Spor & Karşılaşmalar",
  url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
  logo: "",
  type: "live",
  program: "Ekstrem Sporlar & Aksiyon"
}, {
  id: 10,
  name: "NASA TV Space",
  group: "Bilim & Teknoloji",
  url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8",
  logo: "",
  type: "live",
  program: "Uluslararası Uzay İstasyonu Canlı"
}, {
  id: 11,
  name: "Bloomberg TV",
  group: "Finans & Ekonomi",
  url: "https://liveproduseast.global.ssl.fastly.net/us/Channel-us-btv-mob/btv-mob.m3u8",
  logo: "",
  type: "live",
  program: "Global Markets & Finance"
},
// 2. SİNEMA
{
  id: 101,
  name: "Big Buck Bunny (4K Ultra HD)",
  group: "Animasyon & Aile",
  url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  logo: "",
  type: "vod",
  rating: "8.4",
  year: "2024",
  duration: "10 dk"
}, {
  id: 102,
  name: "Tears of Steel (Bilim Kurgu)",
  group: "Bilim Kurgu & Aksiyon",
  url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  logo: "",
  type: "vod",
  rating: "8.1",
  year: "2023",
  duration: "12 dk"
}, {
  id: 103,
  name: "Sintel: Ejderha Savaşçısı",
  group: "Animasyon & Aile",
  url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  logo: "",
  type: "vod",
  rating: "8.6",
  year: "2023",
  duration: "15 dk"
}, {
  id: 104,
  name: "Elephants Dream (3D Sanat)",
  group: "Kısa Film & Bağımsız",
  url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  logo: "",
  type: "vod",
  rating: "7.7",
  year: "2022",
  duration: "11 dk"
}, {
  id: 105,
  name: "For Bigger Blazes (Aksiyon)",
  group: "Aksiyon & Macera",
  url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  logo: "",
  type: "vod",
  rating: "7.9",
  year: "2024",
  duration: "15 dk"
}, {
  id: 106,
  name: "For Bigger Escapes (Gerilim)",
  group: "Aksiyon & Macera",
  url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  logo: "",
  type: "vod",
  rating: "8.0",
  year: "2024",
  duration: "14 dk"
}, {
  id: 107,
  name: "For Bigger Fun (Komedi)",
  group: "Komedi & Eğlence",
  url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  logo: "",
  type: "vod",
  rating: "7.5",
  year: "2023",
  duration: "12 dk"
}, {
  id: 108,
  name: "We Are Going on Bullrun",
  group: "Belgesel & Hız",
  url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  logo: "",
  type: "vod",
  rating: "8.2",
  year: "2023",
  duration: "18 dk"
},
// 3. DİZİLER
{
  id: 201,
  name: "Kozmos Serisi",
  group: "Belgesel & Bilim Dizileri",
  type: "series",
  rating: "9.3",
  year: "2024",
  seasons: [{
    season: 1,
    episodes: [{
      number: 1,
      title: "Bölüm 1: Samanyolu ve Galaksiler",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      duration: "15 dk"
    }, {
      number: 2,
      title: "Bölüm 2: Yıldız Tozu ve Gezegenler",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      duration: "14 dk"
    }, {
      number: 3,
      title: "Bölüm 3: Kuantum Dünyası",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      duration: "16 dk"
    }]
  }]
}, {
  id: 202,
  name: "Yaban Hayatı: Derin Doğa",
  group: "Doğa & Macera Dizileri",
  type: "series",
  rating: "8.9",
  year: "2023",
  seasons: [{
    season: 1,
    episodes: [{
      number: 1,
      title: "Bölüm 1: Okyanus Derinlikleri",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
      duration: "15 dk"
    }, {
      number: 2,
      title: "Bölüm 2: Yağmur Ormanları",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      duration: "13 dk"
    }]
  }]
}];

// --- Toast Notifications ---
function showToast(msg) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  var toast = document.getElementById('toastNotification');
  toast.innerText = msg;
  toast.classList.remove('hidden');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(function () {
    toast.classList.add('hidden');
  }, duration);
}

// --- Section & View Navigation ---
function switchView(viewId) {
  document.querySelectorAll('.view-panel').forEach(function (panel) {
    return panel.classList.add('hidden');
  });
  var target = document.getElementById(viewId);
  if (target) target.classList.remove('hidden');
  var badge = document.getElementById('headerSectionBadge');
  if (viewId === 'view-live') badge.innerText = 'Canlı TV';else if (viewId === 'view-movies') badge.innerText = 'Sinema';else if (viewId === 'view-series') badge.innerText = 'Diziler';else if (viewId === 'view-player') badge.innerText = 'Oynatıcı';else if (viewId === 'view-settings') badge.innerText = 'Ayarlar';
  document.querySelectorAll('.top-nav-btn').forEach(function (btn) {
    if (btn.getAttribute('data-target') === viewId) {
      btn.classList.add('bg-primary', 'text-on-primary');
      btn.classList.remove('text-on-surface-variant');
    } else {
      btn.classList.remove('bg-primary', 'text-on-primary');
      btn.classList.add('text-on-surface-variant');
    }
  });
  document.querySelectorAll('.nav-tab').forEach(function (tab) {
    if (tab.getAttribute('data-target') === viewId) {
      tab.classList.remove('text-on-surface-variant');
      tab.classList.add('text-primary');
    } else {
      tab.classList.remove('text-primary');
      tab.classList.add('text-on-surface-variant');
    }
  });
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
document.querySelectorAll('.top-nav-btn, .nav-tab').forEach(function (btn) {
  btn.addEventListener('click', function () {
    return switchView(btn.getAttribute('data-target'));
  });
});
document.getElementById('btnHeaderSettings').addEventListener('click', function () {
  return switchView('view-settings');
});

// --- Fast O(N) Data Partitioning & Zero-Freeze Loading ---
function setMasterChannels(list) {
  var saveToDb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  channels = list;

  // Single pass partition
  liveChannels = [];
  vodChannels = [];
  seriesChannels = [];
  for (var i = 0; i < channels.length; i++) {
    var item = channels[i];
    if (item.type === 'vod') vodChannels.push(item);else if (item.type === 'series') seriesChannels.push(item);else liveChannels.push(item);
  }
  document.getElementById('headerTotalCount').innerText = channels.length.toLocaleString('tr-TR');
  document.getElementById('lblStorageStatus').innerText = "Haf\u0131zada: ".concat(channels.length.toLocaleString('tr-TR'), " i\xE7erik haz\u0131r (Donma \xF6nleyici aktif).");
  if (saveToDb) {
    savePlaylistToDb(channels);
  }

  // 1. Immediately render active view with zero delay
  buildLiveCategories();
  renderLiveGrid();

  // 2. Schedule other views asynchronously so UI thread stays 100% fluid
  setTimeout(function () {
    buildMoviesCategories();
    renderMoviesGrid();
  }, 30);
  setTimeout(function () {
    buildSeriesCategories();
    renderSeriesGrid();
    renderQuickPlayerItems();
  }, 60);
}

// --- Favorites Toggle ---
function toggleFavorite(url) {
  if (!url) return;
  if (favorites.has(url)) {
    favorites.delete(url);
    showToast('Favorilerden çıkarıldı.');
  } else {
    favorites.add(url);
    showToast('Favorilere eklendi ⭐');
  }
  localStorage.setItem('sf_favs', JSON.stringify(Array.from(favorites)));
  renderLiveGrid();
  renderMoviesGrid();
  renderSeriesGrid();
  updatePlayerFavIcon();
}

// ================= 1. CANLI TV (LIVE CHANNELS) =================
function buildLiveCategories() {
  var container = document.getElementById('liveCategoryPillsContainer');
  var countsMap = new Map();

  // O(N) single pass
  for (var i = 0; i < liveChannels.length; i++) {
    var g = liveChannels[i].group || 'Genel';
    countsMap.set(g, (countsMap.get(g) || 0) + 1);
  }
  var sorted = Array.from(countsMap.entries()).sort(function (a, b) {
    return b[1] - a[1];
  });
  var html = "\n        <button class=\"live-cat-pill tv-focusable flex-shrink-0 px-4 py-2 rounded-full ".concat(activeLiveCategory === 'ALL' ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant', " text-xs font-semibold transition-all shadow-sm\" data-group=\"ALL\">\n          T\xFCm Kanallar (").concat(liveChannels.length.toLocaleString('tr-TR'), ")\n        </button>\n        <button class=\"live-cat-pill tv-focusable flex-shrink-0 px-4 py-2 rounded-full ").concat(activeLiveCategory === 'FAV' ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant', " text-xs font-medium transition-all\" data-group=\"FAV\">\n          \u2B50 Favoriler\n        </button>\n      ");

  // Show top 20 categories in horizontal bar
  var topCategories = sorted.slice(0, 20);
  topCategories.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      grp = _ref2[0],
      count = _ref2[1];
    var isLocked = isCategoryLocked(grp);
    html += "\n          <button class=\"live-cat-pill tv-focusable flex-shrink-0 px-4 py-2 rounded-full ".concat(activeLiveCategory === grp ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant', " hover:text-on-surface text-xs font-medium transition-all flex items-center gap-1.5\" data-group=\"").concat(grp, "\">\n            ").concat(isLocked ? '<span class="material-symbols-outlined text-xs text-amber-400">lock</span>' : '', "\n            <span>").concat(grp, " (").concat(count, ")</span>\n          </button>\n        ");
  });
  if (sorted.length > 20) {
    html += "\n          <button id=\"btnMoreLiveCats\" class=\"tv-focusable flex-shrink-0 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-primary border border-primary/30 text-xs font-bold transition-all\">\n            + Di\u011Fer Kategoriler (".concat(sorted.length - 20, ")\n          </button>\n        ");
  }
  container.innerHTML = html;
  container.querySelectorAll('.live-cat-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetGrp = btn.getAttribute('data-group');
      checkParentalAccess(targetGrp, function () {
        activeLiveCategory = targetGrp;
        updateLiveActiveCategoryLabel();
        buildLiveCategories();
        renderLiveGrid();
      });
    });
  });
  var moreBtn = document.getElementById('btnMoreLiveCats');
  if (moreBtn) moreBtn.addEventListener('click', function () {
    return openCategoryModal('live');
  });
  updateLiveActiveCategoryLabel();
}
function updateLiveActiveCategoryLabel() {
  var lbl = document.getElementById('lblActiveLiveCategory');
  if (activeLiveCategory === 'ALL') lbl.innerText = 'Kategori: Tüm Kanallar';else if (activeLiveCategory === 'FAV') lbl.innerText = 'Kategori: ⭐ Favoriler';else lbl.innerText = "Kategori: ".concat(activeLiveCategory);
}
function renderLiveGrid() {
  var query = (document.getElementById('inputLiveSearch').value || '').toLowerCase().trim();
  if (activeLiveCategory === 'FAV') {
    filteredLiveList = liveChannels.filter(function (c) {
      return favorites.has(c.url);
    });
  } else if (activeLiveCategory !== 'ALL') {
    filteredLiveList = liveChannels.filter(function (c) {
      return c.group === activeLiveCategory;
    });
  } else {
    filteredLiveList = liveChannels;
  }
  if (query) {
    filteredLiveList = filteredLiveList.filter(function (c) {
      return c.name.toLowerCase().includes(query) || c.group && c.group.toLowerCase().includes(query);
    });
  }
  document.getElementById('lblLiveCount').innerText = "".concat(filteredLiveList.length.toLocaleString('tr-TR'), " canl\u0131 kanal");
  var grid = document.getElementById('liveGrid');
  grid.innerHTML = '';
  renderedLiveCount = 0;
  if (filteredLiveList.length === 0) {
    grid.innerHTML = "\n          <div class=\"col-span-full py-12 text-center text-on-surface-variant flex flex-col items-center gap-2\">\n            <span class=\"material-symbols-outlined text-4xl text-outline\">search_off</span>\n            <p class=\"text-sm font-medium\">Bu filtrede canl\u0131 kanal bulunamad\u0131.</p>\n          </div>\n        ";
    document.getElementById('liveLoadingMore').classList.add('hidden');
    return;
  }
  appendLiveBatch();
}
function appendLiveBatch() {
  var grid = document.getElementById('liveGrid');
  var nextBatch = filteredLiveList.slice(renderedLiveCount, renderedLiveCount + BATCH_SIZE);
  if (nextBatch.length === 0) {
    document.getElementById('liveLoadingMore').classList.add('hidden');
    return;
  }
  var fragment = document.createDocumentFragment();
  nextBatch.forEach(function (ch) {
    var isFav = favorites.has(ch.url);
    var card = document.createElement('div');
    card.className = "channel-card tv-focusable bg-surface-container-low hover:bg-surface-container p-3 rounded-xl border border-outline-variant/60 flex items-center justify-between gap-3 cursor-pointer transition-all active:scale-[0.98] group";
    card.setAttribute('tabindex', '0');
    card.innerHTML = "\n          <div class=\"flex items-center gap-3 min-w-0\">\n            <div class=\"w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary overflow-hidden\">\n              ".concat(ch.logo ? "<img src=\"".concat(ch.logo, "\" loading=\"lazy\" decoding=\"async\" class=\"w-full h-full object-contain\" onerror=\"this.remove()\"/>") : '📺', "\n            </div>\n            <div class=\"min-w-0\">\n              <div class=\"flex items-center gap-1.5\">\n                <span class=\"text-xs font-semibold text-on-surface truncate group-hover:text-primary-light transition-colors\">").concat(ch.name, "</span>\n                <span class=\"w-1.5 h-1.5 rounded-full bg-secondary live-pulse\"></span>\n              </div>\n              <span class=\"text-[11px] text-on-surface-variant block truncate\">").concat(ch.program || ch.group || 'Canlı Akış', "</span>\n            </div>\n          </div>\n          <div class=\"flex items-center gap-1 flex-shrink-0\">\n            <button class=\"fav-btn w-8 h-8 rounded-full flex items-center justify-center ").concat(isFav ? 'text-amber-400' : 'text-outline hover:text-amber-400', " transition-colors\" title=\"Favori\">\n              <span class=\"material-symbols-outlined text-lg\">star</span>\n            </button>\n            <div class=\"w-8 h-8 rounded-full bg-primary/15 text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-all\">\n              <span class=\"material-symbols-outlined text-lg pl-0.5\">play_arrow</span>\n            </div>\n          </div>\n        ");
    card.addEventListener('click', function () {
      return playItem(ch);
    });
    card.querySelector('.fav-btn').addEventListener('click', function (e) {
      e.stopPropagation();
      toggleFavorite(ch.url);
    });
    fragment.appendChild(card);
  });
  grid.appendChild(fragment);
  renderedLiveCount += nextBatch.length;
  var loadingMoreEl = document.getElementById('liveLoadingMore');
  if (renderedLiveCount < filteredLiveList.length) {
    loadingMoreEl.classList.remove('hidden');
  } else {
    loadingMoreEl.classList.add('hidden');
  }
}
document.getElementById('btnLoadMoreLive').addEventListener('click', appendLiveBatch);

// Live search input with debounce
var liveSearchDebounceTimer;
var liveSearchInput = document.getElementById('inputLiveSearch');
var liveClearBtn = document.getElementById('btnClearLiveSearch');
liveSearchInput.addEventListener('input', function (e) {
  liveClearBtn.classList.toggle('hidden', !e.target.value);
  clearTimeout(liveSearchDebounceTimer);
  liveSearchDebounceTimer = setTimeout(renderLiveGrid, 120);
});
liveClearBtn.addEventListener('click', function () {
  liveSearchInput.value = '';
  liveClearBtn.classList.add('hidden');
  renderLiveGrid();
});

// ================= 2. SİNEMA / FİLMLER (MOVIES) =================
function buildMoviesCategories() {
  var container = document.getElementById('moviesCategoryPillsContainer');
  var countsMap = new Map();
  for (var i = 0; i < vodChannels.length; i++) {
    var g = vodChannels[i].group || 'Genel';
    countsMap.set(g, (countsMap.get(g) || 0) + 1);
  }
  var sorted = Array.from(countsMap.entries()).sort(function (a, b) {
    return b[1] - a[1];
  });
  var html = "\n        <button class=\"movie-cat-pill tv-focusable flex-shrink-0 px-4 py-2 rounded-full ".concat(activeMoviesCategory === 'ALL' ? 'bg-secondary text-on-secondary font-bold' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant', " text-xs font-semibold transition-all shadow-sm\" data-group=\"ALL\">\n          T\xFCm Filmler (").concat(vodChannels.length.toLocaleString('tr-TR'), ")\n        </button>\n        <button class=\"movie-cat-pill tv-focusable flex-shrink-0 px-4 py-2 rounded-full ").concat(activeMoviesCategory === 'FAV' ? 'bg-secondary text-on-secondary font-bold' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant', " text-xs font-medium transition-all\" data-group=\"FAV\">\n          \u2B50 Favoriler\n        </button>\n      ");
  var topCategories = sorted.slice(0, 20);
  topCategories.forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      grp = _ref4[0],
      count = _ref4[1];
    var isLocked = isCategoryLocked(grp);
    html += "\n          <button class=\"movie-cat-pill tv-focusable flex-shrink-0 px-4 py-2 rounded-full ".concat(activeMoviesCategory === grp ? 'bg-secondary text-on-secondary font-bold' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant', " hover:text-on-surface text-xs font-medium transition-all flex items-center gap-1.5\" data-group=\"").concat(grp, "\">\n            ").concat(isLocked ? '<span class="material-symbols-outlined text-xs text-amber-400">lock</span>' : '', "\n            <span>").concat(grp, " (").concat(count, ")</span>\n          </button>\n        ");
  });
  if (sorted.length > 20) {
    html += "\n          <button id=\"btnMoreMovieCats\" class=\"tv-focusable flex-shrink-0 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-secondary border border-secondary/30 text-xs font-bold transition-all\">\n            + Di\u011Fer Kategoriler (".concat(sorted.length - 20, ")\n          </button>\n        ");
  }
  container.innerHTML = html;
  container.querySelectorAll('.movie-cat-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetGrp = btn.getAttribute('data-group');
      checkParentalAccess(targetGrp, function () {
        activeMoviesCategory = targetGrp;
        updateMoviesActiveCategoryLabel();
        buildMoviesCategories();
        renderMoviesGrid();
      });
    });
  });
  var moreBtn = document.getElementById('btnMoreMovieCats');
  if (moreBtn) moreBtn.addEventListener('click', function () {
    return openCategoryModal('movies');
  });
  updateMoviesActiveCategoryLabel();
}
function updateMoviesActiveCategoryLabel() {
  var lbl = document.getElementById('lblActiveMoviesCategory');
  if (activeMoviesCategory === 'ALL') lbl.innerText = 'Kategori: Tüm Filmler';else if (activeMoviesCategory === 'FAV') lbl.innerText = 'Kategori: ⭐ Favoriler';else lbl.innerText = "Kategori: ".concat(activeMoviesCategory);
}
function renderMoviesGrid() {
  var query = (document.getElementById('inputMoviesSearch').value || '').toLowerCase().trim();
  if (activeMoviesCategory === 'FAV') {
    filteredMoviesList = vodChannels.filter(function (c) {
      return favorites.has(c.url);
    });
  } else if (activeMoviesCategory !== 'ALL') {
    filteredMoviesList = vodChannels.filter(function (c) {
      return c.group === activeMoviesCategory;
    });
  } else {
    filteredMoviesList = vodChannels;
  }
  if (query) {
    filteredMoviesList = filteredMoviesList.filter(function (c) {
      return c.name.toLowerCase().includes(query) || c.group && c.group.toLowerCase().includes(query);
    });
  }
  document.getElementById('lblMoviesCount').innerText = "".concat(filteredMoviesList.length.toLocaleString('tr-TR'), " film");
  var grid = document.getElementById('moviesGrid');
  grid.innerHTML = '';
  renderedMoviesCount = 0;
  if (filteredMoviesList.length === 0) {
    grid.innerHTML = "\n          <div class=\"col-span-full py-12 text-center text-on-surface-variant flex flex-col items-center gap-2\">\n            <span class=\"material-symbols-outlined text-4xl text-outline\">movie</span>\n            <p class=\"text-sm font-medium\">Bu film kategorisinde i\xE7erik bulunamad\u0131.</p>\n          </div>\n        ";
    document.getElementById('moviesLoadingMore').classList.add('hidden');
    return;
  }
  appendMoviesBatch();
}
function appendMoviesBatch() {
  var grid = document.getElementById('moviesGrid');
  var nextBatch = filteredMoviesList.slice(renderedMoviesCount, renderedMoviesCount + BATCH_SIZE);
  if (nextBatch.length === 0) {
    document.getElementById('moviesLoadingMore').classList.add('hidden');
    return;
  }
  var fragment = document.createDocumentFragment();
  nextBatch.forEach(function (m) {
    var isFav = favorites.has(m.url);
    var card = document.createElement('div');
    card.className = "tv-focusable rounded-xl bg-surface-container-low border border-outline-variant hover:bg-surface-container transition-all cursor-pointer overflow-hidden group flex flex-col active:scale-[0.98] relative";
    card.setAttribute('tabindex', '0');
    card.innerHTML = "\n          <div class=\"relative w-full aspect-[2/3] bg-surface-container-highest overflow-hidden flex items-center justify-center\">\n            ".concat(m.logo ? "<img src=\"".concat(m.logo, "\" loading=\"lazy\" decoding=\"async\" class=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500\" onerror=\"this.remove()\"/>") : '<span class="text-4xl text-secondary font-bold">🎬</span>', "\n            <div class=\"absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent\"></div>\n            <span class=\"absolute top-2 left-2 px-2 py-0.5 rounded bg-surface-container-lowest/80 backdrop-blur-md text-[10px] font-bold text-secondary\">\n              ").concat(m.rating ? '★ ' + m.rating : '4K', "\n            </span>\n            <div class=\"absolute top-2 right-2 flex items-center gap-1\">\n              <button class=\"movie-dl-btn w-7 h-7 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-outline hover:text-primary transition-colors\" title=\"Filmi \u0130ndir\">\n                <span class=\"material-symbols-outlined text-base\">download</span>\n              </button>\n              <button class=\"movie-fav-btn w-7 h-7 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center ").concat(isFav ? 'text-amber-400' : 'text-outline hover:text-amber-400', " transition-colors\" title=\"Favori\">\n                <span class=\"material-symbols-outlined text-base\">star</span>\n              </button>\n            </div>\n            <div class=\"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 pointer-events-none\">\n              <div class=\"w-11 h-11 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-lg\">\n                <span class=\"material-symbols-outlined text-2xl pl-0.5\">play_arrow</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"p-2.5 flex flex-col gap-0.5\">\n            <h4 class=\"text-xs font-bold text-on-surface truncate group-hover:text-secondary-light\">").concat(m.name, "</h4>\n            <div class=\"flex items-center justify-between text-[11px] text-on-surface-variant\">\n              <span>").concat(m.year || '2024', "</span>\n              <span class=\"truncate max-w-[80px]\">").concat(m.group || 'Sinema', "</span>\n            </div>\n          </div>\n        ");
    card.addEventListener('click', function () {
      return playItem(m);
    });
    card.querySelector('.movie-fav-btn').addEventListener('click', function (e) {
      e.stopPropagation();
      toggleFavorite(m.url);
    });
    card.querySelector('.movie-dl-btn').addEventListener('click', function (e) {
      e.stopPropagation();
      downloadMediaItem(m);
    });
    fragment.appendChild(card);
  });
  grid.appendChild(fragment);
  renderedMoviesCount += nextBatch.length;
  var loadingMoreEl = document.getElementById('moviesLoadingMore');
  if (renderedMoviesCount < filteredMoviesList.length) {
    loadingMoreEl.classList.remove('hidden');
  } else {
    loadingMoreEl.classList.add('hidden');
  }
}
document.getElementById('btnLoadMoreMovies').addEventListener('click', appendMoviesBatch);
var moviesSearchDebounceTimer;
var moviesSearchInput = document.getElementById('inputMoviesSearch');
var moviesClearBtn = document.getElementById('btnClearMoviesSearch');
moviesSearchInput.addEventListener('input', function (e) {
  moviesClearBtn.classList.toggle('hidden', !e.target.value);
  clearTimeout(moviesSearchDebounceTimer);
  moviesSearchDebounceTimer = setTimeout(renderMoviesGrid, 120);
});
moviesClearBtn.addEventListener('click', function () {
  moviesSearchInput.value = '';
  moviesClearBtn.classList.add('hidden');
  renderMoviesGrid();
});

// ================= 3. DİZİLER (SERIES) =================
function buildSeriesCategories() {
  var container = document.getElementById('seriesCategoryPillsContainer');
  var countsMap = new Map();
  for (var i = 0; i < seriesChannels.length; i++) {
    var g = seriesChannels[i].group || 'Genel';
    countsMap.set(g, (countsMap.get(g) || 0) + 1);
  }
  var sorted = Array.from(countsMap.entries()).sort(function (a, b) {
    return b[1] - a[1];
  });
  var html = "\n        <button class=\"series-cat-pill tv-focusable flex-shrink-0 px-4 py-2 rounded-full ".concat(activeSeriesCategory === 'ALL' ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant', " text-xs font-semibold transition-all shadow-sm\" data-group=\"ALL\">\n          T\xFCm Diziler (").concat(seriesChannels.length.toLocaleString('tr-TR'), ")\n        </button>\n        <button class=\"series-cat-pill tv-focusable flex-shrink-0 px-4 py-2 rounded-full ").concat(activeSeriesCategory === 'FAV' ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant', " text-xs font-medium transition-all\" data-group=\"FAV\">\n          \u2B50 Favoriler\n        </button>\n      ");
  var topCategories = sorted.slice(0, 20);
  topCategories.forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      grp = _ref6[0],
      count = _ref6[1];
    var isLocked = isCategoryLocked(grp);
    html += "\n          <button class=\"series-cat-pill tv-focusable flex-shrink-0 px-4 py-2 rounded-full ".concat(activeSeriesCategory === grp ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant', " hover:text-on-surface text-xs font-medium transition-all flex items-center gap-1.5\" data-group=\"").concat(grp, "\">\n            ").concat(isLocked ? '<span class="material-symbols-outlined text-xs text-amber-400">lock</span>' : '', "\n            <span>").concat(grp, " (").concat(count, ")</span>\n          </button>\n        ");
  });
  if (sorted.length > 20) {
    html += "\n          <button id=\"btnMoreSeriesCats\" class=\"tv-focusable flex-shrink-0 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-primary border border-primary/30 text-xs font-bold transition-all\">\n            + Di\u011Fer Kategoriler (".concat(sorted.length - 20, ")\n          </button>\n        ");
  }
  container.innerHTML = html;
  container.querySelectorAll('.series-cat-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetGrp = btn.getAttribute('data-group');
      checkParentalAccess(targetGrp, function () {
        activeSeriesCategory = targetGrp;
        updateSeriesActiveCategoryLabel();
        buildSeriesCategories();
        renderSeriesGrid();
      });
    });
  });
  var moreBtn = document.getElementById('btnMoreSeriesCats');
  if (moreBtn) moreBtn.addEventListener('click', function () {
    return openCategoryModal('series');
  });
  updateSeriesActiveCategoryLabel();
}
function updateSeriesActiveCategoryLabel() {
  var lbl = document.getElementById('lblActiveSeriesCategory');
  if (activeSeriesCategory === 'ALL') lbl.innerText = 'Kategori: Tüm Diziler';else if (activeSeriesCategory === 'FAV') lbl.innerText = 'Kategori: ⭐ Favoriler';else lbl.innerText = "Kategori: ".concat(activeSeriesCategory);
}
function renderSeriesGrid() {
  var query = (document.getElementById('inputSeriesSearch').value || '').toLowerCase().trim();
  if (activeSeriesCategory === 'FAV') {
    filteredSeriesList = seriesChannels.filter(function (c) {
      return favorites.has(c.name);
    });
  } else if (activeSeriesCategory !== 'ALL') {
    filteredSeriesList = seriesChannels.filter(function (c) {
      return c.group === activeSeriesCategory;
    });
  } else {
    filteredSeriesList = seriesChannels;
  }
  if (query) {
    filteredSeriesList = filteredSeriesList.filter(function (c) {
      return c.name.toLowerCase().includes(query) || c.group && c.group.toLowerCase().includes(query);
    });
  }
  document.getElementById('lblSeriesCount').innerText = "".concat(filteredSeriesList.length.toLocaleString('tr-TR'), " dizi");
  var grid = document.getElementById('seriesGrid');
  grid.innerHTML = '';
  renderedSeriesCount = 0;
  if (filteredSeriesList.length === 0) {
    grid.innerHTML = "\n          <div class=\"col-span-full py-12 text-center text-on-surface-variant flex flex-col items-center gap-2\">\n            <span class=\"material-symbols-outlined text-4xl text-outline\">video_library</span>\n            <p class=\"text-sm font-medium\">Bu kategoride dizi bulunamad\u0131.</p>\n          </div>\n        ";
    document.getElementById('seriesLoadingMore').classList.add('hidden');
    return;
  }
  appendSeriesBatch();
}
function appendSeriesBatch() {
  var grid = document.getElementById('seriesGrid');
  var nextBatch = filteredSeriesList.slice(renderedSeriesCount, renderedSeriesCount + BATCH_SIZE);
  if (nextBatch.length === 0) {
    document.getElementById('seriesLoadingMore').classList.add('hidden');
    return;
  }
  var fragment = document.createDocumentFragment();
  nextBatch.forEach(function (s) {
    var isFav = favorites.has(s.name);
    var card = document.createElement('div');
    card.className = "tv-focusable rounded-xl bg-surface-container-low border border-outline-variant hover:bg-surface-container transition-all cursor-pointer overflow-hidden group flex flex-col active:scale-[0.98]";
    card.setAttribute('tabindex', '0');
    card.innerHTML = "\n          <div class=\"relative w-full aspect-[2/3] bg-surface-container-highest overflow-hidden flex items-center justify-center\">\n            ".concat(s.logo ? "<img src=\"".concat(s.logo, "\" loading=\"lazy\" decoding=\"async\" class=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500\" onerror=\"this.remove()\"/>") : '<span class="text-4xl text-primary font-bold">🍿</span>', "\n            <div class=\"absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent\"></div>\n            <span class=\"absolute top-2 left-2 px-2 py-0.5 rounded bg-surface-container-lowest/80 backdrop-blur-md text-[10px] font-bold text-primary\">\n              ").concat(s.rating ? '★ ' + s.rating : 'Dizi', "\n            </span>\n            <button class=\"series-fav-btn absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center ").concat(isFav ? 'text-amber-400' : 'text-outline hover:text-amber-400', "\">\n              <span class=\"material-symbols-outlined text-base\">star</span>\n            </button>\n            <div class=\"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40\">\n              <div class=\"w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg\">\n                <span class=\"material-symbols-outlined text-2xl pl-0.5\">format_list_bulleted</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"p-2.5 flex flex-col gap-0.5\">\n            <h4 class=\"text-xs font-bold text-on-surface truncate group-hover:text-primary-light\">").concat(s.name, "</h4>\n            <div class=\"flex items-center justify-between text-[11px] text-on-surface-variant\">\n              <span>").concat(s.year || '2024', "</span>\n              <span class=\"truncate max-w-[80px]\">").concat(s.group || 'Diziler', "</span>\n            </div>\n          </div>\n        ");
    card.addEventListener('click', function () {
      return openSeriesModal(s);
    });
    card.querySelector('.series-fav-btn').addEventListener('click', function (e) {
      e.stopPropagation();
      toggleFavorite(s.name);
    });
    fragment.appendChild(card);
  });
  grid.appendChild(fragment);
  renderedSeriesCount += nextBatch.length;
  var loadingMoreEl = document.getElementById('seriesLoadingMore');
  if (renderedSeriesCount < filteredSeriesList.length) {
    loadingMoreEl.classList.remove('hidden');
  } else {
    loadingMoreEl.classList.add('hidden');
  }
}
document.getElementById('btnLoadMoreSeries').addEventListener('click', appendSeriesBatch);
var seriesSearchDebounceTimer;
var seriesSearchInput = document.getElementById('inputSeriesSearch');
var seriesClearBtn = document.getElementById('btnClearSeriesSearch');
seriesSearchInput.addEventListener('input', function (e) {
  seriesClearBtn.classList.toggle('hidden', !e.target.value);
  clearTimeout(seriesSearchDebounceTimer);
  seriesSearchDebounceTimer = setTimeout(renderSeriesGrid, 120);
});
seriesClearBtn.addEventListener('click', function () {
  seriesSearchInput.value = '';
  seriesClearBtn.classList.add('hidden');
  renderSeriesGrid();
});

// --- Auto Infinite Scroll Sentinel using IntersectionObserver ---
if ('IntersectionObserver' in window) {
  var scrollObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (entry.target.id === 'liveLoadingMore') appendLiveBatch();else if (entry.target.id === 'moviesLoadingMore') appendMoviesBatch();else if (entry.target.id === 'seriesLoadingMore') appendSeriesBatch();
      }
    });
  }, {
    rootMargin: '350px'
  });
  scrollObserver.observe(document.getElementById('liveLoadingMore'));
  scrollObserver.observe(document.getElementById('moviesLoadingMore'));
  scrollObserver.observe(document.getElementById('seriesLoadingMore'));
}

// --- Series Episodes Modal ---
function openSeriesModal(series) {
  var modal = document.getElementById('seriesModal');
  document.getElementById('seriesModalTitle').innerText = series.name;
  document.getElementById('seriesModalCategory').innerText = "".concat(series.group || 'Dizi', " \u2022 ").concat(series.year || '2024');
  var seasonsTabs = document.getElementById('seriesSeasonsTabs');
  var episodesList = document.getElementById('seriesEpisodesList');
  var seasons = series.seasons || [{
    season: 1,
    episodes: [{
      number: 1,
      title: series.name,
      url: series.url,
      duration: '45 dk'
    }]
  }];
  seasonsTabs.innerHTML = '';
  seasons.forEach(function (seasonObj, idx) {
    var btn = document.createElement('button');
    btn.className = "tv-focusable px-4 py-1.5 rounded-full ".concat(idx === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant border border-outline-variant', " text-xs font-bold flex-shrink-0");
    btn.innerText = "Sezon ".concat(seasonObj.season);
    btn.addEventListener('click', function () {
      seasonsTabs.querySelectorAll('button').forEach(function (b) {
        b.classList.remove('bg-primary', 'text-on-primary');
        b.classList.add('bg-surface-container', 'text-on-surface-variant', 'border', 'border-outline-variant');
      });
      btn.classList.add('bg-primary', 'text-on-primary');
      btn.classList.remove('bg-surface-container', 'text-on-surface-variant', 'border', 'border-outline-variant');
      renderEpisodes(seasonObj.episodes, series);
    });
    seasonsTabs.appendChild(btn);
  });
  function renderEpisodes(eps, parentSeries) {
    episodesList.innerHTML = '';
    eps.forEach(function (ep) {
      var row = document.createElement('div');
      row.className = "tv-focusable p-3 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/60 flex items-center justify-between gap-3 cursor-pointer transition-all active:scale-[0.99] group";
      row.innerHTML = "\n            <div class=\"flex items-center gap-3 min-w-0\">\n              <div class=\"w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-xs font-bold text-primary flex-shrink-0\">\n                ".concat(ep.number, "\n              </div>\n              <div class=\"min-w-0\">\n                <h5 class=\"text-xs font-bold text-on-surface truncate group-hover:text-primary-light\">").concat(ep.title, "</h5>\n                <span class=\"text-[10px] text-on-surface-variant\">").concat(ep.duration || 'Bölüm', "</span>\n              </div>\n            </div>\n            <div class=\"flex items-center gap-2 flex-shrink-0\">\n              <button class=\"ep-dl-btn w-8 h-8 rounded-full bg-surface-container-high hover:bg-primary/30 text-outline hover:text-primary flex items-center justify-center transition-colors\" title=\"B\xF6l\xFCm\xFC \u0130ndir\">\n                <span class=\"material-symbols-outlined text-base\">download</span>\n              </button>\n              <div class=\"w-8 h-8 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-all\">\n                <span class=\"material-symbols-outlined text-base pl-0.5\">play_arrow</span>\n              </div>\n            </div>\n          ");
      row.addEventListener('click', function () {
        modal.classList.add('hidden');
        playItem({
          name: "".concat(parentSeries.name, " - ").concat(ep.title),
          group: parentSeries.group,
          url: ep.url,
          type: 'series'
        });
      });
      row.querySelector('.ep-dl-btn').addEventListener('click', function (e) {
        e.stopPropagation();
        downloadMediaItem({
          name: "".concat(parentSeries.name, " - ").concat(ep.title),
          group: parentSeries.group,
          url: ep.url,
          type: 'series'
        });
      });
      episodesList.appendChild(row);
    });
  }
  renderEpisodes(seasons[0].episodes, series);
  modal.classList.remove('hidden');
}
document.getElementById('btnCloseSeriesModal').addEventListener('click', function () {
  document.getElementById('seriesModal').classList.add('hidden');
});

// ================= CATEGORY SELECTION MODAL =================
function openCategoryModal(targetType) {
  currentCategoryModalTarget = targetType;
  var modal = document.getElementById('categoryModal');
  var title = document.getElementById('categoryModalTitle');
  var listContainer = document.getElementById('categoryModalList');
  var searchInput = document.getElementById('inputCategoryModalSearch');
  searchInput.value = '';
  var items = [];
  var currentActive = 'ALL';
  if (targetType === 'live') {
    title.innerText = 'Canlı TV Kategorileri';
    items = liveChannels;
    currentActive = activeLiveCategory;
  } else if (targetType === 'movies') {
    title.innerText = 'Sinema / Film Kategorileri';
    items = vodChannels;
    currentActive = activeMoviesCategory;
  } else if (targetType === 'series') {
    title.innerText = 'Dizi Kategorileri';
    items = seriesChannels;
    currentActive = activeSeriesCategory;
  }
  var groupsMap = new Map();
  for (var i = 0; i < items.length; i++) {
    var grp = items[i].group || 'Genel';
    groupsMap.set(grp, (groupsMap.get(grp) || 0) + 1);
  }
  function renderCategoriesList() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    listContainer.innerHTML = '';
    var allBtn = document.createElement('button');
    allBtn.className = "tv-focusable p-3 rounded-xl flex items-center justify-between text-left transition-all ".concat(currentActive === 'ALL' ? 'bg-primary text-on-primary font-bold shadow-md' : 'bg-surface-container hover:bg-surface-container-high text-on-surface');
    allBtn.innerHTML = "\n          <span>T\xFCm \u0130\xE7erikler</span>\n          <span class=\"text-xs px-2 py-0.5 rounded-full ".concat(currentActive === 'ALL' ? 'bg-black/30' : 'bg-surface-container-highest', "\">").concat(items.length.toLocaleString('tr-TR'), "</span>\n        ");
    allBtn.addEventListener('click', function () {
      return selectCategoryFromModal('ALL');
    });
    listContainer.appendChild(allBtn);
    var favBtn = document.createElement('button');
    favBtn.className = "tv-focusable p-3 rounded-xl flex items-center justify-between text-left transition-all ".concat(currentActive === 'FAV' ? 'bg-primary text-on-primary font-bold shadow-md' : 'bg-surface-container hover:bg-surface-container-high text-on-surface');
    favBtn.innerHTML = "\n          <span class=\"flex items-center gap-1.5\">\u2B50 Favorilerim</span>\n          <span class=\"text-xs px-2 py-0.5 rounded-full ".concat(currentActive === 'FAV' ? 'bg-black/30' : 'bg-surface-container-highest', "\">\u2605</span>\n        ");
    favBtn.addEventListener('click', function () {
      return selectCategoryFromModal('FAV');
    });
    listContainer.appendChild(favBtn);
    var sortedGroups = Array.from(groupsMap.keys()).sort();
    sortedGroups.forEach(function (grp) {
      if (query && !grp.toLowerCase().includes(query)) return;
      var count = groupsMap.get(grp);
      var isLocked = isCategoryLocked(grp);
      var btn = document.createElement('button');
      btn.className = "tv-focusable p-3 rounded-xl flex items-center justify-between text-left transition-all ".concat(currentActive === grp ? 'bg-primary text-on-primary font-bold shadow-md' : 'bg-surface-container hover:bg-surface-container-high text-on-surface');
      btn.innerHTML = "\n            <span class=\"truncate pr-2 flex items-center gap-1.5\">\n              ".concat(isLocked ? '<span class="material-symbols-outlined text-sm text-amber-400">lock</span>' : '', "\n              <span>").concat(grp, "</span>\n            </span>\n            <span class=\"text-xs px-2 py-0.5 rounded-full ").concat(currentActive === grp ? 'bg-black/30' : 'bg-surface-container-highest', "\">").concat(count.toLocaleString('tr-TR'), "</span>\n          ");
      btn.addEventListener('click', function () {
        return selectCategoryFromModal(grp);
      });
      listContainer.appendChild(btn);
    });
  }
  function selectCategoryFromModal(categoryName) {
    checkParentalAccess(categoryName, function () {
      if (currentCategoryModalTarget === 'live') {
        activeLiveCategory = categoryName;
        updateLiveActiveCategoryLabel();
        buildLiveCategories();
        renderLiveGrid();
      } else if (currentCategoryModalTarget === 'movies') {
        activeMoviesCategory = categoryName;
        updateMoviesActiveCategoryLabel();
        buildMoviesCategories();
        renderMoviesGrid();
      } else if (currentCategoryModalTarget === 'series') {
        activeSeriesCategory = categoryName;
        updateSeriesActiveCategoryLabel();
        buildSeriesCategories();
        renderSeriesGrid();
      }
      modal.classList.add('hidden');
    });
  }
  searchInput.oninput = function (e) {
    return renderCategoriesList(e.target.value.toLowerCase().trim());
  };
  renderCategoriesList();
  modal.classList.remove('hidden');
}
document.getElementById('btnOpenLiveCategoryModal').addEventListener('click', function () {
  return openCategoryModal('live');
});
document.getElementById('btnOpenMoviesCategoryModal').addEventListener('click', function () {
  return openCategoryModal('movies');
});
document.getElementById('btnOpenSeriesCategoryModal').addEventListener('click', function () {
  return openCategoryModal('series');
});
document.getElementById('btnCloseCategoryModal').addEventListener('click', function () {
  document.getElementById('categoryModal').classList.add('hidden');
});

// ================= 4. MULTI-ENGINE VIDEO STREAMING (HLS.js + mpegts.js + Native) =================
var videoElem = document.getElementById('mainVideo');
var playerSpinner = document.getElementById('playerSpinner');
var playerPlaceholder = document.getElementById('playerPlaceholder');
var waitingDebounceTimer = null;

// --- Maç Modu (Sıfır Gecikme) & Standart Mod Durumu ---
var isMatchMode = localStorage.getItem('sf_match_mode') === '1';
var matchModeStallCount = 0;
var lastStallTime = 0;
function updateMatchModeUI() {
  var btn = document.getElementById('btnToggleMatchMode');
  var icon = document.getElementById('iconMatchMode');
  var lbl = document.getElementById('lblMatchMode');
  var indicator = document.getElementById('playerModeIndicator');
  var indIcon = document.getElementById('playerIndicatorIcon');
  var indText = document.getElementById('playerIndicatorText');
  var toolStatus = document.getElementById('toolMatchModeStatus');
  if (isMatchMode) {
    if (btn) btn.className = "tv-focusable p-3 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/50 text-left transition-all active:scale-95 flex flex-col justify-between gap-2";
    if (icon) {
      icon.innerText = "bolt";
      icon.className = "material-symbols-outlined text-xl text-amber-400 animate-pulse";
    }
    if (lbl) lbl.innerText = "Maç Modu (0s Gecikme)";
    if (toolStatus) {
      toolStatus.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/25 text-amber-300 border border-amber-500/50";
      toolStatus.innerText = "AKTİF (0s)";
    }
    if (indicator) {
      indicator.className = "hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[11px] font-bold text-amber-300";
      if (indIcon) {
        indIcon.innerText = "bolt";
        indIcon.className = "material-symbols-outlined text-sm text-amber-400 animate-pulse";
      }
      if (indText) indText.innerText = "Maç Modu (0s)";
    }
  } else {
    if (btn) btn.className = "tv-focusable p-3 rounded-2xl bg-surface-container hover:bg-surface-container-high border border-outline-variant text-left transition-all active:scale-95 flex flex-col justify-between gap-2";
    if (icon) {
      icon.innerText = "shield";
      icon.className = "material-symbols-outlined text-xl text-secondary";
    }
    if (lbl) lbl.innerText = "Standart Mod";
    if (toolStatus) {
      toolStatus.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant";
      toolStatus.innerText = "STANDART";
    }
    if (indicator) {
      indicator.className = "hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant text-[11px] font-semibold text-on-surface-variant";
      if (indIcon) {
        indIcon.innerText = "shield";
        indIcon.className = "material-symbols-outlined text-sm text-secondary";
      }
      if (indText) indText.innerText = "Standart";
    }
  }
  var typeBadge = document.getElementById('playerTypeBadge');
  if (typeBadge && currentItem && (currentItem.type === 'live' || !currentItem.type) && !currentItem.isCatchup) {
    typeBadge.innerText = isMatchMode ? '⚡ MAÇ (0s)' : 'CANLI';
    typeBadge.className = isMatchMode ? 'text-[10px] font-bold text-amber-400 tracking-wider uppercase' : 'text-[10px] font-bold text-secondary tracking-wider uppercase';
  }
}
function toggleMatchMode() {
  isMatchMode = !isMatchMode;
  localStorage.setItem('sf_match_mode', isMatchMode ? '1' : '0');
  updateMatchModeUI();
  if (isMatchMode) {
    showToast('⚡ Maç Modu Aktif: Sıfır gecikmeli canlı yayın!');
  } else {
    showToast('🛡️ Standart Mod Aktif: Donma önleyici kesintisiz yayın.');
  }
  if (currentItem && (currentItem.type === 'live' || !currentItem.type) && !currentItem.isCatchup) {
    playItem(currentItem);
  }
}
function trackMatchModeStall() {
  if (!isMatchMode) return;
  var now = Date.now();
  if (now - lastStallTime < 25000) {
    matchModeStallCount++;
  } else {
    matchModeStallCount = 1;
  }
  lastStallTime = now;
  if (matchModeStallCount >= 2) {
    showToast('⚠️ Ağ dalgalanması: Donmayı önlemek için "Standart Mod"a geçebilirsiniz.', 4500);
    matchModeStallCount = 0;
  }
}

// --- TV+ Tarzı Catch-Up & Timeshift Fonksiyonları ---
window._xtreamCreds = JSON.parse(localStorage.getItem('sf_xtream_creds') || 'null');
function formatXtreamDate(date) {
  var y = date.getFullYear();
  var m = String(date.getMonth() + 1).padStart(2, '0');
  var d = String(date.getDate()).padStart(2, '0');
  var hh = String(date.getHours()).padStart(2, '0');
  var mm = String(date.getMinutes()).padStart(2, '0');
  return "".concat(y, "-").concat(m, "-").concat(d, ":").concat(hh, "-").concat(mm);
}
function getXtreamTimeshiftUrl(item, startTimestamp) {
  var durationMinutes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 240;
  if (!item || !item.url) return null;
  var url = item.url;
  var startDateStr = formatXtreamDate(new Date(startTimestamp));

  // 1. Direct Regex match on Xtream Live URL:
  var match = url.match(/^(https?:\/\/[^\/]+(?:\/[^\/]+)*)\/live\/([^\/]+)\/([^\/]+)\/(\d+)\.(ts|m3u8|\w+)(\?.*)?$/i);
  if (match) {
    var base = match[1];
    var user = match[2];
    var pass = match[3];
    var streamId = match[4];
    var ext = match[5] || 'ts';
    return "".concat(base, "/timeshift/").concat(user, "/").concat(pass, "/").concat(durationMinutes, "/").concat(startDateStr, "/").concat(streamId, ".").concat(ext);
  }

  // 2. If item has stream_id and saved Xtream credentials exist:
  if (item.stream_id && window._xtreamCreds && window._xtreamCreds.server) {
    var _window$_xtreamCreds = window._xtreamCreds,
      server = _window$_xtreamCreds.server,
      _user = _window$_xtreamCreds.user,
      _pass = _window$_xtreamCreds.pass;
    return "".concat(server, "/timeshift/").concat(_user, "/").concat(_pass, "/").concat(durationMinutes, "/").concat(startDateStr, "/").concat(item.stream_id, ".ts");
  }

  // 3. Fallback: Flussonic / standard M3U catch-up format with UTC params:
  var utcSec = Math.floor(startTimestamp / 1000);
  var nowSec = Math.floor(Date.now() / 1000);
  var sep = url.includes('?') ? '&' : '?';
  return "".concat(url).concat(sep, "utc=").concat(utcSec, "&lutc=").concat(nowSec, "&timeshift=").concat(nowSec - utcSec);
}
function startCatchupStream(item, startTimestamp, label) {
  if (!item || !item.url) return;
  var originalItem = item.originalLiveItem || item;
  var timeshiftUrl = getXtreamTimeshiftUrl(originalItem, startTimestamp, 240);
  var catchupItem = {
    name: "[\u23EA ".concat(label, "] ").concat(originalItem.name),
    group: originalItem.group || 'Geriye Dönük Yayın',
    url: timeshiftUrl,
    originalLiveItem: originalItem,
    isCatchup: true,
    type: 'vod',
    // Acts as VOD so user can seek throughout the past hours
    logo: originalItem.logo || ''
  };
  playItem(catchupItem);
  showToast("\u23EA ".concat(label, " yay\u0131n\u0131 ba\u015Flat\u0131ld\u0131 (TV+ Ar\u015Fiv)"));
}
function showBufferingSpinner() {
  clearTimeout(waitingDebounceTimer);
  // Debounce 650ms to prevent screen flashing on sub-second micro-buffers
  waitingDebounceTimer = setTimeout(function () {
    playerSpinner.classList.remove('hidden');
  }, 650);
}
function hideBufferingSpinner() {
  clearTimeout(waitingDebounceTimer);
  waitingDebounceTimer = null;
  playerSpinner.classList.add('hidden');
}
function stopAllEngines() {
  hideBufferingSpinner();
  if (hlsInstance) {
    try {
      hlsInstance.destroy();
    } catch (e) {}
    hlsInstance = null;
  }
  if (mpegtsInstance) {
    try {
      mpegtsInstance.destroy();
    } catch (e) {}
    mpegtsInstance = null;
  }
  try {
    videoElem.pause();
    videoElem.removeAttribute('src');
    videoElem.load();
  } catch (e) {}
}
function playItem(item) {
  if (!item || !item.url) return;

  // Check Parental PIN lock
  if (item.group && isCategoryLocked(item.group) && !isSessionUnlocked) {
    checkParentalAccess(item.group, function () {
      return playItem(item);
    });
    return;
  }

  // Check VOD / Series Resume Memory
  checkAndPromptResume(item);
  currentItem = item;
  streamFailoverTried = false;
  document.getElementById('playerChannelTitle').innerText = item.name;
  document.getElementById('playerMetaTitle').innerText = item.name;
  document.getElementById('playerMetaGroup').innerText = "".concat(item.group || 'Genel', " \u2022 ").concat(item.isCatchup ? 'TV+ Geriye Dönük Yayın' : item.type === 'vod' ? 'Sinema Film' : item.type === 'series' ? 'Dizi' : 'Canlı Yayın');
  var typeBadge = document.getElementById('playerTypeBadge');
  if (item.isCatchup) {
    typeBadge.innerText = 'CATCH-UP (TV+)';
    typeBadge.className = 'text-[10px] font-bold text-amber-400 tracking-wider uppercase';
  } else if (item.type === 'vod') {
    typeBadge.innerText = 'SİNEMA';
    typeBadge.className = 'text-[10px] font-bold text-secondary tracking-wider uppercase';
  } else if (item.type === 'series') {
    typeBadge.innerText = 'DİZİ';
    typeBadge.className = 'text-[10px] font-bold text-secondary tracking-wider uppercase';
  } else {
    typeBadge.innerText = isMatchMode ? '⚡ MAÇ (0s)' : 'CANLI';
    typeBadge.className = isMatchMode ? 'text-[10px] font-bold text-amber-400 tracking-wider uppercase' : 'text-[10px] font-bold text-secondary tracking-wider uppercase';
  }
  playerPlaceholder.classList.add('hidden');
  playerSpinner.classList.remove('hidden');
  updatePlayerFavIcon();
  recentUrls = recentUrls.filter(function (u) {
    return u !== item.url;
  });
  recentUrls.unshift(item.url);
  if (recentUrls.length > 25) recentUrls.pop();
  localStorage.setItem('sf_recent', JSON.stringify(recentUrls));

  // Audio hint for VOD/Series with AC3/DTS audio
  var audioHint = document.getElementById('playerAudioHint');
  if (audioHint) {
    clearTimeout(audioHintTimeout);
    if (item.type === 'vod' || item.type === 'series') {
      audioHint.classList.remove('hidden');
      audioHintTimeout = setTimeout(function () {
        audioHint.classList.add('hidden');
      }, 9000);
    } else {
      audioHint.classList.add('hidden');
    }
  }
  stopAllEngines();
  var rawUrl = item.url.trim();
  var lowerUrl = rawUrl.toLowerCase();
  var isM3u8 = lowerUrl.includes('.m3u8');
  var isTs = lowerUrl.includes('.ts');
  var isLive = item.type === 'live' || lowerUrl.includes('/live/');

  // Alternate URL for bidirectional TS <-> M3U8 failover
  var altUrl = null;
  if (rawUrl.includes('/live/')) {
    if (isM3u8) {
      altUrl = rawUrl.replace(/\.m3u8(\?.*)?$/i, '.ts$1');
    } else if (isTs) {
      altUrl = rawUrl.replace(/\.ts(\?.*)?$/i, '.m3u8$1');
    } else {
      altUrl = rawUrl + '.m3u8';
    }
  } else if (isTs) {
    altUrl = rawUrl.replace(/\.ts(\?.*)?$/i, '.m3u8$1');
  } else if (isM3u8) {
    altUrl = rawUrl.replace(/\.m3u8(\?.*)?$/i, '.ts$1');
  }
  if (isM3u8) {
    playWithHls(rawUrl, altUrl);
  } else if (isTs || isLive && !isM3u8) {
    if (typeof mpegts !== 'undefined' && mpegts.isSupported()) {
      playWithMpegTs(rawUrl, altUrl);
    } else if (typeof Hls !== 'undefined' && Hls.isSupported() && altUrl) {
      playWithHls(altUrl, rawUrl);
    } else {
      playWithNative(rawUrl, altUrl);
    }
  } else {
    playWithNative(rawUrl, null);
  }
  switchView('view-player');
  showControlsHud(true);
  showToast("Oynat\u0131l\u0131yor: ".concat(item.name));
}
function playWithHls(targetUrl, fallbackUrl) {
  if (typeof Hls !== 'undefined' && Hls.isSupported()) {
    var hlsConfig = isMatchMode ? {
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 60,
      maxBufferLength: 4,
      maxMaxBufferLength: 8,
      maxBufferSize: 30 * 1000 * 1000,
      liveSyncDurationCount: 1,
      liveMaxLatencyDurationCount: 3,
      manifestLoadingTimeOut: 12000,
      manifestLoadingMaxRetry: 2,
      fragLoadingTimeOut: 15000,
      fragLoadingMaxRetry: 3
    } : {
      enableWorker: true,
      lowLatencyMode: false,
      backBufferLength: 300,
      maxBufferLength: 30,
      maxMaxBufferLength: 60,
      maxBufferSize: 60 * 1000 * 1000,
      liveSyncDurationCount: 3,
      liveMaxLatencyDurationCount: 10,
      manifestLoadingTimeOut: 15000,
      manifestLoadingMaxRetry: 3,
      fragLoadingTimeOut: 20000,
      fragLoadingMaxRetry: 4
    };
    hlsInstance = new Hls(hlsConfig);
    hlsInstance.loadSource(targetUrl);
    hlsInstance.attachMedia(videoElem);
    var hlsTimer = setTimeout(function () {
      if (videoElem.paused && !streamFailoverTried && fallbackUrl) {
        console.warn('HLS stream delayed, attempting failover:', fallbackUrl);
        triggerStreamFailover(fallbackUrl);
      }
    }, 12000);
    hlsInstance.on(Hls.Events.MANIFEST_PARSED, function () {
      clearTimeout(hlsTimer);
      hideBufferingSpinner();
      videoElem.play().catch(function (e) {
        return console.log('Autoplay prevented:', e);
      });
    });
    hlsInstance.on(Hls.Events.ERROR, function (event, data) {
      if (data.fatal) {
        clearTimeout(hlsTimer);
        console.warn('HLS Fatal Error:', data.type, data.details);
        if (!streamFailoverTried && fallbackUrl) {
          triggerStreamFailover(fallbackUrl);
        } else {
          hideBufferingSpinner();
          showToast('Yayın açılamadı. "VLC / Harici" butonuyla açabilirsiniz.');
        }
      }
    });
  } else {
    playWithNative(targetUrl, fallbackUrl);
  }
}
function playWithMpegTs(targetUrl, fallbackUrl) {
  if (typeof mpegts !== 'undefined' && mpegts.isSupported()) {
    try {
      var isLiveStream = !(currentItem && (currentItem.type === 'vod' || currentItem.type === 'series' || currentItem.isCatchup));
      var mpegtsConfig = isMatchMode ? {
        enableWorker: true,
        lazyLoad: false,
        enableStashBuffer: false,
        stashInitialSize: 128,
        liveBufferLatencyChasing: true,
        liveBufferLatencyMaxLatency: 1.2,
        liveBufferLatencyMinRemain: 0.2,
        autoCleanupSourceBuffer: true,
        autoCleanupMaxBackwardDuration: 60,
        autoCleanupMinBackwardDuration: 30
      } : {
        enableWorker: true,
        lazyLoad: false,
        enableStashBuffer: true,
        stashInitialSize: 384,
        liveBufferLatencyChasing: false,
        autoCleanupSourceBuffer: true,
        autoCleanupMaxBackwardDuration: 600,
        // 10 dakika yerel geri sarma hafızası
        autoCleanupMinBackwardDuration: 300 // 5 dakika garantili
      };
      mpegtsInstance = mpegts.createPlayer({
        type: 'mse',
        isLive: isLiveStream,
        url: targetUrl
      }, mpegtsConfig);
      mpegtsInstance.attachMediaElement(videoElem);
      mpegtsInstance.load();
      var tsTimer = setTimeout(function () {
        if (videoElem.paused && !streamFailoverTried && fallbackUrl) {
          console.warn('MPEG-TS delayed, attempting HLS failover:', fallbackUrl);
          triggerStreamFailover(fallbackUrl);
        }
      }, 12000);
      mpegtsInstance.play().then(function () {
        clearTimeout(tsTimer);
        hideBufferingSpinner();
      }).catch(function (e) {
        return console.log('MPEG-TS autoplay prevented:', e);
      });
      mpegtsInstance.on(mpegts.Events.ERROR, function (errType, errDetail, errInfo) {
        clearTimeout(tsTimer);
        console.warn('MPEG-TS Error:', errType, errDetail);
        if (!streamFailoverTried && fallbackUrl) {
          triggerStreamFailover(fallbackUrl);
        } else {
          hideBufferingSpinner();
          showToast('Canlı yayın başlatılamadı. "VLC / Harici" ile deneyebilirsiniz.');
        }
      });
      return;
    } catch (e) {
      console.warn('MPEG-TS exception:', e);
    }
  }
  if (fallbackUrl && !streamFailoverTried) {
    triggerStreamFailover(fallbackUrl);
  } else {
    playWithNative(targetUrl, null);
  }
}
function playWithNative(targetUrl, fallbackUrl) {
  videoElem.src = targetUrl;
  videoElem.load();
  videoElem.play().then(function () {
    hideBufferingSpinner();
  }).catch(function (err) {
    console.log('Native play failed:', err);
    if (fallbackUrl && !streamFailoverTried) {
      triggerStreamFailover(fallbackUrl);
    } else {
      hideBufferingSpinner();
    }
  });
}
function triggerStreamFailover(newUrl) {
  if (streamFailoverTried || !newUrl) return;
  streamFailoverTried = true;
  console.log('Failover to alternative URL:', newUrl);
  showToast('Yayın formatı (MPEG-TS / HLS) değiştirilerek bağlanılıyor...');
  stopAllEngines();
  if (newUrl.toLowerCase().includes('.m3u8')) {
    playWithHls(newUrl, null);
  } else if (typeof mpegts !== 'undefined' && mpegts.isSupported()) {
    playWithMpegTs(newUrl, null);
  } else {
    playWithNative(newUrl, null);
  }
}

// ================= EXTERNAL PLAYER (VLC / MX PLAYER) LAUNCHER =================
function openInExternalPlayer(targetItem) {
  var item = targetItem || currentItem;
  if (!item || !item.url) {
    showToast('Oynatılacak içerik bulunamadı.');
    return;
  }

  // 1. Android Native App Bridge
  if (window.AndroidBridge && typeof window.AndroidBridge.openExternalPlayer === 'function') {
    window.AndroidBridge.openExternalPlayer(item.url, item.name);
    showToast('🚀 VLC / Harici Oynatıcı başlatılıyor...');
    return;
  }

  // 2. Mobile Browser (Android Intent)
  var ua = navigator.userAgent || '';
  var isAndroid = /Android/i.test(ua);
  var isIOS = /iPhone|iPad|iPod/i.test(ua);
  if (isAndroid) {
    var cleanUrl = item.url.replace(/^https?:\/\//i, '');
    var scheme = item.url.startsWith('https') ? 'https' : 'http';
    var intentUrl = "intent://".concat(cleanUrl, "#Intent;scheme=").concat(scheme, ";type=video/*;title=").concat(encodeURIComponent(item.name), ";end");
    window.location.href = intentUrl;
    setTimeout(function () {
      window.location.href = "vlc://".concat(item.url);
    }, 1200);
    showToast('🚀 VLC / Video Oynatıcı açılıyor...');
    return;
  }
  if (isIOS) {
    window.location.href = "vlc-x-callback://x-callback-url/stream?url=".concat(encodeURIComponent(item.url));
    showToast('VLC for iOS açılıyor...');
    return;
  }

  // 3. Desktop Browser: Copy link and inform user
  if (navigator.clipboard) {
    navigator.clipboard.writeText(item.url);
    showToast('📋 Yayın linki kopyalandı! VLC > Ağ Akışı bölümüne yapıştırabilirsiniz.');
  } else {
    prompt('Yayın bağlantısı (VLC ile açabilirsiniz):', item.url);
  }
}

// ================= AUDIO TRACKS & MODAL CONTROLS =================
function showAudioModal() {
  var modal = document.getElementById('audioModal');
  var list = document.getElementById('audioModalTrackList');
  list.innerHTML = '';
  var hasTracks = false;
  if (hlsInstance && hlsInstance.audioTracks && hlsInstance.audioTracks.length > 0) {
    hasTracks = true;
    hlsInstance.audioTracks.forEach(function (t, idx) {
      var btn = document.createElement('button');
      var isSelected = hlsInstance.audioTrack === idx;
      btn.className = "w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ".concat(isSelected ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container text-on-surface hover:bg-surface-container-high');
      btn.innerHTML = "\n            <span>".concat(t.name || t.lang || 'Ses Parçası ' + (idx + 1), "</span>\n            ").concat(isSelected ? '<span class="material-symbols-outlined text-sm">check</span>' : '', "\n          ");
      btn.addEventListener('click', function () {
        hlsInstance.audioTrack = idx;
        showToast("Ses par\xE7as\u0131 se\xE7ildi: ".concat(t.name || t.lang || idx + 1));
        modal.classList.add('hidden');
      });
      list.appendChild(btn);
    });
  } else if (videoElem.audioTracks && videoElem.audioTracks.length > 0) {
    hasTracks = true;
    var _loop = function _loop(i) {
      var t = videoElem.audioTracks[i];
      var btn = document.createElement('button');
      btn.className = "w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ".concat(t.enabled ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container text-on-surface hover:bg-surface-container-high');
      btn.innerHTML = "\n            <span>".concat(t.label || t.language || 'Ses Parçası ' + (i + 1), "</span>\n            ").concat(t.enabled ? '<span class="material-symbols-outlined text-sm">check</span>' : '', "\n          ");
      btn.addEventListener('click', function () {
        for (var j = 0; j < videoElem.audioTracks.length; j++) {
          videoElem.audioTracks[j].enabled = j === i;
        }
        showToast("Ses par\xE7as\u0131 se\xE7ildi: ".concat(t.label || i + 1));
        modal.classList.add('hidden');
      });
      list.appendChild(btn);
    };
    for (var i = 0; i < videoElem.audioTracks.length; i++) {
      _loop(i);
    }
  }
  if (!hasTracks) {
    var row = document.createElement('div');
    row.className = "text-[11px] text-on-surface-variant p-2 rounded-lg bg-surface-container";
    row.innerText = "Dahili oynatıcıda alternatif ses parçası listelenemedi veya tek parça mevcut (Dolby AC3 / DTS).";
    list.appendChild(row);
  }
  modal.classList.remove('hidden');
}
(_document$getElementB = document.getElementById('btnPlayerExternal')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function () {
  togglePlayerToolsModal(false);
  openInExternalPlayer();
});
document.getElementById('btnPlayerAudioTracks').addEventListener('click', showAudioModal);
document.getElementById('btnCloseAudioModal').addEventListener('click', function () {
  document.getElementById('audioModal').classList.add('hidden');
});
document.getElementById('btnModalLaunchVlc').addEventListener('click', function () {
  document.getElementById('audioModal').classList.add('hidden');
  openInExternalPlayer();
});
document.getElementById('btnAudioHintVlc').addEventListener('click', function () {
  return openInExternalPlayer();
});
document.getElementById('btnCloseAudioHint').addEventListener('click', function () {
  document.getElementById('playerAudioHint').classList.add('hidden');
  clearTimeout(audioHintTimeout);
});

// ================= PLAYER HUD AUTO-HIDE & TOUCH CONTROLS =================
var hudTimer = null;
function showControlsHud() {
  var autoHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var wrap = document.getElementById('playerWrap');
  if (!wrap) return;
  wrap.classList.remove('player-hud-hidden');
  clearTimeout(hudTimer);
  if (autoHide && !videoElem.paused) {
    hudTimer = setTimeout(function () {
      hideControlsHud();
    }, 2800);
  }
}
function hideControlsHud() {
  var wrap = document.getElementById('playerWrap');
  if (!wrap) return;
  // Do not hide center button when paused
  if (!videoElem.paused) {
    wrap.classList.add('player-hud-hidden');
  }
}
function toggleControlsHud() {
  var wrap = document.getElementById('playerWrap');
  if (!wrap) return;
  if (wrap.classList.contains('player-hud-hidden')) {
    showControlsHud(true);
  } else {
    if (!videoElem.paused) {
      hideControlsHud();
    }
  }
}
function togglePlayPause() {
  if (videoElem.paused) {
    videoElem.play().catch(function (e) {
      return console.log('Play err:', e);
    });
    showControlsHud(true);
  } else {
    videoElem.pause();
    showControlsHud(false);
  }
}
document.getElementById('btnCenterPlay').addEventListener('click', function (e) {
  e.stopPropagation();
  togglePlayPause();
});
var playerWrapElem = document.getElementById('playerWrap');
playerWrapElem.addEventListener('click', function (e) {
  // Don't toggle HUD if user clicked on a button, input, or open menu
  if (e.target.closest('button') || e.target.closest('input') || e.target.closest('#playerSidePanel') || e.target.closest('#playerAudioHint') || e.target.closest('#playerPlaceholder')) {
    return;
  }
  toggleControlsHud();
});
playerWrapElem.addEventListener('mousemove', function () {
  return showControlsHud(true);
});
playerWrapElem.addEventListener('touchstart', function (e) {
  if (!e.target.closest('button') && !e.target.closest('input')) {
    showControlsHud(true);
  }
}, {
  passive: true
});
videoElem.addEventListener('play', function () {
  document.getElementById('iconCenterPlay').innerText = 'pause';
  document.getElementById('playerWrap').classList.remove('video-paused');
  playerSpinner.classList.add('hidden');
  if (window.AndroidBridge && typeof window.AndroidBridge.setVideoPlaying === 'function') {
    window.AndroidBridge.setVideoPlaying(true);
  }
  showControlsHud(true);
});
videoElem.addEventListener('pause', function () {
  document.getElementById('iconCenterPlay').innerText = 'play_arrow';
  document.getElementById('playerWrap').classList.add('video-paused');
  showControlsHud(false);
  if (window.AndroidBridge && typeof window.AndroidBridge.setVideoPlaying === 'function') {
    window.AndroidBridge.setVideoPlaying(false);
  }
});
videoElem.addEventListener('ended', function () {
  document.getElementById('iconCenterPlay').innerText = 'play_arrow';
  document.getElementById('playerWrap').classList.add('video-paused');
  showControlsHud(false);
  if (currentItem) clearResumeRecord(currentItem);
  if (window.AndroidBridge && typeof window.AndroidBridge.setVideoPlaying === 'function') {
    window.AndroidBridge.setVideoPlaying(false);
  }
});
videoElem.addEventListener('waiting', function () {
  showBufferingSpinner();
  trackMatchModeStall();
});
videoElem.addEventListener('playing', function () {
  hideBufferingSpinner();
  showControlsHud(true);
});
videoElem.addEventListener('canplay', function () {
  hideBufferingSpinner();
});
videoElem.addEventListener('timeupdate', function () {
  hideBufferingSpinner();
  updatePlayerProgress();
});
videoElem.addEventListener('progress', function () {
  updatePlayerProgress();
});
videoElem.addEventListener('seeked', function () {
  hideBufferingSpinner();
  updatePlayerProgress();
});

// --- Stream Range, Time & Seeking Controllers ---
function getStreamTimeRange() {
  var isVod = currentItem && (currentItem.type === 'vod' || currentItem.type === 'series');
  if (isVod && Number.isFinite(videoElem.duration) && videoElem.duration > 0) {
    return {
      isLive: false,
      start: 0,
      end: videoElem.duration,
      current: videoElem.currentTime || 0,
      duration: videoElem.duration
    };
  }
  var start = 0;
  var end = 0;
  var current = videoElem.currentTime || 0;
  if (videoElem.seekable && videoElem.seekable.length > 0) {
    start = videoElem.seekable.start(0);
    end = videoElem.seekable.end(videoElem.seekable.length - 1);
  } else if (videoElem.buffered && videoElem.buffered.length > 0) {
    start = videoElem.buffered.start(0);
    end = videoElem.buffered.end(videoElem.buffered.length - 1);
  } else {
    start = Math.max(0, current - 30);
    end = current;
  }
  if (end < current) end = current;
  return {
    isLive: true,
    start: start,
    end: end,
    current: current,
    duration: Math.max(0, end - start)
  };
}
function formatSeconds(sec) {
  if (!Number.isFinite(sec) || isNaN(sec) || sec < 0) return '00:00';
  sec = Math.floor(sec);
  var h = Math.floor(sec / 3600);
  var m = Math.floor(sec % 3600 / 60);
  var s = sec % 60;
  if (h > 0) {
    return "".concat(h.toString().padStart(2, '0'), ":").concat(m.toString().padStart(2, '0'), ":").concat(s.toString().padStart(2, '0'));
  }
  return "".concat(m.toString().padStart(2, '0'), ":").concat(s.toString().padStart(2, '0'));
}
function updatePlayerProgress() {
  if (!videoElem) return;
  var range = getStreamTimeRange();
  var elapsedTrack = document.getElementById('playerElapsedTrack');
  var bufferTrack = document.getElementById('playerBufferTrack');
  var timeDisplay = document.getElementById('playerTimeDisplay');
  var btnJumpLive = document.getElementById('btnJumpLive');
  if (!range.isLive) {
    var cur = range.current;
    var dur = range.duration;
    var pct = dur > 0 ? cur / dur * 100 : 0;
    if (elapsedTrack) elapsedTrack.style.width = "".concat(Math.min(100, Math.max(0, pct)), "%");
    if (bufferTrack && videoElem.buffered && videoElem.buffered.length > 0) {
      var maxBuf = 0;
      for (var i = 0; i < videoElem.buffered.length; i++) {
        if (videoElem.buffered.start(i) <= cur && cur <= videoElem.buffered.end(i)) {
          maxBuf = videoElem.buffered.end(i);
          break;
        }
      }
      var bufPct = dur > 0 ? maxBuf / dur * 100 : 0;
      bufferTrack.style.width = "".concat(Math.min(100, Math.max(0, bufPct)), "%");
    }
    if (timeDisplay) timeDisplay.innerText = "".concat(formatSeconds(cur), " / ").concat(formatSeconds(dur));
    if (btnJumpLive) btnJumpLive.classList.add('hidden');

    // Auto save progress for VOD & Series
    if (cur > 15 && dur > 30) {
      var now = Date.now();
      if (now - lastProgressSaveTime > 4000) {
        lastProgressSaveTime = now;
        if (currentItem && (currentItem.type === 'vod' || currentItem.type === 'series') && !currentItem.isCatchup) {
          saveResumeRecord(currentItem, cur, dur);
        }
      }
    }
  } else {
    var liveSpan = range.end - range.start;
    var offsetFromLive = Math.max(0, range.end - range.current);
    var _pct = liveSpan > 1 ? (range.current - range.start) / liveSpan * 100 : 100;
    if (elapsedTrack) elapsedTrack.style.width = "".concat(Math.min(100, Math.max(0, _pct)), "%");
    if (bufferTrack) bufferTrack.style.width = '100%';
    if (btnJumpLive) {
      btnJumpLive.classList.remove('hidden');
      if (offsetFromLive > 3.5) {
        btnJumpLive.className = 'tv-focusable flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/25 text-amber-300 border border-amber-500/40 hover:bg-amber-500/35 transition-all text-xs font-semibold';
        btnJumpLive.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span><span>Canlıya Dön</span>';
        if (timeDisplay) {
          timeDisplay.innerHTML = "<span class=\"text-amber-400 font-bold\">-".concat(formatSeconds(offsetFromLive), "</span> <span class=\"text-on-surface-variant text-[10px]\">(").concat(formatSeconds(liveSpan), " haf\u0131za)</span>");
        }
      } else {
        btnJumpLive.className = 'tv-focusable flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30 transition-all text-xs font-semibold';
        btnJumpLive.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse mr-0.5"></span><span>CANLI</span>';
        if (timeDisplay) {
          timeDisplay.innerHTML = "<span class=\"text-red-400 font-bold tracking-wider\">CANLI YAYIN</span>";
        }
      }
    }
  }
}
function seekRelative(deltaSeconds) {
  if (!videoElem) return;
  var range = getStreamTimeRange();
  if (!range.isLive) {
    var target = Math.max(0, Math.min(range.end, range.current + deltaSeconds));
    videoElem.currentTime = target;
    showToast("".concat(deltaSeconds < 0 ? '⏪ ' : '⏩ ').concat(Math.abs(deltaSeconds), " sn ").concat(deltaSeconds < 0 ? 'Geri' : 'İleri'));
  } else {
    var availableRewind = range.current - range.start;
    if (deltaSeconds < 0 && availableRewind <= 1.5) {
      showToast('⚠️ Canlı yayının en başındasınız (Önbellek sınırı)');
      return;
    }
    var _target = range.current + deltaSeconds;
    if (_target < range.start + 0.5) _target = range.start + 0.5;
    if (_target > range.end - 0.5) _target = range.end - 0.5;
    try {
      videoElem.currentTime = _target;
      var delayFromLive = Math.round(range.end - _target);
      if (delayFromLive > 3) {
        showToast("\u23EA -".concat(formatSeconds(delayFromLive), " geriye sar\u0131ld\u0131"));
      } else {
        showToast('🔴 Canlı yayındasınız');
      }
    } catch (err) {
      console.warn('Seek error:', err);
    }
  }
  updatePlayerProgress();
  showControlsHud(true);
}
function jumpToLiveEdge() {
  if (!videoElem) return;
  if (currentItem && currentItem.isCatchup && currentItem.originalLiveItem) {
    showToast('🔴 Canlı yayına dönülüyor...');
    playItem(currentItem.originalLiveItem);
    return;
  }
  var range = getStreamTimeRange();
  if (range.isLive) {
    if (hlsInstance && Number.isFinite(hlsInstance.liveSyncPosition) && hlsInstance.liveSyncPosition > 0) {
      videoElem.currentTime = hlsInstance.liveSyncPosition;
    } else {
      videoElem.currentTime = Math.max(0, range.end - 1);
    }
    showToast('🔴 Canlı yayına geçildi');
  } else {
    videoElem.currentTime = 0;
    showToast('Başa sarıldı');
  }
  updatePlayerProgress();
  showControlsHud(true);
}
document.getElementById('btnReplay10').addEventListener('click', function (e) {
  e.stopPropagation();
  seekRelative(-10);
});
document.getElementById('btnForward10').addEventListener('click', function (e) {
  e.stopPropagation();
  seekRelative(10);
});
document.getElementById('btnJumpLive').addEventListener('click', function (e) {
  e.stopPropagation();
  jumpToLiveEdge();
});

// Scrub bar click & touch drag
var progressBarElem = document.getElementById('playerProgressBar');
var isScrubbing = false;
function handleScrub(e) {
  if (!videoElem || !progressBarElem) return;
  var rect = progressBarElem.getBoundingClientRect();
  var clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
  var ratio = (clientX - rect.left) / rect.width;
  ratio = Math.max(0, Math.min(1, ratio));
  var range = getStreamTimeRange();
  if (!range.isLive) {
    if (range.duration > 0) {
      videoElem.currentTime = ratio * range.duration;
    }
  } else {
    var liveSpan = range.end - range.start;
    if (liveSpan > 2) {
      var target = range.start + ratio * liveSpan;
      videoElem.currentTime = Math.max(range.start + 0.5, Math.min(range.end - 0.5, target));
    }
  }
  updatePlayerProgress();
}
progressBarElem.addEventListener('click', function (e) {
  e.stopPropagation();
  handleScrub(e);
  showControlsHud(true);
});
progressBarElem.addEventListener('touchstart', function (e) {
  isScrubbing = true;
  handleScrub(e);
  showControlsHud(false);
}, {
  passive: true
});
progressBarElem.addEventListener('touchmove', function (e) {
  if (isScrubbing) {
    handleScrub(e);
  }
}, {
  passive: true
});
progressBarElem.addEventListener('touchend', function () {
  if (isScrubbing) {
    isScrubbing = false;
    showControlsHud(true);
  }
}, {
  passive: true
});

// --- Maç Modu & TV+ Catch-Up Buton Dinleyicileri ---
(_document$getElementB2 = document.getElementById('btnToggleMatchMode')) === null || _document$getElementB2 === void 0 || _document$getElementB2.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMatchMode();
});
(_document$getElementB3 = document.getElementById('btnPlayerCatchup')) === null || _document$getElementB3 === void 0 || _document$getElementB3.addEventListener('click', function (e) {
  e.stopPropagation();
  togglePlayerToolsModal(false);
  if (!currentItem) {
    showToast('Önce bir yayın başlatın.');
    return;
  }
  var originalItem = currentItem.originalLiveItem || currentItem;
  document.getElementById('catchupModalChannelName').innerText = originalItem.name;
  var now = new Date();
  document.getElementById('inputCatchupDate').value = now.toISOString().substring(0, 10);
  var prevHour = new Date(now.getTime() - 3600000);
  document.getElementById('inputCatchupTime').value = prevHour.toTimeString().substring(0, 5);
  document.getElementById('catchupModal').classList.remove('hidden');
});
(_document$getElementB4 = document.getElementById('btnCloseCatchupModal')) === null || _document$getElementB4 === void 0 || _document$getElementB4.addEventListener('click', function () {
  document.getElementById('catchupModal').classList.add('hidden');
});

// --- Oynatıcı Hızlı Araçlar Menüsü Dinleyicileri ---
(_document$getElementB5 = document.getElementById('btnPlayerQuickTools')) === null || _document$getElementB5 === void 0 || _document$getElementB5.addEventListener('click', function (e) {
  e.stopPropagation();
  togglePlayerToolsModal();
});
(_document$getElementB6 = document.getElementById('btnClosePlayerToolsModal')) === null || _document$getElementB6 === void 0 || _document$getElementB6.addEventListener('click', function () {
  togglePlayerToolsModal(false);
});
(_document$getElementB7 = document.getElementById('btnToolAudioTracks')) === null || _document$getElementB7 === void 0 || _document$getElementB7.addEventListener('click', function () {
  togglePlayerToolsModal(false);
  showAudioModal();
});

// --- Kaldığın Yerden Devam Et (Resume Playback) Dinleyicileri ---
(_document$getElementB8 = document.getElementById('btnResumeYes')) === null || _document$getElementB8 === void 0 || _document$getElementB8.addEventListener('click', function () {
  var _document$getElementB9;
  if (pendingResumeTime > 0 && videoElem) {
    videoElem.currentTime = pendingResumeTime;
    showToast("\u25B6\uFE0F Kald\u0131\u011F\u0131n yerden devam ediliyor: ".concat(formatSeconds(pendingResumeTime)));
  }
  (_document$getElementB9 = document.getElementById('playerResumePrompt')) === null || _document$getElementB9 === void 0 || _document$getElementB9.classList.add('hidden');
});
(_document$getElementB0 = document.getElementById('btnResumeRestart')) === null || _document$getElementB0 === void 0 || _document$getElementB0.addEventListener('click', function () {
  var _document$getElementB1;
  if (videoElem) {
    videoElem.currentTime = 0;
    showToast('⏪ Baştan başlatıldı');
  }
  if (pendingResumeItem) clearResumeRecord(pendingResumeItem);
  (_document$getElementB1 = document.getElementById('playerResumePrompt')) === null || _document$getElementB1 === void 0 || _document$getElementB1.classList.add('hidden');
});
(_document$getElementB10 = document.getElementById('btnCloseResumePrompt')) === null || _document$getElementB10 === void 0 || _document$getElementB10.addEventListener('click', function () {
  var _document$getElementB11;
  (_document$getElementB11 = document.getElementById('playerResumePrompt')) === null || _document$getElementB11 === void 0 || _document$getElementB11.classList.add('hidden');
});

// --- Ebeveyn PIN Modalı Dinleyicileri ---
(_document$getElementB12 = document.getElementById('btnChangePin')) === null || _document$getElementB12 === void 0 || _document$getElementB12.addEventListener('click', function () {
  togglePlayerToolsModal(false);
  currentPinInput = '';
  isChangingPin = true;
  tempNewPin = '';
  updatePinDots();
  document.getElementById('pinModalTitle').innerText = 'Yeni PIN Belirle';
  document.getElementById('pinModalDesc').innerText = 'Lütfen yeni 4 haneli PIN kodunuzu tuşlayın:';
  document.getElementById('pinErrorMsg').classList.add('hidden');
  document.getElementById('pinModal').classList.remove('hidden');
});
document.querySelectorAll('.pin-key').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var val = btn.getAttribute('data-val');
    inputPinDigit(val);
  });
});
(_document$getElementB13 = document.getElementById('btnPinClear')) === null || _document$getElementB13 === void 0 || _document$getElementB13.addEventListener('click', function () {
  currentPinInput = '';
  updatePinDots();
});
(_document$getElementB14 = document.getElementById('btnPinBackspace')) === null || _document$getElementB14 === void 0 || _document$getElementB14.addEventListener('click', function () {
  if (currentPinInput.length > 0) {
    currentPinInput = currentPinInput.slice(0, -1);
    updatePinDots();
  }
});
(_document$getElementB15 = document.getElementById('btnClosePinModal')) === null || _document$getElementB15 === void 0 || _document$getElementB15.addEventListener('click', closePinModal);
document.getElementById('btnCatchupReturnLive').addEventListener('click', function () {
  document.getElementById('catchupModal').classList.add('hidden');
  jumpToLiveEdge();
});
document.querySelectorAll('.btn-catchup-quick').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (!currentItem) return;
    var mins = parseInt(btn.getAttribute('data-minutes'), 10);
    var targetTimestamp = Date.now() - mins * 60 * 1000;
    var label = btn.querySelector('span:last-child').innerText;
    document.getElementById('catchupModal').classList.add('hidden');
    startCatchupStream(currentItem, targetTimestamp, label);
  });
});
document.getElementById('btnStartCustomCatchup').addEventListener('click', function () {
  if (!currentItem) return;
  var dateVal = document.getElementById('inputCatchupDate').value;
  var timeVal = document.getElementById('inputCatchupTime').value;
  if (!dateVal || !timeVal) {
    showToast('Lütfen geçerli bir tarih ve saat seçin.');
    return;
  }
  var targetDate = new Date("".concat(dateVal, "T").concat(timeVal));
  if (isNaN(targetDate.getTime())) {
    showToast('Geçersiz tarih veya saat formatı.');
    return;
  }
  if (targetDate.getTime() > Date.now()) {
    showToast('Gelecekteki bir saat seçilemez.');
    return;
  }
  document.getElementById('catchupModal').classList.add('hidden');
  startCatchupStream(currentItem, targetDate.getTime(), "".concat(timeVal));
});

// Volume & Mute
var volInput = document.getElementById('inputPlayerVolume');
var volBtn = document.getElementById('btnPlayerMute');
var volIcon = document.getElementById('iconPlayerVolume');
volInput.addEventListener('input', function (e) {
  videoElem.volume = parseFloat(e.target.value);
  videoElem.muted = videoElem.volume === 0;
  volIcon.innerText = videoElem.muted ? 'volume_off' : videoElem.volume < 0.5 ? 'volume_down' : 'volume_up';
});
volBtn.addEventListener('click', function () {
  videoElem.muted = !videoElem.muted;
  volIcon.innerText = videoElem.muted ? 'volume_off' : 'volume_up';
});

// ================= POP-UP EKRAN (PICTURE-IN-PICTURE) =================
function triggerPictureInPicture() {
  if (window.AndroidBridge && typeof window.AndroidBridge.enterPip === 'function') {
    window.AndroidBridge.enterPip();
    showToast('🗔 Pop-up (PiP) ekran açıldı!');
    return;
  }
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture().catch(function () {});
  } else if (videoElem && document.pictureInPictureEnabled) {
    videoElem.requestPictureInPicture().then(function () {
      showToast('🗔 Pop-up ekran aktif!');
    }).catch(function (err) {
      showToast('Pop-up ekran tarayıcı tarafından engellendi.');
    });
  } else {
    showToast('Cihazınızda Pop-up (PiP) ekran desteklenmiyor.');
  }
}
(_document$getElementB16 = document.getElementById('btnPlayerPip')) === null || _document$getElementB16 === void 0 || _document$getElementB16.addEventListener('click', function () {
  togglePlayerToolsModal(false);
  triggerPictureInPicture();
});
window.onPipModeChange = function (isInPip) {
  document.body.classList.toggle('pip-active', isInPip);
};

// Fullscreen Management (True Fullscreen for Mobile, Android APK, Smart TV & Web)
var isPlayerFullscreen = false;
function setPlayerFullscreen(enable) {
  isPlayerFullscreen = enable;
  document.body.classList.toggle('is-fullscreen', isPlayerFullscreen);
  var btnFs = document.getElementById('btnPlayerFullscreen');
  if (btnFs) {
    var icon = btnFs.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = isPlayerFullscreen ? 'fullscreen_exit' : 'fullscreen';
    }
    btnFs.title = isPlayerFullscreen ? 'Tam Ekrandan Çık (Esc)' : 'Tam Ekran';
  }

  // Tell Android Native Bridge to hide/show system status bar & navigation bar (Immersive Sticky Mode)
  if (window.AndroidBridge && typeof window.AndroidBridge.toggleFullscreen === 'function') {
    try {
      window.AndroidBridge.toggleFullscreen(isPlayerFullscreen);
    } catch (e) {
      console.warn('AndroidBridge toggleFullscreen error:', e);
    }
  }

  // Trigger HTML5 Fullscreen API if supported by browser
  try {
    var wrap = document.getElementById('playerWrap');
    if (isPlayerFullscreen) {
      if (!document.fullscreenElement && wrap && wrap.requestFullscreen) {
        wrap.requestFullscreen().catch(function () {});
      }
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(function () {});
      }
    }
  } catch (e) {}
}
function togglePlayerFullscreen() {
  setPlayerFullscreen(!isPlayerFullscreen);
}
window.exitFullscreenMode = function () {
  if (isPlayerFullscreen) {
    setPlayerFullscreen(false);
  }
};
(_document$getElementB17 = document.getElementById('btnPlayerFullscreen')) === null || _document$getElementB17 === void 0 || _document$getElementB17.addEventListener('click', function (e) {
  e.stopPropagation();
  togglePlayerFullscreen();
});

// Double-click and double-tap on mainVideo to toggle fullscreen
var lastVideoTapTime = 0;
if (videoElem) {
  videoElem.addEventListener('dblclick', function (e) {
    e.preventDefault();
    togglePlayerFullscreen();
  });
  videoElem.addEventListener('touchend', function (e) {
    var now = new Date().getTime();
    var diff = now - lastVideoTapTime;
    if (diff < 320 && diff > 0) {
      e.preventDefault();
      togglePlayerFullscreen();
    }
    lastVideoTapTime = now;
  });
}

// Synchronize if standard browser fullscreen changes (e.g. user pressed Esc on desktop)
document.addEventListener('fullscreenchange', function () {
  if (!document.fullscreenElement && isPlayerFullscreen) {
    setPlayerFullscreen(false);
  }
});

// Handle Escape key to exit fullscreen
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && isPlayerFullscreen) {
    setPlayerFullscreen(false);
    e.preventDefault();
  }
});

// Prev / Next
document.getElementById('btnPrevStream').addEventListener('click', function () {
  if (!currentItem || channels.length === 0) return;
  var idx = channels.indexOf(currentItem);
  var prev = channels[(idx - 1 + channels.length) % channels.length];
  playItem(prev);
});
document.getElementById('btnNextStream').addEventListener('click', function () {
  if (!currentItem || channels.length === 0) return;
  var idx = channels.indexOf(currentItem);
  var next = channels[(idx + 1) % channels.length];
  playItem(next);
});
document.getElementById('btnPlayerBackToList').addEventListener('click', function () {
  if (currentItem && currentItem.type === 'vod') switchView('view-movies');else if (currentItem && currentItem.type === 'series') switchView('view-series');else switchView('view-live');
});
document.getElementById('btnPlayerToggleFav').addEventListener('click', function () {
  if (!currentItem) return;
  toggleFavorite(currentItem.url);
});
function updatePlayerFavIcon() {
  var icon = document.getElementById('iconPlayerFav');
  if (currentItem && favorites.has(currentItem.url)) {
    icon.classList.add('text-amber-400');
    icon.classList.remove('text-outline');
  } else {
    icon.classList.remove('text-amber-400');
    icon.classList.add('text-outline');
  }
}

// ================= 5. DOWNLOAD MANAGER =================
function downloadMediaItem(item) {
  if (!item || !item.url) {
    showToast('İndirilecek geçerli bağlantı bulunamadı.');
    return;
  }
  showToast("\u2B07 \u0130ndirme ba\u015Flat\u0131l\u0131yor: ".concat(item.name, "..."));
  saveDownloadedRecord(item);
  if (window.AndroidBridge && typeof window.AndroidBridge.downloadMedia === 'function') {
    window.AndroidBridge.downloadMedia(item.url, item.name);
    return;
  }
  try {
    var a = document.createElement('a');
    a.href = item.url;
    a.download = (item.name || 'video').replace(/[\\/:*?"<>|]/g, '_') + '.mp4';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("\u0130ndirme ba\u015Flat\u0131ld\u0131: ".concat(item.name));
  } catch (e) {
    window.open(item.url, '_blank');
  }
}
(_document$getElementB18 = document.getElementById('btnPlayerDownload')) === null || _document$getElementB18 === void 0 || _document$getElementB18.addEventListener('click', function () {
  togglePlayerToolsModal(false);
  if (!currentItem) {
    showToast('Önce bir film veya dizi başlatın.');
    return;
  }
  downloadMediaItem(currentItem);
});
function saveDownloadedRecord(item) {
  downloadedItems = downloadedItems.filter(function (d) {
    return d.url !== item.url;
  });
  downloadedItems.unshift({
    id: item.id || Date.now(),
    name: item.name,
    group: item.group || 'İndirilenler',
    url: item.url,
    type: item.type || 'vod',
    date: new Date().toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  });
  if (downloadedItems.length > 50) downloadedItems.pop();
  localStorage.setItem('sf_downloads', JSON.stringify(downloadedItems));
  renderDownloadsModalList();
}

// --- Downloads Modal ---
var downloadsModal = document.getElementById('downloadsModal');
var downloadsModalList = document.getElementById('downloadsModalList');
function openDownloadsModal() {
  renderDownloadsModalList();
  downloadsModal.classList.remove('hidden');
}
function renderDownloadsModalList() {
  downloadsModalList.innerHTML = '';
  if (downloadedItems.length === 0) {
    downloadsModalList.innerHTML = "\n          <div class=\"py-10 text-center text-on-surface-variant flex flex-col items-center gap-2\">\n            <span class=\"material-symbols-outlined text-4xl text-outline\">download</span>\n            <p class=\"text-xs font-semibold\">Hen\xFCz indirilmi\u015F film veya dizi bulunmuyor.</p>\n            <p class=\"text-[10px] text-outline\">Sinema veya Dizi kartlar\u0131ndaki \u2B07 butonuna basarak indirebilirsiniz.</p>\n          </div>\n        ";
    return;
  }
  downloadedItems.forEach(function (item) {
    var row = document.createElement('div');
    row.className = "p-3 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/60 flex items-center justify-between gap-3 transition-colors group";
    row.innerHTML = "\n          <div class=\"flex items-center gap-3 min-w-0\">\n            <div class=\"w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-sm font-bold text-primary flex-shrink-0\">\n              ".concat(item.type === 'vod' ? '🎬' : '🍿', "\n            </div>\n            <div class=\"min-w-0\">\n              <h5 class=\"text-xs font-bold text-on-surface truncate group-hover:text-primary-light\">").concat(item.name, "</h5>\n              <div class=\"flex items-center gap-2 text-[10px] text-on-surface-variant\">\n                <span>").concat(item.group || 'Video', "</span>\n                <span>\u2022</span>\n                <span>").concat(item.date, "</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"flex items-center gap-1.5 flex-shrink-0\">\n            <button class=\"dl-play-btn px-3 py-1.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold flex items-center gap-1 transition-all\">\n              <span class=\"material-symbols-outlined text-sm\">play_arrow</span>\n              <span>\u0130zle</span>\n            </button>\n            <button class=\"dl-del-btn w-8 h-8 rounded-full bg-surface-container-high hover:bg-error/20 hover:text-error text-outline flex items-center justify-center transition-colors\" title=\"Listeden Sil\">\n              <span class=\"material-symbols-outlined text-base\">delete</span>\n            </button>\n          </div>\n        ");
    row.querySelector('.dl-play-btn').addEventListener('click', function () {
      downloadsModal.classList.add('hidden');
      playItem(item);
    });
    row.querySelector('.dl-del-btn').addEventListener('click', function () {
      downloadedItems = downloadedItems.filter(function (d) {
        return d.url !== item.url;
      });
      localStorage.setItem('sf_downloads', JSON.stringify(downloadedItems));
      renderDownloadsModalList();
      showToast('İndirilen içerik listeden kaldırıldı.');
    });
    downloadsModalList.appendChild(row);
  });
}
document.getElementById('btnHeaderDownloads').addEventListener('click', openDownloadsModal);
document.getElementById('btnCloseDownloadsModal').addEventListener('click', function () {
  downloadsModal.classList.add('hidden');
});
document.getElementById('inputLocalDownloadedFile').addEventListener('change', function (e) {
  var file = e.target.files[0];
  if (!file) return;
  var fileUrl = URL.createObjectURL(file);
  downloadsModal.classList.add('hidden');
  playItem({
    name: file.name.replace(/\.[^/.]+$/, ""),
    group: "Yerel İndirilen Dosya",
    url: fileUrl,
    type: "vod"
  });
});

// ================= IN-PLAYER SIDEBAR (SIDE MENU) =================
var playerSidePanel = document.getElementById('playerSidePanel');
var btnPlayerToggleSidebar = document.getElementById('btnPlayerToggleSidebar');
var btnClosePlayerSidebar = document.getElementById('btnClosePlayerSidebar');
function togglePlayerSidebar() {
  var open = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var isOpen = !playerSidePanel.classList.contains('-translate-x-full');
  var targetState = open !== null ? open : !isOpen;
  if (targetState) {
    playerSidePanel.classList.remove('-translate-x-full');
    renderQuickPlayerItems();
  } else {
    playerSidePanel.classList.add('-translate-x-full');
  }
}
btnPlayerToggleSidebar.addEventListener('click', function () {
  return togglePlayerSidebar();
});
btnClosePlayerSidebar.addEventListener('click', function () {
  return togglePlayerSidebar(false);
});
document.getElementById('btnQuickTabLive').addEventListener('click', function () {
  activeQuickTab = 'live';
  updateQuickTabStyles();
  renderQuickPlayerItems();
});
document.getElementById('btnQuickTabMovies').addEventListener('click', function () {
  activeQuickTab = 'vod';
  updateQuickTabStyles();
  renderQuickPlayerItems();
});
document.getElementById('btnQuickTabSeries').addEventListener('click', function () {
  activeQuickTab = 'series';
  updateQuickTabStyles();
  renderQuickPlayerItems();
});
function updateQuickTabStyles() {
  var btns = {
    'live': document.getElementById('btnQuickTabLive'),
    'vod': document.getElementById('btnQuickTabMovies'),
    'series': document.getElementById('btnQuickTabSeries')
  };
  Object.keys(btns).forEach(function (key) {
    if (key === activeQuickTab) {
      btns[key].className = "tv-focusable flex-1 py-1 rounded-lg bg-primary text-on-primary text-[11px] font-bold";
    } else {
      btns[key].className = "tv-focusable flex-1 py-1 rounded-lg text-on-surface-variant text-[11px] font-semibold";
    }
  });
}
function renderQuickPlayerItems() {
  var container = document.getElementById('quickItemsContainer');
  var query = (document.getElementById('inputQuickSearch').value || '').toLowerCase().trim();
  var list = activeQuickTab === 'live' ? liveChannels : activeQuickTab === 'vod' ? vodChannels : seriesChannels;
  if (query) {
    list = list.filter(function (c) {
      return c.name.toLowerCase().includes(query) || c.group && c.group.toLowerCase().includes(query);
    });
  }
  container.innerHTML = '';
  list.slice(0, 80).forEach(function (item) {
    var row = document.createElement('div');
    var isActive = currentItem && currentItem.url === item.url;
    row.className = "tv-focusable p-2 rounded-lg flex items-center justify-between gap-2 cursor-pointer transition-all ".concat(isActive ? 'bg-primary/20 text-primary border border-primary/40 font-bold' : 'hover:bg-surface-container text-on-surface text-xs');
    row.innerHTML = "\n          <div class=\"flex items-center gap-2 min-w-0\">\n            <span class=\"text-sm\">".concat(item.type === 'vod' ? '🎬' : item.type === 'series' ? '🍿' : '📺', "</span>\n            <span class=\"truncate\">").concat(item.name, "</span>\n          </div>\n          <span class=\"text-[10px] text-on-surface-variant flex-shrink-0\">").concat(item.group || '', "</span>\n        ");
    row.addEventListener('click', function () {
      togglePlayerSidebar(false);
      if (item.type === 'series') openSeriesModal(item);else playItem(item);
    });
    container.appendChild(row);
  });
}
var quickSearchDebounceTimer;
document.getElementById('inputQuickSearch').addEventListener('input', function () {
  clearTimeout(quickSearchDebounceTimer);
  quickSearchDebounceTimer = setTimeout(renderQuickPlayerItems, 120);
});

// ================= 6. ASYNC CHUNKED M3U & XTREAM CODES ENGINE =================
function parseM3uTextAsync(_x2, _x3) {
  return _parseM3uTextAsync.apply(this, arguments);
}
function _parseM3uTextAsync() {
  _parseM3uTextAsync = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(text, onProgress) {
    var lines, result, current, total, CHUNK_SIZE, i, line, commaIdx, groupMatch, logoMatch, lowerName, lowerGrp;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          lines = text.split(/\r?\n/);
          result = [];
          current = null;
          total = lines.length;
          CHUNK_SIZE = 4000;
          i = 0;
        case 1:
          if (!(i < total)) {
            _context9.n = 3;
            break;
          }
          line = lines[i].trim();
          if (line.startsWith('#EXTINF:')) {
            current = {
              name: "İçerik " + (result.length + 1),
              group: "Genel",
              url: "",
              type: "live"
            };
            commaIdx = line.lastIndexOf(',');
            if (commaIdx >= 0) {
              current.name = line.substring(commaIdx + 1).trim();
            }
            groupMatch = line.match(/group-title="([^"]+)"/i);
            if (groupMatch) current.group = groupMatch[1].trim();
            logoMatch = line.match(/tvg-logo="([^"]+)"/i);
            if (logoMatch) current.logo = logoMatch[1].trim();
            lowerName = current.name.toLowerCase();
            lowerGrp = current.group.toLowerCase();
            if (lowerGrp.includes('sinema') || lowerGrp.includes('movie') || lowerGrp.includes('film') || lowerGrp.includes('vod') || lowerGrp.includes('4k film') || lowerGrp.includes('netflix film') || lowerGrp.includes('aksiyon') || lowerGrp.includes('komedi') || lowerGrp.includes('korku') || lowerGrp.includes('animasyon')) {
              current.type = 'vod';
            } else if (lowerGrp.includes('dizi') || lowerGrp.includes('series') || lowerGrp.includes('sezon') || lowerGrp.includes('season') || lowerName.includes('s01') || lowerName.includes('s02') || lowerName.includes('s03') || lowerName.includes('e01') || lowerName.includes('e02')) {
              current.type = 'series';
            } else {
              current.type = 'live';
            }
          } else if (line && !line.startsWith('#') && current) {
            current.url = line;
            result.push(current);
            current = null;
          }
          if (!(i % CHUNK_SIZE === 0)) {
            _context9.n = 2;
            break;
          }
          if (onProgress) onProgress(Math.round(i / total * 100), result.length);
          _context9.n = 2;
          return new Promise(function (r) {
            return setTimeout(r, 0);
          });
        case 2:
          i++;
          _context9.n = 1;
          break;
        case 3:
          return _context9.a(2, result);
      }
    }, _callee9);
  }));
  return _parseM3uTextAsync.apply(this, arguments);
}
function showImportProgress(percent, text) {
  var pnl = document.getElementById('pnlImportProgress');
  pnl.classList.remove('hidden');
  document.getElementById('lblImportPercent').innerText = "%".concat(percent);
  document.getElementById('barImportProgress').style.width = "".concat(percent, "%");
  document.getElementById('lblImportDetails').innerText = text;
}
function hideImportProgress() {
  document.getElementById('pnlImportProgress').classList.add('hidden');
}

// Reset to demo
document.getElementById('btnResetToDemo').addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
  var db, tx, _t;
  return _regenerator().w(function (_context) {
    while (1) switch (_context.p = _context.n) {
      case 0:
        _context.p = 0;
        _context.n = 1;
        return openDb();
      case 1:
        db = _context.v;
        tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).delete('active_playlist');
        _context.n = 3;
        break;
      case 2:
        _context.p = 2;
        _t = _context.v;
      case 3:
        setMasterChannels(SAMPLE_DATA, false);
        showToast('Örnek listeye dönüldü.');
        switchView('view-live');
      case 4:
        return _context.a(2);
    }
  }, _callee, null, [[0, 2]]);
})));
document.getElementById('btnStartSampleStream').addEventListener('click', function () {
  playItem(channels[0] || SAMPLE_DATA[0]);
});

// M3U URL submit
document.getElementById('btnLoadUrlSubmit').addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
  var url, res, text, parsed, _t2;
  return _regenerator().w(function (_context2) {
    while (1) switch (_context2.p = _context2.n) {
      case 0:
        url = document.getElementById('inputM3uUrl').value.trim();
        if (url) {
          _context2.n = 1;
          break;
        }
        showToast('Lütfen geçerli bir URL girin.');
        return _context2.a(2);
      case 1:
        showToast('Bağlantı indiriliyor...');
        showImportProgress(10, 'Sunucudan M3U dosyası indiriliyor...');
        _context2.p = 2;
        _context2.n = 3;
        return fetch(url);
      case 3:
        res = _context2.v;
        _context2.n = 4;
        return res.text();
      case 4:
        text = _context2.v;
        showImportProgress(40, 'M3U içeriği donma önleyici ile ayrıştırılıyor...');
        _context2.n = 5;
        return parseM3uTextAsync(text, function (pct, count) {
          showImportProgress(40 + Math.round(pct * 0.5), "".concat(count.toLocaleString('tr-TR'), " i\xE7erik ayr\u0131\u015Ft\u0131r\u0131ld\u0131 (%").concat(pct, ")..."));
        });
      case 5:
        parsed = _context2.v;
        if (!(parsed.length > 0)) {
          _context2.n = 7;
          break;
        }
        showImportProgress(95, 'Kategoriler ve listeler hazırlanıyor...');
        _context2.n = 6;
        return new Promise(function (r) {
          return setTimeout(r, 20);
        });
      case 6:
        setMasterChannels(parsed, true);
        hideImportProgress();
        showToast("".concat(parsed.length.toLocaleString('tr-TR'), " i\xE7erik donmadan y\xFCklendi!"));
        switchView('view-live');
        _context2.n = 8;
        break;
      case 7:
        hideImportProgress();
        showToast('Geçerli bir içerik bulunamadı.');
      case 8:
        _context2.n = 10;
        break;
      case 9:
        _context2.p = 9;
        _t2 = _context2.v;
        hideImportProgress();
        showToast('Hata: CORS veya bağlantı hatası. Dosya yüklemeyi deneyin.');
      case 10:
        return _context2.a(2);
    }
  }, _callee2, null, [[2, 9]]);
})));

// M3U File upload
document.getElementById('inputFileUpload').addEventListener('change', function (e) {
  var file = e.target.files[0];
  if (!file) return;
  showToast('Dosya okunuyor...');
  showImportProgress(15, "".concat(file.name, " okunuyor..."));
  var reader = new FileReader();
  reader.onload = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(evt) {
      var text, parsed;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            text = evt.target.result;
            showImportProgress(35, 'Büyük dosya parçalanarak taranıyor...');
            _context3.n = 1;
            return parseM3uTextAsync(text, function (pct, count) {
              showImportProgress(35 + Math.round(pct * 0.6), "".concat(count.toLocaleString('tr-TR'), " i\xE7erik ayr\u0131\u015Ft\u0131r\u0131ld\u0131 (%").concat(pct, ")..."));
            });
          case 1:
            parsed = _context3.v;
            if (!(parsed.length > 0)) {
              _context3.n = 3;
              break;
            }
            showImportProgress(95, 'Kategoriler hazırlanıyor...');
            _context3.n = 2;
            return new Promise(function (r) {
              return setTimeout(r, 20);
            });
          case 2:
            setMasterChannels(parsed, true);
            hideImportProgress();
            showToast("".concat(parsed.length.toLocaleString('tr-TR'), " i\xE7erik donmadan y\xFCklendi!"));
            switchView('view-live');
            _context3.n = 4;
            break;
          case 3:
            hideImportProgress();
            showToast('Dosyada içerik bulunamadı.');
          case 4:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x4) {
      return _ref9.apply(this, arguments);
    };
  }();
  reader.readAsText(file);
});

// ================= MODAL & SHARED XTREAM CODES ENGINE =================
function openXtreamLoginModal() {
  var modal = document.getElementById('xtreamLoginModal');
  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(function () {
      var first = document.getElementById('inputModalXtreamServer') || modal.querySelector('.tv-focusable');
      if (first) setFocus(first);
    }, 200);
  }
}
function closeXtreamLoginModal() {
  var modal = document.getElementById('xtreamLoginModal');
  if (modal) modal.classList.add('hidden');
}
(_document$getElementB19 = document.getElementById('btnCloseXtreamLoginModal')) === null || _document$getElementB19 === void 0 || _document$getElementB19.addEventListener('click', closeXtreamLoginModal);
(_document$getElementB20 = document.getElementById('btnOpenXtreamDialog')) === null || _document$getElementB20 === void 0 || _document$getElementB20.addEventListener('click', openXtreamLoginModal);
(_document$getElementB21 = document.getElementById('btnModalXtreamSkip')) === null || _document$getElementB21 === void 0 || _document$getElementB21.addEventListener('click', function () {
  closeXtreamLoginModal();
  showToast('Örnek yayınlar açıldı. İstediğiniz zaman Ayarlar bölümünden Xtream hesabınıza bağlanabilirsiniz.');
  switchView('view-live');
});
function executeXtreamDownload(_x5, _x6, _x7) {
  return _executeXtreamDownload.apply(this, arguments);
}
function _executeXtreamDownload() {
  _executeXtreamDownload = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(server, user, pass) {
    var isFromModal,
      allFetched,
      liveCatRes,
      liveCats,
      liveCatMap,
      liveStreamsRes,
      liveData,
      vodCatRes,
      vodCats,
      vodCatMap,
      vodStreamsRes,
      vodData,
      seriesCatRes,
      seriesCats,
      seriesCatMap,
      seriesRes,
      seriesData,
      _args0 = arguments,
      _t6,
      _t7,
      _t8,
      _t9;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          isFromModal = _args0.length > 3 && _args0[3] !== undefined ? _args0[3] : false;
          if (!(!server || !user || !pass)) {
            _context0.n = 1;
            break;
          }
          showToast('Lütfen tüm Xtream bilgilerini doldurun (Sunucu, Kullanıcı Adı, Şifre).');
          return _context0.a(2);
        case 1:
          if (server.endsWith('/')) server = server.slice(0, -1);

          // 1. Bilgileri kalıcı olarak localStorage'a kaydet (Bir daha asla sormasın)
          window._xtreamCreds = {
            server: server,
            user: user,
            pass: pass
          };
          localStorage.setItem('sf_xtream_creds', JSON.stringify({
            server: server,
            user: user,
            pass: pass
          }));

          // Form kutularını senkronize et
          ['inputXtreamServer', 'inputModalXtreamServer'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.value = server;
          });
          ['inputXtreamUser', 'inputModalXtreamUser'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.value = user;
          });
          ['inputXtreamPass', 'inputModalXtreamPass'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.value = pass;
          });
          if (isFromModal) closeXtreamLoginModal();
          showToast('Xtream sunucusuna bağlanılıyor...');
          showImportProgress(10, 'Xtream kategorileri alınıyor...');
          _context0.p = 2;
          allFetched = []; // 1. Live
          _context0.p = 3;
          showImportProgress(25, 'Canlı yayınlar indiriliyor...');
          _context0.n = 4;
          return fetch("".concat(server, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass), "&action=get_live_categories"));
        case 4:
          liveCatRes = _context0.v;
          _context0.n = 5;
          return liveCatRes.json();
        case 5:
          liveCats = _context0.v;
          liveCatMap = new Map();
          if (Array.isArray(liveCats)) {
            liveCats.forEach(function (c) {
              return liveCatMap.set(String(c.category_id), c.category_name);
            });
          }
          _context0.n = 6;
          return fetch("".concat(server, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass), "&action=get_live_streams"));
        case 6:
          liveStreamsRes = _context0.v;
          _context0.n = 7;
          return liveStreamsRes.json();
        case 7:
          liveData = _context0.v;
          if (Array.isArray(liveData)) {
            liveData.forEach(function (item) {
              allFetched.push({
                name: item.name || 'Kanal',
                group: liveCatMap.get(String(item.category_id)) || 'Genel Kanallar',
                url: "".concat(server, "/live/").concat(user, "/").concat(pass, "/").concat(item.stream_id, ".ts"),
                logo: item.stream_icon || '',
                type: 'live',
                stream_id: item.stream_id
              });
            });
          }
          _context0.n = 9;
          break;
        case 8:
          _context0.p = 8;
          _t6 = _context0.v;
          console.log('Live fetch warning:', _t6);
        case 9:
          _context0.p = 9;
          showImportProgress(55, 'Filmler indiriliyor...');
          _context0.n = 10;
          return fetch("".concat(server, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass), "&action=get_vod_categories"));
        case 10:
          vodCatRes = _context0.v;
          _context0.n = 11;
          return vodCatRes.json();
        case 11:
          vodCats = _context0.v;
          vodCatMap = new Map();
          if (Array.isArray(vodCats)) {
            vodCats.forEach(function (c) {
              return vodCatMap.set(String(c.category_id), c.category_name);
            });
          }
          _context0.n = 12;
          return fetch("".concat(server, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass), "&action=get_vod_streams"));
        case 12:
          vodStreamsRes = _context0.v;
          _context0.n = 13;
          return vodStreamsRes.json();
        case 13:
          vodData = _context0.v;
          if (Array.isArray(vodData)) {
            vodData.forEach(function (item) {
              var ext = item.container_extension || 'mp4';
              allFetched.push({
                name: item.name || 'Film',
                group: vodCatMap.get(String(item.category_id)) || 'Sinema',
                url: "".concat(server, "/movie/").concat(user, "/").concat(pass, "/").concat(item.stream_id, ".").concat(ext),
                logo: item.stream_icon || '',
                rating: item.rating ? String(item.rating) : '8.0',
                year: item.year || '2024',
                type: 'vod'
              });
            });
          }
          _context0.n = 15;
          break;
        case 14:
          _context0.p = 14;
          _t7 = _context0.v;
          console.log('VOD fetch warning:', _t7);
        case 15:
          _context0.p = 15;
          showImportProgress(80, 'Diziler indiriliyor...');
          _context0.n = 16;
          return fetch("".concat(server, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass), "&action=get_series_categories"));
        case 16:
          seriesCatRes = _context0.v;
          _context0.n = 17;
          return seriesCatRes.json();
        case 17:
          seriesCats = _context0.v;
          seriesCatMap = new Map();
          if (Array.isArray(seriesCats)) {
            seriesCats.forEach(function (c) {
              return seriesCatMap.set(String(c.category_id), c.category_name);
            });
          }
          _context0.n = 18;
          return fetch("".concat(server, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass), "&action=get_series"));
        case 18:
          seriesRes = _context0.v;
          _context0.n = 19;
          return seriesRes.json();
        case 19:
          seriesData = _context0.v;
          if (Array.isArray(seriesData)) {
            seriesData.forEach(function (item) {
              allFetched.push({
                name: item.name || 'Dizi',
                group: seriesCatMap.get(String(item.category_id)) || 'Diziler',
                logo: item.cover || '',
                rating: item.rating ? String(item.rating) : '8.5',
                year: item.releaseDate ? item.releaseDate.substring(0, 4) : '2024',
                type: 'series',
                series_id: item.series_id,
                url: "".concat(server, "/series/").concat(user, "/").concat(pass, "/").concat(item.series_id, ".m3u8")
              });
            });
          }
          _context0.n = 21;
          break;
        case 20:
          _context0.p = 20;
          _t8 = _context0.v;
          console.log('Series fetch warning:', _t8);
        case 21:
          if (!(allFetched.length > 0)) {
            _context0.n = 23;
            break;
          }
          showImportProgress(95, 'Kategoriler donmadan düzenleniyor...');
          _context0.n = 22;
          return new Promise(function (r) {
            return setTimeout(r, 20);
          });
        case 22:
          // IndexedDB'ye kaydet -> boylece bir daha asla internetten cekmeyecek!
          setMasterChannels(allFetched, true);
          hideImportProgress();
          showToast("\u2705 Xtream: ".concat(allFetched.length.toLocaleString('tr-TR'), " i\xE7erik TV haf\u0131zas\u0131na kaydedildi!"));
          switchView('view-live');
          _context0.n = 24;
          break;
        case 23:
          hideImportProgress();
          showToast('Xtream: Yayın bulunamadı veya kullanıcı bilgileri geçersiz.');
          if (isFromModal) openXtreamLoginModal();
        case 24:
          _context0.n = 26;
          break;
        case 25:
          _context0.p = 25;
          _t9 = _context0.v;
          hideImportProgress();
          showToast('Xtream bağlantı hatası: Sunucu adresi veya internet bağlantısını kontrol edin.');
          if (isFromModal) openXtreamLoginModal();
        case 26:
          return _context0.a(2);
      }
    }, _callee0, null, [[15, 20], [9, 14], [3, 8], [2, 25]]);
  }));
  return _executeXtreamDownload.apply(this, arguments);
}
document.getElementById('btnXtreamSubmit').addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
  var server, user, pass;
  return _regenerator().w(function (_context4) {
    while (1) switch (_context4.n) {
      case 0:
        server = document.getElementById('inputXtreamServer').value.trim();
        user = document.getElementById('inputXtreamUser').value.trim();
        pass = document.getElementById('inputXtreamPass').value.trim();
        _context4.n = 1;
        return executeXtreamDownload(server, user, pass, false);
      case 1:
        return _context4.a(2);
    }
  }, _callee4);
})));
(_document$getElementB22 = document.getElementById('btnModalXtreamSubmit')) === null || _document$getElementB22 === void 0 || _document$getElementB22.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
  var _document$getElementB23, _document$getElementB24, _document$getElementB25;
  var server, user, pass;
  return _regenerator().w(function (_context5) {
    while (1) switch (_context5.n) {
      case 0:
        server = (((_document$getElementB23 = document.getElementById('inputModalXtreamServer')) === null || _document$getElementB23 === void 0 ? void 0 : _document$getElementB23.value) || '').trim();
        user = (((_document$getElementB24 = document.getElementById('inputModalXtreamUser')) === null || _document$getElementB24 === void 0 ? void 0 : _document$getElementB24.value) || '').trim();
        pass = (((_document$getElementB25 = document.getElementById('inputModalXtreamPass')) === null || _document$getElementB25 === void 0 ? void 0 : _document$getElementB25.value) || '').trim();
        _context5.n = 1;
        return executeXtreamDownload(server, user, pass, true);
      case 1:
        return _context5.a(2);
    }
  }, _callee5);
})));

// ================= 7. SMART TV REMOTE (D-PAD) NAVIGATION ENGINE =================
var focusedElement = null;
function getFocusableElements() {
  var elements = Array.from(document.querySelectorAll('.tv-focusable, button, input, a, [tabindex="0"]'));
  return elements.filter(function (el) {
    var rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && window.getComputedStyle(el).display !== 'none' && window.getComputedStyle(el).visibility !== 'hidden';
  });
}
function setFocus(el) {
  if (focusedElement) focusedElement.classList.remove('tv-focused');
  focusedElement = el;
  if (focusedElement) {
    focusedElement.classList.add('tv-focused');
    focusedElement.focus();
    focusedElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    });
  }
}
function navigateDirection(direction) {
  var focusables = getFocusableElements();
  if (focusables.length === 0) return;
  if (!focusedElement || !focusables.includes(focusedElement)) {
    setFocus(focusables[0]);
    return;
  }
  var curRect = focusedElement.getBoundingClientRect();
  var curCenter = {
    x: curRect.left + curRect.width / 2,
    y: curRect.top + curRect.height / 2
  };
  var bestEl = null;
  var minDistance = Infinity;
  focusables.forEach(function (el) {
    if (el === focusedElement) return;
    var rect = el.getBoundingClientRect();
    var center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    var dx = center.x - curCenter.x;
    var dy = center.y - curCenter.y;
    var isValid = false;
    if (direction === 'up' && dy < -10) isValid = true;
    if (direction === 'down' && dy > 10) isValid = true;
    if (direction === 'left' && dx < -10) isValid = true;
    if (direction === 'right' && dx > 10) isValid = true;
    if (isValid) {
      var primaryDist = direction === 'up' || direction === 'down' ? Math.abs(dy) : Math.abs(dx);
      var secondaryDist = direction === 'up' || direction === 'down' ? Math.abs(dx) : Math.abs(dy);
      var totalWeight = primaryDist + secondaryDist * 1.8;
      if (totalWeight < minDistance) {
        minDistance = totalWeight;
        bestEl = el;
      }
    }
  });
  if (bestEl) setFocus(bestEl);
}
window.addEventListener('keydown', function (e) {
  var _document$getElementB27;
  var activeTag = document.activeElement ? document.activeElement.tagName : '';
  var isInputActive = activeTag === 'INPUT' || activeTag === 'TEXTAREA';

  // 1. Smart TV Remote Color Keys (via e.key)
  if (e.key === 'ColorF0Red' || e.key === 'Red') {
    toggleMatchMode();
    e.preventDefault();
    return;
  }
  if (e.key === 'ColorF1Green' || e.key === 'Green') {
    var _document$getElementB26;
    var catchModal = document.getElementById('catchupModal');
    if (catchModal && catchModal.classList.contains('hidden')) (_document$getElementB26 = document.getElementById('btnPlayerCatchup')) === null || _document$getElementB26 === void 0 || _document$getElementB26.click();else if (catchModal) catchModal.classList.add('hidden');
    e.preventDefault();
    return;
  }
  if (e.key === 'ColorF2Yellow' || e.key === 'Yellow') {
    if (currentItem) toggleFavorite(currentItem.url);
    e.preventDefault();
    return;
  }
  if (e.key === 'ColorF3Blue' || e.key === 'Blue') {
    togglePlayerToolsModal();
    e.preventDefault();
    return;
  }

  // 2. 0-9 Number keys for Smart TV NumPad channel tuning (sadece input aktif degilken)
  if (!isInputActive && !e.ctrlKey && !e.altKey && !e.metaKey) {
    if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) {
      var digit = e.keyCode >= 96 ? String(e.keyCode - 96) : String(e.keyCode - 48);
      handleNumPadKey(digit);
      return;
    }
  }

  // 3. Arama veya Metin kutusu aktifken TV sanal klavye uyumlulugu
  if (isInputActive) {
    if (e.keyCode === 13) {
      // Enter: TV klavyesinde Bitti / Tamam
      document.activeElement.blur();
      navigateDirection('down');
      e.preventDefault();
      return;
    }
    if (e.keyCode === 27 || e.keyCode === 10009 || e.keyCode === 461) {
      // Geri / Escape
      document.activeElement.blur();
      e.preventDefault();
      return;
    }
    if (e.keyCode === 38) {
      // Yukari: Arama kutusundan ust sekmeye gec
      document.activeElement.blur();
      navigateDirection('up');
      e.preventDefault();
      return;
    }
    if (e.keyCode === 40) {
      // Asagi: Arama kutusundan sonuclara gec
      document.activeElement.blur();
      navigateDirection('down');
      e.preventDefault();
      return;
    }
    // Sol ve Sag ok tuslari metin icinde imlec hareketine izin versin
    return;
  }
  switch (e.keyCode) {
    case 38:
      // Up
      navigateDirection('up');
      e.preventDefault();
      break;
    case 40:
      // Down
      navigateDirection('down');
      e.preventDefault();
      break;
    case 37:
      // Left
      var isPlayerOpen = !document.getElementById('view-player').classList.contains('hidden');
      if (isPlayerOpen && playerSidePanel.classList.contains('-translate-x-full')) {
        togglePlayerSidebar(true);
        e.preventDefault();
      } else {
        navigateDirection('left');
        e.preventDefault();
      }
      break;
    case 39:
      // Right
      if (!playerSidePanel.classList.contains('-translate-x-full')) {
        togglePlayerSidebar(false);
        e.preventDefault();
      } else {
        navigateDirection('right');
        e.preventDefault();
      }
      break;
    case 13:
      // Enter / OK
      if (numPadInput.length > 0) {
        executeNumPadTuning();
        e.preventDefault();
        break;
      }
      if (focusedElement) {
        focusedElement.click();
        e.preventDefault();
      }
      break;
    case 27: // Escape / Back
    case 10009: // Tizen Return
    case 461:
      // webOS Back
      var toolsModal = document.getElementById('playerToolsModal');
      if (toolsModal && !toolsModal.classList.contains('hidden')) {
        toolsModal.classList.add('hidden');
        e.preventDefault();
        return;
      }
      var pModal = document.getElementById('pinModal');
      if (pModal && !pModal.classList.contains('hidden')) {
        closePinModal();
        e.preventDefault();
        return;
      }
      var _catchModal = document.getElementById('catchupModal');
      var audModal = document.getElementById('audioModal');
      if (_catchModal && !_catchModal.classList.contains('hidden')) {
        _catchModal.classList.add('hidden');
        e.preventDefault();
        return;
      }
      if (audModal && !audModal.classList.contains('hidden')) {
        audModal.classList.add('hidden');
        e.preventDefault();
        return;
      }
      var catModal = document.getElementById('categoryModal');
      var serModal = document.getElementById('seriesModal');
      var dlModal = document.getElementById('downloadsModal');
      if (!catModal.classList.contains('hidden')) {
        catModal.classList.add('hidden');
        e.preventDefault();
        return;
      }
      if (!serModal.classList.contains('hidden')) {
        serModal.classList.add('hidden');
        e.preventDefault();
        return;
      }
      if (!dlModal.classList.contains('hidden')) {
        dlModal.classList.add('hidden');
        e.preventDefault();
        return;
      }
      if (!playerSidePanel.classList.contains('-translate-x-full')) {
        togglePlayerSidebar(false);
        e.preventDefault();
        return;
      }
      var resumePrompt = document.getElementById('playerResumePrompt');
      if (resumePrompt && !resumePrompt.classList.contains('hidden')) {
        resumePrompt.classList.add('hidden');
        e.preventDefault();
        return;
      }
      var activePanel = document.querySelector('.view-panel:not(.hidden)');
      if (activePanel && activePanel.id !== 'view-live') {
        switchView('view-live');
        e.preventDefault();
      }
      break;
    case 403:
      // Red Key (Smart TV)
      toggleMatchMode();
      e.preventDefault();
      break;
    case 404:
      // Green Key (Smart TV)
      (_document$getElementB27 = document.getElementById('btnPlayerCatchup')) === null || _document$getElementB27 === void 0 || _document$getElementB27.click();
      e.preventDefault();
      break;
    case 405:
      // Yellow Key (Smart TV)
      if (currentItem) toggleFavorite(currentItem.url);
      e.preventDefault();
      break;
    case 406:
      // Blue Key (Smart TV)
      togglePlayerToolsModal();
      e.preventDefault();
      break;
    case 427:
      // Channel Up
      document.getElementById('btnNextStream').click();
      e.preventDefault();
      break;
    case 428:
      // Channel Down
      document.getElementById('btnPrevStream').click();
      e.preventDefault();
      break;
    case 179: // Media Play/Pause
    case 19:
      // Pause
      togglePlayPause();
      e.preventDefault();
      break;
    case 412: // Media Rewind
    case 227:
      seekRelative(-10);
      e.preventDefault();
      break;
    case 417: // Media Fast Forward
    case 228:
      seekRelative(10);
      e.preventDefault();
      break;
    case 32:
      // Space key play/pause
      var curActive = document.querySelector('.view-panel:not(.hidden)');
      if (curActive && curActive.id === 'view-player') {
        togglePlayPause();
        e.preventDefault();
      }
      break;
  }
});
document.getElementById('btnToggleTvMode').addEventListener('click', function () {
  isTvMode = !isTvMode;
  document.body.classList.toggle('tv-mode-active', isTvMode);
  document.getElementById('txtTvModeLabel').innerText = isTvMode ? "TV Modu (Açık)" : "TV Modu";
  showToast(isTvMode ? "📺 Smart TV Kumanda Modu Aktif!" : "📱 Standart Mobil Mod Aktif");
  if (isTvMode) {
    var first = getFocusableElements()[0];
    if (first) setFocus(first);
  }
});
var ua = navigator.userAgent.toLowerCase();
if (ua.includes('smarttv') || ua.includes('tizen') || ua.includes('webos') || ua.includes('android tv') || ua.includes('crkey') || ua.includes('aftt')) {
  isTvMode = true;
  document.getElementById('btnToggleTvMode').click();
}

// --- High Performance Startup ---
(function () {
  var _initApp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var hasSavedCreds, savedCredsRaw, creds, fields, hasCachedPlaylist, cached, _t3;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          updateMatchModeUI();

          // 1. Kayitli Xtream giris bilgilerini localStorage'dan yukle ve form alanlarina doldur
          hasSavedCreds = false;
          try {
            savedCredsRaw = localStorage.getItem('sf_xtream_creds');
            if (savedCredsRaw) {
              creds = JSON.parse(savedCredsRaw);
              if (creds && creds.server && creds.user) {
                window._xtreamCreds = creds;
                hasSavedCreds = true;
                fields = [['inputXtreamServer', creds.server || ''], ['inputXtreamUser', creds.user || ''], ['inputXtreamPass', creds.pass || ''], ['inputModalXtreamServer', creds.server || ''], ['inputModalXtreamUser', creds.user || ''], ['inputModalXtreamPass', creds.pass || '']];
                fields.forEach(function (_ref10) {
                  var _ref11 = _slicedToArray(_ref10, 2),
                    id = _ref11[0],
                    val = _ref11[1];
                  var el = document.getElementById(id);
                  if (el) el.value = val;
                });
              }
            }
          } catch (e) {}

          // 2. Hafizadaki (IndexedDB) kayitli listeyi kontrol et
          hasCachedPlaylist = false;
          _context6.p = 1;
          _context6.n = 2;
          return loadPlaylistFromDb();
        case 2:
          cached = _context6.v;
          if (!(Array.isArray(cached) && cached.length > 0)) {
            _context6.n = 3;
            break;
          }
          hasCachedPlaylist = true;
          // Listeyi HICBIR INTERNET INDIRMESI OLMADAN, hafizadan aninda yukle!
          setMasterChannels(cached, false);
          showToast("\u26A1 Haf\u0131zadaki ".concat(cached.length.toLocaleString('tr-TR'), " i\xE7erik an\u0131nda a\xE7\u0131ld\u0131."));
          return _context6.a(2);
        case 3:
          _context6.n = 5;
          break;
        case 4:
          _context6.p = 4;
          _t3 = _context6.v;
        case 5:
          // 3. EGER HAFIZADA KAYITLI LISTE YOKSA: Ilk acilista dogrudan Xtream Giris Ekranini Ac!
          if (!hasCachedPlaylist) {
            setMasterChannels(SAMPLE_DATA, false);
            openXtreamLoginModal();
          }
        case 6:
          return _context6.a(2);
      }
    }, _callee6, null, [[1, 4]]);
  }));
  function initApp() {
    return _initApp.apply(this, arguments);
  }
  return initApp;
})()();

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(function () {});
}