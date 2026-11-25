/** Default maximum length of a meta description, including any trailing ellipsis. */
const META_DESCRIPTION_MAX_LENGTH = 160;

const ELLIPSIS = "…";
/** Highest Unicode code point, U+10FFFF. */
const MAX_CODE_POINT = 0x10ffff;

/** Named entities decoded by `toPlainText`. Anything else is left as written. */
const NAMED_ENTITIES: Record<string, string> = {
	nbsp: " ",
	amp: "&",
	lt: "<",
	gt: ">",
	quot: '"',
	apos: "'",
};

/**
 * Decodes a numeric character reference, returning the original text when the
 * code point is out of range so a malformed entity never throws.
 */
const decodeCodePoint = (codePoint: number, original: string): string => {
	if (!Number.isFinite(codePoint) || codePoint < 0 || codePoint > MAX_CODE_POINT) {
		return original;
	}
	return String.fromCodePoint(codePoint);
};

/**
 * Decodes HTML entities in a single pass, so "&amp;lt;" becomes the literal
 * text "&lt;" rather than being decoded twice into "<".
 */
const decodeEntities = (text: string): string =>
	text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity: string) => {
		const lower = entity.toLowerCase();
		if (lower.startsWith("#x")) {
			return decodeCodePoint(Number.parseInt(lower.slice(2), 16), match);
		}
		if (lower.startsWith("#")) {
			return decodeCodePoint(Number.parseInt(lower.slice(1), 10), match);
		}
		return NAMED_ENTITIES[lower] ?? match;
	});

/**
 * Converts text that may contain HTML into a single line of plain text suitable
 * for titles and meta tags. SSR-safe: string operations only, no DOM APIs.
 *
 * - Removes `<script>` and `<style>` blocks together with their content.
 * - Replaces every other tag with a space so adjacent words do not run together.
 * - Decodes common named and numeric HTML entities once.
 * - Collapses all whitespace to single spaces and trims the result.
 */
const toPlainText = (html: string | null | undefined): string => {
	if (!html) return "";
	const withoutBlocks = html
		.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, " ")
		.replace(/<style\b[^>]*>[\s\S]*?<\/style\s*>/gi, " ")
		.replace(/<!--[\s\S]*?-->/g, " ");
	const withoutTags = withoutBlocks.replace(/<\/?[a-z][^>]*>/gi, " ");
	return decodeEntities(withoutTags).replace(/\s+/g, " ").trim();
};

/**
 * Produces a meta description: converts the input to plain text and, when it
 * exceeds `maxLength`, cuts it at the last word boundary and appends an
 * ellipsis. The result, ellipsis included, never exceeds `maxLength`.
 */
const toMetaDescription = (
	html: string | null | undefined,
	maxLength: number = META_DESCRIPTION_MAX_LENGTH
): string => {
	const text = toPlainText(html);
	if (text.length <= maxLength) return text;

	const limit = Math.max(maxLength - ELLIPSIS.length, 0);
	const slice = text.slice(0, limit);
	// Prefer a word boundary; fall back to a hard cut for a single long word.
	const boundary = text.charAt(limit) === " " ? limit : slice.lastIndexOf(" ");
	const cut = boundary > 0 ? slice.slice(0, boundary) : slice;
	const trimmed = cut.replace(/[\s.,;:!?\-–—…]+$/u, "");

	return trimmed ? `${trimmed}${ELLIPSIS}` : "";
};

/** Turns a site-relative path or absolute URL into an absolute URL on `siteUrl`. */
const toAbsoluteUrl = (siteUrl: string, pathOrUrl: string): string => {
	if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
	return `${siteUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
};

/** Helpers that turn rich text into plain text for titles and meta descriptions. */
const seoUtils = {
	META_DESCRIPTION_MAX_LENGTH,
	toPlainText,
	toMetaDescription,
	toAbsoluteUrl,
};

export default seoUtils;
