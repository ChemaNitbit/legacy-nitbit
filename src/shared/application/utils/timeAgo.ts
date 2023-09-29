function formatDate(date: Date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function timeAgo(dateISOString: string) {
  const now: any = new Date();
  const date: any = new Date(dateISOString);
  const timeDifference: number = now - date;

  if (timeDifference < 5 * 60 * 1000) {
    return 'Hace poco';
  } else if (timeDifference < 60 * 60 * 1000) {
    const minutesAgo = Math.floor(timeDifference / (60 * 1000));
    return `Hace ${minutesAgo} minutos`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
    return `Hace ${hoursAgo} ${hoursAgo > 1 ? 'horas' : 'hora'}`;
  } else if (timeDifference < 2 * 24 * 60 * 60 * 1000) {
    return 'Ayer';
  } else if (date.getDay() === now.getDay()) {
    const daysOfWeek = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];
    return daysOfWeek[date.getDay()];
  } else {
    return formatDate(date);
  }
}
