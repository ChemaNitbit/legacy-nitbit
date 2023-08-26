export const calculateReceiptTime = (sentDate: Date): string => {
  const segundosTranscurridos = Math.floor(
    (Date.now() - sentDate.getTime()) / 1000,
  );

  if (segundosTranscurridos < 60) {
    return `hace ${segundosTranscurridos} segundos`;
  } else if (segundosTranscurridos < 3600) {
    const minutes = Math.floor(segundosTranscurridos / 60);
    return `hace ${minutes} minutos`;
  } else if (segundosTranscurridos < 86400) {
    const hours = Math.floor(segundosTranscurridos / 3600);
    return `hace ${hours} horas`;
  } else {
    const days = Math.floor(segundosTranscurridos / 86400);
    return `hace ${days} días`;
  }
};
