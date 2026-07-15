export interface ContentMeta {
	defaultLang: string;
	langs: string[];
}

export interface HtmlContent {
	lang: string;
	title: string;
	description: string;
}

export interface NavContent {
	work: string;
	experience: string;
	stack: string;
	contact: string;
}

export interface HeroContent {
	eyebrow: string;
	headline_a: string;
	headline_b: string;
	lede: string;
	cta_primary: string;
	cta_secondary: string;
	hint: string;
}

export interface MetricItem {
	value: string;
	unit: string;
	label: string;
	note: string;
}

export interface MetricsContent {
	label: string;
	items: MetricItem[];
}

export interface WorkItem {
	featured?: boolean;
	kind: string;
	name: string;
	org: string;
	year: string;
	summary: string;
	detail: string;
	tags: string[];
}

export interface WorkContent {
	eyebrow: string;
	title: string;
	lede: string;
	items: WorkItem[];
}

export interface Job {
	role: string;
	company: string;
	context: string;
	period: string;
	summary: string;
	bullets: string[];
}

export interface ExperienceContent {
	eyebrow: string;
	title: string;
	items: Job[];
}

export interface StackGroup {
	name: string;
	items: string[];
}

export interface StackContent {
	eyebrow: string;
	title: string;
	groups: StackGroup[];
}

export interface ContactLink {
	label: string;
	href: string;
}

export interface ContactContent {
	eyebrow: string;
	title: string;
	lede: string;
	email_label: string;
	email: string;
	whatsapp: { number: string; aria: string };
	links: ContactLink[];
}

export interface FooterContent {
	note: string;
	location: string;
}

export interface UIContent {
	langToggle: string;
	langToggleAria: string;
}

export interface LangContent {
	html: HtmlContent;
	nav: NavContent;
	hero: HeroContent;
	metrics: MetricsContent;
	work: WorkContent;
	experience: ExperienceContent;
	stack: StackContent;
	contact: ContactContent;
	footer: FooterContent;
	ui: UIContent;
}

export interface Content {
	meta: ContentMeta;
	en: LangContent;
	pt: LangContent;
}

export interface LogoEntry {
	p: string;
	h: string;
	t: string;
}

export type Logos = Record<string, LogoEntry>;
