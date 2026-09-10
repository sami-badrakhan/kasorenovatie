# 🏗️ KASO Renovatie Website

Welkom bij de professionele website van **KASO Renovatie** - een volledige, multi-page website gebouwd met HTML, CSS en JavaScript.

---

## 📋 Bestandsstructuur

```
kaso-website/
├── index.html              # Homepage
├── diensten.html           # Diensten pagina
├── portfolio.html          # Portfolio & Realisaties
├── over.html              # Over ons pagina
├── contact.html           # Contactformulier & info
├── styles.css             # Alle styling
├── script.js              # JavaScript functionaliteit
├── assets/
│   └── images/
│       ├── logo.png       # KASO logo
│       ├── hero.jpg       # Hero afbeelding
│       ├── bathroom1.jpg  # Portfolio foto's
│       ├── kitchen1.jpg
│       ├── renovation1.jpg
│       ├── painting.jpg
│       └── tiles.jpg
└── README.md             # Deze file
```

---

## 🚀 Hoe de Website Te Gebruiken

### 1. **Website Lokaal Openen**
- Download alle bestanden
- Open `index.html` in je browser (Chrome, Firefox, Safari, Edge)
- De website werkt volledig offline

### 2. **Website Online Zetten**
Je kunt de website op verschillende manieren online zetten:

#### **Optie A: Gratis Hosting (Aanbevolen)**
- **Netlify**: Sleep & drop de `kaso-website` folder
- **Vercel**: Upload naar GitHub en deploy via Vercel
- **GitHub Pages**: Upload naar GitHub repository
- **000webhost**: Gratis PHP hosting

#### **Optie B: Betaald Hosting**
- **Bluehost**, **Hostinger**, **GoDaddy**: Standaard webhosts
- Upload via FTP de bestanden naar je server

#### **Optie C: Eigen Server**
```bash
# Zet alles in /var/www/html/ op je server
# Zorg dat je web server (Apache/Nginx) is ingesteld
```

---

## ⚙️ Aanpassingen Maken

### **Logo Vervangen**
- Vervang `assets/images/logo.png` met je eigen logo
- Zorg dat de afmeting ~200px breed is

### **Foto's Vervangen**
- Vervang de foto's in `assets/images/` met je eigen afbeeldingen
- Bestandsnamen kunnen hetzelfde blijven
- Gebruikte foto's:
  - `hero.jpg` - Grote foto op homepage
  - `bathroom1.jpg` - Badkamer project
  - `kitchen1.jpg` - Keuken project
  - `renovation1.jpg` - Volledige renovatie
  - `painting.jpg` - Schilderwerk
  - `tiles.jpg` - Tegelwerk

### **Tekst Aanpassen**
Open de HTML files met een teksteditor (Notepad++, VS Code) en wijzig:
- Bedrijfsnaam
- Beschrijvingen
- Diensten
- Contactgegevens

### **Kleuren Aanpassen**
In `styles.css` kun je de kleuren aanpassen:

```css
:root {
    --primary-color: #FF7A3D;      /* Oranje (KASO kleur) */
    --secondary-color: #333333;    /* Donkergrijs */
    --accent-color: #F5F5F5;       /* Lichtgrijs */
}
```

---

## 📱 Responsieve Design

De website werkt perfect op:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobiel (< 768px)
- ✅ Hamburger menu op mobiel

---

## 🎯 Pagina's Overzicht

### **index.html** - Homepage
- Hero section met call-to-action
- Introductie bedrijf
- 6 Diensten preview
- Waarom KASO section
- Call to action

### **diensten.html** - Diensten Pagina
- Volledige beschrijving van elk service
- Features van elke dienst
- Detailleerde informatie

### **portfolio.html** - Portfolio/Galerij
- 6 projecten in galerij
- Hover effecten
- Klantgetuigenissen/Reviews

### **over.html** - Over Ons
- Bedrijfsgeschiedenis
- Missie & Waarden
- Teaminfo
- Statistieken

### **contact.html** - Contact & Formulier
- Contactformulier (werkend)
- Contactgegevens display
- Veelgestelde vragen (FAQ)
- Sociale media links

---

## 🛠️ JavaScript Functionaliteit

### Ingevoerde Features:
1. **Hamburger Menu** - Mobiel responsief menu
2. **Contact Formulier** - Validatie & feedback
3. **Smooth Scrolling** - Vloeiende pagina navigatie
4. **Fade In Animaties** - Elementen verschijnen bij scroll
5. **Counter Animaties** - Getallen animeren bij statistieken
6. **Active Navigation** - Highlight huidige pagina
7. **Form Validation** - Email & velden validatie

---

## 📧 Contact Formulier Instellen

### **Optie 1: Eenvoudig (Huidige)**
Het formulier toont succes/error berichten maar verzendt niet automatisch.

### **Optie 2: Met Email (Aanbevolen)**
Voeg een backend service toe:

#### **Formspree (Gratis & Makkelijk)**
1. Ga naar https://formspree.io/
2. Maak account aan
3. Voeg deze code toe in `script.js`:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message
    })
})
.then(response => showFormMessage('Bericht verzonden!', 'success'))
.catch(error => showFormMessage('Fout: ' + error, 'error'));
```

#### **Alternatief: EmailJS**
Soortgelijk systeem als Formspree. Gemakkelijk in te stellen.

---

## 🔍 SEO Optimalisatie

Voor betere vindbaarheid in Google:

1. **Meta Beschrijving** - Wijzig in de `<head>` van elke pagina
2. **Keywords** - Voeg toe in meta tags
3. **Alt Tekst** - Voeg beschrijving toe aan `<img>` tags
4. **Sitemap** - Maak `sitemap.xml` aan
5. **robots.txt** - Maak bestand aan

---

## 🎨 Design Notes

- **Kleurenschema**: Oranje (#FF7A3D) + Donkergrijs (#333333)
- **Font**: Segoe UI, Tahoma, Geneva, Verdana
- **Iconen**: Emoji's gebruikt voor universele ondersteuning
- **Spacing**: Consistent 80px section padding
- **Breakpoints**: 768px (tablet), 480px (mobiel)

---

## 📊 Performance Tips

1. **Afbeeldingen optimaliseren**
   - Comprimeer via TinyPNG of ImageOptim
   - Gebruik WebP format voor sneller laden

2. **Caching**
   - Zet browser caching in op je server
   - Minify CSS en JavaScript

3. **CDN**
   - Gebruik CloudFlare voor sneller laden
   - Geen kosten nodig

---

## 🐛 Troubleshooting

### **Foto's tonen niet**
- Controleer bestandsnamen (case-sensitive!)
- Zorg dat afbeeldingen in `assets/images/` map staan

### **Formulier werkt niet**
- Open console (F12) en check voor errors
- Controleer netwerkverbinding

### **Menu niet responsive**
- Wis browser cache (Ctrl+Shift+Delete)
- Test in incognito/private tab

### **Pagina laadt traag**
- Comprimeer afbeeldingen
- Controleer bestandsgroottes

---

## 📚 Nuttige Resources

- **HTML Tutorial**: https://www.w3schools.com/html/
- **CSS Tutorial**: https://www.w3schools.com/css/
- **JavaScript Tutorial**: https://www.w3schools.com/js/
- **Formspree**: https://formspree.io/
- **TinyPNG**: https://tinypng.com/
- **Netlify Deploy**: https://www.netlify.com/

---

## 📞 Contactgegevens Bijwerken

**Alle contactgegevens staan op deze plekken:**

1. `index.html` - Footer
2. `diensten.html` - Footer
3. `portfolio.html` - Footer
4. `over.html` - Footer
5. `contact.html` - Contact info box

**Wijzigen:**
- Email: `kasorenovatie@gmail.com`
- GSM: `0465777341`
- BTW: `1008464062`
- Verantwoordelijke: `Jamal Alhasan`

---

## ✨ Aanvullende Ideeën

- 🎥 Video toevoegen van projecten
- ⭐ Google Reviews integreren
- 📅 Online afspraak systeem
- 💬 Live chat support
- 🛒 Online shop voor services
- 📱 WhatsApp integratie
- 🗺️ Google Maps embed

---

## 📝 Licentie & Disclaimer

Deze website is speciaal gemaakt voor **KASO Renovatie** in Antwerpen.
- Vrij te gebruiken en aan te passen
- Zorg voor backups voordat je wijzigingen maakt
- Test altijd op test-site voor aanpassingen

---

## 🎉 Klaar!

Je professionele website is klaar! 

**Volgende stappen:**
1. Pas je foto's in (`assets/images/`)
2. Update contactgegevens indien nodig
3. Upload naar hosting service
4. Test op alle apparaten
5. Maak bekend op sociale media

---

**Vragen?** Contacteer ons: kasorenovatie@gmail.com | 0465777341

**Happy renovating! 🏗️**
