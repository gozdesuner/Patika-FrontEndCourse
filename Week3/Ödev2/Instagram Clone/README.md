# Instagram Clone Projesi

Bu proje, Instagram kullanıcı arayüzünün temel işlevlerini ve görünümünü taklit eden bir web uygulamasıdır. Proje, öncelikli olarak HTML, CSS ve Bootstrap kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Sticky Navbar:** Navbar, yukarı sabitlenmiş şekilde tasarlanmıştır ve sayfa aşağı kaydırıldığında da görünür kalır.
- **Responsive Tasarım:** Bootstrap grid sistemi kullanılarak mobil cihazlar ve masaüstü ekranlarla uyumlu bir tasarım sağlanmıştır.
- **Arama Barı:** Placeholder arkaplanında bir arama simgesi yer almakta ve ikon düzgün hizalanmıştır.
- **Hikayeler Bölümü:** Kullanıcıların hikayelerini görüntüleyen bir hikayeler alanı.
- **Gönderi Alanı:** Gönderi kartlarında kullanıcı adı, açıklama, yorumlar ve etkileşim ikonları.
- **Sağ Panel:** Sabit sağ panelde öneriler ve diğer bilgiler.

## 📋 Gereksinimler

Bu projeyi çalıştırmak için aşağıdaki teknolojilere ihtiyacınız var:

- Bir web tarayıcısı (Chrome, Firefox vb.)
- Projenin çalıştırılması için temel bir web sunucusu (isteğe bağlı)

```

## 🔧 Kurulum

1. **Depoyu klonlayın:**

   ```bash
   git clone https://github.com/kullaniciadi/instagram-clone.git
   cd instagram-clone
   ```

2. **Dosyaları yerel bir web sunucusunda çalıştırın (opsiyonel):**

   - Canlı bir önizleme için `Live Server` gibi bir uzantı kullanabilirsiniz.

3. **Tarayıcıda açın:**

   ```
   index.html
   ```

## 🌟 Öne Çıkanlar

### Navbar Özellikleri

- **Sabit Navbar:** Sayfa aşağı kaydırıldığında yukarıda kalır.
- **Arkaplan Rengi:** Beyaz olarak ayarlanmıştır.
- **Arama Çubuğu:** Placeholder kısmında arama simgesi eklenmiştir.

```css
.navbar {
    background-color: #fff;
    height: 54px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
```

### Hikaye Alanı

- Kullanıcı hikayeleri için dairesel görseller ve isimler resimlerin altında gösterilir.
- Kullanıcı isimlerini hizalamak için `flex-direction` ve `align-items` kullanıldı.

```css
.story-circle {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

### Gönderi Kartları

- Gönderi kartlarının header ve footer alanları beyaz renk olarak belirlenmiştir.
- Beğenme, yorum yapma ve paylaşma ikonları tasarlanmıştır.
- Üç nokta menüsü sağ tarafa hizalanmıştır.

## 🎨 Kullanılan Renkler

Proje boyunca Instagram'dan esinlenilen renkler kullanılmıştır:

- Arkaplan: `#fafafa`
- Navbar: `#fff`

## 📚 Kaynaklar

- [FontAwesome](https://fontawesome.com/) - İkonlar
- [Bootstrap Documentation](https://getbootstrap.com/) - Grid ve Display özellikleri

## 📜 Lisans

Bu proje eğitim amaçlı olarak geliştirilmiştir. Ticari amaçlarla kullanımı yasaktır. Lisans detayları için `LICENSE` dosyasına göz atabilirsiniz.

---

