export default function (start: Date, end: Date) {
	if (!end) return `${formatDate(start)} - prezent`;

	const startDate = new Date(start);
	const endDate = new Date(end);

	const year = endDate.getFullYear() - startDate.getFullYear();
	const month = endDate.getMonth() - startDate.getMonth();

	return `${formatDate(start)} - ${formatDate(end)} : ${
		year > 0 ? year + "ani" : ""
	}  ${month} luni`;
}
