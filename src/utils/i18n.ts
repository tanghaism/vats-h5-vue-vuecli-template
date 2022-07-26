import { createI18n } from 'vue-i18n';
import { Locale } from 'vant';
import { LANG } from '@/constants/local';
import { Local } from '@/utils/storage';

const langMap: Record<string, Record<'vant', string>> = {
  zh: {
    vant: 'zh-CN',
  },
  ja: {
    vant: 'ja-JP',
  },
  en: {
    vant: 'en-US',
  },
};

// 初始化
export function initI18n() {
  const lang = Local.get(LANG) ?? 'zh';
  return createI18n({
    locale: lang,
    fallbackLocale: 'zh',
    messages: {
      [lang]: require(`../locales/${lang}.ts`).default,
    },
  });
}

// 异步加载语言包的方法
export async function loadMessage(lang: string) {
  const arr = [
    import(
      /* webpackInclude: /(zh|ja|en)\.ts/ */ /* webpackChunkName: "locale-[request]" */ `@/locales/${lang}.ts`
    ),
    import(
      /* webpackInclude: /(ja-JP|zh-CN|en-US)\.js$/ */ /* webpackChunkName: "locale-[request]" */ `vant/lib/locale/lang/${langMap[lang].vant}`
    ),
  ];
  const [messages, vantMessages] = await Promise.all(arr);
  Locale.use(langMap[lang].vant, vantMessages.default);
  return {
    messages,
  };
}
