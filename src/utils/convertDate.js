export function convertDate(dateStr) {
	const dateArr = dateStr.split('/');
	const year = dateArr[2];
	const month = dateArr[0];
	const day = dateArr[1];
	const dateObj = new Date(year, month - 1, day); // Note: month is zero-indexed
	const formattedDate = dateObj.toISOString().slice(0, 10);

	return formattedDate;
}
