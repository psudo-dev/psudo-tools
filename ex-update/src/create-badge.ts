export function createBadge(
	exerciseFolderName: string,
	exerciseCapitalized: string,
): string {
	const exerciseLowerCase = exerciseCapitalized.toLowerCase();
	console.log(`\n🎨 creating ${exerciseLowerCase} badge`);

	return `[![Exercism - ${exerciseCapitalized}](https://img.shields.io/badge/TypeScript-${encodeURIComponent(exerciseCapitalized)}-009CAB?style=flat-square&logo=exercism)](./typescript/${exerciseFolderName}/README.md)`;
}
