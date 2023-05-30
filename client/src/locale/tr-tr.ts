export const logout = 'çıkış yap'
export const unsupported = 'bu web tarayıcı, WebRTC desteklemiyor'
export const admin_loggedin = 'Admin olarak giriş yaptınız'
export const you = 'Sen'
export const somebody = 'Başkası'
export const send_a_message = 'Mesaj Gönder'

export const side = {
  chat: 'Sohbet',
  files: 'Dosyalar',
  settings: 'Ayarlar',
}

export const connect = {
  login_title: 'Lütfen Giriş Yapın',
  invitation_title: 'Bu odaya davet edildiniz',
  displayname: 'Kullanıcı adınızı girin',
  password: 'Şifre',
  connect: 'Bağlan',
  error: 'Giriş hatası',
  empty_displayname: 'Ekran ismi boş olamaz.',
}

export const context = {
  ignore: 'Yoksay',
  unignore: 'Varsay',
  mute: 'Sessize al',
  unmute: 'Sessizden çıkar',
  release: 'Kontrolü bırakmaya zorla',
  take: 'Kontrolü almaya zorla',
  give: 'Kontrolü ver',
  kick: 'Kov',
  ban: 'IP\'yi engelle',
  confirm: {
    kick_title: '{name} isimli kullanıcıyı kov.',
    kick_text: '{name} isimli kullanıcıyı kovmak istediğine emin misin?',
    ban_title: '{name} isimli kullanıcıyı engelle.',
    ban_text: '{name} isimli kullanıcıyı engellemek istediğine emin misin? Bu işlemi geri almak için sunucuyu yeniden başlatmalısın.',
    mute_title: '{name} isimli kullanıcıyı sessize al.',
    mute_text: '{name} isimli kullanıcıyı sessize almak istediğine emin misin?',
    unmute_title: '{name} isimli kullanıcıyı sessizden çıkar.',
    unmute_text: '{name} isimli kullanıcıyı sessizden çıkarmak istediğine emin misin?',
    button_yes: 'Evet',
    button_cancel: 'İptal',
  },
}

export const controls = {
  release: 'Kontrolü bırak',
  request: 'Kontrol iste',
  lock: 'Kontrolü kilitle',
  unlock: 'Kontrol kilidini aç',
  has: 'Kontrol sende!',
  hasnot: 'Kontrole sahip değilsin',
}

export const locks = {
  control: {
    lock: 'Kontrolleri kilitle (kullanıcılar için)',
    unlock: 'Kontrollerin kilidini kaldır (kullanıcılar için)',
    locked: 'Kontroller kilitlendi (kullanıcılar için)',
    unlocked: 'Kontrollerin kilidi kaldırıldı (kullanıcılar için)',
    notif_locked: 'kullanıcılar için kontroller kilitlendi',
    notif_unlocked: 'kullanıcılar için kontrollerin kilidi kaldırıldı',
  },
  login: {
    lock: 'Odayı kilitle (kullanıcılar için)',
    unlock: 'Odanın kilidini kaldır (kullanıcılar için)',
    locked: 'Oda kilitlendi (kullanıcılar için)',
    unlocked: 'Odanın kilidi kaldırıldı (kullanıcılar için)',
    notif_locked: 'oda kilitlendi',
    notif_unlocked: 'odanın kilidi kaldırıldı',
  },
  file_transfer: {
    lock: 'Dosya transferini kilitle (kullanıcılar için)',
    unlock: 'Dosya transferinin kilidini kaldır (kullanıcılar için)',
    locked: 'Dosya transferi kilitlendi (kullanıcılar için)',
    unlocked: 'Dosya transferinin kilidi kaldırıldı (kullanıcılar için)',
    notif_locked: 'dosya transferi kilitlendi',
    notif_unlocked: 'dosya transferinin kilidi kaldırıldı',
  },
}

export const setting = {
  scroll: 'Kaydırma Hassasiyeti',
  scroll_invert: 'Tersine Kaydırma',
  autoplay: 'Videoyu Otomatik Oynat',
  ignore_emotes: 'Uçan Emojileri Yoksay',
  chat_sound: 'Sohbet Sesi',
  keyboard_layout: 'Klavye Dizilimi',
  broadcast_title: 'Canlı Yayın',
}

export const connection = {
  logged_out: 'Çıkış yaptın.',
  reconnecting: 'Yeniden bağlanıyor...',
  connected: 'Bağlandı',
  disconnected: 'Bağlantı koptu',
  kicked: 'Odadan atıldınız.',
  button_confirm: 'TAMAM',
}

export const notifications = {
  connected: '{name} bağlandı',
  disconnected: '{name} ayrıldı',
  controls_taken: '{name} kontrolü aldı',
  controls_taken_force: 'zorla kontrolü aldı',
  controls_taken_steal: 'kontrolü {name} isimli kullanıcıdan aldı',
  controls_released: '{name} kontrolü bıraktı',
  controls_released_force: 'zorla kontrolü bıraktı',
  controls_released_steal: '{name} isimli kullanıcı tarafından kontrol bıraktırıldı',
  controls_given: 'kontrolü {name} isimli kullanıcıya verdi',
  controls_has: '{name} kontrole sahip',
  controls_has_alt: 'Kullanıcıya kontrol isteği bildirimi gönderildi',
  controls_requesting: '{name} isimli kullanıcı kontrolü istiyor',
  resolution: 'çözünürlüğü {width}x{height}@{rate} olarak ayarladı',
  banned: '{name} engellendi',
  kicked: '{name} atıldı',
  muted: '{name} sessize aldındı',
  unmuted: '{name} sessizden çıkarıldı',
}

export const files = {
  downloads: 'İndirilenler',
  uploads: 'Yüklenenler',
  upload_here: 'Yüklemek için tıkla ya da sürükle',
}
