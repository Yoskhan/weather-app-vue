export const convertDayHRtoENG = function(day) {
  if(day == "pon") return "Mon"
  if(day == "uto") return "Tue"
  if(day == "sri") return "Wed"
  if(day == "čet") return "Thu"
  if(day == "pet") return "Fri"
  if(day == "sub") return "Sat"
  if(day == "ned") return "Sun"
  return day;
};
