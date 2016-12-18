// 
// @description : 
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT
import {autoinject} from "aurelia-framework";

@autoinject()
export class StyleGlyphs {
  constructor() { }

  // aurelia hooks
  canActivate(model) { return true; }
  activate(model) { return true; }
  bind(bindingContext) { }
  attached() { this.filter(); }
  detached() { }
  unbind() { }
  deactivate() { }
  // end aurelia hooks

  fIcomoon = [];
  fHawLine = [];
  fHawFill = [];
  filterText = '';
  filter() {
    this.fIcomoon = _.filter(this.icomoon, c => c.indexOf(this.filterText.toLowerCase()) > -1);
    this.fHawLine = _.filter(this.hawline, c => c.indexOf(this.filterText.toLowerCase()) > -1);
    this.fHawFill = _.filter(this.hawfill, c => c.indexOf(this.filterText.toLowerCase()) > -1);
  }

  glyphs = {
    "Alert Icons": [
      "ui-alert-info",
      "ui-alert-question",
      "ui-alert-exclaim",
      "ui-alert-error"
    ],
    "Arrows": [
      "ui-arrow-down",
      "ui-arrow-left",
      "ui-arrow-right",
      "ui-arrow-up",
      "ui-caret-double-down",
      "ui-caret-double-left",
      "ui-caret-double-right",
      "ui-caret-double-up",
      "ui-caret-down",
      "ui-caret-left",
      "ui-caret-right",
      "ui-caret-up",
      "ui-chevron-double-down",
      "ui-chevron-double-left",
      "ui-chevron-double-right",
      "ui-chevron-double-up",
      "ui-chevron-down",
      "ui-chevron-left",
      "ui-chevron-right",
      "ui-chevron-up",
      "ui-refresh"
    ]
  };
  icomoon = [
    "icon-moon-home",
    "icon-moon-home2",
    "icon-moon-home3",
    "icon-moon-office",
    "icon-moon-newspaper",
    "icon-moon-pencil",
    "icon-moon-pencil2",
    "icon-moon-quill",
    "icon-moon-pen",
    "icon-moon-blog",
    "icon-moon-eyedropper",
    "icon-moon-droplet",
    "icon-moon-paint-format",
    "icon-moon-image",
    "icon-moon-images",
    "icon-moon-camera",
    "icon-moon-headphones",
    "icon-moon-music",
    "icon-moon-play",
    "icon-moon-film",
    "icon-moon-video-camera",
    "icon-moon-dice",
    "icon-moon-pacman",
    "icon-moon-spades",
    "icon-moon-clubs",
    "icon-moon-diamonds",
    "icon-moon-bullhorn",
    "icon-moon-connection",
    "icon-moon-podcast",
    "icon-moon-feed",
    "icon-moon-mic",
    "icon-moon-book",
    "icon-moon-books",
    "icon-moon-library",
    "icon-moon-file-text",
    "icon-moon-profile",
    "icon-moon-file-empty",
    "icon-moon-files-empty",
    "icon-moon-file-text2",
    "icon-moon-file-picture",
    "icon-moon-file-music",
    "icon-moon-file-play",
    "icon-moon-file-video",
    "icon-moon-file-zip",
    "icon-moon-copy",
    "icon-moon-paste",
    "icon-moon-stack",
    "icon-moon-folder",
    "icon-moon-folder-open",
    "icon-moon-folder-plus",
    "icon-moon-folder-minus",
    "icon-moon-folder-download",
    "icon-moon-folder-upload",
    "icon-moon-price-tag",
    "icon-moon-price-tags",
    "icon-moon-barcode",
    "icon-moon-qrcode",
    "icon-moon-ticket",
    "icon-moon-cart",
    "icon-moon-coin-dollar",
    "icon-moon-coin-euro",
    "icon-moon-coin-pound",
    "icon-moon-coin-yen",
    "icon-moon-credit-card",
    "icon-moon-calculator",
    "icon-moon-lifebuoy",
    "icon-moon-phone",
    "icon-moon-phone-hang-up",
    "icon-moon-address-book",
    "icon-moon-envelop",
    "icon-moon-pushpin",
    "icon-moon-location",
    "icon-moon-location2",
    "icon-moon-compass",
    "icon-moon-compass2",
    "icon-moon-map",
    "icon-moon-map2",
    "icon-moon-history",
    "icon-moon-clock",
    "icon-moon-clock2",
    "icon-moon-alarm",
    "icon-moon-bell",
    "icon-moon-stopwatch",
    "icon-moon-calendar",
    "icon-moon-printer",
    "icon-moon-keyboard",
    "icon-moon-display",
    "icon-moon-laptop",
    "icon-moon-mobile",
    "icon-moon-mobile2",
    "icon-moon-tablet",
    "icon-moon-tv",
    "icon-moon-drawer",
    "icon-moon-drawer2",
    "icon-moon-box-add",
    "icon-moon-box-remove",
    "icon-moon-download",
    "icon-moon-upload",
    "icon-moon-floppy-disk",
    "icon-moon-drive",
    "icon-moon-database",
    "icon-moon-undo",
    "icon-moon-redo",
    "icon-moon-undo2",
    "icon-moon-redo2",
    "icon-moon-forward",
    "icon-moon-reply",
    "icon-moon-bubble",
    "icon-moon-bubbles",
    "icon-moon-bubbles2",
    "icon-moon-bubble2",
    "icon-moon-bubbles3",
    "icon-moon-bubbles4",
    "icon-moon-user",
    "icon-moon-users",
    "icon-moon-user-plus",
    "icon-moon-user-minus",
    "icon-moon-user-check",
    "icon-moon-user-tie",
    "icon-moon-quotes-left",
    "icon-moon-quotes-right",
    "icon-moon-hour-glass",
    "icon-moon-spinner",
    "icon-moon-spinner2",
    "icon-moon-spinner3",
    "icon-moon-spinner4",
    "icon-moon-spinner5",
    "icon-moon-spinner6",
    "icon-moon-spinner7",
    "icon-moon-spinner8",
    "icon-moon-spinner9",
    "icon-moon-spinner10",
    "icon-moon-spinner11",
    "icon-moon-binoculars",
    "icon-moon-search",
    "icon-moon-zoom-in",
    "icon-moon-zoom-out",
    "icon-moon-enlarge",
    "icon-moon-shrink",
    "icon-moon-enlarge2",
    "icon-moon-shrink2",
    "icon-moon-key",
    "icon-moon-key2",
    "icon-moon-lock",
    "icon-moon-unlocked",
    "icon-moon-wrench",
    "icon-moon-equalizer",
    "icon-moon-equalizer2",
    "icon-moon-cog",
    "icon-moon-cogs",
    "icon-moon-hammer",
    "icon-moon-magic-wand",
    "icon-moon-aid-kit",
    "icon-moon-bug",
    "icon-moon-pie-chart",
    "icon-moon-stats-dots",
    "icon-moon-stats-bars",
    "icon-moon-stats-bars2",
    "icon-moon-trophy",
    "icon-moon-gift",
    "icon-moon-glass",
    "icon-moon-glass2",
    "icon-moon-mug",
    "icon-moon-spoon-knife",
    "icon-moon-leaf",
    "icon-moon-rocket",
    "icon-moon-meter",
    "icon-moon-meter2",
    "icon-moon-hammer2",
    "icon-moon-fire",
    "icon-moon-lab",
    "icon-moon-magnet",
    "icon-moon-bin",
    "icon-moon-bin2",
    "icon-moon-briefcase",
    "icon-moon-airplane",
    "icon-moon-truck",
    "icon-moon-road",
    "icon-moon-accessibility",
    "icon-moon-target",
    "icon-moon-shield",
    "icon-moon-power",
    "icon-moon-switch",
    "icon-moon-power-cord",
    "icon-moon-clipboard",
    "icon-moon-list-numbered",
    "icon-moon-list",
    "icon-moon-list2",
    "icon-moon-tree",
    "icon-moon-menu",
    "icon-moon-menu2",
    "icon-moon-menu3",
    "icon-moon-menu4",
    "icon-moon-cloud",
    "icon-moon-cloud-download",
    "icon-moon-cloud-upload",
    "icon-moon-cloud-check",
    "icon-moon-download2",
    "icon-moon-upload2",
    "icon-moon-download3",
    "icon-moon-upload3",
    "icon-moon-sphere",
    "icon-moon-earth",
    "icon-moon-link",
    "icon-moon-flag",
    "icon-moon-attachment",
    "icon-moon-eye",
    "icon-moon-eye-plus",
    "icon-moon-eye-minus",
    "icon-moon-eye-blocked",
    "icon-moon-bookmark",
    "icon-moon-bookmarks",
    "icon-moon-sun",
    "icon-moon-contrast",
    "icon-moon-brightness-contrast",
    "icon-moon-star-empty",
    "icon-moon-star-half",
    "icon-moon-star-full",
    "icon-moon-heart",
    "icon-moon-heart-broken",
    "icon-moon-man",
    "icon-moon-woman",
    "icon-moon-man-woman",
    "icon-moon-happy",
    "icon-moon-happy2",
    "icon-moon-smile",
    "icon-moon-smile2",
    "icon-moon-tongue",
    "icon-moon-tongue2",
    "icon-moon-sad",
    "icon-moon-sad2",
    "icon-moon-wink",
    "icon-moon-wink2",
    "icon-moon-grin",
    "icon-moon-grin2",
    "icon-moon-cool",
    "icon-moon-cool2",
    "icon-moon-angry",
    "icon-moon-angry2",
    "icon-moon-evil",
    "icon-moon-evil2",
    "icon-moon-shocked",
    "icon-moon-shocked2",
    "icon-moon-baffled",
    "icon-moon-baffled2",
    "icon-moon-confused",
    "icon-moon-confused2",
    "icon-moon-neutral",
    "icon-moon-neutral2",
    "icon-moon-hipster",
    "icon-moon-hipster2",
    "icon-moon-wondering",
    "icon-moon-wondering2",
    "icon-moon-sleepy",
    "icon-moon-sleepy2",
    "icon-moon-frustrated",
    "icon-moon-frustrated2",
    "icon-moon-crying",
    "icon-moon-crying2",
    "icon-moon-point-up",
    "icon-moon-point-right",
    "icon-moon-point-down",
    "icon-moon-point-left",
    "icon-moon-warning",
    "icon-moon-notification",
    "icon-moon-question",
    "icon-moon-plus",
    "icon-moon-minus",
    "icon-moon-info",
    "icon-moon-cancel-circle",
    "icon-moon-blocked",
    "icon-moon-cross",
    "icon-moon-checkmark",
    "icon-moon-checkmark2",
    "icon-moon-spell-check",
    "icon-moon-enter",
    "icon-moon-exit",
    "icon-moon-play2",
    "icon-moon-pause",
    "icon-moon-stop",
    "icon-moon-previous",
    "icon-moon-next",
    "icon-moon-backward",
    "icon-moon-forward2",
    "icon-moon-play3",
    "icon-moon-pause2",
    "icon-moon-stop2",
    "icon-moon-backward2",
    "icon-moon-forward3",
    "icon-moon-first",
    "icon-moon-last",
    "icon-moon-previous2",
    "icon-moon-next2",
    "icon-moon-eject",
    "icon-moon-volume-high",
    "icon-moon-volume-medium",
    "icon-moon-volume-low",
    "icon-moon-volume-mute",
    "icon-moon-volume-mute2",
    "icon-moon-volume-increase",
    "icon-moon-volume-decrease",
    "icon-moon-loop",
    "icon-moon-loop2",
    "icon-moon-infinite",
    "icon-moon-shuffle",
    "icon-moon-arrow-up-left",
    "icon-moon-arrow-up",
    "icon-moon-arrow-up-right",
    "icon-moon-arrow-right",
    "icon-moon-arrow-down-right",
    "icon-moon-arrow-down",
    "icon-moon-arrow-down-left",
    "icon-moon-arrow-left",
    "icon-moon-arrow-up-left2",
    "icon-moon-arrow-up2",
    "icon-moon-arrow-up-right2",
    "icon-moon-arrow-right2",
    "icon-moon-arrow-down-right2",
    "icon-moon-arrow-down2",
    "icon-moon-arrow-down-left2",
    "icon-moon-arrow-left2",
    "icon-moon-circle-up",
    "icon-moon-circle-right",
    "icon-moon-circle-down",
    "icon-moon-circle-left",
    "icon-moon-tab",
    "icon-moon-move-up",
    "icon-moon-move-down",
    "icon-moon-sort-alpha-asc",
    "icon-moon-sort-alpha-desc",
    "icon-moon-sort-numeric-asc",
    "icon-moon-sort-numberic-desc",
    "icon-moon-sort-amount-asc",
    "icon-moon-sort-amount-desc",
    "icon-moon-command",
    "icon-moon-shift",
    "icon-moon-ctrl",
    "icon-moon-opt",
    "icon-moon-checkbox-checked",
    "icon-moon-checkbox-unchecked",
    "icon-moon-radio-checked",
    "icon-moon-radio-checked2",
    "icon-moon-radio-unchecked",
    "icon-moon-crop",
    "icon-moon-make-group",
    "icon-moon-ungroup",
    "icon-moon-scissors",
    "icon-moon-filter",
    "icon-moon-font",
    "icon-moon-ligature",
    "icon-moon-ligature2",
    "icon-moon-text-height",
    "icon-moon-text-width",
    "icon-moon-font-size",
    "icon-moon-bold",
    "icon-moon-underline",
    "icon-moon-italic",
    "icon-moon-strikethrough",
    "icon-moon-omega",
    "icon-moon-sigma",
    "icon-moon-page-break",
    "icon-moon-superscript",
    "icon-moon-subscript",
    "icon-moon-superscript2",
    "icon-moon-subscript2",
    "icon-moon-text-color",
    "icon-moon-pagebreak",
    "icon-moon-clear-formatting",
    "icon-moon-table",
    "icon-moon-table2",
    "icon-moon-insert-template",
    "icon-moon-pilcrow",
    "icon-moon-ltr",
    "icon-moon-rtl",
    "icon-moon-section",
    "icon-moon-paragraph-left",
    "icon-moon-paragraph-center",
    "icon-moon-paragraph-right",
    "icon-moon-paragraph-justify",
    "icon-moon-indent-increase",
    "icon-moon-indent-decrease",
    "icon-moon-share",
    "icon-moon-new-tab",
    "icon-moon-embed",
    "icon-moon-embed2",
    "icon-moon-terminal",
    "icon-moon-share2",
    "icon-moon-mail",
    "icon-moon-mail2",
    "icon-moon-mail3",
    "icon-moon-mail4",
    "icon-moon-amazon",
    "icon-moon-google",
    "icon-moon-google2",
    "icon-moon-google3",
    "icon-moon-google-plus",
    "icon-moon-google-plus2",
    "icon-moon-google-plus3",
    "icon-moon-hangouts",
    "icon-moon-google-drive",
    "icon-moon-facebook",
    "icon-moon-facebook2",
    "icon-moon-instagram",
    "icon-moon-whatsapp",
    "icon-moon-spotify",
    "icon-moon-telegram",
    "icon-moon-twitter",
    "icon-moon-vine",
    "icon-moon-vk",
    "icon-moon-renren",
    "icon-moon-sina-weibo",
    "icon-moon-rss",
    "icon-moon-rss2",
    "icon-moon-youtube",
    "icon-moon-youtube2",
    "icon-moon-twitch",
    "icon-moon-vimeo",
    "icon-moon-vimeo2",
    "icon-moon-lanyrd",
    "icon-moon-flickr",
    "icon-moon-flickr2",
    "icon-moon-flickr3",
    "icon-moon-flickr4",
    "icon-moon-dribbble",
    "icon-moon-behance",
    "icon-moon-behance2",
    "icon-moon-deviantart",
    "icon-moon-500px",
    "icon-moon-steam",
    "icon-moon-steam2",
    "icon-moon-dropbox",
    "icon-moon-onedrive",
    "icon-moon-github",
    "icon-moon-npm",
    "icon-moon-basecamp",
    "icon-moon-trello",
    "icon-moon-wordpress",
    "icon-moon-joomla",
    "icon-moon-ello",
    "icon-moon-blogger",
    "icon-moon-blogger2",
    "icon-moon-tumblr",
    "icon-moon-tumblr2",
    "icon-moon-yahoo",
    "icon-moon-yahoo2",
    "icon-moon-tux",
    "icon-moon-appleinc",
    "icon-moon-finder",
    "icon-moon-android",
    "icon-moon-windows",
    "icon-moon-windows8",
    "icon-moon-soundcloud",
    "icon-moon-soundcloud2",
    "icon-moon-skype",
    "icon-moon-reddit",
    "icon-moon-hackernews",
    "icon-moon-wikipedia",
    "icon-moon-linkedin",
    "icon-moon-linkedin2",
    "icon-moon-lastfm",
    "icon-moon-lastfm2",
    "icon-moon-delicious",
    "icon-moon-stumbleupon",
    "icon-moon-stumbleupon2",
    "icon-moon-stackoverflow",
    "icon-moon-pinterest",
    "icon-moon-pinterest2",
    "icon-moon-xing",
    "icon-moon-xing2",
    "icon-moon-flattr",
    "icon-moon-foursquare",
    "icon-moon-yelp",
    "icon-moon-paypal",
    "icon-moon-chrome",
    "icon-moon-firefox",
    "icon-moon-IE",
    "icon-moon-edge",
    "icon-moon-safari",
    "icon-moon-opera",
    "icon-moon-file-pdf",
    "icon-moon-file-openoffice",
    "icon-moon-file-word",
    "icon-moon-file-excel",
    "icon-moon-libreoffice",
    "icon-moon-html-five",
    "icon-moon-html-five2",
    "icon-moon-css3",
    "icon-moon-git",
    "icon-moon-codepen",
    "icon-moon-svg"
  ]
  hawline = [
    "icon-line-mail-envelope",
    "icon-line-mail-envelope-open",
    "icon-line-mail-envelope-closed",
    "icon-line-mail-envelope-open2",
    "icon-line-mail-envelope-open3",
    "icon-line-mail-envelope-closed2",
    "icon-line-mail-envelope-open4",
    "icon-line-mail-error",
    "icon-line-mail-checked",
    "icon-line-mail-cancel",
    "icon-line-mail--forbidden",
    "icon-line-mail-add",
    "icon-line-mail-remove",
    "icon-line-flag",
    "icon-line-flag2",
    "icon-line-flag3",
    "icon-line-flag4",
    "icon-line-bookmark",
    "icon-line-bookmark-add",
    "icon-line-bookmark-remove",
    "icon-line-eye-hidden",
    "icon-line-eye",
    "icon-line-star",
    "icon-line-key",
    "icon-line-key2",
    "icon-line-trash-can",
    "icon-line-trash-can2",
    "icon-line-information",
    "icon-line-information2",
    "icon-line-book",
    "icon-line-book-bookmark",
    "icon-line-clipboard-edit",
    "icon-line-clipboard-add",
    "icon-line-clipboard-remove",
    "icon-line-clipboard",
    "icon-line-clipboard-download",
    "icon-line-clipboard-upload",
    "icon-line-clipboard-checked",
    "icon-line-clipboard-text",
    "icon-line-clipboard-list",
    "icon-line-note",
    "icon-line-note-add",
    "icon-line-note-remove",
    "icon-line-note-text",
    "icon-line-note-list",
    "icon-line-note-checked",
    "icon-line-note-important",
    "icon-line-notebook",
    "icon-line-notebook2",
    "icon-line-notebook3",
    "icon-line-notebook4",
    "icon-line-notebook-text",
    "icon-line-notebook-list",
    "icon-line-document",
    "icon-line-document-text",
    "icon-line-document-text2",
    "icon-line-document-download",
    "icon-line-document-upload",
    "icon-line-document-bookmark",
    "icon-line-document-diagrams",
    "icon-line-document-recording",
    "icon-line-document-table",
    "icon-line-document-music",
    "icon-line-document-movie",
    "icon-line-document-play",
    "icon-line-document-graph",
    "icon-line-document-time",
    "icon-line-document-text3",
    "icon-line-document-code",
    "icon-line-document-cloud",
    "icon-line-documents",
    "icon-line-documents2",
    "icon-line-document-search",
    "icon-line-document-star",
    "icon-line-document-unlocked",
    "icon-line-document-locked",
    "icon-line-document-error",
    "icon-line-document-cancel",
    "icon-line-document-checked",
    "icon-line-document-add",
    "icon-line-document-remove",
    "icon-line-document-forbidden",
    "icon-line-document-information",
    "icon-line-folder-information",
    "icon-line-document-list",
    "icon-line-document-font",
    "icon-line-inbox",
    "icon-line-inboxes",
    "icon-line-inbox-document",
    "icon-line-inbox-document-text",
    "icon-line-inbox-download",
    "icon-line-inbox-upload",
    "icon-line-folder",
    "icon-line-folder2",
    "icon-line-folders",
    "icon-line-folder-download",
    "icon-line-folder-upload",
    "icon-line-folder-unlocked",
    "icon-line-folder-locked",
    "icon-line-folder-search",
    "icon-line-folder-error",
    "icon-line-folder-cancel",
    "icon-line-folder-checked",
    "icon-line-folder-add",
    "icon-line-folder-remove",
    "icon-line-folder-forbidden",
    "icon-line-folder-bookmark",
    "icon-line-document-zip",
    "icon-line-zip",
    "icon-line-search",
    "icon-line-search-plus",
    "icon-line-search-minus",
    "icon-line-lock",
    "icon-line-lock-open",
    "icon-line-lock-open2",
    "icon-line-lock-stripes",
    "icon-line-lock-rounded",
    "icon-line-lock-rounded-open",
    "icon-line-lock-rounded-open2",
    "icon-line-combination-lock",
    "icon-line-printer",
    "icon-line-printer2",
    "icon-line-printer-text",
    "icon-line-printer-text2",
    "icon-line-document-shred",
    "icon-line-shredder",
    "icon-line-document-scan",
    "icon-line-cloud-download",
    "icon-line-cloud-upload",
    "icon-line-cloud-error",
    "icon-line-cloud",
    "icon-line-inbox-filled",
    "icon-line-pen",
    "icon-line-pen-angled",
    "icon-line-document-edit",
    "icon-line-document-certificate",
    "icon-line-certificate",
    "icon-line-package",
    "icon-line-box",
    "icon-line-box-filled",
    "icon-line-box2",
    "icon-line-box3",
    "icon-line-box-bookmark",
    "icon-line-tag-cord",
    "icon-line-tag",
    "icon-line-tags",
    "icon-line-tag-add",
    "icon-line-tag-remove",
    "icon-line-tag-checked",
    "icon-line-tag-cancel",
    "icon-line-paperclip",
    "icon-line-document-file-numbers",
    "icon-line-document-file-pages",
    "icon-line-document-file-app",
    "icon-line-document-file-png",
    "icon-line-document-file-pdf",
    "icon-line-document-file-mp3",
    "icon-line-document-file-mp4",
    "icon-line-document-file-mov",
    "icon-line-document-file-jpg",
    "icon-line-document-file-key",
    "icon-line-document-file-html",
    "icon-line-document-file-css",
    "icon-line-document-file-java",
    "icon-line-document-file-psd",
    "icon-line-document-file-ai",
    "icon-line-document-file-bmp",
    "icon-line-document-file-dwg",
    "icon-line-document-file-eps",
    "icon-line-document-file-tiff",
    "icon-line-document-file-ots",
    "icon-line-document-file-php",
    "icon-line-document-file-py",
    "icon-line-document-file-c",
    "icon-line-document-file-sql",
    "icon-line-document-file-rb",
    "icon-line-document-file-cpp",
    "icon-line-document-file-tga",
    "icon-line-document-file-dxf",
    "icon-line-document-file-doc",
    "icon-line-document-file-odt",
    "icon-line-document-file-xls",
    "icon-line-document-file-docx",
    "icon-line-document-file-ppt",
    "icon-line-document-file-asp",
    "icon-line-document-file-ics",
    "icon-line-document-file-dat",
    "icon-line-document-file-xml",
    "icon-line-document-file-yml",
    "icon-line-document-file-h",
    "icon-line-document-file-exe",
    "icon-line-document-file-avi",
    "icon-line-document-file-odp",
    "icon-line-document-file-dotx",
    "icon-line-document-file-xlsx",
    "icon-line-document-file-ods",
    "icon-line-document-file-pps",
    "icon-line-document-file-dot",
    "icon-line-document-file-txt",
    "icon-line-document-file-rtf",
    "icon-line-document-file-m4v",
    "icon-line-document-file-flv",
    "icon-line-document-file-mpg",
    "icon-line-document-file-qt",
    "icon-line-document-file-mid",
    "icon-line-document-file-3gp",
    "icon-line-document-file-aiff",
    "icon-line-document-file-aac",
    "icon-line-document-file-wav",
    "icon-line-document-file-zip",
    "icon-line-document-file-ott",
    "icon-line-document-file-tgz",
    "icon-line-document-file-dmg",
    "icon-line-document-file-iso",
    "icon-line-document-file-rar",
    "icon-line-document-file-gif"
  ]
  hawfill = [
    "icon-fill-mail-envelope",
    "icon-fill-mail-envelope-open",
    "icon-fill-mail-envelope-closed",
    "icon-fill-mail-envelope-open2",
    "icon-fill-mail-envelope-open3",
    "icon-fill-mail-envelope-closed2",
    "icon-fill-mail-envelope-open4",
    "icon-fill-mail-error",
    "icon-fill-mail-checked",
    "icon-fill-mail-cancel",
    "icon-fill-mail--forbidden",
    "icon-fill-mail-add",
    "icon-fill-mail-remove",
    "icon-fill-flag",
    "icon-fill-flag2",
    "icon-fill-flag3",
    "icon-fill-flag4",
    "icon-fill-bookmark",
    "icon-fill-bookmark-add",
    "icon-fill-bookmark-remove",
    "icon-fill-eye-hidden",
    "icon-fill-eye",
    "icon-fill-star",
    "icon-fill-key",
    "icon-fill-key2",
    "icon-fill-trash-can",
    "icon-fill-trash-can2",
    "icon-fill-information",
    "icon-fill-information2",
    "icon-fill-book",
    "icon-fill-book-bookmark",
    "icon-fill-clipboard-edit",
    "icon-fill-clipboard-add",
    "icon-fill-clipboard-remove",
    "icon-fill-clipboard",
    "icon-fill-clipboard-download",
    "icon-fill-clipboard-upload",
    "icon-fill-clipboard-checked",
    "icon-fill-clipboard-text",
    "icon-fill-clipboard-list",
    "icon-fill-note",
    "icon-fill-note-add",
    "icon-fill-note-remove",
    "icon-fill-note-text",
    "icon-fill-note-list",
    "icon-fill-note-checked",
    "icon-fill-note-important",
    "icon-fill-notebook",
    "icon-fill-notebook2",
    "icon-fill-notebook3",
    "icon-fill-notebook4",
    "icon-fill-notebook-text",
    "icon-fill-notebook-list",
    "icon-fill-document",
    "icon-fill-document-text",
    "icon-fill-document-text2",
    "icon-fill-document-download",
    "icon-fill-document-upload",
    "icon-fill-document-bookmark",
    "icon-fill-document-diagrams",
    "icon-fill-document-recording",
    "icon-fill-document-table",
    "icon-fill-document-music",
    "icon-fill-document-movie",
    "icon-fill-document-play",
    "icon-fill-document-graph",
    "icon-fill-document-time",
    "icon-fill-document-text3",
    "icon-fill-document-code",
    "icon-fill-document-cloud",
    "icon-fill-documents",
    "icon-fill-documents2",
    "icon-fill-document-search",
    "icon-fill-document-star",
    "icon-fill-document-unlocked",
    "icon-fill-document-locked",
    "icon-fill-document-error",
    "icon-fill-document-cancel",
    "icon-fill-document-checked",
    "icon-fill-document-add",
    "icon-fill-document-remove",
    "icon-fill-document-forbidden",
    "icon-fill-document-information",
    "icon-fill-folder-information",
    "icon-fill-document-list",
    "icon-fill-document-font",
    "icon-fill-inbox",
    "icon-fill-inboxes",
    "icon-fill-inbox-document",
    "icon-fill-inbox-document-text",
    "icon-fill-inbox-download",
    "icon-fill-inbox-upload",
    "icon-fill-folder",
    "icon-fill-folder2",
    "icon-fill-folders",
    "icon-fill-folder-download",
    "icon-fill-folder-upload",
    "icon-fill-folder-unlocked",
    "icon-fill-folder-locked",
    "icon-fill-folder-search",
    "icon-fill-folder-error",
    "icon-fill-folder-cancel",
    "icon-fill-folder-checked",
    "icon-fill-folder-add",
    "icon-fill-folder-remove",
    "icon-fill-folder-forbidden",
    "icon-fill-folder-bookmark",
    "icon-fill-document-zip",
    "icon-fill-zip",
    "icon-fill-search",
    "icon-fill-search-plus",
    "icon-fill-search-minus",
    "icon-fill-lock",
    "icon-fill-lock-open",
    "icon-fill-lock-open2",
    "icon-fill-lock-stripes",
    "icon-fill-lock-rounded",
    "icon-fill-lock-rounded-open",
    "icon-fill-lock-rounded-open2",
    "icon-fill-combination-lock",
    "icon-fill-printer",
    "icon-fill-printer2",
    "icon-fill-printer-text",
    "icon-fill-printer-text2",
    "icon-fill-document-shred",
    "icon-fill-shredder",
    "icon-fill-document-scan",
    "icon-fill-cloud-download",
    "icon-fill-cloud-upload",
    "icon-fill-cloud-error",
    "icon-fill-cloud",
    "icon-fill-inbox-filled",
    "icon-fill-pen",
    "icon-fill-pen-angled",
    "icon-fill-document-edit",
    "icon-fill-document-certificate",
    "icon-fill-certificate",
    "icon-fill-package",
    "icon-fill-box",
    "icon-fill-box-filled",
    "icon-fill-box2",
    "icon-fill-box3",
    "icon-fill-box-bookmark",
    "icon-fill-tag-cord",
    "icon-fill-tag",
    "icon-fill-tags",
    "icon-fill-tag-add",
    "icon-fill-tag-remove",
    "icon-fill-tag-checked",
    "icon-fill-tag-cancel",
    "icon-fill-paperclip",
    "icon-fill-document-file-numbers",
    "icon-fill-document-file-pages",
    "icon-fill-document-file-app",
    "icon-fill-document-file-png",
    "icon-fill-document-file-pdf",
    "icon-fill-document-file-mp3",
    "icon-fill-document-file-mp4",
    "icon-fill-document-file-mov",
    "icon-fill-document-file-jpg",
    "icon-fill-document-file-key",
    "icon-fill-document-file-html",
    "icon-fill-document-file-css",
    "icon-fill-document-file-java",
    "icon-fill-document-file-psd",
    "icon-fill-document-file-ai",
    "icon-fill-document-file-bmp",
    "icon-fill-document-file-dwg",
    "icon-fill-document-file-eps",
    "icon-fill-document-file-tiff",
    "icon-fill-document-file-ots",
    "icon-fill-document-file-php",
    "icon-fill-document-file-py",
    "icon-fill-document-file-c",
    "icon-fill-document-file-sql",
    "icon-fill-document-file-rb",
    "icon-fill-document-file-cpp",
    "icon-fill-document-file-tga",
    "icon-fill-document-file-dxf",
    "icon-fill-document-file-doc",
    "icon-fill-document-file-odt",
    "icon-fill-document-file-xls",
    "icon-fill-document-file-docx",
    "icon-fill-document-file-ppt",
    "icon-fill-document-file-asp",
    "icon-fill-document-file-ics",
    "icon-fill-document-file-dat",
    "icon-fill-document-file-xml",
    "icon-fill-document-file-yml",
    "icon-fill-document-file-h",
    "icon-fill-document-file-exe",
    "icon-fill-document-file-avi",
    "icon-fill-document-file-odp",
    "icon-fill-document-file-dotx",
    "icon-fill-document-file-xlsx",
    "icon-fill-document-file-ods",
    "icon-fill-document-file-pps",
    "icon-fill-document-file-dot",
    "icon-fill-document-file-txt",
    "icon-fill-document-file-rtf",
    "icon-fill-document-file-m4v",
    "icon-fill-document-file-flv",
    "icon-fill-document-file-mpg",
    "icon-fill-document-file-qt",
    "icon-fill-document-file-mid",
    "icon-fill-document-file-3gp",
    "icon-fill-document-file-aiff",
    "icon-fill-document-file-aac",
    "icon-fill-document-file-wav",
    "icon-fill-document-file-zip",
    "icon-fill-document-file-ott",
    "icon-fill-document-file-tgz",
    "icon-fill-document-file-dmg",
    "icon-fill-document-file-iso",
    "icon-fill-document-file-rar",
    "icon-fill-document-file-gif"
  ]
}