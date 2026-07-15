const esc = (s: string): string =>
	String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

export function fmt(s: string): string {
	return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
}
