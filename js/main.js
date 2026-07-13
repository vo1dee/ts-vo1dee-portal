(function () {
  "use strict";

  var DOWNLOADS = "https://www.teamspeak.com/en/downloads/";

  var I18N = {
    en: {
      "doc.title": "ts.vo1dee.com — Server Hub",
      "hero.eyebrow": "Community server hub",
      "hero.title": "One address. Two servers.",
      "hero.sub": "<b>ts.vo1dee.com</b> hosts a TeamSpeak voice server and a Project Zomboid dedicated server. Grab the address, follow a guide, and jump in.",
      "services.title": "What's running here",
      "svc.ts.kind": "Voice server",
      "svc.ts.desc": "Voice chat for the crew. Works with both the classic TeamSpeak 3 client and the new TeamSpeak 6.",
      "svc.pz.kind": "Dedicated game server",
      "svc.pz.desc": "Co-op survival in Knox Country. Add the server to your favorites and join your friends.",
      "svc.link": "Connection guide ↓",
      "copy": "Copy",
      "copied": "Copied!",
      "guide.ts.title": "How to connect — TeamSpeak",
      "ts3.s1": "Download and install the <a href=\"" + DOWNLOADS + "\" target=\"_blank\" rel=\"noopener\">TeamSpeak 3 client</a>.",
      "ts3.s2": "Open the client and go to <b>Connections → Connect</b> (or press <code>Ctrl+S</code>).",
      "ts3.s3": "In <b>Server Nickname or Address</b> enter <code>ts.vo1dee.com</code>. The server uses the default port <code>9987</code>, so there is no need to type it.",
      "ts3.s4": "Pick a nickname. Leave the password field empty unless you were given one.",
      "ts3.s5": "Hit <b>Connect</b> — you are in.",
      "ts6.s1": "Download the new <a href=\"" + DOWNLOADS + "\" target=\"_blank\" rel=\"noopener\">TeamSpeak client (TS6)</a> from the official site.",
      "ts6.s2": "Launch it and sign in, or continue without an account.",
      "ts6.s3": "Click the <b>+</b> button and choose <b>Connect to Server</b>.",
      "ts6.s4": "Enter <code>ts.vo1dee.com</code>, pick a nickname and connect.",
      "ts6.note": "The TS6 client connects to TeamSpeak 3 servers without any extra setup.",
      "guide.pz.title": "How to connect — Project Zomboid",
      "pz.s1": "Launch <b>Project Zomboid</b> from Steam.",
      "pz.s2": "In the main menu choose <b>Join</b>.",
      "pz.s3": "Open the <b>Favorites</b> tab and fill in the server details.",
      "pz.s4": "<b>IP:</b> <code>ts.vo1dee.com</code> · <b>Port:</b> <code>16261</code>",
      "pz.s5": "Choose an account name and password — the account is created on your first join, so remember the password.",
      "pz.s6": "Click <b>Save</b>, select the server in the list and hit <b>Join</b>.",
      "pz.note": "If the server runs Workshop mods, they download automatically — the first join can take a few minutes.",
      "footer.line": "Maintained by vo1dee · Find us on the TeamSpeak server",
      "footer.src": "Source on GitHub"
    },
    uk: {
      "doc.title": "ts.vo1dee.com — хаб серверів",
      "hero.eyebrow": "Сервери спільноти",
      "hero.title": "Одна адреса. Два сервери.",
      "hero.sub": "На <b>ts.vo1dee.com</b> працюють голосовий сервер TeamSpeak і виділений сервер Project Zomboid. Скопіюй адресу, скористайся інструкцією — і приєднуйся.",
      "services.title": "Що тут працює",
      "svc.ts.kind": "Голосовий сервер",
      "svc.ts.desc": "Голосовий чат для компанії. Працює і з класичним клієнтом TeamSpeak 3, і з новим TeamSpeak 6.",
      "svc.pz.kind": "Виділений ігровий сервер",
      "svc.pz.desc": "Кооперативне виживання в окрузі Нокс. Додай сервер в обрані та приєднуйся до друзів.",
      "svc.link": "Інструкція з підключення ↓",
      "copy": "Копіювати",
      "copied": "Скопійовано!",
      "guide.ts.title": "Як підключитися — TeamSpeak",
      "ts3.s1": "Завантаж і встанови <a href=\"" + DOWNLOADS + "\" target=\"_blank\" rel=\"noopener\">клієнт TeamSpeak 3</a>.",
      "ts3.s2": "Відкрий клієнт і обери <b>Connections → Connect</b> (або натисни <code>Ctrl+S</code>).",
      "ts3.s3": "У полі <b>Server Nickname or Address</b> введи <code>ts.vo1dee.com</code>. Сервер працює на стандартному порту <code>9987</code>, тож вказувати його не потрібно.",
      "ts3.s4": "Вибери нікнейм. Поле пароля залиш порожнім, якщо тобі не давали пароль.",
      "ts3.s5": "Натисни <b>Connect</b> — і ти на сервері.",
      "ts6.s1": "Завантаж новий <a href=\"" + DOWNLOADS + "\" target=\"_blank\" rel=\"noopener\">клієнт TeamSpeak (TS6)</a> з офіційного сайту.",
      "ts6.s2": "Запусти його та увійди в акаунт або продовж без нього.",
      "ts6.s3": "Натисни кнопку <b>+</b> та обери <b>Connect to Server</b>.",
      "ts6.s4": "Введи <code>ts.vo1dee.com</code>, вибери нікнейм і підключайся.",
      "ts6.note": "Клієнт TS6 підключається до серверів TeamSpeak 3 без додаткових налаштувань.",
      "guide.pz.title": "Як підключитися — Project Zomboid",
      "pz.s1": "Запусти <b>Project Zomboid</b> у Steam.",
      "pz.s2": "У головному меню обери <b>Join</b>.",
      "pz.s3": "Відкрий вкладку <b>Favorites</b> і заповни дані сервера.",
      "pz.s4": "<b>IP:</b> <code>ts.vo1dee.com</code> · <b>порт:</b> <code>16261</code>",
      "pz.s5": "Вигадай ім’я користувача та пароль — акаунт створюється під час першого входу, тож запам’ятай пароль.",
      "pz.s6": "Натисни <b>Save</b>, вибери сервер у списку та натисни <b>Join</b>.",
      "pz.note": "Якщо на сервері є моди з Workshop, вони завантажаться автоматично — перший вхід може тривати кілька хвилин.",
      "footer.line": "Підтримує vo1dee · Шукай нас на сервері TeamSpeak",
      "footer.src": "Код на GitHub"
    }
  };

  var LS_KEY = "portal-lang";
  var lang = detectLang();

  function detectLang() {
    try {
      var saved = localStorage.getItem(LS_KEY);
      if (saved && I18N[saved]) return saved;
    } catch (e) { /* storage unavailable */ }
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("uk") === 0 ? "uk" : "en";
  }

  function applyLang(code) {
    lang = code;
    var dict = I18N[code];
    document.documentElement.lang = code;
    document.title = dict["doc.title"];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerHTML = dict[key];
    });
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === code));
    });
    try { localStorage.setItem(LS_KEY, code); } catch (e) { /* storage unavailable */ }
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLang(btn.dataset.lang); });
  });

  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.dataset.copy;
      var done = function (ok) {
        if (!ok) return;
        btn.classList.add("copied");
        btn.textContent = I18N[lang]["copied"];
        setTimeout(function () {
          btn.classList.remove("copied");
          btn.textContent = I18N[lang]["copy"];
        }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () { done(true); },
          function () { done(fallbackCopy(text)); }
        );
      } else {
        done(fallbackCopy(text));
      }
    });
  });

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { /* ignore */ }
    ta.remove();
    return ok;
  }

  document.querySelectorAll(".tabs").forEach(function (tabs) {
    var buttons = tabs.querySelectorAll("button[data-panel]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === btn));
          var panel = document.getElementById(b.dataset.panel);
          if (panel) panel.hidden = b !== btn;
        });
      });
    });
  });

  applyLang(lang);
})();
