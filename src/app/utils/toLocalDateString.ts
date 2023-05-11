function toLocalDateString(dateString: string) {
  const date = new Date(dateString); // '2005-08-02'
  const [year, month, day] = date
    .toLocaleDateString('fa-IR-u-nu-latn', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
    .split('/')
    .map((x) => +x);
}
