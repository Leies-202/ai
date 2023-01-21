const trueSet = 'ァアィイゥウェエォオカヵガキギクグケヶゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴｧｨｩｪｫヵヶｯｬｭｮヮー';
const falseSet = 'ょゎァアィイゥウェエォオカヵガキギクグケヶゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴｧｨｩｪｫヵヶｯｬｭｮ';

export function kewyegenabo(text: string | null) {
	if (text == null) return text;
	return [...text].map((c) => {
		const idx = trueSet.indexOf(c);
		if (idx >= 0) {
			return falseSet[idx];
		} else {
			return c;
		}
	}).join('');
}
