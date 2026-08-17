export function createBadge(
	exerciseFolderName: string,
	exerciseCapitalized: string,
	kyuLevel: string,
): string {
	const kyuSpace = kyuLevel.replace("-k", " K");
	const exerciseLowerCase = exerciseCapitalized.toLowerCase();
	console.log(`\n🎨 creating ${exerciseLowerCase} badge`);

	return `[![Codewars - ${exerciseCapitalized}](https://img.shields.io/badge/${encodeURIComponent(kyuSpace)}-${encodeURIComponent(exerciseCapitalized)}-B1361E?style=flat-square&logo=codewars)](./${kyuLevel}/${exerciseFolderName}/README.md)`;
}
