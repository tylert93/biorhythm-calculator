import dayjs from 'dayjs';

export const calculateBiorhythms = (birthDate, targetDate) => {
  return {
    physical: calculateBiorhythm(birthDate, targetDate, 23),
    emotional: calculateBiorhythm(birthDate, targetDate, 28),
    intellectual: calculateBiorhythm(birthDate, targetDate, 33),
  };
};

const calculateBiorhythm = (birthDate, targetDate, divider) => {
  const birthDay = dayjs(birthDate);
  const targetDay = dayjs(targetDate);
  const diff = targetDay.diff(birthDay, 'day');
  return Math.sin((2 * Math.PI * diff) / divider);
};

export const calculateBiorhythmSeries = (birthDate, centralDate, range) => {
  const series = [];
  const centralDay = dayjs(centralDate);

  for (let diff = -range; diff <= range; diff++) {
    const targetDay = centralDay.add(diff, 'day');
    const biorhythms = calculateBiorhythms(birthDate, targetDay);
    series.push({ date: targetDay.format('D MMM'), ...biorhythms });
  }

  return series;
};
