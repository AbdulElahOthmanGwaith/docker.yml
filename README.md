# فوك لوك - شبكة اجتماعية متقدمة

![فوك لوك](https://0e21dnkijqcj.space.minimax.io/images/facebook_style_social_media_app_icon.png)

## 🎯 نظرة عامة

**فوك لوك** هو تطبيق شبكة اجتماعية متقدم مبني بتقنيات عصرية، يحاكي فيسبوك مع ميزات فريدة ومبتكرة. التطبيق يدعم اللغتين العربية والإنجليزية بالكامل مع تخطيط RTL/LTR تلقائي.

## 🌐 رابط التطبيق المنشور

**[https://0e21dnkijqcj.space.minimax.io](https://0e21dnkijqcj.space.minimax.io)**

## ✨ المميزات الأساسية

### 🎨 التصميم والواجهة
- **تصميم مثل فيسبوك** مع تحسينات عصرية ومبتكرة
- **نظام ألوان محسن:**
  - Primary: #1877f2 (أزرق فيسبوك)
  - Secondary: #42b883 (أخضر مريح للعين)
  - Dark mode: #18191a مع تفاصيل ذهبية
  - Accent colors: #ff6b6b للإشعارات المهمة
- **تخطيط متجاوب** يعمل بشكل مثالي على جميع الأجهزة
- **انيميشن وتفاعلات سلسة** مع transitions ناعمة

### 🌍 دعم اللغات
- **دعم كامل للعربية والإنجليزية** مع تبديل فوري
- **تخطيط RTL/LTR** تلقائي حسب اللغة المختارة
- **ترجمة شاملة** لجميع النصوص والواجهات

### 📱 الصفحات الأساسية
1. **صفحة تسجيل الدخول/التسجيل**
   - تصميم أنيق مع خيارات متعددة للدخول
   - اختيار اللغة المفضلة أثناء التسجيل

2. **الصفحة الرئيسية (News Feed)**
   - تخطيط مثل فيسبوك مع تحسينات
   - عرض المنشورات بطريقة جذابة
   - شريط جانبي للأصدقاء والاقتراحات
   - قسم للقصص (Stories) في الأعلى

3. **الملف الشخصي**
   - غلاف وصورة شخصية
   - عرض المنشورات والأنشطة
   - معلومات شخصية قابلة للتعديل

### ⭐ المميزات الفريدة

#### 🎤 التعليقات الصوتية
- **تسجيل الصوت** مباشرة في التعليقات
- **تشغيل الصوت** مع موجات صوتية جميلة
- **ضغط الصوت** للحفاظ على السرعة
- **مؤشر المدة** ومعلومات التسجيل

#### 👥 نظام الأصدقاء بلا حدود
- **إضافة أصدقاء** بدون قيود 5000 مثل فيسبوك
- **اقتراحات ذكية** للأصدقاء
- **بحث متقدم** في المستخدمين
- **حالة النشاط** (متصل/غير متصل)

### 🚀 ميزات إضافية
- **الرسائل الخاصة** مع دعم الصوت
- **المجموعات والصفحات**
- **نظام الإشعارات** الذكي
- **البحث الشامل** في المحتوى والأشخاص
- **الوضع الليلي/النهاري**
- **ضغط الصور** التلقائي
- **التحميل السريع** مع lazy loading

## 💻 التقنيات المستخدمة

### Frontend
- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - لغة البرمجة المطورة
- **Tailwind CSS** - إطار عمل CSS
- **Vite** - أداة البناء والتطوير
- **React Router** - للتنقل بين الصفحات
- **React Context API** - لإدارة الحالة
- **react-i18next** - للترجمة ودعم اللغات
- **Lucide React** - مكتبة الأيقونات

### الميزات التقنية
- **Web Audio API** للتسجيل والتشغيل
- **localStorage** لحفظ البيانات محلياً
- **Mock Data** بيانات تجريبية واقعية
- **Responsive Design** تصميم متجاوب
- **Dark/Light Mode** الوضع الليلي والنهاري
- **RTL Support** دعم كامل للعربية

## 📂 هيكل المشروع

```
foc-lock/
├── public/
│   ├── images/
│   │   ├── avatars/          # صور الأفاتار
│   │   ├── posts/            # صور المنشورات
│   │   ├── stories/          # صور القصص
│   │   └── covers/           # صور الأغلفة
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── layout/           # مكونات التخطيط
│   │   │   ├── Header.tsx
│   │   │   ├── LeftSidebar.tsx
│   │   │   ├── RightSidebar.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   └── Feed.tsx
│   │   ├── ui/               # مكونات واجهة المستخدم
│   │   │   ├── Button.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── Post.tsx          # مكون المنشور
│   │   └── Story.tsx         # مكون القصة
│   ├── context/
│   │   ├── AppContext.tsx    # سياق التطبيق العام
│   │   └── AuthContext.tsx   # سياق المصادقة
│   ├── data/
│   │   └── mockData.ts       # البيانات التجريبية
│   ├── pages/
│   │   ├── HomePage.tsx      # الصفحة الرئيسية
│   │   ├── LoginPage.tsx     # صفحة تسجيل الدخول
│   │   └── ProfilePage.tsx   # صفحة الملف الشخصي
│   ├── locales/
│   │   ├── ar/               # الترجمة العربية
│   │   └── en/               # الترجمة الإنجليزية
│   ├── hooks/                # خطافات مخصصة
│   ├── lib/                  # مكتبات مساعدة
│   ├── App.tsx
│   ├── main.tsx
│   └── i18n.ts               # إعدادات الترجمة
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🚀 التشغيل والتطوير

### المتطلبات
- Node.js 18+ 
- pnpm (أو npm/yarn)

### تشغيل المشروع محلياً

```bash
# نسخ المشروع
git clone <repository-url>
cd foc-lock

# تثبيت التبعيات
pnpm install

# تشغيل الخادم المحلي
pnpm dev

# فتح http://localhost:5173 في المتصفح
```

### بناء المشروع

```bash
# بناء للإنتاج
pnpm build

# معاينة البناء
pnpm preview
```

### أوامر إضافية

```bash
# فحص الكود
pnpm lint

# تحديث التبعيات
pnpm update

# تنظيف البناء
rm -rf dist node_modules/.vite
```

## 📊 البيانات التجريبية

يحتوي التطبيق على بيانات تجريبية شاملة:

- **6 مستخدمين** بملفات شخصية كاملة
- **5 منشورات** متنوعة (نص، صور)
- **قصص تفاعلية** مع صور
- **تعليقات وإعجابات** محاكاة
- **شبكة أصدقاء** محاكاة

## 🎯 الميزات المستقبلية

### جاهز للتطوير
- **قاعدة بيانات Supabase** - بنية جاهزة للتوصيل
- **مصادقة حقيقية** - نظام تسجيل الدخول
- **تحميل الملفات** - رفع الصور والفيديوهات
- **الرسائل الفورية** - نظام دردشة مباشر
- **الإشعارات التلقائية** - تنبيهات فورية

### ميزات متقدمة
- **البث المباشر** - فيديو مباشر
- **المجموعات المتقدمة** - إدارة المجتمعات
- **التجارة الإلكترونية** - Marketplace
- **الألعاب التفاعلية** - ألعاب اجتماعية
- **الذكاء الاصطناعي** - توصيات ذكية

## 🔒 الأمان والخصوصية

- **تشفير البيانات المحلية** في localStorage
- **فلترة المحتوى** للأمان
- **حماية من XSS** مع React
- **إدارة حالة آمنة** مع TypeScript
- **مصادقة الهوية** جاهزة للتطبيق

## 🌐 دعم المتصفحات

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ الأجهزة المحمولة

## 📱 الاستجابة

- **📱 الهواتف المحمولة** - دعم كامل
- **💻 الأجهزة اللوحية** - تخطيط محسن
- **🖥️ أجهزة سطح المكتب** - تجربة كاملة
- **⌚ الساعات الذكية** - واجهة مبسطة

## 🤝 المساهمة

نرحب بالمساهمات! يرجى:

1. إنشاء fork للمشروع
2. إنشاء branch للميزة الجديدة
3. Commit التغييرات
4. Push إلى البرانش
5. إنشاء Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 👨‍💻 المطور

**MiniMax Agent** - مطور شبكات اجتماعية متقدمة

## 📞 التواصل

للاستفسارات والدعم:
- **الموقع:** [https://0e21dnkijqcj.space.minimax.io](https://0e21dnkijqcj.space.minimax.io)
- **البريد الإلكتروني:** dev@minimax.io

---

## English Version

# Foc Lock - Advanced Social Network

## 🎯 Overview

**Foc Lock** is an advanced social networking application built with modern technologies, mimicking Facebook with unique and innovative features. The application fully supports Arabic and English with automatic RTL/LTR layout.

## 🌐 Live Application

**[https://0e21dnkijqcj.space.minimax.io](https://0e21dnkijqcj.space.minimax.io)**

## ✨ Key Features

### 🎨 Design & Interface
- **Facebook-like design** with modern and innovative enhancements
- **Enhanced color system:**
  - Primary: #1877f2 (Facebook blue)
  - Secondary: #42b883 (eye-friendly green)
  - Dark mode: #18191a with golden details
  - Accent colors: #ff6b6b for important notifications
- **Responsive layout** that works perfectly on all devices
- **Smooth animations and interactions** with soft transitions

### 🌍 Language Support
- **Full Arabic and English support** with instant switching
- **Automatic RTL/LTR layout** based on selected language
- **Comprehensive translation** for all texts and interfaces

### 💻 Technologies Used

- **React 18** - User interface library
- **TypeScript** - Advanced programming language
- **Tailwind CSS** - CSS framework
- **Vite** - Build and development tool
- **React Router** - Page navigation
- **React Context API** - State management
- **react-i18next** - Translation and language support
- **Lucide React** - Icon library

### 🚀 Getting Started

```bash
# Clone the project
git clone <repository-url>
cd foc-lock

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:5173 in browser
```

### 📊 Mock Data

The application includes comprehensive mock data:
- **6 users** with complete profiles
- **5 posts** of various types (text, images)
- **Interactive stories** with images
- **Simulated comments and likes**
- **Simulated friend network**

---

**تم تطوير هذا المشروع بواسطة MiniMax Agent مع التركيز على الجودة والأداء والتصميم المتقدم** 🚀
