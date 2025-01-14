import { isArray, has } from "lodash";

function parse(rules: string[], { url, size }: any) {
	if (!url) {
		return "";
	}

	if (!url.includes("oss-cn")) {
		return url;
	}

	let h = 0;
	let w = 0;

	if (isArray(size)) {
		h = size[0];
		w = size[1];
	} else if (has(size, "h")) {
		h = size.h;
		w = size.w;

		if (size.m) {
			rules.push(`m_${size.m}`);
		}
	} else {
		h = w = size;
	}

	url += url.includes("?") ? "&" : "?";

	if (h) {
		rules.push(`h_${h}`);
	}

	if (w) {
		rules.push(`w_${w}`);
	}

	return `${url}${rules.join(",")}`;
}

type Size = number | number[] | { h?: number; w?: number; m?: string };

export function videoPoster(url: string, size: Size) {
	return parse(["x-oss-process=video/snapshot,t_1000,f_jpg,m_fast"], { url, size });
}

export function resizeImage(url: string, size: Size) {
	return parse(["x-oss-process=image/resize"], { url, size });
}
