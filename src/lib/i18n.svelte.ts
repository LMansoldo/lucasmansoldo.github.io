import contentData from './content/content.json';
import type { Content, LangContent } from './types';

const DATA = contentData as Content;

function detectLang(): string {
	if (typeof window === 'undefined') return DATA.meta.defaultLang;
	const saved = localStorage.getItem('lang');
	if (saved && DATA.meta.langs.includes(saved)) return saved;
	const nav = (navigator.language || 'en').toLowerCase();
	if (nav.startsWith('pt')) return 'pt';
	return DATA.meta.defaultLang;
}

let _lang = $state(DATA.meta.defaultLang);
let _initialized = false;

export function initLang(): void {
	if (_initialized) return;
	_initialized = true;
	_lang = detectLang();
}

export function getLang(): string {
	return _lang;
}

export function content(): LangContent {
	return DATA[_lang as keyof Content] as LangContent;
}

export function toggleLang(): void {
	_lang = _lang === 'en' ? 'pt' : 'en';
	if (typeof window !== 'undefined') {
		localStorage.setItem('lang', _lang);
	}
}
