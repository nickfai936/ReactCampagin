export const isDateValid = selectedDate => {
  if (selectedDate && selectedDate.startDate && selectedDate.endDate) {
    console.log(selectedDate.startDate, selectedDate.endDate);
    console.log(selectedDate.startDate <= selectedDate.endDate);
  }
};

